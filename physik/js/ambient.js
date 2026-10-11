// Wallpaper of the day: every weekday has its own mood – colours of the whole app, soft colour
// blobs, the old emoji in three layers of depth, and a few drawn particles (rain, embers, stars …).
// ?thema=<name> and ?tag=<mo|di|…> still pick a theme by hand.

const THEMES = {
  tiere: {
    mode: 'light', base: '#ffe4ef', blobs: ['#ffc2dc', '#ffe0cc', '#e6d9ff', '#ffd1e6'],
    ink: '#5a1a3d', accent: '#8a5cf6', accentD: '#6a3fd6',
    emoji: ['🐰', '🐱', '🐇', '🐈', '🐶', '🐹', '🐼', '🐨', '🦊', '🐻', '🐥', '🦄', '🐭', '🐾'], extras: [],
  },
  geld: {
    mode: 'light', base: '#dff5e8', blobs: ['#b7ebcf', '#f1f7c9', '#c6eedc', '#a7e0c4'],
    ink: '#12402d', accent: '#1f9d66', accentD: '#14774c',
    // primary buttons in gold so they never look like the green "Ja"
    cta: '#f5b82e', ctaD: '#c98a0b', ctaInk: '#3a2600',
    emoji: ['💰', '💵', '💶', '💸', '📈', '📊', '📉', '💼', '🏦', '💳', '🪙', '🖥️', '📅', '🤑'], extras: ['rise'], colors: ['31,157,102', '214,170,40'],
  },
  physik: {
    mode: 'dark', base: '#0d1640', blobs: ['#1d2f86', '#3a2585', '#0f4a7a', '#182a6e'],
    ink: '#eef1ff', accent: '#6cb8ff', accentD: '#3a86d6',
    emoji: ['🧑‍🔬', '👩‍🔬', '👨‍🔬', '👩‍🚀', '🔭', '🔬', '⚛️', '🧪', '🧲', '🪐', '🌌', '🚀', '☄️', '🌍', '🧮', '⭐'], extras: ['stars', 'orbits'], colors: ['130,198,255', '162,148,255'],
  },
  muede: {
    mode: 'light', base: '#f1ebe2', blobs: ['#e6d8c4', '#f6e8d2', '#ddd1c0', '#efe2cf'],
    ink: '#4a3a2a', accent: '#b0763a', accentD: '#8a5823',
    emoji: ['😩', '😫', '🥱', '😮‍💨', '😵‍💫', '🫠', '😑', '😤', '🙄', '🥴', '😵', '🫥'], extras: ['dust'], colors: ['120,95,70'],
  },
  traurig: {
    mode: 'light', base: '#e1e9f4', blobs: ['#c4d3ea', '#dde6f3', '#b6c8e2', '#d2deef'],
    ink: '#203252', accent: '#4a78b5', accentD: '#335c93',
    emoji: ['😭', '😢', '😿', '🥺', '😞', '😔', '🥲', '😥', '💧', '☔', '🌧️', '💔'], extras: ['rain'], colors: ['80,110,160'],
  },
  tod: {
    mode: 'dark', base: '#1e060b', blobs: ['#4a0e1a', '#2a070d', '#5c1424', '#33090f'],
    ink: '#ffeaed', accent: '#ff8a3d', accentD: '#c9611f',
    emoji: ['💀', '☠️', '🦴', '🤬', '🪦', '👻', '⚰️', '😈', '💢', '🔥'], extras: ['embers'], colors: ['255,120,60', '255,70,70', '255,190,90'],
  },
  schlaf: {
    mode: 'dark', base: '#1d1a52', blobs: ['#352d86', '#4a3c9e', '#231f66', '#3b3290'],
    ink: '#f1efff', accent: '#b4a3ff', accentD: '#8573e0',
    emoji: ['😴', '💤', '🛏️', '🛌', '🌙', '🌜', '⭐', '🥱', '🧸', '😪', '🌛', '✨'], extras: ['stars', 'moon'], colors: ['200,200,255'],
  },
  party: {
    mode: 'dark', base: '#4a1060', blobs: ['#ff5fae', '#a12fa8', '#5b1678', '#ff8a5c'],
    ink: '#fff3fb', accent: '#ffd23f', accentD: '#d9a800', accentInk: '#3a1d00',
    emoji: ['🍺', '🍻', '🍷', '🥂', '🍾', '🍸', '🍹', '🥃', '🎉', '🪩', '🎶', '💃', '🕺', '🎊'], extras: ['bokeh'], colors: ['255,255,255', '255,210,63', '255,140,200'],
  },
};
// index = Date.getDay(): 0 Sonntag … 6 Samstag; Friday picks one of two at random
const WEEK = [['party'], ['geld'], ['physik'], ['muede'], ['traurig'], ['tiere', 'tod'], ['schlaf']];
const TAG_PARAM = { so: 0, mo: 1, di: 2, mi: 3, do: 4, fr: 5, sa: 6 };

