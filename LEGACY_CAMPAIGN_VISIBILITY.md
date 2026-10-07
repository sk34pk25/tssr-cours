# Legacy Debian campaign visibility

## Scope and identification

Human closure: 2026-10-05. Baseline main: `9ea9ad27d546d0355cda6caa6a32e82f365d7c08`.
Read-only inventory: 82 requests; **64 legacy Debian**, **18 unrelated**.
Identification cross-checks: exact UUID, submission dates (2026-10-03 21:08:47 UTC through
2026-10-04 21:07:03 UTC), titles, Debian target paths (including shared linux commands),
AGENT provenance and source type `google_drive_read_only` already stored in Supabase.
No Drive file was accessed. No author email, source file identifier or payload content is copied here.

The explicit UUID manifest in `docs/assets/javascripts/collaboration-campaign.js` is authoritative.
No runtime date/title/author/path rule: a future Debian request is **not** legacy.
Membership includes the old grouped request `248577dd-f538-4b1f-a81e-f4dd7a57d3a1`,
12 original module/Kahoot requests and 51 complementary requests (including duplicates).
All statuses are excluded, not just pending/publishing. Statuses remain truthful.

## Loading and implementation

Previously `collaboration.js:loadChanges` selected `change_requests` directly with nested
`change_request_files`, `change_approvals` and `change_approval_overrides`, then split
pending/approved/publishing, own requests, and other statuses in the browser.
`updatePendingNotice` independently selected pending requests and actual votes.
There is no campaign/archive column, view, RPC or Edge action used for listing.

