// ---------- memory model: when was something learned, how strong is it now ----------
// Every success makes the memory last ~2.2x longer (1 day, 2.2 d, 4.8 d, 10.6 d, ...);
// brightness = retention = e^(-days since last review / stability). A failed card restarts at half a day.
let memLogData = store.get('stern-log', null);
if (!memLogData) {   // first run: adopt what was already learned before the Sternwarte existed
  memLogData = {};
  const now = Date.now();
  for (const [cid, box] of Object.entries(store.get('e2-box', {}))) if (box > 0) memLogData['e2:' + cid] = { t: now, n: box };
  for (const tid of store.get('ana3-done', [])) memLogData['ana:' + tid] = { t: now, n: 1 };
  store.set('stern-log', memLogData);
}
function memLog(id, ok) {
  const prev = memLogData[id] || { n: 0 };
  memLogData[id] = { t: Date.now(), n: ok ? Math.min(prev.n + 1, 8) : 0 };
  store.set('stern-log', memLogData);
}
function memForget(id) { delete memLogData[id]; store.set('stern-log', memLogData); }
function memStrength(id) {
  const m = memLogData[id];
  if (!m) return null;                         // never learned
  const stability = m.n === 0 ? 0.5 : Math.pow(2.2, m.n - 1);
  const days = (Date.now() - m.t) / 864e5;
  return Math.exp(-days / stability);
}

// ---------- one-step undo and reset ----------
// Before every change of progress we keep a copy of the state before it, so the last step can be undone.
function saveUndo(what) {
  store.set('progress-undo', { what, box: e2Box, done: [...anaDone], log: memLogData });
}
function undoLast() {
  const u = store.get('progress-undo', null);
  if (!u) return;
  e2Box = u.box; anaDone = new Set(u.done); memLogData = u.log;
  store.set('e2-box', e2Box); store.set('ana3-done', [...anaDone]); store.set('stern-log', memLogData);
  try { localStorage.removeItem('progress-undo'); } catch (e) {}
}
function resetProgress(scope) {   // scope: 'all' | 'e2' | 'ana'
  saveUndo('reset-' + scope);
  if (scope !== 'ana') { e2Box = {}; store.set('e2-box', e2Box); }
  if (scope !== 'e2') { anaDone = new Set(); store.set('ana3-done', []); }
  for (const k of Object.keys(memLogData))
    if (scope === 'all' || k.startsWith(scope + ':')) delete memLogData[k];
  store.set('stern-log', memLogData);   // stays {} (not null), so nothing is re-adopted on reload
}
