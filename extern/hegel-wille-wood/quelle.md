# Hegel, Rechtsphilosophie §§ 5–7, und Allen Wood, Kap. 9 und 10. Angaben zu den Quellen

**Anlass:** Vorbereitung auf Sitzung 3 (*Die Bestimmung des Willens*) des Seminars *Einführung in Hegels theoretische Philosophie*, Universität Wien, WS 2026/27 · **Ausgewertet am:** 27.10.2026

## Warum hier keine Texte liegen

Wood ist urheberrechtlich geschützt. Bei Hegel ist der Text selbst frei, die Fassung ist aber eine OCR-Abschrift aus der Suhrkamp-Werkausgabe mit vielen Lesefehlern und zerrissenen Zeilen. Beide Texte liegen deshalb nicht im Repository. Die [Seminarvorbereitung](auswertung.md) zitiert nur einzelne Sätze, so viel, wie die Rekonstruktion braucht.

## Welche Fassungen ausgewertet sind

manuel hat am 27.10.2026 drei Textfassungen und ein Fragenblatt im Projekt hochgeladen:

| Datei | Inhalt | Zitierweise in der Seminarvorbereitung |
|---|---|---|
| `HEGEL_TWA7_§5-7.txt` | G. W. F. Hegel, *Grundlinien der Philosophie des Rechts*, Einleitung, Ende der Anm. zu § 4 bis Anfang § 8, mit Hegels handschriftlichen Randnotizen und den Zusätzen von Eduard Gans. Werke in zwanzig Bänden (Theorie-Werkausgabe, TWA), Bd. 7, Frankfurt/M.: Suhrkamp 1970, S. 49–57 | § und Textteil (Haupttext, Anm., Randnotiz, Zusatz), dazu die Seite »TWA 7, S.« |
| `WOOD_Emptiness_Kap9.txt` | Allen W. Wood, *Hegel's Ethical Thought*, Cambridge University Press 1990, Kap. 9 »The emptiness of the moral law«, S. 154–173 | »Wood S.« und Abschnitt (§ 1–11) |
| `WOOD_Conscience_Kap10.txt` | ebd., Kap. 10 »Conscience«, S. 174–192 | »Wood S.« und Abschnitt (§ 1–10) |
| `Fragen_Sitzung_3.docx` | Fragenblatt zu Rph. §§ 5–7 mit vier Fragen | Abschnitt 8 der Seminarvorbereitung |

Die Seitenzahlen bei Wood sind die der Druckausgabe; sie stehen in der Textfassung am Fuß jeder Seite. Bei Hegel ergeben sich die Seiten aus den Seitenzahlen der Abschrift. Sie stehen am Fuß der Seite, wie die Fußnote zu § 7 Anm. zeigt, die unmittelbar vor der Zahl 55 steht; die Zahlen 50 und 51 hat die OCR als »go« und »gt« gelesen. § 5 steht auf S. 49–52, § 6 auf S. 52–54, § 7 auf S. 54–57.

## Zum Zustand der Hegel-Abschrift

Die OCR hat Fehler, die in den Zitaten stillschweigend berichtigt sind, etwa »Unbestimmt-beit« (Unbestimmtheit), »Zertriimmerung« (Zertrümmerung), »Brabman« (Brahman), »Substantialitit« (Substantialität), »Negavität« (Negativität). Die Randnotizen sind Hegels eigene, stichwortartige Notizen in seinem durchschossenen Handexemplar; die Abschrift gibt ihre griechischen Gliederungsbuchstaben (α, β, γ, αα, ββ …) oft falsch wieder (»a)«, »P)«, »Bß)«, »65)«, »te)«). Wo die Gliederung für das Verständnis zählt, ist sie in der Seminarvorbereitung nach dem Sinn wiederhergestellt. Einzelne Wörter der Randnotizen sind in der Ausgabe selbst mit »[?]« als unsicher gelesen markiert.

## Ein Zitat prüfen

Die Zitate »…« aus Hegel und Wood lassen sich in der jeweiligen Textfassung so finden (Zeilenumbrüche und Trennstriche beachten):

```
grep -n -F "Furie des Zerst" HEGEL_TWA7_§5-7.txt
grep -n -F "the moral law is empty because" WOOD_Emptiness_Kap9.txt
```

Hegel-Stellen außerhalb der §§ 5–7 sind entweder sinngemäß wiedergegeben oder, wo wörtlich, aus der Hegel-Auswertung des Projekts übernommen (`extern/hegel/auswertung.md` im Projektordner, noch nicht im Repository), die nach der Ausgabe Meiner (Philosophische Bibliothek 638, Hamburg 2013) zitiert; sie sind dann mit »(Meiner)« markiert. Woods englische Übersetzungen anderer Hegel-Stellen stehen als Wood-Zitate da.
