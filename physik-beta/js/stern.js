// ---------- Sternwarte: everything you learned, as a sky that fades along the forgetting curve ----------
// Every E2 card and every Analysis-3 topic is a star. Its light is the memory strength
// e^(-days / stability) from memory.js. Stars that were lit since the last visit ignite on screen.
const ST_UI = {
  de: { title: 'Sternwarte', lit: 'leuchten', fading: 'verblassen', dark: 'noch dunkel',
        review: 'Wiederholen', music: 'Sphärenmusik', legend: 'So liest du den Himmel', menu: 'Mehr',
        hintOverview: 'Tippe auf ein Sternbild, um hineinzuzoomen.', hintZoom: 'Tippe auf einen Stern. Ziehen zum Verschieben.', overview: 'Ganzer Himmel',
        strength: 'Erinnerung', never: 'Noch nicht gelernt – hier ist noch ein leerer Platz am Himmel.',
        ago: d => d < 1 ? 'zuletzt heute' : `zuletzt vor ${Math.round(d)} ${Math.round(d) === 1 ? 'Tag' : 'Tagen'}`,
        learnCard: 'Karte jetzt lernen', learnTopic: 'Thema öffnen', nothing: 'Gerade verblasst nichts. Schöner Himmel!',
        e2: 'Experimentalphysik II', ana: 'Analysis 3', conLit: (a, n) => `${a} von ${n} Sternen leuchten`, conReview: 'Dieses Sternbild üben', conOpen: 'Thema öffnen',
        ignite: n => n === 1 ? 'Ein neuer Stern ist aufgegangen' : `${n} neue Sterne sind aufgegangen`,
        time: 'Zeitreise', today: 'heute', inDays: d => `in ${d} ${d === 1 ? 'Tag' : 'Tagen'}`,
        timeNote: d => `So sieht dein Himmel ${d === 1 ? 'morgen' : 'in ' + d + ' Tagen'} aus, wenn du bis dahin nichts wiederholst.`,
        lgLit: 'Hell: frisch gelernt. Je öfter du etwas weißt, desto länger hält es.',
        lgFade: 'Mit Ring: verblasst gerade. Jetzt wiederholen, dann leuchtet er wieder.',
        lgDark: 'Leerer Kreis: noch nicht gelernt.',
        lgHow: 'Jede Karte, die du weißt, und jedes Thema, das du verstanden hast, entzündet einen Stern. Ohne Wiederholung verblasst er langsam – genau wie im Kopf.',
        reset: 'Fortschritt zurücksetzen', resetQ: 'Was willst du zurücksetzen?', all: 'Alles', onlyE2: 'Nur E2-Karten', onlyAna: 'Nur Analysis 3',
        sure: 'Bist du sicher?', sureTxt: n => `${n} ${n === 1 ? 'Stern wird' : 'Sterne werden'} dunkel. Einmal rückgängig machen geht danach noch.`,
        empty: 'Hier leuchtet noch nichts – es gibt nichts zurückzusetzen.', yes: 'Ja, zurücksetzen', cancel: 'Abbrechen', done: 'Zurückgesetzt.', undo: 'Rückgängig',
        undoWhat: { got: 'letzte Karte „Gewusst“', again: 'letzte Karte „Nochmal“', anaOn: 'letztes „verstanden“', anaOff: 'letztes „nicht mehr verstanden“',
                    'reset-all': 'Zurücksetzen', 'reset-e2': 'Zurücksetzen (E2)', 'reset-ana': 'Zurücksetzen (Ana 3)' } },
  ru: { title: 'Обсерватория', lit: 'горят', fading: 'гаснут', dark: 'ещё тёмные',
        review: 'Повторить', music: 'Музыка сфер', legend: 'Как читать небо', menu: 'Ещё',
        hintOverview: 'Коснись созвездия, чтобы приблизить.', hintZoom: 'Коснись звезды. Тяни, чтобы двигать.', overview: 'Всё небо',
        strength: 'Память', never: 'Ещё не выучено – на небе пока пустое место.',
        ago: d => d < 1 ? 'последний раз сегодня' : `последний раз ${Math.round(d)} дн. назад`,
        learnCard: 'Учить карточку', learnTopic: 'Открыть тему', nothing: 'Сейчас ничего не гаснет. Красивое небо!',
        e2: 'Экспериментальная физика II', ana: 'Анализ 3', conLit: (a, n) => `Горят ${a} из ${n} звёзд`, conReview: 'Повторить созвездие', conOpen: 'Открыть тему',
        ignite: n => n === 1 ? 'Зажглась новая звезда' : `Зажглось новых звёзд: ${n}`,
        time: 'Машина времени', today: 'сегодня', inDays: d => `через ${d} дн.`,
        timeNote: d => `Так будет выглядеть небо ${d === 1 ? 'завтра' : 'через ' + d + ' дн.'}, если ничего не повторять.`,
        lgLit: 'Яркая: выучено недавно. Чем чаще знаешь, тем дольше держится.',
        lgFade: 'С кольцом: гаснет. Повтори сейчас – и она снова засияет.',
        lgDark: 'Пустой кружок: ещё не выучено.',
        lgHow: 'Каждая карточка, которую ты знаешь, и каждая понятая тема зажигает звезду. Без повторения она медленно гаснет – как и в голове.',
        reset: 'Сбросить прогресс', resetQ: 'Что сбросить?', all: 'Всё', onlyE2: 'Только карточки E2', onlyAna: 'Только Анализ 3',
        sure: 'Точно?', sureTxt: n => `Погаснет звёзд: ${n}. Потом это ещё можно один раз отменить.`,
        empty: 'Здесь ещё ничего не горит – сбрасывать нечего.', yes: 'Да, сбросить', cancel: 'Отмена', done: 'Сброшено.', undo: 'Отменить',
        undoWhat: { got: 'последняя карточка «Знаю»', again: 'последняя карточка «Ещё раз»', anaOn: 'последнее «понятно»', anaOff: 'последнее снятие «понятно»',
                    'reset-all': 'сброс', 'reset-e2': 'сброс (E2)', 'reset-ana': 'сброс (Ана 3)' } },
};
const st = k => ST_UI[anaLang][k];

