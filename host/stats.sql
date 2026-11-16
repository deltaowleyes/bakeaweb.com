-- Visitor stats for every site (plans/visitor-stats-for-every-site.md). Applied to Supabase 2026-11-16.
-- The bake-host Worker calls count_view() once per counted page view. Only totals are kept: no IPs, no cookies.
-- Days are Ontario days (America/Toronto).

create table if not exists public.site_views_daily (
  domain text not null, pagename text not null, day date not null, path text not null,
  views integer not null default 0,
  primary key (domain, pagename, day, path)
);
create table if not exists public.site_sources_daily (
  domain text not null, pagename text not null, day date not null,
  kind text not null check (kind in ('referrer', 'country', 'device')), value text not null,
  views integer not null default 0,
  primary key (domain, pagename, day, kind, value)
);
alter table public.site_views_daily enable row level security;
alter table public.site_sources_daily enable row level security;
drop policy if exists "admins read views" on public.site_views_daily;
create policy "admins read views" on public.site_views_daily for select to authenticated using (is_rezsite_admin());
drop policy if exists "admins read sources" on public.site_sources_daily;
create policy "admins read sources" on public.site_sources_daily for select to authenticated using (is_rezsite_admin());
revoke insert, update, delete on public.site_views_daily, public.site_sources_daily from anon, authenticated;

-- Called by the Worker with the count key (a Cloudflare secret, BAKE_COUNT_KEY). Only the key's SHA-256 is stored here.
create or replace function public.count_view(p_key text, p_domain text, p_pagename text, p_path text,
  p_referrer text default '', p_country text default '', p_device text default '')
returns boolean language plpgsql security definer set search_path = public, extensions as $$
declare d date := (now() at time zone 'America/Toronto')::date;
begin
  if encode(extensions.digest(coalesce(p_key, ''), 'sha256'), 'hex') <> '38d376d3af8ddbf8a523fd0e7ac51cffda3e35f663d753ed52e275cd3f3905b5' then return false; end if;
  if not exists (select 1 from published_sites where domain = p_domain and pagename = p_pagename and status = 'live') then return false; end if;
  insert into site_views_daily (domain, pagename, day, path, views) values (p_domain, p_pagename, d, left(coalesce(nullif(p_path, ''), '/'), 200), 1)
    on conflict (domain, pagename, day, path) do update set views = site_views_daily.views + 1;
  insert into site_sources_daily (domain, pagename, day, kind, value, views)
    select p_domain, p_pagename, d, k, left(v, 100), 1 from (values ('referrer', coalesce(nullif(p_referrer, ''), 'direct')),
      ('country', coalesce(nullif(p_country, ''), '??')), ('device', coalesce(nullif(p_device, ''), 'computer'))) s(k, v)
    on conflict (domain, pagename, day, kind, value) do update set views = site_sources_daily.views + 1;
  return true;
end $$;
revoke all on function public.count_view(text, text, text, text, text, text, text) from public;
grant execute on function public.count_view(text, text, text, text, text, text, text) to anon, authenticated;

-- One row per site for BAKER Admin: today, 7 and 30 days, and the 3-month monthly average that sets the badge tier (VISION.md §5).
create or replace function public.site_view_summary()
returns table (domain text, pagename text, today bigint, d7 bigint, d30 bigint, month_avg bigint, first_day date, tier text)
language sql stable security definer set search_path = public as $$
  with t as (select (now() at time zone 'America/Toronto')::date as d)
  select v.domain, v.pagename,
    sum(views) filter (where day = t.d), sum(views) filter (where day > t.d - 7), sum(views) filter (where day > t.d - 30),
    round(sum(views) filter (where day > t.d - 90) / 3.0)::bigint, min(day),
    case when round(sum(views) filter (where day > t.d - 90) / 3.0) <= 2000 then '$5 a month'
         when round(sum(views) filter (where day > t.d - 90) / 3.0) <= 10000 then '$15 a month'
         when round(sum(views) filter (where day > t.d - 90) / 3.0) <= 50000 then '$40 a month' else 'Quoted' end
  from site_views_daily v, t where is_rezsite_admin() group by v.domain, v.pagename
$$;
revoke all on function public.site_view_summary() from public, anon;
grant execute on function public.site_view_summary() to authenticated;

-- Detail for one site: views per day for 30 days, top pages, and top sources (30 days).
create or replace function public.site_view_detail(p_domain text, p_pagename text)
returns json language sql stable security definer set search_path = public as $$
  with t as (select (now() at time zone 'America/Toronto')::date as d)
  select case when not is_rezsite_admin() then null else json_build_object(
    'days', (select json_agg(json_build_object('day', g::date, 'views', coalesce((select sum(views) from site_views_daily
               where domain = p_domain and pagename = p_pagename and day = g::date), 0)) order by g)
             from t, generate_series(t.d - 29, t.d, interval '1 day') g),
    'pages', (select json_agg(x order by x.views desc) from (select path, sum(views) views from site_views_daily, t
               where domain = p_domain and pagename = p_pagename and day > t.d - 30 group by path order by 2 desc limit 10) x),
    'sources', (select json_agg(x order by x.kind, x.views desc) from (select kind, value, views from (select kind, value, sum(views) views,
               row_number() over (partition by kind order by sum(views) desc) n from site_sources_daily, t
               where domain = p_domain and pagename = p_pagename and day > t.d - 30 group by kind, value) y where n <= 8) x)
  ) end
$$;
revoke all on function public.site_view_detail(text, text) from public, anon;
grant execute on function public.site_view_detail(text, text) to authenticated;
