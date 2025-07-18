function initialisiereSchneider() {
  const dateiEingabe = document.getElementById('dateiEingabe');
  const startMin = document.getElementById('startMin');
  const startSek = document.getElementById('startSek');
  const endMin = document.getElementById('endMin');
  const endSek = document.getElementById('endSek');
  const ausgabeName = document.getElementById('ausgabeName');
  const schnittKnopf = document.getElementById('schnittKnopf');
  const status = document.getElementById('status');

  let audioDauer = 0;
  let dateiBlob = null;

  dateiEingabe.value = '';
  ausgabeName.value = 'schnitt.mp3';
  status.textContent = '';
  schnittKnopf.disabled = true;

  dateiEingabe.addEventListener('change', () => {
    const datei = dateiEingabe.files[0];
    if (!datei) return;
    if (datei.type !== 'audio/mpeg' && !datei.name.toLowerCase().endsWith('.mp3')) {
      alert('Bitte wähle eine MP3-Datei aus.');
      dateiEingabe.value = '';
      return;
    }
    dateiBlob = datei;
    const audio = document.createElement('audio');
    audio.src = URL.createObjectURL(datei);
    audio.addEventListener('loadedmetadata', () => {
      audioDauer = audio.duration;
      const min = Math.floor(audioDauer / 60);
      const sek = Math.floor(audioDauer % 60).toString().padStart(2, '0');
      status.textContent = `Dauer: ${min}:${sek}`;
      schnittKnopf.disabled = false;
    });
  });

  schnittKnopf.addEventListener('click', () => {
    const start = parseInt(startMin.value) * 60 + parseInt(startSek.value);
    const ende = parseInt(endMin.value) * 60 + parseInt(endSek.value);
    if (isNaN(start) || isNaN(ende) || start >= ende || ende > audioDauer) {
      alert('Ungültige Zeiten.');
      return;
    }
    const dateiGröße = dateiBlob.size;
    const startByte = Math.floor((start / audioDauer) * dateiGröße);
    const endByte = Math.floor((ende / audioDauer) * dateiGröße);
    const teil = dateiBlob.slice(startByte, endByte);
    const blob = new Blob([teil], { type: 'audio/mpeg' });
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

window.initialisiereSchneider = initialisiereSchneider;