// ---------- layout of the sky (a 1000 x 1500 world) ----------
const SKY_W = 1000, SKY_H = 1500;
const SKY_CENTERS = [[230, 190], [580, 150], [840, 300], [180, 520], [500, 470], [810, 610], [270, 800],
                     [620, 790], [820, 960], [190, 1100], [500, 1090], [800, 1270], [320, 1350]];
// short names for the sky, so neighbouring labels do not overlap
const SKY_SHORT = { 'e2-estat': ['Elektrostatik', 'Электростатика'], 'e2-strom': ['Stromkreise', 'Цепи тока'], 'e2-induktion': ['Induktion', 'Индукция'],
  'e2-maxwell': ['EM-Wellen', 'ЭМ-волны'], 'e2-wellenoptik': ['Wellenoptik', 'Волновая оптика'],
  'e2-rel': ['Relativität', 'Относительность'], 'e2-extra': ['Mathe-Werkzeug', 'Математика'],
  'e2-optik': ['Optik', 'Оптика'], 'e2-magnet': ['Magnetfelder', 'Магнитные поля'],
  'ana-0': ['Komplexe Analysis', 'Комплексный анализ'], 'ana-1': ['Fourier', 'Фурье'],
  'ana-2': ['Lineare PDE', 'Линейные PDE'], 'ana-3': ['Hilberträume', 'Гильбертовы пр.'] };
const SKY_NOTES = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33, 659.25, 783.99, 880.0, 1046.5, 1174.66, 1318.51];
const KIND_RGB = { e2: '255,214,140', ana: '150,200,255' };   // warm light for physics, cool light for analysis

