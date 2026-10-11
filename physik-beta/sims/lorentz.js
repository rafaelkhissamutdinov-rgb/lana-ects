// Teilchen im Magnetfeld: circular orbits from the Lorentz force F = q v × B
SIMS.def('lorentz', {
  aspect: w => w < 520 ? .95 : .6,
  drag: false,
  text: {
    de: {
      hint: 'Rechts ist ein homogenes Magnetfeld (⊙ zeigt aus dem Bildschirm heraus, ⊗ hinein). „Schießen“ schickt ein Teilchen hinein.',
      what: `<p>Die <b>Lorentzkraft</b> $\\vec F=q\\,\\vec v\\times\\vec B$ steht immer senkrecht zur Geschwindigkeit. Sie ändert nur die Richtung, nie den Betrag – das Teilchen läuft auf einem Kreis.</p>
<p>Aus $qvB=\\frac{mv^2}{r}$ folgt $r=\\frac{mv}{|q|B}$ und die Umlaufzeit $T=\\frac{2\\pi m}{|q|B}$. Die Umlaufzeit hängt <b>nicht</b> von $v$ ab (Zyklotron!).</p>
<p>Bei gleicher Geschwindigkeit entscheidet nur $q/m$: Deuteron und α-Teilchen haben dasselbe $q/m$ und landen deshalb an derselben Stelle. Das Vorzeichen von $q$ bestimmt die Drehrichtung.</p>`,
      tasks: [
        'Schieß ein positives und dann ein negatives Teilchen. In welche Richtung wird jedes abgelenkt?',
        'Verdopple die Geschwindigkeit (sonst alles gleich): Der Radius verdoppelt sich, die Umlaufzeit T bleibt gleich.',
        'Massenspektrometer: Schick alle Sorten gleichzeitig los. Welche zwei landen am selben Punkt – und warum?',
        'Kehre die Richtung von B um und schieß noch einmal.',
      ],
    },
    ru: {
      hint: 'Справа однородное магнитное поле (⊙ – из экрана, ⊗ – в экран). «Выстрел» запускает частицу.',
      what: `<p><b>Сила Лоренца</b> $\\vec F=q\\,\\vec v\\times\\vec B$ всегда перпендикулярна скорости. Она меняет только направление, а не модуль – частица движется по окружности.</p>
<p>Из $qvB=\\frac{mv^2}{r}$ следует $r=\\frac{mv}{|q|B}$ и период $T=\\frac{2\\pi m}{|q|B}$. Период <b>не</b> зависит от $v$ (циклотрон!).</p>
<p>При одинаковой скорости важно только $q/m$: у дейтрона и α-частицы оно одинаковое, поэтому они попадают в одну точку. Знак $q$ задаёт направление вращения.</p>`,
      tasks: [
        'Выстрели положительной, а потом отрицательной частицей. Куда отклоняется каждая?',
        'Удвой скорость (остальное то же): радиус удваивается, период T не меняется.',
        'Масс-спектрометр: запусти все частицы сразу. Какие две попадают в одну точку – и почему?',
        'Разверни поле B и выстрели ещё раз.',
      ],
    },
  },
  controls: [
    { k: 'sp', type: 'seg', val: 'p', label: { de: 'Teilchen', ru: 'Частица' }, opts: [
      { v: 'p', label: { de: 'Proton p⁺', ru: 'Протон p⁺' } }, { v: 'd', label: { de: 'Deuteron d⁺', ru: 'Дейтрон d⁺' } },
      { v: 'a', label: { de: 'α²⁺', ru: 'α²⁺' } }, { v: 'pb', label: { de: 'Antiproton p̄⁻', ru: 'Антипротон p̄⁻' } }] },
    { k: 'v', type: 'range', min: 1, max: 4, step: .1, val: 2, label: { de: 'Geschwindigkeit v', ru: 'Скорость v' }, fmt: v => v.toFixed(1) },
    { k: 'B', type: 'range', min: .3, max: 1.5, step: .05, val: .8, label: { de: 'Feldstärke |B|', ru: 'Индукция |B|' }, fmt: v => v.toFixed(2) },
    { k: 'out', type: 'toggle', val: true, label: { de: 'B aus dem Bild (⊙)', ru: 'B из экрана (⊙)' } },
    { k: 'shoot', type: 'button', label: { de: 'Schießen', ru: 'Выстрел' } },
    { k: 'spec', type: 'button', label: { de: 'Alle Sorten', ru: 'Все сразу' } },
    { k: 'clear', type: 'button', label: { de: 'Leeren', ru: 'Очистить' } },
  ],
  setup(api) {
    const { ctx, draw } = api, L = api.lang === 'ru';
    const SPECIES = { p: { q: 1, m: 1, name: 'p⁺', col: '255,214,140' }, d: { q: 1, m: 2, name: 'd⁺', col: '95,214,184' },
                      a: { q: 2, m: 4, name: 'α²⁺', col: '255,127,159' }, he3: { q: 2, m: 3, name: '³He²⁺', col: '162,148,255' },
                      pb: { q: -1, m: 1, name: 'p̄⁻', col: '130,198,255' } };
    const SCALE = 26;   // px per unit of m v / (q B)
    let parts = [], shots = [];
    const fieldX = () => api.W * .3;
    function launch(key, vOver) {
      const s = SPECIES[key], v = vOver || api.v.v, Bz = (api.v.out ? 1 : -1) * api.v.B;
      parts.push({ s, key, x: 0, y: api.H * .5, vx: v, vy: 0, v, Bz, trail: [], age: 0, hit: null,
                   r: s.m * v / (Math.abs(s.q) * api.v.B) * SCALE, T: 2 * Math.PI * s.m / (Math.abs(s.q) * api.v.B) });
      if (parts.length > 12) parts.shift();
    }
    function hud() {
      const s = SPECIES[api.v.sp], r = s.m * api.v.v / (Math.abs(s.q) * api.v.B), T = 2 * Math.PI * s.m / (Math.abs(s.q) * api.v.B);
      api.hud(`${s.name}: q = ${s.q > 0 ? '+' : ''}${s.q}e · m = ${s.m} u<br>r = mv/(|q|B) = <span class="g">${r.toFixed(2)}</span> · T = 2πm/(|q|B) = <span class="g">${T.toFixed(2)}</span>`);
    }
    hud();
    function checks() {
      const last = shots[shots.length - 1], prev = shots[shots.length - 2];
      if (shots.some(s => s.q > 0) && shots.some(s => s.q < 0)) api.check(0);
      if (last && prev && last.q === prev.q && last.m === prev.m && last.B === prev.B && Math.abs(last.v / prev.v - 2) < .06) api.check(1);
      if (shots.some(s => s.dir > 0) && shots.some(s => s.dir < 0)) api.check(3);
    }
    return {
      change() { hud(); },
      action(k) {
        if (k === 'clear') { parts = []; return; }
        if (k === 'spec') {   // one speed for all, small enough that every orbit fits onto the detector
          const v = Math.min(api.v.v, api.H * .44 * api.v.B / (4 * SCALE));
          ['p', 'he3', 'd', 'a'].forEach(key => launch(key, v));
          api.toast(L ? `Все с одной скоростью v = ${v.toFixed(2)}` : `Alle mit derselben Geschwindigkeit v = ${v.toFixed(2)}`, 2600);
          api.check(2); return;
        }
        const s = SPECIES[api.v.sp];
        launch(api.v.sp);
        shots.push({ q: s.q, m: s.m, v: api.v.v, B: api.v.B, dir: api.v.out ? 1 : -1 });
        checks();
      },
      frame(dt) {
        const W = api.W, H = api.H, fx = fieldX(), out = api.v.out;
        ctx.fillStyle = '#070616'; ctx.fillRect(0, 0, W, H);
        // field region
        const g = ctx.createLinearGradient(fx, 0, W, 0);
        g.addColorStop(0, 'rgba(130,198,255,.1)'); g.addColorStop(1, 'rgba(130,198,255,.04)');
        ctx.fillStyle = g; ctx.fillRect(fx, 0, W - fx, H);
        ctx.strokeStyle = 'rgba(130,198,255,.35)'; ctx.setLineDash([5, 6]);
        ctx.beginPath(); ctx.moveTo(fx, 0); ctx.lineTo(fx, H); ctx.stroke(); ctx.setLineDash([]);
        const gs = 34;
        for (let x = fx + gs / 2; x < W; x += gs) for (let y = gs / 2; y < H; y += gs) {
          ctx.strokeStyle = ctx.fillStyle = 'rgba(130,198,255,.32)'; ctx.lineWidth = 1;
          ctx.beginPath(); ctx.arc(x, y, 5, 0, Math.PI * 2); ctx.stroke();
          if (out) { ctx.beginPath(); ctx.arc(x, y, 1.6, 0, Math.PI * 2); ctx.fill(); }
          else { ctx.beginPath(); ctx.moveTo(x - 3.5, y - 3.5); ctx.lineTo(x + 3.5, y + 3.5); ctx.moveTo(x + 3.5, y - 3.5); ctx.lineTo(x - 3.5, y + 3.5); ctx.stroke(); }
        }
        draw.text(ctx, 'B ' + (out ? '⊙' : '⊗'), W - 44, 16, 'rgba(130,198,255,.9)', 13);
        // source
        ctx.fillStyle = '#2a2560'; ctx.fillRect(0, H * .5 - 9, 18, 18);
        // detector along the field edge
        ctx.fillStyle = 'rgba(255,255,255,.08)'; ctx.fillRect(fx - 4, 0, 4, H);
        // particles: exact rotation of v in the field (y axis of the screen points down)
        const sub = 6;
        for (const p of parts) {
          for (let k = 0; k < sub; k++) {
            const h = dt * 60 / sub;
            if (p.x >= fx && !p.hit) {
              const w = -p.s.q * p.Bz / p.s.m * h / SCALE;   // physics y up: clockwise for q>0, B out of page
              const c = Math.cos(w), sn = Math.sin(w), vx = p.vx, vy = -p.vy;
              const nvx = vx * c - vy * sn, nvy = vx * sn + vy * c;
              p.vx = nvx; p.vy = -nvy;
            }
            p.x += p.vx * h; p.y += p.vy * h;
            if (p.x < fx && p.vx < 0 && !p.hit) p.hit = p.y;
          }
          p.trail.push([p.x, p.y]); if (p.trail.length > 600) p.trail.shift();
        }
        for (const p of parts) {
          ctx.strokeStyle = `rgba(${p.s.col},.75)`; ctx.lineWidth = 2; ctx.beginPath();
          p.trail.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.stroke();
          if (p.hit !== null) {   // stack the labels of particles that land on the same spot
            const same = parts.filter(o => o.hit !== null && Math.abs(o.hit - p.hit) < 6 && parts.indexOf(o) < parts.indexOf(p)).length;
            ctx.fillStyle = `rgba(${p.s.col},1)`; ctx.fillRect(fx - 12, p.hit - 1.5, 12, 3);
            draw.text(ctx, p.s.name, fx - 16 - same * 34, p.hit, `rgba(${p.s.col},1)`, 12, 'right');
          }
          if (p.x > -20 && p.x < W + 20 && p.y > -20 && p.y < H + 20) {
            draw.glowDot(ctx, p.x, p.y, 4, `rgba(${p.s.col},1)`, 3.5);
            ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(p.x, p.y, 3, 0, Math.PI * 2); ctx.fill();
          }
        }
        // v and F arrows on the newest particle while it is in the field
        const p = parts[parts.length - 1];
        if (p && p.x > fx && p.hit === null && p.x < W && p.y > 0 && p.y < H) {
          const m = Math.hypot(p.vx, p.vy) || 1, ux = p.vx / m, uy = p.vy / m;
          ctx.strokeStyle = ctx.fillStyle = 'rgba(255,255,255,.9)';
          draw.arrow(ctx, p.x, p.y, p.x + ux * 40, p.y + uy * 40, 8, 2);
          draw.text(ctx, 'v', p.x + ux * 48, p.y + uy * 48, '#fff', 13, 'center');
          // F = q v × B: rotate v by 90° (direction depends on q·Bz)
          const sgn = Math.sign(p.s.q * p.Bz), fx2 = -uy * sgn, fy2 = ux * sgn;   // screen coordinates: F ∝ qB·(−v_y, v_x)
          ctx.strokeStyle = ctx.fillStyle = '#ffad61';
          draw.arrow(ctx, p.x, p.y, p.x + fx2 * 34, p.y + fy2 * 34, 8, 2);
          draw.text(ctx, 'F', p.x + fx2 * 44, p.y + fy2 * 44, '#ffad61', 13, 'center');
        }
      },
    };
  },
});
