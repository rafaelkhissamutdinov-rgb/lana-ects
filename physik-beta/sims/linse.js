// Linse: thin lens, the three principal rays, real and virtual images
SIMS.def('linse', {
  aspect: w => w < 520 ? .8 : .52,
  text: {
    de: {
      limits: 'Dünne Linse in paraxialer Näherung (achsennahe Strahlen), ohne Linsenfehler. Die Brechung wird vereinfacht an der Mittelebene der Linse gezeichnet.',
      hint: 'Zieh den Gegenstand (Pfeil links) nach links und rechts, seine Spitze nach oben und unten. Die Brennpunkte F und F′ sind markiert.',
      what: `<p>Für eine dünne Linse gilt $\\frac1f=\\frac1g+\\frac1b$ und der Abbildungsmaßstab $V=-\\frac bg$. Drei Strahlen genügen: der <b>Parallelstrahl</b> geht hinter der Linse durch $F'$, der <b>Mittelpunktstrahl</b> geht gerade durch, der <b>Brennpunktstrahl</b> durch $F$ wird zum Parallelstrahl.</p>
<p>Für $g>f$ treffen sich die Strahlen hinter der Linse: ein <b>reelles</b>, umgekehrtes Bild (auf einem Schirm sichtbar). Für $g<f$ laufen sie auseinander; nur ihre Verlängerungen (gestrichelt) treffen sich vor der Linse: ein <b>virtuelles</b>, aufrechtes, vergrößertes Bild – die Lupe.</p>
<p>Brechkraft $D=1/f$ in Dioptrien; Zerstreuungslinsen haben $f<0$ und liefern immer ein virtuelles, verkleinertes Bild.</p>`,
      tasks: [
        'Erzeuge ein reelles Bild, das größer ist als der Gegenstand.',
        'Stell g = 2f ein: Wie groß ist das Bild jetzt?',
        'Lupe: Schieb den Gegenstand innerhalb der Brennweite. Was für ein Bild entsteht?',
        'Zerstreuungslinse (f < 0): Gibt es eine Stellung mit reellem Bild?',
      ],
    },
    ru: {
      limits: 'Тонкая линза в параксиальном приближении (лучи близко к оси), без аберраций. Преломление упрощённо нарисовано в средней плоскости линзы.',
      hint: 'Тяни предмет (стрелку слева) влево-вправо, а его кончик – вверх-вниз. Фокусы F и F′ отмечены.',
      what: `<p>Для тонкой линзы $\\frac1f=\\frac1g+\\frac1b$, увеличение $V=-\\frac bg$. Хватает трёх лучей: <b>параллельный</b> после линзы идёт через $F'$, <b>центральный</b> проходит прямо, <b>фокальный</b> через $F$ становится параллельным.</p>
<p>При $g>f$ лучи сходятся за линзой: <b>действительное</b> перевёрнутое изображение (видно на экране). При $g<f$ они расходятся, сходятся только их продолжения (пунктир) перед линзой: <b>мнимое</b> прямое увеличенное изображение – лупа.</p>
<p>Оптическая сила $D=1/f$ в диоптриях; у рассеивающей линзы $f<0$, изображение всегда мнимое и уменьшенное.</p>`,
      tasks: [
        'Получи действительное изображение крупнее предмета.',
        'Поставь g = 2f: какого размера изображение?',
        'Лупа: помести предмет ближе фокуса. Какое получается изображение?',
        'Рассеивающая линза (f < 0): бывает ли действительное изображение?',
      ],
    },
  },
  controls: [
    { k: 'f', type: 'range', min: -3, max: 3, step: .05, val: 1.5, label: { de: 'Brennweite f', ru: 'Фокусное f' }, fmt: v => (Math.abs(v) < .2 ? '±0.2' : v.toFixed(2)) },
    { k: 'g', type: 'range', min: .3, max: 6, step: .05, val: 4, label: { de: 'Gegenstandsweite g', ru: 'Расстояние g' }, fmt: v => v.toFixed(2) },
  ],
  setup(api) {
    const { ctx, draw } = api, L = api.lang === 'ru';
    let G = 1.2, drag = null;   // G = object height
    const fval = () => { const f = api.v.f; return Math.abs(f) < .2 ? (f < 0 ? -.2 : .2) : f; };
    const u = () => api.W / 11.5;
    const P = (x, y) => [api.W / 2 + x * u(), api.H * .5 - y * u()];
    function image() {
      const f = fval(), g = api.v.g, inv = 1 / f - 1 / g;
      const b = Math.abs(inv) < 1e-6 ? Infinity : 1 / inv;
      return { f, g, b, V: -b / g };
    }
    function hud() {
      const im = image(), real = im.b > 0 && isFinite(im.b);
      api.hud(isFinite(im.b)
        ? `b = <span class="g">${im.b.toFixed(2)}</span> · V = <span class="g">${im.V.toFixed(2)}</span><br><span class="k">${real ? (L ? 'действительное' : 'reell') : (L ? 'мнимое' : 'virtuell')}, ${im.V < 0 ? (L ? 'перевёрнутое' : 'umgekehrt') : (L ? 'прямое' : 'aufrecht')}, ${Math.abs(im.V) > 1.02 ? (L ? 'увеличенное' : 'vergrößert') : Math.abs(im.V) < .98 ? (L ? 'уменьшенное' : 'verkleinert') : (L ? 'того же размера' : 'gleich groß')}</span>`
        : (L ? 'g = f: лучи параллельны, изображения нет (на бесконечности)' : 'g = f: Strahlen parallel, Bild im Unendlichen'));
    }
    function checks() {
      const im = image();
      if (im.f > 0 && im.b > 0 && isFinite(im.b) && Math.abs(im.V) > 1.1) api.check(0);
      if (im.f > 0 && Math.abs(im.g - 2 * im.f) < .06) api.check(1);
      if (im.f > 0 && im.g < im.f - .05) api.check(2);
      if (im.f < 0) api.check(3);
    }
    hud();
    return {
      probe: { image },
      change() { hud(); checks(); },
      down(px, py) {
        const [ox, oy] = P(-api.v.g, G);
        if (Math.hypot(px - ox, py - oy) < 26) drag = 'tip';
        else if (Math.abs(px - ox) < 22) drag = 'pos';
        else drag = null;
      },
      move(px, py, isDown) {
        if (!isDown || !drag) return;
        const x = (px - api.W / 2) / u(), y = (api.H * .5 - py) / u();
        api.set('g', Math.max(.3, Math.min(6, Math.round(-x * 20) / 20)));
        if (drag === 'tip') G = Math.max(-2, Math.min(2, y)) || .1;
        hud(); checks();
      },
      up() { drag = null; },
      frame() {
        const W = api.W, H = api.H, im = image(), f = im.f, g = im.g, U = u();
        ctx.fillStyle = '#070616'; ctx.fillRect(0, 0, W, H);
        const line = (x0, y0, x1, y1) => { const [a, b] = P(x0, y0), [c, d] = P(x1, y1); ctx.beginPath(); ctx.moveTo(a, b); ctx.lineTo(c, d); ctx.stroke(); };
        // axis, lens, focal points
        ctx.strokeStyle = 'rgba(255,255,255,.3)'; ctx.lineWidth = 1; line(-7, 0, 7, 0);
        const [lx, ly] = P(0, 0), lh = H * .42;
        ctx.fillStyle = 'rgba(130,198,255,.16)'; ctx.strokeStyle = 'rgba(130,198,255,.85)'; ctx.lineWidth = 1.5;
        ctx.beginPath();
        if (f > 0) { ctx.ellipse(lx, ly, 9, lh, 0, 0, Math.PI * 2); }
        else { ctx.moveTo(lx - 10, ly - lh); ctx.quadraticCurveTo(lx, ly, lx - 10, ly + lh); ctx.lineTo(lx + 10, ly + lh); ctx.quadraticCurveTo(lx, ly, lx + 10, ly - lh); ctx.closePath(); }
        ctx.fill(); ctx.stroke();
        for (const [s, n] of [[-1, 'F'], [1, 'F′']]) {
          const [x, y] = P(s * Math.abs(f), 0);
          ctx.fillStyle = '#82c6ff'; ctx.beginPath(); ctx.arc(x, y, 4, 0, 7); ctx.fill();
          draw.text(ctx, f > 0 ? n : (s < 0 ? 'F′' : 'F'), x, y + 14, '#82c6ff', 11, 'center');
        }
        const [x2f] = P(-2 * Math.abs(f), 0); ctx.fillStyle = 'rgba(130,198,255,.5)'; ctx.beginPath(); ctx.arc(x2f, ly, 2.5, 0, 7); ctx.fill();
        draw.text(ctx, '2F', x2f, ly + 14, 'rgba(130,198,255,.6)', 10, 'center');
        // object
        const arrow = (x, y, col, dash) => {
          const [a, b] = P(x, 0), [c, d] = P(x, y);
          ctx.strokeStyle = ctx.fillStyle = col; ctx.setLineDash(dash ? [5, 4] : []);
          draw.arrow(ctx, a, b, c, d, 11, 3); ctx.setLineDash([]);
        };
        arrow(-g, G, '#f4c86a');
        // principal rays from the tip of the object
        const b = im.b, Y = isFinite(b) ? G * im.V : 0, far = 7;
        const rays = [
          { hit: G, slope: -G / f, col: 'rgba(255,214,140,.9)' },          // parallel → through F′
          { hit: 0, slope: -G / g, col: 'rgba(95,214,184,.9)', center: true }, // through the centre
          { hit: f !== g ? G * f / (f - g) : null, col: 'rgba(255,127,159,.9)', focal: true },   // through F → parallel
        ];
        ctx.lineWidth = 1.6;
        for (const r of rays) {
          if (r.hit === null || Math.abs(r.hit) > 6) continue;
          ctx.strokeStyle = r.col;
          line(-g, G, 0, r.center ? 0 : r.hit);
          const slope = r.center ? -G / g : r.focal ? 0 : -r.hit / f;
          const y0 = r.center ? 0 : r.hit;
          line(0, y0, far, y0 + slope * far);
          if (!(b > 0) && isFinite(b)) {   // virtual image: extend the outgoing rays backwards
            ctx.setLineDash([4, 5]); ctx.strokeStyle = r.col.replace('.9)', '.45)');
            line(0, y0, -far, y0 - slope * far); ctx.setLineDash([]);
          }
        }
        if (isFinite(b) && Math.abs(b) < 7.5) arrow(b, Y, b > 0 ? '#ffe3a6' : 'rgba(255,227,166,.7)', b < 0);
        draw.text(ctx, 'g', P(-g / 2, 0)[0], ly + 30, 'rgba(244,200,106,.8)', 12, 'center');
      },
    };
  },
});
