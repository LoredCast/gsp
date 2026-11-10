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

Die Vorschläge der übrigen 19 Auswertungen (Fritz, Davis, Hegel, Bender und Friedrich, Nymoen und Dreßler, die feministische Wissenschaftstheorie, Zeichenregime, Baudrillard, Weasel) sind am 10.11.2026 mit der [Bestandskritik](../theorie/pruefungen/2026-11-10-bestandskritik.md) übernommen worden, wieder erst nach Prüfung an `sources/`:

- **Neue Angriffspunkte** [32](../angriffspunkte/32-interesse-und-urteil.md) (Welches Interesse verdirbt das Urteil?, aus der feministischen Wissenschaftstheorie), [36](../angriffspunkte/36-rassismus-als-recht.md) (Rassismus als Recht, aus Davis), [37](../angriffspunkte/37-mass-und-form-der-strafe.md) (Maß und Form der Strafe, aus Davis und Hegel) und [38](../angriffspunkte/38-bildung-der-beduerfnisse.md) (Bildung der Bedürfnisse, aus Baudrillard). Die Akten 33 bis 35 stammen aus den Prüfungen der Rekonstruktion; [33](../angriffspunkte/33-familienrolle-der-frau.md) (Familienrolle der Frau) hat Außenstimmen aus Davis, Harding, Hegel, Fritz und Brown.
- **Bestehende Angriffspunkte** 03, 08, 11, 13, 24 bis 27, 30 und 31 haben neue Außenstimmen. Am stärksten gewachsen ist der Komplex um [24](../angriffspunkte/24-gewohnheit-als-praktiziertes-urteil.md) und [30](../angriffspunkte/30-kommt-das-interesse-danach.md), durch Hegels Bestimmung der Gesinnung als zur Gewohnheit gewordenes Wollen (§ 268).
- **Gescheiterte Einwände** aus den externen Texten stehen in [verworfen.md](../angriffspunkte/verworfen.md) und im Kern unter ‚Einwände, die sich nicht lohnen‘.
- **Gesamtdarstellung:** Teil II, Abschnitt 6, Teil III (4.4, 4.5, 5.4, 6.6 und Abschnitt 7 zum zweiten Muster), Teil IV und Teil V, Abschnitte 7 bis 9.
- **Kern:** Reichweitenhinweise zu 1.1, 1.2, 7.5, 8.1, 8.11, 10.5 und 16.2.
- **Forschungsfelder:** eigener Abschnitt ‚Aus den Auswertungen externer Texte‘ mit den Bereichen ohne GSP-Text, den Prüfaufträgen an Belegen und den Gegenstellen, die in Zitatsammlung und Ableitung noch fehlen.

Bei neuen Auswertungen gilt dasselbe: Die Auswertung macht Vorschläge, übernommen wird in einem eigenen Schritt.

## Quellen

