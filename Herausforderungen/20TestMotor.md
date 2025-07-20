# Wahr/Falsch-Test
---

Dies ist ein interaktiver Test, der es dem Benutzer ermöglicht, Wahr/Falsch-Fragen zu beantworten, die aus einer JSON-Datei geladen werden. Die Anzahl der Fragen kann vor dem Start ausgewählt werden. Am Ende werden die erreichte Punktzahl und eine personalisierte Zusammenfassung mit Rückmeldung zu jeder Antwort angezeigt.

## Anweisungen

1. Bereiten Sie eine **JSON-Datei** mit Fragen in folgendem Format vor:
   ```json
   {
     "fragen": [
       { "text": "Die Erde dreht sich um die Sonne.", "antwort": true },
       { "text": "Wasser kocht bei 80 Grad.", "antwort": false }
     ]
   }
   ```

### In der Benutzeroberfläche:

- Wählen Sie die JSON-Datei aus.
- Geben Sie an, wie viele Fragen Sie beantworten möchten (z.B. 10 oder 20).
- Klicken Sie auf **Quiz laden**, um zu beginnen.

### Während des Tests:

- Beantworten Sie jede Frage, indem Sie die richtige Option markieren.
  - Die Antworten werden zufällig gemischt.
  - Sie können Ihre Antwort vor dem Absenden ändern.

### Nach Abschluss:

- Klicken Sie auf **Antworten absenden**, um das Ergebnis zu sehen:
  - Es wird angezeigt, wie viele Antworten Sie richtig beantwortet haben.
  - Jede Frage enthält einen Kommentar, der angibt, ob Ihre Antwort richtig war oder nicht.
- Sie können den Test mit anderen Fragen wiederholen, indem Sie die Schaltfläche **Erneut versuchen** verwenden.

## Eigenschaften

- Klare und zugängliche Benutzeroberfläche mit sofortigem Feedback.
- Kompatibel mit jedem modernen Browser.
- Dynamisches Lesen von JSON-Dateien ohne externe Verbindung.
- Einfacher visueller Stil, angepasst für den Bildungsbereich.
- Unterstützt zufällige Auswahl der Anzahl anzuzeigender Fragen.

## Verwendete Technologien

- **HTML5**
- **CSS3** (responsives Design und Hervorhebung von Ergebnissen)
- **JavaScript** (Dateilesung, DOM-Manipulation, Korrekturlogik)

## Autor

Thomas Hills
[E-Mail: tomcue@iesjuandelacierva.com](mailto:tomcue@iesjuandelacierva.com)