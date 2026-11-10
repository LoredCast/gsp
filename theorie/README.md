# Theorieschrift

Vier Dokumente, die aufeinander aufbauen. Wer neu einsteigt, liest von oben nach unten; wer einen Satz prüfen will, von unten nach oben.

| Datei | Was sie ist | Wofür man sie nimmt |
|---|---|---|
| [GSP-Gesamtdarstellung.md](GSP-Gesamtdarstellung.md) | ‚Theorie, Einwände, fester Kern‘: Fließtext in sechs Teilen | zum Lesen; der Einstieg in Theorie, Einwände und Rangfolge der Schwachstellen |
| [GSP-Kern.md](GSP-Kern.md) | ‚Der feste Kern‘: die Aussagen, gegen die nach allen Prüfungen kein offener Einwand übrig ist, mit Fundstelle, Prüfvermerk und Reichweite; dazu die gescheiterten Einwände und was nicht im Kern steht | um zu sehen, was hält und wie weit es reicht |
| [GSP-Ableitung.md](GSP-Ableitung.md) | ‚Die Theorie des GegenStandpunkt als Ableitung‘: die Argumente als Voraussetzungen, Schritte und Schlüsse in eigenen Sätzen | um einen Schluss Schritt für Schritt zu prüfen |
| [GSP-Theorie.md](GSP-Theorie.md) | ‚Die Theorie des GegenStandpunkt in Zitaten‘: die Belegsammlung, in derselben Kapitelordnung wie die Ableitung | um den Wortlaut zu finden |

Regel für alle vier: Jeder Satz der Gesamtdarstellung über den GSP muss sich im Kern oder in der Ableitung wiederfinden, und jeder Satz dort in der Zitatsammlung oder in `sources/`. Wer einen Satz für unbelegt hält, prüft zuerst die Stelle, die Kern und Ableitung für ihn angeben ([Bestandskritik](pruefungen/2026-11-10-bestandskritik.md), Abschnitt 3).

## Die Gesamtdarstellung

[GSP-Gesamtdarstellung.md](GSP-Gesamtdarstellung.md), Stand 10. November 2026.

- Teil I stellt die Theorie dar, Teil II sagt, was jeder Prüfung standgehalten hat, Teil III führt die Einwände mit Befund und Gewicht, Teil IV nennt die Lücken und Verschiebungen im GSP selbst, Teil V vergleicht mit anderen Theorien, Teil VI zieht Bilanz und gibt die Rangfolge.
- Sie stützt sich auf Kern, Ableitung, die [Angriffspunkte](../angriffspunkte/README.md) und die 24 [Auswertungen externer Texte](../extern/README.md).
- Zitate in „…“ sind wörtlich und mit `node scripts/check-quotes.mjs theorie/GSP-Gesamtdarstellung.md` geprüft.

## Der Kern

[GSP-Kern.md](GSP-Kern.md), Stand 10. November 2026. Die Kernaussagen sind seit der Schwachstellenprüfung vom 13.10.2026 unverändert. Neu sind Reichweitenhinweise zu 1.1, 1.2, 7.5, 8.1, 8.11, 10.5 und 16.2: Sie sagen, wofür eine Aussage gilt und wofür nicht, und nennen die Gegenstelle im GSP.

## Die Zitatsammlung

[GSP-Theorie.md](GSP-Theorie.md): ‚Die Theorie des GegenStandpunkt in Zitaten. Eine Rekonstruktion aus Zeitschriftenartikeln, nach Themen geordnet.‘ Dritte, überarbeitete Fassung, Stand 12. Oktober 2026, mit den Korrekturen aus Astras Prüfung.

