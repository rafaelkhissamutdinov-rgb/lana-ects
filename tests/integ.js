const { chromium } = require('playwright');
const OUT = require('path').join(__dirname, 'out') + '/';
require('fs').mkdirSync(OUT, { recursive: true });
let fails = 0; const ok = (c, m) => { console.log(c ? 'ok  ' : 'FAIL', m); if (!c) fails++; };
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  for (const [vw, vh, tag] of [[390, 844, 'm'], [1440, 900, 'd']]) {
    const ctx = await b.newContext({ viewport: { width: vw, height: vh }, serviceWorkers: 'block' });
    const p = await ctx.newPage();
    const errs = [], bad = [];
    p.on('pageerror', e => errs.push(e.message));
    p.on('response', r => { if (r.status() >= 400 && !/\.mp4/.test(r.url())) bad.push(r.status() + ' ' + r.url()); });
    await p.goto('http://127.0.0.1:8770/physik-beta/'); await p.evaluate(() => localStorage.clear()); await p.reload(); await p.waitForTimeout(600);
    await p.screenshot({ path: OUT + tag + '-frage.png' });
    await p.click('#btn-will'); await p.waitForTimeout(500); await p.screenshot({ path: OUT + tag + '-faecher.png', fullPage: true });
    // gallery
    await p.click('.fach:has-text("Experimente")'); await p.waitForSelector('.sim-tile');
    ok((await p.$$eval('.sim-tile', e => e.length)) === 11, tag + ' gallery shows 11 experiments');
    await p.waitForTimeout(300); await p.screenshot({ path: OUT + tag + '-gallery.png', fullPage: true });
    await p.click('.sim-tile >> nth=4'); await p.waitForSelector('.sim-stage canvas'); ok(await p.$eval('.screen.active', e => e.id) === 'sim', tag + ' tile opens experiment');
    // card link → experiment
    await p.evaluate(() => go({ id: 'e2k', topic: ['brewster'] })); await p.waitForSelector('.fc-show'); await p.click('.fc-show');
    ok(await p.$('#fc-back .sim-link') !== null, tag + ' card has experiment link');
    await p.click('#fc-back .sim-link'); await p.waitForSelector('.sim-stage canvas'); ok((await p.textContent('#sim-root h2')).includes('Brewster'), tag + ' card link opens Brechung');
    // chips back to the card
    await p.click('.sim-chip >> nth=0'); await p.waitForSelector('.fc-show'); ok(await p.$eval('.screen.active', e => e.id) === 'e2k', tag + ' chip opens card session');
    // topic link
    await p.evaluate(() => go({ id: 'thema', topic: 'res' })); await p.waitForSelector('#ana3-thema .sim-link'); ok(true, tag + ' topic has experiment link');
    // star sheet link
    await p.evaluate(() => go({ id: 'stern' })); await p.waitForSelector('#sky-cv'); await p.waitForTimeout(800);
    await p.evaluate(() => { const c = skyCache.find(c => c.id === 'e2-optik'); zoomToCon(c); }); await p.waitForTimeout(900);
    await p.evaluate(() => openStar('e2:brewster')); await p.waitForTimeout(300);
    ok(await p.$('#stern-sheet .sim-link') !== null, tag + ' star sheet has experiment link');
    // RU
    await p.evaluate(() => { setLang('ru'); go({ id: 'sims' }); }); await p.waitForSelector('.sim-tile'); ok((await p.textContent('#sims-root h2')).includes('Эксперименты'), tag + ' RU gallery');
    await p.screenshot({ path: OUT + tag + '-gallery-ru.png' });
    await p.evaluate(() => go({ id: 'sim', sim: 'feld' })); await p.waitForSelector('.sim-what'); ok((await p.textContent('.sim-what')).includes('силовые'), tag + ' RU experiment text');
    await p.evaluate(() => setLang('de'));
    for (const s of ['e2', 'ana3', 'labor', 'orakel', 'tp2']) { await p.evaluate(s => go({ id: s }), s); await p.waitForTimeout(900); await p.screenshot({ path: OUT + tag + '-' + s + '.png' }); }
    const over = await p.evaluate(() => document.documentElement.scrollWidth - innerWidth); ok(over <= 0, tag + ' no horizontal overflow');
    ok(!errs.length, tag + ' no page errors ' + errs.join(' | '));
    ok(!bad.length, tag + ' no failed requests ' + bad.join(' | '));
    await ctx.close();
  }
  await b.close(); console.log(fails ? fails + ' FAILED' : 'ALL OK');
})();
