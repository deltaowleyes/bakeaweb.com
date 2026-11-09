-- Helper functions used only by the rules and the trigger move out of the public API
create schema if not exists private;
revoke all on schema private from public, anon;
grant usage on schema private to authenticated;
alter function public.has_role(text) set schema private;
alter function public.owns_active(uuid) set schema private;
alter function public.accounts_guard() set schema private;
revoke execute on function private.accounts_guard() from authenticated;