- 18 Kapitel, von der Methode über Wert, Kapital, Kredit, Lohn, Krise, Staat, Sozialstaat, Demokratie, Nation und Imperialismus bis zu Moral, Öffentlichkeit, Umwelt und Linke.
- Jedes Argument steht zuerst als Prosa und ist dann mit wörtlichen Zitaten belegt: 1508 Zitate aus 408 Texten, jeweils mit Titel, Heft, Jahr, Gattung und Abschnitt.
- Alle Zitate sind maschinell gegen die Primärtexte in [../sources/](../sources/) geprüft. Das belegt die Wörtlichkeit, nicht den Sinn im Zusammenhang. Nachprüfen lässt sich das mit `node scripts/check-quotes.mjs theorie/GSP-Theorie.md`: Alle Zitattexte werden gefunden. Artikeltitel in Belegposition, die in den Sammlungen anders gesetzt sind, zählt das Skript seit dem 10.11.2026 getrennt und meldet sie nicht mehr als fehlend.
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
| [pruefungen/2026-10-13-nachpruefung.md](pruefungen/2026-10-13-nachpruefung.md) | manuels Nachprüfung der Angriffspunkte nach PR #5 (23+22, 24+03, 02+25, 19+16, 15+20) mit Vorschlag einer Akte 26 zur Wahl | [geprüft](pruefungen/2026-10-13-nachpruefung-pruefung.md): Fundstellen stimmen; 23, 24, 25, 19 und 15 schon so in den Akten; Gegenrede in 16 korrigiert (§ 7 begründet das Wachstum vor der Konkurrenz), 20 enger gefasst, 02 und 23 ergänzt; [Angriffspunkt 26](../angriffspunkte/26-wahl-als-ermaechtigung.md) angelegt, enger als vorgeschlagen |
| [pruefungen/2026-10-13-schwachstellen.md](pruefungen/2026-10-13-schwachstellen.md) | manuels Liste von 16 Schwachstellen nach Schweregrad, von Zirkeln in Staat und Bewusstsein bis zu Begriffsunschärfen | [geprüft](pruefungen/2026-10-13-schwachstellen-pruefung.md): sechs treffen unsere Darstellung (Handelsbilanz 6.6, relativer Mehrwert 3.3, Geschlechterrollen 8.11, Gesundheitswesen 8.3, New Economy 4.8, Faschismus 9.5) und sind korrigiert; die Grundsatzeinwände zu Staatszweck (7.6), Zirkel (7.1) und Bewusstsein (1.5) treffen eine Lesart, die die Ableitung ausschließt, und sind mit ihrem offenen Kern vermerkt |
| [pruefungen/2026-11-10-bestandskritik.md](pruefungen/2026-11-10-bestandskritik.md) | Kritik des ganzen Bestands: Zustand des Repositorys, Treue zum GSP, Neubewertung aller Angriffspunkte auf einer Skala (Befund und Gewicht), ein zweites Muster (was der Zweck nicht bestimmt), sieben neue Punkte | umgesetzt: Skripte und Verweise berichtigt, Gesamtdarstellung und Kern überarbeitet, Akten 32 bis 38 angelegt; eine eigene Fehldiagnose zum Sozialstaat an der Quelle berichtigt (Abschnitt 3.1) |

## Was sich als tragfähig erwiesen hat

Alle Prüfungen bestätigen die Kernthesen als GSP-nah und sauber wiedergegeben, unter anderem: Erklären statt Idealvergleich; Wert als Eigentums- und Gewaltverhältnis; der Lohn kauft die Verfügung über die Arbeitskraft; Ausbeutung vermittelt durch den freien Austausch; fiktives Kapital als reale Verfügungsmacht; Unterschied zwischen praktischem Zwang zum Gelderwerb und Zustimmung zum Kapitalismus; Staat als ideeller Gesamtkapitalist; Sozialstaat als Umverteilung innerhalb der Klasse; Wahl als Ermächtigung; ‚Kriegsgründe entstehen im Frieden‘; keine Geschichtsteleologie und kein selbsttätiger Zusammenbruch. Die dritte Review hebt außerdem hervor: Konkurrenz als Rückwirkung der gegeneinander betätigten Interessen (3.5), fiktives Kapital als wirksame, aber an künftige Erträge gebundene Verfügungsmacht (4.1–4.6).

## Offene Fragen

- **Ableitungsordnung.** Die Zitatsammlung bleibt nach Themen geordnet. Die [Ableitung](GSP-Ableitung.md) behält dieselbe Ordnung, markiert Vorgriffe und gibt in Anhang A die sachliche Reihenfolge der Begründung an.
- **Gegenstellen, die noch fehlen:** Die Reichweitenhinweise des Kerns nennen Stellen (zu 7.5, 8.1, 8.7, 10.5, 15.1, 16.2), die in Zitatsammlung und Ableitung noch nicht eingearbeitet sind. Liste mit Fundorten in den [Forschungsfeldern](../angriffspunkte/forschungsfelder.md).
- **Dünne Kapitel:** Psychologie (Systematik der Psychologieschrift nicht nachgebildet), Lage der Frau, Identitätspolitik, Soziologie und Wissenschaftskritik. Die Bücher liegen nicht vor. Siehe [../angriffspunkte/forschungsfelder.md](../angriffspunkte/forschungsfelder.md).
- **Was manuels Vorlage vom 12.10. für die Rekonstruktion vorschlägt:** in Kapitel 11 staatlichen Kriegszweck, Motiv des Widerstands und Veränderung der Lebensverhältnisse trennen; in Kapitel 15 klären, ob „praktiziertes Urteil“ die Fortdauer der Gewohnheit erklären soll; in Kapitel 18 Erklärung, Überzeugungsbildung und gemeinsame Praxis unterscheiden. Ausgearbeitet als [Angriffspunkte 22–25](../angriffspunkte/README.md); in der Ableitung als Anmerkungen zu 11.6, 18.1 und 18.10 vermerkt, in der Zitatsammlung noch nicht eingearbeitet.

## Herkunft

Zitatsammlung und Ableitung werden im Projekt ‚GSP‘ bearbeitet und hier als Kopie geführt. Neue Fassungen ersetzen die Dateien; ältere bleiben in der Git-Historie.
