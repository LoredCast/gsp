# Externe Quellen im Vergleich mit dem GSP

In diesem Ordner werden Texte von außerhalb des GegenStandpunkts geprüft: Transkripte, Bücher, Artikel, Vorträge. Für jede Quelle wird gefragt, was der GSP zu ihr sagen würde, wo er gegen sie gut dasteht, wo er schwach ist und wer in welcher Frage recht hat.

## Aufbau

Pro Quelle gibt es einen Unterordner mit zwei Dateien:

- `transkript.md` (bei Büchern und Artikeln entsprechend `text.md` oder Auszüge): die Quelle selbst, mit Herkunft und Zustand. Die Auswertung zitiert nach Zeilennummern dieser Datei. Ist die Quelle urheberrechtlich geschützt, etwa ein Buch, oder unveröffentlicht, liegt stattdessen nur `quelle.md` mit Angaben zur ausgewerteten Fassung und zur Gliederung; die Fundstellen beziehen sich dann auf diese Fassung.
- `auswertung.md`: Thesen der Quelle, was der GSP dazu sagt, wo beide übereinstimmen, wer wo stärker ist, ein Urteil nach Fragen getrennt und was daraus für [theorie/](../theorie/) und [angriffspunkte/](../angriffspunkte/) folgt.

## Verfahren

- **Der GSP spricht mit eigenen Texten.** Was er sagen würde, wird mit wörtlichen Zitaten aus `sources/` belegt, mit Fundstelle `sources/<datei>:<zeile>`. Die Zitate lassen sich mit `node scripts/check-quotes.mjs extern/<quelle>/auswertung.md` prüfen.
- **Eigene Ableitungen sind markiert.** Wo der GSP zu einem Thema der Quelle nichts geschrieben hat, steht **Ableitung:** davor. Das ist dann eine Einschätzung dieses Repositorys, nicht des GSP.
- **Zwei Sorten Anführungszeichen.** „…“ steht nur für GSP-Zitate, die das Prüfskript gegen `sources/` abgleicht. »…« steht für Zitate aus der externen Quelle; sie werden gegen deren eigene Datei im Unterordner geprüft, nicht gegen `sources/`.
- **Auf dem Stand aufbauen.** Die Auswertung stützt sich auf [GSP-Gesamtdarstellung.md](../theorie/GSP-Gesamtdarstellung.md), [GSP-Theorie.md](../theorie/GSP-Theorie.md) und die Angriffspunkte und verweist auf sie, statt sie zu wiederholen. Bestehende Dateien werden von hier aus nicht geändert; was für sie folgt, steht am Ende jeder Auswertung als Vorschlag.

## Was eingearbeitet ist

Die Vorschläge am Ende der Auswertungen zu Weber, Brown, der Hausarbeit, dem Anti-Ödipus und Tausend Plateaus sind am 16.10.2026 in die Arbeitsdokumente übernommen worden, jeweils erst nach Prüfung an `sources/`:

- **Neue Angriffspunkte** [27](../angriffspunkte/27-lage-und-schluss.md) (Lage und Schluss, aus Weber), [28](../angriffspunkte/28-ideelle-negation.md) (ideelle Negation, aus Brown), [29](../angriffspunkte/29-konflikte-ohne-eigentum.md) (Konflikte ohne Eigentum, aus der Hausarbeit), [30](../angriffspunkte/30-kommt-das-interesse-danach.md) (Kommt das Interesse danach?, aus dem Anti-Ödipus) und [31](../angriffspunkte/31-organisationen-mit-richtigem-zweck.md) (Organisationen mit richtigem Zweck, aus Tausend Plateaus).
- **Bestehende Angriffspunkte** 02, 03, 09, 15, 22 bis 26 haben einen Abschnitt *Außenstimmen aus externen Texten*; die [Forschungsfelder](../angriffspunkte/forschungsfelder.md) haben neue Einträge zu Herrschaftstechnik, Sprache und Technik, Sexualität und Psychiatrie, Gesellschaften ohne Staat und Autoren ohne GSP-Text.
- **Gesamtdarstellung:** Teil II, Abschnitt 6 (Proben an externen Texten), Teil III, Abschnitt 6 (Fragen aus externen Texten), Ergänzungen in Teil IV und Teil V, Abschnitt 7 und 8 (Theorien des Begehrens).
- **Kern:** Reichweitenhinweise zu 10.2, 10.4, 18.5 und 18.10; die Moralbestimmung (15.1) hat mit Akte 29 eine Gegenstelle.

Bei neuen Auswertungen gilt dasselbe: Die Auswertung macht Vorschläge, übernommen wird in einem eigenen Schritt.

## Quellen

| Quelle | Art | Stand |
|---|---|---|
| [Isabella Weber: Antifaschistische Wirtschaftspolitik](weber-antifaschistische-wirtschaftspolitik/auswertung.md) | Interview, Jung & Naiv Folge 856 | 14.10.2026 |
| [Wendy Brown: Undoing the Demos](brown-undoing-the-demos/auswertung.md) | Buch, Zone Books 2015 | 15.10.2026 |
| [Hausarbeit: Herrschaftsfreies Recht mit Habermas?](hausarbeit-anarchismus-habermas/auswertung.md) | unveröffentlichte Hausarbeit zum Anarchismus, Arbeitsversion 3 | 15.10.2026 |
| [Gilles Deleuze, Félix Guattari: Anti-Ödipus](deleuze-anti-oedipus/auswertung.md) | Buch, 1972; englische Übersetzung | 16.10.2026 |
