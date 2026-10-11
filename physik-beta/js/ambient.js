// Living background: one canvas, one mood per weekday (the old emoji themes, now drawn as light).
// ?thema=<name> and ?tag=<mo|di|…> still pick a theme by hand.

const AMBIENT = {
  party:   { sky: ['#2b0b3f', '#561a6e', '#0e0418'], layers: ['stars', 'bokeh'], colors: ['255,111,181', '255,207,107', '122,215,255', '183,139,255'] },
  geld:    { sky: ['#04251e', '#0d4436', '#010c09'], layers: ['stars', 'rise'], colors: ['125,240,192', '244,200,106'] },
  physik:  { sky: ['#0a1242', '#1a2a74', '#02041a'], layers: ['stars', 'orbits'], colors: ['130,198,255', '162,148,255'] },
  muede:   { sky: ['#1f1915', '#3b3029', '#090706'], layers: ['dust'], colors: ['233,211,181'] },
  traurig: { sky: ['#0b1424', '#1d2c44', '#03060c'], layers: ['rain'], colors: ['180,200,230'] },
  tiere:   { sky: ['#2a0e2f', '#521f57', '#0f0412'], layers: ['stars', 'bokeh', 'paws'], colors: ['255,160,190', '255,205,170', '210,170,255'] },
  tod:     { sky: ['#1d0407', '#3d0a12', '#060102'], layers: ['embers'], colors: ['255,120,60', '255,70,70', '255,190,90'] },
  schlaf:  { sky: ['#0a0a2e', '#1f1b60', '#03031a'], layers: ['stars', 'moon', 'zzz'], colors: ['200,200,255'] },
};
// index = Date.getDay(): 0 Sonntag … 6 Samstag; Friday picks one of two at random
const WEEK = [['party'], ['geld'], ['physik'], ['muede'], ['traurig'], ['tiere', 'tod'], ['schlaf']];
const TAG_PARAM = { so: 0, mo: 1, di: 2, mi: 3, do: 4, fr: 5, sa: 6 };

