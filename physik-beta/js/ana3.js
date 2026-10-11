// ---------- Analysis 3: interactive study notes (data + KaTeX loaded on demand) ----------
const UI = {
  de: { title: 'Analysis III', titleSub: 'einfach erklärt', done: 'verstanden', map: 'So hängt alles zusammen',
        next: 'Weiter', all: 'Alles zeigen', got: 'Verstanden', gotDone: 'Verstanden', prev: '', nextT: '',
        kern: 'Kern', formel: 'Formel', check: 'Check', rezept: 'Rezept', falle: 'Falle', tabelle: 'Überblick', text: 'Merke',
        ref: 'im Skriptum', error: 'Konnte nicht laden. Bitte Seite neu laden.',
        vorher: 'Vorher wissen', einfach: 'Ganz einfach', beispiel: 'Beispiel mit Zahlen', exakt: 'Kurz & exakt – fürs Wiederholen',
        neu: 'Jedes Thema startet ganz einfach: Vorher wissen → Ganz einfach → Beispiel. Danach kommt „Kurz & exakt“ zum Wiederholen.',
        unklar: 'Immer noch unklar? Prompt für Claude kopieren', copied: 'Kopiert! Jetzt in Claude einfügen:', open: 'claude.ai öffnen',
        copyFail: 'Kopieren ging nicht – hier ist der Text zum Markieren:' },
  ru: { title: 'Analysis III', titleSub: 'на пальцах', done: 'понятно', map: 'Как всё связано',
        next: 'Дальше', all: 'Показать всё', got: 'Понятно', gotDone: 'Понятно', prev: '', nextT: '',
        kern: 'Суть', formel: 'Формула', check: 'Проверка', rezept: 'Рецепт', falle: 'Ловушка', tabelle: 'Обзор', text: 'Запомни',
        ref: 'в скрипте', error: 'Не удалось загрузить. Обнови страницу.',
        vorher: 'Что нужно знать', einfach: 'Совсем просто', beispiel: 'Пример с числами', exakt: 'Коротко и точно – для повторения',
        neu: 'Каждая тема начинается просто: Что нужно знать → Совсем просто → Пример. Потом идёт «Коротко и точно» для повторения.',
        unklar: 'Всё ещё непонятно? Скопировать промпт для Claude', copied: 'Скопировано! Теперь вставь в Claude:', open: 'открыть claude.ai',
        copyFail: 'Скопировать не вышло — вот текст, выдели его вручную:' },
};
let anaDone = new Set(store.get('ana3-done', []));
let anaReady = null;
function loadAna3() {
  if (!anaReady) {
    anaReady = Promise.all([loadScript('ana3-data.js'), loadKaTeX()]).then(() => store.set('ana3-total', topicOrder().length));
    anaReady.catch(() => { anaReady = null; });
  }
  return anaReady;
}
const t = k => UI[anaLang][k];
const TUTOR = {
  de: (title, ref) => `Ich lerne für Analysis III (Physik, Uni Wien, Skriptum von Hörmann). Das Thema „${title}“${ref ? ' (' + ref + ')' : ''} verstehe ich noch nicht. Erklär es mir so, als hätte ich die Fachbegriffe noch nie gehört:
1. Frag mich zuerst mit einer kurzen Frage, was ich schon weiß.
2. Dann ein Bild aus dem Alltag und die Idee in höchstens 3 Sätzen.
3. Ein Beispiel mit konkreten Zahlen, Schritt für Schritt.
4. Erst danach die Formel – und erklär jedes Symbol darin.
5. Zum Schluss 2 kurze Kontrollfragen an mich. Die Lösung zeigst du erst, wenn ich geantwortet habe.
Wenn ich etwas nicht verstehe, erklär genau diesen Schritt noch einfacher, statt weiterzumachen. Antworte auf Deutsch, kurz, Formeln in LaTeX.`,
  ru: (title, ref) => `Я учу Analysis III (физика, Венский университет, скрипт Hörmann). Тему «${title}»${ref ? ' (' + ref + ')' : ''} я пока не понимаю. Объясни так, будто я никогда не слышал этих терминов:
1. Сначала задай мне один короткий вопрос: что я уже знаю.
2. Потом образ из жизни и идея максимум в 3 предложениях.
3. Пример с конкретными числами, шаг за шагом.
4. Только после этого формула — и объясни каждый символ в ней.
5. В конце 2 коротких вопроса мне для проверки. Решение показывай только после моего ответа.
Если я что-то не понимаю, объясни именно этот шаг ещё проще, а не иди дальше. Отвечай по-русски, коротко, формулы в LaTeX.`,
};
const STEP_ICON = { kern: 'lightbulb', formel: 'sigma', check: 'check-circle-2', rezept: 'list-checks', falle: 'triangle-alert',
  tabelle: 'layers', text: 'scroll-text', vorher: 'puzzle', einfach: 'baby', beispiel: 'hash' };