function rng(seedStr) {   // small deterministic random generator, so the sky looks the same every time
  let h = 1779033703;
  for (const ch of seedStr) h = Math.imul(h ^ ch.charCodeAt(0), 3432918353), h = (h << 13) | (h >>> 19);
  return () => { h = Math.imul(h ^ (h >>> 16), 2246822507); h = Math.imul(h ^ (h >>> 13), 3266489909); return ((h ^= h >>> 16) >>> 0) / 4294967296; };
}
function buildConstellations() {
  const list = [];
  for (const tp of E2.topics) list.push({ id: 'e2-' + tp.id, kind: 'e2', title: tp.title, topic: tp.id,
    items: tp.cards.map(cid => ({ id: 'e2:' + cid, label: E2.cards[cid].q, go: { id: 'e2k', topic: [cid] } })) });
  ANA3.meta.parts.forEach((part, i) => {
    const ids = (i === 0 ? ['toolkit'] : []).concat(part.topics);
    list.push({ id: 'ana-' + i, kind: 'ana', title: part.title, topic: null,
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
      it.x = best.p[0]; it.y = best.p[1]; it.ph = r() * 6.28; it.tw = .8 + r() * 1.6;
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
const conName = c => SKY_SHORT[c.id] ? SKY_SHORT[c.id][anaLang === 'ru' ? 1 : 0] : c.title[anaLang];

// ---------- state of the sky view ----------
const sky = {
  cv: null, ctx: null, W: 0, H: 0, dpr: 1,
  cam: { x: SKY_W / 2, y: SKY_H / 2, z: .4 }, fitZ: .4, anim: null,
  t: 0, running: false, raf: 0, last: 0,
  ahead: 0,            // days the time slider looks into the future
  sel: null,           // selected star id
  bursts: [],          // ignition animations { id, item, t0 }
  far: [], milky: null,
  pointers: new Map(), gesture: null,
};
const smooth = x => x <= 0 ? 0 : x >= 1 ? 1 : x * x * (3 - 2 * x);

function computeSky() {
  const at = Date.now() + sky.ahead * 864e5;
  let lit = 0, fading = 0, dark = 0;
  const fadingCards = [];
  for (const c of skyCache) {
    let sum = 0, n = 0, bright = 0;
    for (const it of c.items) {
      it.b = memStrength(it.id, at);
      if (it.b === null) dark++;
      else {
        if (it.b < 0.5) fading++; else { lit++; bright++; }
        sum += it.b; n++;
        if (it.b < 0.7 && it.id.startsWith('e2:')) fadingCards.push(it);
      }
    }
    c.avg = n ? sum / n : 0; c.learned = n; c.bright = bright;
  }
  fadingCards.sort((a, b) => a.b - b.b);
  return { lit, fading, dark, fadingCards };
}

// ---------- background: far stars and a milky way, painted once ----------
function paintMilkyWay() {
  const w = 600, h = 900, c = document.createElement('canvas');
  c.width = w; c.height = h;
  const x = c.getContext('2d'), r = rng('milchstrasse');
  // a soft band running diagonally through the sky
  for (let i = 0; i < 420; i++) {
    const along = r() * 1.3 - .15;
    const bx = w * (.05 + along * .9) + (r() - .5) * 150, by = h * (1 - along) + (r() - .5) * 170;
    const rad = 30 + r() * 110;
    const hue = [[150, 130, 255], [255, 140, 200], [120, 180, 255], [255, 220, 180]][Math.floor(r() * 4)];
    const g = x.createRadialGradient(bx, by, 0, bx, by, rad);
    g.addColorStop(0, `rgba(${hue},${.035 + r() * .04})`); g.addColorStop(1, `rgba(${hue},0)`);
    x.fillStyle = g; x.beginPath(); x.arc(bx, by, rad, 0, 6.283); x.fill();
  }
  // dark dust lanes
  x.globalCompositeOperation = 'destination-out';
  for (let i = 0; i < 70; i++) {
    const along = r() * 1.2 - .1, bx = w * (.05 + along * .9) + (r() - .5) * 60, by = h * (1 - along) + (r() - .5) * 60, rad = 15 + r() * 45;
    const g = x.createRadialGradient(bx, by, 0, bx, by, rad);
    g.addColorStop(0, 'rgba(0,0,0,.35)'); g.addColorStop(1, 'rgba(0,0,0,0)');
    x.fillStyle = g; x.beginPath(); x.arc(bx, by, rad, 0, 6.283); x.fill();
  }
  x.globalCompositeOperation = 'source-over';
  // many tiny stars inside the band
  for (let i = 0; i < 2600; i++) {
    const along = r() * 1.3 - .15, spread = (r() + r() + r() - 1.5) * 120;
    const bx = w * (.05 + along * .9) + spread, by = h * (1 - along) + spread * .9;
    x.fillStyle = `rgba(255,255,255,${.12 + r() * .45})`;
    const s = r() < .08 ? 1.6 : .9;
    x.fillRect(bx, by, s, s);
  }
  // fade every edge, so the texture never shows a straight border
  x.globalCompositeOperation = 'destination-in';
  const fx = x.createLinearGradient(0, 0, w, 0);
  fx.addColorStop(0, 'rgba(0,0,0,0)'); fx.addColorStop(.18, '#000'); fx.addColorStop(.82, '#000'); fx.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = fx; x.fillRect(0, 0, w, h);
  const fy = x.createLinearGradient(0, 0, 0, h);
  fy.addColorStop(0, 'rgba(0,0,0,0)'); fy.addColorStop(.14, '#000'); fy.addColorStop(.86, '#000'); fy.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = fy; x.fillRect(0, 0, w, h);
  x.globalCompositeOperation = 'source-over';
  return c;
}
function makeFarStars() {
  const r = rng('ferne'), out = [];
  for (let i = 0; i < 700; i++) out.push({ x: -600 + r() * (SKY_W + 1200), y: -600 + r() * (SKY_H + 1200), r: r() < .06 ? 1.3 : .5 + r() * .6, a: .2 + r() * .55, ph: r() * 6.3 });
  return out;
}

// ---------- camera ----------
// par < 1 moves a layer slower than the constellations, which gives depth
const toScreen = (x, y, par = 1) => [sky.W / 2 + (x - sky.cam.x * par - SKY_W / 2 * (1 - par)) * sky.cam.z,
                                     sky.H / 2 + (y - sky.cam.y * par - SKY_H / 2 * (1 - par)) * sky.cam.z];
const toWorld = (sx, sy) => [sky.cam.x + (sx - sky.W / 2) / sky.cam.z, sky.cam.y + (sy - sky.H / 2) / sky.cam.z];
const zoomedIn = () => sky.cam.z > sky.fitZ * 1.6;
function clampCam() {
  const c = sky.cam;
  c.z = Math.max(sky.fitZ * .9, Math.min(sky.fitZ * 5, c.z));
  const mx = Math.max(0, (SKY_W - sky.W / c.z) / 2) + 80, my = Math.max(0, (SKY_H - sky.H / c.z) / 2) + 120;
  c.x = Math.max(SKY_W / 2 - mx, Math.min(SKY_W / 2 + mx, c.x));
  c.y = Math.max(SKY_H / 2 - my, Math.min(SKY_H / 2 + my, c.y));
}
function flyTo(x, y, z, ms = 650) {
  sky.anim = { from: { ...sky.cam }, to: { x, y, z }, t0: performance.now(), ms };
}
function fitSky() {
  const top = 140, bottom = 150;   // room for the header and the toolbar
  sky.fitZ = Math.min(sky.W / (SKY_W + 40), (sky.H - top - bottom) / (SKY_H + 40));
  return { x: SKY_W / 2, y: SKY_H / 2 - (top - bottom) / 2 / sky.fitZ, z: sky.fitZ };
}
function overview() { const f = fitSky(); flyTo(f.x, f.y, f.z); sky.sel = null; closeSheet(); setTimeout(updateSkyHint, 680); }
function zoomToCon(c) {
  const z = Math.min(sky.W / (c.radius * 2 + 140), (sky.H - 330) / (c.radius * 1.6 + 160));
  flyTo(c.cx, c.cy + 30, Math.max(z, sky.fitZ * 1.8));
  setTimeout(updateSkyHint, 680);
}

// ---------- drawing ----------
function starLight(it) {
  // ignition: a star that was lit since the last visit grows from nothing with a flash
  const burst = sky.bursts.find(b => b.id === it.id);
  let b = it.b, flare = 0;
  if (burst) {
    const k = (sky.t - burst.t0) / 1.4;
    if (k < 0) b = null;
    else { b = it.b * smooth(k * 1.8); flare = k < 1 ? 1 - k : 0; }
  }
  return { b, flare };
}
function drawSky() {
  const { ctx, W, H } = sky, t = sky.t;
  ctx.clearRect(0, 0, W, H);
  // deep gradient
  const g = ctx.createRadialGradient(W * .5, H * .3, 0, W * .5, H * .45, Math.max(W, H) * .9);
  g.addColorStop(0, '#1a1550'); g.addColorStop(.55, '#0b0828'); g.addColorStop(1, '#03020d');
  ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  // milky way (slower parallax)
  if (sky.milky) {
    const [x0, y0] = toScreen(-450, -500, .7), [x1, y1] = toScreen(SKY_W + 450, SKY_H + 500, .7);
    ctx.drawImage(sky.milky, x0, y0, x1 - x0, y1 - y0);
  }
  // far stars (slowest parallax)
  for (const s of sky.far) {
    const [x, y] = toScreen(s.x, s.y, .45);
    if (x < -2 || y < -2 || x > W + 2 || y > H + 2) continue;
    ctx.fillStyle = `rgba(255,255,255,${s.a * (.75 + .25 * Math.sin(t * .8 + s.ph))})`;
    ctx.fillRect(x, y, s.r, s.r);
  }
  const z = sky.cam.z, zin = smooth((z / sky.fitZ - 1.1) / 1.2);   // 0 in the overview, 1 when zoomed in
  // nebulae: each constellation glows more the more of it you know
  ctx.globalCompositeOperation = 'lighter';
  for (const c of skyCache) {
    const strength = c.items.length ? (c.avg * c.learned) / c.items.length : 0;
    if (strength <= 0.01) continue;
    const [x, y] = toScreen(c.cx, c.cy), rad = (c.radius + 70) * z;
    const ng = ctx.createRadialGradient(x, y, 0, x, y, rad);
    ng.addColorStop(0, `rgba(${KIND_RGB[c.kind]},${.05 + .2 * strength})`);
    ng.addColorStop(.5, `rgba(${c.kind === 'e2' ? '200,120,255' : '90,140,255'},${.03 + .09 * strength})`);
    ng.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = ng; ctx.beginPath(); ctx.arc(x, y, rad, 0, 6.283); ctx.fill();
  }
  ctx.globalCompositeOperation = 'source-over';
  // constellation lines: solid between lit stars, a faint dotted guide elsewhere
  for (const c of skyCache) {
    const rgb = KIND_RGB[c.kind];
    for (const [a, b] of c.edges) {
      const A = c.items[a], B = c.items[b], sa = starLight(A).b, sb = starLight(B).b;
      const [x0, y0] = toScreen(A.x, A.y), [x1, y1] = toScreen(B.x, B.y);
      const both = sa !== null && sb !== null;
      ctx.setLineDash(both ? [] : [2, 5]);
      ctx.lineWidth = both ? 1.2 : 1;
      ctx.strokeStyle = both ? `rgba(${rgb},${.15 + .45 * Math.min(sa, sb)})` : `rgba(200,195,240,${.1 + .08 * zin})`;
      ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke();
    }
  }
  ctx.setLineDash([]);
  // stars
  const scale = .85 + .5 * zin;
  for (const c of skyCache) {
    const rgb = KIND_RGB[c.kind];
    for (const it of c.items) {
      const { b, flare } = starLight(it);
      const [x, y] = toScreen(it.x, it.y);
      if (x < -40 || y < -40 || x > W + 40 || y > H + 40) continue;
      if (b === null) {   // an empty place, waiting for its star
        ctx.strokeStyle = `rgba(200,195,240,${.32 + .1 * zin})`; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.arc(x, y, 2.6 * scale, 0, 6.283); ctx.stroke();
        continue;
      }
      const tw = b > .6 ? .9 + .1 * Math.sin(t * it.tw + it.ph) : 1;
      const core = (1.4 + 2.6 * b) * scale, halo = (5 + 15 * b) * scale * tw;
      const hg = ctx.createRadialGradient(x, y, 0, x, y, halo);
      hg.addColorStop(0, `rgba(${rgb},${.45 * b + .05})`); hg.addColorStop(1, `rgba(${rgb},0)`);
      ctx.fillStyle = hg; ctx.beginPath(); ctx.arc(x, y, halo, 0, 6.283); ctx.fill();
      if (b > .78) {   // diffraction spikes on the brightest stars
        const L = (8 + 14 * b) * scale * tw;
        ctx.strokeStyle = `rgba(${rgb},${.35 * b})`; ctx.lineWidth = .8;
        ctx.beginPath(); ctx.moveTo(x - L, y); ctx.lineTo(x + L, y); ctx.moveTo(x, y - L); ctx.lineTo(x, y + L); ctx.stroke();
      }
      ctx.fillStyle = `rgba(255,250,240,${.55 + .45 * b})`;
      ctx.beginPath(); ctx.arc(x, y, core, 0, 6.283); ctx.fill();
      if (b < .5 && flare === 0) {   // fading: a slowly breathing amber ring says "review me"
        const p = .5 + .5 * Math.sin(t * 2 + it.ph);
        ctx.strokeStyle = `rgba(255,173,97,${(.2 + .25 * p) * (.55 + .45 * zin)})`; ctx.lineWidth = .8 + .5 * zin;
        ctx.beginPath(); ctx.arc(x, y, core + 2.5 + (1.5 + 1.5 * p) * (.4 + .6 * zin), 0, 6.283); ctx.stroke();
      }
      if (flare > 0) {   // ignition flash
        const fr = (1 - flare) * 46 * scale + 6;
        ctx.strokeStyle = `rgba(255,236,190,${flare * .8})`; ctx.lineWidth = 2 * flare + .5;
        ctx.beginPath(); ctx.arc(x, y, fr, 0, 6.283); ctx.stroke();
        const fg = ctx.createRadialGradient(x, y, 0, x, y, 30 * scale);
        fg.addColorStop(0, `rgba(255,245,220,${flare})`); fg.addColorStop(1, 'rgba(255,245,220,0)');
        ctx.fillStyle = fg; ctx.beginPath(); ctx.arc(x, y, 30 * scale, 0, 6.283); ctx.fill();
        const L = 40 * flare * scale + 10;
        ctx.strokeStyle = `rgba(255,245,220,${flare * .9})`; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(x - L, y); ctx.lineTo(x + L, y); ctx.moveTo(x, y - L); ctx.lineTo(x, y + L); ctx.stroke();
      }
    }
  }
  // falling light: the star comes down from the top of the screen before it ignites
  for (const bu of sky.bursts) {
    const k = (sky.t - bu.t0 + .55) / .55;
    if (k < 0 || k > 1) continue;
    const [x, y] = toScreen(bu.item.x, bu.item.y);
    const yy = -20 + (y + 20) * smooth(k), tail = 70;
    const lg = ctx.createLinearGradient(x, yy - tail, x, yy);
    lg.addColorStop(0, 'rgba(255,236,190,0)'); lg.addColorStop(1, 'rgba(255,236,190,.9)');
    ctx.strokeStyle = lg; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(x, yy - tail); ctx.lineTo(x, yy); ctx.stroke();
  }
  // selection reticle, so you always see which star the sheet talks about
  if (sky.sel) {
    let it = null;
    for (const c of skyCache) { const f = c.items.find(i => i.id === sky.sel); if (f) it = f; }
    if (it) {
      const [x, y] = toScreen(it.x, it.y), R = 15 + 1.5 * Math.sin(t * 3);
      ctx.strokeStyle = 'rgba(255,227,166,.9)'; ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.arc(x, y, R, 0, 6.283); ctx.stroke();
      for (let k = 0; k < 4; k++) {
        const a = k * Math.PI / 2 + t * .4;
        ctx.beginPath(); ctx.moveTo(x + Math.cos(a) * (R + 3), y + Math.sin(a) * (R + 3)); ctx.lineTo(x + Math.cos(a) * (R + 9), y + Math.sin(a) * (R + 9)); ctx.stroke();
      }
    }
  }
  // labels
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  for (const c of skyCache) {
    const [x, y] = toScreen(c.cx, c.cy + c.radius * .8 + 30);
    c.lx = x; c.ly = y;
    if (x < -120 || x > W + 120 || y < -40 || y > H + 40) continue;
    const complete = c.bright === c.items.length;
    const size = 11.5 + 4 * zin;
    ctx.font = `600 ${size}px Literata, Georgia, serif`;
    ctx.fillStyle = complete ? 'rgba(255,227,166,.98)' : c.learned ? 'rgba(236,230,255,.92)' : 'rgba(200,192,235,.62)';
    ctx.fillText(conName(c), x, y);
    ctx.font = `600 ${9.5 + 2 * zin}px Inter, system-ui, sans-serif`;
    ctx.fillStyle = 'rgba(180,172,220,.72)';
    ctx.fillText(`${c.bright}/${c.items.length}` + (complete ? '  ✦' : ''), x, y + size * .95 + 2);
  }
  // time travel tint
  if (sky.ahead > 0) {
    ctx.fillStyle = `rgba(8,6,30,${Math.min(.25, sky.ahead / 120)})`;
    ctx.fillRect(0, 0, W, H);
  }
}

function skyLoop(now) {
  if (!sky.running) return;
  const dt = Math.min(.05, (now - (sky.last || now)) / 1000); sky.last = now; sky.t += dt;
  if (sky.anim) {
    const a = sky.anim, k = Math.min(1, (now - a.t0) / a.ms), e = 1 - Math.pow(1 - k, 3);
    sky.cam.x = a.from.x + (a.to.x - a.from.x) * e;
    sky.cam.y = a.from.y + (a.to.y - a.from.y) * e;
    sky.cam.z = a.from.z * Math.pow(a.to.z / a.from.z, e);
    if (k >= 1) sky.anim = null;
  }
  if (sky.bursts.length && sky.t - sky.bursts[sky.bursts.length - 1].t0 > 1.6) sky.bursts = [];
  drawSky();
  sky.raf = requestAnimationFrame(skyLoop);
}
function startSky() { if (sky.running) return; sky.running = true; sky.last = 0; sky.raf = requestAnimationFrame(skyLoop); }
function stopSky() { sky.running = false; cancelAnimationFrame(sky.raf); }

function resizeSky() {
  if (!sky.cv) return;
  const wasFit = !zoomedIn();
  sky.dpr = Math.min(devicePixelRatio || 1, 2);
  sky.W = innerWidth; sky.H = innerHeight;
  sky.cv.width = Math.round(sky.W * sky.dpr); sky.cv.height = Math.round(sky.H * sky.dpr);
  sky.ctx.setTransform(sky.dpr, 0, 0, sky.dpr, 0, 0);
  const f = fitSky();
  if (wasFit) Object.assign(sky.cam, f);
  clampCam();
}

// ---------- input: drag to pan, pinch / wheel to zoom, tap to choose ----------
function nearestStar(sx, sy, maxPx) {
  let best = null;
  for (const c of skyCache) for (const it of c.items) {
    const [x, y] = toScreen(it.x, it.y), d = Math.hypot(x - sx, y - sy);
    if (d < maxPx && (!best || d < best.d)) best = { it, c, d };
  }
  return best;
}
function nearestCon(sx, sy) {
  let best = null;
  for (const c of skyCache) {
    const [x, y] = toScreen(c.cx, c.cy);
    const d = Math.hypot(x - sx, y - sy) / Math.max(1, c.radius * sky.cam.z + 30);
    const dl = c.lx !== undefined ? Math.hypot(c.lx - sx, (c.ly - sy) * 2) / 70 : 9;
    const dd = Math.min(d, dl);
    if (dd < 1.25 && (!best || dd < best.d)) best = { c, d: dd };
  }
  return best;
}
function onSkyTap(sx, sy) {
  if (!zoomedIn()) {   // overview: the first tap only zooms into a constellation – nothing opens by accident
    const n = nearestCon(sx, sy);
    if (n) zoomToCon(n.c);
    return;
  }
  const s = nearestStar(sx, sy, 26);
  if (s) { openStar(s.it.id); return; }
  const n = nearestCon(sx, sy);
  if (n && Math.hypot(n.c.lx - sx, n.c.ly - sy) < 70) { openCon(n.c); return; }
  closeSheet();
}
function wireSkyInput(cv) {
  const P = sky.pointers;
  P.clear();
  cv.addEventListener('pointerdown', e => {
    cv.setPointerCapture && cv.setPointerCapture(e.pointerId);
    P.set(e.pointerId, { x: e.clientX, y: e.clientY, x0: e.clientX, y0: e.clientY, t0: performance.now() });
    sky.anim = null;
    if (P.size === 2) {
      const [a, b] = [...P.values()];
      sky.gesture = { type: 'pinch', d0: Math.hypot(a.x - b.x, a.y - b.y) || 1, z0: sky.cam.z, cx: (a.x + b.x) / 2, cy: (a.y + b.y) / 2, cam0: { ...sky.cam } };
    } else if (P.size === 1) sky.gesture = { type: 'maybe', cam0: { ...sky.cam } };
  });
  cv.addEventListener('pointermove', e => {
    const p = P.get(e.pointerId);
    if (!p) return;
    p.x = e.clientX; p.y = e.clientY;
    const g = sky.gesture;
    if (!g) return;
    if (g.type === 'pinch' && P.size >= 2) {
      const [a, b] = [...P.values()];
      const z = g.z0 * Math.hypot(a.x - b.x, a.y - b.y) / g.d0;
      const wx = g.cam0.x + (g.cx - sky.W / 2) / g.z0, wy = g.cam0.y + (g.cy - sky.H / 2) / g.z0;
      sky.cam.z = z;
      sky.cam.x = wx - ((a.x + b.x) / 2 - sky.W / 2) / z; sky.cam.y = wy - ((a.y + b.y) / 2 - sky.H / 2) / z;
      clampCam();
    } else if (P.size === 1 && (g.type === 'maybe' || g.type === 'pan')) {
      if (g.type === 'maybe' && Math.hypot(p.x - p.x0, p.y - p.y0) > 8) g.type = 'pan';
      if (g.type === 'pan') {
        sky.cam.x = g.cam0.x - (p.x - p.x0) / sky.cam.z;
        sky.cam.y = g.cam0.y - (p.y - p.y0) / sky.cam.z;
        clampCam();
      }
    }
  });
  const end = e => {
    const p = P.get(e.pointerId);
    if (!p) return;
    P.delete(e.pointerId);
    const g = sky.gesture;
    if (g && g.type === 'maybe' && P.size === 0 && performance.now() - p.t0 < 600) {
      const r = cv.getBoundingClientRect();
      onSkyTap(p.x - r.left, p.y - r.top);
    }
    if (P.size === 0) { sky.gesture = null; updateSkyHint(); }
    else sky.gesture = { type: 'done' };   // after a pinch, lifting one finger must not pan or tap
  };
  cv.addEventListener('pointerup', end);
  cv.addEventListener('pointercancel', end);
  cv.addEventListener('wheel', e => {
    e.preventDefault();
    const r = cv.getBoundingClientRect(), sx = e.clientX - r.left, sy = e.clientY - r.top;
    const [wx, wy] = toWorld(sx, sy);
    sky.anim = null;
    sky.cam.z *= Math.exp(-e.deltaY * .0015);
    clampCam();
    sky.cam.x = wx - (sx - sky.W / 2) / sky.cam.z; sky.cam.y = wy - (sy - sky.H / 2) / sky.cam.z;
    clampCam(); updateSkyHint();
  }, { passive: false });
}

// ---------- the page around the sky ----------
function skyStatsHtml(s) {
  return `<span class="sx sx-lit"><i></i><b>${s.lit}</b> ${st('lit')}</span>` +
         `<span class="sx sx-fade"><i></i><b>${s.fading}</b> ${st('fading')}</span>` +
         `<span class="sx sx-dark"><i></i><b>${s.dark}</b> ${st('dark')}</span>`;
}
let skyStats = null;
function refreshSkyUI() {
  skyStats = computeSky();
  const root = document.getElementById('stern-root');
  const stats = root.querySelector('.sky-stats');
  if (stats) stats.innerHTML = skyStatsHtml(skyStats);
  const rv = root.querySelector('#st-review b');
  if (rv) rv.textContent = skyStats.fadingCards.length ? Math.min(skyStats.fadingCards.length, 15) : '';
}
function updateSkyHint() {
  const h = document.getElementById('sky-hint'), ob = document.getElementById('st-overview');
  if (!h) return;
  h.textContent = zoomedIn() ? st('hintZoom') : st('hintOverview');
  if (ob) ob.hidden = !zoomedIn();
}
function renderStern() {
  const root = document.getElementById('stern-root');
  root.lang = anaLang;
  if (!skyCache) skyCache = buildConstellations();
  if (!sky.milky) { sky.milky = paintMilkyWay(); sky.far = makeFarStars(); }
  skyStats = computeSky();
  const undoInfo = store.get('progress-undo', null);
  const nRev = skyStats.fadingCards.length;
  root.innerHTML = `
    <canvas class="sky-cv" id="sky-cv" aria-label="${st('title')}"></canvas>
    <div class="sky-shade top"></div><div class="sky-shade bottom"></div>
    <header class="sky-head">
      <h2>${st('title')}</h2>
      <div class="sky-stats">${skyStatsHtml(skyStats)}</div>
      <p class="sky-hint" id="sky-hint"></p>
    </header>
    <div class="sky-lang">${langSwitch()}</div>
    <div class="sky-ignite" id="sky-ignite" hidden></div>
    <footer class="sky-bar">
      <button type="button" class="sky-ov" id="st-overview" hidden>${ic('compass')} ${st('overview')}</button>
      <div class="sky-panel">
        <div class="sky-time">
          <label for="st-time">${ic('hourglass')} <span id="st-time-lbl">${st('time')}: ${st('today')}</span></label>
          <input type="range" id="st-time" min="0" max="60" step="1" value="${sky.ahead}">
        </div>
        <div class="sky-actions">
          <button type="button" class="sky-main" id="st-review">${ic('sparkles')} <span>${st('review')}</span> <b>${nRev ? Math.min(nRev, 15) : ''}</b></button>
          <button type="button" class="sky-ic" id="st-music" aria-pressed="${sphaeren.on}" aria-label="${st('music')}" title="${st('music')}">${ic('music')}</button>
          <button type="button" class="sky-ic" id="st-legend" aria-label="${st('legend')}" title="${st('legend')}">${ic('info')}</button>
          <button type="button" class="sky-ic" id="st-menu" aria-label="${st('menu')}" title="${st('menu')}">${ic('rotate-ccw')}</button>
        </div>
      </div>
    </footer>`;
  sky.cv = root.querySelector('#sky-cv');
  sky.ctx = sky.cv.getContext('2d');
  resizeSky();
  wireSkyInput(sky.cv);
  updateSkyHint();
  wireLang(root, () => { closeSheet(); renderStern(); });
  const time = root.querySelector('#st-time'), lbl = root.querySelector('#st-time-lbl'), note = root.querySelector('#sky-ignite');
  time.addEventListener('input', () => {
    sky.ahead = +time.value;
    lbl.textContent = st('time') + ': ' + (sky.ahead ? st('inDays')(sky.ahead) : st('today'));
    refreshSkyUI();
    note.hidden = !sky.ahead;
    if (sky.ahead) note.textContent = st('timeNote')(sky.ahead);
  });
  root.querySelector('#st-overview').addEventListener('click', overview);
  root.querySelector('#st-review').addEventListener('click', () => {
    if (!skyStats.fadingCards.length) { showSheet(`<p class="sh-q">${st('nothing')}</p>`); return; }
    go({ id: 'e2k', topic: skyStats.fadingCards.slice(0, 15).map(it => it.id.slice(3)) });
  });
  root.querySelector('#st-music').addEventListener('click', e => {
    sphaeren.on ? stopSphaeren() : startSphaeren();
    e.currentTarget.setAttribute('aria-pressed', String(sphaeren.on));
  });
  root.querySelector('#st-legend').addEventListener('click', showLegend);
  root.querySelector('#st-menu').addEventListener('click', () => showMenu(undoInfo));
  startSky();
  ignite();
  if (!store.get('sky-intro', false)) { store.set('sky-intro', true); setTimeout(showLegend, sky.bursts.length ? 2600 : 600); }
}

// stars lit since the last visit come down from the top and flash up, one after another
function ignite() {
  const seen = store.get('sky-seen', 0);
  const fresh = [];
  if (seen) for (const c of skyCache) for (const it of c.items) {
    const m = memLogData[it.id];
    if (m && m.t > seen && m.n > 0) fresh.push({ it, c, t: m.t });
  }
  store.set('sky-seen', Date.now());
  updateDock();
  if (!fresh.length || reduceMotion) return;
  fresh.sort((a, b) => a.t - b.t);
  const shown = fresh.slice(-24);
  sky.bursts = shown.map((f, i) => ({ id: f.it.id, item: f.it, t0: sky.t + .9 + i * .22 }));
  const note = document.getElementById('sky-ignite');
  note.hidden = false; note.textContent = '✦ ' + st('ignite')(fresh.length);
  setTimeout(() => { if (!sky.ahead) note.hidden = true; }, 2800 + shown.length * 220);
  if (sphaeren.on && sphaeren.ctx) shown.forEach((f, i) => setTimeout(() => tone(f.c.note * 2, .12, 0), 900 + i * 220));
}

// ---------- sheets ----------
function showSheet(html) {
  const sh = document.getElementById('stern-sheet');
  sh.innerHTML = `<div class="sh-top"><span></span><button type="button" class="sh-close" aria-label="close">${ic('x')}</button></div>` + html;
  sh.hidden = false;
  sh.querySelector('.sh-close').addEventListener('click', closeSheet);
  tex(sh);
  return sh;
}
function closeSheet() { const sh = document.getElementById('stern-sheet'); if (sh) sh.hidden = true; sky.sel = null; }
function showLegend() {
  const sh = showSheet(`<p class="sh-q">${st('lgHow')}</p>
    <ul class="sh-legend">
      <li><span class="lg lg-lit"></span>${st('lgLit')}</li>
      <li><span class="lg lg-fade"></span>${st('lgFade')}</li>
      <li><span class="lg lg-dark"></span>${st('lgDark')}</li>
    </ul>`);
  sh.querySelector('.sh-top span').textContent = st('legend');
}
function showMenu(undoInfo) {
  const sh = showSheet(`<div class="sh-choice sh-col">
      ${undoInfo ? `<button type="button" id="mn-undo">${ic('undo-2')} ${st('undo')}: ${st('undoWhat')[undoInfo.what] || ''}</button>` : ''}
      <button type="button" id="mn-reset">${ic('rotate-ccw')} ${st('reset')}</button>
    </div>`);
  sh.querySelector('.sh-top span').textContent = st('menu');
  const u = sh.querySelector('#mn-undo');
  if (u) u.addEventListener('click', () => { undoLast(); closeSheet(); renderStern(); });
  sh.querySelector('#mn-reset').addEventListener('click', askReset);
}
function askReset() {
  const sh = showSheet(`<p class="sh-q">${st('resetQ')}</p>
    <div class="sh-choice"><button type="button" data-scope="all">${st('all')}</button>
    <button type="button" data-scope="e2">${st('onlyE2')}</button><button type="button" data-scope="ana">${st('onlyAna')}</button></div>`);
  sh.querySelectorAll('[data-scope]').forEach(b => b.addEventListener('click', () => confirmReset(b.dataset.scope)));
}
function confirmReset(scope) {
  const n = Object.keys(memLogData).filter(k => scope === 'all' || k.startsWith(scope + ':')).length;
  if (!n) { showSheet(`<p class="sh-q">${st('empty')}</p>`); return; }
  const sh = showSheet(`<p class="sh-q">${st('sure')}</p><p class="sh-info">${st('sureTxt')(n)}</p>
    <div class="sh-choice"><button type="button" class="sh-danger">${st('yes')}</button><button type="button" class="sh-cancel">${st('cancel')}</button></div>`);
  sh.querySelector('.sh-top span').innerHTML = ic('triangle-alert');
  sh.querySelector('.sh-cancel').addEventListener('click', closeSheet);
  sh.querySelector('.sh-danger').addEventListener('click', () => {
    resetProgress(scope);
    renderStern();
    const done = showSheet(`<p class="sh-q">${st('done')}</p><div class="sh-choice"><button type="button" class="sh-undo">${ic('undo-2')} ${st('undo')}</button></div>`);
    done.querySelector('.sh-undo').addEventListener('click', () => { undoLast(); closeSheet(); renderStern(); });
  });
}
function openStar(id) {
  let item, con;
  for (const c of skyCache) { const f = c.items.find(i => i.id === id); if (f) { item = f; con = c; } }
  const b = item.b, m = memLogData[id];
  const sh = showSheet(`
    <div class="sh-q">${item.label[anaLang]}</div>
    ${b === null ? `<p class="sh-info">${st('never')}</p>` : `
      <div class="meter"><div style="width:${Math.round(b * 100)}%"></div></div>
      <p class="sh-info">${st('strength')} ${Math.round(b * 100)} % · ${st('ago')((Date.now() - m.t) / 864e5)}</p>`}
    <button type="button" class="sh-go">${con.kind === 'e2' ? ic('layers') + ' ' + st('learnCard') : ic('book-open') + ' ' + st('learnTopic')}</button>`);
  sky.sel = id;
  sh.querySelector('.sh-top span').innerHTML = `${glyph(con.id, 'sm')} ${conName(con)}`;
  sh.querySelector('.sh-go').addEventListener('click', () => { closeSheet(); go(item.go); });
}
function openCon(c) {
  const sh = showSheet(`
    <div class="sh-q">${c.title[anaLang]}</div>
    <div class="meter"><div style="width:${Math.round(100 * c.bright / c.items.length)}%"></div></div>
    <p class="sh-info">${st('conLit')(c.bright, c.items.length)}</p>
    <button type="button" class="sh-go" id="con-learn">${ic('layers')} ${c.kind === 'e2' ? st('conReview') : st('conOpen')}</button>`);
  sh.querySelector('.sh-top span').innerHTML = `${glyph(c.id, 'sm')} ${c.kind === 'e2' ? st('e2') : st('ana')}`;
  sh.querySelector('#con-learn').addEventListener('click', () => {
    closeSheet();
    if (c.kind === 'e2') go({ id: 'e2k', topic: c.topic });
    else { const next = c.items.find(i => i.b === null || i.b < .5) || c.items[0]; go(next.go); }
  });
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
  Promise.all([loadE2(), loadAna3()]).then(() => {
    store.set('deck-total', Object.keys(E2.cards).length + topicOrder().length);
    if (currentScreen === 'stern') renderStern();
  }).catch(() => {
    document.getElementById('stern-root').innerHTML = `<p class="loading">${loadFailed()}</p>`;
  });
}
addEventListener('resize', () => { if (currentScreen === 'stern') resizeSky(); });

route('stern', { enter: showStern, leave: () => { stopSphaeren(); closeSheet(); stopSky(); sky.ahead = 0; } });
