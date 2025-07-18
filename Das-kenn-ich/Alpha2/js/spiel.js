// ======== spiel.js auf Deutsch =========
// Tomás Cuesta – Letzte konsistente Version
// ----------------------------------------

let verfügbareLieder = [];
let fehlgeschlageneLieder = [];
const verwendeteLieder = new Set();

let anzahlRunden = 0;
let aktuelleRunde = 1;
let spieler = [];
let aktuellerSpielerIndex = 0;

let audioElement = null;
let timerId = null;
let ergebnisTimeoutId = null;
let rückwärtsZähler = 6;

const spielHintergrundBilder = [
  'bilder/fondo1.jpg', 'bilder/fondo2.jpg', 'bilder/fondo3.jpg'
];
const endBild = 'bilder/final.jpg';

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function zufall(max) {
  return Math.floor(Math.random() * max);
}

// (optional) leere Beep-Funktion
function abspielBeep(art = 'richtig') {
  // Sound später hinzufügen
}

function hintergrundBildWählen(liste) {
  const url = liste[zufall(liste.length)];
  document.body.style.backgroundImage = `url('${url}')`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundPosition = 'center';
}

function hintergrundEntfernen() {
  document.body.style.backgroundImage = '';
}

async function ordnerAuswählen() {
  try {
    if (!('showDirectoryPicker' in window)) {
      alert('Dein Browser unterstützt showDirectoryPicker() nicht.');
      return;
    }
    const dirHandle = await window.showDirectoryPicker();
    verfügbareLieder = [];

    for await (const [name, handle] of dirHandle.entries()) {
      if (handle.kind === 'file' && name.toLowerCase().endsWith('.mp3')) {
        verfügbareLieder.push({
          titel: name.replace(/\.mp3$/i, ''),
          handle
        });
      }
    }

    if (verfügbareLieder.length === 0) {
      alert('Keine MP3-Dateien im gewählten Ordner gefunden.');
      return;
    }
    $('#numCanciones').textContent = `Lieder geladen: ${verfügbareLieder.length}`;
    konfigurationAnfordern();
  } catch (err) {
    console.error(err);
    alert('Fehler beim Zugriff auf den Ordner.');
  }
}

function konfigurationAnfordern() {
  const maxRunden = verfügbareLieder.length;
  let runden;
  while (true) {
    const eingabe = prompt(`Wie viele Runden spielen? (1 – ${maxRunden})`, '10');
    runden = parseInt(eingabe, 10);
    if (!isNaN(runden) && runden >= 1 && runden <= maxRunden) break;
    alert(`Bitte Zahl zwischen 1 und ${maxRunden} eingeben.`);
  }
  anzahlRunden = runden;

  let anzahlSpieler;
  while (true) {
    const eingabe = prompt('Wie viele Spieler? (1 – 4)', '1');
    anzahlSpieler = parseInt(eingabe, 10);
    if (!isNaN(anzahlSpieler) && anzahlSpieler >= 1 && anzahlSpieler <= 4) break;
    alert('Bitte gültige Zahl zwischen 1 und 4 eingeben.');
  }

  spieler = [];
  for (let i = 0; i < anzahlSpieler; i++) {
    let name;
    do {
      name = prompt(`Name Spieler ${i + 1}:`, `Spieler ${i + 1}`);
    } while (!name || name.trim() === '');
    spieler.push({ name: name.trim(), punkte: 0 });
  }

  punkteAnzeigen();
  $('#seleccionCarpeta').style.display = 'none';
  $('#zonaJuego').style.display = 'block';
  audioElement = $('#audio');
  nächsteRunde();
}

async function nächsteRunde() {
  if (aktuelleRunde > anzahlRunden || verfügbareLieder.length === 0) {
    spielBeenden();
    return;
  }

  $('#ronda').textContent = aktuelleRunde;
  $('#infoTurno').textContent = `Spieler: ${spieler[aktuellerSpielerIndex].name}`;

  const idx = zufall(verfügbareLieder.length);
  const lied = verfügbareLieder[idx];

  await fragmentAbspielen(lied);
  optionenAnzeigen(lied);
  timerStarten(() => antwortZeitAbgelaufen(lied));
}

async function fragmentAbspielen(lied) {
  try {
    const datei = await lied.handle.getFile();
    const url = URL.createObjectURL(datei);

    hintergrundBildWählen(spielHintergrundBilder);

    return new Promise((resolve) => {
      audioElement.src = url;
      audioElement.load();
      audioElement.onloadedmetadata = () => {
        const dauer = audioElement.duration;
        const fragment = 10;
        let start = 0;
        if (dauer > fragment + 5) {
          start = zufall(Math.floor(dauer - fragment - 5)) + 2;
        }
        audioElement.currentTime = start;
        audioElement.play();

        setTimeout(() => {
          audioElement.pause();
          URL.revokeObjectURL(url);
          resolve();
        }, fragment * 1000);
      };
    });
  } catch (e) {
    console.error(e);
    alert('Fragment konnte nicht abgespielt werden. Weiter zum nächsten Lied.');
  }
}

