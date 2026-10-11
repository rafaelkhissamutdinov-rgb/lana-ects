// Brechung, Totalreflexion, Brewster: a light ray at a flat boundary, with Fresnel reflectances
SIMS.def('brechung', {
  aspect: w => w < 520 ? 1 : .62,
  text: {
    de: {
      hint: 'Zieh die Lichtquelle (oder nutze den Regler). Die Wellenberge im Strahl rücken im dichteren Medium enger zusammen.',
      what: `<p><b>Snellius:</b> $n_1\\sin\\alpha=n_2\\sin\\beta$. Ins dichtere Medium ($n_2>n_1$) wird der Strahl <b>zum Lot</b> gebrochen. Die Frequenz bleibt gleich, die Wellenlänge schrumpft auf $\\lambda/n$ – das siehst du an den Wellenbergen.</p>
<p><b>Totalreflexion</b> gibt es nur vom dichteren ins dünnere Medium, ab dem Grenzwinkel $\\sin\\alpha_c=n_2/n_1$.</p>
<p><b>Brewster:</b> Bei $\\tan\\alpha_B=n_2/n_1$ stehen reflektierter und gebrochener Strahl senkrecht aufeinander. Dann wird p-polarisiertes Licht (Schwingung in der Zeichenebene, Striche) gar nicht reflektiert – das reflektierte Licht ist rein s-polarisiert (Punkte). Unten rechts siehst du $R_s$ und $R_p$ aus den Fresnel-Formeln.</p>`,
      tasks: [
        'Luft → Glas: Finde den Brewster-Winkel. Mit p-Polarisation verschwindet der reflektierte Strahl.',
        'Erzeuge Totalreflexion: Licht aus dem dichteren ins dünnere Medium, Winkel über dem Grenzwinkel.',
        'Ins dichtere Medium: Ist β größer oder kleiner als α? Stell n₂ deutlich größer als n₁ und schau hin.',
        'Auch ohne Totalreflexion kann fast alles reflektiert werden: Finde einen Winkel mit R über 60 %, während n₁ < n₂.',
      ],
    },
    ru: {
      hint: 'Тяни источник света (или ползунок). Гребни волн в луче сближаются в более плотной среде.',
      what: `<p><b>Снеллиус:</b> $n_1\\sin\\alpha=n_2\\sin\\beta$. В более плотную среду ($n_2>n_1$) луч преломляется <b>к нормали</b>. Частота не меняется, а длина волны сжимается до $\\lambda/n$ – это видно по гребням.</p>
<p><b>Полное отражение</b> бывает только из более плотной среды в менее плотную, начиная с критического угла $\\sin\\alpha_c=n_2/n_1$.</p>
<p><b>Брюстер:</b> при $\\tan\\alpha_B=n_2/n_1$ отражённый и преломлённый лучи перпендикулярны. Тогда p-поляризованный свет (колебания в плоскости рисунка, чёрточки) совсем не отражается – отражённый свет чисто s-поляризован (точки). Справа внизу – $R_s$ и $R_p$ по формулам Френеля.</p>`,
      tasks: [
        'Воздух → стекло: найди угол Брюстера. С p-поляризацией отражённый луч исчезает.',
        'Получи полное внутреннее отражение: свет из более плотной среды в менее плотную, угол больше критического.',
        'В более плотную среду: β больше или меньше α? Поставь n₂ заметно больше n₁ и посмотри.',
        'Почти всё может отразиться и без полного отражения: найди угол, где R больше 60 %, при n₁ < n₂.',
      ],
    },
  },
  controls: [
    { k: 'a', type: 'range', min: 0, max: 89.5, step: .1, val: 40, label: { de: 'Einfallswinkel α', ru: 'Угол падения α' }, fmt: v => v.toFixed(1) + '°' },
    { k: 'n1', type: 'range', min: 1, max: 2.4, step: .01, val: 1, label: { de: 'n₁ (oben)', ru: 'n₁ (сверху)' }, fmt: v => v.toFixed(2) },
    { k: 'n2', type: 'range', min: 1, max: 2.4, step: .01, val: 1.5, label: { de: 'n₂ (unten)', ru: 'n₂ (снизу)' }, fmt: v => v.toFixed(2) },
    { k: 'pol', type: 'seg', val: 'u', label: { de: 'Polarisation', ru: 'Поляризация' }, opts: [
      { v: 'u', label: { de: 'unpolarisiert', ru: 'неполяризованный' } }, { v: 's', label: { de: 's (senkrecht)', ru: 's (перпендик.)' } },
      { v: 'p', label: { de: 'p (parallel)', ru: 'p (параллельно)' } }] },
    { k: 'glas', type: 'button', label: { de: 'Glas → Luft', ru: 'Стекло → воздух' } },
    { k: 'luft', type: 'button', label: { de: 'Luft → Glas', ru: 'Воздух → стекло' } },
  ],
  setup(api) {
    const { ctx, draw } = api, L = api.lang === 'ru', D = Math.PI / 180;
    let drag = false;
    function optics() {
      const a = api.v.a * D, n1 = api.v.n1, n2 = api.v.n2;
      const s = n1 / n2 * Math.sin(a), tir = s > 1;
      const b = tir ? null : Math.asin(s);
      let Rs = 1, Rp = 1;
      if (!tir) {
        const ca = Math.cos(a), cb = Math.cos(b);
        const rs = (n1 * ca - n2 * cb) / (n1 * ca + n2 * cb), rp = (n2 * ca - n1 * cb) / (n2 * ca + n1 * cb);
        Rs = rs * rs; Rp = rp * rp;
      }
      const pol = api.v.pol, R = pol === 's' ? Rs : pol === 'p' ? Rp : (Rs + Rp) / 2;
      return { a, b, n1, n2, tir, Rs, Rp, R, T: 1 - R, crit: n1 > n2 ? Math.asin(n2 / n1) : null, brew: Math.atan(n2 / n1) };
    }
    function fresnel(a, n1, n2) {
      const s = n1 / n2 * Math.sin(a);
      if (s > 1) return [1, 1];
      const b = Math.asin(s), ca = Math.cos(a), cb = Math.cos(b);
      const rs = (n1 * ca - n2 * cb) / (n1 * ca + n2 * cb), rp = (n2 * ca - n1 * cb) / (n2 * ca + n1 * cb);
      return [rs * rs, rp * rp];
    }
    function hud(o) {
      const deg = x => (x / D).toFixed(1) + '°';
      const lines = [`α = <span class="g">${deg(o.a)}</span> · β = <span class="g">${o.tir ? '—' : deg(o.b)}</span>`,
        o.tir ? `<span class="g">${L ? 'Полное отражение' : 'Totalreflexion'}</span> · R = 100 %`
              : `R = <span class="g">${(o.R * 100).toFixed(1)} %</span> · T = ${(o.T * 100).toFixed(1)} %`,
        `<span class="k">α<sub>B</sub></span> = ${deg(o.brew)}` + (o.crit ? ` · <span class="k">α<sub>c</sub></span> = ${deg(o.crit)}` : '')];
      api.hud(lines.join('<br>'));
    }
    function checks(o, k) {
      if (o.n1 < o.n2 && api.v.pol === 'p' && Math.abs(o.a - o.brew) < .8 * D) api.check(0);
      if (o.tir) api.check(1);
      if ((k === 'n1' || k === 'n2') && o.n2 - o.n1 > .25 && api.v.a > 20) api.check(2);
      if (o.n1 < o.n2 && !o.tir && o.R > .6) api.check(3);
    }
    hud(optics());
    // a beam with wave crests moving along it; spacing λ/n, speed c/n, so the frequency is the same everywhere
    function beam(x0, y0, x1, y1, n, I, t, color) {
      if (I < .004) return;
      const len = Math.hypot(x1 - x0, y1 - y0), ux = (x1 - x0) / len, uy = (y1 - y0) / len;
      const glow = Math.sqrt(I);
      ctx.lineCap = 'round';
      ctx.strokeStyle = `rgba(${color},${.12 * glow})`; ctx.lineWidth = 14; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke();
      ctx.strokeStyle = `rgba(${color},${.75 * glow})`; ctx.lineWidth = 2.2; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke();
      const lam = 24 / n, speed = 60 / n, off = (t * speed) % lam;
      ctx.strokeStyle = `rgba(255,255,255,${.8 * glow})`; ctx.lineWidth = 1.6;
      for (let s = off; s < len; s += lam) {
        const px = x0 + ux * s, py = y0 + uy * s;
        ctx.beginPath(); ctx.moveTo(px - uy * 5, py + ux * 5); ctx.lineTo(px + uy * 5, py - ux * 5); ctx.stroke();
      }
    }
    // polarisation marks: dots = s (out of the drawing plane), strokes across the beam = p (in the plane)
    function polMarks(x0, y0, x1, y1, As, Ap) {
      const len = Math.hypot(x1 - x0, y1 - y0), ux = (x1 - x0) / len, uy = (y1 - y0) / len;
      for (let s = len * .35; s < len * .9; s += 34) {
        const px = x0 + ux * s, py = y0 + uy * s;
        if (Ap > .03) { ctx.strokeStyle = `rgba(130,198,255,${Math.min(1, Ap)})`; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(px - uy * 9, py + ux * 9); ctx.lineTo(px + uy * 9, py - ux * 9); ctx.stroke(); }
        if (As > .03) { ctx.fillStyle = `rgba(255,127,159,${Math.min(1, As)})`; ctx.beginPath(); ctx.arc(px + ux * 12, py + uy * 12, 3, 0, Math.PI * 2); ctx.fill(); }
      }
    }
    return {
      change(k) { const o = optics(); hud(o); checks(o, k); },
      action(k) {
        if (k === 'glas') { api.set('n1', 1.5); api.set('n2', 1); }
        else { api.set('n1', 1); api.set('n2', 1.5); }
        const o = optics(); hud(o); checks(o);
      },
      down(px, py) {
        const O = [api.W / 2, api.H / 2], Lr = Math.min(api.W, api.H) * .42, a = api.v.a * D;
        const S = [O[0] - Math.sin(a) * Lr, O[1] - Math.cos(a) * Lr];
        drag = py < O[1] || Math.hypot(px - S[0], py - S[1]) < 30;
        if (drag) this.move(px, py, true);
      },
      move(px, py, isDown) {
        if (!isDown || !drag) return;
        const dx = api.W / 2 - px, dy = api.H / 2 - py;
        if (dy <= 0) return;
        api.set('a', Math.round(Math.min(89.5, Math.max(0, Math.atan2(Math.abs(dx), dy) / D)) * 10) / 10);
        const o = optics(); hud(o); checks(o);
      },
      up() { drag = false; },
      frame(dt, t) {
        const W = api.W, H = api.H, O = [W / 2, H / 2], o = optics(), Lr = Math.hypot(W, H);
        ctx.fillStyle = '#070616'; ctx.fillRect(0, 0, W, H);
        // media: denser = more tinted glass
        const tint = n => .05 + .22 * (n - 1) / 1.4;
        ctx.fillStyle = `rgba(130,198,255,${tint(o.n1)})`; ctx.fillRect(0, 0, W, O[1]);
        ctx.fillStyle = `rgba(130,198,255,${tint(o.n2)})`; ctx.fillRect(0, O[1], W, H - O[1]);
        ctx.strokeStyle = 'rgba(255,255,255,.35)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(0, O[1]); ctx.lineTo(W, O[1]); ctx.stroke();
        ctx.setLineDash([4, 6]); ctx.strokeStyle = 'rgba(255,255,255,.25)';
        ctx.beginPath(); ctx.moveTo(O[0], 10); ctx.lineTo(O[0], H - 10); ctx.stroke(); ctx.setLineDash([]);
        draw.text(ctx, `n₁ = ${o.n1.toFixed(2)}`, 12, O[1] - 16, 'rgba(255,255,255,.75)', 13);
        draw.text(ctx, `n₂ = ${o.n2.toFixed(2)}`, 12, O[1] + 18, 'rgba(255,255,255,.75)', 13);
        // rays
        const S = [O[0] - Math.sin(o.a) * Lr, O[1] - Math.cos(o.a) * Lr];
        const Rr = [O[0] + Math.sin(o.a) * Lr, O[1] - Math.cos(o.a) * Lr];
        const pol = api.v.pol, As0 = pol === 'p' ? 0 : 1, Ap0 = pol === 's' ? 0 : 1;
        beam(S[0], S[1], O[0], O[1], o.n1, 1, t, '255,214,140');
        beam(O[0], O[1], Rr[0], Rr[1], o.n1, o.R, t, '255,214,140');
        polMarks(S[0] + (O[0] - S[0]) * .45, S[1] + (O[1] - S[1]) * .45, O[0], O[1], As0, Ap0);
        polMarks(O[0], O[1], O[0] + (Rr[0] - O[0]) * .5, O[1] + (Rr[1] - O[1]) * .5, As0 * Math.sqrt(o.Rs), Ap0 * Math.sqrt(o.Rp));
        if (!o.tir) {
          const Tt = [O[0] + Math.sin(o.b) * Lr, O[1] + Math.cos(o.b) * Lr];
          beam(O[0], O[1], Tt[0], Tt[1], o.n2, o.T, t, '255,214,140');
          // angle arcs
          ctx.strokeStyle = 'rgba(95,214,184,.9)'; ctx.lineWidth = 1.5;
          ctx.beginPath(); ctx.arc(O[0], O[1], 46, Math.PI / 2 - o.b, Math.PI / 2, false); ctx.stroke();
          draw.text(ctx, 'β', O[0] + Math.sin(o.b / 2) * 58, O[1] + Math.cos(o.b / 2) * 58, '#5fd6b8', 14, 'center');
        } else {   // evanescent glow just below the boundary
          ctx.save(); ctx.beginPath(); ctx.rect(0, O[1], W, 40); ctx.clip();
          const g = ctx.createRadialGradient(O[0], O[1], 0, O[0], O[1], 60);
          g.addColorStop(0, 'rgba(255,214,140,.4)'); g.addColorStop(1, 'rgba(255,214,140,0)');
          ctx.fillStyle = g; ctx.beginPath(); ctx.ellipse(O[0], O[1], 90, 22, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore();
        }
        ctx.strokeStyle = 'rgba(244,200,106,.95)'; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(O[0], O[1], 46, -Math.PI / 2 - o.a, -Math.PI / 2, false); ctx.stroke();
        draw.text(ctx, 'α', O[0] - Math.sin(o.a / 2) * 58, O[1] - Math.cos(o.a / 2) * 58, '#f4c86a', 14, 'center');
        // light source handle
        const Sh = [O[0] - Math.sin(o.a) * Math.min(W, H) * .42, O[1] - Math.cos(o.a) * Math.min(W, H) * .42];
        draw.glowDot(ctx, Sh[0], Sh[1], 7, 'rgba(255,227,166,1)', 3);
        ctx.fillStyle = '#fff6dc'; ctx.beginPath(); ctx.arc(Sh[0], Sh[1], 7, 0, Math.PI * 2); ctx.fill();
        // inset: R_s and R_p against the angle
        const gw = Math.min(200, W * .44), gh = 96, gx = W - gw - 10, gy = H - gh - 10;
        ctx.fillStyle = 'rgba(8,6,26,.82)'; ctx.strokeStyle = 'rgba(196,186,255,.2)'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.roundRect ? ctx.roundRect(gx, gy, gw, gh, 10) : ctx.rect(gx, gy, gw, gh); ctx.fill(); ctx.stroke();
        const px = a => gx + 10 + (gw - 20) * a / 90, py = r => gy + gh - 16 - (gh - 30) * r;
        for (const [k, col] of [[0, '#ff7f9f'], [1, '#82c6ff']]) {
          ctx.strokeStyle = col; ctx.lineWidth = 1.6; ctx.beginPath();
          for (let a = 0; a <= 90; a += 1) { const r = fresnel(Math.min(a, 89.9) * D, o.n1, o.n2)[k]; a ? ctx.lineTo(px(a), py(r)) : ctx.moveTo(px(a), py(r)); }
          ctx.stroke();
        }
        ctx.strokeStyle = 'rgba(244,200,106,.9)'; ctx.beginPath(); ctx.moveTo(px(api.v.a), gy + 8); ctx.lineTo(px(api.v.a), gy + gh - 16); ctx.stroke();
        draw.text(ctx, 'Rs', gx + 12, gy + 12, '#ff7f9f', 10); draw.text(ctx, 'Rp', gx + 34, gy + 12, '#82c6ff', 10);
        draw.text(ctx, '0°', gx + 10, gy + gh - 7, 'rgba(255,255,255,.5)', 9); draw.text(ctx, '90°', gx + gw - 26, gy + gh - 7, 'rgba(255,255,255,.5)', 9);
      },
    };
  },
});
