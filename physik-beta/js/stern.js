// ---------- Sternwarte ----------
const ST_UI = {
  de: { title: 'Sternwarte', sub: 'Jeder Stern ist etwas, das du gelernt hast. Was du nicht wiederholst, verblasst – wie im echten Kopf.',
        lit: 'leuchten', fading: 'verblassen', dark: 'noch dunkel', review: '🌠 Verblassende wiederholen', music: '🎵 Sphärenmusik',
        strength: 'Erinnerung', never: 'Noch nicht gelernt – ein dunkler Stern.', ago: d => d < 1 ? 'zuletzt heute' : `zuletzt vor ${Math.round(d)} ${Math.round(d) === 1 ? 'Tag' : 'Tagen'}`,
        learnCard: '🃏 Karte jetzt lernen', learnTopic: '📖 Thema öffnen', nothing: 'Gerade verblasst nichts. Schöner Himmel! ✨', e2: 'Experimentalphysik II', ana: 'Analysis 3',
        reset: '↺ Fortschritt zurücksetzen', resetQ: 'Was willst du zurücksetzen?', all: 'Alles', onlyE2: 'Nur E2-Karten', onlyAna: 'Nur Analysis 3',
        sure: 'Bist du sicher?', sureTxt: n => `${n} ${n === 1 ? 'Stern wird' : 'Sterne werden'} dunkel. Einmal rückgängig machen geht danach noch.`,
        empty: 'Hier leuchtet noch nichts – es gibt nichts zurückzusetzen.', yes: 'Ja, zurücksetzen', cancel: 'Abbrechen', done: 'Zurückgesetzt.', undo: '↶ Rückgängig',
        undoWhat: { got: 'letzte Karte „Gewusst“', again: 'letzte Karte „Nochmal“', anaOn: 'letztes „verstanden“', anaOff: 'letztes „nicht mehr verstanden“',
                    'reset-all': 'Zurücksetzen', 'reset-e2': 'Zurücksetzen (E2)', 'reset-ana': 'Zurücksetzen (Ana 3)' } },
  ru: { title: 'Обсерватория', sub: 'Каждая звезда — то, что ты выучил(а). То, что не повторяешь, гаснет — как в настоящей памяти.',
        lit: 'горят', fading: 'гаснут', dark: 'ещё тёмные', review: '🌠 Повторить гаснущие', music: '🎵 Музыка сфер',
        strength: 'Память', never: 'Ещё не выучено — тёмная звезда.', ago: d => d < 1 ? 'последний раз сегодня' : `последний раз ${Math.round(d)} дн. назад`,
        learnCard: '🃏 Учить карточку', learnTopic: '📖 Открыть тему', nothing: 'Сейчас ничего не гаснет. Красивое небо! ✨', e2: 'Экспериментальная физика II', ana: 'Анализ 3',
        reset: '↺ Сбросить прогресс', resetQ: 'Что сбросить?', all: 'Всё', onlyE2: 'Только карточки E2', onlyAna: 'Только Анализ 3',
        sure: 'Точно?', sureTxt: n => `Погаснет звёзд: ${n}. Потом это ещё можно один раз отменить.`,
        empty: 'Здесь ещё ничего не горит — сбрасывать нечего.', yes: 'Да, сбросить', cancel: 'Отмена', done: 'Сброшено.', undo: '↶ Отменить',
        undoWhat: { got: 'последняя карточка «Знаю»', again: 'последняя карточка «Ещё раз»', anaOn: 'последнее «понятно»', anaOff: 'последнее снятие «понятно»',
                    'reset-all': 'сброс', 'reset-e2': 'сброс (E2)', 'reset-ana': 'сброс (Ана 3)' } },
};
const st = k => ST_UI[anaLang][k];
// where each constellation sits on the 1000 x 1500 sky
const SKY_CENTERS = [[230, 190], [580, 150], [840, 300], [180, 520], [500, 470], [810, 610], [270, 800],
                     [620, 790], [820, 960], [190, 1100], [500, 1090], [800, 1270], [320, 1350]];
// short names for the sky, so neighbouring labels do not overlap
const SKY_SHORT = { 'e2-strom': ['Stromkreise', 'Цепи тока'], 'e2-induktion': ['Induktion', 'Индукция'],
  'e2-maxwell': ['EM-Wellen', 'ЭМ-волны'], 'e2-wellenoptik': ['Wellenoptik', 'Волновая оптика'],
  'e2-rel': ['Relativität', 'Относительность'], 'e2-extra': ['Mathe-Werkzeug', 'Математика'],
  'e2-optik': ['Optik', 'Оптика'], 'e2-magnet': ['Magnetfelder', 'Магнитные поля'],
  'ana-0': ['Komplexe Analysis', 'Комплексный анализ'], 'ana-1': ['Fourier', 'Фурье'],
  'ana-2': ['Lineare PDE', 'Линейные PDE'], 'ana-3': ['Hilberträume', 'Гильбертовы пр.'] };