const ambient = (() => {
  const day = params.get('tag') in TAG_PARAM ? TAG_PARAM[params.get('tag')] : new Date().getDay();
  const opts = WEEK[day];
  const name = THEMES[params.get('thema')] ? params.get('thema') : opts[Math.floor(Math.random() * opts.length)];
  const th = THEMES[name], light = th.mode === 'light';

  // ---------- colours of the whole app follow the day ----------
  const root = document.documentElement, set = (k, v) => root.style.setProperty(k, v);
  root.dataset.mode = th.mode; root.dataset.theme = name;
  const hex = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16)).join(',');
  const ink = hex(th.ink);
  set('--bg-0', th.base);
  set('--text', th.ink);
  set('--text-2', `rgba(${ink},.78)`);
  set('--text-3', `rgba(${ink},.58)`);
  set('--line', `rgba(${ink},${light ? .1 : .14})`);
  set('--line-2', `rgba(${ink},${light ? .18 : .24})`);
  set('--fill-1', `rgba(${ink},${light ? .035 : .045})`);
  set('--fill-2', `rgba(${ink},${light ? .06 : .07})`);
  set('--fill-3', `rgba(${ink},${light ? .09 : .1})`);
  set('--surface', light ? 'rgba(255,255,255,.72)' : 'rgba(18,12,40,.55)');
  set('--surface-2', light ? 'rgba(255,255,255,.9)' : 'rgba(40,30,80,.62)');
  set('--surface-3', light ? `rgba(${ink},.08)` : 'rgba(60,48,110,.62)');
  set('--gold', th.accent); set('--gold-d', th.accentD); set('--gold-hi', th.accent);
  set('--gold-ink', th.accentInk || '#fff');
  set('--cta', th.cta || th.accent); set('--cta-d', th.ctaD || th.accentD); set('--cta-ink', th.ctaInk || th.accentInk || '#fff');
  set('--shadow', light ? '0 18px 40px -16px rgba(60,20,50,.28)' : '0 24px 60px -18px rgba(0,0,0,.7)');
  document.querySelector('meta[name="theme-color"]').setAttribute('content', th.base);

  // ---------- soft colour blobs, slowly drifting ----------
  const host = document.getElementById('bg');
  host.style.background = th.base;
  th.blobs.forEach((c, i) => {
    const b = document.createElement('div');
    b.className = 'blob';
    b.style.background = `radial-gradient(circle, ${c} 0%, ${c}00 68%)`;
    b.style.left = [-.25, .45, .05, .55][i] * 100 + '%';
    b.style.top = [-.2, -.1, .5, .55][i] * 100 + '%';
    b.style.animationDuration = 22 + i * 7 + 's';
    b.style.animationDelay = -i * 5 + 's';
    host.appendChild(b);
  });

  // ---------- particles of the day (canvas, transparent) ----------
  const cv = document.createElement('canvas');
  host.appendChild(cv);
  const ctx = cv.getContext('2d');
  let W = 0, H = 0, parts = {}, running = true, raf = 0, last = 0, T = 0;
  const R = Math.random;
  const col = (i, a) => `rgba(${(th.colors || ['255,255,255'])[i % (th.colors || [1]).length]},${a})`;

  // ---------- the emoji, in three layers: far (soft), middle, near (sharp, with a shadow) ----------
  const layers = [0, 1, 2].map(k => { const l = document.createElement('div'); l.className = 'emo-layer emo-l' + k; host.appendChild(l); return l; });
  const pool = [...th.emoji].sort(() => R() - .5);
  let pi = 0;
  const nextEmoji = () => pool[pi++ % pool.length];
  // drawn emoji art (Microsoft Fluent Emoji 3D, MIT) instead of the system font; falls back to the glyph
  const artName = ch => [...ch].filter(c => c !== '\ufe0f').map(c => c.codePointAt(0).toString(16)).join('-');
  function emoArt(ch, delay) {
    const img = new Image();
    img.alt = ''; img.draggable = false; img.decoding = 'async';
    img.dataset.ch = ch;
    img.style.setProperty('--in', delay + 's');
    img.onload = () => img.classList.add('in');
    img.onerror = () => { const t = document.createElement('span'); t.className = 'emo-txt in'; t.textContent = ch; t.dataset.ch = ch; img.replaceWith(t); };
    img.src = 'art/' + artName(ch) + '.webp';
    return img;
  }
  function placeEmoji() {
    layers.forEach(l => { l.innerHTML = ''; });
    const area = innerWidth * innerHeight;
    const counts = [Math.round(Math.min(12, 7 + area / 160000)), Math.round(Math.min(14, 8 + area / 140000)), Math.round(Math.min(6, 4 + area / 400000))];
    counts.forEach((n, k) => {
      for (let i = 0; i < n; i++) {
        const e = document.createElement('span');
        e.className = 'emo';
        e.appendChild(emoArt(nextEmoji(), .15 + R() * 1.1 + k * .15));
        // the near layer keeps to the edges, so it never sits under the text
        let x = R() * 92 + 1, y = R() * 90 + 2;
        if (k === 2) { if (R() < .5) x = R() < .5 ? 2 + R() * 8 : 80 + R() * 8; else y = R() < .5 ? 2 + R() * 6 : 82 + R() * 8; }
        e.style.left = x + '%'; e.style.top = y + '%';
        e.style.setProperty('--s', [20 + R() * 12, 32 + R() * 16, 54 + R() * 26][k] + 'px');
        e.style.setProperty('--dx', ((R() - .5) * 14) + 'px');
        e.style.setProperty('--dur', (3 + R() * 3 + k) + 's');
        e.style.setProperty('--delay', (-R() * 6) + 's');
        e.style.setProperty('--rot', ((R() - .5) * 24) + 'deg');
        layers[k].appendChild(e);
      }
    });
  }
  // tap an emoji on the start screen: it jumps and throws a few small copies around
  host.addEventListener('pointerdown', e => {
    const t = e.target.closest('.emo');
    if (!t || reduceMotion) return;
    t.classList.remove('pop'); void t.offsetWidth; t.classList.add('pop');
    const r = t.getBoundingClientRect();
    for (let i = 0; i < 6; i++) {
      const s = document.createElement('span');
      s.className = 'emo-spark';
      const ch = t.firstElementChild && t.firstElementChild.dataset.ch;
      if (t.querySelector('img')) { const im = new Image(); im.src = t.querySelector('img').src; im.alt = ''; s.appendChild(im); } else s.textContent = ch || '';
      s.style.left = r.left + r.width / 2 + 'px'; s.style.top = r.top + r.height / 2 + 'px';
      document.body.appendChild(s);
      const a = i / 6 * Math.PI * 2 + R(), d = 50 + R() * 50;
      s.animate([{ transform: 'translate(-50%,-50%) scale(.3)', opacity: 1 },
                 { transform: `translate(calc(-50% + ${Math.cos(a) * d}px), calc(-50% + ${Math.sin(a) * d}px)) scale(.9) rotate(${(R() - .5) * 200}deg)`, opacity: 0 }],
                { duration: 700 + R() * 300, easing: 'cubic-bezier(.2,.7,.3,1)' }).onfinish = () => s.remove();
    }
  });
  // parallax: the layers move a little with the finger, the mouse or the tilt of the phone
  let px = 0, py = 0, tx = 0, ty = 0;
  addEventListener('pointermove', e => { tx = e.clientX / innerWidth - .5; ty = e.clientY / innerHeight - .5; }, { passive: true });
  addEventListener('deviceorientation', e => { if (e.gamma != null) { tx = Math.max(-.5, Math.min(.5, e.gamma / 60)); ty = Math.max(-.5, Math.min(.5, (e.beta - 40) / 60)); } }, { passive: true });

  function seed() {
    const area = W * H / 1e5;
    parts = {};
    parts.stars = Array.from({ length: Math.round(area * 7) }, () => ({ x: R() * W, y: R() * H, r: R() < .1 ? 1.4 : .7 + R() * .5, p: R() * 6.3, s: .6 + R() * 1.6 }));
    parts.bokeh = Array.from({ length: Math.round(5 + area * .7) }, (_, i) => ({ x: R() * W, y: R() * H, r: 14 + R() * 50, c: i, a: .06 + R() * .1, vx: (R() - .5) * 6, vy: (R() - .5) * 5, p: R() * 6 }));
    parts.rise = Array.from({ length: Math.round(area * 3) }, (_, i) => ({ x: R() * W, y: R() * H, r: .8 + R() * 2, c: i, v: 8 + R() * 18, p: R() * 6 }));
    parts.dust = Array.from({ length: Math.round(area * 5) }, () => ({ x: R() * W, y: R() * H, r: .6 + R() * 1.6, vx: (R() - .5) * 4, vy: (R() - .5) * 3, a: .08 + R() * .2 }));
    parts.rain = Array.from({ length: Math.round(area * 7) }, () => ({ x: R() * W * 1.2, y: R() * H, l: 10 + R() * 22, v: 380 + R() * 260, a: .06 + R() * .14 }));
    parts.embers = Array.from({ length: Math.round(area * 4) }, (_, i) => ({ x: R() * W, y: H * (.3 + R() * .9), r: .8 + R() * 2.2, c: i, v: 14 + R() * 30, p: R() * 6, life: R() }));
    parts.orbits = Array.from({ length: 3 }, (_, i) => ({ rx: Math.max(W, H) * (.28 + i * .14), ry: Math.max(W, H) * (.09 + i * .05), rot: R() * Math.PI, sp: (i % 2 ? -1 : 1) * (.02 + R() * .02), e: R() * 6.3, ev: .25 + R() * .2 }));
  }
  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 1.5);
    W = innerWidth; H = innerHeight;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seed(); placeEmoji(); frame(0);
  }
  const DRAW = {
    stars() {
      for (const s of parts.stars) {
        ctx.fillStyle = `rgba(255,255,255,${.2 + .5 * (.5 + .5 * Math.sin(T * s.s + s.p))})`;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.283); ctx.fill();
      }
    },
    bokeh(dt) {
      ctx.globalCompositeOperation = 'lighter';
      for (const b of parts.bokeh) {
        b.x += b.vx * dt; b.y += b.vy * dt;
        if (b.x < -b.r) b.x = W + b.r; if (b.x > W + b.r) b.x = -b.r; if (b.y < -b.r) b.y = H + b.r; if (b.y > H + b.r) b.y = -b.r;
        const a = b.a * (.75 + .25 * Math.sin(T * .7 + b.p)), g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, col(b.c, a)); g.addColorStop(.7, col(b.c, a * .45)); g.addColorStop(1, col(b.c, 0));
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, 6.283); ctx.fill();
      }
      ctx.globalCompositeOperation = 'source-over';
    },
    rise(dt) {
      for (const p of parts.rise) {
        p.y -= p.v * dt; p.x += Math.sin(T + p.p) * .2;
        if (p.y < -10) { p.y = H + 10; p.x = R() * W; }
        ctx.fillStyle = col(p.c, .35 * Math.min(1, p.y / H * 1.4)); ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.283); ctx.fill();
      }
    },
    dust(dt) {
      for (const p of parts.dust) {
        p.x += p.vx * dt; p.y += p.vy * dt;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0; if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.fillStyle = col(0, p.a * (.6 + .4 * Math.sin(T * .5 + p.x))); ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.283); ctx.fill();
      }
    },
    rain(dt) {
      ctx.lineWidth = 1; ctx.lineCap = 'round';
      for (const d of parts.rain) {
        d.y += d.v * dt; d.x -= d.v * dt * .12;
        if (d.y > H + d.l) { d.y = -d.l; d.x = R() * W * 1.2; }
        ctx.strokeStyle = col(0, d.a); ctx.beginPath(); ctx.moveTo(d.x, d.y); ctx.lineTo(d.x + d.l * .12, d.y - d.l); ctx.stroke();
      }
    },
    embers(dt) {
      ctx.globalCompositeOperation = 'lighter';
      for (const e of parts.embers) {
        e.y -= e.v * dt; e.x += Math.sin(T * 1.3 + e.p) * .4; e.life += dt * .08;
        if (e.y < -10 || e.life > 1) { e.y = H + 10; e.x = R() * W; e.life = 0; }
        const a = (1 - e.life) * (.5 + .5 * Math.sin(T * 9 + e.p * 3));
        ctx.fillStyle = col(e.c, .7 * a); ctx.beginPath(); ctx.arc(e.x, e.y, e.r, 0, 6.283); ctx.fill();
        ctx.fillStyle = col(e.c, .12 * a); ctx.beginPath(); ctx.arc(e.x, e.y, e.r * 5, 0, 6.283); ctx.fill();
      }
      ctx.globalCompositeOperation = 'source-over';
    },
    orbits(dt) {
      ctx.save(); ctx.translate(W * .5, H * .42);
      for (const o of parts.orbits) {
        o.rot += o.sp * dt; o.e += o.ev * dt;
        ctx.save(); ctx.rotate(o.rot);
        ctx.strokeStyle = col(0, .1); ctx.lineWidth = 1; ctx.beginPath(); ctx.ellipse(0, 0, o.rx, o.ry, 0, 0, 6.283); ctx.stroke();
        const ex = Math.cos(o.e) * o.rx, ey = Math.sin(o.e) * o.ry, g = ctx.createRadialGradient(ex, ey, 0, ex, ey, 10);
        g.addColorStop(0, col(1, .9)); g.addColorStop(1, col(1, 0));
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(ex, ey, 10, 0, 6.283); ctx.fill();
        ctx.restore();
      }
      ctx.restore();
    },
    moon() {
      const mx = W * .84, my = Math.min(H * .12, 110), r = 30;
      const g = ctx.createRadialGradient(mx, my, r * .6, mx, my, r * 5);
      g.addColorStop(0, 'rgba(255,240,200,.25)'); g.addColorStop(1, 'rgba(255,240,200,0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(mx, my, r * 5, 0, 6.283); ctx.fill();
      ctx.save(); ctx.beginPath(); ctx.arc(mx, my, r, 0, 6.283); ctx.clip();
      ctx.fillStyle = '#fff3d6'; ctx.fillRect(mx - r, my - r, 2 * r, 2 * r);
      ctx.fillStyle = th.base; ctx.beginPath(); ctx.arc(mx + r * .45, my - r * .2, r * .92, 0, 6.283); ctx.fill();
      ctx.restore();
    },
  };
  function frame(dt) {
    T += dt;
    ctx.clearRect(0, 0, W, H);
    for (const x of th.extras) DRAW[x](dt);
    px += (tx - px) * .06; py += (ty - py) * .06;
    layers.forEach((l, k) => { const m = [6, 14, 26][k]; l.style.transform = `translate3d(${-px * m}px, ${-py * m}px, 0)`; });
  }
  function loop(now) {
    if (!running) return;
    const dt = Math.min(.05, (now - (last || now)) / 1000); last = now;
    frame(dt);
    raf = requestAnimationFrame(loop);
  }
  function start() { if (running || reduceMotion) return; running = true; last = 0; raf = requestAnimationFrame(loop); }
  function stop() { running = false; cancelAnimationFrame(raf); }
  addEventListener('resize', resize);
  resize();
  document.body.classList.add('emo-live');
  if (reduceMotion) running = false; else raf = requestAnimationFrame(loop);
  document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
  screenHooks.push(id => { (ROUTES[id] && ROUTES[id].scene) ? stop() : start(); document.body.classList.toggle('emo-live', id === 'frage'); });
  return { name, start, stop, light };
})();
