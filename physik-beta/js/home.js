// ---------- subjects: content for each option goes into `html` ----------
const FAECHER = {
  stern:  { icon: '🌌', title: 'Sternwarte',             screen: 'stern' },
  e2:     { icon: '⚡', title: 'Experimentalphysik II',  screen: 'e2' },
  tp2:    { icon: '⚛️', title: 'Theoretische Physik 2', screen: 'tp2' },
  ana3:   { icon: '∫',  title: 'Analysis 3',            screen: 'ana3' },
  labor:  { icon: '🧪', title: 'Laborpraktikum',        screen: 'labor' },
  schach: { icon: '♟️', title: 'Schach',
            html: '<img class="hilfe-img" src="schach.png" alt=""><p class="frage-zurueck">Und was ist mit dem Analysis-3-Tutorium? 🤨</p>' +
                  '<div class="wahl"><button type="button" class="go-schach" data-go="katze">Ich gehe zum Schach ♟️</button>' +
                  '<button type="button" class="go-tutorium" data-go="opa">Ich gehe zum Tutorium 📚</button></div>' },
};

// ---------- background theme per weekday ----------
const THEMES = {
  tiere:   { bg: 'radial-gradient(circle at 50% 35%, #ffe1ef 0%, #ffb8d9 60%, #ff8fc4 100%)', base: '#ffb8d9',
             emoji: ['🐰', '🐱', '🐇', '🐈', '🐶', '🐹', '🐼', '🐨', '🦊', '🐻', '🐥', '🦄', '🐭', '🐾'] },
  geld:    { bg: 'linear-gradient(160deg, #e6f7ec 0%, #a9e3bf 55%, #5fbf8a 100%)', base: '#a9e3bf',
             emoji: ['💰', '💵', '💶', '💸', '📈', '📊', '📉', '💼', '🏦', '💳', '🪙', '🖥️', '📅', '🤑'] },
  physik:  { bg: 'radial-gradient(circle at 50% 30%, #2d3f8f 0%, #16205a 55%, #0a0f30 100%)', base: '#16205a',
             emoji: ['🧑‍🔬', '👩‍🔬', '👨‍🔬', '👩‍🚀', '🔭', '🔬', '⚛️', '🧪', '🧲', '🪐', '🌌', '🚀', '☄️', '🌍', '🧮', '⭐'] },
  muede:   { bg: 'linear-gradient(160deg, #f3eee7 0%, #ddd2c4 55%, #b9aa98 100%)', base: '#ddd2c4',
             emoji: ['😩', '😫', '🥱', '😮‍💨', '😵‍💫', '🫠', '😑', '😤', '🙄', '🥴', '😵', '🫥'] },
  traurig: { bg: 'linear-gradient(180deg, #e3ebf5 0%, #b5c6dc 55%, #8197b5 100%)', base: '#b5c6dc',
             emoji: ['😭', '😢', '😿', '🥺', '😞', '😔', '🥲', '😥', '💧', '☔', '🌧️', '💔'] },
  tod:     { bg: 'radial-gradient(circle at 50% 35%, #4a1f2a 0%, #2a1018 55%, #120608 100%)', base: '#2a1018',
             emoji: ['💀', '☠️', '🦴', '🤬', '🪦', '👻', '⚰️', '😈', '💢', '🔥'] },
  schlaf:  { bg: 'radial-gradient(circle at 50% 30%, #5a4fa8 0%, #352c78 55%, #1c1648 100%)', base: '#352c78',
             emoji: ['😴', '💤', '🛏️', '🛌', '🌙', '🌜', '⭐', '🥱', '🧸', '😪', '🌛', '✨'] },
  party:   { bg: 'radial-gradient(circle at 50% 35%, #ff5fae 0%, #9b2d9e 55%, #3d0d52 100%)', base: '#9b2d9e',
             emoji: ['🍺', '🍻', '🍷', '🥂', '🍾', '🍸', '🍹', '🥃', '🎉', '🪩', '🎶', '💃', '🕺', '🎊'] },
};
// index = Date.getDay(): 0 Sonntag … 6 Samstag; Friday picks one of two at random
const WEEK = [['party'], ['geld'], ['physik'], ['muede'], ['traurig'], ['tiere', 'tod'], ['schlaf']];
const TAG_PARAM = { so: 0, mo: 1, di: 2, mi: 3, do: 4, fr: 5, sa: 6 };

const now = new Date();
const day = params.get('tag') in TAG_PARAM ? TAG_PARAM[params.get('tag')] : now.getDay();
const options = WEEK[day];
const themeName = THEMES[params.get('thema')] ? params.get('thema') : options[Math.floor(Math.random() * options.length)];
const theme = THEMES[themeName];

const bg = document.getElementById('bg');
document.documentElement.style.setProperty('--bg', theme.bg);
document.body.style.background = theme.base;
// positions/sizes are random on every visit, so the background never looks the same twice
const count = Math.round(Math.min(30, Math.max(14, innerWidth * innerHeight / 21000)));
const pool = [...theme.emoji].sort(() => Math.random() - .5);
for (let i = 0; i < count; i++) {
  const d = document.createElement('span');
  d.className = 'deco';
  d.textContent = pool[i % pool.length];
  d.style.left = (Math.random() * 94) + '%';
  d.style.top = (Math.random() * 94) + '%';
  d.style.fontSize = (22 + Math.random() * 28) + 'px';
  d.style.setProperty('--dur', (2 + Math.random() * 2.5) + 's');
  d.style.setProperty('--delay', (-Math.random() * 3) + 's');
  bg.appendChild(d);
}

// ---------- date + greeting ----------
const dateFmt = new Intl.DateTimeFormat('de-AT', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
const timeFmt = new Intl.DateTimeFormat('de-AT', { hour: '2-digit', minute: '2-digit' });
// the name appears once, in the greeting; the question stays as it is
function greetingFor(h) {
  const who = NAME ? ', ' + NAME : '';
  if (h >= 5 && h < 11) return 'Guten Morgen' + who + '! ☀️';
  if (h >= 11 && h < 18) return 'Guten Tag' + who + '! 🌤️';
  if (h >= 18 && h < 23) return 'Guten Abend' + who + '! 🌆';
  return 'Gute Nacht' + who + '! 🌙';
}
function updateClock() {
  const t = new Date();
  document.getElementById('date').textContent = dateFmt.format(t) + ' · ' + timeFmt.format(t);
  document.getElementById('greeting').textContent = greetingFor(t.getHours());
}
updateClock();
setInterval(updateClock, 30000);

// ---------- subject buttons ----------
const grid = document.getElementById('grid');
for (const [key, f] of Object.entries(FAECHER)) {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'fach';
  b.innerHTML = `<span class="icon">${f.icon}</span><span>${f.title}</span>`;
  b.addEventListener('click', () => go(f.screen ? { id: f.screen } : { id: 'hilfe', fach: key }));
  grid.appendChild(b);
}

route('frage', {});
route('faecher', {});
