// Core of "Physik heute": storage, language, lazy loading and the screen router.
// The app is split into plain scripts that share one global scope; this one loads first.

// ---------- storage (every access may fail in private mode, so it is wrapped) ----------
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
  del(k) { try { localStorage.removeItem(k); } catch (e) {} },
};

// ---------- link parameters ----------
const params = new URLSearchParams(location.search);
// optional personal link: ?name=Lana → "Guten Morgen, Lana!"; short codes keep the name out of the link: ?L → Lana
const SHORT_NAMES = { L: 'Lana' };
const short = Object.keys(SHORT_NAMES).find(k => params.has(k));
const NAME = short ? SHORT_NAMES[short] : (params.get('name') || '').trim().slice(0, 30);
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- language of the study sections (DE / RU) ----------
let anaLang = store.get('ana3-lang', 'de');
function setLang(l) { anaLang = l; store.set('ana3-lang', l); }
function langSwitch() {
  return `<div class="lang" role="group" aria-label="Sprache / Язык">` +
    ['de', 'ru'].map(l => `<button type="button" data-lang="${l}" aria-pressed="${anaLang === l}">${l.toUpperCase()}</button>`).join('') + `</div>`;
}
function wireLang(root, rerender) {
  root.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => { setLang(b.dataset.lang); rerender(); }));
}

// ---------- lazy loading ----------
const loaded = {};
function loadScript(src) {
  if (!loaded[src]) {
    loaded[src] = new Promise((res, rej) => {
      const s = document.createElement('script');
      s.src = src; s.onload = res; s.onerror = rej;
      document.head.appendChild(s);
    });
    loaded[src].catch(() => { delete loaded[src]; });
  }
  return loaded[src];
}
function loadKaTeX() {
  if (window.renderMathInElement) return Promise.resolve();
  if (!document.querySelector('link[href="katex/katex.min.css"]')) {
    const css = document.createElement('link');
    css.rel = 'stylesheet'; css.href = 'katex/katex.min.css';
    document.head.appendChild(css);
  }
  return loadScript('katex/katex.min.js').then(() => loadScript('katex/auto-render.min.js'));
}
function tex(el) {
  if (window.renderMathInElement) renderMathInElement(el, {
    delimiters: [{ left: '$$', right: '$$', display: true }, { left: '$', right: '$', display: false }],
    throwOnError: false,
  });
}
const loadFailed = () => anaLang === 'ru' ? 'Не удалось загрузить. Обнови страницу.' : 'Konnte nicht laden. Bitte Seite neu laden.';

// ---------- icons (line icons from the sprite in index.html) ----------
const ic = (name, cls = '') => `<svg class="ic ${cls}" aria-hidden="true"><use href="#i-${name}"/></svg>`;

// ---------- topic glyphs: a mathematical sign for every topic instead of an emoji ----------
const GLYPH = {
  // Analysis 3
  toolkit: '✓', holo: '∂', curve: '∫<sub>γ</sub>', cauchy: '∮', cif: 'f(a)', series: '∑', log: 'log', sing: 'z⁻¹', res: 'Res',
  realint: '∫<sub>ℝ</sub>', leb: 'μ', fourier: 'ℱ', conv: '∗', schwartz: '𝒮', distr: 'δ', dderiv: 'δ′', fund: 'G',
  three: '□', sep: 'X·T', laplace: 'Δ', weak: 'H¹', heat: '∂<sub>t</sub>', wave: '∂²<sub>t</sub>', hilbert: 'ℋ', onb: '⊥',
  ops: 'A*', spec: 'σ', spthm: 'f(A)', qm: 'ψ', unb: 'D(A)',
  // Analysis 3 parts
  'ana-0': 'ℂ', 'ana-1': 'ℱ', 'ana-2': 'Δ', 'ana-3': 'ℋ',
  // Experimentalphysik II topics
  'e2-estat': 'E', 'e2-strom': 'I', 'e2-magnet': 'B', 'e2-induktion': 'Φ', 'e2-maxwell': '∇', 'e2-optik': 'n',
  'e2-wellenoptik': 'λ', 'e2-rel': 'γ', 'e2-extra': '∑',
};
const glyph = (key, cls = '') => `<span class="glyph ${cls}" aria-hidden="true">${GLYPH[key] || '·'}</span>`;

