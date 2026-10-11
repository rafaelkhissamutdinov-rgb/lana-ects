// ---------- Experimente: interactive simulations (the heavy code lives in sims.js, loaded on demand) ----------
// SIM_META lists every experiment with the cards and topics it belongs to, so cards can link to it.
const SIM_META = [
  { id: 'feld', glyph: 'E', t: { de: 'Feldlinien & Gauß', ru: 'Силовые линии и Гаусс' },
    sub: { de: 'Ladungen ziehen, Feld und Potential sehen, Fluss durch eine Fläche', ru: 'Двигай заряды, смотри поле, потенциал и поток' },
    cards: ['coulomb', 'superpos', 'feldlinien', 'gauss', 'gaussfalle', 'potential', 'platte'], topics: [], n: 4 },
  { id: 'brechung', glyph: 'n', t: { de: 'Brechung & Brewster', ru: 'Преломление и Брюстер' },
    sub: { de: 'Snellius, Totalreflexion und Polarisation am Lichtstrahl', ru: 'Снеллиус, полное отражение и поляризация' },
    cards: ['snellius', 'total', 'reflexion', 'brewster'], topics: [], n: 4 },
  { id: 'spalt', glyph: 'λ', t: { de: 'Spalt & Doppelspalt', ru: 'Щель и две щели' },
    sub: { de: 'Wellen überlagern sich – das Muster auf dem Schirm live', ru: 'Волны складываются – картина на экране вживую' },
    cards: ['spalt', 'phasendiff', 'michelson'], topics: [], n: 4 },
  { id: 'lorentz', glyph: 'B', t: { de: 'Teilchen im Magnetfeld', ru: 'Частица в магнитном поле' },
    sub: { de: 'Lorentzkraft: Kreisbahn, Radius r = mv/(qB)', ru: 'Сила Лоренца: окружность, радиус r = mv/(qB)' },
    cards: ['lorentz', 'ablenkung'], topics: [], n: 4 },
  { id: 'domain', glyph: 'ℂ', t: { de: 'Komplexe Funktionen in Farbe', ru: 'Комплексные функции в цвете' },
    sub: { de: 'Nullstellen, Pole, Verzweigungsschnitte – und ein Weg, der Residuen zählt', ru: 'Нули, полюса, разрезы – и контур, считающий вычеты' },
    cards: [], topics: ['holo', 'sing', 'res', 'log', 'cauchy', 'cif', 'realint', 'series'], n: 5 },
  { id: 'epizykel', glyph: 'ℱ', t: { de: 'Fourier-Epizykel', ru: 'Эпициклы Фурье' },
    sub: { de: 'Zeichne eine Figur – Kreise auf Kreisen zeichnen sie nach', ru: 'Нарисуй фигуру – круги на кругах повторят её' },
    cards: ['komplex'], topics: ['fourier', 'onb'] },
  { id: 'minkowski', glyph: 'γ', t: { de: 'Minkowski-Diagramm', ru: 'Диаграмма Минковского' },
    sub: { de: 'Achsen kippen, Gleichzeitigkeit kippt mit', ru: 'Оси наклоняются – и одновременность вместе с ними' },
    cards: ['minkowski', 'lorentztrafo', 'dilatation', 'gamma', 'addition'], topics: [] },
  { id: 'linse', glyph: 'f', t: { de: 'Linse: Strahlengang', ru: 'Линза: ход лучей' },
    sub: { de: 'Gegenstand verschieben, reelles und virtuelles Bild', ru: 'Двигай предмет: действительное и мнимое изображение' },
    cards: ['linse', 'brechkraft', 'fernrohr', 'mikroskop'], topics: [] },
  { id: 'saite', glyph: '∂<sub>t</sub>', t: { de: 'Wärme & Welle auf der Saite', ru: 'Тепло и волна на струне' },
    sub: { de: 'Anfangsform zeichnen und sehen, wie sie zerfließt oder schwingt', ru: 'Нарисуй начальную форму – она растечётся или заколеблется' },
    cards: [], topics: ['heat', 'wave', 'sep', 'three'] },
  { id: 'kreis', glyph: 'Z', t: { de: 'Schwingkreis & Zeiger', ru: 'Колебательный контур' },
    sub: { de: 'RLC im Zeigerdiagramm, Resonanzkurve', ru: 'RLC на векторной диаграмме, резонанс' },
    cards: ['rc', 'rl', 'resonanz', 'phase', 'impedanz', 'effektiv'], topics: [] },
  { id: 'faltung', glyph: '∗', t: { de: 'Faltung & δ', ru: 'Свёртка и δ' },
    sub: { de: 'Eine Funktion gleitet über die andere – Fläche = Faltung', ru: 'Одна функция скользит по другой – площадь = свёртка' },
    cards: [], topics: ['conv', 'distr', 'dderiv', 'fund'] },
];
// experiments that are finished (each one lives in sims/<id>.js)
const SIM_READY = new Set(['feld', 'brechung', 'spalt', 'lorentz', 'domain']);
const simList = () => SIM_META.filter(m => SIM_READY.has(m.id));
const SIM_UI = {
  de: { title: 'Experimente', eyebrow: 'Physik zum Anfassen', sub: 'Ziehen, schieben, ausprobieren. Jedes Experiment gehört zu Karten oder Themen – und hat kleine Aufgaben, die sich selbst abhaken.',
        try: 'Ausprobieren', cards: 'Passende Karten', topics: 'Passende Themen', tasks: (a, n) => `${a} / ${n} Aufgaben`, all: 'Alle Experimente', learn: 'Diese Karten lernen' },
  ru: { title: 'Эксперименты', eyebrow: 'Физика руками', sub: 'Тяни, двигай, пробуй. Каждый эксперимент связан с карточками или темами – и в нём есть задания, которые отмечаются сами.',
        try: 'Попробовать', cards: 'Связанные карточки', topics: 'Связанные темы', tasks: (a, n) => `${a} / ${n} заданий`, all: 'Все эксперименты', learn: 'Учить эти карточки' },
};
const simT = k => SIM_UI[anaLang][k];
let simsReady = null;
function loadSims() {
  if (!simsReady) { simsReady = loadKaTeX().then(() => loadScript('sims.js')); simsReady.catch(() => { simsReady = null; }); }
  return simsReady;
}
const loadSim = id => loadSims().then(() => loadScript('sims/' + id + '.js'));
const simTasksDone = id => (store.get('sim-tasks', {})[id] || []).filter(Boolean).length;
// a small button that leads from a card / topic / star to its experiment
function simLinks(kind, id) {
  return simList().filter(m => (kind === 'card' ? m.cards : m.topics).includes(id))
    .map(m => `<button type="button" class="sim-link" data-sim="${m.id}"><span class="glyph sm">${m.glyph}</span><span>${simT('try')}: ${m.t[anaLang]}</span>${ic('chevron-right')}</button>`).join('');
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-sim]');
  if (!b) return;
  e.preventDefault();
  if (typeof closeSheet === 'function') closeSheet();
  go({ id: 'sim', sim: b.dataset.sim });
});

