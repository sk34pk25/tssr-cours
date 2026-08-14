-- TSSR collaborative documentation: profiles, proposals, unanimous approvals and audit.
-- All mutations are performed by authenticated Edge Functions or the guarded RPCs below.

create extension if not exists pgcrypto;
create schema if not exists private;

create type public.app_role as enum ('admin', 'member');
create type public.profile_status as enum ('active', 'suspended', 'deleted');
create type public.change_request_status as enum (
  'pending', 'approved', 'publishing', 'published', 'rejected', 'conflict', 'failed', 'cancelled'
);
create type public.change_file_type as enum ('create', 'update', 'delete', 'rename');
create type public.approval_decision as enum ('approved', 'rejected');

create table public.profiles (
  id uuid primary key default gen_random_uuid(),
  auth_user_id uuid unique references auth.users(id) on delete set null,
  display_name text not null check (char_length(display_name) between 1 and 100),
  email text not null,
  role public.app_role not null default 'member',
  can_edit boolean not null default false,
  status public.profile_status not null default 'active',
  must_change_password boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index profiles_email_active_idx
  on public.profiles (lower(email))
  where status <> 'deleted';

create table public.change_requests (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(title) between 3 and 160),
  description text,
  author_id uuid not null references public.profiles(id),
  author_display_name text not null,
  status public.change_request_status not null default 'pending',
  base_commit_sha text not null check (base_commit_sha ~ '^[0-9a-f]{40}$'),
  required_approvers uuid[] not null,
  required_approver_labels jsonb not null default '[]'::jsonb,
  supersedes_id uuid references public.change_requests(id),
  published_at timestamptz,
  published_commit_sha text,
  github_pr_number bigint,
  failure_reason text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index change_requests_status_created_idx
  on public.change_requests (status, created_at desc);
create index change_requests_author_idx
  on public.change_requests (author_id, created_at desc);

create table public.change_request_files (
  id uuid primary key default gen_random_uuid(),
  change_request_id uuid not null references public.change_requests(id) on delete cascade,
  file_path text not null,
  new_file_path text,
  base_file_sha text,
  old_content text,
  new_content text,
  content_encoding text not null default 'utf-8' check (content_encoding in ('utf-8', 'base64')),
  change_type public.change_file_type not null,
  created_at timestamptz not null default now(),
  unique (change_request_id, file_path)
);

create table public.change_approvals (
  id uuid primary key default gen_random_uuid(),
  change_request_id uuid not null references public.change_requests(id) on delete cascade,
  user_id uuid not null references public.profiles(id),
  user_display_name text not null,
  decision public.approval_decision not null,
  comment text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (change_request_id, user_id)
);

create index change_approvals_request_idx
  on public.change_approvals (change_request_id, decision);

create table public.audit_logs (
  id bigint generated always as identity primary key,
  actor_id uuid references public.profiles(id),
  actor_display_name text,
  action text not null,
  target_type text not null,
  target_id text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index audit_logs_target_idx
  on public.audit_logs (target_type, target_id, created_at desc);
create index audit_logs_created_idx on public.audit_logs (created_at desc);

create or replace function private.set_updated_at()
returns trigger
language plpgsql
set search_path = pg_catalog
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_updated_at
before update on public.profiles
for each row execute function private.set_updated_at();

create trigger change_requests_updated_at
before update on public.change_requests
for each row execute function private.set_updated_at();

create trigger change_approvals_updated_at
before update on public.change_approvals
for each row execute function private.set_updated_at();

create or replace function private.current_profile_id()
returns uuid
language sql
stable
security definer
set search_path = pg_catalog, public
as $$
  select id
  from public.profiles
  where auth_user_id = (select auth.uid())
    and status = 'active'
  limit 1;
$$;

create or replace function private.current_user_is_admin()
returns boolean
language sql
stable
security definer
set search_path = pg_catalog, public
as $$
  select exists (
    select 1
    from public.profiles
    where auth_user_id = (select auth.uid())
      and status = 'active'
      and role = 'admin'
  );
$$;

create or replace function private.current_user_can_edit()
returns boolean
language sql
stable
security definer
set search_path = pg_catalog, public
as $$
  select exists (
    select 1
    from public.profiles
    where auth_user_id = (select auth.uid())
      and status = 'active'
      and can_edit = true
  );
$$;

revoke all on function private.current_profile_id() from public;
revoke all on function private.current_user_is_admin() from public;
revoke all on function private.current_user_can_edit() from public;
grant execute on function private.current_profile_id() to authenticated;
grant execute on function private.current_user_is_admin() to authenticated;
grant execute on function private.current_user_can_edit() to authenticated;

create or replace function private.protect_last_admin()
returns trigger
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
begin
  if old.role = 'admin' and old.status = 'active'
     and (new.role <> 'admin' or new.status <> 'active') then
    if not exists (
      select 1 from public.profiles
      where id <> old.id and role = 'admin' and status = 'active'
    ) then
      raise exception 'Le dernier administrateur actif ne peut pas perdre ses privilèges.';
    end if;
  end if;
  return new;
end;
$$;

create trigger protect_last_admin
before update on public.profiles
for each row execute function private.protect_last_admin();

create or replace function private.handle_new_auth_user()
returns trigger
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
begin
  insert into public.profiles (
    auth_user_id, display_name, email, role, can_edit, status, must_change_password
  ) values (
    new.id,
    coalesce(nullif(trim(new.raw_user_meta_data ->> 'display_name'), ''), split_part(new.email, '@', 1)),
    new.email,
    'member',
    false,
    'active',
    true
  )
  on conflict (auth_user_id) do update
    set email = excluded.email, updated_at = now();
  return new;
end;
$$;

create trigger on_auth_user_created
after insert on auth.users
for each row execute function private.handle_new_auth_user();

create or replace function private.bootstrap_first_admin(target_email text, target_display_name text default null)
returns uuid
language plpgsql
security definer
set search_path = pg_catalog, public, auth
as $$
declare
  target_user auth.users%rowtype;
  target_profile_id uuid;
begin
  if exists (select 1 from public.profiles where role = 'admin' and status = 'active') then
    raise exception 'Le premier administrateur a déjà été initialisé.';
  end if;

  select * into target_user from auth.users where lower(email) = lower(target_email) limit 1;
  if target_user.id is null then
    raise exception 'Créez d’abord cet utilisateur dans Authentication > Users.';
  end if;

  insert into public.profiles (
    auth_user_id, display_name, email, role, can_edit, status, must_change_password
  ) values (
    target_user.id,
    coalesce(nullif(trim(target_display_name), ''), split_part(target_user.email, '@', 1)),
    target_user.email,
    'admin', true, 'active', true
  )
  on conflict (auth_user_id) do update set
    display_name = excluded.display_name,
    email = excluded.email,
    role = 'admin',
    can_edit = true,
    status = 'active',
    must_change_password = true,
    updated_at = now()
  returning id into target_profile_id;

  insert into public.audit_logs (
    actor_id, actor_display_name, action, target_type, target_id, metadata
  ) values (
    target_profile_id,
    coalesce(nullif(trim(target_display_name), ''), split_part(target_user.email, '@', 1)),
    'bootstrap_admin', 'profile', target_profile_id::text,
    jsonb_build_object('email', target_user.email)
  );

  return target_profile_id;
end;
$$;

revoke all on function private.bootstrap_first_admin(text, text) from public;

create or replace function public.create_change_request(
  p_title text,
  p_description text,
  p_base_commit_sha text,
  p_files jsonb,
  p_supersedes_id uuid default null
)
returns public.change_requests
language plpgsql
security definer
set search_path = pg_catalog, public, private
as $$
declare
  actor public.profiles%rowtype;
  request_row public.change_requests%rowtype;
  approver_ids uuid[];
  approver_labels jsonb;
  file_count integer;
begin
  select * into actor
  from public.profiles
  where auth_user_id = (select auth.uid())
    and status = 'active'
    and can_edit = true;

  if actor.id is null then
    raise exception 'Permission de modification requise.';
  end if;

  if p_base_commit_sha !~ '^[0-9a-f]{40}$' then
    raise exception 'Commit de base invalide.';
  end if;

  file_count := jsonb_array_length(coalesce(p_files, '[]'::jsonb));
  if file_count < 1 or file_count > 20 then
    raise exception 'Une proposition doit contenir entre 1 et 20 fichiers.';
  end if;

  select
    array_agg(id order by created_at, id),
    jsonb_agg(jsonb_build_object('id', id, 'display_name', display_name) order by created_at, id)
  into approver_ids, approver_labels
  from public.profiles
  where status = 'active' and can_edit = true;

  if approver_ids is null or not (actor.id = any(approver_ids)) then
    raise exception 'Aucun ensemble de validateurs cohérent n’est disponible.';
  end if;

  insert into public.change_requests (
    title, description, author_id, author_display_name, status, base_commit_sha,
    required_approvers, required_approver_labels, supersedes_id
  ) values (
    trim(p_title), nullif(trim(p_description), ''), actor.id, actor.display_name,
    case when cardinality(approver_ids) = 1 then 'approved'::public.change_request_status else 'pending'::public.change_request_status end,
    p_base_commit_sha, approver_ids, approver_labels, p_supersedes_id
  ) returning * into request_row;

  insert into public.change_request_files (
    change_request_id, file_path, new_file_path, base_file_sha,
    old_content, new_content, content_encoding, change_type
  )
  select
    request_row.id,
    item.file_path,
    item.new_file_path,
    item.base_file_sha,
    item.old_content,
    item.new_content,
    coalesce(item.content_encoding, 'utf-8'),
    item.change_type::public.change_file_type
  from jsonb_to_recordset(p_files) as item(
    file_path text,
    new_file_path text,
    base_file_sha text,
    old_content text,
    new_content text,
    content_encoding text,
    change_type text
  );

  insert into public.change_approvals (
    change_request_id, user_id, user_display_name, decision
  ) values (
    request_row.id, actor.id, actor.display_name, 'approved'
  );

  insert into public.audit_logs (
    actor_id, actor_display_name, action, target_type, target_id, metadata
  ) values (
    actor.id, actor.display_name, 'change_submitted', 'change_request', request_row.id::text,
    jsonb_build_object('title', request_row.title, 'files', file_count, 'approvers', cardinality(approver_ids))
  );

  return request_row;
end;
$$;

create or replace function public.cast_change_vote(
  p_change_request_id uuid,
  p_decision public.approval_decision,
  p_comment text default null
)
returns public.change_requests
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare
  actor public.profiles%rowtype;
  request_row public.change_requests%rowtype;
  approval_count integer;
begin
  select * into actor
  from public.profiles
  where auth_user_id = (select auth.uid())
    and status = 'active'
    and can_edit = true;

  if actor.id is null then
    raise exception 'Permission de validation requise.';
  end if;

  select * into request_row
  from public.change_requests
  where id = p_change_request_id
  for update;

  if request_row.id is null then raise exception 'Proposition introuvable.'; end if;
  if request_row.status <> 'pending' then raise exception 'Cette proposition n’accepte plus de vote.'; end if;
  if not (actor.id = any(request_row.required_approvers)) then
    raise exception 'Vous ne faites pas partie des validateurs requis.';
  end if;

  insert into public.change_approvals (
    change_request_id, user_id, user_display_name, decision, comment
  ) values (
    request_row.id, actor.id, actor.display_name, p_decision, nullif(trim(p_comment), '')
  )
  on conflict (change_request_id, user_id) do update set
    decision = excluded.decision,
    comment = excluded.comment,
    user_display_name = excluded.user_display_name,
    updated_at = now();

  insert into public.audit_logs (
    actor_id, actor_display_name, action, target_type, target_id, metadata
  ) values (
    actor.id, actor.display_name,
    case when p_decision = 'approved' then 'change_approved' else 'change_rejected' end,
    'change_request', request_row.id::text,
    jsonb_build_object('comment', nullif(trim(p_comment), ''))
  );

  if p_decision = 'rejected' then
    update public.change_requests
    set status = 'rejected', failure_reason = 'Refusée par ' || actor.display_name
    where id = request_row.id
    returning * into request_row;
    return request_row;
  end if;

  select count(*) into approval_count
  from public.change_approvals
  where change_request_id = request_row.id
    and decision = 'approved'
    and user_id = any(request_row.required_approvers);

  if approval_count = cardinality(request_row.required_approvers) then
    update public.change_requests
    set status = 'approved', failure_reason = null
    where id = request_row.id
    returning * into request_row;
  else
    select * into request_row from public.change_requests where id = request_row.id;
  end if;

  return request_row;
end;
$$;

create or replace function public.cancel_change_request(p_change_request_id uuid)
returns public.change_requests
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare
  actor public.profiles%rowtype;
  request_row public.change_requests%rowtype;
begin
  select * into actor from public.profiles
  where auth_user_id = (select auth.uid()) and status = 'active';

  if actor.id is null then
    raise exception 'Profil actif requis.';
  end if;

  select * into request_row from public.change_requests
  where id = p_change_request_id for update;

  if request_row.id is null then raise exception 'Proposition introuvable.'; end if;
  if request_row.author_id <> actor.id and actor.role <> 'admin' then
    raise exception 'Seul l’auteur ou un administrateur peut annuler cette proposition.';
  end if;
  if request_row.status not in ('pending', 'approved', 'failed', 'conflict') then
    raise exception 'Cette proposition ne peut plus être annulée.';
  end if;

  update public.change_requests set status = 'cancelled'
  where id = request_row.id returning * into request_row;

  insert into public.audit_logs (
    actor_id, actor_display_name, action, target_type, target_id
  ) values (
    actor.id, actor.display_name, 'change_cancelled', 'change_request', request_row.id::text
  );

  return request_row;
end;
$$;

create or replace function public.service_claim_change_for_publication(p_change_request_id uuid)
returns public.change_requests
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare
  request_row public.change_requests%rowtype;
begin
  update public.change_requests
  set status = 'publishing', failure_reason = null
  where id = p_change_request_id and status = 'approved'
  returning * into request_row;

  if request_row.id is null then
    raise exception 'La proposition n’est pas disponible pour publication.';
  end if;
  return request_row;
end;
$$;

create or replace function public.service_reconcile_required_approver(
  p_actor_id uuid,
  p_inactive_profile_id uuid
)
returns setof uuid
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare
  actor_name text;
  target_name text;
  request_row public.change_requests%rowtype;
  remaining uuid[];
  approval_count integer;
begin
  select display_name into actor_name from public.profiles where id = p_actor_id;
  select display_name into target_name from public.profiles where id = p_inactive_profile_id;

  for request_row in
    select * from public.change_requests
    where status = 'pending' and p_inactive_profile_id = any(required_approvers)
    for update
  loop
    select coalesce(array_agg(item), '{}'::uuid[]) into remaining
    from unnest(request_row.required_approvers) item
    where item <> p_inactive_profile_id;

    if cardinality(remaining) = 0 then
      update public.change_requests
      set status = 'cancelled', failure_reason = 'Aucun validateur actif restant.'
      where id = request_row.id;
    else
      update public.change_requests
      set required_approvers = remaining,
          required_approver_labels = (
            select coalesce(jsonb_agg(label), '[]'::jsonb)
            from jsonb_array_elements(required_approver_labels) label
            where (label ->> 'id')::uuid <> p_inactive_profile_id
          )
      where id = request_row.id;

      select count(*) into approval_count
      from public.change_approvals
      where change_request_id = request_row.id
        and decision = 'approved'
        and user_id = any(remaining);

      if approval_count = cardinality(remaining) then
        update public.change_requests set status = 'approved'
        where id = request_row.id;
        return next request_row.id;
      end if;
    end if;

    insert into public.audit_logs (
      actor_id, actor_display_name, action, target_type, target_id, metadata
    ) values (
      p_actor_id, actor_name, 'required_approver_removed', 'change_request', request_row.id::text,
      jsonb_build_object('profile_id', p_inactive_profile_id, 'display_name', target_name)
    );
  end loop;
end;
$$;

revoke all on function public.service_claim_change_for_publication(uuid) from public, anon, authenticated;
revoke all on function public.service_reconcile_required_approver(uuid, uuid) from public, anon, authenticated;
grant execute on function public.service_claim_change_for_publication(uuid) to service_role;
grant execute on function public.service_reconcile_required_approver(uuid, uuid) to service_role;

alter table public.profiles enable row level security;
alter table public.change_requests enable row level security;
alter table public.change_request_files enable row level security;
alter table public.change_approvals enable row level security;
alter table public.audit_logs enable row level security;

create policy profiles_select on public.profiles
for select to authenticated
using (
  id = (select private.current_profile_id())
  or (select private.current_user_is_admin())
  or ((select private.current_user_can_edit()) and can_edit = true and status = 'active')
);

create policy change_requests_select on public.change_requests
for select to authenticated
using ((select private.current_profile_id()) is not null);

create policy change_request_files_select on public.change_request_files
for select to authenticated
using ((select private.current_profile_id()) is not null);

create policy change_approvals_select on public.change_approvals
for select to authenticated
using ((select private.current_profile_id()) is not null);

create policy audit_logs_select on public.audit_logs
for select to authenticated
using ((select private.current_profile_id()) is not null);

revoke all on public.profiles, public.change_requests, public.change_request_files,
  public.change_approvals, public.audit_logs from anon, authenticated;

grant select on public.profiles, public.change_requests, public.change_request_files,
  public.change_approvals, public.audit_logs to authenticated;

grant all on public.profiles, public.change_requests, public.change_request_files,
  public.change_approvals, public.audit_logs to service_role;

revoke all on function public.create_change_request(text, text, text, jsonb, uuid) from public, anon;
revoke all on function public.cast_change_vote(uuid, public.approval_decision, text) from public, anon;
revoke all on function public.cancel_change_request(uuid) from public, anon;
grant execute on function public.create_change_request(text, text, text, jsonb, uuid) to authenticated;
grant execute on function public.cast_change_vote(uuid, public.approval_decision, text) to authenticated;
grant execute on function public.cancel_change_request(uuid) to authenticated;

grant usage on schema private to authenticated, service_role;
grant usage, select on sequence public.audit_logs_id_seq to service_role;

comment on function private.bootstrap_first_admin(text, text) is
  'One-time bootstrap. Run from the Supabase SQL editor after creating the first Auth user.';
