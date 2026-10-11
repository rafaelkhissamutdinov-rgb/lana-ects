// ---------- thumbs flying out of the video edges while it plays ----------
let thumbTimer = null;

function spawnThumb(video, emojis) {
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];
  const r = video.getBoundingClientRect();
  if (!r.width) return;
  // random point on the video's border
  const side = Math.floor(Math.random() * 4);
  let x, y;
  if (side === 0)      { x = r.left + Math.random() * r.width; y = r.top; }
  else if (side === 1) { x = r.right; y = r.top + Math.random() * r.height; }
  else if (side === 2) { x = r.left + Math.random() * r.width; y = r.bottom; }
  else                 { x = r.left; y = r.top + Math.random() * r.height; }
  // fly away from the video's center
  const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
  let dx = x - cx, dy = y - cy;
  const len = Math.hypot(dx, dy) || 1;
  const dist = 120 + Math.random() * 180;
  dx = dx / len * dist; dy = dy / len * dist;

  const t = document.createElement('span');
  t.className = 'thumb';
  t.textContent = emoji;
  const size = 34 + Math.random() * 28;
  t.style.fontSize = size + 'px';
  t.style.left = (x - size / 2) + 'px';
  t.style.top = (y - size / 2) + 'px';
  document.body.appendChild(t);

  const spin = (Math.random() - .5) * 120;
  t.animate([
    { transform: 'translate(0,0) scale(.4) rotate(0deg)', opacity: 0 },
    { opacity: 1, offset: .15 },
    { transform: `translate(${dx}px, ${dy}px) scale(1.2) rotate(${spin}deg)`, opacity: 0 }
  ], { duration: 1400 + Math.random() * 800, easing: 'cubic-bezier(.2,.7,.3,1)' })
    .onfinish = () => t.remove();
}

function startThumbs(video, emojis, from = video) {
  stopThumbs();
  if (reduceMotion) return;
  thumbTimer = setInterval(() => {
    if (!video.paused) for (let i = 0; i < 3; i++) spawnThumb(from, emojis);
  }, 220);
}
function stopThumbs() {
  clearInterval(thumbTimer);
  thumbTimer = null;
}

// ---------- answer videos ----------
const videos = {
  ja: document.getElementById('video-ja'),
  nein: document.getElementById('video-nein'),
  katze: document.getElementById('video-katze'),
  opa: document.getElementById('video-opa'),
};
const thumbs = { ja: ['👍'], nein: ['👎'], katze: ['😄', '😁', '🥳', '🌈', '☀️', '✨', '🌻', '🎉', '💛', '🦋'] };

// ---------- TP2 scene: lightning and falling charts ----------
const tp2Scene = document.getElementById('scene-tp2');
for (let i = 0; i < 12; i++) {
  const f = document.createElement('span');
  f.className = 'tumble';
  f.innerHTML = ic('trending-down');
  f.style.left = (Math.random() * 92) + '%';
  f.style.width = f.style.height = (26 + Math.random() * 30) + 'px';
  f.style.animationDuration = (3 + Math.random() * 4) + 's';
  f.style.animationDelay = (-Math.random() * 7) + 's';
  f.style.setProperty('--spin', ((Math.random() - .5) * 540) + 'deg');
  tp2Scene.appendChild(f);
}