const SKY_NOTES = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33, 659.25, 783.99, 880.0, 1046.5, 1174.66, 1318.51];

function rng(seedStr) {   // small deterministic random generator, so the sky looks the same every time
  let h = 1779033703;
  for (const ch of seedStr) h = Math.imul(h ^ ch.charCodeAt(0), 3432918353), h = (h << 13) | (h >>> 19);
  return () => { h = Math.imul(h ^ (h >>> 16), 2246822507); h = Math.imul(h ^ (h >>> 13), 3266489909); return ((h ^= h >>> 16) >>> 0) / 4294967296; };
}
function buildConstellations() {
  const list = [];
  for (const tp of E2.topics) list.push({ id: 'e2-' + tp.id, kind: 'e2', emoji: tp.emoji, title: tp.title, topic: tp.id,
    items: tp.cards.map(cid => ({ id: 'e2:' + cid, label: E2.cards[cid].q, go: { id: 'e2k', topic: [cid] } })) });
  ANA3.meta.parts.forEach((part, i) => {
    const ids = (i === 0 ? ['toolkit'] : []).concat(part.topics);
    list.push({ id: 'ana-' + i, kind: 'ana', emoji: ['🌀', '🎚️', '🌊', '🌌'][i], title: part.title, topic: null,
      items: ids.map(tid => ({ id: 'ana:' + tid, label: ANA3.topics[tid].title, go: { id: 'thema', topic: tid } })) });
  });
  list.forEach((c, ci) => {
    const [cx, cy] = SKY_CENTERS[ci], r = rng(c.id), radius = 70 + c.items.length * 5;
    const pts = [];
    for (const it of c.items) {           // scatter stars, keeping a minimum distance
      let best = null;
      for (let k = 0; k < 30; k++) {
        const a = r() * Math.PI * 2, d = Math.sqrt(r()) * radius;
        const p = [cx + Math.cos(a) * d, cy + Math.sin(a) * d * 0.8];
        const minD = Math.min(Infinity, ...pts.map(q => Math.hypot(q[0] - p[0], q[1] - p[1])));
        if (!best || minD > best.minD) best = { p, minD };
        if (minD > 38) break;
      }
      pts.push(best.p);
      it.x = best.p[0]; it.y = best.p[1];
    }
    // constellation lines: minimum spanning tree (Prim)
    const inTree = [0], edges = [];
    while (inTree.length < pts.length) {
      let bestE = null;
      for (const a of inTree) for (let b = 0; b < pts.length; b++) {
        if (inTree.includes(b)) continue;
        const d = Math.hypot(pts[a][0] - pts[b][0], pts[a][1] - pts[b][1]);
        if (!bestE || d < bestE.d) bestE = { a, b, d };
      }
      inTree.push(bestE.b); edges.push([bestE.a, bestE.b]);
    }
    c.edges = edges; c.cx = cx; c.cy = cy; c.radius = radius; c.note = SKY_NOTES[ci];
  });
  return list;
}
let skyCache = null;

