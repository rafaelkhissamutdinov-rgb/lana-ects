// ---------- Experimentalphysik II: theory + flashcards (data loaded on demand) ----------
const E2UI = {
  de: { title: 'Experimentalphysik II', sub: 'Optik, Elektromagnetismus, Relativität – Theorie einfach erklärt und Karteikarten für die Altfragen.',
        all: 'Alle Karten lernen', known: 'Karten gewusst', learn: 'Diese Karten lernen', show: 'Antwort zeigen',
        again: 'Nochmal', got: 'Gewusst', answer: 'Antwort', einfach: 'Einfach erklärt', bild: 'Bild dazu',
        left: 'noch', doneT: 'Runde geschafft!', doneS: 'Alle Karten dieser Runde sitzen.', restart: 'Neue Runde',
        cards: 'Karten', overview: 'Alle Karten zum Nachlesen' },
  ru: { title: 'Экспериментальная физика II', sub: 'Оптика, электромагнетизм, теория относительности — простая теория и карточки для Altfragen.',
        all: 'Учить все карточки', known: 'карточек выучено', learn: 'Учить эти карточки', show: 'Показать ответ',
        again: 'Ещё раз', got: 'Знаю', answer: 'Ответ', einfach: 'Просто', bild: 'Образ',
        left: 'осталось', doneT: 'Раунд пройден!', doneS: 'Все карточки этого раунда выучены.', restart: 'Новый раунд',
        cards: 'карточек', overview: 'Все карточки для чтения' },
};
const e2t = k => E2UI[anaLang][k];
let e2Ready = null;
let e2Box = store.get('e2-box', {});
function loadE2() {
  if (!e2Ready) {
    e2Ready = loadKaTeX().then(() => loadScript('e2-data.js')).then(() => store.set('e2-total', Object.keys(E2.cards).length));
    e2Ready.catch(() => { e2Ready = null; });
  }
  return e2Ready;
}
const isKnown = id => (e2Box[id] || 0) > 0;
function cardBack(c, cid) {
  return `<div class="step s-formel"><div class="step-title">${ic('sigma')}<span>${e2t('answer')}</span></div>${c.a[anaLang]}</div>` +
    `<div class="step s-einfach"><div class="step-title">${ic('baby')}<span>${e2t('einfach')}</span></div>${c.e[anaLang]}</div>` +
    `<div class="step s-beispiel"><div class="step-title">${ic('lightbulb')}<span>${e2t('bild')}</span></div>${c.b[anaLang]}</div>` +
    (cid ? simLinks('card', cid) : '');
}

function renderE2List() {
  const root = document.getElementById('e2-list');
  root.lang = anaLang;
  const ids = Object.keys(E2.cards), n = ids.filter(isKnown).length;
  root.innerHTML = `
    <div class="ana-top"><div><p class="eyebrow">${anaLang === 'ru' ? 'карточки и теория' : 'Karteikarten & Theorie'}</p><h2>${e2t('title')}</h2></div>${langSwitch()}</div>
    <p class="hero">${e2t('sub')}</p>
    <div class="progress"><div style="width:${(100 * n / ids.length).toFixed(1)}%"></div></div>
    <span class="progress-label">${n} / ${ids.length} ${e2t('known')}</span>
    <button type="button" class="e2-big" data-learn="all">${ic('layers')} ${e2t('all')}</button>
    <div class="part-card"><div class="tiles">${E2.topics.map(tp => {
      const k = tp.cards.filter(isKnown).length;
      return `<button type="button" class="tile${k === tp.cards.length ? ' done' : ''}" data-e2topic="${tp.id}">` +
        `${glyph('e2-' + tp.id)}<span>${tp.title[anaLang]}</span><span class="cnt">${k} / ${tp.cards.length}</span></button>`;
    }).join('')}</div></div>`;
  wireLang(root, renderE2List);
  root.querySelectorAll('[data-e2topic]').forEach(b => b.addEventListener('click', () => go({ id: 'e2t', topic: b.dataset.e2topic })));
  root.querySelector('[data-learn]').addEventListener('click', () => go({ id: 'e2k', topic: 'all' }));
}

