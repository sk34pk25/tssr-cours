// Real Chromium UI, synthetic Auth only; all traffic intercepted, no emails sent.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { resolve, sep } from 'node:path';
import { before, after, test } from 'node:test';
const { chromium } = createRequire(import.meta.url)('playwright');
const origin = 'http://127.0.0.1:41753';
const site = process.env.TSSR_TEST_SITE_DIR && resolve(process.env.TSSR_TEST_SITE_DIR);
const styles = site ? (readFileSync(resolve(site,'index.html'),'utf8').match(/<link[^>]+rel="stylesheet"[^>]*>/g) || []).filter(tag=>!tag.includes('https://')).join('') : '<link rel="stylesheet" href="/collaboration.css">';
let browser;
before(async () => { browser = await chromium.launch({headless: true}); });
after(async () => { await browser?.close(); });
function setup(options) {
  const calls = window.fixtureCalls = [];
  let notify, session = options.recovery && !options.invalid ? {user:{id:'synthetic-user'}} : null;
  window.TSSR_COLLABORATION_CONFIG = {supabaseUrl:'https://fixture.supabase.co',supabasePublishableKey:'sb_publishable_fixture'};
  if(options.realSdk) return;
  window.supabase = {createClient: (_url, _key, config) => {
    window.fixtureAuthOptions = config.auth;
    return {
      auth: {
        onAuthStateChange(fn) { notify = fn; },
        async getSession() {
          if (options.recovery && !options.invalid) notify('PASSWORD_RECOVERY',session);
          return {data:{session}};
        },
        async getUser() { calls.push('getUser'); return {data:{user:session?.user},error:!session}; },
        async resetPasswordForEmail(_email, settings) { calls.push('recover'); window.fixtureRedirect = settings.redirectTo; return {error: options.requestError}; },
        async updateUser(body) { calls.push('update:'+Object.keys(body).join(',')); notify('USER_UPDATED',session); return {}; },
        async signOut() { calls.push('logout'); session = null; notify('SIGNED_OUT',null); return {}; },
        async signInWithPassword() { calls.push('login'); session = {user:{id:'synthetic-user'}}; notify('SIGNED_IN',session); return {}; }
      },
      from(table) {
        calls.push('table:'+table);
        if (options.recovery) throw Error('recovery must not load profile');
        return {select:()=>({eq:()=>({single:async()=>({data:{id:'synthetic-profile',status:'active',role:'member',display_name:'Utilisateur factice',can_edit:false}})})})};
      }
    };
  }};
}
async function fixture(options, run) {
  const context = await browser.newContext({viewport:{width: options.width || 1024,height:900},serviceWorkers:'block'});
  const page = await context.newPage(), errors = [], unexpected = [];
  const sdkCalls = [];
  const syntheticUser = {id:'11111111-1111-4111-8111-111111111111',aud:'authenticated',role:'authenticated',email:'synthetic@example.invalid',app_metadata:{},user_metadata:{},created_at:'2026-01-01T00:00:00Z'};
  page.on('pageerror', e=>errors.push(e.message));
  page.on('console', m=>{if(m.type()==='error') errors.push(m.text());});
  await context.route('**/*', async route=>{
    const url=new URL(route.request().url());
    if(options.realSdk && url.origin==='https://fixture.supabase.co') {
      const method=route.request().method(); sdkCalls.push(method+' '+url.pathname);
      if(url.pathname==='/auth/v1/user' && ['GET','PUT'].includes(method)) {
        if(method==='PUT') {
          const body=route.request().postDataJSON();
          // auth-js adds null protocol fields even for the implicit flow.
          assert.deepEqual(Object.keys(body).sort(),['code_challenge','code_challenge_method','password']);
          assert.equal(body.code_challenge,null); assert.equal(body.code_challenge_method,null);
        }
        return route.fulfill({contentType:'application/json',body:JSON.stringify(syntheticUser)});
      }
      if(url.pathname==='/auth/v1/logout' && method==='POST') return route.fulfill({status:204});
      unexpected.push(method+' '+url.pathname); return route.abort();
    }
    if(url.origin!==origin) {unexpected.push(url.origin); return route.abort();}
    if(url.pathname==='/supabase-fixture.js' && options.realSdk) return route.fulfill({contentType:'text/javascript',body:readFileSync(process.env.TSSR_TEST_SUPABASE_BUNDLE)});
    if(url.pathname==='/') return route.fulfill({contentType:'text/html; charset=utf-8',body:`<!doctype html><html lang="fr"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Auth test</title>${styles}<body data-md-color-scheme="default" data-md-color-primary="blue" data-md-color-accent="blue"><header class="md-header__inner"></header><main><h1>Test isolé</h1></main>${options.realSdk?'<script src="/supabase-fixture.js"></script>':''}<script>(${setup.toString()})(${JSON.stringify(options)})</script><script src="/collaboration-utils.js"></script><script src="/password-recovery.js"></script><script src="/collaboration.js"></script></body></html>`});
    if(['/collaboration.css','/collaboration.js','/collaboration-utils.js','/password-recovery.js'].includes(url.pathname)) return route.fulfill({contentType:url.pathname.endsWith('.css')?'text/css':'text/javascript',body:readFileSync(new URL('../docs/assets/'+(url.pathname.endsWith('.css')?'stylesheets':'javascripts')+url.pathname,import.meta.url),'utf8')});
    if(site) {
      const path=resolve(site,'.'+url.pathname);
      if(path.startsWith(site+sep)) try { return route.fulfill({body:readFileSync(path),contentType:path.endsWith('.css')?'text/css':'application/octet-stream'}); } catch {}
    }
    unexpected.push(url.pathname); return route.abort();
  });
  try {
    const expires=Math.floor(Date.now()/1000)+3600;
    const jwt=[{alg:'HS256',typ:'JWT'},{sub:syntheticUser.id,exp:expires,aud:'authenticated'}].map(x=>Buffer.from(JSON.stringify(x)).toString('base64url')).join('.')+'.c3ludGhldGlj';
    const fragment=options.realSdk?`#type=recovery&access_token=${jwt}&refresh_token=synthetic-only&expires_in=3600&expires_at=${expires}&token_type=bearer`:(options.recovery?(options.invalid?'#error=access_denied&error_code=otp_expired':'#type=recovery&access_token=synthetic-only'):'');
    await page.goto(origin+fragment);
    await run(page,sdkCalls);
    assert.deepEqual(errors,[]); assert.deepEqual(unexpected,[]);
  } finally {await context.close();}
}
test('login remains functional; recovery request generic for success and rejection', async()=>{
  await fixture({},async page=>{
    await page.getByRole('button',{name:'Se connecter',exact:true}).click();
    await page.locator('dialog[open]').getByLabel('Adresse e-mail').fill('synthetic@example.invalid');
    await page.getByLabel('Mot de passe',{exact:true}).fill('synthetic-only-password');
    await page.locator('form').getByRole('button',{name:'Se connecter',exact:true}).click();
    await page.getByText('Utilisateur factice',{exact:true}).waitFor();
    assert.ok((await page.evaluate(()=>window.fixtureCalls)).includes('login'));
  });
  for(const requestError of [false,true]) await fixture({requestError},async page=>{
    await page.getByRole('button',{name:'Se connecter',exact:true}).click();
    await page.getByRole('button',{name:'Mot de passe oublié ?'}).click();
    await page.locator('dialog[open]').getByLabel('Adresse e-mail').fill('synthetic@example.invalid');
    await page.getByRole('button',{name:'Envoyer le lien'}).click();
    await page.getByText(/Si un compte correspond/).waitFor();
    assert.deepEqual(await page.evaluate(()=>window.fixtureCalls),['recover']);
    assert.equal(await page.evaluate(()=>window.fixtureRedirect),origin+'/');
  });
});
for(const width of [320,768,1024,1440]) test(`recovery event, mismatch, password-only update and logout at ${width}px`,async()=>{
  await fixture({recovery:true,width},async page=>{
    await page.getByRole('heading',{name:'Définir un nouveau mot de passe'}).waitFor();
    assert.equal(new URL(page.url()).hash,'');
    const inputs=page.locator('dialog input');
    assert.equal(await inputs.nth(0).getAttribute('type'),'password');
    await inputs.nth(0).fill('synthetic-only-password'); await inputs.nth(1).fill('synthetic-other-password');
    await page.getByRole('button',{name:'Enregistrer le mot de passe'}).click();
    await page.getByText('Les deux mots de passe doivent être identiques.').waitFor();
    assert.ok(!(await page.evaluate(()=>window.fixtureCalls)).some(x=>x.startsWith('update')));
    const dimensions=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth}));
    assert.ok(dimensions.scroll<=dimensions.width);
    if(process.env.TSSR_TEST_SCREENSHOTS) await page.screenshot({path:process.env.TSSR_TEST_SCREENSHOTS+`/recovery-${width}.png`});
    await inputs.nth(1).fill('synthetic-only-password');
    await page.getByRole('button',{name:'Enregistrer le mot de passe'}).click();
    await page.getByText('Mot de passe mis à jour. Vous êtes déconnecté.').waitFor();
    await page.locator('dialog').waitFor({state:'detached'});
    assert.equal(await page.locator('dialog').count(),0);
    assert.ok(await page.getByRole('button',{name:'Se connecter',exact:true}).isVisible());
    const calls=await page.evaluate(()=>window.fixtureCalls);
    assert.deepEqual(calls.filter(x=>x.startsWith('update')||x==='logout'),['update:password','logout']);
    assert.ok(!calls.some(x=>x.startsWith('table:')));
    assert.equal(await page.evaluate(()=>window.fixtureAuthOptions.persistSession),false);
  });
});
test('expired link offers closure without password update',async()=>{
  await fixture({recovery:true,invalid:true},async page=>{
    await page.getByText(/Ce lien est invalide ou a expiré/).waitFor();
    assert.equal(new URL(page.url()).hash,'');
    assert.ok(await page.getByRole('button',{name:'Enregistrer le mot de passe'}).isDisabled());
    await page.getByRole('button',{name:'Fermer cette session',exact:true}).click();
    await page.getByText('Session de récupération fermée.').waitFor();
    assert.ok(!(await page.evaluate(()=>window.fixtureCalls)).some(x=>x.startsWith('update')));
  });
});
test('pinned real Supabase SDK consumes recovery fragment, updates password and signs out', {skip:!process.env.TSSR_TEST_SUPABASE_BUNDLE}, async()=>{
  await fixture({realSdk:true,recovery:true},async(page,calls)=>{
    await page.getByRole('heading',{name:'Définir un nouveau mot de passe'}).waitFor();
    const inputs=page.locator('dialog input');
    await inputs.nth(0).fill('synthetic-only-password'); await inputs.nth(1).fill('synthetic-only-password');
    await page.getByRole('button',{name:'Enregistrer le mot de passe'}).click();
    await page.getByText('Mot de passe mis à jour. Vous êtes déconnecté.').waitFor();
    assert.equal(new URL(page.url()).hash,'');
    assert.equal(calls.filter(c=>c==='PUT /auth/v1/user').length,1);
    assert.equal(calls.filter(c=>c==='POST /auth/v1/logout').length,1);
    assert.ok(!calls.some(c=>c.includes('/rest/')||c.includes('/functions/')));
  });
});
