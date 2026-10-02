import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';

const context = { URL, URLSearchParams, FormData: class { constructor(form) { this.form = form; } get(key) { return this.form.elements[key].value; } } };
vm.runInNewContext(readFileSync(new URL('../docs/assets/javascripts/password-recovery.js', import.meta.url), 'utf8'), context);
const api = context.TSSRPasswordRecovery;
function fixture(options = {}) {
  const calls = [], dialogs = [], messages = [];
  const control = () => ({ value: '', disabled: false, required: true, textContent: '', focus() {}, addEventListener(name, fn) { this[name] = fn; } });
  const auth = {
    async resetPasswordForEmail(email, opts) { calls.push(['request', email, opts.redirectTo]); if (options.throwRequest) throw Error('PRIVATE'); return { error: options.requestError }; },
    async getUser() { calls.push(['user']); return options.invalid ? { error: Error('PRIVATE') } : { data: { user: { id: 'synthetic-user' } } }; },
    async updateUser(data) { calls.push(['update', Object.keys(data)]); return { error: options.updateError }; },
    async signOut(opts) { calls.push(['logout', opts.scope]); return { error: options.logoutError }; }
  };
  const recovery = api.create({ auth, initialReturn: options.initial !== false, redirectTo: 'https://example.test/tssr/',
    location: { pathname: '/tssr/', search: '' }, history: { state: null, replaceState(_s, _t, url) { calls.push(['url', url]); } },
    onFinished(success) { calls.push(['finished', success]); },
    setBusy(button, value) { button.disabled = value; }, formMessage(_f, message) { messages.push(message); },
    createDialog() {
      const button = control(), cancel = control();
      const form = { elements: { password: control(), confirmation: control(), email: control() },
        addEventListener(name, fn) { this[name] = fn; },
        querySelector(selector) { return selector === '[type="submit"]' ? button : selector === '[data-recovery-cancel]' ? cancel : this.elements.password; },
        querySelectorAll() { return [this.elements.password, this.elements.confirmation]; },
        reset() { Object.values(this.elements).forEach(input => { input.value = ''; }); }
      };
      const dialog = { form, button, cancel, closed: false, close() { this.closed = true; }, querySelector() { return form; } };
      dialogs.push(dialog); return dialog;
    }
  });
  return { recovery, calls, dialogs, messages, options };
}
const submit = form => form.submit({ preventDefault() {} });
test('detect recovery and expired links, not normal page anchors', () => {
  for (const hash of ['type=recovery&access_token=synthetic', 'error=access_denied&error_code=otp_expired']) assert.equal(api.isRecoveryReturn('https://example.test/#'+hash), true);
  assert.equal(api.isRecoveryReturn('https://example.test/#cours'), false);
});
test('password consistency and minimum length', () => {
  assert.ok(api.passwordError('short', 'short'));
  assert.ok(api.passwordError('synthetic-only-password', 'different'));
  assert.equal(api.passwordError('synthetic-only-password', 'synthetic-only-password'), null);
});
test('recovery request has identical generic receipt for all server outcomes', async () => {
  const receipts = [];
  for (const options of [{}, {requestError: Error('PRIVATE')}, {throwRequest: true}]) {
    const f = fixture(options); f.recovery.request();
    const d = f.dialogs[0]; d.form.elements.email.value = '  synthetic@example.invalid ';
    await submit(d.form); await submit(d.form);
    assert.deepEqual(f.calls, [['request', 'synthetic@example.invalid', 'https://example.test/tssr/']]);
    assert.equal(d.form.elements.email.value, '');
    receipts.push(f.messages[0]);
  }
  assert.equal(new Set(receipts).size, 1);
  assert.ok(!receipts[0].includes('PRIVATE'));
});
test('PASSWORD_RECOVERY synchronously claims handling; other auth events unchanged', () => {
  const f = fixture({initial: false});
  assert.equal(f.recovery.onAuthEvent('SIGNED_IN'), false);
  assert.equal(f.recovery.onAuthEvent('PASSWORD_RECOVERY'), true);
  assert.equal(f.recovery.onAuthEvent('USER_UPDATED'), true);
});
test('valid recovery changes only password and logs out before reporting success', async () => {
  const f = fixture(); await f.recovery.open(); await f.recovery.open();
  assert.equal(f.dialogs.length, 1);
  const d = f.dialogs[0];
  d.form.elements.password.value = d.form.elements.confirmation.value = 'synthetic-only-password';
  await submit(d.form);
  assert.deepEqual(f.calls.filter(c => ['update','logout','finished'].includes(c[0])), [['update',['password']],['logout','local'],['finished',true]]);
  assert.equal(d.form.elements.password.value, ''); assert.equal(d.closed, true); assert.equal(f.recovery.isActive(), false);
});
test('mismatch makes no update or logout', async () => {
  const f = fixture(); await f.recovery.open(); const d = f.dialogs[0];
  d.form.elements.password.value = 'synthetic-only-password'; d.form.elements.confirmation.value = 'different';
  await submit(d.form);
  assert.equal(f.calls.some(c => c[0] === 'update'), false); assert.equal(d.closed, false);
});
test('invalid recovery cannot submit and can close the session', async () => {
  const f = fixture({invalid: true}); await f.recovery.open(); const d = f.dialogs[0];
  await submit(d.form);
  assert.equal(d.button.disabled, true); assert.match(f.messages[0], /invalide ou a expiré/);
  await d.cancel.click(); assert.equal(d.closed, true);
  assert.equal(f.calls.some(c => c[0] === 'update'), false);
});
test('session expires between opening and saving: no password update or sensitive error', async () => {
  const f = fixture(); await f.recovery.open(); f.options.invalid = true;
  const d = f.dialogs[0]; d.form.elements.password.value = d.form.elements.confirmation.value = 'synthetic-only-password';
  await submit(d.form); assert.equal(f.calls.some(c => c[0] === 'update'), false);
  assert.equal(d.form.elements.password.value, ''); assert.ok(!f.messages.join('').includes('PRIVATE'));
});
test('failed update clears fields and does not report success', async () => {
  const f = fixture({updateError: Error('PRIVATE')}); await f.recovery.open();
  const d = f.dialogs[0]; d.form.elements.password.value = d.form.elements.confirmation.value = 'synthetic-only-password';
  await submit(d.form); assert.equal(d.form.elements.password.value, ''); assert.equal(d.closed, false);
  assert.equal(f.calls.some(c => c[0] === 'finished'), false);
});
test('logout failure remains blocked; retry never repeats password update', async () => {
  const f = fixture({logoutError: Error('PRIVATE')}); await f.recovery.open();
  const d = f.dialogs[0]; d.form.elements.password.value = d.form.elements.confirmation.value = 'synthetic-only-password';
  await submit(d.form); assert.equal(f.recovery.isActive(), true); assert.equal(d.closed, false);
  f.options.logoutError = null; await submit(d.form);
  assert.equal(f.calls.filter(c => c[0] === 'update').length, 1);
  assert.equal(d.closed, true);
});
