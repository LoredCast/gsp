# Angela Y. Davis: Are Prisons Obsolete? Angaben zur Quelle

**Buch:** Angela Y. Davis, *Are Prisons Obsolete?*, New York: Seven Stories Press 2003 (Reihe Open Media) · **Ausgewertet am:** 21.10.2026

## Warum hier kein Text liegt

Das Buch ist urheberrechtlich geschützt. Die ausgewertete Fassung stammt aus der Anarchist Library, die ihre Texte als »Anti-Copyright« kennzeichnet; das ändert nichts an den Rechten des Verlags. Wie bei Brown, Deleuze und Guattari und bei *Women, Race and Class* liegt deshalb nur diese Datei im Repository. Die Auswertung zitiert einzelne Sätze, so viel, wie die Auseinandersetzung braucht.

## Welche Fassung ausgewertet ist

Grundlage ist eine englische Textfassung der Ausgabe der Anarchist Library (theanarchistlibrary.org), die manuel am 21.10.2026 im Projekt hochgeladen hat. Sie hat 2256 Zeilen und ist anders gebaut als die Textfassungen der früheren Auswertungen: Sie bricht die Zeilen wie das PDF um, aus dem sie stammt, trennt Wörter am Zeilenende und enthält die Seitenzahlen dieses PDFs (Seite 2 bis 50) als eigene Zeilen. Diese Seitenzahlen entsprechen nicht der Druckausgabe von Seven Stories Press.

Die Zeilenangaben »Z.« in der [Auswertung](auswertung.md) beziehen sich auf diese Datei und nennen die Zeile, in der ein Zitat beginnt. Weil Zitate über Zeilenumbrüche und Trennstriche laufen können, findet `grep` sie nicht immer direkt. Ein Zitat lässt sich prüfen, indem man in beiden Leerzeichen, Zeilenumbrüche und Bindestriche entfernt:

```
tr -d ' \n-' < <Textfassung>.txt | grep -c -F "$(printf '%s' 'worked literally to death' | tr -d ' -')"
```

Wer die Druckausgabe benutzt, findet die Stellen über das Kapitel, das jeweils mit angegeben ist.

## Zustand der Textfassung

- Die Anmerkungen fehlen. Im Text stehen nur ihre Nummern, teils als lose Ziffern am Satzende (»1852.4«, »percent.6«), teils in eckigen Klammern (»[20]«). Die Anmerkungen sind deshalb nicht ausgewertet.
- Die Fassung hat Satz- und Lesefehler, die die Druckausgabe vermutlich nicht hat. Beispiele: »two million group larger than the population« (Z. 69, ein Wort fehlt), »the of mass incarceration« (Z. 83), »dcviant men« (Z. 1199), »Adam Tay Hirsch« (Z. 508), »Mary Ann Curtin« neben »Mary Ellen Curtin« (Z. 515 und 433), »the 2002 attacks on the World Trade Center« (Z. 1624, gemeint ist 2001). Die Auswertung zitiert, was in der Datei steht, und vermeidet Sätze mit solchen Fehlern, wo es geht.
- Davis setzt Zitate in doppelte Anführungszeichen. In der Auswertung stehen sie innerhalb eines Davis-Zitats als ›…‹.
- Wo Davis andere zitiert (Hirsch, Curtin, Lichtenstein, Mancini, Gilmore, Currie, Dickens, Bender, Ignatieff, Shakur, Human Rights Watch, Amanda George, Donziger, Bianchi und andere), ist die Wiedergabe nicht am Original nachgeprüft. Davis' Zahlen (Gefangene, Anteile nach Hautfarbe, Privatgefängnisse) sind ebenfalls nicht nachgeprüft; sie geben den Stand von 2001 und 2002 wieder.

## Gliederung mit Zeilen der Textfassung

Das Buch hat sechs Kapitel. Das erste stellt die Frage, das zweite führt die Geschichte von der Sklaverei zum Gefängnis, das dritte die Geschichte der Gefängnisreform, das vierte das Geschlecht, das fünfte den gefängnisindustriellen Komplex, das sechste die Alternativen.

| Kapitel | Titel | ab Zeile | Seite der PDF-Fassung |
|---|---|---|---|
| | Inhalt | 9 | 2 |
| 1 | Introduction: Prison Reform or Prison Abolition? | 21 | 3 |
| 2 | Slavery, Civil Rights, and Abolitionist Perspectives Toward Prison | 272 | 8 |
| 3 | Imprisonment and Reform | 644 | 16 |
| 4 | How Gender Structures The Prison System | 1059 | 25 |
| 5 | The Prison Industrial Complex | 1571 | 36 |
| 6 | Abolitionist Alternatives | 2009 | 45 |
| | Ende des Textes, Impressum der Anarchist Library | 2239, 2245 | 50 |
