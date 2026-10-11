// Schwingkreis & Zeiger: series RLC driven by U0 cos ωt — phasors, time traces, resonance curve
SIMS.def('kreis', {
  aspect: w => w < 520 ? 1.05 : .62,
  drag: false,
  text: {
    de: {
      hint: 'Reihenschaltung aus R, L und C an einer Wechselspannung U₀ = 10 V. Die Zeiger drehen sich mit ωt; ihre waagrechten Anteile sind die Momentanwerte.',
      what: `<p>Impedanzen: $Z_R=R$, $Z_L=i\\omega L$, $Z_C=\\frac{1}{i\\omega C}$. In Reihe: $Z=R+i\\left(\\omega L-\\frac1{\\omega C}\\right)$, Strom $I_0=U_0/|Z|$.</p>
<p>Im Zeigerdiagramm liegt $U_R$ in Phase mit dem Strom, $U_L$ eilt um 90° voraus, $U_C$ hinkt 90° nach. $U_L$ und $U_C$ zeigen in entgegengesetzte Richtungen und heben sich teilweise auf.</p>
<p><b>Resonanz</b> bei $\\omega_0=1/\\sqrt{LC}$: Dort ist $Z=R$, der Strom maximal und in Phase mit $U$. $U_L$ und $U_C$ können dann viel größer als $U_0$ sein – um den Gütefaktor $Q=\\frac1R\\sqrt{L/C}$.</p>`,
      tasks: [
        'Resonanz: Finde die Frequenz, bei der der Strom am größten ist.',
        'Bei Resonanz: Ist die Spannung an der Spule größer als die angelegten 10 V?',
        'Unterhalb der Resonanz: Eilt der Strom der Spannung voraus oder hinterher? Geh deutlich unter f₀.',
        'Mach die Resonanzkurve schärfer. Welchen Bauteilwert musst du dafür ändern?',
      ],
    },
    ru: {
      hint: 'Последовательно R, L и C на переменном напряжении U₀ = 10 В. Векторы вращаются с ωt; их горизонтальные проекции – мгновенные значения.',
      what: `<p>Импедансы: $Z_R=R$, $Z_L=i\\omega L$, $Z_C=\\frac{1}{i\\omega C}$. Последовательно: $Z=R+i\\left(\\omega L-\\frac1{\\omega C}\\right)$, ток $I_0=U_0/|Z|$.</p>
<p>На диаграмме $U_R$ в фазе с током, $U_L$ опережает на 90°, $U_C$ отстаёт на 90°. $U_L$ и $U_C$ направлены противоположно и частично гасят друг друга.</p>
<p><b>Резонанс</b> при $\\omega_0=1/\\sqrt{LC}$: там $Z=R$, ток максимален и в фазе с $U$. $U_L$ и $U_C$ могут быть намного больше $U_0$ – в добротность $Q=\\frac1R\\sqrt{L/C}$ раз.</p>`,
      tasks: [
        'Резонанс: найди частоту, при которой ток максимален.',
        'В резонансе: напряжение на катушке больше приложенных 10 В?',
        'Ниже резонанса: ток опережает напряжение или отстаёт? Уйди заметно ниже f₀.',
        'Сделай резонансную кривую острее. Какой элемент нужно изменить?',
      ],
    },
  },
  controls: [
    { k: 'lf', type: 'range', min: Math.log10(20), max: Math.log10(2000), step: .002, val: Math.log10(100), label: { de: 'Frequenz f', ru: 'Частота f' }, fmt: v => Math.round(Math.pow(10, v)) + ' Hz' },
    { k: 'R', type: 'range', min: 1, max: 100, step: 1, val: 20, label: { de: 'Widerstand R', ru: 'Сопротивление R' }, fmt: v => v + ' Ω' },
    { k: 'L', type: 'range', min: 10, max: 300, step: 1, val: 100, label: { de: 'Induktivität L', ru: 'Индуктивность L' }, fmt: v => v + ' mH' },
    { k: 'C', type: 'range', min: 1, max: 100, step: 1, val: 10, label: { de: 'Kapazität C', ru: 'Ёмкость C' }, fmt: v => v + ' µF' },
  ],
  setup(api) {
    const { ctx, draw } = api, L = api.lang === 'ru', U0 = 10;
    let th = 0;
    function circuit(f = Math.pow(10, api.v.lf)) {
      const w = 2 * Math.PI * f, R = api.v.R, Lh = api.v.L / 1000, C = api.v.C * 1e-6;
      const X = w * Lh - 1 / (w * C), Z = Math.hypot(R, X), I = U0 / Z, phi = Math.atan2(X, R);
      return { f, w, R, Lh, C, X, Z, I, phi, UR: R * I, UL: w * Lh * I, UC: I / (w * C), f0: 1 / (2 * Math.PI * Math.sqrt(Lh * C)), Q: Math.sqrt(Lh / C) / R };
    }
    function hud() {
      const c = circuit();
      api.hud(`f₀ = <span class="g">${c.f0.toFixed(0)} Hz</span> · Q = ${c.Q.toFixed(1)}<br>I₀ = <span class="g">${(c.I * 1000).toFixed(0)} mA</span> · φ = ${(c.phi * 180 / Math.PI).toFixed(0)}°<br>U<sub>R</sub> ${c.UR.toFixed(1)} · U<sub>L</sub> ${c.UL.toFixed(1)} · U<sub>C</sub> ${c.UC.toFixed(1)} V`);
    }
    function checks() {
      const c = circuit();
      if (Math.abs(c.f - c.f0) / c.f0 < .02) { api.check(0); if (c.UL > U0) api.check(1); }
      if (c.phi < -20 * Math.PI / 180) api.check(2);
      if (api.v.R <= 5) api.check(3);
    }
    hud();
    return {
      change() { hud(); checks(); },
      frame(dt) {
        const W = api.W, H = api.H, c = circuit(), wide = W >= 520;
        th += dt * 1.2;
        ctx.fillStyle = '#070616'; ctx.fillRect(0, 0, W, H);
        // ---- phasors (current phasor at angle θ, voltages relative to it) ----
        const pcx = wide ? W * .22 : W * .27, pcy = wide ? H * .44 : H * .42, pr = Math.min(wide ? W * .17 : W * .23, H * .26);
        const vmax = Math.max(U0, c.UR, c.UL, c.UC) * 1.05, s = pr / vmax;
        ctx.strokeStyle = 'rgba(255,255,255,.1)'; ctx.beginPath(); ctx.arc(pcx, pcy, U0 * s, 0, 7); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(pcx - pr - 8, pcy); ctx.lineTo(pcx + pr + 8, pcy); ctx.stroke();
        const vec = (len, ang, x0, y0, col, lab, sub) => {
          const x1 = x0 + len * Math.cos(ang), y1 = y0 - len * Math.sin(ang);
          ctx.strokeStyle = ctx.fillStyle = col; draw.arrow(ctx, x0, y0, x1, y1, 8, 2.2);
          if (lab) {   // label with a real subscript
            const lx = x1 + 12 * Math.cos(ang), ly = y1 - 12 * Math.sin(ang);
            draw.text(ctx, lab, lx, ly, col, 12, 'center', 700);
            if (sub) draw.text(ctx, sub, lx + 7, ly + 5, col, 9, 'left', 700);
          }
          return [x1, y1];
        };
        const a = th;   // angle of the current
        let p = [pcx, pcy];
        p = vec(c.UR * s, a, p[0], p[1], '#5fd6b8', 'U', 'R');
        p = vec(c.UL * s, a + Math.PI / 2, p[0], p[1], '#ff7f9f', 'U', 'L');
        // U_C runs back along U_L; draw it a few pixels beside it so both stay visible
        const ox = 5 * Math.cos(a), oy = -5 * Math.sin(a);
        p = vec(c.UC * s, a - Math.PI / 2, p[0] + ox, p[1] + oy, '#82c6ff', 'U', 'C');
        vec(U0 * s, a + c.phi, pcx, pcy, '#f4c86a', 'U');
        const Iscale = pr * .55 / Math.max(.001, circuit(c.f0).I);
        vec(c.I * Iscale, a, pcx, pcy, 'rgba(255,255,255,.8)', 'I');
        // ---- time traces u(t), i(t) ----
        const tx0 = wide ? W * .45 : W * .55, tx1 = W - 12, ty = pcy, th2 = wide ? H * .28 : H * .22;
        ctx.strokeStyle = 'rgba(255,255,255,.12)'; ctx.beginPath(); ctx.moveTo(tx0, ty); ctx.lineTo(tx1, ty); ctx.stroke();
        const trace = (amp, ph, col) => {
          ctx.strokeStyle = col; ctx.lineWidth = 2; ctx.beginPath();
          for (let i = 0; i <= 160; i++) { const x = tx0 + (tx1 - tx0) * i / 160, ang = a + ph - i / 160 * 4 * Math.PI; i ? ctx.lineTo(x, ty - amp * Math.cos(ang)) : ctx.moveTo(x, ty - amp * Math.cos(ang)); }
          ctx.stroke();
        };
        trace(th2, c.phi, '#f4c86a');
        trace(th2 * c.I / Math.max(.001, circuit(c.f0).I), 0, 'rgba(255,255,255,.85)');
        draw.text(ctx, 'u(t)', tx1 - 62, ty + th2 + 12, '#f4c86a', 11, 'left', 700); draw.text(ctx, 'i(t)', tx1 - 24, ty + th2 + 12, '#fff', 11, 'left', 700);
        // ---- resonance curve I0(f), log frequency axis ----
        const gx0 = 16, gx1 = W - 16, gy1 = H - 18, gy0 = wide ? H * .78 : H * .7;
        const fx = f => gx0 + (gx1 - gx0) * (Math.log10(f) - Math.log10(20)) / 2, Imax = circuit(c.f0).I;
        ctx.strokeStyle = 'rgba(255,255,255,.15)'; ctx.beginPath(); ctx.moveTo(gx0, gy1); ctx.lineTo(gx1, gy1); ctx.stroke();
        ctx.strokeStyle = '#a294ff'; ctx.lineWidth = 2; ctx.beginPath();
        for (let i = 0; i <= 300; i++) { const f = Math.pow(10, Math.log10(20) + 2 * i / 300), I = circuit(f).I, y = gy1 - (gy1 - gy0) * I / Imax; i ? ctx.lineTo(fx(f), y) : ctx.moveTo(fx(f), y); }
        ctx.stroke();
        ctx.strokeStyle = 'rgba(244,200,106,.9)'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(fx(c.f), gy0 - 4); ctx.lineTo(fx(c.f), gy1); ctx.stroke();
        draw.glowDot(ctx, fx(c.f), gy1 - (gy1 - gy0) * c.I / Imax, 4, 'rgba(255,227,166,1)', 3);
        ctx.setLineDash([3, 4]); ctx.strokeStyle = 'rgba(255,255,255,.3)'; ctx.beginPath(); ctx.moveTo(fx(c.f0), gy0 - 4); ctx.lineTo(fx(c.f0), gy1); ctx.stroke(); ctx.setLineDash([]);
        draw.text(ctx, 'f₀', fx(c.f0) + 4, gy0, 'rgba(255,255,255,.6)', 10);
        for (const f of [20, 100, 1000]) draw.text(ctx, f + ' Hz', fx(f), gy1 + 10, 'rgba(255,255,255,.45)', 9, 'center');
        draw.text(ctx, L ? 'резонансная кривая I₀(f)' : 'Resonanzkurve I₀(f)', gx0, gy0 - 12, 'rgba(255,255,255,.5)', 10);
      },
    };
  },
});
