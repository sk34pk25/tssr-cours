"""Real MkDocs builds of an immutable base plus exactly one proposal."""
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'scripts'))
from ingestion.independent_build import assert_independent_build, IndependentBuildError


class IndependentBuildTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.repo = Path(self.temp.name)
        self.page = 'docs/modules/11-initiation-scripting-bash/module-07-les-structures-de-boucle.md'
        self.targets = ['docs/tp/11-initiation-scripting-bash/module-07/index.md',
                        'docs/revision/11-initiation-scripting-bash/module-07-les-structures-de-boucle.md']
        self.write('mkdocs.yml', 'site_name: Test\n')
        self.write(self.page, '# M07\n')
        self.git('init', '-q')
        self.git('add', 'mkdocs.yml', 'docs')
        self.git('-c', 'user.name=Fixture', '-c', 'user.email=fixture@example.invalid', 'commit', '-qm', 'base')
        self.base = self.git('rev-parse', 'HEAD').strip()

    def git(self, *args):
        return subprocess.check_output(['git', *args], cwd=self.repo, text=True)

    def write(self, path, text):
        target = self.repo / path
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(text)

    def payload(self, content):
        return {'base_commit_sha': self.base, 'files': [dict(file_path=self.page,
                change_type='update', new_content=content, content_encoding='utf-8')]}

    def links(self):
        return '# M07\n\n[TP](../../tp/11-initiation-scripting-bash/module-07/index.md)\n\n[Révision](../../revision/11-initiation-scripting-bash/module-07-les-structures-de-boucle.md)\n'

    def test_unpublished_ecosystem_in_worktree_cannot_satisfy_course_links(self):
        for path in self.targets:
            self.write(path, '# Local ecosystem\n')
        with self.assertRaisesRegex(IndependentBuildError, 'INDEPENDENT_BUILD_FAILED'):
            assert_independent_build(self.payload(self.links()), repo=self.repo)
        self.assertTrue(all((self.repo / p).exists() for p in self.targets))

    def test_targets_committed_in_base_pass(self):
        for path in self.targets:
            self.write(path, '# Published ecosystem\n')
        self.git('add', 'docs')
        self.git('-c', 'user.name=Fixture', '-c', 'user.email=fixture@example.invalid', 'commit', '-qm', 'ecosystem')
        self.base = self.git('rev-parse', 'HEAD').strip()
        assert_independent_build(self.payload(self.links()), repo=self.repo)

    def test_no_inter_cr_dependency_passes(self):
        assert_independent_build(self.payload('# M07\n\nStandalone.\n'), repo=self.repo)

    def test_untrusted_path_is_refused(self):
        payload = self.payload('# X')
        payload['files'][0]['file_path'] = '../outside.md'
        with self.assertRaises(IndependentBuildError):
            assert_independent_build(payload, repo=self.repo)