| Quelle | Art | Stand |
|---|---|---|
| [Isabella Weber: Antifaschistische Wirtschaftspolitik](weber-antifaschistische-wirtschaftspolitik/auswertung.md) | Interview, Jung & Naiv Folge 856 | 14.10.2026 |
| [Wendy Brown: Undoing the Demos](brown-undoing-the-demos/auswertung.md) | Buch, Zone Books 2015 | 15.10.2026 |
| [Hausarbeit: Herrschaftsfreies Recht mit Habermas?](hausarbeit-anarchismus-habermas/auswertung.md) | unveröffentlichte Hausarbeit zum Anarchismus, Arbeitsversion 3 | 15.10.2026 |
| [Gilles Deleuze, Félix Guattari: Anti-Ödipus](deleuze-anti-oedipus/auswertung.md) | Buch, 1972; englische Übersetzung | 16.10.2026 |
| [Gilles Deleuze, Félix Guattari: Tausend Plateaus](deleuze-tausend-plateaus/auswertung.md) | Buch, 1980; englische Übersetzung | 16.10.2026 |
| [Sophia Fritz: Toxische Weiblichkeit](fritz-toxische-weiblichkeit/auswertung.md) | Buch, Hanser Berlin 2024 | 20.10.2026 |
| [Angela Y. Davis: Are Prisons Obsolete?](davis-are-prisons-obsolete/auswertung.md) | Buch, Seven Stories Press 2003; Textfassung der Anarchist Library | 21.10.2026 |
| [Angela Y. Davis: Women, Race and Class](davis-women-race-and-class/auswertung.md) | Buch, 1981; Penguin Modern Classics 2019 | 21.10.2026 |
| [Georg Wilhelm Friedrich Hegel: Grundlinien der Philosophie des Rechts](hegel-grundlinien-rechtsphilosophie/auswertung.md) | Buch, 1820; Ausgabe Meiner (PhB 638) 2013 | 21.10.2026 |
| [Justus Bender, Sebastian Friedrich: Wie irrational ist der Aufstieg der Rechten?](bender-friedrich-aufstieg-rechte/auswertung.md) | Veranstaltungsmitschnitt, Podcast Überrechts (Literaturforum im Brechthaus, 29.09.2026) | 26.10.2026 |
| [Ole Nymoen, Simon David Dressler: Reaction auf *Streit auf gut* mit Wyn](nymoen-dressler-streit-auf-gut/auswertung.md) | Reaction-Stream *Heißer Papa* auf ein Funk-Interview (aufgezeichnet August 2026) | 26.10.2026 |
| [Hegel, Rechtsphilosophie §§ 5–7, und Allen Wood, Kap. 9–10](hegel-wille-wood/auswertung.md) | Seminarvorbereitung: Hegel, *Grundlinien der Philosophie des Rechts*, Einleitung (TWA 7), und Wood, *Hegel's Ethical Thought*, Cambridge 1990 | 27.10.2026 |
| [Hegel, Vorrede zur Rechtsphilosophie, und Jaeschke, Hegel-Handbuch, Kap. 8.1](hegel-vorrede/auswertung.md) | Seminarvorbereitung: Hegel, *Grundlinien der Philosophie des Rechts*, Vorrede, TWA 7, S. 17–28, und Jaeschke, *Hegel-Handbuch*, Stuttgart 2016, Kap. II.8.1; mit [Spickzettel](hegel-vorrede/spickzettel.md) | 31.10.2026 |
| [Helen E. Longino: Subjects, Power, and Knowledge](longino-subjects-power-knowledge/auswertung.md) | Aufsatz, in Alcoff/Potter (Hg.), *Feminist Epistemologies*, Routledge 1993; zusammen mit Intemann und Wylie ausgewertet | 01.11.2026 |
| [Kristen Intemann: 25 Years of Feminist Empiricism and Standpoint Theory](intemann-feministischer-empirismus/auswertung.md) | Aufsatz, *Hypatia* 25 (2010) | 01.11.2026 |
| [Alison Wylie: Feminist Philosophy of Science. Standpoint Matters](wylie-standpoint-matters/auswertung.md) | Vortrag, APA Presidential Address 2012; Manuskript der Autorin | 01.11.2026 |
| [Donna Haraway: Situated Knowledges](haraway-situated-knowledges/auswertung.md) | Aufsatz, *Feminist Studies* 14 (1988); zusammen mit Haraways *Cyborg Manifesto*, Harding und dem *Routledge Handbook* ausgewertet | 04.11.2026 |
| [Donna Haraway: A Cyborg Manifesto](haraway-cyborg-manifesto/auswertung.md) | Aufsatz, 1985; in *Simians, Cyborgs and Women*, Routledge 1991 | 04.11.2026 |
| [Sandra Harding: Whose Science? Whose Knowledge?](harding-whose-science/auswertung.md) | Buch, Cornell 1991; Kapitel 5 und 6 | 04.11.2026 |
| [Routledge Handbook of Feminist Philosophy of Science](handbook-feminist-philosophy-of-science/auswertung.md) | Sammelband, hg. von Crasnow und Intemann, Routledge 2021; Kapitel 16, 17, 18 und 27 | 04.11.2026 |
| [Gilles Deleuze, Félix Guattari: Über einige Zeichenregime](deleuze-tausend-plateaus-zeichenregime/auswertung.md) | Buchkapitel: Plateau 5 aus *Tausend Plateaus*, 1980; englische Übersetzung; ergänzt die Auswertung des ganzen Buches | 05.11.2026 |
| [Jean Baudrillard: The Ecstasy of Communication](baudrillard-ecstasy-of-communication/auswertung.md) | Buch, frz. *L'Autre par lui-même*, Galilée 1987; englische Übersetzung, Semiotext(e) 1988; OCR-Fassung, nach Seiten zitiert | 06.11.2026 |
| [Sandra Harding: Just add women and stir?](harding-just-add-women/auswertung.md) | Buchkapitel, in *Missing Links. Gender Equity in Science and Technology for Development*, IDRC 1995; schließt an *Whose Science?* an | 08.11.2026 |
| [Lisa Weasel: Dismantling the Self/Other Dichotomy in Science](weasel-self-other-immunsystem/auswertung.md) | Aufsatz, *Hypatia* 16 (2001); feministische Erkenntnistheorie am Fall des Immunsystems | 08.11.2026 |
