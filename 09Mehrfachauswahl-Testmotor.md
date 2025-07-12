# Mehrfachauswahl-Testmotor in HTML + JavaScript

**Autor:** Thomas Hills
**Kontakt:** [tomcue@iesjuandelacierva.com](mailto:tomcue@iesjuandelacierva.com)

Dieses Projekt ermöglicht die Durchführung von Multiple-Choice-Tests (mit nur einer richtigen Antwort) direkt im Browser. Es ist ein Werkzeug für den schulischen Einsatz, besonders in der 10. Klasse oder der Oberstufe.

---

## 🧪 Was macht dieser Testmotor?

* Lädt eine `.json`-Datei mit Multiple-Choice-Fragen.
* Ermöglicht es, auszuwählen, wie viele Fragen man beantworten möchte.
* Mischt die Fragen und Antwortoptionen per Zufall.
* Zeigt visuelles Feedback nach jeder Antwort.
* Gibt am Ende die Gesamtzahl der richtigen Antworten an.
* Alles funktioniert lokal im Browser, ohne Internetverbindung.

---

## 📁 Aufbau der JSON-Datei

Die `.json`-Datei muss folgende Struktur haben:

```json
{
  "fragen": [
    {
      "text": "Was war eine der Hauptursachen der Französischen Revolution?",
      "optionen": {
        "a": "Die Entdeckung Amerikas",
        "b": "Die wirtschaftliche und soziale Krise des Ancien Régime",
        "c": "Der Spanische Erbfolgekrieg"
      },
      "antwort": "b"
    }
  ]
}
```

### 🔍 Wichtige Hinweise:

* `"text"`: ist die Aufgabenstellung.
* `"optionen"`: ein Objekt mit den Schlüsseln `"a"`, `"b"`, `"c"` … und dem jeweiligen Text.
* `"antwort"`: enthält den **Schlüssel** der richtigen Antwort, nicht den Antworttext selbst.

Du kannst auch mehr als drei Optionen verwenden (zum Beispiel `"d"`, `"e"` usw.).

---

## 🧠 Fragen mit KI generieren

Du kannst deine `.json`-Datei mit Hilfe einer KI erstellen. Kopiere einfach deine Notizen und bitte sie:

> „Erstelle 30 Multiple-Choice-Fragen mit nur einer richtigen Antwort im JSON-Format nach dieser Vorlage …“

Dann gib ihr diese Vorlage:

```json
{
  "fragen": [
    {
      "text": "Fragetext",
      "optionen": {
        "a": "Antwort A",
        "b": "Antwort B",
        "c": "Antwort C"
      },
      "antwort": "b"
    }
  ]
}
```

Überprüfe das Format, damit beim Laden keine Fehler auftreten.

---

## 🚀 So benutzt du den Test

1. Öffne die Datei `index.html` im Browser (Doppelklick oder per Drag & Drop).
2. Klicke auf „JSON-Datei auswählen“ und wähle die Datei mit den Fragen.
3. Das System zeigt an, wie viele Fragen vorhanden sind, und du kannst wählen, wie viele du beantworten möchtest.
4. Klicke auf „Test starten“, um zu beginnen.

---

## 💡 Empfehlungen

* Speichere deine `.json`-Dateien lokal auf deinem Gerät.
* Verwende sprechende Dateinamen wie `genetik10klasse.json`, `französischerevolution.json` …
* Wenn etwas nicht funktioniert, überprüfe, ob die `.json`-Datei korrekt aufgebaut ist.

---

## 🎨 Anpassung

Du kannst das Design und Verhalten anpassen über:

* Den `<style>`-Block: Farben, Schriftarten, Layout.
* Den `<script>`-Block: Verhalten (Versuchszahl, Feedback, Bewertung etc.).

---

## 🛠️ Technische Voraussetzungen

* Jeder moderne Browser (Chrome, Firefox, Edge, Brave …)
* Keine Installation oder Internetverbindung nötig
* Funktioniert unter Windows, Linux, Mac und auf Tablets

---

## 📚 Pädagogische Einsatzmöglichkeiten

* Eingangstest oder abschließende Wiederholung
* Interaktives Klassenspiel
* Selbstständige Übung mit automatischer Korrektur
* Gruppenprojekt: Die Schüler\*innen erstellen eigene Tests

---

## 🛡️ Lizenz

Freie Nutzung zu Bildungszwecken. Wenn du das Projekt verbesserst, teile es mit anderen Lehrkräften.
Thomas Hills
