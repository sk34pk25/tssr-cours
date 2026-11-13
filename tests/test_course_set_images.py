"""Locks that stay outside the image addition: rate limit and page links."""
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]


class CourseSetImagePolicyTest(unittest.TestCase):
    def test_rate_limit_clause_is_unchanged(self):
        previous = (ROOT / "supabase/migrations/20260928072234_agent_propose_only.sql").read_text()
        current = (ROOT / "supabase/migrations/20261113120000_course_set_images.sql").read_text()
        clause = "if recent_count >= 8 then"
        window = "interval '10 minutes'"
        self.assertIn(clause, previous)
        self.assertIn(clause, current)
        self.assertIn(window, previous)
        self.assertIn(window, current)

    def test_image_link_inside_the_set_is_not_broken(self):
        import sys
        sys.path.insert(0, str(ROOT / "scripts"))
        from ingestion.proposal_links import assert_proposal_links, resolve_proposal_link
        page = "docs/modules/99-fixture-sauvegarde/index.md"
        image = "docs/assets/images/99-fixture-sauvegarde/schema.png"
        link = "../../assets/images/99-fixture-sauvegarde/schema.png"
        self.assertEqual(resolve_proposal_link(page, link), [image])
        files = [
            {"file_path": page, "change_type": "create", "new_content": f"![Schéma]({link})\n"},
            {"file_path": image, "change_type": "create", "content_encoding": "base64", "new_content": "abc"},
        ]
        assert_proposal_links(files, [])
        assert_proposal_links(files[:1], [])
        with self.assertRaises(Exception):
            assert_proposal_links([{
                "file_path": page, "change_type": "create", "new_content": "[Absent](absent.md)\n",
            }], [])

    def test_rejected_vote_does_not_publish(self):
        source = (ROOT / "supabase/functions/change-requests/index.ts").read_text()
        vote = source.split('if (body.action === "vote")', 1)[1].split('if (body.action === "cancel")', 1)[0]
        self.assertIn('if (changeRequest.status === "approved")', vote)
        self.assertEqual(vote.count("publishApprovedChange"), 1)
        self.assertLess(vote.index('status === "approved"'), vote.index("publishApprovedChange"))


if __name__ == "__main__":
    unittest.main()
