// Spalt, Doppelspalt, Gitter: Huygens wavelets behind the slits, Fraunhofer pattern on a distant screen
SIMS.def('spalt', {
  aspect: w => w < 520 ? .95 : .58,
  text: {
    de: {
      hint: 'Links kommt eine ebene Welle an. Hinter dem Spalt siehst du die Elementarwellen (Huygens), rechts das Muster auf einem weit entfernten Schirm.',
      what: `<p><b>Einzelspalt</b> (Breite $b$): erstes Minimum bei $\\sin\\theta=\\lambda/b$. Je schmaler der Spalt, desto breiter das Muster.</p>
<p><b>Doppelspalt</b> (Abstand $d$): helle Streifen bei $d\\sin\\theta=m\\lambda$. Der Gangunterschied der beiden Wege ist ein ganzes Vielfaches der Wellenlänge. Die Einhüllende kommt vom Einzelspalt – fällt ein Maximum auf ein Einzelspalt-Minimum, fehlt diese Ordnung.</p>
<p><b>Gitter</b> mit $N$ Spalten: dieselben Hauptmaxima wie beim Doppelspalt, aber viel schärfer, dazwischen $N-2$ kleine Nebenmaxima (hier $N=4$).</p>`,
      tasks: [
        'Einzelspalt: Mach den Spalt schmaler als 1 µm. Was passiert mit der Breite des Musters?',
        'Doppelspalt: Probier rotes (über 650 nm) und blaues Licht (unter 450 nm). Bei welchem liegen die Streifen weiter auseinander?',
        'Fehlende Ordnung: Stell den Doppelspalt so ein, dass d genau ein Vielfaches von b ist (z. B. d = 3b).',
        'Gitter: Schalte auf das Gitter und vergleiche die Schärfe der Maxima mit dem Doppelspalt.',
      ],
    },
    ru: {
      hint: 'Слева приходит плоская волна. За щелью видны вторичные волны (Гюйгенс), справа – картина на далёком экране.',
      what: `<p><b>Одна щель</b> (ширина $b$): первый минимум при $\\sin\\theta=\\lambda/b$. Чем уже щель, тем шире картина.</p>
<p><b>Две щели</b> (расстояние $d$): светлые полосы при $d\\sin\\theta=m\\lambda$ – разность хода кратна длине волны. Огибающая – от одной щели: если максимум попадает на минимум одной щели, этот порядок пропадает.</p>
<p><b>Решётка</b> из $N$ щелей: те же главные максимумы, что у двух щелей, но гораздо резче, а между ними $N-2$ слабых побочных (здесь $N=4$).</p>`,
      tasks: [
        'Одна щель: сделай щель уже 1 мкм. Что происходит с шириной картины?',
        'Две щели: попробуй красный (больше 650 нм) и синий свет (меньше 450 нм). У какого полосы дальше друг от друга?',
        'Пропавший порядок: подбери d ровно кратным b (например, d = 3b).',
        'Решётка: переключись на решётку и сравни резкость максимумов с двумя щелями.',
      ],
    },
  },
  controls: [
    { k: 'mode', type: 'seg', val: 2, label: { de: 'Anordnung', ru: 'Схема' }, opts: [
      { v: 1, label: { de: 'Einzelspalt', ru: 'Одна щель' } }, { v: 2, label: { de: 'Doppelspalt', ru: 'Две щели' } }, { v: 4, label: { de: 'Gitter (4)', ru: 'Решётка (4)' } }] },
    { k: 'lam', type: 'range', min: 400, max: 700, step: 5, val: 530, label: { de: 'Wellenlänge λ', ru: 'Длина волны λ' }, fmt: (v, a) => `<span style="color:${SIMS.draw.nmColor(v)}">${v} nm</span>` },
    { k: 'b', type: 'range', min: .5, max: 3, step: .05, val: 1.2, label: { de: 'Spaltbreite b', ru: 'Ширина щели b' }, fmt: v => v.toFixed(2) + ' µm' },
    { k: 'd', type: 'range', min: 1.5, max: 6, step: .05, val: 3.6, label: { de: 'Spaltabstand d', ru: 'Расстояние d' }, fmt: v => v.toFixed(2) + ' µm' },
  ],
  setup(api) {
    const { ctx, draw } = api, L = api.lang === 'ru';
    const fieldCv = document.createElement('canvas'), fctx = fieldCv.getContext('2d');
    let img = null, gw = 0, gh = 0, step = 4, seen = { red: false, blue: false };
    // geometry scale of the picture: as large as possible while the whole aperture still fits
    const PX_PER_UM = () => { const { N, b, d } = slits(); return Math.min(Math.min(api.W, api.H) / 11, api.H * .86 / ((N - 1) * d + b)); };
    function slits() {
      const N = api.v.mode, b = api.v.b, d = N > 1 ? api.v.d : 0;
      const out = [];
      for (let i = 0; i < N; i++) out.push((i - (N - 1) / 2) * d);
      return { N, b, d, centers: out };
    }
    // Fraunhofer intensity, normalised to 1 in the centre
    function intensity(sin) {
      const { N, b, d } = slits(), lam = api.v.lam / 1000;
      const be = Math.PI * b * sin / lam, ga = Math.PI * d * sin / lam;
      const env = Math.abs(be) < 1e-9 ? 1 : Math.pow(Math.sin(be) / be, 2);
      let arr = 1;
      if (N > 1) { const s = Math.sin(ga); arr = Math.abs(s) < 1e-9 ? 1 : Math.pow(Math.sin(N * ga) / (N * s), 2); }
      return env * arr;
    }
    function hud() {
      const { N, b, d } = slits(), lam = api.v.lam / 1000;
      const lines = [`λ/b = <span class="g">${(lam / b).toFixed(3)}</span> <span class="k">→ ${L ? '1-й минимум' : '1. Minimum'}</span>`];
      if (N > 1) lines.push(`λ/d = <span class="g">${(lam / d).toFixed(3)}</span> <span class="k">→ ${L ? 'шаг максимумов' : 'Abstand der Maxima'}</span>`);
      lines.push(`<span class="k">${L ? 'ось экрана' : 'Schirm-Achse'}: sin θ</span>`);
      api.hud(lines.join('<br>'));
    }
    hud();
    function checks(k) {
      const { N, b, d } = slits();
      if (N === 1 && b < 1 && k === 'b') api.check(0);
      if (N === 2) { if (api.v.lam >= 650) seen.red = true; if (api.v.lam <= 450) seen.blue = true; if (seen.red && seen.blue) api.check(1); }
      if (N === 2 && (k === 'b' || k === 'd')) { const r = d / b; if (Math.round(r) >= 2 && Math.abs(r - Math.round(r)) < .03) api.check(2); }
      if (N === 4) api.check(3);
    }
    return {
      change(k) { hud(); checks(k); },
      resize() { img = null; },
      frame(dt, t) {
        const W = api.W, H = api.H, xb = Math.round(W * .2), xs = W - 54, cy = H / 2;
        const lamPx0 = api.v.lam / 1000 * PX_PER_UM();
        step = Math.max(3, Math.min(5, Math.round(lamPx0 / 3.6)));   // at least ~3.5 samples per wavelength, no moiré
        if (!img || gw !== Math.ceil(W / step) || gh !== Math.ceil(H / step)) { gw = Math.ceil(W / step); gh = Math.ceil(H / step); fieldCv.width = gw; fieldCv.height = gh; img = fctx.createImageData(gw, gh); }
        const { centers, b } = slits(), ppu = PX_PER_UM(), lamPx = api.v.lam / 1000 * ppu, k = Math.PI * 2 / lamPx, w = t * 6;
        // Huygens sources across every slit opening
        const src = [];
        const per = Math.max(3, Math.min(8, Math.round(b * ppu / 6)));
        for (const c of centers) for (let i = 0; i < per; i++) src.push(cy + (c + (i + .5) / per * b - b / 2) * ppu);
        const col = draw.nmColor(api.v.lam).match(/\d+/g).map(Number);
        const data = img.data, norm = 1 / Math.sqrt(src.length);
        for (let j = 0; j < gh; j++) for (let i = 0; i < gw; i++) {
          const x = i * step, y = j * step, o = (j * gw + i) * 4;
          let v;
          if (x < xb) v = Math.cos(k * x - w);
          else if (x > xs) v = 0;
          else {
            let re = 0, im = 0;
            const dx = x - xb + .5;
            for (const sy of src) { const r = Math.hypot(dx, y - sy), a = k * r, f = 1 / Math.sqrt(r * .05 + 1); re += Math.cos(a) * f; im += Math.sin(a) * f; }
            v = (re * Math.cos(w) + im * Math.sin(w)) * norm * 1.6;   // the real part of the complex field at time t
          }
          const s = Math.max(-1, Math.min(1, v));
          data[o] = col[0]; data[o + 1] = col[1]; data[o + 2] = col[2]; data[o + 3] = 30 + 110 * (s * .5 + .5) * (s > -0.2 ? 1 : .6);
        }
        fctx.putImageData(img, 0, 0);
        ctx.fillStyle = '#05040f'; ctx.fillRect(0, 0, W, H);
        ctx.imageSmoothingEnabled = true; ctx.drawImage(fieldCv, 0, 0, gw * step, gh * step);
        // barrier with openings
        ctx.fillStyle = '#c9c3e6';
        let y0 = 0;
        const holes = centers.map(c => [cy + (c - b / 2) * ppu, cy + (c + b / 2) * ppu]).sort((a, b) => a[0] - b[0]);
        for (const [a, z] of holes) { ctx.fillRect(xb - 3, y0, 6, Math.max(0, a - y0)); y0 = z; }
        ctx.fillRect(xb - 3, y0, 6, H - y0);
        // the distant screen: intensity against sin θ
        const smax = .6, gx = xs + 4;
        ctx.fillStyle = '#05040f'; ctx.fillRect(xs, 0, W - xs, H);
        for (let j = 0; j < H; j++) {
          const sin = (j - cy) / (H / 2) * smax, I = intensity(sin);
          ctx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},${Math.min(1, I * 1.1)})`;
          ctx.fillRect(W - 16, j, 14, 1);
        }
        ctx.strokeStyle = 'rgba(255,255,255,.85)'; ctx.lineWidth = 1.4; ctx.beginPath();
        for (let j = 0; j < H; j++) { const sin = (j - cy) / (H / 2) * smax, x = gx + (W - 22 - gx) * intensity(sin); j ? ctx.lineTo(x, j) : ctx.moveTo(x, j); }
        ctx.stroke();
        ctx.strokeStyle = 'rgba(255,255,255,.18)'; ctx.beginPath(); ctx.moveTo(xs, 0); ctx.lineTo(xs, H); ctx.stroke();
        draw.text(ctx, L ? 'экран' : 'Schirm', xs + 4, H - 10, 'rgba(255,255,255,.55)', 10);
      },
    };
  },
});
