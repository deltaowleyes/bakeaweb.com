-- BAKE: pagename accounts (plans/pagename-accounts.md)
-- A login (auth.users) holds accounts; one account = one pagename on one domain = one site.
-- Rules enforced here, not in the browser:
--   * pagename format: 3-12 chars, a-z 0-9 and single hyphens, starts with a letter, no hyphen at the end
--   * reserved words blocked
--   * unique per domain; a deleted or renamed-away pagename is held 90 days before someone else can take it
--   * at most 3 FREE accounts per login (active or forwarding, not paid) on bakedby.me / rezsite.com;
--     accounts with any purchase (paid = true) don't count; one bakedbya.pro (Baker) name per login
--   * nobody can read or change another login's accounts or projects (row-level security)
--   * `paid`, `status` and pagename changes only happen through the functions below (or the server)

create extension if not exists pgcrypto;

-- ---------- reserved pagenames ----------
create table public.reserved_names (
  name text primary key
);
alter table public.reserved_names enable row level security;
-- no policies: only the server and admins (dashboard) can see or change it

insert into public.reserved_names (name) values
 ('abuse'),('account'),('accounts'),('admin'),('administrator'),('amazon'),('api'),('app'),('apple'),('aptn'),
 ('assets'),('auth'),('bake'),('bakeaweb'),('baked'),('bakedby'),('bakedbya'),('bakedbyapro'),('bakedbyme'),('baker'),
 ('bakers'),('bakes'),('billing'),('blog'),('canada'),('cart'),('cdn'),('checkout'),('cloudflare'),('contact'),
 ('cra'),('dashboard'),('delta-owl-eyes'),('deltaowleyes'),('demo'),('docs'),('download'),('downloads'),('email'),('example'),
 ('facebook'),('files'),('ftp'),('github'),('google'),('help'),('images'),('img'),('indigihub'),('info'),
 ('instagram'),('interac'),('legal'),('login'),('logout'),('mail'),('media'),('microsoft'),('news'),('null'),
 ('oauth'),('official'),('pay'),('payment'),('payments'),('paypal'),('policy'),('porkbun'),('privacy'),('register'),
 ('report'),('rezsite'),('root'),('security'),('signin'),('signup'),('smtp'),('staff'),('static'),('status'),
 ('stripe'),('studio'),('supabase'),('support'),('team'),('terms'),('test'),('undefined'),('verified'),('verify'),
 ('www');

-- ---------- roles ----------
create table public.user_roles (
  user_id uuid not null references auth.users (id) on delete cascade,
  role text not null check (role in ('baker', 'admin', 'escrow', 'rezsite_reviewer')),
  granted_at timestamptz not null default now(),
  primary key (user_id, role)
);
alter table public.user_roles enable row level security;
create policy "see own roles" on public.user_roles for select to authenticated
  using (user_id = (select auth.uid()));
-- no insert/update/delete policies: roles are given by an administrator in the dashboard

create function public.has_role(r text) returns boolean
language sql stable security definer set search_path = ''
as $$
  select exists (select 1 from public.user_roles where user_id = auth.uid() and role = r)
$$;

-- ---------- accounts ----------
create table public.accounts (
  id uuid primary key default gen_random_uuid(),
  owner uuid not null default auth.uid() references auth.users (id) on delete cascade,
  domain text not null check (domain in ('bakedby.me', 'rezsite.com', 'bakedbya.pro')),
  pagename text not null check (
    pagename ~ '^[a-z][a-z0-9-]{1,10}[a-z0-9]$' and pagename !~ '--'
  ),
  title text not null default '' check (char_length(title) <= 60),
  description text not null default '' check (char_length(description) <= 160),
  status text not null default 'active' check (status in ('active', 'forwarding', 'deleted')),
  forwards_to uuid references public.accounts (id) on delete set null,
  paid boolean not null default false,
  released boolean not null default false,   -- true once a deleted pagename's 90-day hold is over
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz,
  check ((status = 'forwarding') = (forwards_to is not null)),
  check ((status = 'deleted') = (deleted_at is not null))
);
create unique index accounts_pagename_per_domain on public.accounts (domain, pagename) where not released;
create index accounts_owner on public.accounts (owner);

