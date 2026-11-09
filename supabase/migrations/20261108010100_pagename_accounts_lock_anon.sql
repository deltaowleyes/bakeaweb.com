-- Visitors who aren't signed in can't read any table directly (they can only call pagename_check)
revoke all on public.accounts, public.reserved_names, public.user_roles from anon;
revoke insert, update, delete on public.reserved_names, public.user_roles from authenticated;
revoke select on public.reserved_names from authenticated;
grant select on public.user_roles to authenticated;
revoke execute on function public.rename_account(uuid, text, boolean), public.delete_account(uuid), public.restore_account(uuid) from public, anon;