function optionenAnzeigen(richtigesLied) {
  const cont = $('#opciones');
  cont.innerHTML = '';

  const optionen = [richtigesLied.titel];
  const andere = verfügbareLieder
    .filter(l => l.titel !== richtigesLied.titel)
    .map(l => l.titel);

  while (optionen.length < 3 && andere.length) {
    const i = zufall(andere.length);
    const extra = andere.splice(i, 1)[0];
    if (!optionen.includes(extra)) optionen.push(extra);
  }

  optionen.sort(() => Math.random() - 0.5);

  for (const titel of optionen) {
    const btn = document.createElement('button');
    btn.textContent = titel;
    btn.classList.add('opcion-boton');
    btn.onclick = () => antwortVerarbeiten(titel, richtigesLied);
    cont.appendChild(btn);
  }
}

function timerStarten(onTimeout) {
  rückwärtsZähler = 15;
  $('#temporizador').textContent = `Zeit: ${rückwärtsZähler}s`;
  timerId = setInterval(() => {
    rückwärtsZähler--;
    $('#temporizador').textContent = `Zeit: ${rückwärtsZähler}s`;
    if (rückwärtsZähler <= 0) {
      clearInterval(timerId);
      onTimeout();
    }
  }, 1000);
}

function timerStoppen() {
  if (timerId) clearInterval(timerId);
  $('#temporizador').textContent = '';
}

function antwortZeitAbgelaufen(lied) {
  abspielBeep('error');
  ergebnisAnzeigen(false, lied.titel, 'Zeit abgelaufen!');
  weitermachenNachErgebnis();
}

function antwortVerarbeiten(gewählte, richtigesLied) {
  timerStoppen();
  $$('#opciones .opcion-boton').forEach(b => b.disabled = true);

  const richtig = gewählte === richtigesLied.titel;
  if (richtig) {
    abspielBeep('correct');
    spieler[aktuellerSpielerIndex].punkte++;
    verfügbareLieder = verfügbareLieder.filter(l => l.titel !== richtigesLied.titel);
    verwendeteLieder.add(richtigesLied.titel);
  } else {
    abspielBeep('error');
    fehlgeschlageneLieder.push(richtigesLied);
  }

  ergebnisAnzeigen(richtig, richtigesLied.titel);
  punkteAnzeigen();
  weitermachenNachErgebnis();
}

function ergebnisAnzeigen(richtig, titel, extra = '') {
  const res = $('#resultado');
  res.textContent = richtig
    ? `✅ Richtig! Es war "${titel}".`
    : `❌ Falsch. Es war "${titel}".`;
  if (extra) res.textContent += '\n' + extra;
}

function weitermachenNachErgebnis() {
  ergebnisTimeoutId = setTimeout(() => {
    $('#avisoSiguiente').textContent = 'Nächstes Lied in 3 Sekunden…';
    setTimeout(() => {
      $('#resultado').textContent = '';
      $('#avisoSiguiente').textContent = '';
      $('#opciones').innerHTML = '';
      hintergrundEntfernen();
      zugWechseln();
      nächsteRunde();
    }, 3000);
  }, 7000);
}

function zugWechseln() {
  aktuellerSpielerIndex = (aktuellerSpielerIndex + 1) % spieler.length;
  if (aktuellerSpielerIndex === 0) aktuelleRunde++;
}

function punkteAnzeigen(final = false) {
  const cont = $('#puntuaciones');
  cont.innerHTML = '';
  spieler.forEach(s => {
    const p = document.createElement('p');
    p.textContent = `${s.name}: ${s.punkte} Punkt(e)`;
    if (final) p.classList.add('final-puntuation');
    cont.appendChild(p);
  });
}

function spielBeenden() {
  hintergrundBildWählen([endBild]);

  $('#infoTurno').textContent = 'Spiel beendet';
  $('#infoTurno').classList.add('final-texto');

  $('#resultado').textContent = 'Endstand:';
  $('#resultado').classList.add('final-texto');

  $('#ronda').parentElement.classList.add('puntuation-final');

  punkteAnzeigen(true);

  $('#opciones').innerHTML = '';
  $('#temporizador').textContent = '';
}

window.seleccionarCarpeta = ordnerAuswählen;