function renderStern() {
  const root = document.getElementById('stern-root');
  root.lang = anaLang;
  if (!skyCache) skyCache = buildConstellations();
  let lit = 0, fading = 0, dark = 0;
  const fadingCards = [];
  for (const c of skyCache) {
    let sum = 0, n = 0;
    for (const it of c.items) {
      it.b = memStrength(it.id);
      if (it.b === null) dark++;
      else { (it.b < 0.5 ? fading++ : lit++); sum += it.b; n++; if (it.b < 0.7 && it.id.startsWith('e2:')) fadingCards.push(it); }
    }
    c.avg = n ? sum / n : 0; c.learned = n;
  }
  fadingCards.sort((a, b) => a.b - b.b);
  const colorOf = c => c.kind === 'e2' ? '#ffd88a' : '#9fd0ff';
  let svg = `<svg class="sky" viewBox="0 0 1000 1500" role="img" aria-label="${st('title')}">
    <defs><filter id="glow" x="-2" y="-2" width="5" height="5"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>`;
  for (const c of skyCache) {
    for (const [a, b] of c.edges) {
      const A = c.items[a], B = c.items[b];
      const o = Math.min(A.b || 0, B.b || 0);
      svg += `<line x1="${A.x.toFixed(1)}" y1="${A.y.toFixed(1)}" x2="${B.x.toFixed(1)}" y2="${B.y.toFixed(1)}" stroke="${colorOf(c)}" stroke-width="1.6" opacity="${(0.06 + 0.5 * o).toFixed(2)}"/>`;
    }
    c.items.forEach((it, i) => {
      const b = it.b, rr = b === null ? 2.2 : 3 + 6 * b, op = b === null ? 0.22 : 0.25 + 0.75 * b;
      const fill = b === null ? '#c8c2e0' : colorOf(c);
      const tw = b !== null && b > 0.6 ? ` tw" style="animation-duration:${(2 + (i % 5) * 0.6).toFixed(1)}s` : '';
      svg += `<circle class="st${tw}" cx="${it.x.toFixed(1)}" cy="${it.y.toFixed(1)}" r="${rr.toFixed(1)}" fill="${fill}" opacity="${op.toFixed(2)}"${b !== null && b > 0.3 ? ' filter="url(#glow)"' : ''}/>`;
      svg += `<circle class="hit" cx="${it.x.toFixed(1)}" cy="${it.y.toFixed(1)}" r="22" data-star="${it.id}" role="button" aria-label="${it.label[anaLang].replace(/<[^>]+>|\$/g, '').replace(/"/g, '')}"/>`;
    });
    const ly = c.cy + c.radius * 0.8 + 38;
    svg += `<text class="lbl" x="${c.cx}" y="${ly}" text-anchor="middle" data-con="${c.id}">${c.emoji} ${SKY_SHORT[c.id] ? SKY_SHORT[c.id][anaLang === 'ru' ? 1 : 0] : c.title[anaLang].replace(/\$[^$]*\$/g, '').slice(0, 20)}</text>`;
    svg += `<text class="lbl-sub" x="${c.cx}" y="${ly + 28}" text-anchor="middle">${c.learned}/${c.items.length} · ${c.kind === 'e2' ? 'E2' : 'Ana 3'}</text>`;
  }
  svg += '</svg>';
  const undoInfo = store.get('progress-undo', null);
  root.innerHTML = `
    <div class="ana-top"><span></span>${langSwitch()}</div>
    <h2>🌌 ${st('title')}</h2>
    <p class="sub">${st('sub')}</p>
    <div class="stern-stats"><span><b>${lit}</b>${st('lit')}</span><span><b>${fading}</b>${st('fading')}</span><span><b>${dark}</b>${st('dark')}</span></div>
    <div class="stern-btns">
      <button type="button" class="fade-btn" id="st-review">${st('review')}${fadingCards.length ? ' (' + Math.min(fadingCards.length, 15) + ')' : ''}</button>
      <button type="button" id="st-music" aria-pressed="${sphaeren.on}">${st('music')}</button>
    </div>
    ${svg}
    <div class="stern-foot">
      ${undoInfo ? `<button type="button" id="st-undo" class="st-undo">${st('undo')}: ${st('undoWhat')[undoInfo.what] || ''}</button>` : ''}
      <button type="button" id="st-reset" class="st-reset">${st('reset')}</button>
    </div>`;
  wireLang(root, () => { closeSheet(); renderStern(); });
  root.querySelector('#st-reset').addEventListener('click', askReset);
  const ub = root.querySelector('#st-undo');
  if (ub) ub.addEventListener('click', () => { undoLast(); closeSheet(); renderStern(); });
  root.querySelectorAll('[data-star]').forEach(h => h.addEventListener('click', () => openStar(h.dataset.star)));
  root.querySelectorAll('[data-con]').forEach(l => l.addEventListener('click', () => {
    const c = skyCache.find(x => x.id === l.dataset.con);
    go(c.kind === 'e2' ? { id: 'e2t', topic: c.topic } : { id: 'ana3' });
  }));
  root.querySelector('#st-review').addEventListener('click', () => {
    if (!fadingCards.length) { showSheet(`<p class="sh-q">${st('nothing')}</p>`); return; }
    go({ id: 'e2k', topic: fadingCards.slice(0, 15).map(it => it.id.slice(3)) });
  });
  root.querySelector('#st-music').addEventListener('click', e => {
    sphaeren.on ? stopSphaeren() : startSphaeren();
    e.target.setAttribute('aria-pressed', String(sphaeren.on));
  });
}