function renderE2Topic(tid) {
  const root = document.getElementById('e2-topic');
  root.lang = anaLang;
  const tp = E2.topics.find(t => t.id === tid);
  root.innerHTML = `
    <div class="ana-top"><span></span>${langSwitch()}</div>
    <div class="thema-head">${glyph('e2-' + tp.id)}<h2>${tp.title[anaLang]}</h2><span class="ref">${tp.cards.length} ${e2t('cards')}</span></div>
    <div class="steps"><div class="step s-einfach">${tp.intro[anaLang]}</div></div>
    <button type="button" class="e2-big" data-learn="${tid}">${ic('layers')} ${e2t('learn')}</button>
    <h3>${e2t('overview')}</h3>
    <div class="e2-list">${tp.cards.map(cid => {
      const c = E2.cards[cid];
      return `<details><summary>${isKnown(cid) ? ic('check-circle-2') : ''}${c.q[anaLang]}</summary><div class="inner">${cardBack(c, cid)}</div></details>`;
    }).join('')}</div>`;
  wireLang(root, () => renderE2Topic(tid));
  root.querySelector('[data-learn]').addEventListener('click', () => go({ id: 'e2k', topic: tid }));
  tex(root);
}

function startE2Session(topic) {
  if (Array.isArray(topic)) { renderE2Card(topic, topic.slice(), topic.length); return; }
  const pool = topic === 'all' ? Object.keys(E2.cards) : E2.topics.find(t => t.id === topic).cards.slice();
  // least-known first, random order inside each box
  pool.sort((a, b) => (e2Box[a] || 0) - (e2Box[b] || 0) || Math.random() - .5);
  const queue = pool.slice(0, topic === 'all' ? 20 : pool.length);
  renderE2Card(topic, queue, queue.length);
}

function renderE2Card(topic, queue, total) {
  const root = document.getElementById('e2-cards');
  root.lang = anaLang;
  if (!queue.length) {
    root.innerHTML = `<div class="fc-done"><div class="big">${ic('sparkles')}</div><h2>${e2t('doneT')}</h2><p>${e2t('doneS')}</p>
      <button type="button" class="e2-big" id="fc-restart">${ic('repeat-2')} ${e2t('restart')}</button></div>`;
    root.querySelector('#fc-restart').addEventListener('click', () => startE2Session(topic));
    return;
  }
  const cid = queue[0], c = E2.cards[cid], tp = E2.topics.find(t => t.id === c.topic);
  root.innerHTML = `
    <div class="fc-top"><span class="fc-chip">${glyph('e2-' + tp.id)}<span>${tp.title[anaLang]}</span></span>${langSwitch()}</div>
    <div class="progress"><div style="width:${(100 * (total - queue.length) / total).toFixed(1)}%"></div></div>
    <span class="fc-count">${e2t('left')} ${queue.length} / ${total}</span>
    <div class="fc-q">${c.q[anaLang]}</div>
    <div class="fc-back" id="fc-back" hidden>${cardBack(c, cid)}</div>
    <div class="fc-btns" id="fc-btns"><button type="button" class="fc-show">${e2t('show')}</button></div>`;
  wireLang(root, () => renderE2Card(topic, queue, total));
  tex(root);
  root.querySelector('.fc-show').addEventListener('click', () => {
    root.querySelector('#fc-back').hidden = false;
    const btns = root.querySelector('#fc-btns');
    btns.innerHTML = `<button type="button" class="fc-again">${ic('repeat-2')} ${e2t('again')}</button><button type="button" class="fc-got">${ic('check')} ${e2t('got')}</button>`;
    btns.querySelector('.fc-again').addEventListener('click', () => {
      saveUndo('again');
      e2Box[cid] = 0; store.set('e2-box', e2Box); memLog('e2:' + cid, false);
      queue.push(queue.shift());   // comes back later in this round
      renderE2Card(topic, queue, total);
    });
    btns.querySelector('.fc-got').addEventListener('click', e => {
      flyStar(e.currentTarget);
      saveUndo('got');
      e2Box[cid] = Math.min((e2Box[cid] || 0) + 1, 5); store.set('e2-box', e2Box); memLog('e2:' + cid, true);
      queue.shift();
      renderE2Card(topic, queue, total);
    });
  });
}

function showE2(state) {
  loadE2().then(() => {
    if (state.id === 'e2') renderE2List();
    else if (state.id === 'e2t') renderE2Topic(state.topic);
    else startE2Session(state.topic);
  }).catch(() => {
    document.getElementById({ e2: 'e2-list', e2t: 'e2-topic', e2k: 'e2-cards' }[state.id]).innerHTML = `<p class="loading">${loadFailed()}</p>`;
  });
}

route('e2', { enter: showE2 });
route('e2t', { enter: showE2 });
route('e2k', { enter: showE2 });
