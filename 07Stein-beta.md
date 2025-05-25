# Stein, Papier oder Schere – Beta-Version

Dies ist ein klassisches Spiel **Stein, Papier oder Schere**, programmiert in einer einzigen HTML-Datei, die direkt im Browser funktioniert – ganz ohne Internetverbindung oder zusätzliche Installation.

## 📜 Beschreibung

Du kannst auswählen, wie viele Runden du spielen möchtest (zwischen 1 und 11) und trittst gegen eine **einfache KI** an, die ihren Zug zufällig wählt.

Jede Runde wird von Soundeffekten begleitet und zeigt auf dem Bildschirm, welchen Zug du und die KI gemacht haben. Am Ende verkündet das Programm das Gesamtergebnis und bietet die Möglichkeit, das Spiel **neu zu starten**.

Das Spiel ist vollständig für **Smartphones, Tablets und Desktop-Bildschirme** optimiert, mit responsivem Design und skalierbaren Buttons und Texten.

## 🧠 Entscheidungsalgorithmus

Die KI entscheidet sich zufällig für **rock**, **paper** oder **scissors**. Die Spielregeln sind folgendermaßen kodiert:

```javascript
const rules = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
```

Das bedeutet:

* Stein schlägt Schere
* Papier schlägt Stein
* Schere schlägt Papier

Wenn beide dasselbe wählen, endet die Runde unentschieden.

## ✨ Hauptfunktionen

* 🎮 Klare, responsive Benutzeroberfläche
* 🔊 Soundeffekte in jeder Runde und am Spielende
* 📱 Anpassung an alle Bildschirmgrößen
* 🧠 Einfacher, effizienter Entscheidungsalgorithmus
* 🪨📜✂️ Verwendung von **realistischen Emojis** für Stein, Papier und Schere
* 🧪 Voll funktionsfähige Beta-Version

## 📁 Gebrauchsanleitung

1. Lade die Datei `spiel.html` herunter.
2. Öffne sie per Doppelklick oder im Browser deiner Wahl.
3. Gib die gewünschte Rundenzahl ein.
4. Wähle deinen Zug, indem du auf einen der drei Buttons klickst.
5. Das Spiel zeigt die Ergebnisse an, zählt die Punkte und gibt am Ende das Gesamtergebnis aus.

## 👨‍💻 Autor

\[Dein Name]

Dieses Spiel ist Teil des Bildungsprojekts **„Programmieren von Grund auf“**, das Web-Programming-Konzepte anhand von Spielen, Simulationen und Lernwerkzeugen vermittelt.

## 🔧 Projektstatus

**Beta-Version – betriebsbereit**
Funktioniert auf allen Geräten korrekt.
Geplante Erweiterungen: weitere Spielmodi, Musteranalyse des Spielers und variable KI-Strategien.

## 📤 Teilen und Hosten

Du kannst diese Datei auf GitHub als öffentliche Seite hochladen oder einfach als Datei weitergeben. Eine Installation ist nicht erforderlich – ein moderner Browser genügt.

---
