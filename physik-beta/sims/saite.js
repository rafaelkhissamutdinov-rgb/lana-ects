// Wärme & Welle auf der Saite: separation of variables on [0, π] with u(0) = u(π) = 0
SIMS.def('saite', {
  aspect: w => w < 520 ? .95 : .6,
  text: {
    de: {
      limits: 'Länge π, Wärmeleit- bzw. Wellengeschwindigkeit 1. Die Reihe wird nach 60 Moden abgebrochen, deshalb sind sehr scharfe Ecken leicht verrundet. Beim Zeichnen werden die Enden auf u = 0 gesetzt.',
      hint: 'Zeichne mit dem Finger eine Anfangsform u(x, 0) – oder nimm eine Vorlage. Die Enden sind fest (u = 0). Unten siehst du die Stärke jeder Eigenmode sin(nx).',
      what: `<p><b>Separation der Variablen:</b> Jede Anfangsform zerlegt sich in Eigenmoden $u_0(x)=\\sum_n b_n\\sin(nx)$ mit $b_n=\\frac2\\pi\\int_0^\\pi u_0(x)\\sin(nx)\\,dx$. Jede Mode entwickelt sich für sich.</p>
<p><b>Wärmeleitung</b> $u_t=u_{xx}$: $u(x,t)=\\sum_n b_n e^{-n^2t}\\sin(nx)$. Hohe Moden (Ecken, Zacken) sterben quadratisch schneller – die Form wird sofort glatt und schrumpft am Ende zu $\\sin x$.</p>
<p><b>Wellengleichung</b> $u_{tt}=u_{xx}$ (Anfangsgeschwindigkeit 0): $u=\\sum_n b_n\\cos(nt)\\sin(nx)$. Nichts dämpft; nach d'Alembert läuft die halbe Form nach links, die halbe nach rechts und wird an den festen Enden umgedreht reflektiert.</p>`,
      tasks: [
        'Wärme: Starte mit der Stufe. Welche Moden verschwinden zuerst, und was passiert mit den Ecken?',
        'Welle: Nimm den schmalen Puls. Was macht er nach dem Start?',
        'Eigenmode: Starte mit sin(2x). Ändert sich die Form – oder nur die Höhe?',
        'Zeichne deine eigene Anfangsform und schau sie dir in beiden Gleichungen an.',
      ],
    },
    ru: {
      limits: 'Длина π, коэффициент теплопроводности и скорость волны равны 1. Ряд обрывается на 60 модах, поэтому очень острые углы слегка скруглены. При рисовании концы ставятся в u = 0.',
      hint: 'Нарисуй пальцем начальную форму u(x, 0) – или выбери шаблон. Концы закреплены (u = 0). Внизу – сила каждой собственной моды sin(nx).',
      what: `<p><b>Разделение переменных:</b> любая начальная форма раскладывается на моды $u_0(x)=\\sum_n b_n\\sin(nx)$, $b_n=\\frac2\\pi\\int_0^\\pi u_0(x)\\sin(nx)\\,dx$. Каждая мода живёт сама по себе.</p>
<p><b>Теплопроводность</b> $u_t=u_{xx}$: $u(x,t)=\\sum_n b_n e^{-n^2t}\\sin(nx)$. Высокие моды (углы, зубцы) гаснут квадратично быстрее – форма сразу сглаживается и в конце становится $\\sin x$.</p>
<p><b>Волновое уравнение</b> $u_{tt}=u_{xx}$ (начальная скорость 0): $u=\\sum_n b_n\\cos(nt)\\sin(nx)$. Затухания нет; по Даламберу половина формы бежит влево, половина вправо и отражается от закреплённых концов перевёрнутой.</p>`,
      tasks: [
        'Тепло: начни со ступеньки. Какие моды пропадают первыми и что происходит с углами?',
        'Волна: возьми узкий импульс. Что он делает после старта?',
        'Собственная мода: начни с sin(2x). Меняется форма – или только высота?',
        'Нарисуй свою начальную форму и посмотри на неё в обоих уравнениях.',
      ],
    },
  },
  controls: [
    { k: 'eq', type: 'seg', val: 'heat', label: { de: 'Gleichung', ru: 'Уравнение' }, opts: [
      { v: 'heat', label: { de: 'Wärme uₜ = uₓₓ', ru: 'Тепло uₜ = uₓₓ' } }, { v: 'wave', label: { de: 'Welle uₜₜ = uₓₓ', ru: 'Волна uₜₜ = uₓₓ' } }] },
    { k: 'pre', type: 'seg', val: 'stufe', label: { de: 'Anfang', ru: 'Начало' }, opts: [
      { v: 'stufe', label: { de: 'Stufe', ru: 'Ступенька' } }, { v: 'zupf', label: { de: 'gezupft', ru: 'щипок' } },
      { v: 'puls', label: { de: 'schmaler Puls', ru: 'узкий импульс' } }, { v: 'mode2', label: { de: 'sin(2x)', ru: 'sin(2x)' } }] },
    { k: 'speed', type: 'range', min: .1, max: 2, step: .05, val: .6, label: { de: 'Tempo', ru: 'Скорость' }, fmt: v => v.toFixed(2) },
    { k: 'run', type: 'toggle', val: true, label: { de: 'Läuft', ru: 'Идёт' } },
    { k: 'reset', type: 'button', label: { de: 'Neu starten', ru: 'Заново' } },
  ],
  setup(api) {
    const { ctx, draw } = api, L = api.lang === 'ru', NM = 60, S = 400;
    let b = [], t = 0, u0 = new Float32Array(S + 1), drawing = false, last = null;
    const X = i => i / S * Math.PI;
    function preset(name) {
      for (let i = 0; i <= S; i++) {
        const x = X(i);
        u0[i] = name === 'stufe' ? (x > .9 && x < 2.2 ? 1 : 0)
              : name === 'zupf' ? (x < 1 ? x / 1 : (Math.PI - x) / (Math.PI - 1))
              : name === 'puls' ? Math.exp(-Math.pow((x - 1.2) / .12, 2))
              : Math.sin(2 * x);
      }
      u0[0] = u0[S] = 0;
      coeffs(); t = 0;
    }
    function coeffs() {   // b_n = 2/π ∫ u0 sin(nx) dx (trapezoid rule)
      b = [];
      for (let n = 1; n <= NM; n++) {
        let s = 0;
        for (let i = 0; i <= S; i++) s += (i === 0 || i === S ? .5 : 1) * u0[i] * Math.sin(n * X(i));
        b.push(2 / Math.PI * s * Math.PI / S);
      }
    }
    const amp = n => api.v.eq === 'heat' ? b[n - 1] * Math.exp(-n * n * t) : b[n - 1] * Math.cos(n * t);
    function hud() {
      let big = 0; for (let n = 1; n <= NM; n++) if (Math.abs(amp(n)) > .01) big = n;
      api.hud(`t = <span class="g">${t.toFixed(api.v.eq === 'heat' ? 3 : 2)}</span> · ${L ? 'заметных мод' : 'merkliche Moden'}: <span class="g">${big}</span>`);
    }
    preset('stufe');
    let hudT = 0;
    return {
      probe: { b: () => b, u0: () => u0, amp, setT: v => { t = v; }, preset, NM, S },
      change(k) { if (k === 'pre') preset(api.v.pre); if (k === 'eq') t = 0; hud(); },
      action(k) { if (k === 'reset') { t = 0; hud(); } },
      down(px, py) { drawing = true; last = null; u0.fill(0); this.move(px, py, true); },
      move(px, py, isDown) {
        if (!isDown || !drawing) return;
        const top = api.H * .08, mid = api.H * .4, A = api.H * .28, i = Math.round(Math.max(0, Math.min(1, (px - 16) / (api.W - 32))) * S);
        const v = Math.max(-1.3, Math.min(1.3, (mid - py) / A));
        if (last) { const [i0, v0] = last, a = Math.min(i0, i), z = Math.max(i0, i); for (let k = a; k <= z; k++) u0[k] = z === a ? v : v0 + (v - v0) * (k - i0) / (i - i0); }
        else u0[i] = v;
        last = [i, v]; t = 0;
      },
      up() {
        if (!drawing) return;
        drawing = false; u0[0] = u0[S] = 0;
        let filled = 0; for (let i = 0; i <= S; i++) if (u0[i]) filled++;
        if (filled > S * .2) { coeffs(); t = 0; api.check(3); }
        else preset(api.v.pre);
      },
      frame(dt) {
        const W = api.W, H = api.H, x0 = 16, x1 = W - 16, mid = H * .4, A = H * .28;
        if (api.v.run && !drawing) t += dt * api.v.speed * (api.v.eq === 'heat' ? .08 : 1.2);
        if ((hudT += dt) > .1) { hud(); hudT = 0; }
        if (api.v.eq === 'heat' && t > .15 && api.v.pre !== 'mode2') api.check(0);
        if (api.v.eq === 'wave' && api.v.pre === 'puls' && t > .9) api.check(1);
        if (api.v.pre === 'mode2' && t > (api.v.eq === 'heat' ? .1 : 1)) api.check(2);
        ctx.fillStyle = '#070616'; ctx.fillRect(0, 0, W, H);
        const px = i => x0 + (x1 - x0) * i / S;
        ctx.strokeStyle = 'rgba(255,255,255,.15)'; ctx.beginPath(); ctx.moveTo(x0, mid); ctx.lineTo(x1, mid); ctx.stroke();
        ctx.fillStyle = '#c9c3e6'; ctx.fillRect(x0 - 5, mid - 16, 5, 32); ctx.fillRect(x1, mid - 16, 5, 32);
        // initial shape (dashed)
        ctx.strokeStyle = 'rgba(255,255,255,.28)'; ctx.setLineDash([4, 5]); ctx.lineWidth = 1.2; ctx.beginPath();
        for (let i = 0; i <= S; i++) { const y = mid - u0[i] * A; i ? ctx.lineTo(px(i), y) : ctx.moveTo(px(i), y); }
        ctx.stroke(); ctx.setLineDash([]);
        if (drawing) return;
        // solution
        const amps = []; for (let n = 1; n <= NM; n++) amps.push(amp(n));
        ctx.strokeStyle = api.v.eq === 'heat' ? '#ffad61' : '#82c6ff'; ctx.lineWidth = 2.6; ctx.lineJoin = 'round'; ctx.beginPath();
        for (let i = 0; i <= S; i += 2) {
          let u = 0; const x = X(i);
          for (let n = 1; n <= NM; n++) if (Math.abs(amps[n - 1]) > 1e-5) u += amps[n - 1] * Math.sin(n * x);
          const y = mid - u * A; i ? ctx.lineTo(px(i), y) : ctx.moveTo(px(i), y);
        }
        ctx.stroke();
        // modes
        const by = H - 12, bh = H * .17, bw = (x1 - x0) / 30;
        draw.text(ctx, L ? 'моды |bₙ(t)|' : 'Moden |bₙ(t)|', x0, by - bh - 10, 'rgba(255,255,255,.5)', 10);
        for (let n = 1; n <= 30; n++) {
          const a0 = Math.abs(b[n - 1]), a = Math.abs(amps[n - 1]), mx = Math.max(...b.map(Math.abs)) || 1;
          ctx.fillStyle = 'rgba(255,255,255,.08)'; ctx.fillRect(x0 + (n - 1) * bw, by - a0 / mx * bh, bw * .65, a0 / mx * bh);
          ctx.fillStyle = api.v.eq === 'heat' ? 'rgba(255,173,97,.9)' : 'rgba(130,198,255,.9)';
          ctx.fillRect(x0 + (n - 1) * bw, by - a / mx * bh, bw * .65, a / mx * bh);
        }
      },
    };
  },
});
