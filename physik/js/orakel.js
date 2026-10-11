// ---------- daily message ----------
const OK_UI = {
  de: { title: 'Botschaft für heute', titleName: n => n + ', deine Botschaft für heute', tap: 'Tippe auf die Karte',
        heute: 'Heute', copy: 'Text kopieren', copied: 'Kopiert', next: 'Morgen wartet eine neue Karte.' },
  ru: { title: 'Послание на сегодня', titleName: n => n + ', твоё послание на сегодня', tap: 'Коснись карты',
        heute: 'Сегодня', copy: 'Скопировать', copied: 'Скопировано', next: 'Завтра тебя ждёт новая карта.' },
};
let okReady = null;
(function makeStars() {
  const sc = document.getElementById('scene-orakel');
  for (let i = 0; i < 90; i++) {
    const st = document.createElement('span');
    st.className = 'star';
    st.style.left = (Math.random() * 100) + '%';
    st.style.top = (Math.random() * 100) + '%';
    const sz = Math.random() < .15 ? 3 : 2;
    st.style.width = st.style.height = sz + 'px';
    st.style.animationDuration = (1.5 + Math.random() * 3) + 's';
    st.style.animationDelay = (-Math.random() * 3) + 's';
    sc.appendChild(st);
  }
})();
function todayKey() {
  const d = new Date();
  return { key: d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(),
           days: Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 864e5) };
}
function renderOrakel() {
  const root = document.getElementById('orakel-root');
  const L = OK_UI[anaLang], { key, days } = todayKey();
  const msg = ORAKEL[(days * 37) % ORAKEL.length];   // 37 is coprime to 60: every message once before repeating
  const opened = store.get('orakel-open', '') === key;
  root.lang = anaLang;
  root.innerHTML = `
    <div class="ok-top"><span class="ok-date">${new Intl.DateTimeFormat(anaLang === 'ru' ? 'ru-RU' : 'de-AT', { weekday: 'long', day: 'numeric', month: 'long' }).format(new Date())}</span>${langSwitch()}</div>
    <h2>${NAME ? L.titleName(NAME) : L.title}</h2>
    <div class="ok-card${opened ? ' open instant' : ''}" id="ok-card" role="button" tabindex="0" aria-label="${L.tap}">
      <div class="ok-inner">
        <div class="ok-face ok-front"><div class="sym">${ic('sparkles')}</div><div class="tap">${L.tap}</div></div>
        <div class="ok-face ok-back">
          <div class="ok-quote">${msg.s[anaLang]}</div>
          <div class="ok-sep"></div>
          <div class="ok-hint"><b>${L.heute}:</b> ${msg.h[anaLang]}</div>
        </div>
      </div>
    </div>
    <div class="ok-actions" id="ok-actions"${opened ? '' : ' hidden'}>
      <button type="button" id="ok-copy">${ic('copy')} <span>${L.copy}</span></button>
      <p class="ok-next">${L.next}</p>
    </div>`;
  wireLang(root, renderOrakel);
  const card = root.querySelector('#ok-card');
  const open = () => {
    if (card.classList.contains('open')) return;
    card.classList.remove('instant');
    card.classList.add('open');
    store.set('orakel-open', key);
    setTimeout(() => { root.querySelector('#ok-actions').hidden = false; }, 700);
  };
  card.addEventListener('click', open);
  card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  const copyBtn = root.querySelector('#ok-copy');
  copyBtn.addEventListener('click', async () => {
    const text = msg.s[anaLang] + '\n\n' + L.heute + ': ' + msg.h[anaLang];
    try { await navigator.clipboard.writeText(text); copyBtn.querySelector('span').textContent = L.copied; } catch (err) {}
  });
}
function showOrakel() {
  if (!okReady) { okReady = loadScript('orakel-data.js'); okReady.catch(() => { okReady = null; }); }
  okReady.then(renderOrakel).catch(() => {
    document.getElementById('orakel-root').innerHTML = `<p class="loading">${loadFailed()}</p>`;
  });
}
document.getElementById('orakel-btn').addEventListener('click', () => go({ id: 'orakel' }));

route('orakel', { enter: showOrakel, scene: 'scene-orakel' });
