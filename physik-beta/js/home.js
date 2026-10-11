// Start screen (question, greeting) and the list of subjects.

// ---------- subjects: content for each option goes into `html` ----------
// tone/tint colour the icon tile; info() returns the small line under the title (and a ring when a total is known)
const FAECHER = {
  stern:  { sym: '🔭', icon: 'telescope', title: 'Sternwarte', screen: 'stern', tone: '#f4c86a', tint: 'rgba(244,200,106,.14)',
            info: () => { const n = Object.keys(memLogData).filter(k => memStrength(k) >= .5).length;
                          return { text: n ? `${n} Sterne leuchten gerade` : 'Alles Gelernte als Himmel, der langsam verblasst', done: n, total: store.get('deck-total', 0) }; } },
  e2:     { sym: '⚡', icon: 'zap', title: 'Experimental\u00adphysik II', screen: 'e2', tone: '#82c6ff', tint: 'rgba(130,198,255,.14)',
            info: () => ({ text: 'Optik, Elektromagnetismus, Relativität · Karteikarten', done: Object.values(e2Box).filter(v => v > 0).length, total: store.get('e2-total', 0) }) },
  ana3:   { sym: '∫', icon: 'sigma', title: 'Analysis 3', screen: 'ana3', tone: '#a294ff', tint: 'rgba(162,148,255,.16)',
            info: () => ({ text: 'Komplexe Analysis bis Hilberträume, einfach erklärt', done: anaDone.size, total: store.get('ana3-total', 0) }) },
  sims:   { sym: '🧲', icon: 'orbit', title: 'Experimente', screen: 'sims', tone: '#ff7f9f', tint: 'rgba(255,127,159,.14)',
            info: () => ({ text: 'Physik zum Anfassen: Felder, Licht, Wellen, komplexe Funktionen' }) },
  labor:  { sym: '🧪', icon: 'flask-conical', title: 'Labor\u00adpraktikum', screen: 'labor', tone: '#5fd6b8', tint: 'rgba(95,214,184,.14)',
            info: () => ({ text: 'Protokoll-Gerüst mit Claude in 10 Minuten' }) },
  tp2:    { sym: '⚛️', icon: 'atom', title: 'Theoretische Physik 2', screen: 'tp2', tone: '#ff7f9f', tint: 'rgba(255,127,159,.13)',
            info: () => ({ text: 'Elektrodynamik · leider geschlossen' }) },
  schach: { sym: '♟️', icon: 'chess-knight', title: 'Schach', tone: '#ffad61', tint: 'rgba(255,173,97,.13)',
            info: () => ({ text: 'Oder doch lieber das?' }),
            html: '<img class="hilfe-img" src="schach.png" alt=""><p class="frage-zurueck">Und was ist mit dem Analysis-3-Tutorium?</p>' +
                  '<div class="wahl"><button type="button" class="go-schach" data-go="katze">Ich gehe zum Schach</button>' +
                  '<button type="button" class="go-tutorium" data-go="opa">Ich gehe zum Tutorium</button></div>' },
};

// ---------- date + greeting ----------
const dateFmt = new Intl.DateTimeFormat('de-AT', { weekday: 'long', day: 'numeric', month: 'long' });
const timeFmt = new Intl.DateTimeFormat('de-AT', { hour: '2-digit', minute: '2-digit' });
// the name appears once, in the greeting; the question stays as it is
function greetingFor(h) {
  const who = NAME ? ', ' + NAME : '';
  if (h >= 5 && h < 11) return ['sunrise', 'Guten Morgen' + who];
  if (h >= 11 && h < 18) return ['sun', 'Guten Tag' + who];
  if (h >= 18 && h < 23) return ['sunset', 'Guten Abend' + who];
  return ['moon', 'Gute Nacht' + who];
}
function updateClock() {
  const t = new Date();
  document.getElementById('date').textContent = dateFmt.format(t) + ' · ' + timeFmt.format(t);
  const [icon, text] = greetingFor(t.getHours());
  const g = document.getElementById('greeting');
  g.innerHTML = ic(icon) + '<span></span>';
  g.querySelector('span').textContent = text;
}
updateClock();
setInterval(updateClock, 30000);

// ---------- subject list ----------
function ringSvg(done, total) {
  const r = 17, c = 2 * Math.PI * r, f = total ? Math.min(1, done / total) : 0;
  return `<span class="ring" title="${done} / ${total}"><svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="${r}" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="3"/>` +
    `<circle cx="20" cy="20" r="${r}" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-dasharray="${(c * f).toFixed(1)} ${c.toFixed(1)}"/></svg>${Math.round(f * 100)}%</span>`;
}
// every subject looks like a little app icon: its own colour and symbol
const symHtml = s => /^[∫∑∂]$/.test(s) ? `<span class="gl">${s}</span>` : s;
const appIcon = (key, cls = 'app-ic') => `<span class="${cls} ic-${key}" aria-hidden="true">${symHtml(FAECHER[key].sym)}</span>`;
function renderFaecher() {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  for (const [key, f] of Object.entries(FAECHER)) {
    const info = f.info ? f.info() : {};
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'fach';
    b.title = info.text || '';
    b.innerHTML = appIcon(key, 'icon') + `<span class="txt"><b></b></span><span class="badge">${info.total ? `${info.done || 0} / ${info.total}` : ''}</span>`;
    b.querySelector('b').textContent = f.title;
    b.addEventListener('click', () => go(f.screen ? { id: f.screen } : { id: 'hilfe', fach: key }));
    grid.appendChild(b);
  }
}

route('frage', {});
route('faecher', { enter: renderFaecher });
