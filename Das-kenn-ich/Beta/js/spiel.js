// ======== spiel.js =========
// Thomas Hills – April 2025
// -------------------------------------------
// Dieses Script implementiert die Hauptlogik des Spiels "Das kommt mir bekannt vor"
// im Einzel- und Mehrspielermodus, mit Mehrfachauswahl, Zeitgeber, Hintergrundbildern und Rundenkontrolle.

let liederVerfügbar = [];
let liederFalsch = [];
const liederVerwendet = new Set();

let anzahlRunden = 0;
let aktuelleRunde = 1;
let spieler = [];
let aktuellerSpielerIndex = 0;

let audioElement = null;
let zeitgeberId = null;
let timeoutErgebnisId = null;
let rückZählung = 6;

const bilderSpiel = [
  'bilder/fondo1.jpg', 'bilder/fondo2.jpg', 'bilder/fondo3.jpg'
];
const bildFinal = 'bilder/final.jpg';

const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);

function aleatorisch(max) {
  return Math.floor(Math.random() * max);
}

function spieleBeep(typ = 'erfolg') {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  if (typ === 'erfolg') {
    osc.frequency.value = 880;
    gain.gain.value = 0.2;
  } else {
    osc.frequency.value = 220;
    gain.gain.value = 0.3;
  }
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.25);
}

function wähleHintergrund(liste) {
  const url = liste[aleatorisch(liste.length)];
  document.body.style.backgroundImage = `url('${url}')`;
  if (liste.length === 1 && liste[0] === bildFinal) {
    document.body.style.backgroundSize = 'contain';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
  } else {
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
  }
}

function entferneHintergrund() {
  document.body.style.backgroundImage = '';
}

async function ordnerAuswählen() {
  try {
    if (!('showDirectoryPicker' in window)) {
      alert('Dein Browser unterstützt die showDirectoryPicker()-API nicht.');
      return;
    }
    const dirHandle = await window.showDirectoryPicker();
    liederVerfügbar = [];
    for await (const [name, handle] of dirHandle.entries()) {
      if (handle.kind === 'file' && name.toLowerCase().endsWith('.mp3')) {
        liederVerfügbar.push({
          titel: name.replace(/\.mp3$/i, ''),
          handle
        });
      }
    }
    if (liederVerfügbar.length === 0) {
      alert('Keine MP3-Dateien im ausgewählten Ordner gefunden.');
      return;
    }
    $('#anzahlLieder').textContent = `Lieder geladen: ${liederVerfügbar.length}`;
    fordereKonfiguration();
  } catch (err) {
    console.error(err);
    alert('Fehler beim Zugriff auf den Ordner.');
  }
}

function fordereKonfiguration() {
  const max = liederVerfügbar.length;
  let runden;
  while (true) {
    const eingabe = prompt(`Wie viele Runden? (1–${max})`, '1');
    runden = parseInt(eingabe, 10);
    if (!isNaN(runden) && runden >= 1 && runden <= max) break;
    alert(`Bitte eine Zahl zwischen 1 und ${max} eingeben.`);
  }
  anzahlRunden = runden;

  let anzahlSpieler;
  while (true) {
    const eingabe = prompt('Wie viele Spieler? (1–4)', '1');
    anzahlSpieler = parseInt(eingabe, 10);
    if (!isNaN(anzahlSpieler) && anzahlSpieler >= 1 && anzahlSpieler <= 4) break;
    alert('Gib eine Zahl von 1 bis 4 ein.');
  }

  spieler = [];
  for (let i = 0; i < anzahlSpieler; i++) {
    let name;
    do {
      name = prompt(`Name von Spieler ${i + 1}:`, `Spieler ${i + 1}`);
    } while (!name || name.trim() === '');
    spieler.push({ name: name.trim(), punkte: 0 });
  }

  renderPunktestände();
  $('#ordnerAuswahl').style.display = 'none';
  $('#spielZone').style.display = 'block';
  audioElement = $('#audio');
  nächsteRunde();
}

async function nächsteRunde() {
  if (aktuelleRunde > anzahlRunden || liederVerfügbar.length === 0) {
    beendeSpiel();
    return;
  }
  $('#runde').textContent = aktuelleRunde;
  $('#zugInfo').textContent = `Zug von ${spieler[aktuellerSpielerIndex].name}`;

  const idx = aleatorisch(liederVerfügbar.length);
  const lied = liederVerfügbar[idx];

  await spieleFragment(lied);
  zeigeOptionen(lied);
  starteZeitgeber(() => handleZeitAbgelaufen(lied));
}