// ---------- router ----------
// Every screen registers itself: route(id, { enter(state), leave(), scene }).
// show() leaves the old screen, enters the new one and switches the background scene.
const ROUTES = {};
function route(id, r) { ROUTES[id] = r; }
let currentScreen = null;
const screenHooks = [];   // callbacks (id, state) run after every screen change
function show(state) {
  const id = state.id;
  const prev = currentScreen;
  if (prev && ROUTES[prev] && ROUTES[prev].leave) ROUTES[prev].leave(id);
  currentScreen = id;
  const r = ROUTES[id] || {};
  if (r.enter) r.enter(state);
  document.querySelectorAll('.screen').forEach(s => s.classList.toggle('active', s.id === id));
  document.querySelectorAll('.scene').forEach(sc => sc.classList.toggle('on', sc.id === r.scene));
  document.body.dataset.screen = id;
  screenHooks.forEach(h => h(id, state));
  scrollTo(0, 0);
}
function go(state) {
  show(state);
  const tag = state.sim || (Array.isArray(state.topic) ? 'review' : state.topic) || state.fach || state.id;
  history.pushState(state, '', '#' + tag);
}

// ---------- the sky dock: every learned item flies up into the observatory ----------
const skyDock = (() => {
  const b = document.createElement('button');
  b.type = 'button'; b.className = 'sky-dock'; b.hidden = true;
  b.setAttribute('aria-label', 'Sternwarte');
  b.innerHTML = ic('telescope') + '<b hidden></b>';
  b.addEventListener('click', () => go({ id: 'stern' }));
  document.body.appendChild(b);
  return b;
})();
const DOCK_SCREENS = ['faecher', 'e2', 'e2t', 'e2k', 'ana3', 'thema'];
// stars lit since the last visit of the observatory
function newStars() {
  const seen = store.get('sky-seen', 0);
  return Object.values(memLogData).filter(m => m.t > seen && m.n > 0).length;
}
function updateDock() {
  const n = newStars(), badge = skyDock.querySelector('b');
  badge.hidden = !n; badge.textContent = n > 99 ? '99+' : n;
}
screenHooks.push(id => { skyDock.hidden = !DOCK_SCREENS.includes(id); if (!skyDock.hidden) updateDock(); });
function flyStar(from) {
  if (reduceMotion || skyDock.hidden || !from) { setTimeout(updateDock, 0); return; }
  const a = from.getBoundingClientRect(), d = skyDock.getBoundingClientRect();
  const x0 = a.left + a.width / 2, y0 = a.top + a.height / 2, x1 = d.left + d.width / 2, y1 = d.top + d.height / 2;
  const cx = x0 + (x1 - x0) * .2, cy = Math.min(y0, y1) - 120;   // control point: the star arcs upwards
  const frames = [];
  for (let i = 0; i <= 16; i++) {
    const t = i / 16, u = 1 - t;
    const x = u * u * x0 + 2 * u * t * cx + t * t * x1, y = u * u * y0 + 2 * u * t * cy + t * t * y1;
    frames.push({ transform: `translate(${x}px, ${y}px) scale(${1 + Math.sin(t * Math.PI) * 1.4})`, opacity: t < .9 ? 1 : 0 });
  }
  const s = document.createElement('div');
  s.className = 'fly-star';
  document.body.appendChild(s);
  s.animate(frames, { duration: 950, easing: 'cubic-bezier(.45,.05,.35,1)' }).onfinish = () => {
    s.remove();
    skyDock.classList.remove('ping'); void skyDock.offsetWidth; skyDock.classList.add('ping');
    updateDock();
  };
}
