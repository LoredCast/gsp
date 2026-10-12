# Theorieschrift

[GSP-Theorie.md](GSP-Theorie.md): „Die Theorie des GegenStandpunkt in Zitaten. Eine Rekonstruktion aus Zeitschriftenartikeln, nach Themen geordnet.“ Dritte, überarbeitete Fassung, Stand 12. Oktober 2026.

- 18 Kapitel, von der Methode über Wert, Kapital, Kredit, Lohn, Krise, Staat, Sozialstaat, Demokratie, Nation und Imperialismus bis zu Moral, Öffentlichkeit, Umwelt und Linke.
- Jedes Argument steht zuerst als Prosa und ist dann mit wörtlichen Zitaten belegt: 1503 Zitate aus 408 Texten, jeweils mit Titel, Heft, Jahr, Gattung und Abschnitt.
- Alle Zitate sind maschinell gegen die Primärtexte in [../sources/](../sources/) geprüft. Das belegt die Wörtlichkeit, nicht den Sinn im Zusammenhang. Nachprüfen lässt sich das mit `node scripts/check-quotes.mjs theorie/GSP-Theorie.md`: Alle Zitattexte werden gefunden. Die verbleibenden Meldungen (Stand 12.10.: 143) betreffen Artikeltitel in den Quellenangaben, die in den Sammlungen anders gesetzt sind, und zwei Reihennamen in der Prosa.
- Die verbindende Prosa ist Rekonstruktion, kein Zitat. Der GSP würde schon die Form einer Zitatsammlung ablehnen; das Vorwort sagt das selbst.

## Prüfungen und Korrekturen

| Datei | Inhalt | Ergebnis |
|---|---|---|
| [pruefungen/2026-10-11-review-manuel.md](pruefungen/2026-10-11-review-manuel.md) | Review der ersten Fassung: Form (Zitatcollage statt Ableitung), Zeitschichten, Lücken, defekte Quellenangaben | eingearbeitet in die zweite Fassung |
| [pruefungen/2026-10-11-externe-kritik.md](pruefungen/2026-10-11-externe-kritik.md) | Externe Kritik der zweiten Fassung: zwei falsche Heftangaben, Sinnverschiebungen (10.4, 7.8, 3.3, 17.3), Verkürzungen | geprüft in der Korrekturliste |
| [pruefungen/2026-10-11-korrekturliste.md](pruefungen/2026-10-11-korrekturliste.md) | Prüfung dieser Kritik an den Primärtexten: 7 bestätigte Fehler, 4 Präzisierungen, 2 Punkte, in denen die Kritik überzieht | eingearbeitet in die dritte Fassung |
| [pruefungen/2026-10-12-review-3.md](pruefungen/2026-10-12-review-3.md) | Review der dritten Fassung: „gelungene Rekonstruktion“, aber Verdichtung in der Prosa (2.3, 3.3, 5.3, 7.4, 16.2, 17.3); Lücken bei Psychologie, Frauenfrage, Wissenschaftskritik | Prosa präzisiert (Fassung vom 12.10.); Einwände gegen GSP-Sätze selbst als [Angriffspunkte 09–13](../angriffspunkte/README.md) |

## Was sich als tragfähig erwiesen hat

Alle drei Prüfungen bestätigen die Kernthesen als GSP-nah und sauber wiedergegeben, unter anderem: Erklären statt Idealvergleich; Wert als Eigentums- und Gewaltverhältnis; der Lohn kauft die Verfügung über die Arbeitskraft; Ausbeutung vermittelt durch den freien Austausch; fiktives Kapital als reale Verfügungsmacht; Unterschied zwischen praktischem Zwang zum Gelderwerb und Zustimmung zum Kapitalismus; Staat als ideeller Gesamtkapitalist; Sozialstaat als Umverteilung innerhalb der Klasse; Wahl als Ermächtigung; „Kriegsgründe entstehen im Frieden“; keine Geschichtsteleologie und kein selbsttätiger Zusammenbruch. Die dritte Review hebt außerdem hervor: Konkurrenz als Rückwirkung der gegeneinander betätigten Interessen (3.5), fiktives Kapital als wirksame, aber an künftige Erträge gebundene Verfügungsmacht (4.1–4.6).

## Offene Fragen

- **Ableitungsordnung.** Soll die Schrift entlang der Serie „Die Konkurrenz der Kapitalisten“ (GS 3-17 bis 1-25) in Ableitungsordnung umgebaut werden, statt nach Themen? Offen im Projekt-Thread „GSP-Theorie aus Primärtexten“; dort empfohlen: Themenordnung behalten, Vorgriffe markieren.
- **Dünne Kapitel:** Psychologie (Systematik der Psychologieschrift nicht nachgebildet), Lage der Frau, Identitätspolitik, Soziologie und Wissenschaftskritik. Die Bücher liegen nicht vor. Siehe [../angriffspunkte/forschungsfelder.md](../angriffspunkte/forschungsfelder.md).

## Herkunft

Die Datei wird im Projekt „GSP“ bearbeitet und hier als Kopie geführt. Neue Fassungen ersetzen diese Datei; ältere bleiben in der Git-Historie.
