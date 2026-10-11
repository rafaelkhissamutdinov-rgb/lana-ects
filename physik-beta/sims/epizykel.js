// Fourier-Epizykel: a closed curve as a sum of rotating circles c_k e^{2πikt}; 1D waves and the Gibbs overshoot
SIMS.def('epizykel', {
  aspect: w => w < 520 ? 1 : .62,
  text: {
    de: {
      limits: 'Figuren werden mit der diskreten Fourier-Transformation aus 256 Punkten zerlegt – das ist die Fourier-Reihe der abgetasteten Kurve. Die Wellen benutzen die exakten Koeffizienten.',
      hint: 'Figur: Mit dem Finger eine geschlossene Linie ins Feld zeichnen (oder eine Vorlage wählen). Welle: Rechteck, Sägezahn oder Dreieck als Summe von Sinusschwingungen.',
      what: `<p>Eine geschlossene Kurve $z(t)$, $t\\in[0,1]$, ist eine periodische komplexe Funktion. Ihre Fourier-Reihe $z(t)=\\sum_k c_k\\,e^{2\\pi i k t}$ mit $c_k=\\int_0^1 z(t)\\,e^{-2\\pi i k t}dt$ ist eine Kette von Kreisen: Kreis $k$ hat Radius $|c_k|$ und dreht sich $k$-mal pro Umlauf.</p>
<p>Mit wenigen Kreisen bekommst du die groben Formen, Ecken brauchen viele hohe Frequenzen. Die $c_k$ sind die Koordinaten der Kurve in der Orthonormalbasis $\\{e^{2\\pi i k t}\\}$ von $L^2$.</p>
<p><b>Gibbs:</b> An einer Sprungstelle überschwingt jede Partialsumme um rund 9 % des Sprungs – egal wie viele Terme. Die Abweichung wird schmaler, aber nicht kleiner. Glatte Funktionen haben schneller fallende Koeffizienten (Dreieck $\\sim 1/k^2$, Rechteck $\\sim 1/k$).</p>`,
      tasks: [
        'Zeichne eine eigene Figur und lass sie von den Kreisen nachzeichnen.',
        'Stell die Zahl der Kreise auf 3 oder weniger. Was bleibt von der Figur übrig?',
        'Rechteckwelle: Geh auf 25 Terme oder mehr. Wird das Überschwingen an der Sprungstelle kleiner?',
        'Vergleiche Rechteck und Dreieck im Spektrum unten: Welche Koeffizienten fallen schneller ab?',
      ],
    },
    ru: {
      limits: 'Фигуры раскладываются дискретным преобразованием Фурье по 256 точкам – это ряд Фурье дискретизированной кривой. Для волн используются точные коэффициенты.',
      hint: 'Фигура: нарисуй пальцем замкнутую линию (или выбери шаблон). Волна: меандр, пила или треугольник как сумма синусоид.',
      what: `<p>Замкнутая кривая $z(t)$, $t\\in[0,1]$, – это периодическая комплексная функция. Её ряд Фурье $z(t)=\\sum_k c_k\\,e^{2\\pi i k t}$ с $c_k=\\int_0^1 z(t)\\,e^{-2\\pi i k t}dt$ – это цепочка кругов: круг $k$ имеет радиус $|c_k|$ и делает $k$ оборотов за период.</p>
<p>Несколько кругов дают общую форму, для углов нужны высокие частоты. Числа $c_k$ – координаты кривой в ортонормированном базисе $\\{e^{2\\pi i k t}\\}$ пространства $L^2$.</p>
<p><b>Гиббс:</b> у скачка каждая частичная сумма выбрасывает примерно на 9 % от величины скачка – сколько бы членов ни было. Выброс становится уже, но не ниже. У гладких функций коэффициенты убывают быстрее (треугольник $\\sim 1/k^2$, меандр $\\sim 1/k$).</p>`,
      tasks: [
        'Нарисуй свою фигуру, и пусть круги её повторят.',
        'Поставь 3 круга или меньше. Что остаётся от фигуры?',
        'Меандр: возьми 25 членов или больше. Уменьшается ли выброс у скачка?',
        'Сравни меандр и треугольник в спектре внизу: чьи коэффициенты убывают быстрее?',
      ],
    },
  },
  controls: [
    { k: 'mode', type: 'seg', val: 'herz', label: { de: 'Vorlage', ru: 'Шаблон' }, opts: [
      { v: 'herz', label: { de: 'Herz', ru: 'Сердце' } }, { v: 'stern', label: { de: 'Stern', ru: 'Звезда' } }, { v: 'quadrat', label: { de: 'Quadrat', ru: 'Квадрат' } },
      { v: 'rechteck', label: { de: 'Rechteckwelle', ru: 'Меандр' } }, { v: 'saege', label: { de: 'Sägezahn', ru: 'Пила' } }, { v: 'dreieck', label: { de: 'Dreieck', ru: 'Треугольник' } }] },
    { k: 'K', type: 'range', min: 1, max: 60, step: 1, val: 12, label: { de: 'Kreise / Terme', ru: 'Круги / члены' }, fmt: v => String(v) },
    { k: 'speed', type: 'range', min: .02, max: .3, step: .01, val: .1, label: { de: 'Tempo', ru: 'Скорость' }, fmt: v => v.toFixed(2) },
  ],
  setup(api) {
    const { ctx, draw } = api, L = api.lang === 'ru', N = 256, TAU = Math.PI * 2;
    let coef = [], phase = 0, trail = [], drawing = null, own = false, seen = {};
    const isWave = () => ['rechteck', 'saege', 'dreieck'].includes(api.v.mode);
    // ---------- shapes ----------
    function shape(name) {
      const pts = [];
      for (let i = 0; i < N; i++) {
        const t = i / N * TAU;
        if (name === 'herz') pts.push([16 * Math.pow(Math.sin(t), 3) / 17, -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) / 17]);
        else if (name === 'stern') {
          const k = Math.floor(i / N * 10), f = i / N * 10 - k;
          const r0 = k % 2 ? .42 : 1, r1 = k % 2 ? 1 : .42, a0 = k / 10 * TAU - Math.PI / 2, a1 = (k + 1) / 10 * TAU - Math.PI / 2;
          pts.push([r0 * Math.cos(a0) * (1 - f) + r1 * Math.cos(a1) * f, r0 * Math.sin(a0) * (1 - f) + r1 * Math.sin(a1) * f]);
        } else {   // square
          const s = i / N * 4, k = Math.floor(s), f = s - k, C = [[-1, -1], [1, -1], [1, 1], [-1, 1], [-1, -1]];
          pts.push([(C[k][0] * (1 - f) + C[k + 1][0] * f) * .8, (C[k][1] * (1 - f) + C[k + 1][1] * f) * .8]);
        }
      }
      return pts;
    }
    function resample(raw) {   // N points evenly spaced along the drawn path (closed)
      const P = raw.concat([raw[0]]), seg = [0];
      for (let i = 1; i < P.length; i++) seg.push(seg[i - 1] + Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1]));
      const total = seg[seg.length - 1], out = [];
      let j = 0;
      for (let i = 0; i < N; i++) {
        const s = i / N * total;
        while (seg[j + 1] < s) j++;
        const f = (s - seg[j]) / ((seg[j + 1] - seg[j]) || 1);
        out.push([P[j][0] + (P[j + 1][0] - P[j][0]) * f, P[j][1] + (P[j + 1][1] - P[j][1]) * f]);
      }
      return out;
    }
    function dft(pts) {
      const cs = [];
      for (let k = -N / 2 + 1; k < N / 2; k++) {
        let re = 0, im = 0;
        for (let n = 0; n < N; n++) { const a = -TAU * k * n / N; re += pts[n][0] * Math.cos(a) - pts[n][1] * Math.sin(a); im += pts[n][0] * Math.sin(a) + pts[n][1] * Math.cos(a); }
        cs.push({ k, re: re / N, im: im / N, r: Math.hypot(re, im) / N });
      }
      return cs;
    }
    // order 0, 1, −1, 2, −2, … so that "K circles" means the lowest frequencies
    const lowest = K => { const out = []; for (let j = 0; out.length < K && j < N / 2; j++) for (const k of j ? [j, -j] : [0]) { const c = coef.find(c => c.k === k); if (c && out.length < K) out.push(c); } return out; };
    // ---------- waves: sine series ----------
    function waveTerms(K) {
      const out = [], m = api.v.mode;
      for (let n = 1; out.length < K && n < 400; n++) {
        let b = 0;
        if (m === 'rechteck') b = n % 2 ? 4 / (Math.PI * n) : 0;
        else if (m === 'saege') b = 2 * (n % 2 ? 1 : -1) / (Math.PI * n);
        else b = n % 2 ? 8 / (Math.PI * Math.PI * n * n) * ((n - 1) / 2 % 2 ? -1 : 1) : 0;
        if (b) out.push({ n, b });
      }
      return out;
    }
    const waveTrue = t => { const m = api.v.mode, x = ((t % 1) + 1) % 1; if (m === 'rechteck') return x < .5 ? 1 : -1; if (m === 'saege') return x < .5 ? 2 * x : 2 * x - 2; return x < .25 ? 4 * x : x < .75 ? 2 - 4 * x : 4 * x - 4; };
    function setShape(pts) { coef = dft(pts); trail = []; phase = 0; }
    function load() { if (!isWave()) setShape(shape(api.v.mode)); trail = []; phase = 0; hud(); }
    function hud() {
      if (isWave()) {
        const T = waveTerms(api.v.K);
        let lines = [`${L ? 'членов' : 'Terme'}: <span class="g">${T.length}</span> · ${L ? 'наибольшая частота' : 'höchste Frequenz'} n = ${T.length ? T[T.length - 1].n : 0}`];
        if (api.v.mode === 'rechteck') {   // overshoot of the partial sum near the jump, in % of the jump height 2
          let mx = 0;
          for (let i = 1; i < 2000; i++) { const t = i / 2000 * .25, s = T.reduce((a, c) => a + c.b * Math.sin(TAU * c.n * t), 0); if (s > mx) mx = s; }
          lines.push(`${L ? 'выброс' : 'Überschwingen'}: <span class="g">${((mx - 1) / 2 * 100).toFixed(1)} %</span> ${L ? 'скачка' : 'des Sprungs'}`);
        }
        api.hud(lines.join('<br>'));
      } else api.hud(`${L ? 'кругов' : 'Kreise'}: <span class="g">${Math.min(api.v.K, coef.length)}</span>` + (own ? ` · ${L ? 'твоя фигура' : 'deine Figur'}` : ''));
    }
    function checks(k) {
      if (!isWave() && api.v.K <= 3 && k === 'K') api.check(1);
      if (api.v.mode === 'rechteck' && api.v.K >= 25) api.check(2);
      seen[api.v.mode] = true;
      if (seen.rechteck && seen.dreieck) api.check(3);
    }
    load();
    const view = () => { const s = Math.min(api.W, api.H) * .36; return { s, cx: isWave() ? api.W * .27 : api.W / 2, cy: api.H * (isWave() ? .42 : .45) }; };
    return {
      probe: { waveTerms, waveTrue, dft, shape, coef: () => coef, lowest },
      change(k) { if (k === 'mode') { own = false; load(); } trail = k === 'K' || k === 'mode' ? [] : trail; hud(); checks(k); },
      down(px, py) { if (isWave()) return; drawing = [[px, py]]; },
      move(px, py, isDown) { if (drawing && isDown) drawing.push([px, py]); },
      up() {
        if (!drawing) return;
        const d = drawing; drawing = null;
        if (d.length < 12) return;
        const { s, cx, cy } = view();
        setShape(resample(d.map(([x, y]) => [(x - cx) / s, (y - cy) / s])));
        own = true; hud(); api.check(0);
      },
      frame(dt) {
        const W = api.W, H = api.H, { s, cx, cy } = view();
        ctx.fillStyle = '#070616'; ctx.fillRect(0, 0, W, H);
        phase = (phase + dt * api.v.speed) % 1;
        if (drawing) {   // the line being drawn
          ctx.strokeStyle = 'rgba(255,227,166,.9)'; ctx.lineWidth = 2.5; ctx.lineCap = ctx.lineJoin = 'round';
          ctx.beginPath(); drawing.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.stroke();
          draw.text(ctx, L ? 'рисуй замкнутую линию…' : 'zeichne eine geschlossene Linie…', W / 2, H - 18, 'rgba(255,255,255,.6)', 12, 'center');
          return;
        }
        if (isWave()) {
          const T = waveTerms(api.v.K), A = s * .48;
          // phasor chain: term n turns n times per period, its vertical part adds b_n sin(2π n t)
          let x = cx, y = cy;
          for (const c of T) {
            // a negative coefficient is the same phasor turned by half a turn
            const r = Math.abs(c.b) * A, a = TAU * c.n * phase + (c.b < 0 ? Math.PI : 0);
            ctx.strokeStyle = 'rgba(162,148,255,.35)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.stroke();
            const nx = x + r * Math.cos(a), ny = y - r * Math.sin(a);
            ctx.strokeStyle = 'rgba(255,255,255,.75)'; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(nx, ny); ctx.stroke();
            x = nx; y = ny;
          }
          // wave area to the right
          const x0 = W * .52, x1 = W - 12, yv = v => cy - v * A;
          ctx.strokeStyle = 'rgba(255,255,255,.12)'; ctx.beginPath(); ctx.moveTo(x0, cy); ctx.lineTo(x1, cy); ctx.stroke();
          ctx.strokeStyle = 'rgba(255,255,255,.3)'; ctx.setLineDash([4, 5]); ctx.beginPath();
          for (let i = 0; i <= 200; i++) { const t = i / 200, X = x0 + (x1 - x0) * t; i ? ctx.lineTo(X, yv(waveTrue(phase - t))) : ctx.moveTo(X, yv(waveTrue(phase - t))); }
          ctx.stroke(); ctx.setLineDash([]);
          ctx.strokeStyle = '#f4c86a'; ctx.lineWidth = 2; ctx.beginPath();
          for (let i = 0; i <= 400; i++) {
            const t = i / 400, X = x0 + (x1 - x0) * t, v = T.reduce((a, c) => a + c.b * Math.sin(TAU * c.n * (phase - t)), 0);
            i ? ctx.lineTo(X, yv(v)) : ctx.moveTo(X, yv(v));
          }
          ctx.stroke();
          ctx.strokeStyle = 'rgba(244,200,106,.5)'; ctx.setLineDash([2, 4]); ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x0, y); ctx.stroke(); ctx.setLineDash([]);
          draw.glowDot(ctx, x, y, 3, 'rgba(255,227,166,1)', 3);
          // spectrum |b_n|
          const sx = 14, sy = H - 14, sw = W - 28, bars = 30, mxb = 4 / Math.PI;
          draw.text(ctx, L ? 'спектр |bₙ|' : 'Spektrum |bₙ|', sx, sy - 52, 'rgba(255,255,255,.55)', 10);
          for (let n = 1; n <= bars; n++) {
            const c = T.find(c => c.n === n), h = c ? Math.abs(c.b) / mxb * 40 : 0;
            ctx.fillStyle = c ? 'rgba(244,200,106,.85)' : 'rgba(255,255,255,.08)';
            ctx.fillRect(sx + (n - 1) / bars * sw, sy - Math.max(h, 1), sw / bars * .6, Math.max(h, 1));
          }
          return;
        }
        // shape mode: target, reconstruction and epicycles
        const T = lowest(api.v.K);
        ctx.strokeStyle = 'rgba(255,255,255,.12)'; ctx.lineWidth = 1; ctx.beginPath();
        for (let i = 0; i <= 200; i++) {
          const t = i / 200; let X = 0, Y = 0;
          for (const c of coef) { const a = TAU * c.k * t; X += c.re * Math.cos(a) - c.im * Math.sin(a); Y += c.re * Math.sin(a) + c.im * Math.cos(a); }
          i ? ctx.lineTo(cx + X * s, cy + Y * s) : ctx.moveTo(cx + X * s, cy + Y * s);
        }
        ctx.stroke();
        let X = cx, Y = cy;
        for (const c of T) {
          const a = TAU * c.k * phase, ox = X, oy = Y;
          X += (c.re * Math.cos(a) - c.im * Math.sin(a)) * s; Y += (c.re * Math.sin(a) + c.im * Math.cos(a)) * s;
          if (c.k !== 0) {
            ctx.strokeStyle = 'rgba(162,148,255,.32)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(ox, oy, c.r * s, 0, TAU); ctx.stroke();
            ctx.strokeStyle = 'rgba(255,255,255,.7)'; ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(X, Y); ctx.stroke();
          }
        }
        trail.push([X, Y]); if (trail.length > 900) trail.shift();
        ctx.strokeStyle = '#f4c86a'; ctx.lineWidth = 2.2; ctx.lineJoin = 'round'; ctx.beginPath();
        trail.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.stroke();
        draw.glowDot(ctx, X, Y, 3, 'rgba(255,227,166,1)', 3);
      },
    };
  },
});
