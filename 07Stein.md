# Stein, Papier oder Schere (Endgültige Version)

Dies ist ein vollständiges Webspiel **Stein, Papier oder Schere**, programmiert in einer einzigen, eigenständigen HTML-Datei, die direkt in jedem modernen Browser ausgeführt werden kann. Die endgültige Version enthält alle geplanten Funktionen und hat die Beta-Phase erfolgreich abgeschlossen.

## 🧠 Hauptmerkmale

- Klassisches Spiel gegen den Computer
- Möglichkeit, die Rundenzahl festzulegen (bis zu 11)
- Drei Strategien der KI:
  - **Reiner Zufall**
  - **Spieler nachahmen**
  - **Mit vorherigem Gewinnzug kontern**
- Punktestand und Rundenanzeige jederzeit sichtbar
- Audiosystem mit Web Audio API für jede Art von Ergebnis
- Responsives Design für Smartphones, Tablets und Desktops
- Einsatz von visuellen Emojis (🪨, 🧻, ✂️) zur Darstellung der Spielzüge
- Sauber strukturierter, gut verständlicher Code

## 🕹️ Gebrauchsanleitung

1. Öffne die `.html`-Datei in einem modernen Browser.
2. Gib an, wie viele Runden du spielen möchtest.
3. Wähle im Dropdown-Menü eine KI-Strategie aus.
4. Klicke auf „Spiel starten“.
5. Wähle deinen Zug, indem du einen der Buttons klickst: Stein, Papier oder Schere.
6. Das Spiel läuft rundenweise ab und zeigt am Ende das Gesamtergebnis an.

## 📄 Code-Struktur

Die HTML-Datei enthält:

- **Internes CSS** für das visuelle Design mit responsivem Layout über Media Queries
- **Strukturiertes HTML** mit Konfigurations- und Spielansicht
- **Eingebettetes JavaScript**, das:
  - die Spiel-Logik verwaltet
  - die KI-Auswahl entsprechend der Strategie trifft
  - Runden, Punktestand und Nachrichten steuert
  - Soundeffekte für wichtige Ereignisse abspielt

## 🔊 Sound

Das Spiel verwendet die **Web Audio API**, um unterschiedliche Sounds abzuspielen, wenn:

- du eine Runde gewinnst
- du eine Runde verlierst
- es zu einem Unentschieden kommt
- das Spiel endet

## 👤 Autor
Thomas Hills

## 💡 Verbesserungsmöglichkeiten

- Animationen zwischen den Spielzügen hinzufügen
- Hilfe- oder Regelbutton integrieren
- Frühere Spielstände im localStorage speichern
- Lokale Mehrspieler-Version entwickeln

## ✅ Projektstatus

**Finale, voll funktionsfähige Version.** Du kannst sie frei teilen, auf GitHub Pages hosten oder für eigene Lern- oder Bildungsprojekte anpassen.

---
