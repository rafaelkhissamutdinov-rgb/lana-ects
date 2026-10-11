// Minkowski-Diagramm: rest frame S and a frame S' moving with β = v/c, events, simultaneity and the invariant interval
SIMS.def('minkowski', {
  aspect: w => w < 520 ? 1 : .66,
  text: {
    de: {
      limits: 'Eine Raumdimension, c = 1, Bewegung nur in x-Richtung (Standardkonfiguration, gemeinsamer Ursprung). Koordinaten, γ und s² sind exakt.',
      hint: 'Tippe ins Diagramm, um ein Ereignis zu setzen (bis zu 4), zieh es herum. Doppeltipp löscht es. Weiß: Koordinaten in S, rosa: in S′.',
      what: `<p>Senkrecht ist $ct$, waagrecht $x$. Licht läuft unter 45° (gold) – in <b>jedem</b> System. Das System $S'$ bewegt sich mit $\\beta=v/c$: Seine $ct'$-Achse ist die Weltlinie seines Ursprungs ($x=\\beta\\,ct$), seine $x'$-Achse ist die Linie $ct=\\beta x$ – beide klappen zur Lichtlinie hin.</p>
<p>Lorentz-Transformation: $x'=\\gamma(x-\\beta\\,ct)$, $ct'=\\gamma(ct-\\beta x)$ mit $\\gamma=1/\\sqrt{1-\\beta^2}$. Linien gleicher Zeit in $S'$ sind parallel zur $x'$-Achse: Was in $S$ gleichzeitig ist, ist es in $S'$ nicht (<b>Relativität der Gleichzeitigkeit</b>).</p>
<p>Die gestrichelten Hyperbeln $(ct)^2-x^2=\\pm1$ eichen die Einheiten: Der erste Tick der bewegten Uhr liegt auf der Hyperbel, also bei $ct=\\gamma$ – <b>Zeitdilatation</b>. Das Intervall $s^2=(ct)^2-x^2$ ist in beiden Systemen gleich.</p>`,
      tasks: [
        'Setz zwei Ereignisse mit gleichem ct (gleichzeitig in S). Stell β ≠ 0 ein: Sind sie in S′ noch gleichzeitig?',
        'Zeitdilatation: Stell β = 0,6 ein. Bei welchem ct liegt der Tick ct′ = 1 der bewegten Uhr? (γ = 1,25)',
        'Raumartig: Setz ein Ereignis außerhalb des Lichtkegels und finde ein β, bei dem sich das Vorzeichen seiner Zeit umkehrt.',
        'Invarianz: Wähle ein Ereignis und ändere β deutlich. Was passiert mit s²?',
      ],
    },
    ru: {
      limits: 'Одно пространственное измерение, c = 1, движение только вдоль x (стандартная конфигурация, общее начало). Координаты, γ и s² точные.',
      hint: 'Коснись диаграммы, чтобы поставить событие (до 4), тяни его. Двойное касание удаляет. Белое – координаты в S, розовое – в S′.',
      what: `<p>По вертикали $ct$, по горизонтали $x$. Свет идёт под 45° (золотой) – в <b>любой</b> системе. Система $S'$ движется со скоростью $\\beta=v/c$: её ось $ct'$ – мировая линия её начала ($x=\\beta\\,ct$), ось $x'$ – линия $ct=\\beta x$; обе наклоняются к световой линии.</p>
<p>Преобразование Лоренца: $x'=\\gamma(x-\\beta\\,ct)$, $ct'=\\gamma(ct-\\beta x)$, где $\\gamma=1/\\sqrt{1-\\beta^2}$. Линии одного времени в $S'$ параллельны оси $x'$: одновременное в $S$ не одновременно в $S'$ (<b>относительность одновременности</b>).</p>
<p>Пунктирные гиперболы $(ct)^2-x^2=\\pm1$ задают масштаб: первый тик движущихся часов лежит на гиперболе, то есть при $ct=\\gamma$ – <b>замедление времени</b>. Интервал $s^2=(ct)^2-x^2$ одинаков в обеих системах.</p>`,
      tasks: [
        'Поставь два события с одинаковым ct (одновременных в S). Задай β ≠ 0: одновременны ли они в S′?',
        'Замедление времени: поставь β = 0,6. При каком ct лежит тик ct′ = 1 движущихся часов? (γ = 1,25)',
        'Пространственноподобное: поставь событие вне светового конуса и найди β, при котором знак его времени меняется.',
        'Инвариантность: выбери событие и сильно поменяй β. Что происходит с s²?',
      ],
    },
  },
  controls: [
    { k: 'b', type: 'range', min: -.9, max: .9, step: .01, val: .4, label: { de: 'β = v/c', ru: 'β = v/c' }, fmt: v => v.toFixed(2) },
    { k: 'grid', type: 'toggle', val: true, label: { de: 'Gitter von S′', ru: 'Сетка S′' } },
    { k: 'hyp', type: 'toggle', val: true, label: { de: 'Eichhyperbeln', ru: 'Гиперболы' } },
    { k: 'clear', type: 'button', label: { de: 'Ereignisse löschen', ru: 'Убрать события' } },
  ],
  setup(api) {
    const { ctx, draw } = api, L = api.lang === 'ru';
    let E = [{ x: 1.2, t: 1.2 }, { x: -1, t: 1.2 }], sel = 0, drag = null, betas = [];
    const u = () => Math.min(api.W, api.H) / 7.2;
    const P = (x, t) => [api.W / 2 + x * u(), api.H / 2 - t * u()];
    const Wd = (px, py) => [(px - api.W / 2) / u(), -(py - api.H / 2) / u()];
    const gam = () => 1 / Math.sqrt(1 - api.v.b * api.v.b);
    const lor = e => { const b = api.v.b, g = gam(); return { x: g * (e.x - b * e.t), t: g * (e.t - b * e.x) }; };
    function hud() {
      const b = api.v.b, g = gam(), lines = [`β = <span class="g">${b.toFixed(2)}</span> · γ = <span class="g">${g.toFixed(3)}</span>`];
      const e = E[sel];
      if (e) {
        const p = lor(e), s2 = e.t * e.t - e.x * e.x;
        lines.push(`S: (x, ct) = (${e.x.toFixed(2)}, ${e.t.toFixed(2)})`);
        lines.push(`<span style="color:#ff9fb6">S′: (x′, ct′) = (${p.x.toFixed(2)}, ${p.t.toFixed(2)})</span>`);
        lines.push(`s² = <span class="g">${s2.toFixed(3)}</span> <span class="k">${s2 > 1e-3 ? (L ? 'времениподобный' : 'zeitartig') : s2 < -1e-3 ? (L ? 'пространственноподобный' : 'raumartig') : (L ? 'световой' : 'lichtartig')}</span>`);
      }
      api.hud(lines.join('<br>'));
    }
    function checks(k) {
      const b = api.v.b;
      for (let i = 0; i < E.length; i++) for (let j = i + 1; j < E.length; j++)
        if (Math.abs(E[i].t - E[j].t) < .06 && Math.abs(E[i].x - E[j].x) > .3 && Math.abs(b) > .2) api.check(0);
      if (Math.abs(b - .6) < .015) api.check(1);
      for (const e of E) if (e.x * e.x > e.t * e.t + .05 && Math.abs(e.t) > .1 && Math.sign(lor(e).t) !== Math.sign(e.t)) api.check(2);
      if (k === 'b' && E[sel]) { betas.push(b); if (Math.max(...betas) - Math.min(...betas) > .5) api.check(3); }
    }
    hud();
    return {
      probe: { lor, gam },
      change(k) { hud(); checks(k); },
      action(k) { if (k === 'clear') { E = []; sel = -1; betas = []; hud(); } },
      down(px, py) {
        const [x, t] = Wd(px, py);
        const i = E.findIndex(e => Math.hypot(e.x - x, e.t - t) * u() < 18);
        if (i >= 0) { sel = i; drag = i; }
        else { if (E.length >= 4) E.shift(); E.push({ x, t }); sel = drag = E.length - 1; betas = []; }
        hud();
      },
      move(px, py, isDown) {
        if (!isDown || drag === null || !E[drag]) return;
        let [x, t] = Wd(px, py);
        // a gentle snap onto the same time as another event, so "simultaneous in S" is easy to set
        for (const o of E) if (o !== E[drag] && Math.abs(o.t - t) * u() < 7) t = o.t;
        E[drag] = { x, t }; hud();
      },
      up() { drag = null; checks(); },
      dbl(px, py) {
        const [x, t] = Wd(px, py);
        const i = E.findIndex(e => Math.hypot(e.x - x, e.t - t) * u() < 18);
        if (i >= 0) { E.splice(i, 1); sel = E.length - 1; drag = null; hud(); }
      },
      frame() {
        const W = api.W, H = api.H, b = api.v.b, g = gam(), U = u(), R = 6;
        ctx.fillStyle = '#070616'; ctx.fillRect(0, 0, W, H);
        const line = (x0, t0, x1, t1) => { const [a, c] = P(x0, t0), [d, e] = P(x1, t1); ctx.beginPath(); ctx.moveTo(a, c); ctx.lineTo(d, e); ctx.stroke(); };
        // light cone, softly filled (future and past)
        ctx.fillStyle = 'rgba(244,200,106,.05)';
        for (const s of [1, -1]) { const [a, c] = P(0, 0), [d, e] = P(-R, s * R), [f, h] = P(R, s * R); ctx.beginPath(); ctx.moveTo(a, c); ctx.lineTo(d, e); ctx.lineTo(f, h); ctx.closePath(); ctx.fill(); }
        // calibration hyperbolas
        if (api.v.hyp) {
          ctx.strokeStyle = 'rgba(255,255,255,.22)'; ctx.setLineDash([3, 5]); ctx.lineWidth = 1;
          for (const k of [1, 2, 3]) for (const s of [1, -1]) {
            ctx.beginPath(); for (let i = -60; i <= 60; i++) { const a = i / 20, [x, y] = P(k * Math.sinh(a), s * k * Math.cosh(a)); i === -60 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); } ctx.stroke();
            ctx.beginPath(); for (let i = -60; i <= 60; i++) { const a = i / 20, [x, y] = P(s * k * Math.cosh(a), k * Math.sinh(a)); i === -60 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); } ctx.stroke();
          }
          ctx.setLineDash([]);
        }
        // grid of S (faint) and of S′ (rose)
        ctx.strokeStyle = 'rgba(255,255,255,.07)'; ctx.lineWidth = 1;
        for (let k = -R; k <= R; k++) { line(k, -R, k, R); line(-R, k, R, k); }
        if (api.v.grid) {
          ctx.strokeStyle = 'rgba(255,127,159,.2)';
          for (let k = -8; k <= 8; k++) {
            line(k / g + b * -R, -R, k / g + b * R, R);   // x′ = k  →  x = k/γ + β ct
            line(-R, k / g + b * -R, R, k / g + b * R);   // ct′ = k → ct = k/γ + β x
          }
        }
        // axes
        ctx.strokeStyle = 'rgba(255,255,255,.75)'; ctx.lineWidth = 1.6; line(-R, 0, R, 0); line(0, -R, 0, R);
        ctx.strokeStyle = '#ff7f9f'; ctx.lineWidth = 2; line(-R * b, -R, R * b, R); line(-R, -R * b, R, R * b);
        ctx.strokeStyle = 'rgba(244,200,106,.95)'; ctx.lineWidth = 1.6; line(-R, -R, R, R); line(-R, R, R, -R);
        const lab = (s, x, t, c) => { const [a, d] = P(x, t); draw.text(ctx, s, a, d, c, 13, 'center', 700); };
        lab('x', 3.3, -.22, 'rgba(255,255,255,.85)'); lab('ct', .3, 3.3, 'rgba(255,255,255,.85)');
        lab('x′', 3.2, 3.2 * b + .25, '#ff9fb6'); lab('ct′', 3.2 * b + .3, 3.2, '#ff9fb6');
        // ticks of the moving clock (ct′ = 1, 2, 3) on the ct′ axis
        for (let k = 1; k <= 3; k++) {
          const [x, y] = P(b * g * k, g * k);
          ctx.fillStyle = '#ff7f9f'; ctx.beginPath(); ctx.arc(x, y, 4, 0, 7); ctx.fill();
          draw.text(ctx, `ct′=${k}`, x + 8, y, '#ff9fb6', 10);
        }
        // events with their coordinates in S (white) and S′ (rose)
        E.forEach((e, i) => {
          const [ex, ey] = P(e.x, e.t), p = lor(e);
          ctx.setLineDash([3, 4]); ctx.lineWidth = 1;
          ctx.strokeStyle = 'rgba(255,255,255,.55)'; line(e.x, e.t, e.x, 0); line(e.x, e.t, 0, e.t);
          ctx.strokeStyle = 'rgba(255,127,159,.75)';
          line(e.x, e.t, g * p.x, g * b * p.x);   // to the x′ axis: the point (γ x′, γ β x′)
          line(e.x, e.t, g * b * p.t, g * p.t);   // to the ct′ axis: the point (γ β ct′, γ ct′)
          ctx.setLineDash([]);
          draw.glowDot(ctx, ex, ey, 5, i === sel ? 'rgba(255,227,166,1)' : 'rgba(200,195,240,1)', 3);
          ctx.fillStyle = i === sel ? '#ffe3a6' : '#e6e1ff'; ctx.beginPath(); ctx.arc(ex, ey, 6, 0, 7); ctx.fill();
          draw.text(ctx, String.fromCharCode(65 + i), ex + 9, ey - 10, '#fff', 12, 'left', 700);
        });
        // lines of equal time in S′ through the selected event (simultaneity)
        if (E[sel]) {
          const p = lor(E[sel]);
          ctx.strokeStyle = 'rgba(255,127,159,.55)'; ctx.setLineDash([8, 6]); ctx.lineWidth = 1.2;
          line(-R, p.t / g + b * -R, R, p.t / g + b * R); ctx.setLineDash([]);
        }
      },
    };
  },
});
