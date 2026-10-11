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