async function spieleFragment(lied) {
  try {
    const file = await lied.handle.getFile();
    const url = URL.createObjectURL(file);
    wähleHintergrund(bilderSpiel);
    return new Promise(resolve => {
      audioElement.src = url;
      audioElement.load();
      audioElement.onloadedmetadata = () => {
        const dauer = audioElement.duration;
        const fragment = 10;
        let start = 0;
        if (dauer > fragment + 5) {
          start = aleatorisch(Math.floor(dauer - fragment - 5)) + 2;
        }
        audioElement.currentTime = start;
        audioElement.play();

        const balken = $('#zeitbalken');
        balken.style.transition = 'none';
        balken.style.width = '100%';
        void balken.offsetWidth;
        balken.style.transition = `width ${fragment}s linear`;
        balken.style.width = '0%';

        setTimeout(() => {
          audioElement.pause();
          URL.revokeObjectURL(url);
          balken.style.transition = 'none';
          balken.style.width = '0%';
          resolve();
        }, fragment * 1000);
      };
    });
  } catch {
    alert('Fragment konnte nicht abgespielt werden. Überspringe Lied.');
  }
}

function zeigeOptionen(correct) {
  const div = $('#antworten');
  div.innerHTML = '';
  const optionen = [correct.titel];
  const andere = liederVerfügbar.filter(l => l.titel !== correct.titel);
  while (optionen.length < 3 && andere.length) {
    const i = aleatorisch(andere.length);
    const extra = andere.splice(i, 1)[0].titel;
    if (!optionen.includes(extra)) optionen.push(extra);
  }
  optionen.sort(() => Math.random() - 0.5);
  for (const titel of optionen) {
    const btn = document.createElement('button');
    btn.textContent = titel;
    btn.classList.add('opcion-boton');
    btn.onclick = () => handleAntwort(titel, correct);
    div.appendChild(btn);
  }
}

function starteZeitgeber(onTimeout) {
  rückZählung = 6;
  $('#zeitgeber').textContent = `Zeit: ${rückZählung}s`;
  zeitgeberId = setInterval(() => {
    rückZählung--;
    $('#zeitgeber').textContent = `Zeit: ${rückZählung}s`;
    if (rückZählung <= 0) {
      clearInterval(zeitgeberId);
      onTimeout();
    }
  }, 1000);
}

function stoppeZeitgeber() {
  if (zeitgeberId) clearInterval(zeitgeberId);
  $('#zeitgeber').textContent = '';
}

function handleZeitAbgelaufen(lied) {
  spieleBeep('fehler');
  zeigeErgebnis(false, lied.titel, 'Zeit abgelaufen!');
  fortfahrenNachErgebnis();
}

function handleAntwort(gewählt, correct) {
  stoppeZeitgeber();
  $$('#antworten .opcion-boton').forEach(b => b.disabled = true);
  const richtig = gewählt === correct.titel;
  if (richtig) {
    spieleBeep('erfolg');
    spieler[aktuellerSpielerIndex].punkte++;
    liederVerfügbar = liederVerfügbar.filter(l => l.titel !== correct.titel);
    liederVerwendet.add(correct.titel);
  } else {
    spieleBeep('fehler');
    liederFalsch.push(correct);
  }
  zeigeErgebnis(richtig, correct.titel);
  renderPunktestände();
  fortfahrenNachErgebnis();
}

function zeigeErgebnis(richtig, titel, extra = '') {
  const el = $('#ergebnis');
  el.textContent = richtig
    ? `✅ Richtig! Es war "${titel}".`
    : `❌ Falsch. Es war "${titel}".`;
  if (extra) el.textContent += ' ' + extra;
}

function fortfahrenNachErgebnis() {
  timeoutErgebnisId = setTimeout(() => {
    const weiter = aktuelleRunde < anzahlRunden || (aktuellerSpielerIndex + 1) % spieler.length !== 0;
    if (weiter) $('#hinweisNächste').textContent = 'Nächstes Lied in 3 Sekunden…';
    setTimeout(() => {
      $('#ergebnis').textContent = '';
      $('#hinweisNächste').textContent = '';
      $('#antworten').innerHTML = '';
      entferneHintergrund();
      weiterSchalter();
      nächsteRunde();
    }, 3000);
  }, 5000);
}

function weiterSchalter() {
  aktuellerSpielerIndex = (aktuellerSpielerIndex + 1) % spieler.length;
  if (aktuellerSpielerIndex === 0) aktuelleRunde++;
}

function renderPunktestände(final = false) {
  const cont = $('#punktestände');
  cont.innerHTML = '';
  spieler.forEach(j => {
    const p = document.createElement('p');
    p.textContent = `${j.name}: ${j.punkte} Punkt(e)`;
    if (final) p.classList.add('final-punkte');
    cont.appendChild(p);
  });
}

function beendeSpiel() {
  wähleHintergrund([bildFinal]);
  $('#zugInfo').textContent = 'Spiel beendet';
  $('#zugInfo').classList.add('final-texto');
  $('#ergebnis').textContent = 'Endstand:';
  $('#ergebnis').classList.add('final-texto');
  $('#runde').parentElement.classList.add('final-punkte');
  renderPunktestände(true);
  $('#antworten').innerHTML = '';
  $('#zeitgeber').textContent = '';
}

window.ordnerAuswählen = ordnerAuswählen;