// ---------- happy cat: remove the green screen on a canvas ----------
const katzeVideo = videos.katze;
const canvas = document.getElementById('canvas-katze');
const ctx = canvas.getContext('2d', { willReadFrequently: true });
let katzeFrames = 0, katzeLoop = false;
function kickKatze() {
  if (!katzeLoop) { katzeLoop = true; requestAnimationFrame(drawKatze); }
}
function drawKatze() {
  if (katzeVideo.paused || katzeVideo.ended || !document.getElementById('katze').classList.contains('active')) {
    katzeLoop = false;
    return;
  }
  try {
    // crop the empty green margins so the cat appears bigger
    const vw = katzeVideo.videoWidth, vh = katzeVideo.videoHeight;
    ctx.drawImage(katzeVideo, vw * .15, vh * .1, vw * .7, vh * .8, 0, 0, canvas.width, canvas.height);
    const img = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const d = img.data;
    for (let i = 0; i < d.length; i += 4) {
      const r = d[i], g = d[i + 1], b = d[i + 2];
      const m = r > b ? r : b;
      const green = g - m;
      if (green > 90) d[i + 3] = 0;
      else if (green > 25) {
        d[i + 3] = 255 * (1 - (green - 25) / 65);
        d[i + 1] = m; // remove green spill on the fur edges
      } else if (green > 0) d[i + 1] = m;
    }
    ctx.putImageData(img, 0, 0);
    katzeFrames++;
  } catch (e) {
    useKatzeFallback();
    katzeLoop = false;
    return;
  }
  requestAnimationFrame(drawKatze);
}
function useKatzeFallback() {
  canvas.style.display = 'none';
  katzeVideo.classList.add('fallback');
}
katzeVideo.addEventListener('play', kickKatze);
// if the phone refuses to hand frames to the canvas, just show the video itself
katzeVideo.addEventListener('timeupdate', () => {
  if (katzeVideo.currentTime > 1 && katzeFrames === 0) useKatzeFallback();
});
canvas.addEventListener('click', () => katzeVideo.paused ? katzeVideo.play() : katzeVideo.pause());

// ---------- gloomy scene: rain + faded anxious emoji ----------
const gloom = document.getElementById('scene-gloom');
for (let i = 0; i < 70; i++) {
  const r = document.createElement('div');
  r.className = 'drop';
  r.style.left = (Math.random() * 100) + '%';
  r.style.animationDuration = (0.7 + Math.random() * 0.8) + 's';
  r.style.animationDelay = (-Math.random() * 2) + 's';
  gloom.appendChild(r);
}

// ---------- happy scene: sun rays and soft floating lights ----------
const happy = document.getElementById('scene-happy');
for (let i = 0; i < 16; i++) {
  const d = document.createElement('span');
  d.className = 'bokeh';
  const r = 20 + Math.random() * 70;
  d.style.width = d.style.height = r + 'px';
  d.style.left = (Math.random() * 95) + '%';
  d.style.top = (10 + Math.random() * 85) + '%';
  d.style.background = `radial-gradient(circle, rgba(255,${200 + Math.round(Math.random() * 55)},${120 + Math.round(Math.random() * 100)},.55), rgba(255,255,255,0) 70%)`;
  d.style.animationDuration = (3 + Math.random() * 4) + 's';
  d.style.animationDelay = (-Math.random() * 3) + 's';
  happy.appendChild(d);
}

function answer(id) {
  go({ id });
  const v = videos[id];
  v.currentTime = 0;
  // play() inside the click handler so the browser allows sound
  v.play().catch(() => {});
}

document.getElementById('btn-ja').addEventListener('click', () => answer('ja'));
document.getElementById('btn-nein').addEventListener('click', () => answer('nein'));
document.getElementById('btn-will').addEventListener('click', () => go({ id: 'faecher' }));
document.getElementById('hilfe-body').addEventListener('click', e => {
  const b = e.target.closest('[data-go]');
  if (b) answer(b.dataset.go);
});
document.querySelectorAll('.back').forEach(b => b.addEventListener('click', () => history.back()));

// ---------- routes of the video screens ----------
function videoRoute(id, scene) {
  route(id, {
    scene,
    enter() {
      const from = id === 'katze' && !katzeVideo.classList.contains('fallback') ? canvas : videos[id];
      if (thumbs[id]) startThumbs(videos[id], thumbs[id], from);
      if (id === 'katze' && !katzeVideo.paused) kickKatze();
    },
    leave() { videos[id].pause(); stopThumbs(); },
  });
}
videoRoute('ja');
videoRoute('nein');
videoRoute('katze', 'scene-happy');
videoRoute('opa', 'scene-gloom');
route('tp2', { scene: 'scene-tp2' });
route('hilfe', {
  enter(state) {
    const f = FAECHER[state.fach];
    document.getElementById('hilfe-icon').innerHTML = ic(f.icon);
    document.getElementById('hilfe-title').textContent = f.title;
    document.getElementById('hilfe-body').innerHTML = f.html || '<p class="soon">Hilfen kommen bald</p>';
  },
});