function topicOrder() { return ['toolkit', ...ANA3.meta.parts.flatMap(p => p.topics)]; }
function tile(id, wide) {
  const tp = ANA3.topics[id];
  return `<button type="button" class="tile${wide ? ' wide' : ''}${anaDone.has(id) ? ' done' : ''}" data-topic="${id}">` +
    `${glyph(id)}<span>${tp.title[anaLang]}</span></button>`;
}

function renderAnaList() {
  const root = document.getElementById('ana3-list');
  root.lang = anaLang;
  const m = ANA3.meta, total = topicOrder().length, n = topicOrder().filter(id => anaDone.has(id)).length;
  root.innerHTML = `
    <div class="ana-top"><div><p class="eyebrow">${t('titleSub')}</p><h2>${t('title')}</h2></div>${langSwitch()}</div>
    <p class="hero">${m.hero[anaLang]}</p>
    <p class="neu">${t('neu')}</p>
    <div class="progress"><div style="width:${(100 * n / total).toFixed(1)}%"></div></div>
    <span class="progress-label">${n} / ${total} ${t('done')}</span>
    <details class="map"><summary>${ic('map')} ${t('map')}</summary><div class="map-grid">
      ${m.map.map(x => `<div><b>${x.title[anaLang]}</b>${x.html[anaLang]}</div>`).join('')}
    </div></details>
    <div class="part-card"><div class="tiles">${tile('toolkit', true)}</div></div>
    ${m.parts.map(p => `
      <div class="part-card">
        <span class="tag">${p.tag}</span><h3>${p.title[anaLang]}</h3>
        <p class="intro">${p.intro[anaLang]}</p>
        <div class="tiles">${p.topics.map(id => tile(id)).join('')}</div>
      </div>`).join('')}`;
  wireLang(root, renderAnaList);
  root.querySelectorAll('[data-topic]').forEach(b => b.addEventListener('click', () => go({ id: 'thema', topic: b.dataset.topic })));
  tex(root);
}

