// Regression test for the beta: every screen, every main interaction, no page errors.
const { chromium } = require('playwright');
const BASE = process.argv[2] || 'http://127.0.0.1:8770/physik-beta/';
const OUT = require('path').join(__dirname, 'out') + '/';
require('fs').mkdirSync(OUT, { recursive: true });
let fails = 0;
const ok = (c, m) => { if (!c) { fails++; console.log('FAIL', m); } else console.log('ok  ', m); };
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block' });
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', e => errs.push('PAGEERR ' + e.message));
  p.on('console', m => { if (m.type() === 'error' && !/mp4|Failed to load resource/.test(m.text())) errs.push('CONSOLE ' + m.text()); });
  await p.goto(BASE); await p.evaluate(() => localStorage.clear()); await p.reload(); await p.waitForTimeout(400);
  const active = () => p.$eval('.screen.active', e => e.id);
  ok(await active() === 'frage', 'start screen');
  ok((await p.textContent('#greeting')).length > 3, 'greeting');
  await p.click('#btn-will'); ok(await active() === 'faecher', 'faecher');
  const tiles = await p.$$eval('#grid > *', e => e.length); ok(tiles >= 6, 'subject tiles ' + tiles);
  const overflow = await p.evaluate(() => document.documentElement.scrollWidth - innerWidth); ok(overflow <= 0, 'no horizontal overflow on faecher (' + overflow + ')');
  // E2
  await p.evaluate(() => go({ id: 'e2' })); await p.waitForSelector('[data-e2topic]'); ok(true, 'e2 list');
  await p.click('[data-e2topic="optik"]'); await p.waitForSelector('#e2-topic [data-learn]'); ok(await active() === 'e2t', 'e2 topic');
  await p.click('#e2-topic [data-learn]'); await p.waitForSelector('.fc-show'); ok(await active() === 'e2k', 'e2 session');
  await p.click('.fc-show'); await p.click('.fc-got'); await p.waitForTimeout(150);
  await p.click('.fc-show'); await p.click('.fc-again'); await p.waitForTimeout(150);
  const box = await p.evaluate(() => JSON.parse(localStorage.getItem('e2-box'))); ok(Object.values(box).includes(1) && Object.values(box).includes(0), 'e2 box got/again saved');
  const log = await p.evaluate(() => Object.keys(JSON.parse(localStorage.getItem('stern-log')))); ok(log.length === 2, 'memory log has 2 entries');
  // RU switch inside card
  await p.click('#e2-cards [data-lang="ru"]'); await p.waitForTimeout(100); ok((await p.textContent('.fc-show')).includes('Показать'), 'RU switch in card');
  await p.click('#e2-cards [data-lang="de"]');
  // Ana3
  await p.evaluate(() => go({ id: 'ana3' })); await p.waitForSelector('#ana3-list [data-topic]'); ok(true, 'ana3 list');
  await p.click('#ana3-list [data-topic="res"]'); await p.waitForSelector('#ana3-thema .step'); ok(await active() === 'thema', 'ana3 topic');
  const kat = await p.$$eval('#ana3-thema .katex', e => e.length); ok(kat > 0, 'KaTeX rendered ' + kat);
  await p.click('#ana3-thema .alle'); await p.click('#verstanden'); await p.waitForTimeout(700);
  ok((await p.evaluate(() => JSON.parse(localStorage.getItem('ana3-done')))).includes('res'), 'verstanden saved');
  ok(await active() === 'thema', 'went on to next topic');
  // Stern
  await p.evaluate(() => go({ id: 'stern' })); await p.waitForTimeout(1500);
  ok(await active() === 'stern', 'stern screen');
  const stars = await p.evaluate(() => typeof skyCache !== 'undefined' && skyCache ? skyCache.reduce((n, c) => n + c.items.length, 0) : 0); ok(stars === 110, 'stars ' + stars);
  // Orakel
  await p.evaluate(() => go({ id: 'orakel' })); await p.waitForSelector('#ok-card'); await p.click('#ok-card'); await p.waitForTimeout(900);
  ok(await p.evaluate(() => !document.getElementById('ok-actions').hidden), 'orakel opens');
  // Labor
  await p.evaluate(() => go({ id: 'labor' })); ok((await p.textContent('#prompt-preview')).includes('Laborprotokoll'), 'labor prompt built');
  // tp2, hilfe, videos
  await p.evaluate(() => go({ id: 'tp2' })); ok(await p.evaluate(() => document.getElementById('scene-tp2').classList.contains('on')), 'tp2 scene on');
  await p.evaluate(() => go({ id: 'hilfe', fach: 'schach' })); ok((await p.textContent('#hilfe-title')).length > 0, 'hilfe schach');
  await p.evaluate(() => go({ id: 'katze' })); ok(await p.evaluate(() => document.getElementById('scene-happy').classList.contains('on')), 'katze scene');
  await p.evaluate(() => go({ id: 'opa' })); ok(await p.evaluate(() => document.getElementById('scene-gloom').classList.contains('on') && !document.getElementById('scene-happy').classList.contains('on')), 'opa scene switch');
  // back navigation
  await p.goBack(); await p.waitForTimeout(200); ok(await active() === 'katze', 'history back');
  await p.goto(BASE); await p.waitForTimeout(300);
  await p.click('#btn-ja'); ok(await active() === 'ja', 'ja video screen');
  await p.goBack(); await p.waitForTimeout(200); ok(await active() === 'frage', 'back to start');
  await b.close();
  console.log(errs.join('\n') || 'no page errors');
  console.log(fails ? fails + ' FAILED' : 'ALL OK');
})();
