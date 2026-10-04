-- Additional server-only boundary, no backfill or new admission. GitHub/Pages
-- evidence is verified by publication-status; DB rechecks the durable identity
-- under the SAME request -> permit lock order as normal terminal completion.
create or replace function public.service_reconcile_publication(
  p_change_request_id uuid, p_receipt jsonb, p_dry_run boolean default true
) returns jsonb language plpgsql security definer set search_path = pg_catalog set lock_timeout = '3s' as $$
declare r public.change_requests; op private.collaboration_operations; proof jsonb;
begin
  if coalesce(auth.role(),'') <> 'service_role' then raise exception 'Server only'; end if;
  proof := p_receipt->'reconciliation';
  if p_dry_run is null or jsonb_typeof(proof) is distinct from 'object'
    or (proof->>'protocol') is distinct from 'tssr-deployed-ancestor-v1'
    or coalesce(proof->>'deployed_sha','') !~ '^[0-9a-f]{40}$'
    or coalesce(proof->>'gh_pages_sha','') !~ '^[0-9a-f]{40}$'
    or coalesce(proof->>'pages_run_id','') !~ '^[1-9][0-9]{0,19}$'
    or coalesce(proof->>'pages_run_attempt','') !~ '^[1-9][0-9]*$'
    or coalesce(proof->>'run_id','') !~ '^[1-9][0-9]{0,19}$'
    or coalesce(proof->>'run_attempt','') !~ '^[1-9][0-9]*$'
    or (proof->>'run_id') is distinct from (p_receipt->>'run_id')
    or (proof->>'run_attempt') is distinct from (p_receipt->>'run_attempt')
    or (p_receipt->>'status') is distinct from 'published'
    or (p_receipt->>'phase') is distinct from 'deploy'
    or (p_receipt->>'failure_reason') is not null then
    raise exception 'Invalid reconciliation evidence';
  end if;
  select * into r from public.change_requests where id=p_change_request_id for update;
  select * into op from private.collaboration_operations
    where change_id=p_change_request_id and kind='publication' for update;
  if r.id is null or op.id is null or op.finished_at is null or op.expected_sha is null
    or op.publication_mode is null or r.publication_expected_sha is distinct from op.expected_sha
    or r.publication_mode is distinct from op.publication_mode
    or (p_receipt->>'change_request_id') is distinct from r.id::text
    or (p_receipt->>'expected_sha') is distinct from op.expected_sha then
    raise exception 'Unfinished or incompatible publication permit';
  end if;
  if r.publication_callback is not null or op.terminal_state is not null then
    -- No new write, even for exact replay; contradiction never overwrites state.
    return public.service_complete_guarded_publication(p_change_request_id,p_receipt);
  end if;
  if r.status <> 'publishing' or r.failure_reason is not null or r.published_at is not null
    or r.published_commit_sha is distinct from op.expected_sha
    or coalesce(p_receipt->>'commit_sha','') !~ '^[0-9a-f]{40}$'
    or (op.publication_mode='direct' and ((p_receipt->>'commit_sha') is distinct from op.expected_sha
      or (p_receipt->>'pr_number') is not null))
    or (op.publication_mode='pull_request' and (r.github_pr_number is null
      or (p_receipt->>'pr_number') is distinct from r.github_pr_number::text)) then
    raise exception 'Incompatible reconciliation state';
  end if;
  if p_dry_run then return jsonb_build_object('id',r.id,'eligible',true); end if;
  -- Finalizing an already admitted durable operation is allowed during drain
  -- and maintenance, just like the normal callback. Never opens the gate.
  return public.service_complete_guarded_publication(p_change_request_id,p_receipt);
end $$;
revoke all on function public.service_reconcile_publication(uuid,jsonb,boolean) from public, anon, authenticated;
grant execute on function public.service_reconcile_publication(uuid,jsonb,boolean) to service_role;
