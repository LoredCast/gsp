# Theorieschrift

Zwei Dokumente mit derselben Kapitelordnung, die nebeneinander benutzt werden können:

- [GSP-Theorie.md](GSP-Theorie.md): „Die Theorie des GegenStandpunkt in Zitaten“, die Belegsammlung.
- [GSP-Ableitung.md](GSP-Ableitung.md): „Die Theorie des GegenStandpunkt als Ableitung“, dieselben Argumente als Prämissen, Schritte und Schlüsse in eigenen Sätzen.

Dazu [GSP-Kern.md](GSP-Kern.md): „Der feste Kern“, die Aussagen aus der Ableitung, gegen die nach allen bisherigen Prüfungen kein offener Einwand übrig ist, jeweils mit Fundstelle und Prüfvermerk, dazu die widerlegten Einwände und was mit welchem Grund nicht im Kern steht.

## Die Zitatsammlung

[GSP-Theorie.md](GSP-Theorie.md): „Die Theorie des GegenStandpunkt in Zitaten. Eine Rekonstruktion aus Zeitschriftenartikeln, nach Themen geordnet.“ Dritte, überarbeitete Fassung, Stand 12. Oktober 2026, mit den Korrekturen aus Astras Prüfung.

- 18 Kapitel, von der Methode über Wert, Kapital, Kredit, Lohn, Krise, Staat, Sozialstaat, Demokratie, Nation und Imperialismus bis zu Moral, Öffentlichkeit, Umwelt und Linke.
- Jedes Argument steht zuerst als Prosa und ist dann mit wörtlichen Zitaten belegt: 1508 Zitate aus 408 Texten, jeweils mit Titel, Heft, Jahr, Gattung und Abschnitt.
- Alle Zitate sind maschinell gegen die Primärtexte in [../sources/](../sources/) geprüft. Das belegt die Wörtlichkeit, nicht den Sinn im Zusammenhang. Nachprüfen lässt sich das mit `node scripts/check-quotes.mjs theorie/GSP-Theorie.md`: Alle Zitattexte werden gefunden. Die verbleibenden Meldungen (Stand 13.10.: 144) betreffen Artikeltitel in den Quellenangaben, die in den Sammlungen anders gesetzt sind, und zwei Reihennamen in der Prosa.
- Die verbindende Prosa ist Rekonstruktion, kein Zitat. Der GSP würde schon die Form einer Zitatsammlung ablehnen; das Vorwort sagt das selbst.

## Die Ableitung

[GSP-Ableitung.md](GSP-Ableitung.md) schreibt die Argumente als ausdrückliche Ableitungen aus: Frage, Voraussetzungen (V), Schritte mit Stellenangabe, Ergebnis (Also), Abgrenzung.

- 18 Kapitel in der Ordnung der Zitatsammlung, 141 Abschnitte. Für die Grundbegriffe ist der Gang zusätzlich in den systematischen Texten nachvollzogen (GS 2-10 „Der Wert“, die Serie „Die Konkurrenz der Kapitalisten“, GS 3-25 Nachtrag, GS 4-97 „Der Staatshaushalt“).
- Keine wörtlichen Zitate. Überbrückungen, die nicht ausdrücklich im GSP stehen, sind mit (R) markiert; Grenzen und Einwände mit ⚑.
- Anhang A ordnet die Kapitel nach ihrer sachlichen Begründung, Anhang B sammelt die offenen Stellen, Anhang C löst die Kurztitel in Datei und Zeile unter [../sources/](../sources/) auf.
- Anhang B ist mit den [Angriffspunkten](../angriffspunkte/README.md) und den [Forschungsfeldern](../angriffspunkte/forschungsfelder.md) abgeglichen; welcher offene Punkt wo weiterbearbeitet wird, steht in den Forschungsfeldern.

## Prüfungen und Korrekturen

