# Georg Wilhelm Friedrich Hegel: Grundlinien der Philosophie des Rechts. Angaben zur Quelle

**Buch:** Georg Wilhelm Friedrich Hegel, *Grundlinien der Philosophie des Rechts*, zuerst Berlin: Nicolai 1820 (Titelblatt 1821); ausgewertet in der Ausgabe auf der Grundlage der Edition in den Gesammelten Werken, Band 14, hrsg. von Horst D. Brandt, Hamburg: Felix Meiner 2013 (Philosophische Bibliothek 638), ISBN 978-3-7873-2446-6 · **Ausgewertet am:** 21.10.2026

## Warum hier kein Text liegt

Hegels Text von 1820 ist gemeinfrei, die Ausgabe von 2013 nicht. Sie gibt den Text in angeglichener Rechtschreibung nach der kritischen Edition in GW 14 (hrsg. von Klaus Grotsch und Elisabeth Weisser-Lohmann, 2009), dazu eine Einleitung von Brandt und Anmerkungen von Grotsch. Wie bei den anderen Büchern liegt deshalb nur diese Datei im Repository. Die Auswertung zitiert einzelne Sätze, so viel, wie die Auseinandersetzung braucht.

## Welche Fassung ausgewertet ist

Grundlage ist eine Textfassung der Meiner-Ausgabe (14.399 Zeilen), die manuel am 21.10.2026 im Projekt hochgeladen hat. Die Zeilenangaben »Z.« in der [Auswertung](auswertung.md) beziehen sich auf diese Datei. Wer eine andere Ausgabe benutzt, findet die Stellen über den Paragraphen, der immer mit angegeben ist; »Anm.« bezeichnet Hegels eigene Anmerkung zum Paragraphen.

Die Textfassung bricht die Zeilen wie das gedruckte Buch um. Sie enthält die Randzählung der Zeilen (5, 10, …), Trennstriche am Zeilenende, gesperrten Satz mit Leerzeichen zwischen den Buchstaben (»S p h ä re«), senkrechte Striche für die Seitenwechsel der Originalausgabe und einen Seitenkopf nach jedem Seitenvorschub. Ein Zitat findet man deshalb nicht mit einer einfachen Textsuche. Es lässt sich prüfen, indem man Text und Zitat auf die Buchstaben verkürzt und vergleicht, etwa so:

```
python3 -c 'import sys,re;n=lambda s:re.sub(r"[^a-zäöüß]","",s.lower());print(n(sys.argv[2]) in n(open(sys.argv[1]).read()))' <Textfassung>.txt "Es kann nur der zu etwas gezwungen werden, der sich zwingen lassen will"
```

Über einen Seitenwechsel hinweg schlägt diese einfache Prüfung fehl, weil der Seitenkopf dazwischen steht. Die Zitate der Auswertung sind mit einem Skript geprüft, das die Seitenköpfe überspringt.

Ausgewertet sind Vorrede, Einleitung und die §§ 1 bis 360 mit Hegels Anmerkungen. Die Weltgeschichte (§§ 341 bis 360) ist nur so weit herangezogen, wie sie den Staat betrifft. Brandts Einleitung (»Zu dieser Ausgabe«) und die Anmerkungen des Herausgebers (ab Z. 12641) sind nicht ausgewertet.

**Ohne Zusätze.** Die bekannten »Zusätze«, die Eduard Gans 1833 aus Nachschriften der Vorlesungen in die Werkausgabe aufgenommen hat, stehen in dieser Ausgabe nicht. Für die Prüfung der GSP-Zitate ist zusätzlich die Suhrkamp-Werkausgabe herangezogen (*Werke in 20 Bänden*, Bd. 7, mit den mündlichen Zusätzen), in einer OCR-Textfassung, die manuel am 21.10.2026 hochgeladen hat. Welche Hegel-Zitate des GSP im Text von 1820 stehen, welche in den Zusätzen und welche aus der *Philosophischen Propädeutik* stammen, steht in Abschnitt 2.1 der Auswertung.

## Gliederung mit Zeilen der Textfassung

| Teil | Abschnitt | Paragraphen | ab Zeile |
|---|---|---|---|
| | Zu dieser Ausgabe (Brandt) | | 154 |
| | Vorrede | | 318 |
| | Einleitung | §§ 1–33 | 922 |
| Erster Teil: Das abstrakte Recht | | §§ 34–104 | 2207 |
| | Das Eigentum | §§ 41–71 | 2382 |
| | Der Vertrag | §§ 72–81 | 3387 |
| | Das Unrecht | §§ 82–104 | 3733 |
| Zweiter Teil: Die Moralität | | §§ 105–141 | 4293 |
| Dritter Teil: Die Sittlichkeit | | §§ 142–360 | 5974 |
| | Die Familie | §§ 158–181 | 6297 |
| | Die bürgerliche Gesellschaft | §§ 182–256 | 6957 |
| | – System der Bedürfnisse | §§ 189–208 | 7162 |
| | – Rechtspflege | §§ 209–229 | 7612 |
| | – Polizei und Korporation | §§ 230–256 | 8265 |
| | Der Staat | §§ 257–360 | 8806 |
| | – Inneres Staatsrecht | §§ 260–329 | 9112 |
| | – fürstliche Gewalt | §§ 275–286 | 10166 |
| | – Regierungsgewalt | §§ 287–297 | 10700 |
| | – gesetzgebende Gewalt | §§ 298–320 | 10964 |
| | – Souveränität gegen außen | §§ 321–329 | 11793 |
| | – Äußeres Staatsrecht | §§ 330–340 | 12034 |
| | – Weltgeschichte | §§ 341–360 | 12249 |
| | Anmerkungen des Herausgebers | | 12641 |
| | Personenverzeichnis | | 14336 |
