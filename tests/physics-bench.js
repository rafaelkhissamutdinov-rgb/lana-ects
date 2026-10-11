// Physics test bench: each experiment's internals against independent textbook formulas.
const { chromium } = require('playwright');
let fails = 0, n = 0;
const near = (a, b, tol, msg) => { n++; const ok = Math.abs(a - b) <= tol; if (!ok) fails++; console.log((ok ? 'ok  ' : 'FAIL') + ' ' + msg + `  (got ${(+a).toPrecision(6)}, want ${(+b).toPrecision(6)})`); };
const truthy = (c, msg) => { n++; if (!c) fails++; console.log((c ? 'ok  ' : 'FAIL') + ' ' + msg); };
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--use-gl=swiftshader', '--enable-webgl', '--ignore-gpu-blocklist'] });
  const p = await (await b.newContext({ viewport: { width: 420, height: 900 }, serviceWorkers: 'block' })).newPage();
  p.on('pageerror', e => { fails++; console.log('PAGEERR', e.message); });
  await p.goto('http://127.0.0.1:8770/physik-beta/');
  const open = async id => { await p.evaluate(id => go({ id: 'sim', sim: id }), id); await p.waitForFunction(() => typeof simInst !== 'undefined' && simInst && simInst.probe()); };
  const ev = (fn, arg) => p.evaluate(fn, arg);

  // ---------- Feldlinien: Coulomb superposition, zero of the field, line topology ----------
  await open('feld');
  let r = await ev(() => { const P = simInst.probe(); P.set([[-.5, 0, 1], [.5, 0, -1]]);
    const [ex, ey, phi] = P.field(.2, .3); return { ex, ey, phi }; });
  { // independent: E = Σ q r̂ / r², φ = Σ q / r
    let ex = 0, ey = 0, phi = 0;
    for (const [x, y, q] of [[-.5, 0, 1], [.5, 0, -1]]) { const dx = .2 - x, dy = .3 - y, d = Math.hypot(dx, dy); ex += q * dx / d ** 3; ey += q * dy / d ** 3; phi += q / d; }
    near(r.ex, ex, 1e-4, 'Feld: E_x of a dipole = Coulomb sum'); near(r.ey, ey, 1e-4, 'Feld: E_y of a dipole = Coulomb sum'); near(r.phi, phi, 1e-4, 'Feld: potential = Σ q/r');
  }
  r = await ev(() => { const P = simInst.probe(); P.set([[-.5, 0, 1], [.5, 0, 1]]); return P.findNull(.05, .04); });
  near(Math.hypot(r[0], r[1]), 0, 1e-5, 'Feld: two equal charges – field vanishes exactly in the middle');
  r = await ev(() => { const P = simInst.probe(); P.set([[-.5, 0, 2], [.5, 0, 1]]); return P.findNull(.1, 0); });
  { const xs = (-.5 + Math.SQRT2 * .5) / (1 + Math.SQRT2) * 0 + (.5 - 1 / (1 + Math.SQRT2)) ; // q1=2 at -.5, q2=1 at .5: zero where 2/(x+.5)² = 1/(.5-x)²
    const x0 = .5 - 1 / (1 + Math.SQRT2); near(r[0], x0, 1e-5, 'Feld: zero for charges 2q and q at the analytic point (closer to the smaller charge)'); }
  r = await ev(() => { const P = simInst.probe(); P.set([[-.5, 0, 1], [.5, 0, -1]]); P.computeLines();
    const L = P.lines(); const ends = L.map(l => l[l.length - 1]); return { n: L.length, onNeg: ends.filter(e => Math.hypot(e[0] - .5, e[1]) < 1e-6).length }; });
  truthy(r.n >= 12 && r.onNeg >= 8, `Feld: dipole – most of the ${r.n} lines start at + and end at − (${r.onNeg})`);

  // ---------- Brechung: Snell and Fresnel ----------
  await open('brechung');
  for (const [a, n1, n2] of [[30, 1, 1.5], [60, 1.5, 1], [56.31, 1, 1.5], [10, 1.33, 2.2]]) {
    r = await ev(([a, n1, n2]) => { const P = simInst.probe(); simInst.api.v.a = a; simInst.api.v.n1 = n1; simInst.api.v.n2 = n2; simInst.api.v.pol = 'u'; return P.optics(); }, [a, n1, n2]);
    const A = a * Math.PI / 180, s = n1 / n2 * Math.sin(A);
    if (s > 1) truthy(r.tir && r.R === 1, `Brechung: ${n1}→${n2} at ${a}°: total internal reflection`);
    else {
      const B = Math.asin(s), ca = Math.cos(A), cb = Math.cos(B);
      const Rs = ((n1 * ca - n2 * cb) / (n1 * ca + n2 * cb)) ** 2, Rp = ((n1 * cb - n2 * ca) / (n1 * cb + n2 * ca)) ** 2;
      near(r.b, B, 1e-9, `Brechung: Snell β for ${n1}→${n2} at ${a}°`);
      near(r.Rs, Rs, 1e-9, `Brechung: Fresnel R_s at ${a}°`); near(r.Rp, Rp, 1e-9, `Brechung: Fresnel R_p at ${a}°`);
    }
  }
  r = await ev(() => { const o = simInst.probe().fresnel(Math.atan(1.5), 1, 1.5); return o[1]; });
  near(r, 0, 1e-12, 'Brechung: R_p = 0 exactly at tan α_B = n₂/n₁');
  r = await ev(() => { const P = simInst.probe(); return P.fresnel(0, 1, 1.5)[0]; });
  near(r, ((1.5 - 1) / 2.5) ** 2, 1e-12, 'Brechung: normal incidence R = ((n₂−n₁)/(n₂+n₁))² = 4 %');

  // ---------- Spalt: Fraunhofer minima and maxima ----------
  await open('spalt');
  r = await ev(() => { const v = simInst.api.v; v.mode = 1; v.lam = 530; v.b = 1.2; const P = simInst.probe(); return [P.intensity(.53 / 1.2), P.intensity(0), P.intensity(2 * .53 / 1.2)]; });
  near(r[0], 0, 1e-12, 'Spalt: single slit – first minimum at sin θ = λ/b'); near(r[1], 1, 1e-12, 'Spalt: central maximum normalised to 1'); near(r[2], 0, 1e-12, 'Spalt: second minimum at 2λ/b');
  r = await ev(() => { const v = simInst.api.v; v.mode = 2; v.lam = 530; v.b = 1.2; v.d = 3.6; const P = simInst.probe(); return [P.intensity(.53 / 3.6), P.intensity(.53 / 7.2), P.intensity(3 * .53 / 3.6)]; });
  { const be = Math.PI * 1.2 * (.53 / 3.6) / .53, env = (Math.sin(be) / be) ** 2;
    near(r[0], env, 1e-9, 'Spalt: double slit – 1st order maximum at d sin θ = λ (height = single-slit envelope)');
    near(r[1], 0, 1e-12, 'Spalt: double slit – dark fringe at d sin θ = λ/2');
    near(r[2], 0, 1e-9, 'Spalt: d = 3b – the 3rd order is missing (falls on a single-slit minimum)'); }
  r = await ev(() => { const v = simInst.api.v; v.mode = 4; v.lam = 600; v.b = .8; v.d = 3; const P = simInst.probe(); return [P.intensity(.6 / 3), P.intensity(.6 / 12)]; });
  { const be = Math.PI * .8 * .2 / .6; near(r[0], (Math.sin(be) / be) ** 2, 1e-9, 'Spalt: grating N=4 – main maximum keeps the envelope height'); near(r[1], 0, 1e-12, 'Spalt: grating N=4 – zero at d sin θ = λ/N'); }

  // ---------- Lorentz: radius from the real trajectory ----------
  await open('lorentz');
  r = await ev(async () => {
    const P = simInst.probe(), v = simInst.api.v; v.v = 1.6; v.B = 1; v.out = true;
    P.launch('p'); const part = P.parts()[P.parts().length - 1];
    const y0 = part.y; await new Promise(res => { const t = setInterval(() => { if (part.hit !== null) { clearInterval(t); res(); } }, 50); setTimeout(() => { clearInterval(t); res(); }, 12000); });
    return { dy: part.hit - y0, r: part.r, speed: Math.hypot(part.vx, part.vy) };
  });
  near(r.dy, 2 * r.r, 2 * r.r * .01, 'Lorentz: proton lands at distance 2r = 2mv/(qB) (from the integrated orbit, 1 %)');
  near(r.speed, 1.6, 1e-9, 'Lorentz: the magnetic force does no work – speed stays exactly v');
  r = await ev(() => { const S = simInst.probe().SPECIES; return [S.d.m / S.d.q, S.a.m / S.a.q]; });
  near(r[0], r[1], 0, 'Lorentz: deuteron and α have the same m/q → same orbit');

  // ---------- Komplexe Funktionen: residues, Cauchy, argument principle ----------
  await open('domain');
  const res = async (f, cx, cy, rad) => ev(([f, cx, cy, rad]) => { const v = simInst.api.v; v.f = f; v.r = rad; const P = simInst.probe(); P.setC(cx, cy); return P.contour(); }, [f, cx, cy, rad]);
  r = await res(2, 0, 1, .5); near(r.res[0], 0, 1e-6, 'Komplex: 1/(z²+1) around i – Re of (1/2πi)∮ = Re Res'); near(r.res[1], -.5, 1e-6, 'Komplex: Res_{z=i} 1/(z²+1) = 1/(2i) = −i/2');
  r = await res(2, 0, 0, 2); near(Math.hypot(...r.res), 0, 1e-6, 'Komplex: both poles inside – residues ±i/2 cancel');
  r = await res(2, 1.5, 0, .6); near(Math.hypot(...r.res), 0, 1e-6, 'Komplex: no pole inside – Cauchy: ∮ f dz = 0');
  r = await res(1, 0, 0, 1.6); near(r.wind, 3, 1e-6, 'Komplex: z³−1, three zeros inside – argument principle gives 3');
  r = await res(3, 0, 0, 2); near(r.wind, 0, 1e-6, 'Komplex: (z−1)/(z+1), one zero and one pole inside – winding 0');
  r = await res(6, 0, 0, .8); near(r.res[0], -.8, 1e-5, 'Komplex: principal Log around 0 – (1/2πi)∮ Log z dz = −r (branch cut)');
  r = await res(5, 0, 0, 3.5); near(r.wind, 3, 1e-6, 'Komplex: sin z inside |z|<3.5 has 3 zeros (−π, 0, π)');

  // ---------- Fourier: coefficients from the integral, Gibbs ----------
  await open('epizykel');
  r = await ev(() => { const P = simInst.probe(), v = simInst.api.v, out = {};
    for (const m of ['rechteck', 'saege', 'dreieck']) { v.mode = m; const T = P.waveTerms(6); out[m] = T.map(t => [t.n, t.b]);
      out[m + '_num'] = T.map(t => { let s = 0; const N = 20000; for (let i = 0; i < N; i++) { const x = (i + .5) / N; s += P.waveTrue(x) * Math.sin(2 * Math.PI * t.n * x); } return 2 * s / N; }); }
    v.mode = 'rechteck'; const T = P.waveTerms(400); let mx = 0;
    for (let i = 1; i < 4000; i++) { const t = i / 4000 * .02, s = T.reduce((a, c) => a + c.b * Math.sin(2 * Math.PI * c.n * t), 0); if (s > mx) mx = s; }
    out.gibbs = (mx - 1) / 2; return out; });
  for (const m of ['rechteck', 'saege', 'dreieck']) r[m].forEach(([n, b], i) => near(b, r[m + '_num'][i], 2e-3, `Fourier: ${m} b_${n} = 2∫ f(t) sin(2πnt) dt`));
  near(r.gibbs, .0895, .002, 'Fourier: Gibbs overshoot ≈ 8.95 % of the jump (400 terms)');
  r = await ev(() => { const P = simInst.probe(), pts = P.shape('stern'), C = P.dft(pts); let err = 0;
    pts.forEach((p, n) => { let x = 0, y = 0; for (const c of C) { const a = 2 * Math.PI * c.k * n / pts.length; x += c.re * Math.cos(a) - c.im * Math.sin(a); y += c.re * Math.sin(a) + c.im * Math.cos(a); } err = Math.max(err, Math.hypot(x - p[0], y - p[1])); }); return err; });
  near(r, 0, .02, 'Fourier: all circles together redraw the star (inverse DFT)');

  // ---------- Minkowski: Lorentz transformation ----------
  await open('minkowski');
  r = await ev(() => { simInst.api.v.b = .6; const P = simInst.probe(); return { g: P.gam(), e: P.lor({ x: 2, t: .5 }), e2: P.lor({ x: 1.3, t: 2.1 }) }; });
  near(r.g, 1.25, 1e-12, 'Minkowski: γ(0.6) = 1.25');
  near(r.e.x, 1.25 * (2 - .6 * .5), 1e-12, "Minkowski: x' = γ(x − βct)"); near(r.e.t, 1.25 * (.5 - .6 * 2), 1e-12, "Minkowski: ct' = γ(ct − βx)");
  near(r.e2.t ** 2 - r.e2.x ** 2, 2.1 ** 2 - 1.3 ** 2, 1e-12, 'Minkowski: interval s² is invariant');
  r = await ev(() => { simInst.api.v.b = .6; const P = simInst.probe(), g = P.gam(); return P.lor({ x: .6 * g, t: g }); });
  near(r.x, 0, 1e-12, "Minkowski: the tick ct' = 1 of the moving clock sits on its own axis x' = 0"); near(r.t, 1, 1e-12, "Minkowski: … and at ct = γ (time dilation)");

  // ---------- Linse ----------
  await open('linse');
  for (const [f, g] of [[1.5, 4], [1.5, 1], [-1.5, 3], [2, 4]]) {
    r = await ev(([f, g]) => { const v = simInst.api.v; v.f = f; v.g = g; return simInst.probe().image(); }, [f, g]);
    near(1 / r.f, 1 / r.g + 1 / r.b, 1e-12, `Linse: 1/f = 1/g + 1/b for f=${f}, g=${g}`); near(r.V, -r.b / r.g, 1e-12, `Linse: V = −b/g for f=${f}, g=${g}`);
  }

  // ---------- Saite: sine coefficients, heat decay, d'Alembert ----------
  await open('saite');
  r = await ev(() => { const P = simInst.probe(); simInst.api.v.pre = 'mode2'; P.preset('mode2'); return P.b().slice(0, 4); });
  near(r[0], 0, 1e-6, 'Saite: sin(2x) – b₁ = 0'); near(r[1], 1, 1e-6, 'Saite: sin(2x) – b₂ = 1'); near(r[2], 0, 1e-6, 'Saite: sin(2x) – b₃ = 0');
  r = await ev(() => { const P = simInst.probe(), v = simInst.api.v; v.eq = 'heat'; P.preset('mode2'); P.setT(.3); return P.amp(2); });
  near(r, Math.exp(-4 * .3), 1e-6, 'Saite: heat equation – mode n decays like e^{−n² t}');
  r = await ev(() => { const P = simInst.probe(), v = simInst.api.v; v.eq = 'wave'; v.pre = 'puls'; P.preset('puls'); const t = .5; P.setT(t);
    const u0 = P.u0(), S = P.S, X = i => i / S * Math.PI;
    const ext = x => { let y = ((x % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI), s = 1; if (y > Math.PI) { y = 2 * Math.PI - y; s = -1; } const i = Math.round(y / Math.PI * S); return s * u0[i]; };
    let err = 0; for (const x of [.4, .7, 1.2, 1.7, 2.2, 2.8]) { let u = 0; for (let n = 1; n <= P.NM; n++) u += P.amp(n) * Math.sin(n * x); err = Math.max(err, Math.abs(u - (ext(x - t) + ext(x + t)) / 2)); }
    return err; });
  near(r, 0, .02, "Saite: wave equation solution = d'Alembert (u0(x−t)+u0(x+t))/2 with odd extension (60 modes)");

  // ---------- Schwingkreis ----------
  await open('kreis');
  r = await ev(() => { const v = simInst.api.v; v.R = 20; v.L = 100; v.C = 10; v.lf = Math.log10(100); return simInst.probe().circuit(); });
  { const w = 2 * Math.PI * 100, X = w * .1 - 1 / (w * 1e-5), Z = Math.hypot(20, X);
    near(r.I, 10 / Z, 1e-12, 'Kreis: I₀ = U₀/|Z|'); near(r.phi, Math.atan2(X, 20), 1e-12, 'Kreis: φ = arctan((ωL − 1/ωC)/R)');
    near(Math.hypot(r.UR, r.UL - r.UC), 10, 1e-9, 'Kreis: phasors close: U_R + U_L + U_C = U');
    near(r.f0, 1 / (2 * Math.PI * Math.sqrt(.1 * 1e-5)), 1e-9, 'Kreis: f₀ = 1/(2π√LC)'); }
  r = await ev(() => { const P = simInst.probe(), c0 = P.circuit(); return { r: P.circuit(c0.f0), Q: c0.Q }; });
  near(r.r.UL, r.Q * 10, 1e-6, 'Kreis: at resonance U_L = Q·U₀');

  // ---------- Faltung ----------
  await open('faltung');
  r = await ev(() => { const v = simInst.api.v; v.f = 'rect'; v.g = 'rect'; const P = simInst.probe(); return [P.convAt(0), P.convAt(1), P.convAt(2.5)]; });
  near(r[0], .5, 2e-3, 'Faltung: rect∗rect at 0 = ∫ ½·½ over [−1,1] = ½'); near(r[1], .25, 2e-3, 'Faltung: rect∗rect is a triangle (value ¼ at x = 1)'); near(r[2], 0, 1e-9, 'Faltung: rect∗rect vanishes for |x| > 2');
  r = await ev(() => { const v = simInst.api.v; v.f = 'gauss'; v.g = 'gauss'; return simInst.probe().convAt(0); });
  near(r, 1 / Math.sqrt(2 * Math.PI * .5), 2e-3, 'Faltung: Gauss∗Gauss is a Gauss with σ² = σ₁² + σ₂²');
  r = await ev(() => { const v = simInst.api.v; v.f = 'rect'; v.g = 'delta'; v.eps = .03; return [simInst.probe().convAt(.5), simInst.probe().convAt(1.5)]; });
  near(r[0], .5, 2e-3, 'Faltung: f∗δ_ε → f inside the box'); near(r[1], 0, 2e-3, 'Faltung: f∗δ_ε → f outside the box');
  r = await ev(() => { const v = simInst.api.v; v.f = 'exp'; v.g = 'rect'; return simInst.probe().convAt(.5); });
  near(r, .5 * (1 - Math.exp(-1.5)), 3e-3, 'Faltung: e^{−t}H(t) ∗ rect, analytic value at x = ½');

  await b.close();
  console.log(`\n${n - fails} / ${n} checks passed` + (fails ? `, ${fails} FAILED` : ''));
})();
