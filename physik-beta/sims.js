// Interactive experiments for "Physik heute".
// Every experiment draws on one canvas, has a few controls, a short explanation and
// small "try this" tasks that tick themselves off when the situation on screen is right.
(() => {
  'use strict';
  const DEFS = {};
  const def = (id, d) => { DEFS[id] = d; };
  const TAU = Math.PI * 2;
  const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
  const lerp = (a, b, t) => a + (b - a) * t;
  const hypot = Math.hypot;

  // ---------- small storage for ticked tasks ----------
  const taskStore = {
    all() { try { return JSON.parse(localStorage.getItem('sim-tasks') || '{}'); } catch (e) { return {}; } },
    get(id) { return this.all()[id] || []; },
    set(id, arr) { try { const a = this.all(); a[id] = arr; localStorage.setItem('sim-tasks', JSON.stringify(a)); } catch (e) {} },
  };

  // ---------- tiny sound for a solved task ----------
  let actx = null;
  function chime() {
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      const t0 = actx.currentTime;
      [659.25, 987.77, 1318.5].forEach((f, i) => {
        const o = actx.createOscillator(), g = actx.createGain();
        o.type = 'triangle'; o.frequency.value = f;
        g.gain.setValueAtTime(0, t0 + i * .08);
        g.gain.linearRampToValueAtTime(.12, t0 + i * .08 + .02);
        g.gain.exponentialRampToValueAtTime(.0008, t0 + i * .08 + .6);
        o.connect(g).connect(actx.destination); o.start(t0 + i * .08); o.stop(t0 + i * .08 + .65);
      });
    } catch (e) {}
  }

  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  // ---------- drawing helpers shared by the experiments ----------
  const draw = {
    arrow(ctx, x0, y0, x1, y1, head = 8, width = 2) {
      const a = Math.atan2(y1 - y0, x1 - x0), len = hypot(x1 - x0, y1 - y0);
      if (len < 1) return;
      const h = Math.min(head, len * .6);
      ctx.lineWidth = width;
      ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1 - Math.cos(a) * h * .6, y1 - Math.sin(a) * h * .6); ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x1 - h * Math.cos(a - .42), y1 - h * Math.sin(a - .42));
      ctx.lineTo(x1 - h * Math.cos(a + .42), y1 - h * Math.sin(a + .42));
      ctx.closePath(); ctx.fill();
    },
    glowDot(ctx, x, y, r, color, glow = 3) {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r * glow);
      g.addColorStop(0, color); g.addColorStop(.35, color.replace(/[\d.]+\)$/, '.35)')); g.addColorStop(1, color.replace(/[\d.]+\)$/, '0)'));
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r * glow, 0, TAU); ctx.fill();
    },
    text(ctx, s, x, y, color = '#efe9ff', size = 12, align = 'left', weight = 600) {
      ctx.fillStyle = color; ctx.font = `${weight} ${size}px system-ui, sans-serif`; ctx.textAlign = align; ctx.textBaseline = 'middle';
      ctx.fillText(s, x, y);
    },
    // light wavelength (nm) -> css colour, roughly as the eye sees it
    nmColor(nm, a = 1) {
      let r = 0, g = 0, b = 0;
      if (nm < 440) { r = -(nm - 440) / 60; b = 1; }
      else if (nm < 490) { g = (nm - 440) / 50; b = 1; }
      else if (nm < 510) { g = 1; b = -(nm - 510) / 20; }
      else if (nm < 580) { r = (nm - 510) / 70; g = 1; }
      else if (nm < 645) { r = 1; g = -(nm - 645) / 65; }
      else { r = 1; }
      const f = nm < 420 ? .35 + .65 * (nm - 380) / 40 : nm > 700 ? .35 + .65 * (780 - nm) / 80 : 1;
      const c = v => Math.round(255 * Math.pow(clamp(v * f, 0, 1), .8));
      return `rgba(${c(r)},${c(g)},${c(b)},${a})`;
    },
  };

  // ---------- mounting an experiment ----------
  function mount(id, host, lang, hooks = {}) {
    const d = DEFS[id];
    if (!d) throw new Error('unknown experiment ' + id);
    const T = d.text[lang] || d.text.de;
    host.innerHTML = '';
    host.classList.add('simwrap');

    const stage = el('div', 'sim-stage');
    const cv = document.createElement('canvas');
    const hud = el('div', 'sim-hud'); hud.hidden = true;
    const toast = el('div', 'sim-toast'); toast.hidden = true;
    stage.append(cv, hud, toast);
    const hint = el('p', 'sim-hint', T.hint || '');
    const ctrl = el('div', 'sim-ctrl');
    host.append(stage, hint, ctrl);
    if (!T.hint) hint.hidden = true;

    const ctx = cv.getContext('2d');
    const api = {
      lang, T, cv, ctx, stage, W: 0, H: 0, dpr: 1, v: {}, draw, clamp, lerp, TAU,
      hud(html) { if (html) { hud.innerHTML = html; hud.hidden = false; } else hud.hidden = true; },
      toast(html, ms = 2200) {
        toast.innerHTML = html; toast.hidden = false; toast.classList.remove('pop'); void toast.offsetWidth; toast.classList.add('pop');
        clearTimeout(api._tt); api._tt = setTimeout(() => { toast.hidden = true; }, ms);
      },
      check(i) {
        const done = taskStore.get(id);
        const li = tasksEl && tasksEl.children[i];
        if (li && !li.classList.contains('live')) { li.classList.add('live'); setTimeout(() => li.classList.remove('live'), 1400); }
        if (done[i]) return;
        done[i] = true; taskStore.set(id, done);
        if (li) li.classList.add('done', 'just');
        chime();
        api.toast(ic('check') + ' ' + (lang === 'ru' ? 'Задание выполнено!' : 'Aufgabe gelöst!'));
        if (hooks.onTask) hooks.onTask(id, i);
      },
      set(k, val) { api.v[k] = val; const c = controls[k]; if (c) c.sync(); },
      dirty: true,
    };

    // controls: sliders, segmented choices, toggles and buttons
    const controls = {};
    for (const c of d.controls || []) {
      const label = c.label ? (c.label[lang] || c.label.de) : '';
      if (c.type === 'range') {
        api.v[c.k] = c.val;
        const row = el('label', 'sim-row');
        row.innerHTML = `<span class="sim-lab">${label}</span><input type="range" min="${c.min}" max="${c.max}" step="${c.step}" value="${c.val}"><output></output>`;
        const inp = row.querySelector('input'), out = row.querySelector('output');
        const fmt = () => { out.innerHTML = c.fmt ? c.fmt(api.v[c.k], api) : api.v[c.k]; };
        inp.addEventListener('input', () => { api.v[c.k] = +inp.value; fmt(); api.dirty = true; inst.change && inst.change(c.k); });
        controls[c.k] = { sync() { inp.value = api.v[c.k]; fmt(); } };
        fmt();
        ctrl.appendChild(row);
      } else if (c.type === 'seg') {
        api.v[c.k] = c.val;
        const row = el('div', 'sim-row sim-segrow');
        row.innerHTML = (label ? `<span class="sim-lab">${label}</span>` : '') + `<div class="sim-seg">${c.opts.map(o =>
          `<button type="button" data-v="${o.v}">${o.label[lang] || o.label.de}</button>`).join('')}</div>`;
        const btns = [...row.querySelectorAll('button')];
        const sync = () => btns.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.v === String(api.v[c.k]))));
        btns.forEach(b => b.addEventListener('click', () => {
          const o = c.opts.find(o => String(o.v) === b.dataset.v);
          api.v[c.k] = o.v; sync(); api.dirty = true; inst.change && inst.change(c.k);
        }));
        controls[c.k] = { sync };
        sync();
        ctrl.appendChild(row);
      } else if (c.type === 'toggle') {
        api.v[c.k] = c.val;
        const b = el('button', 'sim-tog', label);
        b.type = 'button';
        const sync = () => b.setAttribute('aria-pressed', String(!!api.v[c.k]));
        b.addEventListener('click', () => { api.v[c.k] = !api.v[c.k]; sync(); api.dirty = true; inst.change && inst.change(c.k); });
        controls[c.k] = { sync };
        sync();
        (ctrl.querySelector('.sim-btnrow') || ctrl.appendChild(el('div', 'sim-btnrow'))).appendChild(b);
      } else if (c.type === 'button') {
        const b = el('button', 'sim-btn', label);
        b.type = 'button';
        b.addEventListener('click', () => { inst.action && inst.action(c.k); api.dirty = true; });
        (ctrl.querySelector('.sim-btnrow') || ctrl.appendChild(el('div', 'sim-btnrow'))).appendChild(b);
      }
    }

    // explanation + tasks
    let tasksEl = null;
    if (T.what) host.appendChild(el('div', 'sim-what', `<h3>${ic('telescope')} ${lang === 'ru' ? 'Что тут происходит' : 'Was passiert hier?'}</h3>${T.what}`));
    if (T.tasks && T.tasks.length) {
      const box = el('div', 'sim-tasks', `<h3>${ic('target')} ${lang === 'ru' ? 'Попробуй' : 'Probier mal'}</h3>`);
      tasksEl = el('ol');
      const done = taskStore.get(id);
      T.tasks.forEach((t, i) => { const li = el('li', done[i] ? 'done' : '', t); tasksEl.appendChild(li); });
      box.appendChild(tasksEl);
      host.appendChild(box);
    }
    if (hooks.tex) hooks.tex(host);

    // canvas size follows the page width
    const sizeIt = () => {
      const w = stage.clientWidth || 360;
      const aspect = typeof d.aspect === 'function' ? d.aspect(w) : (d.aspect || .78);
      const h = Math.round(Math.min(w * aspect, (window.innerHeight || 800) * .72));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (api.W === w && api.H === h && api.dpr === dpr) return;
      api.W = w; api.H = h; api.dpr = dpr;
      cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
      cv.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      api.dirty = true;
      inst && inst.resize && inst.resize();
    };

    let inst = null;
    sizeIt();
    inst = d.setup(api) || {};
    inst.resize && inst.resize();
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(sizeIt) : null;
    if (ro) ro.observe(stage); else window.addEventListener('resize', sizeIt);

    // pointer input in canvas coordinates (css px)
    const pos = e => { const r = cv.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
    let downAt = null, lastTap = 0;
    const onDown = e => {
      const p = pos(e); downAt = { ...p, t: performance.now() };
      cv.setPointerCapture && cv.setPointerCapture(e.pointerId);
      const now = performance.now();
      if (now - lastTap < 320 && inst.dbl) inst.dbl(p.x, p.y);
      lastTap = now;
      inst.down && inst.down(p.x, p.y, e);
      api.dirty = true;
    };
    const onMove = e => { if (!inst.move) return; const p = pos(e); inst.move(p.x, p.y, !!downAt, e); if (downAt) api.dirty = true; };
    const onUp = e => { if (!downAt) return; const p = pos(e); inst.up && inst.up(p.x, p.y, e); downAt = null; api.dirty = true; };
    cv.addEventListener('pointerdown', onDown);
    cv.addEventListener('pointermove', onMove);
    cv.addEventListener('pointerup', onUp);
    cv.addEventListener('pointercancel', onUp);
    if (d.drag !== false) cv.style.touchAction = 'none';

    // animation loop: only while this experiment is on screen
    let raf = 0, last = performance.now(), t = 0, alive = true;
    const loop = now => {
      if (!alive) return;
      const dt = Math.min(.05, (now - last) / 1000); last = now; t += dt;
      if (!document.hidden && inst.frame) inst.frame(dt, t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return {
      destroy() {
        alive = false; cancelAnimationFrame(raf);
        if (ro) ro.disconnect(); else window.removeEventListener('resize', sizeIt);
        inst.destroy && inst.destroy();
        host.innerHTML = '';
      },
      api,
    };
  }

  window.SIMS = { def, mount, defs: DEFS, taskStore, draw, util: { clamp, lerp, TAU, hypot } };
})();