alter table public.accounts enable row level security;
create policy "see own accounts" on public.accounts for select to authenticated
  using (owner = (select auth.uid()) or public.has_role('admin'));
create policy "create own accounts" on public.accounts for insert to authenticated
  with check (owner = (select auth.uid()) and status = 'active' and not paid and not released and forwards_to is null);
create policy "edit own active accounts" on public.accounts for update to authenticated
  using (owner = (select auth.uid()) and status = 'active')
  with check (owner = (select auth.uid()));

-- browsers may only set these columns; everything else goes through the functions below
revoke insert, update, delete on public.accounts from anon, authenticated;
grant insert (domain, pagename, title, description) on public.accounts to authenticated;
grant update (title, description) on public.accounts to authenticated;
grant select on public.accounts to authenticated;

-- why a pagename can't be used: 'ok' | 'format' | 'reserved' | 'taken'
create function public.pagename_check(d text, p text) returns text
language sql stable security definer set search_path = ''
as $$
  select case
    when p is null or p !~ '^[a-z][a-z0-9-]{1,10}[a-z0-9]$' or p ~ '--' then 'format'
    when exists (select 1 from public.reserved_names where name = p) then 'reserved'
    when exists (
      select 1 from public.accounts a
      where a.domain = d and a.pagename = p and not a.released
        and not (a.status = 'deleted' and a.deleted_at < now() - interval '90 days')
    ) then 'taken'
    else 'ok'
  end
$$;
grant execute on function public.pagename_check(text, text) to anon, authenticated;

-- checks on every new account and every pagename change
create function public.accounts_guard() returns trigger
language plpgsql security definer set search_path = ''
as $$
declare
  free_count int;
  pro_count int;
begin
  new.updated_at := now();

  if tg_op = 'INSERT' or new.pagename is distinct from old.pagename or new.domain is distinct from old.domain then
    if exists (select 1 from public.reserved_names where name = new.pagename) then
      raise exception 'pagename_reserved' using errcode = 'P0001';
    end if;
    -- end the 90-day hold on an old deleted pagename, so the unique index lets the new one in
    update public.accounts set released = true
      where domain = new.domain and pagename = new.pagename and not released
        and status = 'deleted' and deleted_at < now() - interval '90 days';
  end if;

  if new.status in ('active', 'forwarding') then
    select count(*) into free_count from public.accounts
      where owner = new.owner and id <> new.id and status in ('active', 'forwarding')
        and not paid and domain <> 'bakedbya.pro';
    if new.domain <> 'bakedbya.pro' and not new.paid and free_count >= 3 then
      raise exception 'free_account_limit' using errcode = 'P0001';
    end if;
    select count(*) into pro_count from public.accounts
      where owner = new.owner and id <> new.id and status in ('active', 'forwarding') and domain = 'bakedbya.pro';
    if new.domain = 'bakedbya.pro' and pro_count >= 1 then
      raise exception 'baker_name_limit' using errcode = 'P0001';
    end if;
  end if;
  return new;
end
$$;
create trigger accounts_guard before insert or update on public.accounts
  for each row execute function public.accounts_guard();

-- rename an account; keep_forward keeps the old address pointing at the new one (uses a free spot)
create function public.rename_account(acc uuid, new_name text, keep_forward boolean default false) returns void
language plpgsql security definer set search_path = ''
as $$
declare
  a public.accounts;
  why text;
