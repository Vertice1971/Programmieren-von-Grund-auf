# Statistik

**Autor:** Thomas Hills
**Kontakt:** [tomcue@iesjuandelacierva.com](mailto:tomcue@iesjuandelacierva.com)

## Beschreibung

Dieses Programm ist eine interaktive Webanwendung, die Würfe eines Würfels simuliert. Die Anzahl der Seiten des Würfels kann vom Benutzer festgelegt werden. Es ist möglich, eine Serie zufälliger Würfe zu generieren und die daraus resultierenden Daten statistisch auszuwerten.

Es wurde als didaktisches Werkzeug entwickelt, um statistische Konzepte auf visuelle und praktische Weise im Unterricht zu behandeln.

## Funktionen

* **Wurfsimulation:** Der Benutzer wählt die Anzahl der Seiten und die Anzahl der Würfe.
* **Sofortige Anzeige der Ergebnisse.**
* **Häufigkeitstabelle**, die Folgendes enthält:

  * Absolute Häufigkeit (fi)
  * Kumulierte absolute Häufigkeit (Fi)
  * Relative Häufigkeit (hi)
  * Kumulierte relative Häufigkeit (Hi)
* **Optional berechenbar:**

  * Modalwert (in der Tabelle hervorgehoben)
  * Mittelwert
  * Varianz
  * Standardabweichung
  * Variationskoeffizient (VK)
* **Interaktive Visualisierung des Medians** mit Verteilung der Wertebereiche nach Seiten.
* **Visualisierung der Quartile (Q1, Q2, Q3)** mit unterschiedlicher Farbgebung.
* **Berechnung individueller Perzentile**, mit spezieller Hervorhebung.
* **Übersichtliches Interface, ohne externe Abhängigkeiten**, vollständig als `.html`-Datei eigenständig lauffähig.

## Verwendung

1. Öffne die Datei `simulador_dado.html` in einem modernen Webbrowser.
2. Gib die Anzahl der Würfelseiten und die Anzahl der Würfe ein.
3. Klicke auf „Würfeln“.
4. Analysiere die Ergebnisse oder öffne die Häufigkeitstabelle und die grafischen Darstellungen.

## Verwendete Technologien

* **HTML + CSS + reines JavaScript**
* Hochwertiger PRNG: `xoshiro128**` mit `splitmix32`, um qualitativ hochwertige und reproduzierbare Zufallszahlen zu erzeugen.

## Autorenschaft

Dieses Programm wurde von **Thomas Hills**, Philosophielehrer und didaktischer Entwickler, als Teil einer Reihe von Bildungswerkzeugen zur praktischen Vermittlung von Logik, Statistik und wissenschaftlichem Denken entwickelt.