Both queries now use the official Supabase/PostgREST `not("id", "in", "(...)")` filter:
exclusion happens **server-side before response and row limits**, not in CSS or after download.
See [Supabase not filter](https://supabase.com/docs/reference/javascript/not).
No SQL migration or Edge deployment is needed.

A separate **Ancienne campagne (lecture seule)** tab uses `in("id", ids)` and preserves
displayed historical status, votes, overrides, timestamps, authors, SHAs and diffs.
It exposes no vote/override/cancel/revision control; the event handler also refuses these
actions for the manifest. Missing policy script fails closed with a reload message,
never a fallback to an unfiltered query.

This is an **interface/query visibility rule, not a confidentiality or RLS boundary**.
Existing authenticated access policies and official mutation permissions are unchanged.
Authorized direct API consumers still have their existing rights; this does not disable
backend workers or reconcile old publications. The historical tab is available to users
already allowed to consult proposals, not an invented admin privilege.
The 18 unrelated requests remain visible in their usual tabs: visual reset concerns
this campaign only, not all project history.

## Manifest reviewed

| UUID | Submitted UTC | Title | Target path(s) |
| --- | --- | --- | --- |
| `248577dd-f538-4b1f-a81e-f4dd7a57d3a1` | 2026-10-03 21:08:47.165339Z | Kahoot — reconstruction éditoriale Administration Debian GNU/Linux (12 modules) | `docs/kahoot/05-administration-debian-gnu-linux-module-01-presentation-de-debian-gnu-linux.md`<br>`docs/kahoot/05-administration-debian-gnu-linux-module-02-installation-d-une-distribution-debian.md`<br>`docs/kahoot/05-administration-debian-gnu-linux-module-03-demarrage-d-une-distribution-debian.md`<br>`docs/kahoot/05-administration-debian-gnu-linux-module-04-debian-en-mode-maintenance.md`<br>`docs/kahoot/05-administration-debian-gnu-linux-module-05-gestion-du-reseau.md`<br>`docs/kahoot/05-administration-debian-gnu-linux-module-06-gestion-des-paquets-logiciels.md`<br>`docs/kahoot/05-administration-debian-gnu-linux-module-07-gestion-des-espaces-de-stockage.md`<br>`docs/kahoot/05-administration-debian-gnu-linux-module-08-gestion-des-espaces-de-stockage-avancee-lvm.md`<br>`docs/kahoot/05-administration-debian-gnu-linux-module-09-gestion-des-espaces-de-stockage-file-system.md`<br>`docs/kahoot/05-administration-debian-gnu-linux-module-10-gestion-des-utilisateurs-et-groupes.md`<br>`docs/kahoot/05-administration-debian-gnu-linux-module-11-droits-sur-les-fichiers-et-repertoires.md`<br>`docs/kahoot/05-administration-debian-gnu-linux-module-12-maintenance-d-un-systeme-en-production.md`<br>`docs/modules/05-administration-debian-gnu-linux/module-01-presentation-de-debian-gnu-linux.md`<br>`docs/modules/05-administration-debian-gnu-linux/module-02-installation-d-une-distribution-debian.md`<br>`docs/modules/05-administration-debian-gnu-linux/module-03-demarrage-d-une-distribution-debian.md`<br>`docs/modules/05-administration-debian-gnu-linux/module-04-debian-en-mode-maintenance.md`<br>`docs/modules/05-administration-debian-gnu-linux/module-05-gestion-du-reseau.md`<br>`docs/modules/05-administration-debian-gnu-linux/module-06-gestion-des-paquets-logiciels.md`<br>`docs/modules/05-administration-debian-gnu-linux/module-07-gestion-des-espaces-de-stockage.md`<br>`docs/modules/05-administration-debian-gnu-linux/module-08-gestion-des-espaces-de-stockage-avancee-lvm.md`<br>`docs/modules/05-administration-debian-gnu-linux/module-09-gestion-des-espaces-de-stockage-file-system.md`<br>`docs/modules/05-administration-debian-gnu-linux/module-10-gestion-des-utilisateurs-et-groupes.md`<br>`docs/modules/05-administration-debian-gnu-linux/module-11-droits-sur-les-fichiers-et-repertoires.md`<br>`docs/modules/05-administration-debian-gnu-linux/module-12-maintenance-d-un-systeme-en-production.md` |
| `217c451c-fce9-42fd-a638-5658d1f39d43` | 2026-10-03 22:51:55.099295Z | Administration Debian GNU/Linux — M01 | `docs/kahoot/05-administration-debian-gnu-linux-module-01-presentation-de-debian-gnu-linux.md`<br>`docs/modules/05-administration-debian-gnu-linux/module-01-presentation-de-debian-gnu-linux.md` |
| `3093c8a4-73ed-48e5-b57c-3cb75cb1d967` | 2026-10-03 22:52:08.899398Z | Administration Debian GNU/Linux — M02 | `docs/kahoot/05-administration-debian-gnu-linux-module-02-installation-d-une-distribution-debian.md`<br>`docs/modules/05-administration-debian-gnu-linux/module-02-installation-d-une-distribution-debian.md` |
| `8ee9f018-0cd9-4b51-9cc4-611318801732` | 2026-10-03 22:52:11.91292Z | Administration Debian GNU/Linux — M03 | `docs/kahoot/05-administration-debian-gnu-linux-module-03-demarrage-d-une-distribution-debian.md`<br>`docs/modules/05-administration-debian-gnu-linux/module-03-demarrage-d-une-distribution-debian.md` |
| `78eec129-0b7d-4d10-aa68-c536649bdbc3` | 2026-10-03 22:52:14.911252Z | Administration Debian GNU/Linux — M04 | `docs/kahoot/05-administration-debian-gnu-linux-module-04-debian-en-mode-maintenance.md`<br>`docs/modules/05-administration-debian-gnu-linux/module-04-debian-en-mode-maintenance.md` |
| `94e0c983-8c6a-4522-a90c-a2104a077006` | 2026-10-03 22:52:18.538274Z | Administration Debian GNU/Linux — M05 | `docs/kahoot/05-administration-debian-gnu-linux-module-05-gestion-du-reseau.md`<br>`docs/modules/05-administration-debian-gnu-linux/module-05-gestion-du-reseau.md` |
| `756328d8-b6d6-498f-8982-b2007395b775` | 2026-10-03 22:52:22.237133Z | Administration Debian GNU/Linux — M06 | `docs/kahoot/05-administration-debian-gnu-linux-module-06-gestion-des-paquets-logiciels.md`<br>`docs/modules/05-administration-debian-gnu-linux/module-06-gestion-des-paquets-logiciels.md` |
| `79f08e56-2bcc-41f7-ba17-2638459c4394` | 2026-10-03 22:52:25.867839Z | Administration Debian GNU/Linux — M07 | `docs/kahoot/05-administration-debian-gnu-linux-module-07-gestion-des-espaces-de-stockage.md`<br>`docs/modules/05-administration-debian-gnu-linux/module-07-gestion-des-espaces-de-stockage.md` |
| `181683c9-d458-4915-8d86-0f0637149071` | 2026-10-03 22:52:29.003198Z | Administration Debian GNU/Linux — M08 | `docs/kahoot/05-administration-debian-gnu-linux-module-08-gestion-des-espaces-de-stockage-avancee-lvm.md`<br>`docs/modules/05-administration-debian-gnu-linux/module-08-gestion-des-espaces-de-stockage-avancee-lvm.md` |
| `88e00dc4-b8ca-4c95-b7c2-ec92c9032c32` | 2026-10-03 23:06:50.314823Z | Administration Debian GNU/Linux — M09 | `docs/kahoot/05-administration-debian-gnu-linux-module-09-gestion-des-espaces-de-stockage-file-system.md`<br>`docs/modules/05-administration-debian-gnu-linux/module-09-gestion-des-espaces-de-stockage-file-system.md` |
| `c950a4dd-c602-4a8a-b64a-b8cc25bf9bc4` | 2026-10-03 23:06:57.142999Z | Administration Debian GNU/Linux — M10 | `docs/kahoot/05-administration-debian-gnu-linux-module-10-gestion-des-utilisateurs-et-groupes.md`<br>`docs/modules/05-administration-debian-gnu-linux/module-10-gestion-des-utilisateurs-et-groupes.md` |
| `5a068b3a-526c-4784-9f83-d25e1a51f798` | 2026-10-03 23:07:00.786657Z | Administration Debian GNU/Linux — M11 | `docs/kahoot/05-administration-debian-gnu-linux-module-11-droits-sur-les-fichiers-et-repertoires.md`<br>`docs/modules/05-administration-debian-gnu-linux/module-11-droits-sur-les-fichiers-et-repertoires.md` |
| `962b2ec8-abde-447f-b822-e0ba3c715ed4` | 2026-10-03 23:07:03.745305Z | Administration Debian GNU/Linux — M12 | `docs/kahoot/05-administration-debian-gnu-linux-module-12-maintenance-d-un-systeme-en-production.md`<br>`docs/modules/05-administration-debian-gnu-linux/module-12-maintenance-d-un-systeme-en-production.md` |
| `17ec894a-8820-4dc5-a2dd-2935cde71640` | 2026-10-03 23:42:40.681433Z | Administration Debian GNU/Linux — M01 — fiche de révision | `docs/revision/administration-linux/module-01-presentation-de-debian-gnu-linux.md` |
| `7bd82478-89b5-4329-ae65-bdd5531c6028` | 2026-10-04 15:03:08.287765Z | Administration Debian GNU/Linux — TP — Présentation M02 | `docs/tp/administration-linux/index.md` |
| `a62e6a73-9990-4b6b-a218-72d2c29019e7` | 2026-10-04 15:03:24.608603Z | Administration Debian GNU/Linux — TP M02 — Présentation | `docs/tp/administration-linux/module-02/index.md` |
| `4b4bf933-a362-4ddf-8bd5-b6e54fae052b` | 2026-10-04 15:03:28.707295Z | Administration Debian GNU/Linux — TP M02 — Énoncés | `docs/tp/administration-linux/module-02/enonces.md` |
| `c47dc0c7-4e08-4145-9faf-1df2f154d0a7` | 2026-10-04 15:03:31.365131Z | Administration Debian GNU/Linux — TP M02 — Corrections | `docs/tp/administration-linux/module-02/corrections.md` |
| `948d3274-4063-43e2-b651-77ed3e78dcfa` | 2026-10-04 15:03:34.598306Z | Administration Debian GNU/Linux — M02 — Fiche de révision | `docs/revision/administration-linux/module-02-installation-d-une-distribution-debian.md` |
| `e9b2acfb-56c5-4d0d-9d1a-ee7eacf241f9` | 2026-10-04 15:05:33.022103Z | Administration Debian GNU/Linux — M01 — Liens pédagogiques | `docs/modules/05-administration-debian-gnu-linux/module-01-presentation-de-debian-gnu-linux.md` |
| `5767a535-2c73-48da-8ddf-c271fa69f2ef` | 2026-10-04 15:05:36.360556Z | Administration Debian GNU/Linux — M02 — Liens pédagogiques | `docs/modules/05-administration-debian-gnu-linux/module-02-installation-d-une-distribution-debian.md` |
| `fccba715-752a-4982-9865-f7807def7df4` | 2026-10-04 15:16:44.322668Z | Administration Debian GNU/Linux — TP M03 — Présentation | `docs/tp/administration-linux/module-03/index.md` |
| `b2053e7d-a4dc-4870-81c1-f941f06f5fda` | 2026-10-04 15:16:47.277286Z | Administration Debian GNU/Linux — TP M03 — Énoncés | `docs/tp/administration-linux/module-03/enonces.md` |
| `082bb997-d121-4a17-91c0-e51fab70992d` | 2026-10-04 15:16:50.108718Z | Administration Debian GNU/Linux — TP M03 — Corrections | `docs/tp/administration-linux/module-03/corrections.md` |
| `e0693450-e72d-4e3e-a79f-8298da781589` | 2026-10-04 15:16:53.08887Z | Administration Debian GNU/Linux — M03 — Fiche de révision | `docs/revision/administration-linux/module-03-demarrage-d-une-distribution-debian.md` |
| `d3046cc0-b4f7-40ea-aadd-684cd814bda0` | 2026-10-04 15:28:08.240486Z | Administration Debian GNU/Linux — M04 — Fiche de révision | `docs/revision/administration-linux/module-04-debian-en-mode-maintenance.md` |
| `9eed7665-ed86-424f-8a85-bb77589d015b` | 2026-10-04 15:28:11.274326Z | Administration Debian GNU/Linux — TP M04 — Correction | `docs/tp/administration-linux/module-04/corrections.md` |
| `37bf9acd-9788-4448-ad71-2ef94d70b77f` | 2026-10-04 15:28:14.268072Z | Administration Debian GNU/Linux — TP M04 — Énoncé | `docs/tp/administration-linux/module-04/enonces.md` |
| `32f5341a-7b13-46ed-be11-4ed71f84e554` | 2026-10-04 15:28:16.845609Z | Administration Debian GNU/Linux — TP M04 — Présentation | `docs/tp/administration-linux/module-04/index.md` |
| `22163669-b1fd-4f53-9201-86d3e85a3401` | 2026-10-04 15:36:03.522813Z | Administration Debian GNU/Linux — M05 — Fiche de révision | `docs/revision/administration-linux/module-05-gestion-du-reseau.md` |
| `b828b43d-063c-43cd-9efd-a3029622bce1` | 2026-10-04 15:36:06.86893Z | Administration Debian GNU/Linux — TP M05 — Correction | `docs/tp/administration-linux/module-05/corrections.md` |
| `ac75c705-ab8d-4085-8e36-22f6c4f27274` | 2026-10-04 15:36:09.442499Z | Administration Debian GNU/Linux — TP M05 — Énoncé | `docs/tp/administration-linux/module-05/enonces.md` |
| `d9b4f4ba-bc5b-423d-8cb4-b4920cd3c973` | 2026-10-04 15:36:12.186743Z | Administration Debian GNU/Linux — TP M05 — Présentation | `docs/tp/administration-linux/module-05/index.md` |
| `aa1a1bd6-8da6-42ad-916e-d461df5202c5` | 2026-10-04 15:57:29.49474Z | Administration Debian GNU/Linux — Commandes GNU/Linux — Paquets Debian | `docs/commandes/linux.md` |
| `8cd26050-6907-42f1-9268-b083f53ed2d7` | 2026-10-04 15:57:32.818817Z | Administration Debian GNU/Linux — Mémo — APT et paquets Debian | `docs/memo/apt-debian.md` |
| `30a7a838-b56a-4def-8a95-1c62d9d969b7` | 2026-10-04 15:57:36.450169Z | Administration Debian GNU/Linux — M06 — Fiche de révision | `docs/revision/administration-linux/module-06-gestion-des-paquets-logiciels.md` |
| `763cde4a-998c-46dc-949d-dfb6913927de` | 2026-10-04 15:57:38.754841Z | Administration Debian GNU/Linux — TP M06 — Correction | `docs/tp/administration-linux/module-06/corrections.md` |
| `f3ca4432-8be6-409c-93d4-06a1d0bdc09c` | 2026-10-04 15:57:41.33914Z | Administration Debian GNU/Linux — TP M06 — Énoncé | `docs/tp/administration-linux/module-06/enonces.md` |
| `64fa8dba-b256-4a70-b0b0-fe44e50e9acc` | 2026-10-04 15:57:44.070218Z | Administration Debian GNU/Linux — TP M06 — Présentation | `docs/tp/administration-linux/module-06/index.md` |
| `e6569b78-6c8f-4249-8e16-8f07b16b0c9b` | 2026-10-04 20:27:24.065139Z | Administration Debian GNU/Linux — M08 — mémo LVM | `docs/memo/lvm-debian.md` |
| `77d4f22f-ac5b-426a-93db-df7f91f83f53` | 2026-10-04 20:27:28.206474Z | Administration Debian GNU/Linux — M08 — fiche de révision | `docs/revision/administration-linux/module-08-gestion-des-espaces-de-stockage-avancee-lvm.md` |
| `b0545b0e-d4c5-49d5-8c67-8013d45e8283` | 2026-10-04 20:27:31.779939Z | Administration Debian GNU/Linux — M08 — TP correction | `docs/tp/administration-linux/module-08/corrections.md` |
| `9d6a5f93-967e-4826-82ef-10c8c16e3ce9` | 2026-10-04 20:27:35.179197Z | Administration Debian GNU/Linux — M08 — TP énoncé | `docs/tp/administration-linux/module-08/enonces.md` |
| `2045a287-8c95-4273-ac31-266421d136db` | 2026-10-04 20:27:38.419596Z | Administration Debian GNU/Linux — M08 — TP présentation | `docs/tp/administration-linux/module-08/index.md` |
| `4e2ed56f-7931-4939-a264-23bc638ab192` | 2026-10-04 20:40:20.587016Z | Administration Debian GNU/Linux — M09 — mémo systèmes de fichiers | `docs/memo/file-systems-debian.md` |
| `7e61d34b-bcbf-48ee-99d8-99d595838374` | 2026-10-04 20:40:24.010699Z | Administration Debian GNU/Linux — M09 — fiche de révision | `docs/revision/administration-linux/module-09-gestion-des-espaces-de-stockage-file-system.md` |
| `21ed4a50-1004-4ede-914c-25490e09a4b8` | 2026-10-04 20:40:26.885385Z | Administration Debian GNU/Linux — M09 — TP correction | `docs/tp/administration-linux/module-09/corrections.md` |
| `2904b693-228b-4296-b750-f487ab5255e8` | 2026-10-04 20:40:29.544502Z | Administration Debian GNU/Linux — M09 — TP énoncé | `docs/tp/administration-linux/module-09/enonces.md` |
| `96625e97-76c3-4c8e-b5c9-60af8f49945d` | 2026-10-04 20:40:32.476825Z | Administration Debian GNU/Linux — M09 — TP présentation | `docs/tp/administration-linux/module-09/index.md` |
| `91f85cac-0516-4095-af1e-6a1b1655d0fa` | 2026-10-04 20:43:47.121872Z | Administration Debian GNU/Linux — M10 — mémo comptes et groupes | `docs/memo/comptes-groupes-debian.md` |
| `08c1ea6b-a386-4d77-b98d-6c4622f8aa5a` | 2026-10-04 20:43:50.390733Z | Administration Debian GNU/Linux — M10 — fiche de révision | `docs/revision/administration-linux/module-10-gestion-des-utilisateurs-et-groupes.md` |
| `12ca60da-d25f-4c61-a565-63b7c6bde075` | 2026-10-04 20:43:53.260066Z | Administration Debian GNU/Linux — M10 — TP correction | `docs/tp/administration-linux/module-10/corrections.md` |
| `28c0789a-04f3-4341-a919-2ac7c6424d9e` | 2026-10-04 20:53:32.587222Z | Administration Debian GNU/Linux — M11 — fiche de révision | `docs/revision/administration-linux/module-11-droits-sur-les-fichiers-et-repertoires.md` |
| `44ababfa-cf90-46c1-bb71-07dcdaa96b00` | 2026-10-04 20:53:35.350535Z | Administration Debian GNU/Linux — M11 — TP correction | `docs/tp/administration-linux/module-11/corrections.md` |
| `a9985e57-87fe-4a93-b5e3-d363f4634e26` | 2026-10-04 20:53:38.108238Z | Administration Debian GNU/Linux — M11 — TP énoncé | `docs/tp/administration-linux/module-11/enonces.md` |
| `b4fc32da-3cb9-4d0b-b81c-8df7961d4954` | 2026-10-04 20:53:40.658351Z | Administration Debian GNU/Linux — M11 — TP présentation | `docs/tp/administration-linux/module-11/index.md` |
| `0060152d-aa4e-4ef1-ab87-cda4b4730fcb` | 2026-10-04 21:06:41.724368Z | Debian M12 fiche de révision | `docs/revision/administration-linux/module-12-maintenance-d-un-systeme-en-production.md` |
| `140e7276-f8d9-4bf8-a0d4-20afe90d5bfe` | 2026-10-04 21:06:44.721193Z | Debian M12 TP01 correction | `docs/tp/administration-linux/module-12/tp01-journalisation/corrections.md` |
| `869dc700-4a5e-4c9f-89b2-fb521decc663` | 2026-10-04 21:06:47.515085Z | Debian M12 TP01 énoncé | `docs/tp/administration-linux/module-12/tp01-journalisation/enonces.md` |
| `62a0d589-3137-4a13-823d-678f13030ec0` | 2026-10-04 21:06:50.312621Z | Debian M12 TP01 présentation | `docs/tp/administration-linux/module-12/tp01-journalisation/index.md` |
| `3146bf84-5254-48b2-b8f1-1c6b39757afc` | 2026-10-04 21:06:53.154022Z | Debian M12 TP02 correction | `docs/tp/administration-linux/module-12/tp02-planification/corrections.md` |
| `3c56fa49-f4ab-4926-bb4e-b090aa743fad` | 2026-10-04 21:06:55.918031Z | Debian M12 TP02 énoncé | `docs/tp/administration-linux/module-12/tp02-planification/enonces.md` |
| `854fb2d2-5b3a-43f8-bbe7-7c6a500cd7be` | 2026-10-04 21:06:58.7593Z | Debian M12 TP02 présentation | `docs/tp/administration-linux/module-12/tp02-planification/index.md` |
| `c8af0b1e-92bb-4af7-820c-c31996931f7d` | 2026-10-04 21:07:02.511183Z | Debian M12 TP03 correction | `docs/tp/administration-linux/module-12/tp03-informations-systeme/corrections.md` |

## Preservation and rollout

No UPDATE/INSERT/DELETE, no status change, no migration, no Auth/profile/guard changes,
no broker edits, no pedagogical modifications, no external Drive/Kahoot operation.
All history remains in Supabase and Git, including records for files whose staging
content was already cleaned by historical publication triggers.

Delivery is a human technical PR. **Not effective on the public portal before human
merge and successful Pages deployment.** No automatic merge is authorized by this PR.
After deployment reload the portal: test pending, own requests, normal history,
notification badge, and dedicated old-campaign history. Do not submit a test proposal.
Rollback is reverting the UI commit: it restores previous visibility without touching data.

New campaign: audit the then-current main and public site from scratch with Drive read-only.
Broker policy PR #15 remains unchanged: separate COURSE_PAGE and mono-module ECOSYSTEM;
cross-module bundles refused. Old checkpoints are historical only.

## Validation — 2026-10-05

- `npm test`: PASS, 171 tests, including four membership/query regressions.
- Python discovery `test_*.py`: PASS, 136 tests (including granularity).
- Supabase shared Edge tests: PASS, 160; change-requests type-check: PASS.
- Course structure and glossary check: PASS.
- Existing broker integration: M08 ECOSYSTEM accepted in dry-run, M08 + M09 refused;
  no Auth/network/submission, source unchanged.
- Isolated Chrome + actual Supabase JS 2.112.3: PASS, 5 tests at widths 320/768/1024/1440.
  Network interception verifies exact PostgREST id filters for both lists and notices;
  no unfiltered request, no request except GET, zero mutations; missing script fails closed.
- Existing admin override browser regressions: PASS, 7 tests. Fixture loads the current
  script dependencies; ordinary human permissions and actions remain unchanged.
- `git diff --check`: PASS.
- `mkdocs build --strict`: **FAIL on unchanged baseline too**, same eight missing-link
  warnings, zero added warnings. Plain build also fails because the config enables strict.
  The missing targets are TP M02 corrections, TP M10 index, and TP M12 TP03 index.
  No pedagogical file or build gate is changed to hide these pre-existing failures.
  Therefore this PR is a **draft, not deploy-ready** until the baseline is repaired separately.

Browser invocation (installed Playwright runtime; SDK downloaded outside the repo):

```sh
NODE_PATH=/path/to/installed/node_modules PLAYWRIGHT_CHANNEL=chrome \
TSSR_TEST_SUPABASE_BUNDLE=/path/to/supabase-2.112.3.min.js \
node --test tests/collaboration-campaign.browser.mjs
```

Initial browser attempts were environmental/fixture failures (missing bundled Chromium;
fixture omitted Material's `.md-container` for notifications). Tests were rerun using
installed isolated Chrome and corrected synthetic markup. Final results above are executed.
Chrome DevTools MCP was unavailable; isolated Playwright was used instead.

## Final rollout validation — 2026-10-07

The user explicitly authorized normal GitHub merge after successful validation.
The earlier draft/build limitation above is historical, not the current verdict.
Prerequisite PR #17 neutralized exactly eight obsolete links in seven existing pages,
preserving their labels and all other content; no missing pedagogical page was created.
It merged as `2c3e81b3786e1b6b552d9b316da590f05a21cb44` after CI success.
PR #16 was rebased on that repaired main without conflict; its scope remains the same
seven technical documentation/UI/test files, with no broker/backend changes.

Fresh checks on the rebased source: JS 171 PASS, Python 136 PASS, shared Edge 160 PASS,
all three Edge entrypoints type-check PASS, browser regressions 12 PASS, course
structure PASS, glossary PASS, strict MkDocs PASS with zero warnings, diff check PASS.
Isolated PostgreSQL 16.15 suites: maintenance/override 61 PASS, agent 10 PASS;
containers have no network, published ports or host mounts.
The PDF extractor test PASS uses the installed bundled Poppler via `PDFTOTEXT_BIN`;
its initial local invocation lacked that environment setting (no code correction).
Broker offline integration again accepts mono-module ECOSYSTEM and rejects cross-module
ECOSYSTEM, with no source change, authentication or submission.
The final public deployment and authenticated live UI are verified after merge;
no synthetic production proposal is created to test future visibility.
