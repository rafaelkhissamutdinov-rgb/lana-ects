// ---------- Laborpraktikum: build the protocol prompt ----------
const laborForm = document.getElementById('labor-form');
const promptTpl = document.getElementById('prompt-tpl').textContent.trim();
const preview = document.getElementById('prompt-preview');
const copyStatus = document.getElementById('copy-status');

function fill(tpl, vars) {
  for (const [k, v] of Object.entries(vars)) tpl = tpl.split('{{' + k + '}}').join(v);
  return tpl;
}
function buildPrompt() {
  const fd = new FormData(laborForm);
  const modus = fd.get('modus');
  const datum = fd.get('datum') ? fd.get('datum').split('-').reverse().join('.') : '[__]';
  const rohdaten = (fd.get('daten') || '').trim();
  let daten;
  if (modus === 'VORBEREITUNG') daten = '— (Vorbereitung, noch keine Daten)';
  else if (rohdaten) daten = '\n```\n' + rohdaten + '\n```';
  else daten = 'siehe Anhänge im Chat';
  return fill(promptTpl, {
    MODUS: modus,
    NAMEN: (fd.get('namen') || '').trim() || '[__]',
    DATUM: datum,
    BERECHNUNG: fd.get('berechnung'),
    SPRACHE: fd.get('sprache'),
    DATEN: daten,
    KI_REGEL: fd.get('ki')
      ? 'Setz auf die Titelfolie den Vermerk „KI-gestützt erstellt“.'
      : 'Keine Erwähnung von KI auf den Folien, außer ich bitte um den Vermerk „KI-gestützt erstellt“.',
  });
}
function updateLabor() {
  const auswertung = new FormData(laborForm).get('modus') === 'AUSWERTUNG';
  document.getElementById('daten-field').style.display = auswertung ? '' : 'none';
  preview.textContent = buildPrompt();
  copyStatus.textContent = '';
  try { localStorage.setItem('labor-namen', laborForm.namen.value); } catch (e) {}
}
try { laborForm.namen.value = localStorage.getItem('labor-namen') || ''; } catch (e) {}
laborForm.addEventListener('input', updateLabor);
laborForm.addEventListener('change', updateLabor);
updateLabor();

const zeitBtn = document.getElementById('zeit-btn');
zeitBtn.addEventListener('click', () => {
  const z = document.getElementById('zeit');
  z.hidden = !z.hidden;
  zeitBtn.setAttribute('aria-expanded', String(!z.hidden));
});

document.getElementById('copy-prompt').addEventListener('click', async () => {
  const text = buildPrompt();
  let ok = false;
  try { await navigator.clipboard.writeText(text); ok = true; } catch (e) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { ok = document.execCommand('copy'); } catch (e2) {}
    ta.remove();
  }
  copyStatus.textContent = ok ? 'Kopiert! Jetzt in Claude einfügen.' : 'Kopieren hat nicht geklappt – öffne „Prompt ansehen“ und kopier den Text von Hand.';
});

route('labor', {});
