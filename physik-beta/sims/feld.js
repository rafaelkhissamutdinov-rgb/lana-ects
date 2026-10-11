// Feldlinien & Gauß: point charges in a plane (Coulomb field ∝ 1/r²)
SIMS.def('feld', {
  aspect: w => w < 520 ? .95 : .62,
  text: {
    de: {
      limits: 'Punktladungen im Raum (Feld ∝ 1/r²), gezeichnet ist ein ebener Schnitt. Wie dicht die Linien liegen, ist deshalb nur ein qualitatives Maß für |E|. Exakt sind die Richtung von E, das Potential, die Werte der Sonde und die Nullstellen des Feldes. Einheiten: 1/(4πε₀) = 1, Längen beliebig.',
      hint: 'Ladungen ziehen · leere Stelle antippen = Messsonde · Doppeltipp auf eine Ladung entfernt sie.',
      what: `<p><b>Goldene Linien</b> sind Feldlinien: Sie starten bei positiven und enden bei negativen Ladungen. Die kleinen Lichtpunkte wandern in Richtung von $\\vec E$. Wo Linien dicht liegen, ist das Feld stark.</p>
<p><b>Farbe im Hintergrund</b> ist das Potential $\\varphi=\\sum_i \\frac{q_i}{4\\pi\\varepsilon_0 r_i}$ (rosa: positiv, blau: negativ), die feinen weißen Kurven sind Äquipotentiallinien. Feldlinien schneiden sie immer senkrecht, denn $\\vec E=-\\nabla\\varphi$.</p>
<p><b>Gauß-Fläche</b>: Denk dir den Kreis als Kugel im Raum. Der Fluss hängt nur von der eingeschlossenen Ladung ab: $\\Phi=q_{\\text{innen}}/\\varepsilon_0$. Der Rand ist grün, wo das Feld hinausgeht, und orange, wo es hineingeht.</p>`,
      tasks: [
        'Zwei gleiche Ladungen: Finde mit der Sonde den Punkt, an dem das Feld genau verschwindet.',
        'Dipol: Schließe mit der Gauß-Fläche nur <b>eine</b> der beiden Ladungen ein.',
        'Falle-Karte: Lass eine Ladung innen und schieb eine andere von außen ganz nah an die Fläche. Der Fluss bleibt gleich – aber ist das Feld auf der Fläche überall gleich groß?',
        'Plattenkondensator: Miss mit der Sonde das Feld zwischen den Platten an zwei verschiedenen Stellen.',
      ],
    },
    ru: {
      limits: 'Точечные заряды в пространстве (поле ∝ 1/r²), нарисован плоский срез. Поэтому густота линий – лишь качественная мера |E|. Точны направление E, потенциал, показания зонда и нули поля. Единицы: 1/(4πε₀) = 1, длины условные.',
      hint: 'Тяни заряды · касание пустого места = зонд · двойное касание заряда убирает его.',
      what: `<p><b>Золотые линии</b> – силовые линии: начинаются на положительных зарядах и кончаются на отрицательных. Светящиеся точки бегут по направлению $\\vec E$. Где линии гуще, поле сильнее.</p>
<p><b>Цвет фона</b> – потенциал $\\varphi=\\sum_i \\frac{q_i}{4\\pi\\varepsilon_0 r_i}$ (розовый: плюс, синий: минус), тонкие белые кривые – эквипотенциали. Силовые линии всегда пересекают их под прямым углом, ведь $\\vec E=-\\nabla\\varphi$.</p>
<p><b>Поверхность Гаусса</b>: представь круг сферой в пространстве. Поток зависит только от заряда внутри: $\\Phi=q_{\\text{внутр}}/\\varepsilon_0$. Край зелёный там, где поле выходит, и оранжевый, где входит.</p>`,
      tasks: [
        'Два одинаковых заряда: найди зондом точку, где поле ровно ноль.',
        'Диполь: охвати поверхностью Гаусса только <b>один</b> из двух зарядов.',
        'Карточка-ловушка: оставь один заряд внутри и придвинь другой снаружи вплотную к поверхности. Поток тот же – а поле на поверхности везде одинаковое?',
        'Плоский конденсатор: измерь зондом поле между пластинами в двух разных местах.',
      ],
    },
  },
  controls: [
    { k: 'preset', type: 'seg', val: 'dipol', label: { de: 'Aufbau', ru: 'Набор' }, opts: [
      { v: 'dipol', label: { de: 'Dipol', ru: 'Диполь' } }, { v: 'gleich', label: { de: 'Gleiche', ru: 'Одинаковые' } },
      { v: 'quad', label: { de: 'Quadrupol', ru: 'Квадруполь' } }, { v: 'platte', label: { de: 'Kondensator', ru: 'Конденсатор' } }] },
    { k: 'R', type: 'range', min: .15, max: .9, step: .01, val: .38, label: { de: 'Radius der Fläche', ru: 'Радиус поверхности' }, fmt: v => v.toFixed(2) },
    { k: 'gauss', type: 'toggle', val: false, label: { de: 'Gauß-Fläche', ru: 'Поверхность Гаусса' } },
    { k: 'equi', type: 'toggle', val: true, label: { de: 'Äquipotentiallinien', ru: 'Эквипотенциали' } },
    { k: 'flow', type: 'toggle', val: true, label: { de: 'Fluss zeigen', ru: 'Показывать поток' } },
    { k: 'addp', type: 'button', label: { de: '+ Ladung', ru: '+ заряд' } },
    { k: 'addn', type: 'button', label: { de: '− Ladung', ru: '− заряд' } },
  ],
  setup(api) {
    const { ctx, draw } = api, L = api.lang === 'ru';
    let Q = [], probe = null, gc = { x: -.3, y: 0 }, drag = null, lines = [], heatDirty = true, linesDirty = true, probeHits = [];
    const unit = () => Math.min(api.W, api.H) / 2.5;
    const toPx = (x, y) => [api.W / 2 + x * unit(), api.H / 2 + y * unit()];
    const toU = (px, py) => [(px - api.W / 2) / unit(), (py - api.H / 2) / unit()];
    const PRESETS = {
      dipol: [[-.45, 0, 1], [.45, 0, -1]],
      gleich: [[-.45, 0, 1], [.45, 0, 1]],
      quad: [[-.4, -.4, 1], [.4, -.4, -1], [.4, .4, 1], [-.4, .4, -1]],
      platte: [...Array(7)].flatMap((_, i) => [[-.35, -.6 + i * .2, 1], [.35, -.6 + i * .2, -1]]),
    };
    function preset(name) {
      Q = PRESETS[name].map(([x, y, q]) => ({ x, y, q }));
      probe = null; probeHits = [];
      gc = name === 'platte' ? { x: -.35, y: 0 } : { x: Q[0].x, y: Q[0].y };
      heatDirty = linesDirty = true;
    }
    function field(x, y) {
      let ex = 0, ey = 0, phi = 0;
      for (const c of Q) {
        const dx = x - c.x, dy = y - c.y, r2 = dx * dx + dy * dy + 1e-6, r = Math.sqrt(r2);
        ex += c.q * dx / (r2 * r); ey += c.q * dy / (r2 * r); phi += c.q / r;
      }
      return [ex, ey, phi];
    }
    // ----- field lines (traced in world units, midpoint method, step shrinks near charges) -----
    function trace(x, y, dir, startQ) {
      const pts = [[x, y]];
      for (let i = 0; i < 700; i++) {
        let dmin = 9;
        for (const c of Q) {
          const d = Math.hypot(x - c.x, y - c.y);
          if (d < dmin) dmin = d;
          if (c !== startQ && d < .045) {
            if (Math.sign(c.q) === -dir) { pts.push([c.x, c.y]); return { pts, end: c }; }
            return { pts, end: null };
          }
        }
        const h = Math.max(.006, Math.min(.05, dmin * .25));
        let [ex, ey] = field(x, y), m = Math.hypot(ex, ey) || 1;
        const mx = x + dir * ex / m * h / 2, my = y + dir * ey / m * h / 2;
        [ex, ey] = field(mx, my); m = Math.hypot(ex, ey) || 1;
        x += dir * ex / m * h; y += dir * ey / m * h;
        pts.push([x, y]);
        if (Math.abs(x) > 4 || Math.abs(y) > 4) break;
      }
      return { pts, end: null };
    }
    function computeLines() {
      lines = [];
      const per = Q.length > 8 ? 5 : 12;
      for (const c of Q.filter(c => c.q > 0)) {
        const n = Math.round(per * Math.abs(c.q));
        for (let k = 0; k < n; k++) {
          const a = (k + .5) / n * Math.PI * 2;
          lines.push(trace(c.x + Math.cos(a) * .05, c.y + Math.sin(a) * .05, 1, c).pts);
        }
      }
      for (const c of Q.filter(c => c.q < 0)) {   // lines that come from far away and end on a negative charge
        const n = Math.round(per * Math.abs(c.q));
        for (let k = 0; k < n; k++) {
          const a = (k + .5) / n * Math.PI * 2;
          const r = trace(c.x + Math.cos(a) * .05, c.y + Math.sin(a) * .05, -1, c);
          if (!r.end) lines.push(r.pts.reverse());
        }
      }
      linesDirty = false;
    }
    // ----- potential map + equipotential lines (marching squares) -----
    const heatCv = document.createElement('canvas'), hctx = heatCv.getContext('2d');
    let grid = null, gw = 0, gh = 0, step = 5;
    function computeHeat() {
      step = api.W > 600 ? 6 : 5;
      gw = Math.ceil(api.W / step) + 1; gh = Math.ceil(api.H / step) + 1;
      heatCv.width = gw; heatCv.height = gh;
      const img = hctx.createImageData(gw, gh);
      grid = new Float32Array(gw * gh);
      for (let j = 0; j < gh; j++) for (let i = 0; i < gw; i++) {
        const [x, y] = toU(i * step, j * step), phi = field(x, y)[2];
        grid[j * gw + i] = phi;
        const s = 1 - Math.exp(-Math.abs(phi) * .35), o = (j * gw + i) * 4;
        const [r, g, b] = phi > 0 ? [255, 120, 160] : [110, 180, 255];
        img.data[o] = r; img.data[o + 1] = g; img.data[o + 2] = b; img.data[o + 3] = 150 * s;
      }
      hctx.putImageData(img, 0, 0);
      heatDirty = false;
    }
    const LEVELS = [.6, 1.2, 2, 3, 4.5, 7].flatMap(v => [v, -v]);
    function drawEqui() {
      ctx.strokeStyle = 'rgba(255,255,255,.2)'; ctx.lineWidth = 1;
      ctx.beginPath();
      for (const lv of LEVELS) for (let j = 0; j < gh - 1; j++) for (let i = 0; i < gw - 1; i++) {
        const a = grid[j * gw + i] - lv, b = grid[j * gw + i + 1] - lv, c = grid[(j + 1) * gw + i + 1] - lv, d = grid[(j + 1) * gw + i] - lv;
        const pts = [];
        if ((a > 0) !== (b > 0)) pts.push([i + a / (a - b), j]);
        if ((b > 0) !== (c > 0)) pts.push([i + 1, j + b / (b - c)]);
        if ((d > 0) !== (c > 0)) pts.push([i + d / (d - c), j + 1]);
        if ((a > 0) !== (d > 0)) pts.push([i, j + a / (a - d)]);
        if (pts.length >= 2) { ctx.moveTo(pts[0][0] * step, pts[0][1] * step); ctx.lineTo(pts[1][0] * step, pts[1][1] * step); }
        if (pts.length === 4) { ctx.moveTo(pts[2][0] * step, pts[2][1] * step); ctx.lineTo(pts[3][0] * step, pts[3][1] * step); }
      }
      ctx.stroke();
    }
    // ----- Gauss surface -----
    function gaussInfo() {
      const R = api.v.R;
      const inside = Q.filter(c => Math.hypot(c.x - gc.x, c.y - gc.y) < R);
      const qin = inside.reduce((s, c) => s + c.q, 0);
      let emin = Infinity, emax = 0;
      const seg = [];
      for (let k = 0; k < 96; k++) {
        const a = k / 96 * Math.PI * 2, x = gc.x + Math.cos(a) * R, y = gc.y + Math.sin(a) * R;
        const [ex, ey] = field(x, y), e = Math.hypot(ex, ey);
        emin = Math.min(emin, e); emax = Math.max(emax, e);
        seg.push(ex * Math.cos(a) + ey * Math.sin(a));
      }
      return { inside, qin, emin, emax, seg };
    }
    // ----- zero of the field near a point (Newton on E = 0) -----
    function findNull(x, y) {
      for (let it = 0; it < 30; it++) {
        const [ex, ey] = field(x, y), h = 1e-4;
        const [exx, eyx] = field(x + h, y), [exy, eyy] = field(x, y + h);
        const a = (exx - ex) / h, b = (exy - ex) / h, c = (eyx - ey) / h, d = (eyy - ey) / h, det = a * d - b * c;
        if (!det) return null;
        const dx = (d * ex - b * ey) / det, dy = (-c * ex + a * ey) / det;
        x -= dx; y -= dy;
        if (Math.hypot(dx, dy) < 1e-7) break;
      }
      const [ex, ey] = field(x, y);
      return Math.hypot(ex, ey) < 1e-4 ? [x, y] : null;
    }
    preset('dipol');
    function hud() {
      const parts = [];
      if (probe) {
        const [ex, ey, phi] = field(probe.x, probe.y);
        parts.push(`<span class="k">${L ? 'Зонд' : 'Sonde'}:</span> |E| = <span class="g">${Math.hypot(ex, ey).toFixed(2)}</span> · φ = ${phi.toFixed(2)}`);
      }
      if (api.v.gauss) {
        const g = gaussInfo();
        parts.push(`<span class="k">q<sub>${L ? 'внутр' : 'innen'}</sub></span> = <span class="g">${g.qin > 0 ? '+' : ''}${g.qin}</span> → Φ = ${g.qin}·q/ε₀`);
        parts.push(`<span class="k">|E| ${L ? 'на поверхности' : 'auf der Fläche'}:</span> ${g.emin.toFixed(2)} … ${g.emax.toFixed(2)}`);
      }
      api.hud(parts.join('<br>') || '');
    }
    function checks() {
      if (api.v.gauss) {
        const g = gaussInfo(), outside = Q.filter(c => !g.inside.includes(c));
        if (Q.length === 2 && g.inside.length === 1 && outside.some(c => Math.sign(c.q) === -Math.sign(g.inside[0].q))) api.check(1);
        if (g.qin !== 0 && outside.some(c => Math.hypot(c.x - gc.x, c.y - gc.y) < api.v.R * 1.35) && g.emax / Math.max(g.emin, 1e-6) > 4) api.check(2);
      }
      if (probe && api.v.preset === 'platte' && Math.abs(probe.x) < .3 && Math.abs(probe.y) < .45) {
        const key = Math.round(probe.y * 4) + ':' + Math.round(probe.x * 4);
        if (!probeHits.includes(key)) probeHits.push(key);
        if (probeHits.length >= 2) api.check(3);
      }
    }
    const pathOf = pts => { ctx.beginPath(); pts.forEach(([x, y], i) => { const [px, py] = toPx(x, y); i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); }); };
    return {
      probe: { field, findNull, lines: () => lines, computeLines, set: arr => { Q = arr.map(([x, y, q]) => ({ x, y, q })); linesDirty = heatDirty = true; } },
      change(k) {
        if (k === 'preset') preset(api.v.preset);
        hud(); checks();
      },
      action(k) {
        if (Q.length >= 16) return;
        Q.push({ x: (Math.random() - .5) * .6, y: (Math.random() - .5) * .6, q: k === 'addp' ? 1 : -1 });
        heatDirty = linesDirty = true; hud();
      },
      resize() { heatDirty = true; },
      down(px, py) {
        const [x, y] = toU(px, py), u = unit();
        const c = Q.find(c => Math.hypot(c.x - x, c.y - y) * u < 22);
        if (c) { drag = { type: 'q', c }; return; }
        if (api.v.gauss) {
          const d = Math.hypot(gc.x - x, gc.y - y) * u;
          if (d < 18 || Math.abs(d - api.v.R * u) < 14) { drag = { type: 'g', dx: gc.x - x, dy: gc.y - y }; return; }
        }
        probe = { x, y }; drag = { type: 'p' }; hud();
      },
      move(px, py, isDown) {
        if (!isDown || !drag) return;
        const [x, y] = toU(px, py);
        const lim = (v, m) => Math.max(-m, Math.min(m, v));
        const mx = api.W / 2 / unit() - .05, my = api.H / 2 / unit() - .05;
        if (drag.type === 'q') { drag.c.x = lim(x, mx); drag.c.y = lim(y, my); heatDirty = linesDirty = true; }
        else if (drag.type === 'g') { gc.x = lim(x + drag.dx, mx); gc.y = lim(y + drag.dy, my); }
        else probe = { x, y };
        hud();
      },
      up() {
        if (drag && drag.type === 'p' && probe) {   // snap onto a zero of the field if one is very close
          const n = findNull(probe.x, probe.y);
          if (n && Math.hypot(n[0] - probe.x, n[1] - probe.y) * unit() < 24) {
            probe = { x: n[0], y: n[1] };
            api.toast(L ? 'Здесь E = 0' : 'Hier ist E = 0', 1800);
            api.check(0);
          }
        }
        drag = null; hud(); checks();
      },
      dbl(px, py) {
        const [x, y] = toU(px, py);
        const i = Q.findIndex(c => Math.hypot(c.x - x, c.y - y) * unit() < 22);
        if (i >= 0 && Q.length > 1) { Q.splice(i, 1); heatDirty = linesDirty = true; drag = null; }
      },
      frame(dt, t) {
        if (heatDirty) computeHeat();
        if (linesDirty) computeLines();
        const W = api.W, H = api.H;
        ctx.fillStyle = '#070616'; ctx.fillRect(0, 0, W, H);
        ctx.imageSmoothingEnabled = true;
        ctx.drawImage(heatCv, 0, 0, gw * step, gh * step);
        if (api.v.equi) drawEqui();
        ctx.lineWidth = 1.3; ctx.strokeStyle = 'rgba(244,200,106,.62)';
        for (const pts of lines) { pathOf(pts); ctx.stroke(); }
        if (api.v.flow) {   // light running along the lines in the direction of E
          ctx.save(); ctx.setLineDash([2, 16]); ctx.lineDashOffset = -t * 28; ctx.lineWidth = 2.4; ctx.lineCap = 'round';
          ctx.strokeStyle = 'rgba(255,245,215,.85)';
          for (const pts of lines) { pathOf(pts); ctx.stroke(); }
          ctx.restore();
        }
        if (api.v.gauss) {
          const g = gaussInfo(), [cx, cy] = toPx(gc.x, gc.y), R = api.v.R * unit();
          ctx.fillStyle = 'rgba(255,255,255,.05)'; ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.fill();
          ctx.lineWidth = 3;
          g.seg.forEach((en, k) => {
            ctx.strokeStyle = en > 1e-3 ? 'rgba(95,214,184,.95)' : en < -1e-3 ? 'rgba(255,173,97,.95)' : 'rgba(255,255,255,.4)';
            ctx.beginPath(); ctx.arc(cx, cy, R, k / 96 * Math.PI * 2, (k + 1.05) / 96 * Math.PI * 2); ctx.stroke();
          });
          ctx.fillStyle = 'rgba(255,255,255,.8)'; ctx.beginPath(); ctx.arc(cx, cy, 4, 0, Math.PI * 2); ctx.fill();
        }
        for (const c of Q) {
          const [px, py] = toPx(c.x, c.y), pos = c.q > 0;
          draw.glowDot(ctx, px, py, 9, pos ? 'rgba(255,127,159,1)' : 'rgba(130,198,255,1)', 2.6);
          ctx.fillStyle = pos ? '#ff8fae' : '#8fd0ff'; ctx.beginPath(); ctx.arc(px, py, 11, 0, Math.PI * 2); ctx.fill();
          ctx.strokeStyle = 'rgba(255,255,255,.9)'; ctx.lineWidth = 2;
          ctx.beginPath(); ctx.moveTo(px - 5, py); ctx.lineTo(px + 5, py); if (pos) { ctx.moveTo(px, py - 5); ctx.lineTo(px, py + 5); } ctx.stroke();
        }
        if (probe) {
          const [px, py] = toPx(probe.x, probe.y), [ex, ey] = field(probe.x, probe.y), m = Math.hypot(ex, ey);
          if (m > 1e-3) {
            const len = Math.min(70, 16 + 22 * Math.log1p(m));
            ctx.strokeStyle = ctx.fillStyle = '#fff';
            draw.arrow(ctx, px, py, px + ex / m * len, py + ey / m * len, 9, 2.2);
          }
          ctx.strokeStyle = 'rgba(255,227,166,.95)'; ctx.lineWidth = 1.5;
          ctx.beginPath(); ctx.arc(px, py, 7, 0, Math.PI * 2); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(px - 12, py); ctx.lineTo(px - 8, py); ctx.moveTo(px + 8, py); ctx.lineTo(px + 12, py);
          ctx.moveTo(px, py - 12); ctx.lineTo(px, py - 8); ctx.moveTo(px, py + 8); ctx.lineTo(px, py + 12); ctx.stroke();
        }
      },
    };
  },
});
