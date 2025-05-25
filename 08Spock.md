# Schere, Stein, Papier, Echse oder Spock 

Dies ist ein vollständiges Webspiel **Schere, Stein, Papier, Echse oder Spock**, inspiriert von der bekannten Erweiterung des klassischen Spiels. Es ist in einer einzigen, eigenständigen HTML-Datei programmiert, die direkt in jedem modernen Browser ausgeführt werden kann. Diese Version enthält grafische Verbesserungen, erweiterte Spielregeln und ein KI-System mit drei Strategien.

## 🧠 Hauptmerkmale

- Erweiterte Spielweise mit fünf Optionen: Stein, Papier, Schere, Echse und Spock.
- Möglichkeit, die Anzahl der Runden festzulegen (bis zu 11).
- Drei Strategien der KI:
  - **Reiner Zufall**
  - **Spieler nachahmen**
  - **Antwort mit dem letzten Gewinnzug**
- Punktestand und Rundenanzeige jederzeit sichtbar.
- Audiosystem mit Web Audio API für jede Art von Ergebnis.
- Responsives Design für Smartphones, Tablets und Desktops.
- Verwendung visueller Emojis (🪨, 🧻, ✂️, 🦎, 🖖) zur Darstellung der Spielzüge.
- Sauber strukturierter, gut organisierter und vollständig eigenständiger Code.

## 🕹️ Gebrauchsanleitung

1. Öffne die `.html`-Datei in einem modernen Browser.
2. Gib an, wie viele Runden du spielen möchtest.
3. Wähle im Dropdown-Menü eine KI-Strategie aus.
4. Klicke auf „Spiel starten“.
5. Wähle deinen Zug, indem du auf einen der fünf Buttons klickst.
6. Das Spiel läuft rundenweise ab und zeigt am Ende das Gesamtergebnis an.
7. Du kannst das Spiel nach Abschluss der Partie neu starten.

## 📄 Code-Struktur

Die HTML-Datei enthält:

- **Internes CSS** für das visuelle Design, mit responsivem Layout über Media Queries.
- **Strukturiertes HTML** mit Konfigurationsansicht und Spielbildschirm.
- **Eingebettetes JavaScript**, das:
  - Die erweiterte Spiellogik mit allen fünf Optionen verwaltet.
  - Die KI-Auswahl entsprechend der gewählten Strategie trifft.
  - Runden, Punktestand und Mitteilungen steuert.
  - Das Audiosystem mit unterschiedlichen Tönen für jedes Ergebnis bedient.

## 🔊 Sound

Das Spiel verwendet die **Web Audio API**, um unterschiedliche Sounds abzuspielen, wenn:

- du eine Runde gewinnst
- du eine Runde verlierst
- es zu einem Unentschieden kommt
- das Spiel endet

## 👤 Autor
Thomas Hills

## 💡 Verbesserungsvorschläge

- Animationen oder Übergangseffekte zwischen Spielzügen hinzufügen.
- Verlauf früherer Spielzüge anzeigen.
- Eine Regelübersicht mit den Beziehungen der fünf Optionen integrieren.
- Einen lokalen Zwei-Spieler-Modus erstellen.

## ✅ Projektstatus

**Finale, voll funktionsfähige Version.** Du kannst sie frei teilen, auf GitHub Pages hosten oder für eigene Lern- oder Bildungsprojekte anpassen.

---
