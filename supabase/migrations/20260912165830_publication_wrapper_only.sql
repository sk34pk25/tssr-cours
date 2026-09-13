-- Post-H protection, belonging to the dependent guard release (not H / PR #3).
-- Operational order: G closed -> historical drain/quiescence -> maintenance
-- -> H -> THIS FILE -> N callback / W -> operator readiness -> open.
-- No automatic migration sweep: H's timestamp precedes G's operational install.
begin;
set local lock_timeout = '5s';
set local statement_timeout = '30s';
set local search_path = pg_catalog;

do $$
begin
  -- Same gate lock as admission/closure; this is an operator-only DDL step.
  perform pg_catalog.pg_advisory_xact_lock(843771,1);
  if not exists(select 1 from private.collaboration_gate where singleton and mode='maintenance')
    or exists(select 1 from public.change_requests where status='publishing')
    or exists(select 1 from private.collaboration_operations where finished_at is null) then
    raise exception 'Post-H protection requires maintenance and completed drain';
  end if;
end $$;

-- Missing H aborts here. The definer wrapper retains its owner's existing
-- authority; no replacement function, extra service GRANT or alias is created.
revoke execute on function public.service_complete_publication(uuid,jsonb)
  from public, anon, authenticated, service_role;

-- Check effective rights (including inherited/PUBLIC grants), H dependencies
-- and the wrapper owner's internal EXECUTE. Failure rolls the whole file back.
select private.assert_collaboration_schema_ready();
commit;
