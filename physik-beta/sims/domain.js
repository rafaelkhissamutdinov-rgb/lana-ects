// Komplexe Funktionen in Farbe: domain colouring (hue = arg f, light = |f|) with a contour
// that measures (1/2πi)∮ f dz and the winding of f — Cauchy, residues and the argument principle.
SIMS.def('domain', {
  aspect: w => w < 520 ? 1 : .66,
  text: {
    de: {
      hint: 'Farbe = Argument von f(z), Helligkeit = Betrag: Nullstellen sind dunkel, Pole hell. Zieh den Kreis (den Weg γ). Im Modus „frei“ kannst du Nullstellen (○) und Pole (●) verschieben.',
      what: `<p>Jeder Punkt $z$ bekommt die Farbe von $\\arg f(z)$: rot bei positiv reell, dann gelb, grün, blau … einmal rundherum. Die feinen Ringe sind Höhenlinien von $|f|$ (jede Stufe verdoppelt den Betrag).</p>
<p>Um eine <b>Nullstelle der Ordnung k</b> laufen die Farben k-mal im Kreis (gegen den Uhrzeigersinn), um einen <b>Pol</b> andersherum. Das ist das <b>Argumentprinzip</b>: Die Farbumläufe entlang des Wegs sind $\\frac{1}{2\\pi i}\\oint\\frac{f'}{f}\\,dz=N-P$.</p>
<p>Ist $f$ im Inneren holomorph, gilt <b>Cauchy</b>: $\\oint f\\,dz=0$. Liegen Pole innen, liefert der <b>Residuensatz</b> $\\frac{1}{2\\pi i}\\oint f\\,dz=\\sum\\operatorname{Res}$. Bei $\\operatorname{Log}$ und $\\sqrt z$ siehst du den Verzweigungsschnitt auf der negativen reellen Achse: Dort springt die Farbe.</p>`,
      tasks: [
        'Cauchy: Wähle 1/(z²+1) und lege den Weg so, dass kein Pol innen liegt. Das Integral wird 0.',
        'Residuensatz: Umschließe bei 1/(z²+1) genau den Pol bei i. Vergleiche mit Res = 1/(2i) = −i/2.',
        'Argumentprinzip: Nimm z³ − 1 und umschließe alle drei Nullstellen. Wie oft laufen die Farben rund?',
        'Verzweigung: Lege beim Log den Weg um den Nullpunkt. Was passiert mit der Farbe auf der negativen reellen Achse?',
        'Frei: Bau eine Funktion mit 2 Nullstellen und 1 Pol im Weg und prüfe: Umläufe = N − P.',
      ],
    },
    ru: {
      hint: 'Цвет = аргумент f(z), яркость = модуль: нули тёмные, полюса светлые. Тяни круг (контур γ). В режиме «свободно» можно двигать нули (○) и полюса (●).',
      what: `<p>Каждая точка $z$ окрашена по $\\arg f(z)$: красный – положительная вещественная, дальше жёлтый, зелёный, синий … полный круг. Тонкие кольца – линии уровня $|f|$ (каждая ступень удваивает модуль).</p>
<p>Вокруг <b>нуля порядка k</b> цвета обходят круг k раз (против часовой стрелки), вокруг <b>полюса</b> – в обратную сторону. Это <b>принцип аргумента</b>: число оборотов цвета вдоль контура равно $\\frac{1}{2\\pi i}\\oint\\frac{f'}{f}\\,dz=N-P$.</p>
<p>Если $f$ голоморфна внутри, работает <b>Коши</b>: $\\oint f\\,dz=0$. Если внутри полюса, <b>теорема о вычетах</b> даёт $\\frac{1}{2\\pi i}\\oint f\\,dz=\\sum\\operatorname{Res}$. У $\\operatorname{Log}$ и $\\sqrt z$ виден разрез по отрицательной вещественной оси: там цвет прыгает.</p>`,
      tasks: [
        'Коши: выбери 1/(z²+1) и положи контур так, чтобы внутри не было полюса. Интеграл станет 0.',
        'Вычеты: у 1/(z²+1) охвати ровно полюс в i. Сравни с Res = 1/(2i) = −i/2.',
        'Принцип аргумента: возьми z³ − 1 и охвати все три нуля. Сколько раз обходят цвета?',
        'Ветвление: у Log обведи контуром начало координат. Что с цветом на отрицательной вещественной оси?',
        'Свободно: сделай функцию с 2 нулями и 1 полюсом внутри контура и проверь: обороты = N − P.',
      ],
    },
  },
  controls: [
    { k: 'f', type: 'seg', val: 2, label: { de: 'Funktion', ru: 'Функция' }, opts: [
      { v: 0, label: { de: 'z²', ru: 'z²' } }, { v: 1, label: { de: 'z³ − 1', ru: 'z³ − 1' } }, { v: 2, label: { de: '1/(z²+1)', ru: '1/(z²+1)' } },
      { v: 3, label: { de: '(z−1)/(z+1)', ru: '(z−1)/(z+1)' } }, { v: 4, label: { de: 'eᶻ', ru: 'eᶻ' } }, { v: 5, label: { de: 'sin z', ru: 'sin z' } },
      { v: 6, label: { de: 'Log z', ru: 'Log z' } }, { v: 7, label: { de: '√z', ru: '√z' } }, { v: 8, label: { de: 'frei', ru: 'свободно' } }] },
    { k: 'r', type: 'range', min: .2, max: 2.5, step: .01, val: .7, label: { de: 'Radius des Wegs', ru: 'Радиус контура' }, fmt: v => v.toFixed(2) },
    { k: 'zoom', type: 'range', min: 1.2, max: 6, step: .1, val: 2.4, label: { de: 'Ausschnitt ±', ru: 'Область ±' }, fmt: v => v.toFixed(1) },
    { k: 'lines', type: 'toggle', val: true, label: { de: 'Phasenlinien', ru: 'Линии фазы' } },
    { k: 'addz', type: 'button', label: { de: '+ Nullstelle', ru: '+ нуль' } },
    { k: 'addp', type: 'button', label: { de: '+ Pol', ru: '+ полюс' } },
  ],
  setup(api) {
    const { ctx, draw } = api, L = api.lang === 'ru';
    let C = { x: .2, y: .9 };              // centre of the contour
    let Z = [[-1, 0], [1, .3]], P = [[0, -.8]];   // free mode: zeros and poles
    let drag = null;
    // ---------- complex arithmetic ----------
    const mul = (a, b) => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
    const div = (a, b) => { const d = b[0] * b[0] + b[1] * b[1]; return [(a[0] * b[0] + a[1] * b[1]) / d, (a[1] * b[0] - a[0] * b[1]) / d]; };
    const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
    function f(z) {
      switch (api.v.f) {
        case 0: return mul(z, z);
        case 1: return sub(mul(mul(z, z), z), [1, 0]);
        case 2: return div([1, 0], [z[0] * z[0] - z[1] * z[1] + 1, 2 * z[0] * z[1]]);
        case 3: return div([z[0] - 1, z[1]], [z[0] + 1, z[1]]);
        case 4: { const e = Math.exp(z[0]); return [e * Math.cos(z[1]), e * Math.sin(z[1])]; }
        case 5: return [Math.sin(z[0]) * Math.cosh(z[1]), Math.cos(z[0]) * Math.sinh(z[1])];
        case 6: return [Math.log(Math.hypot(z[0], z[1])), Math.atan2(z[1], z[0])];
        case 7: { const r = Math.sqrt(Math.hypot(z[0], z[1])), t = Math.atan2(z[1], z[0]) / 2; return [r * Math.cos(t), r * Math.sin(t)]; }
        default: { let w = [1, 0]; for (const a of Z) w = mul(w, sub(z, a)); for (const b of P) w = div(w, sub(z, b)); return w; }
      }
    }
    function marks() {   // known zeros (k = order) and poles of each function, for markers and counting
      switch (api.v.f) {
        case 0: return { z: [[0, 0, 2]], p: [] };
        case 1: return { z: [0, 1, 2].map(k => [Math.cos(k * 2 * Math.PI / 3), Math.sin(k * 2 * Math.PI / 3), 1]), p: [] };
        case 2: return { z: [], p: [[0, 1, 1], [0, -1, 1]] };
        case 3: return { z: [[1, 0, 1]], p: [[-1, 0, 1]] };
        case 5: return { z: [-2, -1, 0, 1, 2].map(k => [k * Math.PI, 0, 1]), p: [] };
        case 8: return { z: Z.map(a => [a[0], a[1], 1]), p: P.map(b => [b[0], b[1], 1]) };
        default: return { z: [], p: [] };
      }
    }
    // ---------- view ----------
    const scale = () => api.v.zoom * 2 / api.H;          // complex units per px
    const toPx = (x, y) => [api.W / 2 + x / scale(), api.H / 2 - y / scale()];
    const toZ = (px, py) => [(px - api.W / 2) * scale(), -(py - api.H / 2) * scale()];
    // ---------- WebGL renderer (CPU fallback below) ----------
    const glcv = document.createElement('canvas');
    glcv.style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%';
    api.stage.insertBefore(glcv, api.cv);
    api.cv.style.position = 'relative';
    const gl = glcv.getContext('webgl', { antialias: false, preserveDrawingBuffer: true });
    let prog = null, U = {};
    const FS = `precision highp float;
uniform vec2 u_res; uniform float u_s; uniform int u_mode; uniform float u_lines;
uniform vec2 u_z[4]; uniform vec2 u_p[4]; uniform int u_nz; uniform int u_np;
vec2 cmul(vec2 a, vec2 b){ return vec2(a.x*b.x-a.y*b.y, a.x*b.y+a.y*b.x); }
vec2 cdiv(vec2 a, vec2 b){ float d = dot(b,b); return vec2(a.x*b.x+a.y*b.y, a.y*b.x-a.x*b.y)/d; }
float ch(float x){ return .5*(exp(x)+exp(-x)); } float sh(float x){ return .5*(exp(x)-exp(-x)); }
vec3 hsl(float h, float s, float l){ vec3 rgb = clamp(abs(mod(h*6.+vec3(0.,4.,2.),6.)-3.)-1., 0., 1.); return l + s*(rgb-.5)*(1.-abs(2.*l-1.)); }
void main(){
  vec2 z = (gl_FragCoord.xy - .5*u_res) * u_s;
  vec2 f;
  if (u_mode == 0) f = cmul(z,z);
  else if (u_mode == 1) f = cmul(cmul(z,z),z) - vec2(1.,0.);
  else if (u_mode == 2) f = cdiv(vec2(1.,0.), cmul(z,z) + vec2(1.,0.));
  else if (u_mode == 3) f = cdiv(z - vec2(1.,0.), z + vec2(1.,0.));
  else if (u_mode == 4) f = exp(z.x)*vec2(cos(z.y), sin(z.y));
  else if (u_mode == 5) f = vec2(sin(z.x)*ch(z.y), cos(z.x)*sh(z.y));
  else if (u_mode == 6) f = vec2(log(length(z)), atan(z.y, z.x));
  else if (u_mode == 7) { float r = sqrt(length(z)); float t = .5*atan(z.y, z.x); f = r*vec2(cos(t), sin(t)); }
  else { f = vec2(1.,0.);
    for (int i = 0; i < 4; i++) { if (i < u_nz) f = cmul(f, z - u_z[i]); }
    for (int i = 0; i < 4; i++) { if (i < u_np) f = cdiv(f, z - u_p[i]); } }
  float r = length(f);
  float h = fract(atan(f.y, f.x)/6.2831853 + 1.);
  float band = fract(log2(max(r, 1e-30)));
  float l = .07 + .86*(.63661977*atan(sqrt(r)));
  l *= .8 + .2*band;
  vec3 col = hsl(h, .82, l);
  float ph = fract(h*12.);
  col = mix(col, vec3(1.), u_lines*.22*smoothstep(.06, 0., min(ph, 1.-ph)));
  gl_FragColor = vec4(col, 1.);
}`;
    if (gl) {
      const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null; };
      const vs = sh(gl.VERTEX_SHADER, 'attribute vec2 a; void main(){ gl_Position = vec4(a,0.,1.); }'), fs = sh(gl.FRAGMENT_SHADER, FS);
      if (vs && fs) {
        prog = gl.createProgram(); gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog);
        if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) prog = null;
      }
      if (prog) {
        gl.useProgram(prog);
        const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
        const loc = gl.getAttribLocation(prog, 'a'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
        for (const n of ['u_res', 'u_s', 'u_mode', 'u_lines', 'u_z', 'u_p', 'u_nz', 'u_np']) U[n] = gl.getUniformLocation(prog, n);
      }
    }
    let dirty = true;
    function renderGL() {
      const dpr = api.dpr, w = Math.round(api.W * dpr), h = Math.round(api.H * dpr);
      if (glcv.width !== w || glcv.height !== h) { glcv.width = w; glcv.height = h; }
      gl.viewport(0, 0, w, h);
      gl.uniform2f(U.u_res, w, h); gl.uniform1f(U.u_s, scale() / dpr); gl.uniform1i(U.u_mode, api.v.f); gl.uniform1f(U.u_lines, api.v.lines ? 1 : 0);
      const pad = (arr) => { const a = new Float32Array(8); arr.slice(0, 4).forEach((p, i) => { a[2 * i] = p[0]; a[2 * i + 1] = p[1]; }); return a; };
      gl.uniform2fv(U.u_z, pad(Z)); gl.uniform2fv(U.u_p, pad(P)); gl.uniform1i(U.u_nz, Z.length); gl.uniform1i(U.u_np, P.length);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
    const cpu = document.createElement('canvas'), cctx = cpu.getContext('2d');
    function renderCPU() {   // slower fallback without WebGL: coarser pixels, same colours
      const st = 3, w = Math.ceil(api.W / st), h = Math.ceil(api.H / st);
      cpu.width = w; cpu.height = h;
      const img = cctx.createImageData(w, h);
      for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) {
        const v = f(toZ(i * st, j * st)), r = Math.hypot(v[0], v[1]);
        const hh = ((Math.atan2(v[1], v[0]) / (2 * Math.PI)) + 1) % 1;
        let l = .07 + .86 * (2 / Math.PI * Math.atan(Math.sqrt(r)));
        l *= .8 + .2 * (((Math.log2(Math.max(r, 1e-30)) % 1) + 1) % 1);
        const k = n => { const x = (n + hh * 12) % 12; return l - .82 * Math.min(l, 1 - l) * Math.max(-1, Math.min(x - 3, 9 - x, 1)); };
        const o = (j * w + i) * 4;
        img.data[o] = 255 * k(0); img.data[o + 1] = 255 * k(8); img.data[o + 2] = 255 * k(4); img.data[o + 3] = 255;
      }
      cctx.putImageData(img, 0, 0);
      glcv.width = 0;
    }
    // ---------- contour integrals ----------
    function contour() {
      const n = 2048, r = api.v.r;
      let I = [0, 0], wind = 0, prevArg = null;
      let prev = [C.x + r, C.y];
      for (let k = 1; k <= n; k++) {
        const a = k / n * 2 * Math.PI, z = [C.x + r * Math.cos(a), C.y + r * Math.sin(a)];
        const mid = [(z[0] + prev[0]) / 2, (z[1] + prev[1]) / 2], fv = f(mid), dz = sub(z, prev);
        const t = mul(fv, dz); I = [I[0] + t[0], I[1] + t[1]];
        const arg = Math.atan2(fv[1], fv[0]);
        if (prevArg !== null) { let d = arg - prevArg; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI; wind += d; }
        prevArg = arg; prev = z;
      }
      const res = div(I, [0, 2 * Math.PI]);   // (1/2πi) ∮ f dz
      const m = marks(), inside = p => Math.hypot(p[0] - C.x, p[1] - C.y) < r;
      const N = m.z.filter(inside).reduce((s, p) => s + p[2], 0), Pn = m.p.filter(inside).reduce((s, p) => s + p[2], 0);
      return { res, wind: wind / (2 * Math.PI), N, P: Pn, onMark: [...m.z, ...m.p].some(p => Math.abs(Math.hypot(p[0] - C.x, p[1] - C.y) - r) < .03) };
    }
    const fmtC = c => { const re = Math.abs(c[0]) < 5e-4 ? 0 : c[0], im = Math.abs(c[1]) < 5e-4 ? 0 : c[1];
      return `${re.toFixed(3)} ${im < 0 ? '−' : '+'} ${Math.abs(im).toFixed(3)} i`; };
    function hud() {
      const c = contour();
      if (c.onMark) { api.hud(L ? 'Контур проходит через особую точку' : 'Der Weg läuft durch einen Pol / eine Nullstelle'); return c; }
      api.hud(`(1/2πi)∮<sub>γ</sub> f dz = <span class="g">${fmtC(c.res)}</span><br><span class="k">${L ? 'обороты цвета' : 'Farbumläufe'}:</span> <span class="g">${c.wind.toFixed(2)}</span>` +
        ([6, 7, 4].includes(api.v.f) ? '' : ` · N = ${c.N}, P = ${c.P}`));
      return c;
    }
    function checks(c) {
      if (c.onMark) return;
      const m = marks(), inside = p => Math.hypot(p[0] - C.x, p[1] - C.y) < api.v.r;
      if (api.v.f === 2 && !m.p.some(inside) && Math.hypot(c.res[0], c.res[1]) < 1e-3) api.check(0);
      if (api.v.f === 2 && inside([0, 1]) && !inside([0, -1])) api.check(1);
      if (api.v.f === 1 && Math.round(c.wind) === 3) api.check(2);
      if (api.v.f === 6 && Math.hypot(C.x, C.y) < api.v.r) api.check(3);
      if (api.v.f === 8 && c.N === 2 && c.P === 1 && Math.round(c.wind) === 1) api.check(4);
    }
    let last = hud();
    return {
      change(k) { dirty = true; last = hud(); checks(last); },
      action(k) {
        if (api.v.f !== 8) { api.set('f', 8); }
        const pick = () => [(Math.random() - .5) * 2 * api.v.zoom * .6, (Math.random() - .5) * 2 * api.v.zoom * .6];
        if (k === 'addz' && Z.length < 4) Z.push(pick());
        if (k === 'addp' && P.length < 4) P.push(pick());
        dirty = true; last = hud(); checks(last);
      },
      resize() { dirty = true; },
      down(px, py) {
        const z = toZ(px, py), s = scale();
        if (api.v.f === 8) {
          const zi = Z.findIndex(a => Math.hypot(a[0] - z[0], a[1] - z[1]) / s < 18);
          if (zi >= 0) { drag = { arr: Z, i: zi }; return; }
          const pi = P.findIndex(b => Math.hypot(b[0] - z[0], b[1] - z[1]) / s < 18);
          if (pi >= 0) { drag = { arr: P, i: pi }; return; }
        }
        drag = { c: true, dx: C.x - z[0], dy: C.y - z[1] };
        if (Math.hypot(C.x - z[0], C.y - z[1]) > api.v.r * 1.2) { C = { x: z[0], y: z[1] }; drag.dx = drag.dy = 0; last = hud(); }
      },
      move(px, py, isDown) {
        if (!isDown || !drag) return;
        const z = toZ(px, py);
        if (drag.c) C = { x: z[0] + drag.dx, y: z[1] + drag.dy };
        else { drag.arr[drag.i] = z; dirty = true; }
        last = hud();
      },
      up() { drag = null; checks(last); },
      dbl(px, py) {
        if (api.v.f !== 8) return;
        const z = toZ(px, py), s = scale();
        for (const arr of [Z, P]) {
          const i = arr.findIndex(a => Math.hypot(a[0] - z[0], a[1] - z[1]) / s < 18);
          if (i >= 0 && Z.length + P.length > 1) { arr.splice(i, 1); dirty = true; drag = null; last = hud(); return; }
        }
      },
      frame(dt, t) {
        const W = api.W, H = api.H;
        if (dirty || drag) { if (prog) renderGL(); else renderCPU(); dirty = false; }
        ctx.clearRect(0, 0, W, H);
        if (!prog) { ctx.imageSmoothingEnabled = true; ctx.drawImage(cpu, 0, 0, W, H); }
        // axes with integer ticks
        const [ox, oy] = toPx(0, 0);
        ctx.strokeStyle = 'rgba(255,255,255,.45)'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(0, oy); ctx.lineTo(W, oy); ctx.moveTo(ox, 0); ctx.lineTo(ox, H); ctx.stroke();
        for (let k = -6; k <= 6; k++) {
          if (!k) continue;
          const [x] = toPx(k, 0), [, y] = toPx(0, k);
          ctx.beginPath(); ctx.moveTo(x, oy - 4); ctx.lineTo(x, oy + 4); ctx.moveTo(ox - 4, y); ctx.lineTo(ox + 4, y); ctx.stroke();
          if (Math.abs(k) <= 3) { draw.text(ctx, String(k), x, oy + 12, 'rgba(255,255,255,.75)', 10, 'center'); draw.text(ctx, k + 'i', ox + 8, y, 'rgba(255,255,255,.75)', 10); }
        }
        draw.text(ctx, 'Re', W - 22, oy - 10, 'rgba(255,255,255,.8)', 11); draw.text(ctx, 'Im', ox + 8, 12, 'rgba(255,255,255,.8)', 11);
        // zeros (○) and poles (●)
        const m = marks();
        for (const [x, y, k] of m.z) { const [px, py] = toPx(x, y); ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(px, py, 7, 0, 7); ctx.stroke(); if (k > 1) draw.text(ctx, '×' + k, px + 9, py - 8, '#fff', 10); }
        for (const [x, y] of m.p) { const [px, py] = toPx(x, y); ctx.fillStyle = '#05040f'; ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(px, py, 7, 0, 7); ctx.fill(); ctx.stroke(); }
        // the contour γ, counter-clockwise, with moving arrows
        const [cx, cy] = toPx(C.x, C.y), R = api.v.r / scale();
        ctx.strokeStyle = 'rgba(5,4,15,.55)'; ctx.lineWidth = 6; ctx.beginPath(); ctx.arc(cx, cy, R, 0, 7); ctx.stroke();
        ctx.strokeStyle = 'rgba(255,255,255,.95)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(cx, cy, R, 0, 7); ctx.stroke();
        ctx.fillStyle = '#fff';
        for (let k = 0; k < 4; k++) {
          const a = k * Math.PI / 2 + t * .6, x = cx + R * Math.cos(a), y = cy - R * Math.sin(a);
          const tx = -Math.sin(a), ty = -Math.cos(a);   // counter-clockwise on screen (y down)
          ctx.beginPath(); ctx.moveTo(x + tx * 7, y + ty * 7); ctx.lineTo(x - tx * 4 + ty * 5, y - ty * 4 - tx * 5); ctx.lineTo(x - tx * 4 - ty * 5, y - ty * 4 + tx * 5); ctx.closePath(); ctx.fill();
        }
        draw.text(ctx, 'γ', cx + R * .72 + 6, cy - R * .72 - 6, '#fff', 15, 'center');
      },
      destroy() { glcv.remove(); },
    };
  },
});
