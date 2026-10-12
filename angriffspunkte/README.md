# Angriffspunkte

Probleme, Inkonsistenzen und Bereiche, die der GegenStandpunkt nicht erklären oder erfassen kann, soweit sie bisher erarbeitet sind. Jede Datei hält einen Punkt fest: die These, die GSP-Stellen mit Fundstelle in `sources/`, die stärkste Gegenrede, was danach übrig bleibt, und wie man weitersucht.

Stand: 12. Oktober 2026. Grundlage sind der Briefwechsel mit Stefan (GS-Verlag), die Bewertungen der Entwürfe und die Prüfungen der Theorieschrift (siehe [../korrespondenz/](../korrespondenz/) und [../theorie/pruefungen/](../theorie/pruefungen/)).

## Leitfrage

> Wo wird aus der richtigen Bestimmung eines gesellschaftlichen Verhältnisses mehr über das Bewusstsein und die Handlungsmöglichkeiten seiner Teilnehmer geschlossen, als diese Bestimmung begründet?

(aus [Astras Überarbeitung](../korrespondenz/bewertungen/astra-kommentierte-ueberarbeitung.md)). So gestellt braucht ein Einwand weder einen Maßstab von außen noch die Behauptung, jede Kritik sei subjektiv. Er verlangt nur, dass ein zusätzlicher Schluss ebenso begründet wird wie die Erklärung, auf der er aufbaut.

## Übersicht

| Nr. | Punkt | Status | Einschätzung |
|---|---|---|---|
| [01](01-erwerbsquelle-und-kalkulation.md) | Wo beginnt der Fehler beim Gelderwerb? („in Wahrheit gar nicht kalkulieren“, 2-03 gegen 2-08) | in der Korrespondenz | mittel; kann durch eine Präzisierung beantwortet werden |
| [02](02-alternativen-und-motivschluss.md) | Fragen nach den Mitteln als Motivschluss („Kritik statt Alternativen“, 1-04), Planung konkurrierender Bedürfnisse | in der Korrespondenz | bisher der stärkste Punkt |
| [03](03-psychologie-fortwirkung-und-entschluss.md) | Fortbestehende Wirkung als „Widerspruch“, „Entschluss“ als Erklärung (2-18, 4-21) | offen | trifft einen bestimmten Schluss; eigenes Thema |
| [04](04-iran-reichweite-der-prognose.md) | Reichweite des Iran-Ausschlusses von 2020 gegenüber 2025 und 2026 | zurückgestellt | konkret, als Widerlegung bisher nicht tragfähig |
| [05](05-abstufung-der-notwendigkeit.md) | „Nicht ganz so notwendig“: Abstufungen im falschen Bewusstsein (3-25) | aufgegangen in 01 | trifft Stefans Antwort, nicht die Theorie |
| [06](06-interessenkritik-und-zweckkritik.md) | Interessenkritik und Zweckkritik, der bewusste Opferentschluss (4-13, 1-06) | offen | interessant, aber ohne tragende Textstelle |
| [07](07-antikritik-und-revidierbarkeit.md) | Antikritik und Revidierbarkeit: woran eine Lageanalyse scheitern könnte | offen als Frage | schwach ohne Beispiel |
| [08](08-bewusstsein-und-gewalt.md) | Bewusstsein und Gewalt: „hängt an beidem“ (3-17) | geklärt | kein Widerspruch |

Außerdem:

- [verworfen.md](verworfen.md): Einwände, die nicht halten, mit Grund. Vor einem neuen Brief lesen.
- [forschungsfelder.md](forschungsfelder.md): Bereiche, die noch nicht untersucht oder zu dünn belegt sind, Grenzen der Quellenbasis, Revisionen im GSP selbst.
- [_vorlage.md](_vorlage.md): Vorlage für einen neuen Punkt.

## Einordnung

Aus keinem dieser Befunde folgt bisher eine Widerlegung der Wert-, Kapital-, Staats- oder Imperialismustheorie. Die tragfähigen Punkte betreffen Übergänge: von der Erklärung eines Verhältnisses zur Kritik des Bewusstseins seiner Teilnehmer, und von dort zur Begründung einer gemeinsamen Veränderung. Eine Antwort, die die Reichweite einer Aussage einschränkt oder eine praktische Begründungsaufgabe anerkennt, ist deshalb schon ein Ergebnis.

## So arbeitet man hier weiter

1. **Erst den Wortlaut.** Jede These hängt an einer bestimmten Stelle. Die Fundstellen stehen als `sources/<datei>.md:<zeile>` in den Dateien. Die Sitemaps in [../docs/sitemap/](../docs/sitemap/) helfen, Artikel zu finden.
2. **Die stärkste Gegenrede aufschreiben**, möglichst mit eigener GSP-Stelle. Viele frühe Einwände sind daran gescheitert, dass der GSP die Unterscheidung schon selbst macht.
3. **Zitate prüfen** mit
   ```sh
   node scripts/check-quotes.mjs angriffspunkte/*.md
   ```
   Das Skript sucht jedes „…“-Zitat wörtlich in `sources/` und `korrespondenz/`. Zitate, die nur online stehen, in der Zeile mit „(nur online)“ markieren.
4. **Heftangaben von Antworttexten** (Leserbriefe, Repliken) auf gegenstandpunkt.com gegenprüfen; die Kopfzeilen der Sammlungen sind dort manchmal falsch (siehe [forschungsfelder.md](forschungsfelder.md)).
5. Was nicht hält, nach [verworfen.md](verworfen.md) verschieben statt zu löschen.
