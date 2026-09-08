-- Publication transport hardening only: the electorate and voting rules do not change.
alter table public.change_requests
  add column publication_expected_sha text check (publication_expected_sha ~ '^[0-9a-f]{40}$'),
  add column publication_mode text check (publication_mode in ('direct', 'pull_request')),
  add column publication_callback jsonb check (jsonb_typeof(publication_callback) = 'object');

-- No backfill: published_commit_sha historically had several meanings. It is
-- NOT sufficient evidence to manufacture an expected SHA or a transport mode.
-- Validate only newly supplied metadata, not unchanged historical metadata on
-- status/password/vote-related updates. A NOT VALID CHECK would still check
-- the entire row on every UPDATE and could make old proposals unmanageable.
create or replace function public.enforce_publication_metadata_single_line()
returns trigger language plpgsql set search_path = pg_catalog, public as $$
declare value text;
begin
  if tg_table_name = 'change_requests' then
    if tg_op = 'UPDATE' then
      if new.title is not distinct from old.title then return new; end if;
    end if;
    value := new.title;
  else
    if tg_op = 'UPDATE' then
      if new.display_name is not distinct from old.display_name then return new; end if;
    end if;
    value := new.display_name;
  end if;
  if value ~ '[[:cntrl:]]' or position(chr(8232) in value) > 0 or position(chr(8233) in value) > 0 then
    raise exception 'Métadonnées multilignes interdites.';
  end if;
  return new;
end;
$$;
revoke all on function public.enforce_publication_metadata_single_line() from public, anon, authenticated;
create trigger change_request_metadata_single_line before insert or update on public.change_requests
  for each row execute function public.enforce_publication_metadata_single_line();
create trigger profile_metadata_single_line before insert or update on public.profiles
  for each row execute function public.enforce_publication_metadata_single_line();

create or replace function public.service_complete_publication(p_change_request_id uuid, p_receipt jsonb)
returns jsonb
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare
  request_row public.change_requests%rowtype;
  next_status text;
  actual_sha text;
  expected_sha text;
  phase text;
  pr_number bigint;
begin
  if coalesce((select auth.role()), '') <> 'service_role' then
    raise exception 'Retour de publication réservé au serveur.';
  end if;
  if jsonb_typeof(p_receipt) is distinct from 'object' then raise exception 'Callback invalide.'; end if;
  next_status := p_receipt ->> 'status';
  actual_sha := p_receipt ->> 'commit_sha';
  expected_sha := p_receipt ->> 'expected_sha';
  phase := p_receipt ->> 'phase';
  pr_number := (p_receipt ->> 'pr_number')::bigint;
  if (p_receipt ->> 'change_request_id') is distinct from p_change_request_id::text
     or coalesce(next_status, '') not in ('published', 'failed')
     or coalesce(actual_sha, '') !~ '^[0-9a-f]{40}$'
     or coalesce(expected_sha, '') !~ '^[0-9a-f]{40}$'
     or coalesce(phase, '') not in ('deploy', 'pr-validation')
     or coalesce(p_receipt ->> 'run_id', '') !~ '^[1-9][0-9]{0,19}$'
     or coalesce(p_receipt ->> 'run_attempt', '') !~ '^[1-9][0-9]*$'
     or char_length(coalesce(p_receipt ->> 'failure_reason', '')) > 2000 then
    raise exception 'Identité de callback invalide.';
  end if;
  select * into request_row from public.change_requests where id = p_change_request_id for update;
  if request_row.id is null then raise exception 'Proposition introuvable.'; end if;
  if request_row.publication_expected_sha is null or request_row.publication_expected_sha <> expected_sha then
    raise exception 'SHA attendu incompatible.';
  end if;
  if request_row.publication_callback is not null then
    if request_row.publication_callback = p_receipt then
      return jsonb_build_object('id', request_row.id, 'status', request_row.status,
        'published_commit_sha', request_row.published_commit_sha, 'replayed', true);
    end if;
    raise exception 'Callback contradictoire.';
  end if;
  if request_row.status <> 'publishing' then raise exception 'Proposition non disponible pour publication.'; end if;
  if request_row.publication_mode = 'direct' then
    if actual_sha <> expected_sha or pr_number is not null or phase <> 'deploy' then
      raise exception 'Retour de publication directe incompatible.';
    end if;
  elsif request_row.publication_mode = 'pull_request' then
    if pr_number is null or pr_number < 1 or
      (request_row.github_pr_number is not null and request_row.github_pr_number <> pr_number) then
      raise exception 'PR incompatible.';
    end if;
    -- The Edge verifies GitHub's actual merge SHA and run evidence before this RPC.
    if phase = 'pr-validation' and (next_status <> 'failed' or actual_sha <> expected_sha) then
      raise exception 'Résultat de validation PR incompatible.';
    end if;
  else raise exception 'Intention de publication absente.';
  end if;
  if next_status = 'published' and (p_receipt ->> 'failure_reason') is not null then
    raise exception 'Motif incompatible avec un succès.';
  end if;

  update public.change_requests set
    status = next_status::public.change_request_status,
    publication_callback = p_receipt,
    published_at = case when next_status = 'published' then now() else published_at end,
    published_commit_sha = case when next_status = 'published' then actual_sha else published_commit_sha end,
    github_pr_number = pr_number,
    failure_reason = case when next_status = 'failed' then p_receipt ->> 'failure_reason' else null end
  where id = request_row.id and status = 'publishing'
  returning * into request_row;

  insert into public.audit_logs(action, target_type, target_id, metadata)
  values (case when next_status = 'published' then 'publication_succeeded' else 'publication_failed' end,
    'change_request', p_change_request_id::text, p_receipt);
  return jsonb_build_object('id', request_row.id, 'status', request_row.status,
    'published_commit_sha', request_row.published_commit_sha, 'replayed', false);
end;
$$;

revoke all on function public.service_complete_publication(uuid, jsonb) from public, anon, authenticated;
grant execute on function public.service_complete_publication(uuid, jsonb) to service_role;
