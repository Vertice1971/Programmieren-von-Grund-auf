function startenSchneider() {
  const dateiEingabe = document.getElementById('fileInput');
  const startMin = document.getElementById('startMin');
  const startSek = document.getElementById('startSec');
  const endMin = document.getElementById('endMin');
  const endSek = document.getElementById('endSec');
  const ausgabeName = document.getElementById('outputName');
  const schneideKnopf = document.getElementById('cutButton');
  const status = document.getElementById('status');

  let audioDauer = 0;
  let mp3Datei = null;

  dateiEingabe.value = '';
  ausgabeName.value = 'schnitt.mp3';
  status.textContent = '';
  schneideKnopf.disabled = true;

  dateiEingabe.addEventListener('change', () => {
    const datei = dateiEingabe.files[0];
    if (!datei) return;
    if (datei.type !== 'audio/mpeg' && !datei.name.toLowerCase().endsWith('.mp3')) {
      alert('Bitte wähle eine MP3-Datei aus.');
      dateiEingabe.value = '';
      return;
    }
    mp3Datei = datei;
    const audio = document.createElement('audio');
    audio.src = URL.createObjectURL(datei);
    audio.addEventListener('loadedmetadata', () => {
      audioDauer = audio.duration;
      const min = Math.floor(audioDauer / 60);
      const sek = Math.floor(audioDauer % 60).toString().padStart(2, '0');
      status.textContent = `Dauer: ${min}:${sek}`;
      schneideKnopf.disabled = false;
    });
  });

  schneideKnopf.addEventListener('click', () => {
    const start = parseInt(startMin.value) * 60 + parseInt(startSek.value);
    const ende = parseInt(endMin.value) * 60 + parseInt(endSek.value);
    if (isNaN(start) || isNaN(ende) || start >= ende || ende > audioDauer) {
      alert('Ungültige Zeitangaben.');
      return;
    }
    const dateiGröße = mp3Datei.size;
    const byteStart = Math.floor((start / audioDauer) * dateiGröße);
    const byteEnde = Math.floor((ende / audioDauer) * dateiGröße);
    const fragment = mp3Datei.slice(byteStart, byteEnde);
    const blob = new Blob([fragment], { type: 'audio/mpeg' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    let name = ausgabeName.value.trim() || 'schnitt.mp3';
    if (!name.toLowerCase().endsWith('.mp3')) name += '.mp3';
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    status.textContent = `Datei erstellt: ${name}`;
  });
}