| Datei | Inhalt | Ergebnis |
|---|---|---|
| [pruefungen/2026-10-11-review-manuel.md](pruefungen/2026-10-11-review-manuel.md) | Review der ersten Fassung: Form (Zitatcollage statt Ableitung), Zeitschichten, Lücken, defekte Quellenangaben | eingearbeitet in die zweite Fassung |
| [pruefungen/2026-10-11-externe-kritik.md](pruefungen/2026-10-11-externe-kritik.md) | Externe Kritik der zweiten Fassung: zwei falsche Heftangaben, Sinnverschiebungen (10.4, 7.8, 3.3, 17.3), Verkürzungen | geprüft in der Korrekturliste |
| [pruefungen/2026-10-11-korrekturliste.md](pruefungen/2026-10-11-korrekturliste.md) | Prüfung dieser Kritik an den Primärtexten: 7 bestätigte Fehler, 4 Präzisierungen, 2 Punkte, in denen die Kritik überzieht | eingearbeitet in die dritte Fassung |
| [pruefungen/2026-10-12-review-3.md](pruefungen/2026-10-12-review-3.md) | Review der dritten Fassung: „gelungene Rekonstruktion“, aber Verdichtung in der Prosa (2.3, 3.3, 5.3, 7.4, 16.2, 17.3); Lücken bei Psychologie, Frauenfrage, Wissenschaftskritik | Prosa präzisiert (Fassung vom 12.10.); Einwände gegen GSP-Sätze selbst als [Angriffspunkte 09–13](../angriffspunkte/README.md) |
| [pruefungen/2026-10-12-astra-pruefung.md](pruefungen/2026-10-12-astra-pruefung.md) | Astras Prüfung der dritten Fassung mit sieben Entwürfen ([pruefungen/2026-10-12-astra-entwuerfe/](pruefungen/2026-10-12-astra-entwuerfe/)): Geldersatz, Inflation, Wachstumszwang, Profitrate, Klimapolitik, Krise, Wechselkurs | Korrekturen in der Fassung mit 1508 Zitaten; Einwände als [Angriffspunkte 14–21](../angriffspunkte/README.md) |
| [pruefungen/2026-10-13-gesamtkritik.md](pruefungen/2026-10-13-gesamtkritik.md) | Quellenkritisches Gesamtgutachten zur Ableitung: Beweisstatus, Typen von Voraussetzung und Notwendigkeit, Einzelkritik zu allen 18 Kapiteln | [geprüft](pruefungen/2026-10-13-gesamtkritik-pruefung.md): Darstellung an rund 20 Stellen korrigiert (Einschränkungen des GSP wiederhergestellt, „Also“-Sätze begrenzt); neuer Befund zu [19](../angriffspunkte/19-von-der-konkurrenz-zur-krise.md), Ergänzungen zu 09 und 14 |
| [pruefungen/2026-10-13-vertiefung.md](pruefungen/2026-10-13-vertiefung.md) | manuels Vertiefung der stärksten Angriffspunkte (23+22, 24+03, 02+25, 19, 15, 01) | [geprüft](pruefungen/2026-10-13-vertiefung-pruefung.md): Fundstellen stimmen; 23 und 19 überziehen gegenüber dem Text, 15 hat ein eigenes GSP-Maß; Akten 02, 15, 19, 22, 23, 24 überarbeitet |
| [pruefungen/2026-10-13-schrittpruefung.md](pruefungen/2026-10-13-schrittpruefung.md) | manuels Schrittprüfung der Ableitung nach Texttreue, Argumenttreue und Schlüssigkeit, mit [Register aller 801 Schritte](pruefungen/2026-10-13-schrittpruefung-register.md) und 170 Prüfhinweisen | [geprüft](pruefungen/2026-10-13-schrittpruefung-pruefung.md): der behauptete Wiedergabefehler (3.3) steht so im Volltext; Darstellung korrigiert in 1.4, 3.1, 4.3, 4.7, 6.2, 9.5, 11.6, 18.1 und 18.10; neue Einwände zu Wertgröße (2.3), Kapitalzweck (2.5) und Staatskredit (7.8) |

## Was sich als tragfähig erwiesen hat

Alle Prüfungen bestätigen die Kernthesen als GSP-nah und sauber wiedergegeben, unter anderem: Erklären statt Idealvergleich; Wert als Eigentums- und Gewaltverhältnis; der Lohn kauft die Verfügung über die Arbeitskraft; Ausbeutung vermittelt durch den freien Austausch; fiktives Kapital als reale Verfügungsmacht; Unterschied zwischen praktischem Zwang zum Gelderwerb und Zustimmung zum Kapitalismus; Staat als ideeller Gesamtkapitalist; Sozialstaat als Umverteilung innerhalb der Klasse; Wahl als Ermächtigung; „Kriegsgründe entstehen im Frieden“; keine Geschichtsteleologie und kein selbsttätiger Zusammenbruch. Die dritte Review hebt außerdem hervor: Konkurrenz als Rückwirkung der gegeneinander betätigten Interessen (3.5), fiktives Kapital als wirksame, aber an künftige Erträge gebundene Verfügungsmacht (4.1–4.6).

## Offene Fragen

- **Ableitungsordnung.** Die Zitatsammlung bleibt nach Themen geordnet. Die [Ableitung](GSP-Ableitung.md) behält dieselbe Ordnung, markiert Vorgriffe und gibt in Anhang A die sachliche Reihenfolge der Begründung an.
- **Dünne Kapitel:** Psychologie (Systematik der Psychologieschrift nicht nachgebildet), Lage der Frau, Identitätspolitik, Soziologie und Wissenschaftskritik. Die Bücher liegen nicht vor. Siehe [../angriffspunkte/forschungsfelder.md](../angriffspunkte/forschungsfelder.md).
- **Was manuels Vorlage vom 12.10. für die Rekonstruktion vorschlägt:** in Kapitel 11 staatlichen Kriegszweck, Motiv des Widerstands und Veränderung der Lebensverhältnisse trennen; in Kapitel 15 klären, ob „praktiziertes Urteil“ die Fortdauer der Gewohnheit erklären soll; in Kapitel 18 Erklärung, Überzeugungsbildung und gemeinsame Praxis unterscheiden. Ausgearbeitet als [Angriffspunkte 22–25](../angriffspunkte/README.md); in der Ableitung als Anmerkungen zu 11.6, 18.1 und 18.10 vermerkt, in der Zitatsammlung noch nicht eingearbeitet.

## Herkunft

Beide Dateien werden im Projekt „GSP“ bearbeitet und hier als Kopie geführt. Neue Fassungen ersetzen die Dateien; ältere bleiben in der Git-Historie.
