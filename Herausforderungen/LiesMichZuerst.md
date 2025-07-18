# PROGRAMMIERHERAUSFORDERUNGEN

In diesem Ordner befinden sich alle Lösungen zu den Herausforderungen aus dem Buch *„Programmieren von Grund auf (wirklich) mit Künstlicher Intelligenz lernen“*.
Lies dir zuerst diese Aufgaben und Hinweise durch und vergleiche nach dem gemeinsamen Entwickeln deiner eigenen Lösungen mit deiner Lieblings-KI meine Vorschläge, die diesem Dokumentenordner beiliegen.

---

## 1. ZAHL RATEN (`12ZahlRaten`)

**Funktionale Beschreibung des Spiels „Zahl Raten“**

Du wirst ein kleines Ratespiel mit folgenden Eigenschaften programmieren:

### 1. Startbildschirm mit Modusauswahl:

* **Einfacher Modus**: Es wird angezeigt, ob die geheime Zahl höher oder niedriger ist.
* **Schwieriger Modus**: Zusätzlich wird angezeigt, ob du dich der Zahl näherst oder entfernst.

### 2. Starteinstellungen:

* Auswahl der maximalen Versuche (zwischen 1 und 10).
* Nach Bestätigung beginnt das Spiel ohne weitere Änderungen.

### 3. Spielablauf:

* Das Programm generiert eine Zahl zwischen 1 und 100.
* Der Spieler gibt Zahlen ein und erhält Hinweise.
* Erfolgs- oder Fehlermeldungen am Ende.

### 4. Benutzeroberfläche:

* Anzeige der verwendeten und verbleibenden Versuche.
* Visuelle Hinweise und Sounds bei Treffern und Fehlern.

### 5. Neustart:

* Schaltfläche zum Hauptmenü und vollständigen Neustart.

---

## 2. PAARE – MEMORY-SPIEL (`13VisuellesMemory`)

**Funktionale Beschreibung des „Memory-Spiels“**

### Spielphasen:

#### 1. Erste Auswahl:

* Wahl der Anzahl der Paare (2 bis 10).
* Spielfeld mit doppelter Kartenanzahl (ein Paar pro Motiv).

#### 2. Spielverlauf:

* Alle Karten sind zunächst verdeckt.
* Zwei Karten pro Zug aufdecken. Stimmen sie überein, bleiben sie sichtbar.
* Unterschiedliche Sounds für Treffer und Fehler.

#### 3. Spielende:

* Glückwunsch-Nachricht.
* „Neustart“-Button mit neuer Auswahl.

### Visuelle und technische Merkmale:

* Anpassbares Raster-Spielfeld.
* Figuren mit CSS: Kreise, Sterne, Herzen …
* 3D-Drehanimation.
* Nutzung von Arrays, bedingter Logik und modernem CSS.

---

### 2 PLUS: ZUSATZAUFGABE – UNREGELMÄSSIGE VERBEN IM ENGLISCHEN (`13bMemoryEnglisch`)

**Anpassung des Memory-Spiels zum Üben unregelmäßiger Verben:**

* Karten mit:

  * Infinitiv + Übersetzung
  * Partizip Perfekt auf Englisch
    *Beispiel: `go – gehen` ↔ `gone`*

#### Zusätzliche Anforderungen:

* Spieleranzahl und Namen abfragen.
* Abwechselnde Züge mit sichtbarem Punktestand.
* Sounds mit Web Audio API (hoher und tiefer Ton).
* Endergebnis (Einzel- oder Mehrspielermodus).
* Button zur Rückkehr ins Hauptmenü.

**Codekriterien:**

* Selbstenthaltendes HTML.
* Gutes Design ohne externe Ressourcen.
* Nutzung von Arrays, Bedingungen und DOM.

---

### UND JETZT AUF FRANZÖSISCH! (`13bMemoryFranzösisch`)

**Version im Passé Composé**

* Infinitiv + Übersetzung ↔ zusammengesetzte Verbform im Französischen
  *Beispiel: `aller – gehen` ↔ `je suis allé`*

#### Wie in der englischen Version, aber mit:

* Zusammengesetzten Partizipien: `je suis/j’ai + Partizip`
* Maximal 15 Paare für Spielbarkeit.
* Alle bisherigen Effekte und Funktionen bleiben erhalten.

---

## 3. HERAUSFORDERUNGEN „REPARIERE DIE CODES MIT TITEL 99…“

**Dateien:** `14Galgenmännchen`, `15Klickspiel`, `16SimonSpiel`, `17PanzerSpiel`, `18DreiGewinnt`
**Ziel:** Überprüfen, korrigieren, verbessern – nutze die KI als Verbündete!

### Einige Ideen:

* **Galgenmännchen**: Animationen überprüfen (z. B. Beine).
* **Klickspiel**: Dynamik und Sichtbarkeit verbessern.
* **SimonSpiel**: Fehlertoleranz überdenken.
* **PanzerSpiel**: Oberfläche verbessern, zweiten Panzer hinzufügen, Schadensbalken.
* **DreiGewinnt**: Interface, Farben, Animationen, Schwierigkeitsgrad.

---

## 4. DREI AUFGABEN AUF BASIS DES MULTIPLE-CHOICE-TESTS (`19TestLiteraturRealismus`, `20TestVorlage`, `20TestMotor`, `21MehrfachTestMotor_v2`)

### Erste Aufgabe:

**Selbstenthaltende Versionen thematischer Tests erstellen**

* JSON direkt ins HTML einfügen.
* Keine separaten Dateiladungen nötig.

### Zweite Aufgabe:

**Wahr/Falsch-Test**

* Änderung der HTML- und JSON-Struktur.
* Aussage + boolescher Wert.

### Dritte Aufgabe:

**Fehlerrückstufung**

Je nach Anzahl der Optionen:

* 3 Optionen → −0,5 pro Fehler
* 4 Optionen → −0,33 pro Fehler
* W/F → −1 pro Fehler

**Ergebnis:**
Ein strengerer, fairerer Test – realistischer, wie in einer echten Prüfung.

---