function showSheet(html) {
  const sh = document.getElementById('stern-sheet');
  sh.innerHTML = `<div class="sh-top"><span></span><button type="button" class="sh-close" aria-label="close">✕</button></div>` + html;
  sh.hidden = false;
  sh.querySelector('.sh-close').addEventListener('click', closeSheet);
  tex(sh);
  return sh;
}
function closeSheet() { document.getElementById('stern-sheet').hidden = true; }
function askReset() {
  const sh = showSheet(`<p class="sh-q">${st('resetQ')}</p>
    <div class="sh-choice"><button type="button" data-scope="all">${st('all')}</button>
    <button type="button" data-scope="e2">${st('onlyE2')}</button><button type="button" data-scope="ana">${st('onlyAna')}</button></div>`);
  sh.querySelectorAll('[data-scope]').forEach(b => b.addEventListener('click', () => confirmReset(b.dataset.scope)));
}
function confirmReset(scope) {
  const n = Object.keys(memLogData).filter(k => scope === 'all' || k.startsWith(scope + ':')).length;
  if (!n) { showSheet(`<p class="sh-q">${st('empty')}</p>`); return; }
  const sh = showSheet(`<p class="sh-q">⚠️ ${st('sure')}</p><p class="sh-info">${st('sureTxt')(n)}</p>
    <div class="sh-choice"><button type="button" class="sh-danger">${st('yes')}</button><button type="button" class="sh-cancel">${st('cancel')}</button></div>`);
  sh.querySelector('.sh-cancel').addEventListener('click', closeSheet);
  sh.querySelector('.sh-danger').addEventListener('click', () => {
    resetProgress(scope);
    renderStern();
    const done = showSheet(`<p class="sh-q">${st('done')}</p><div class="sh-choice"><button type="button" class="sh-undo">${st('undo')}</button></div>`);
    done.querySelector('.sh-undo').addEventListener('click', () => { undoLast(); closeSheet(); renderStern(); });
  });
}
function openStar(id) {
  let item, con;
  for (const c of skyCache) { const f = c.items.find(i => i.id === id); if (f) { item = f; con = c; } }
  const b = memStrength(id), m = memLogData[id];
  const sh = showSheet(`
    <div class="sh-q">${item.label[anaLang]}</div>
    ${b === null ? `<p class="sh-info">${st('never')}</p>` : `
      <div class="meter"><div style="width:${Math.round(b * 100)}%"></div></div>
      <p class="sh-info">${st('strength')} ${Math.round(b * 100)} % · ${st('ago')((Date.now() - m.t) / 864e5)}</p>`}
    <button type="button" class="sh-go">${con.kind === 'e2' ? st('learnCard') : st('learnTopic')}</button>`);
  sh.querySelector('.sh-top span').textContent = con.emoji + ' ' + (con.kind === 'e2' ? st('e2') : st('ana'));
  sh.querySelector('.sh-go').addEventListener('click', () => { closeSheet(); go(item.go); });
}

// Sphärenmusik: every constellation is a note of a pentatonic scale. Bright constellations sound
// clear and loud; fading ones go quiet and slightly out of tune; never-learned ones stay silent.
const sphaeren = { on: false, ctx: null, timer: null, out: null };
function startSphaeren() {
  if (!skyCache) return;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  sphaeren.ctx = sphaeren.ctx || new AC();
  const ctx = sphaeren.ctx;
  ctx.resume();
  if (!sphaeren.out) {   // soft echo for a sense of space
    const master = ctx.createGain(); master.gain.value = 0.5;
    const delay = ctx.createDelay(); delay.delayTime.value = 0.38;
    const fb = ctx.createGain(); fb.gain.value = 0.38;
    delay.connect(fb); fb.connect(delay);
    master.connect(ctx.destination); master.connect(delay); delay.connect(ctx.destination);
    sphaeren.out = master;
  }
  sphaeren.on = true;
  let step = 0;
  const play = () => {
    const voices = skyCache.filter(c => c.learned > 0);
    if (!voices.length) {   // an empty sky still hums very quietly
      tone(196, 0.04, 0);
    } else {
      const c = voices[step % voices.length];
      const detune = (1 - c.avg) * 35 * (step % 2 ? 1 : -1);   // forgotten = out of tune
      tone(c.note, 0.05 + 0.2 * c.avg, detune);
      if (step % 4 === 0) tone(c.note / 2, 0.04 + 0.08 * c.avg, 0);
    }
    step++;
  };
  play();
  sphaeren.timer = setInterval(play, 650);
}
function tone(freq, vol, cents) {
  const ctx = sphaeren.ctx, t0 = ctx.currentTime;
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = 'triangle'; o.frequency.value = freq; o.detune.value = cents;
  g.gain.setValueAtTime(0, t0);
  g.gain.linearRampToValueAtTime(vol, t0 + 0.03);
  g.gain.exponentialRampToValueAtTime(0.0008, t0 + 2.4);
  o.connect(g); g.connect(sphaeren.out);
  o.start(t0); o.stop(t0 + 2.5);
}
function stopSphaeren() {
  clearInterval(sphaeren.timer); sphaeren.timer = null; sphaeren.on = false;
  const b = document.getElementById('st-music'); if (b) b.setAttribute('aria-pressed', 'false');
}

function showStern() {
  closeSheet();
  Promise.all([loadE2(), loadAna3()]).then(renderStern).catch(() => {
    document.getElementById('stern-root').innerHTML = `<p class="loading">${loadFailed()}</p>`;
  });
}

route('stern', { enter: showStern, leave: () => { stopSphaeren(); closeSheet(); }, scene: 'scene-orakel' });
