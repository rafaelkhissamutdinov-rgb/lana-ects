// ---------- app install (PWA) ----------
// the beta copy runs without offline cache, so every visit shows the newest test version
const BETA = location.pathname.includes('-beta');
if (BETA) {
  const tag = document.createElement('div');
  tag.className = 'beta-tag'; tag.textContent = 'BETA';
  document.body.appendChild(tag);
  if ('serviceWorker' in navigator) navigator.serviceWorker.getRegistrations().then(rs => rs.forEach(r => r.unregister())).catch(() => {});
}
if ('serviceWorker' in navigator && !BETA) {
  navigator.serviceWorker.register('sw.js', { updateViaCache: 'none' }).then(r => r.update()).catch(() => {});
  // when a new version replaces an old one, reload once so the fresh page is shown
  // (not on the very first visit, when there was no old version yet)
  const hadController = !!navigator.serviceWorker.controller;
  let reloaded = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (hadController && !reloaded) { reloaded = true; location.reload(); }
  });
}
const standalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
const installBtn = document.getElementById('install-btn');
const installHelp = document.getElementById('install-help');
let installPrompt = null;
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); installPrompt = e; });
if (!standalone) installBtn.hidden = false;
installBtn.addEventListener('click', async () => {
  if (installPrompt) {
    installPrompt.prompt();
    await installPrompt.userChoice.catch(() => {});
    installPrompt = null;
    return;
  }
  const ios = /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  installHelp.innerHTML = ios
    ? '<b>Auf dem iPhone (Safari):</b><ol><li>Unten auf <b>Teilen</b> tippen (Quadrat mit Pfeil nach oben).</li><li><b>„Zum Home-Bildschirm“</b> wählen.</li><li>Oben rechts <b>Hinzufügen</b>.</li></ol>'
    : '<b>Auf Android (Chrome):</b><ol><li>Oben rechts auf <b>⋮</b> tippen.</li><li><b>„App installieren“</b> oder <b>„Zum Startbildschirm hinzufügen“</b> wählen.</li></ol>';
  installHelp.hidden = !installHelp.hidden;
});

currentScreen = 'frage';
window.addEventListener('popstate', e => show(e.state || { id: 'frage' }));
history.replaceState({ id: 'frage' }, '', location.pathname + location.search);