const ambient = (() => {
  const day = params.get('tag') in TAG_PARAM ? TAG_PARAM[params.get('tag')] : new Date().getDay();
  const opts = WEEK[day];
  const name = AMBIENT[params.get('thema')] ? params.get('thema') : opts[Math.floor(Math.random() * opts.length)];
  const th = AMBIENT[name];
  const host = document.getElementById('bg');
  const cv = document.createElement('canvas');
  host.appendChild(cv);
  const ctx = cv.getContext('2d');
  document.querySelector('meta[name="theme-color"]').setAttribute('content', th.sky[2]);
  let W = 0, H = 0, dpr = 1, parts = {}, running = true, raf = 0, last = 0, T = 0;
  const R = Math.random;
  const col = (i, a) => `rgba(${th.colors[i % th.colors.length]},${a})`;

  function seed() {
    const area = W * H / 1e5;
    parts = {};
    parts.stars = Array.from({ length: Math.round(area * 9) }, () => ({ x: R() * W, y: R() * H, r: R() < .1 ? 1.4 : .7 + R() * .5, p: R() * 6.3, s: .6 + R() * 1.6 }));
    parts.bokeh = Array.from({ length: Math.round(6 + area * .9) }, (_, i) => ({ x: R() * W, y: R() * H, r: 18 + R() * 70, c: i, a: .07 + R() * .13, vx: (R() - .5) * 6, vy: (R() - .5) * 5, p: R() * 6 }));
    parts.rise = Array.from({ length: Math.round(area * 4) }, (_, i) => ({ x: R() * W, y: R() * H, r: .8 + R() * 2, c: i, v: 8 + R() * 22, p: R() * 6 }));
    parts.dust = Array.from({ length: Math.round(area * 6) }, () => ({ x: R() * W, y: R() * H, r: .6 + R() * 1.8, vx: (R() - .5) * 4, vy: (R() - .5) * 3, a: .1 + R() * .35 }));
    parts.rain = Array.from({ length: Math.round(area * 10) }, () => ({ x: R() * W * 1.2, y: R() * H, l: 10 + R() * 22, v: 380 + R() * 260, a: .08 + R() * .22 }));
    parts.embers = Array.from({ length: Math.round(area * 5) }, (_, i) => ({ x: R() * W, y: H * (.3 + R() * .9), r: .8 + R() * 2.2, c: i, v: 14 + R() * 30, p: R() * 6, life: R() }));
    parts.paws = Array.from({ length: Math.round(3 + area * .5) }, (_, i) => ({ x: R() * W, y: R() * H, s: 7 + R() * 9, c: i, v: 6 + R() * 8, rot: (R() - .5) * 1.2, a: .06 + R() * .08 }));
    parts.zzz = Array.from({ length: 5 }, () => ({ x: W * (.15 + R() * .7), y: R() * H, s: 12 + R() * 16, v: 6 + R() * 6, p: R() * 6 }));
    parts.orbits = Array.from({ length: 3 }, (_, i) => ({ rx: Math.max(W, H) * (.28 + i * .14), ry: Math.max(W, H) * (.09 + i * .05), rot: R() * Math.PI, sp: (i % 2 ? -1 : 1) * (.02 + R() * .02), e: R() * 6.3, ev: .25 + R() * .2 }));
  }

  function resize() {
    dpr = Math.min(devicePixelRatio || 1, 1.5);
    W = innerWidth; H = innerHeight;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seed();
    frame(0);
  }

  function skyGradient() {
    const g = ctx.createRadialGradient(W * .5, H * .28, 0, W * .5, H * .4, Math.max(W, H) * .85);
    g.addColorStop(0, th.sky[1]); g.addColorStop(.5, th.sky[0]); g.addColorStop(1, th.sky[2]);
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  }

  function frame(dt) {
    T += dt;
    skyGradient();
    for (const layer of th.layers) DRAW[layer](dt);
  }

  const DRAW = {
    stars() {
      for (const s of parts.stars) {
        const a = .25 + .55 * (.5 + .5 * Math.sin(T * s.s + s.p));
        ctx.fillStyle = `rgba(255,255,255,${a * (name === 'physik' || name === 'schlaf' ? 1 : .55)})`;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.283); ctx.fill();
      }
    },
    bokeh(dt) {
      ctx.globalCompositeOperation = 'lighter';
      for (const b of parts.bokeh) {
        b.x += b.vx * dt; b.y += b.vy * dt;
        if (b.x < -b.r) b.x = W + b.r; if (b.x > W + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = H + b.r; if (b.y > H + b.r) b.y = -b.r;
        const a = b.a * (.75 + .25 * Math.sin(T * .7 + b.p));
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, col(b.c, a)); g.addColorStop(.7, col(b.c, a * .5)); g.addColorStop(1, col(b.c, 0));
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, 6.283); ctx.fill();
      }
      ctx.globalCompositeOperation = 'source-over';
    },
    rise(dt) {
      ctx.globalCompositeOperation = 'lighter';
      for (const p of parts.rise) {
        p.y -= p.v * dt; p.x += Math.sin(T + p.p) * .2;
        if (p.y < -10) { p.y = H + 10; p.x = R() * W; }
        const a = .35 * Math.min(1, p.y / H * 1.4);
        ctx.fillStyle = col(p.c, a); ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.283); ctx.fill();
        ctx.fillStyle = col(p.c, a * .15); ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 4, 0, 6.283); ctx.fill();
      }
      ctx.globalCompositeOperation = 'source-over';
    },
    dust(dt) {
      for (const p of parts.dust) {
        p.x += p.vx * dt + Math.sin(T * .3 + p.y * .01) * .05; p.y += p.vy * dt;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0; if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.fillStyle = col(0, p.a * (.6 + .4 * Math.sin(T * .5 + p.x))); ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.283); ctx.fill();
      }
    },
    rain(dt) {
      ctx.lineWidth = 1; ctx.lineCap = 'round';
      for (const d of parts.rain) {
        d.y += d.v * dt; d.x -= d.v * dt * .12;
        if (d.y > H + d.l) { d.y = -d.l; d.x = R() * W * 1.2; }
        ctx.strokeStyle = col(0, d.a);
        ctx.beginPath(); ctx.moveTo(d.x, d.y); ctx.lineTo(d.x + d.l * .12, d.y - d.l); ctx.stroke();
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
      const g = ctx.createLinearGradient(0, H, 0, H * .55); // glow from below
      g.addColorStop(0, 'rgba(255,80,40,.18)'); g.addColorStop(1, 'rgba(255,80,40,0)');
      ctx.fillStyle = g; ctx.fillRect(0, H * .55, W, H * .45);
    },
    paws(dt) {
      for (const p of parts.paws) {
        p.y -= p.v * dt;
        if (p.y < -40) { p.y = H + 40; p.x = R() * W; }
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.fillStyle = col(p.c, p.a);
        ctx.beginPath(); ctx.ellipse(0, p.s * .55, p.s * .75, p.s * .62, 0, 0, 6.283); ctx.fill();
        for (const [dx, dy] of [[-.85, -.25], [-.32, -.78], [.32, -.78], [.85, -.25]]) {
          ctx.beginPath(); ctx.ellipse(dx * p.s, dy * p.s, p.s * .28, p.s * .34, 0, 0, 6.283); ctx.fill();
        }
        ctx.restore();
      }
    },
    orbits(dt) {
      ctx.save(); ctx.translate(W * .5, H * .42);
      for (const o of parts.orbits) {
        o.rot += o.sp * dt; o.e += o.ev * dt;
        ctx.save(); ctx.rotate(o.rot);
        ctx.strokeStyle = col(0, .09); ctx.lineWidth = 1;
        ctx.beginPath(); ctx.ellipse(0, 0, o.rx, o.ry, 0, 0, 6.283); ctx.stroke();
        const ex = Math.cos(o.e) * o.rx, ey = Math.sin(o.e) * o.ry;
        const g = ctx.createRadialGradient(ex, ey, 0, ex, ey, 10);
        g.addColorStop(0, col(1, .9)); g.addColorStop(1, col(1, 0));
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(ex, ey, 10, 0, 6.283); ctx.fill();
        ctx.restore();
      }
      const g = ctx.createRadialGradient(0, 0, 0, 0, 0, 40);
      g.addColorStop(0, 'rgba(255,230,170,.35)'); g.addColorStop(1, 'rgba(255,230,170,0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(0, 0, 40, 0, 6.283); ctx.fill();
      ctx.restore();
    },
    moon() {
      const mx = W * .82, my = Math.min(H * .14, 130), r = 34;
      const g = ctx.createRadialGradient(mx, my, r * .6, mx, my, r * 5);
      g.addColorStop(0, 'rgba(255,240,200,.22)'); g.addColorStop(1, 'rgba(255,240,200,0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(mx, my, r * 5, 0, 6.283); ctx.fill();
      ctx.save(); ctx.beginPath(); ctx.arc(mx, my, r, 0, 6.283); ctx.clip();
      ctx.fillStyle = '#fff3d6'; ctx.fillRect(mx - r, my - r, 2 * r, 2 * r);
      ctx.fillStyle = th.sky[0]; ctx.beginPath(); ctx.arc(mx + r * .45, my - r * .2, r * .92, 0, 6.283); ctx.fill();
      ctx.restore();
    },
    zzz(dt) {
      ctx.font = 'italic 500 20px Literata, Georgia, serif'; ctx.textAlign = 'center';
      for (const z of parts.zzz) {
        z.y -= z.v * dt;
        if (z.y < -30) { z.y = H + 30; z.x = W * (.15 + R() * .7); }
        ctx.font = `italic 500 ${z.s}px Literata, Georgia, serif`;
        ctx.fillStyle = `rgba(200,200,255,${.12 + .06 * Math.sin(T + z.p)})`;
        ctx.fillText('z', z.x + Math.sin(T * .6 + z.p) * 12, z.y);
      }
    },
  };

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
  if (reduceMotion) running = false; else raf = requestAnimationFrame(loop);
  document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
  // full-screen scenes cover the background: no need to draw it then
  screenHooks.push(id => { (ROUTES[id] && ROUTES[id].scene) ? stop() : start(); });
  return { name, start, stop };
})();