begin
  select * into a from public.accounts where id = acc and owner = auth.uid() and status = 'active' for update;
  if not found then raise exception 'not_found' using errcode = 'P0001'; end if;
  if new_name = a.pagename then return; end if;
  why := public.pagename_check(a.domain, new_name);
  if why <> 'ok' then raise exception 'pagename_%', why using errcode = 'P0001'; end if;

  -- free the old name on this row first, then put it back as a forwarding or held row
  update public.accounts set pagename = new_name where id = acc;
  if keep_forward then
    insert into public.accounts (owner, domain, pagename, title, status, forwards_to)
      values (a.owner, a.domain, a.pagename, a.title, 'forwarding', acc);
  else
    insert into public.accounts (owner, domain, pagename, title, status, deleted_at)
      values (a.owner, a.domain, a.pagename, a.title, 'deleted', now());
  end if;
end
$$;
grant execute on function public.rename_account(uuid, text, boolean) to authenticated;

-- delete an account (its design is kept 30 days for undo; the pagename is held 90 days)
create function public.delete_account(acc uuid) returns void
language plpgsql security definer set search_path = ''
as $$
begin
  update public.accounts set status = 'deleted', deleted_at = now(), forwards_to = null
    where (id = acc or forwards_to = acc) and owner = auth.uid() and status <> 'deleted';
  if not found then raise exception 'not_found' using errcode = 'P0001'; end if;
end
$$;
grant execute on function public.delete_account(uuid) to authenticated;

-- undo a delete within 30 days (if the pagename is still free and a spot is free)
create function public.restore_account(acc uuid) returns void
language plpgsql security definer set search_path = ''
as $$
begin
  update public.accounts set status = 'active', deleted_at = null
    where id = acc and owner = auth.uid() and status = 'deleted' and not released
      and deleted_at > now() - interval '30 days';
  if not found then raise exception 'not_found' using errcode = 'P0001'; end if;
end
$$;
grant execute on function public.restore_account(uuid) to authenticated;

-- ---------- projects (the saved design, one per account) ----------
create table public.projects (
  account_id uuid primary key references public.accounts (id) on delete cascade,
  data jsonb not null,
  updated_at timestamptz not null default now(),
  check (octet_length(data::text) < 5 * 1024 * 1024)
);
alter table public.projects enable row level security;

create function public.owns_active(acc uuid) returns boolean
language sql stable security definer set search_path = ''
as $$
  select exists (select 1 from public.accounts where id = acc and owner = auth.uid() and status = 'active')
$$;

create policy "see own projects" on public.projects for select to authenticated
  using (public.owns_active(account_id) or public.has_role('admin'));
create policy "save own projects" on public.projects for insert to authenticated
  with check (public.owns_active(account_id));
create policy "update own projects" on public.projects for update to authenticated
  using (public.owns_active(account_id)) with check (public.owns_active(account_id));
revoke all on public.projects from anon;
grant select, insert, update on public.projects to authenticated;

create function public.projects_touch() returns trigger language plpgsql set search_path = '' as $$
begin new.updated_at := now(); return new; end $$;
create trigger projects_touch before insert or update on public.projects
  for each row execute function public.projects_touch();

-- ---------- RezSite self-declaration (private) ----------
create table public.rezsite_declarations (
  account_id uuid primary key references public.accounts (id) on delete cascade,
  nation text not null check (char_length(nation) between 2 and 200),
  declared_at timestamptz not null default now()
);
alter table public.rezsite_declarations enable row level security;
create policy "see own or review" on public.rezsite_declarations for select to authenticated
  using (public.owns_active(account_id) or public.has_role('rezsite_reviewer') or public.has_role('admin'));
create policy "declare own" on public.rezsite_declarations for insert to authenticated
  with check (public.owns_active(account_id)
    and exists (select 1 from public.accounts where id = account_id and domain = 'rezsite.com'));
create policy "edit own" on public.rezsite_declarations for update to authenticated
  using (public.owns_active(account_id)) with check (public.owns_active(account_id));
revoke all on public.rezsite_declarations from anon;
grant select, insert, update (nation) on public.rezsite_declarations to authenticated;

-- helper functions are only for the policies and triggers
revoke execute on function public.has_role(text), public.owns_active(uuid), public.accounts_guard() from public, anon;
grant execute on function public.has_role(text), public.owns_active(uuid) to authenticated;
