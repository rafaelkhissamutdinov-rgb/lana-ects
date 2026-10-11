// Faltung & δ: (f*g)(x) = ∫ f(t) g(x−t) dt as the area under a sliding product
SIMS.def('faltung', {
  aspect: w => w < 520 ? 1 : .62,
  text: {
    de: {
      limits: 'Das Integral wird numerisch (Riemann-Summe auf [−6, 6]) berechnet und die Kurve zwischen 241 Punkten interpoliert. Die δ-Folge ist eine Gauß-Glocke der Breite ε mit Fläche 1.',
      hint: 'Oben: f(t) in Gold und die gespiegelte, verschobene g(x − t) in Rosa. Ihr Produkt ist violett gefüllt – diese Fläche ist (f∗g)(x), unten als Kurve. Zieh im Bild nach links und rechts, um x zu verschieben.',
      what: `<p>$(f*g)(x)=\\int f(t)\\,g(x-t)\\,dt$: Spiegle $g$, schieb es um $x$, multipliziere mit $f$ und nimm die Fläche. Für jedes $x$ ein Wert – zusammen eine neue Funktion.</p>
<p>Die Faltung <b>glättet</b>: Sie ist mindestens so glatt wie der glattere Faktor (Rechteck ∗ Rechteck = Dreieck, Rechteck ∗ Gauß = glatt). Sie ist kommutativ: $f*g=g*f$.</p>
<p>Die <b>δ-Funktion</b> ist das neutrale Element: $f*\\delta=f$. Eine immer schmalere Glocke $\\delta_\\varepsilon$ mit Fläche 1 gibt im Grenzwert genau $f$ zurück. Fourier macht aus der Faltung ein Produkt: $\\widehat{f*g}=\\hat f\\,\\hat g$.</p>`,
      tasks: [
        'Falte Rechteck mit Rechteck und schieb x einmal ganz durch. Welche Form entsteht?',
        'Wähle für g die δ-Folge und mach ε kleiner als 0,1. Was wird aus f ∗ δ_ε?',
        'Falte das Rechteck mit der Gauß-Glocke: Wo sind die Ecken geblieben?',
        'Tausche f und g. Ändert sich das Ergebnis?',
      ],
    },
    ru: {
      limits: 'Интеграл считается численно (сумма Римана на [−6, 6]), кривая интерполируется по 241 точке. δ-последовательность – колокол Гаусса ширины ε с площадью 1.',
      hint: 'Сверху: f(t) золотом и отражённая сдвинутая g(x − t) розовым. Их произведение залито фиолетовым – эта площадь и есть (f∗g)(x), внизу кривой. Тяни по картинке влево-вправо, чтобы двигать x.',
      what: `<p>$(f*g)(x)=\\int f(t)\\,g(x-t)\\,dt$: отрази $g$, сдвинь на $x$, умножь на $f$ и возьми площадь. Для каждого $x$ – число, вместе – новая функция.</p>
<p>Свёртка <b>сглаживает</b>: она не менее гладкая, чем более гладкий множитель (прямоугольник ∗ прямоугольник = треугольник, прямоугольник ∗ гаусс = гладко). Она коммутативна: $f*g=g*f$.</p>
<p><b>δ-функция</b> – нейтральный элемент: $f*\\delta=f$. Всё более узкий колокол $\\delta_\\varepsilon$ с площадью 1 в пределе возвращает ровно $f$. Фурье превращает свёртку в произведение: $\\widehat{f*g}=\\hat f\\,\\hat g$.</p>`,
      tasks: [
        'Сверни прямоугольник с прямоугольником и протяни x через всё. Какая форма получается?',
        'Выбери для g δ-последовательность и сделай ε меньше 0,1. Во что превращается f ∗ δ_ε?',
        'Сверни прямоугольник с гауссом: куда делись углы?',
        'Поменяй f и g местами. Меняется ли результат?',
      ],
    },
  },
  controls: [
    { k: 'f', type: 'seg', val: 'rect', label: { de: 'f', ru: 'f' }, opts: [
      { v: 'rect', label: { de: 'Rechteck', ru: 'Прямоуг.' } }, { v: 'tri', label: { de: 'Dreieck', ru: 'Треуг.' } },
      { v: 'exp', label: { de: 'e⁻ᵗ·H(t)', ru: 'e⁻ᵗ·H(t)' } }, { v: 'gauss', label: { de: 'Gauß', ru: 'Гаусс' } }] },
    { k: 'g', type: 'seg', val: 'rect', label: { de: 'g', ru: 'g' }, opts: [
      { v: 'rect', label: { de: 'Rechteck', ru: 'Прямоуг.' } }, { v: 'gauss', label: { de: 'Gauß', ru: 'Гаусс' } },
      { v: 'exp', label: { de: 'e⁻ᵗ·H(t)', ru: 'e⁻ᵗ·H(t)' } }, { v: 'delta', label: { de: 'δ-Folge', ru: 'δ-послед.' } }] },
    { k: 'eps', type: 'range', min: .03, max: .8, step: .01, val: .4, label: { de: 'Breite ε der δ-Folge', ru: 'Ширина ε' }, fmt: v => v.toFixed(2) },
    { k: 'x', type: 'range', min: -4, max: 4, step: .01, val: -2.5, label: { de: 'Verschiebung x', ru: 'Сдвиг x' }, fmt: v => v.toFixed(2) },
    { k: 'play', type: 'toggle', val: true, label: { de: 'x automatisch', ru: 'x автоматически' } },
    { k: 'swap', type: 'button', label: { de: 'f ↔ g tauschen', ru: 'f ↔ g' } },
  ],
  setup(api) {
    const { ctx, draw } = api, L = api.lang === 'ru';
    const T0 = -6, T1 = 6, NT = 1200, dt = (T1 - T0) / NT;
    let conv = [], dirty = true, sweep = { min: 9, max: -9 }, dir = 1, swapped = false;
    const F = (name, t) => {
      switch (name) {
        case 'rect': return Math.abs(t) <= 1 ? .5 : 0;
        case 'tri': return Math.max(0, 1 - Math.abs(t));
        case 'exp': return t >= 0 ? Math.exp(-t) : 0;
        case 'gauss': return Math.exp(-t * t / (2 * .25)) / (.5 * Math.sqrt(2 * Math.PI));
        case 'delta': { const e = api.v.eps; return Math.exp(-t * t / (2 * e * e)) / (e * Math.sqrt(2 * Math.PI)); }
      }
      return 0;
    };
    const fv = t => F(api.v.f, t), gv = t => F(api.v.g, t);
    function compute() {   // (f*g)(x) on a grid, by a Riemann sum
      conv = [];
      for (let i = 0; i <= 240; i++) {
        const x = -4 + 8 * i / 240;
        let s = 0;
        for (let k = 0; k < NT; k++) { const t = T0 + (k + .5) * dt; s += fv(t) * gv(x - t); }
        conv.push(s * dt);
      }
      dirty = false;
    }
    const convAt = x => { const i = (x + 4) / 8 * 240, a = Math.floor(i), f = i - a; return a >= 240 ? conv[240] : conv[a] * (1 - f) + conv[a + 1] * f; };
    function checks() {
      if (api.v.f === 'rect' && api.v.g === 'rect' && sweep.max - sweep.min > 3.8) api.check(0);
      if (api.v.g === 'delta' && api.v.eps < .1) api.check(1);
      if (api.v.f === 'rect' && api.v.g === 'gauss') api.check(2);
      if (swapped) api.check(3);
    }
    function hud() { api.hud(`x = <span class="g">${api.v.x.toFixed(2)}</span> · (f∗g)(x) = <span class="g">${(dirty ? 0 : convAt(api.v.x)).toFixed(3)}</span>`); }
    let dragX = null;
    return {
      probe: { convAt: x => { compute(); return convAt(x); }, F },
      change(k) {
        if (k === 'f' || k === 'g' || k === 'eps') { dirty = true; sweep = { min: 9, max: -9 }; }
        if (k === 'x') { sweep.min = Math.min(sweep.min, api.v.x); sweep.max = Math.max(sweep.max, api.v.x); }
        checks();
      },
      action(k) {
        if (k !== 'swap') return;
        const f = api.v.f, g = api.v.g;
        const okF = ['rect', 'tri', 'exp', 'gauss'], okG = ['rect', 'gauss', 'exp', 'delta'];
        if (!okF.includes(g) || !okG.includes(f)) { api.toast(L ? 'Эту пару нельзя поменять местами в меню' : 'Dieses Paar lässt sich im Menü nicht tauschen', 2200); return; }
        api.set('f', g); api.set('g', f); dirty = true; swapped = true; checks();
      },
      down(px) { dragX = px; api.set('play', false); },
      move(px, py, isDown) {
        if (!isDown || dragX === null) return;
        const nx = Math.max(-4, Math.min(4, api.v.x + (px - dragX) / (api.W - 32) * 8));
        dragX = px; api.set('x', Math.round(nx * 100) / 100);
        sweep.min = Math.min(sweep.min, nx); sweep.max = Math.max(sweep.max, nx); checks();
      },
      up() { dragX = null; },
      frame(dtime) {
        if (dirty) compute();
        if (api.v.play) {
          let x = api.v.x + dir * dtime * 1.2;
          if (x > 4) { x = 4; dir = -1; } if (x < -4) { x = -4; dir = 1; }
          api.set('x', Math.round(x * 100) / 100);
          sweep.min = Math.min(sweep.min, x); sweep.max = Math.max(sweep.max, x); checks();
        }
        hud();
        const W = api.W, H = api.H, x0 = 16, x1 = W - 16, X = t => x0 + (x1 - x0) * (t + 4) / 8;
        ctx.fillStyle = '#070616'; ctx.fillRect(0, 0, W, H);
        // top panel: f, g(x − t) and their product
        const ty = H * .5, th = H * .34, x = api.v.x;
        let ymax = 0; for (let t = -4; t <= 4; t += .02) ymax = Math.max(ymax, fv(t), gv(x - t));
        ymax = Math.min(Math.max(ymax, .6), 3);
        const Y = v => ty - Math.min(v, ymax * 1.1) / ymax * th;
        ctx.strokeStyle = 'rgba(255,255,255,.15)'; ctx.beginPath(); ctx.moveTo(x0, ty); ctx.lineTo(x1, ty); ctx.stroke();
        ctx.fillStyle = 'rgba(162,148,255,.45)'; ctx.beginPath(); ctx.moveTo(X(-4), ty);
        for (let i = 0; i <= 400; i++) { const t = -4 + 8 * i / 400; ctx.lineTo(X(t), Y(fv(t) * gv(x - t))); }
        ctx.lineTo(X(4), ty); ctx.closePath(); ctx.fill();
        const curve = (fn, col, w) => { ctx.strokeStyle = col; ctx.lineWidth = w; ctx.beginPath(); for (let i = 0; i <= 400; i++) { const t = -4 + 8 * i / 400; i ? ctx.lineTo(X(t), Y(fn(t))) : ctx.moveTo(X(t), Y(fn(t))); } ctx.stroke(); };
        curve(fv, '#f4c86a', 2.2);
        curve(t => gv(x - t), '#ff7f9f', 2);
        draw.text(ctx, 'f(t)', x1 - 92, ty + 14, '#f4c86a', 11, 'left', 700);
        draw.text(ctx, 'g(x − t)', x1 - 52, ty + 14, '#ff7f9f', 11, 'left', 700);
        ctx.strokeStyle = 'rgba(255,255,255,.35)'; ctx.setLineDash([3, 4]); ctx.beginPath(); ctx.moveTo(X(x), ty - th - 4); ctx.lineTo(X(x), H - 8); ctx.stroke(); ctx.setLineDash([]);
        // bottom panel: the convolution
        const by = H - 14, bh = H * .3;
        let cmax = Math.max(...conv, .2);
        const CY = v => by - v / cmax * bh;
        ctx.strokeStyle = 'rgba(255,255,255,.15)'; ctx.beginPath(); ctx.moveTo(x0, by); ctx.lineTo(x1, by); ctx.stroke();
        ctx.strokeStyle = 'rgba(162,148,255,.3)'; ctx.lineWidth = 1.5; ctx.beginPath();
        conv.forEach((v, i) => { const xx = X(-4 + 8 * i / 240); i ? ctx.lineTo(xx, CY(v)) : ctx.moveTo(xx, CY(v)); }); ctx.stroke();
        ctx.strokeStyle = '#a294ff'; ctx.lineWidth = 2.4; ctx.beginPath();
        let started = false;
        conv.forEach((v, i) => { const xv = -4 + 8 * i / 240; if (xv > x) return; const xx = X(xv); started ? ctx.lineTo(xx, CY(v)) : ctx.moveTo(xx, CY(v)); started = true; });
        ctx.stroke();
        if (api.v.g === 'delta') { ctx.strokeStyle = 'rgba(244,200,106,.45)'; ctx.setLineDash([4, 4]); ctx.beginPath(); for (let i = 0; i <= 400; i++) { const t = -4 + 8 * i / 400; i ? ctx.lineTo(X(t), CY(fv(t))) : ctx.moveTo(X(t), CY(fv(t))); } ctx.stroke(); ctx.setLineDash([]); }
        draw.glowDot(ctx, X(x), CY(convAt(x)), 4, 'rgba(162,148,255,1)', 3);
        draw.text(ctx, '(f ∗ g)(x)', x0 + 2, by - bh - 8, '#a294ff', 11, 'left', 700);
      },
    };
  },
});
