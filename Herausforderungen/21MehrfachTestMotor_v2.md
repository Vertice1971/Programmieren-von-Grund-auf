# Multiple-Choice-Test – Version 2

Dies ist die **zweite Version** des interaktiven Multiple-Choice-Tests, entwickelt von Thomas Hills. In dieser Version wurde ein **Fehlerrabattsystem** eingeführt, das die Endbewertung realistischer macht und eine gerechtere und genauere Einschätzung ermöglicht.

## Was verbessert diese Version?

In der **ursprünglichen Version** wurden Fehler nicht bestraft. Dadurch konnte das Lernende dazu verleiten, zufällig zu antworten, was zu einer überhöhten Note führte, ohne dass das tatsächliche Verständnis des Inhalts widergespiegelt wurde.

Diese **neue Version bestraft jeden Fehler** anteilig am Wert der jeweiligen Frage. Dadurch gilt:

* **Richtige Antworten** erhöhen die Punktzahl bis zu einer Endnote von 10.
* **Falsche Antworten** verringern die Punktzahl anteilig, abhängig von der Anzahl der falschen Optionen.

So spiegelt die erreichte Note das tatsächliche Wissen des Lernenden besser wider, zufälliges Raten wird entmutigt und überlegtes Antworten belohnt.

## Anleitung zur Nutzung

1. **Wähle eine JSON-Datei** mit Fragen nach folgendem Schema:

   ```json
   {
     "preguntas": [
       {
         "texto": "¿Cuál es la capital de Francia?",
         "opciones": {
           "a": "París",
           "b": "Roma",
           "c": "Madrid"
         },
         "respuesta": "a"
       }
     ]
   }
   ```

* Wähle, wie viele Fragen du beantworten möchtest.
* Die Fragen erscheinen einzeln mit **zufällig gemischten** Antwortoptionen.
* Beim Klicken auf eine Option:

  * Wenn sie **richtig** ist, wird sie **grün markiert** und **Punkte werden addiert**.
  * Wenn sie **falsch** ist, wird sie **rot markiert**, die richtige Option wird angezeigt und eine **proportionale Strafe** wird angewendet.
* Klicke auf **Weiter**, um zur nächsten Frage zu gelangen.
* Am Ende des Tests wird angezeigt:

  * Die **Gesamtzahl der richtigen Antworten**.
  * Die **Endnote auf einer Skala von 0 bis 10**, mit einem Minimum von 0.
* Du kannst den Test **neu starten**, um mit einer neuen zufälligen Auswahl zu spielen.

## Merkmale

* Bewertungssystem mit **proportionaler Fehlerstrafe**.
* Schrittweiser **Fragenfortschritt**.
* **Klares, animiertes und mobilfreundliches** Design.
* **Fortlaufende Punktzahl und Dezimalnote**.
* Möglichkeit zum **vollständigen Neustart** mit neuer Zufallsauswahl.

## Verwendete Technologien

* **HTML5**
* **CSS3** (modernes Design mit Animationen, Rändern und Farben)
* **JavaScript** (DOM-Verwaltung, Bewertungssystem, dynamische Punktzahl)

## Autor

**Thomas Hills**
[E-Mail: tomcue@iesjuandelacierva.com](mailto:tomcue@iesjuandelacierva.com)