function renderSims() {
  const root = document.getElementById('sims-root');
  root.lang = anaLang;
  root.innerHTML = `
    <div class="ana-top"><div><p class="eyebrow">${simT('eyebrow')}</p><h2>${simT('title')}</h2></div>${langSwitch()}</div>
    <p class="hero">${simT('sub')}</p>
    <div class="sim-grid">${simList().map(m => {
      const n = m.n;
      const a = simTasksDone(m.id);
      return `<button type="button" class="sim-tile${a >= n ? ' done' : ''}" data-sim="${m.id}">
        <span class="glyph">${m.glyph}</span>
        <span class="txt"><b>${m.t[anaLang]}</b><small>${m.sub[anaLang]}</small></span>
        <span class="cnt">${simT('tasks')(a, n)}</span></button>`;
    }).join('')}</div>`;
  wireLang(root, renderSims);
}
let simInst = null;
function stopSim() { if (simInst) { simInst.destroy(); simInst = null; } }
function renderSim(id) {
  const root = document.getElementById('sim-root');
  const m = SIM_META.find(x => x.id === id);
  if (!m) { root.innerHTML = ''; return; }
  root.lang = anaLang;
  stopSim();
  const links = [
    ...m.cards.filter(c => window.E2 && E2.cards[c]).map(c => `<button type="button" class="sim-chip" data-card="${c}">${ic('layers')}<span>${E2.cards[c].q[anaLang]}</span></button>`),
    ...m.topics.filter(tid => window.ANA3 && ANA3.topics[tid]).map(tid => `<button type="button" class="sim-chip" data-topic="${tid}">${glyph(tid, 'sm')}<span>${ANA3.topics[tid].title[anaLang]}</span></button>`),
  ].join('');
  root.innerHTML = `
    <div class="ana-top"><div><p class="eyebrow">${simT('title')}</p><h2>${m.t[anaLang]}</h2></div>${langSwitch()}</div>
    <div id="sim-host"></div>
    ${links ? `<div class="sim-links"><h3>${m.cards.length ? simT('cards') : simT('topics')}</h3>${links}</div>` : ''}
    <button type="button" class="sim-all" data-goto="sims">${ic('atom')} ${simT('all')}</button>`;
  wireLang(root, () => renderSim(id));
  tex(root.querySelector('.ana-top'));
  tex(root.querySelector('.sim-links') || root);
  root.querySelectorAll('[data-card]').forEach(b => b.addEventListener('click', () => go({ id: 'e2k', topic: [b.dataset.card] })));
  root.querySelectorAll('[data-topic]').forEach(b => b.addEventListener('click', () => go({ id: 'thema', topic: b.dataset.topic })));
  root.querySelector('[data-goto="sims"]').addEventListener('click', () => go({ id: 'sims' }));
  simInst = SIMS.mount(id, root.querySelector('#sim-host'), anaLang, { tex });
}
function showSim(state) {
  document.getElementById('sim-root').innerHTML = '<p class="loading">…</p>';
  Promise.all([loadSim(state.sim), loadE2(), loadAna3()]).then(() => { if (currentScreen === 'sim') renderSim(state.sim); })
    .catch(() => { document.getElementById('sim-root').innerHTML = `<p class="loading">${loadFailed()}</p>`; });
}
function showSims() { renderSims(); }
route('sims', { enter: showSims });
route('sim', { enter: showSim, leave: stopSim });