function renderThema(id, revealAll) {
  const root = document.getElementById('ana3-thema');
  root.lang = anaLang;
  const tp = ANA3.topics[id];
  const order = topicOrder(), i = order.indexOf(id);
  const prevId = order[i - 1], nextId = order[i + 1];
  root.innerHTML = `
    <div class="ana-top"><span></span>${langSwitch()}</div>
    <div class="thema-head">
      ${glyph(id)}
      <h2>${tp.title[anaLang]}</h2>
      ${tp.ref ? `<span class="ref">${tp.ref} ${t('ref')}</span>` : ''}
    </div>
    <div class="steps" id="steps"></div>
    <div class="step-nav" id="step-nav"></div>
    <button type="button" class="verstanden" id="verstanden" aria-pressed="${anaDone.has(id)}" hidden>${ic('check')}<span>${anaDone.has(id) ? t('gotDone') : t('got')}</span></button>
    <button type="button" class="unklar" id="unklar" hidden>${ic('bot')} ${t('unklar')}</button>
    <div class="unklar-out" id="unklar-out" hidden></div>
    <div class="thema-nav">
      ${prevId ? `<button type="button" data-topic="${prevId}">${ic('chevron-left')}<span>${ANA3.topics[prevId].title[anaLang]}</span></button>` : '<span></span>'}
      ${nextId ? `<button type="button" data-topic="${nextId}"><span>${ANA3.topics[nextId].title[anaLang]}</span>${ic('chevron-right')}</button>` : '<span></span>'}
    </div>`;
  const stepsEl = root.querySelector('#steps'), nav = root.querySelector('#step-nav'), got = root.querySelector('#verstanden');
  let shown = 0;
  const EASY = ['vorher', 'einfach', 'beispiel'];
  function addStep() {
    const b = tp.blocks[shown++];
    const prev = tp.blocks[shown - 2];
    if (prev && EASY.includes(prev.type) && !EASY.includes(b.type)) {
      const sep = document.createElement('div');
      sep.className = 'exakt-sep';
      sep.textContent = t('exakt');
      stepsEl.appendChild(sep);
    }
    const div = document.createElement('div');
    div.className = 'step s-' + b.type;
    const name = (b.type === 'kern' || EASY.includes(b.type)) ? t(b.type) : (b.label[anaLang] || t(b.type));
    const label = ic(STEP_ICON[b.type] || 'info') + '<span>' + name + '</span>';
    let html = b.html[anaLang];
    // display formulas as breakable inline math so long lines wrap on phones
    if (b.type === 'formel') html = html.replace(/\$\$([\s\S]+?)\$\$/g, (m, x) =>
      '<div class="fm">$\\displaystyle ' + x.replace(/\\qquad/g, '\\qquad\\allowbreak').replace(/\\quad/g, '\\quad\\allowbreak') + '$</div>');
    div.innerHTML = `<div class="step-title">${label}</div>${html}`;
    stepsEl.appendChild(div);
    tex(div);
  }
  function updateNav() {
    if (shown >= tp.blocks.length) { nav.innerHTML = ''; got.hidden = false; root.querySelector('#unklar').hidden = false; return; }
    nav.innerHTML = `<button type="button" class="weiter">${t('next')} ${ic('arrow-right')}</button><button type="button" class="alle">${t('all')}</button>`;
    nav.querySelector('.weiter').addEventListener('click', () => {
      addStep(); updateNav();
      stepsEl.lastElementChild.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
    nav.querySelector('.alle').addEventListener('click', () => { while (shown < tp.blocks.length) addStep(); updateNav(); });
  }
  addStep();
  if (revealAll) while (shown < tp.blocks.length) addStep();
  updateNav();
  tex(root.querySelector('.thema-head'));
  tex(root.querySelector('.thema-nav'));
  root.querySelectorAll('.thema-nav [data-topic]').forEach(b => b.addEventListener('click', () => go({ id: 'thema', topic: b.dataset.topic })));
  wireLang(root, () => renderThema(id, true));
  root.querySelector('#unklar').addEventListener('click', async () => {
    const text = TUTOR[anaLang](tp.title[anaLang], tp.ref);
    const out = root.querySelector('#unklar-out');
    let ok = false;
    try { await navigator.clipboard.writeText(text); ok = true; } catch (e) {}
    out.hidden = false;
    out.innerHTML = ok
      ? `<p>${t('copied')} <a href="https://claude.ai/new" target="_blank" rel="noopener">${t('open')}</a></p>`
      : `<p>${t('copyFail')}</p><textarea readonly rows="8"></textarea><p><a href="https://claude.ai/new" target="_blank" rel="noopener">${t('open')}</a></p>`;
    if (!ok) out.querySelector('textarea').value = text;
  });
  got.addEventListener('click', () => {
    saveUndo(anaDone.has(id) ? 'anaOff' : 'anaOn');
    anaDone.has(id) ? anaDone.delete(id) : anaDone.add(id);
    store.set('ana3-done', [...anaDone]);
    anaDone.has(id) ? memLog('ana:' + id, true) : memForget('ana:' + id);
    got.setAttribute('aria-pressed', String(anaDone.has(id)));
    got.querySelector('span').textContent = anaDone.has(id) ? t('gotDone') : t('got');
    if (anaDone.has(id)) flyStar(got);
    if (anaDone.has(id) && nextId) setTimeout(() => go({ id: 'thema', topic: nextId }), 450);
  });
}

function showAna(state) {
  loadAna3().then(() => {
    if (state.id === 'ana3') renderAnaList(); else renderThema(state.topic);
  }).catch(() => {
    document.getElementById(state.id === 'ana3' ? 'ana3-list' : 'ana3-thema').innerHTML = `<p class="loading">${loadFailed()}</p>`;
  });
}

route('ana3', { enter: showAna });
route('thema', { enter: showAna });
