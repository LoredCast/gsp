# Bestandskritik vom 10.11.2026

Kritik des ganzen Arbeitsstands: Rekonstruktionen, Angriffspunkte, externe Auswertungen, Korrespondenz, Skripte. Sie fragt dreierlei. Gibt der Bestand den GegenStandpunkt (GSP) treu wieder? Sind die Einwände richtig gewichtet? Ist das Repository in einem Zustand, in dem man sich auf seine Angaben verlassen kann? Abschnitt 8 hält fest, was davon im selben Zug umgesetzt ist.

Grundlage: alle Dateien in `theorie/`, `angriffspunkte/`, `extern/` (24 Auswertungen) und `korrespondenz/`, beide Skripte, die offenen Pull Requests und Stichproben an `sources/`. Zitate in „…“ sind wörtlich aus `sources/`; »…« steht für Zitate aus externen Texten.

## 1. Ergebnis in Kürze

1. **Die Rekonstruktion ist im Ganzen treu.** An den Quellen fand sich ein Satz, der dem GSP widerspricht (Sozialstaat, Abschnitt 3.1), und eine Angabe, die sein Material unterschätzt (Texte zu Frauen und Feminismus, 3.2). Beide stehen in der Gesamtdarstellung. Kern, Zitatsammlung und Ableitung halten der Prüfung stand; in der Ableitung stehen elf eigene Formulierungen in den Anführungszeichen, die für wörtliche GSP-Zitate reserviert sind.
2. **Der Bestand ist seit dem 16.10.2026 stehengeblieben, während die Auswertungen weiterliefen.** Neunzehn von vierundzwanzig Auswertungen externer Texte enden mit Vorschlägen für Kern, Gesamtdarstellung, Angriffspunkte und Forschungsfelder, von denen keiner übernommen ist. Fünf dieser Auswertungen und die Schwachstellenprüfung, auf die der Kern verweist, lagen nur in offenen Pull Requests.
3. **Die Gewichtung der Einwände ist uneinheitlich.** Es gibt vier Ranglisten mit verschiedenen Skalen (Kopfzeilen der Angriffspunkte, Übersicht im README, Übersicht der Gesamtdarstellung, Bilanz VI.2). Derselbe Punkt heißt an einer Stelle „mittel“, an der zweiten „schwach bis mittel“, an der dritten „in der Korrespondenz“.
4. **Die stärksten Einwände bleiben dieselben, sind aber besser gestützt.** Es sind die Übergänge von der Erklärung zum Bewusstsein und zur Praxis (25, 02) und der Begriff des Urteils, wo eine Gewohnheit oder Bindung fortbesteht (24, 03, 30). Hegels Lehre von der Gesinnung als »Resultat der im Staate bestehenden Institutionen« (Rechtsphilosophie § 268) gibt dem zweiten Komplex zum ersten Mal einen ausgearbeiteten Gegenbegriff.
5. **Es gibt ein zweites Muster, das bisher nicht benannt war.** Viele Einwände gegen Einzelaussagen haben dieselbe Form: Die Erklärung aus dem Zweck begründet, *dass* es eine Einrichtung gibt, und der Text beansprucht darüber hinaus ein Maß, einen Zeitpunkt, eine Häufigkeit oder einen Träger (Abschnitt 5). Der GSP kennt diese Grenze selbst und spricht sie für den Sozialstaat aus.
6. **Sieben neue Punkte** sind aus den Auswertungen und aus Fragen entstanden, die bisher ohne eigene Akte in der Gesamtdarstellung standen (Abschnitt 6). Keiner davon greift die Grundtheorie an; drei betreffen Bereiche, in denen der GSP benennt, aber nicht ableitet (Geschlecht, Rassismus als Recht, Maß der Strafe).

## 2. Zustand des Repositorys

| Befund | Folge | Behebung |
|---|---|---|
| `node scripts/build-sitemap.mjs --check` schlägt fehl. Das README wurde von Hand ergänzt (vierter Arbeitsordner `extern/`, Kern, Gesamtdarstellung), die Vorlage im Generator nicht. | Der nächste Lauf des Generators hätte die Handänderungen überschrieben. | Vorlage im Generator nachgezogen, README neu erzeugt. |
| `scripts/check-quotes.mjs` behandelt Artikeltitel wie Zitate. | Rund ein Viertel der gemeldeten Stellen waren Titel in Belegposition; echte Abweichungen gingen darin unter. | Titel vor einer Heftangabe werden übersprungen; Leerzeichen an Anführungszeichen und der Bindestrich als Gedankenstrich werden angeglichen. |
| Elf „…“ in der Ableitung und zwei in der Zitatsammlung sind keine wörtlichen GSP-Stellen: eigene frühere Formulierungen, die Überschrift 1.4, fremde Titel, eine Paraphrase zum Zins. | Die Regel „in „…“ steht nur, was in `sources/` steht“ galt für die beiden größten Dateien nicht. | Eigene Formulierungen und fremde Titel in ‚…‘; die Paraphrase durch den Wortlaut ersetzt. |
| Die Ableitung nennt die Zitatsammlung unter dem alten Pfad `gsp-theorie/GSP-Theorie.md`; der Kern nennt die Schwachstellenprüfung eine Datei in einem offenen Pull Request. | Verweise ins Leere. | Pfade und Sätze berichtigt. |
| Fünf Pull Requests (#8, #18, #21, #28, #29) waren wochenlang offen, während `main` auf ihren Inhalt verwies (Kürzel „SL“ im Kern; die Auswertungen zu Fritz und Hegel in vier anderen Auswertungen). | Tote Verweise; zwei Auswertungen nennen einen Ordner `extern/hegel/`, den es nie gab. | Alle fünf Zweige in diesen Stand übernommen, Verweise auf `extern/hegel-grundlinien-rechtsphilosophie/` berichtigt. |
| Sieben Angriffspunkte und die Forschungsfelder verweisen auf „(PR #16)“ statt auf die Datei; in 22, 23 und 26 steht derselbe Absatz zu Tausend Plateaus dreimal. | Der Leser muss die Herkunft erraten. | Verweise auf die Auswertung gesetzt, der Absatz steht einmal (in 22) und wird von 23 und 26 aus verwiesen. |
| Datierte Nachträge sind in 02, 16, 19 und 23 übereinandergeschichtet; in 23 nimmt die These sich im zweiten Absatz selbst zurück. | Die Akten lesen sich als Verlauf, nicht als Stand. | Thesen auf den geltenden Stand gebracht, die Geschichte steht unter „Herkunft“. |
| `_vorlage.md` kennt die Abschnitte „Wo der GSP selbst unterscheidet“ und „Außenstimmen“ nicht und verlangt ein anderes Datumsformat als die Akten. | Neue Akten weichen von der Vorlage ab. | Vorlage angepasst. |
| `verworfen.md` enthält zwölf Einwände aus dem Briefwechsel; die gescheiterten Einwände gegen die Theorie stehen nur im Kern. | Zwei Listen mit demselben Zweck. | `verworfen.md` verweist auf die Tabelle im Kern und nimmt die gescheiterten Einwände aus den externen Texten auf. |
| `theorie/README.md` nennt die Gesamtdarstellung nicht; `extern/README.md` führt unter „Was eingearbeitet ist“ nur die ersten fünf Auswertungen. | Der Einstieg zeigt einen älteren Stand. | Beide nachgezogen. |
| Zahlen von außerhalb sind nicht einheitlich als geprüft oder ungeprüft gekennzeichnet (IAB in 01, Japan in 15, Wahldaten bei Weber in 27, UN-Meldungen in 23, Amborn in 29). | Ein Leser kann sie für geprüft halten. | Als Prüfauftrag in den Forschungsfeldern vermerkt; nicht behoben, weil die Originale nicht im Repository liegen. |

Nicht angefasst sind `sources/`, die erzeugten Sitemaps, die Prüfberichte in `theorie/pruefungen/` und die Entwürfe in `korrespondenz/`. Die Prüfberichte sind Archiv: Sie zitieren frühere Fassungen, und ihre 138 nicht auffindbaren Zitate sind Zitate dieser Fassungen.

## 3. Treue zum GSP

### 3.1 Sozialstaat: erhalten „wegen ihrer Fähigkeit, Geld zu vermehren“?

Die Gesamtdarstellung schrieb in Teil I, Abschnitt 8, die Arbeiter würden erhalten wegen ihrer Fähigkeit, Geld zu vermehren. So liest auch der Leserbriefschreiber, dem der GSP in GS 2-16 widerspricht:

- „Deine Bestimmung des Sozialstaates, mit der du deine Überlegungen eröffnest, stimmt nicht. Dieser verfolgt nicht die Absicht, dafür zu sorgen, dass den ansässigen Kapitalen stets das für sie notwendige Quantum rentabler Arbeitskraft zur Verfügung steht.“
- „Der Sozialstaat ist schließlich zuallererst eine *Hilfe* für all diejenigen, die ihn brauchen und deswegen immer wieder in Anspruch nehmen.“
- „*Wie* er diesen Notwendigkeiten Rechnung trägt – mehr à la Deutschland, mehr wie im ‚land of the free‘ oder in irgendeiner anderen Variante –, ist mit dieser Einsicht weder ausgemacht noch aus ihr deduzierbar.“
  „Leserbrief Fragen zum Sozialstaat & zu Freiheit und Zwang in der Politik“, GS 2-16, `sources/5-sozialstaat-armut-reproduktion-alltag.md:8571`, `:8573`, `:8585`

Der Grund des Sozialstaats liegt für den GSP in der Einkommensquelle Lohnarbeit, die als lebenslanges Lebensmittel nicht taugt und auf der der Staat trotzdem besteht. Erhalten wird die Klasse im Ganzen, auch und gerade die nicht Angewandten; der Staat fragt an keiner Stelle, wie viele Arbeitskräfte das Kapital braucht. Der Satz der Gesamtdarstellung machte daraus eine Kalkulation mit der Rentabilität der Einzelnen. Das ist der Funktionalismus, den der GSP zurückweist, und es ist ein Fehler von der Art, vor der der Kern unter „Einwände, die sich nicht lohnen“ selbst warnt. Die Auswertung zu Nymoen und Dreßler hatte das am 26.10.2026 bemerkt; übernommen wurde es nicht.

### 3.2 Frauen und Feminismus: „im Wesentlichen ein Artikel“?

Gesamtdarstellung IV.1 und die Forschungsfelder führen zur Lage der Frau im Wesentlichen GS 4-19 an. Die Auswertungen zu Fritz, Davis und Harding haben weitere Texte gefunden: GS 3-11, GS 2-15 (Frauenquote), GS 3-16 („Nein heißt Nein“), GS 1-00, GS 4-06, GS 4-93, GS 4-94, GS 2-07, GS 2-12, GS 3-92. Richtig ist: Der GSP hat mehr Texte, als der Bestand sagte, und trotzdem keine Ableitung der Geschlechterrollen. Der Befund „benannt, nicht abgeleitet“ bleibt, die Begründung „kaum Material“ fällt.

### 3.3 Was geprüft ist und hält

- **Zitate.** Mit dem berichtigten Skript: Kern und Gesamtdarstellung ohne Abweichung, Angriffspunkte ohne Abweichung, die Auswertungen in `extern/` ohne Abweichung. Zitatsammlung: zwei Abweichungen (ein Reihentitel, die Überschrift 1.4). Ableitung: elf, alle in Anmerkungen, keine in einem Schritt.
- **Stichproben an den Quellen** für die Stellen, auf denen die neuen Punkte stehen (GS 4-13, GS 3-20 Pandemie XI, GS 2-05, GS 1-21, GS 1-94, GS 1-15, GS 3-20 Rassismus, GS 2-13, GS 3-97, GS 3-19, GS 2-21): Wortlaut und Zeile stimmen.
- **Der Kern** ist in seinen Aussagen nicht zu beanstanden. Er steht aber auf dem Stand vom 16.10.2026 und kennt die Reichweitenhinweise nicht, die die Auswertungen seitdem begründet haben (1.1, 1.2, 7.5, 8.11, 10.5, 16.2).
- **Die Korrespondenz** ist in sich stimmig; der aktuelle Entwurf enthält die zwei Fragen, die nach allen Bewertungen übrig sind. Kein Änderungsbedarf.

### 3.4 Eine Schwäche der Darstellung, kein Fehler

Die Gesamtdarstellung bewertet in Teil I nicht und in Teil III nur. Wer Teil I liest, erfährt nicht, an welchen Sätzen später ein Einwand ansetzt. Das war gewollt, hat aber die Folge, dass ein Fehler wie 3.1 in Teil I unbemerkt stehen kann, weil Teil I von keiner Prüfung mehr angesehen wird. Abhilfe ist kein Umbau, sondern die Regel: Jeder Satz in Teil I muss sich im Kern oder in der Ableitung wiederfinden; wo er darüber hinausgeht, gehört er gestrichen oder belegt.

## 4. Neubewertung der Einwände

### 4.1 Eine Skala statt vier

Jeder Punkt bekommt zwei Angaben.

**Befund**, also was die Prüfung ergeben hat:

- **trägt**: trifft eine belegte Aussage des GSP; die stärkste Gegenrede beseitigt den Einwand nicht.
- **trägt eingeschränkt**: trifft nach der Gegenrede noch einen Teil der Aussage oder ihre Reichweite.
- **offene Frage**: ein Schritt fehlt oder ein Gegenstand ist nicht behandelt; ein Fehler ist nicht nachgewiesen.
- **schwach**: eine Präzisierung, die der GSP selbst anbietet, beantwortet den Einwand.
- **erledigt**: geklärt, in einem anderen Punkt aufgegangen oder verworfen.

**Gewicht**, also wie viel vom Anspruch des GSP daran hängt: **hoch** (ein Grundbegriff oder der Übergang zur Praxis), **mittel** (ein Lehrstück), **gering** (eine Einzelaussage oder ein einzelner Text).

„Status“ sagt nur noch, was mit dem Punkt geschieht: offen, in der Korrespondenz, zurückgestellt, abgeschlossen.

### 4.2 Die Punkte 01 bis 31

| Nr. | Punkt | Befund | Gewicht | Änderung und Grund |
|---|---|---|---|---|
| 01 | Fehler beim Gelderwerb | schwach | mittel | bisher „mittel“. GS 2-08 gesteht das Vergleichen von Angeboten zu; offen ist nur, wo die Grenze liegt. Als Frage an Stefan weiter sinnvoll. |
| 02 | Frage nach den Mitteln | trägt eingeschränkt | hoch | unverändert. Der Vorwurf gilt dem Gehalt der Frage, nicht dem Motiv; offen bleibt der Zweifel an den Kräften. Gehört mit 25 zusammen. |
| 03 | Fortwirkung, Entschluss | trägt | hoch | unverändert; mit 24 zu lesen. |
| 04 | Iran | schwach | gering | unverändert, zurückgestellt. |
| 05 | Abstufung der Notwendigkeit | erledigt | – | in 01 aufgegangen. |
| 06 | Interessenkritik und Zweckkritik | schwach | gering | unverändert; die Frage nach dem Interesse im Urteil hat jetzt mit 32 eine belegte Fassung. |
| 07 | Revidierbarkeit | offene Frage | mittel | unverändert; ein Beispiel fehlt weiter. |
| 08 | Bewusstsein und Gewalt | erledigt | – | geklärt. |
| 09 | Produktivität und Wert | schwach | gering | unverändert. |
| 10 | „Schrankenloser“ Lohnverfall | schwach | gering | bisher im README als „stärkster Einwand der dritten Review“ geführt; der Satz ist an das Überangebot gebunden. Beispiel für das Muster aus Abschnitt 5. |
| 11 | Recht ist, was der Staat tut | schwach | gering | unverändert. |
| 12 | Tipps an alle Konkurrenten | schwach | gering | unverändert. |
| 13 | Erfahrung und Prüfung von Theorien | offene Frage | mittel | geschärft. Longino und Wylie verschieben die Frage von der Prüfung auf die Entdeckung: Wer bringt die Tatsache bei, an der ein Fehler auffällt? Der GSP hat dazu keinen Text. |
| 14 | Giralgeld als Geldersatz | schwach | gering | unverändert. |
| 15 | Geldentwertung aus Kredit | trägt eingeschränkt | mittel | unverändert. |
| 16 | Verwertung ohne Wachstum | trägt eingeschränkt | mittel | unverändert. |
| 17 | Fall der Profitrate | erledigt | – | für GS 2-10 geklärt. |
| 18 | Klimaschutz und Energiepolitik | trägt eingeschränkt | gering | unverändert. |
| 19 | Von der Konkurrenz zur Krise | trägt eingeschränkt | mittel | unverändert; der Mechanismus ist begründet, die Regelmäßigkeit gesetzt. |
| 20 | Wechselkurs | schwach | gering | unverändert. |
| 21 | Kapital aus der Differenz | schwach | gering | unverändert. |
| 22 | Nationale Befreiung | trägt eingeschränkt | mittel | unverändert. |
| 23 | Widerstand gegen Besatzung | trägt eingeschränkt | gering | unverändert, eng. |
| 24 | Gewohnheit als praktiziertes Urteil | trägt | hoch | gestärkt durch Hegel § 268 und die Lehre von der Gewohnheit: ein Wollen, das zur Gewohnheit geworden ist, ist kein Urteil, das man durch Widerlegung los wird. |
| 25 | Einsicht und Handlungsfähigkeit | trägt | hoch | jetzt an erster Stelle. 02 ist die Fassung desselben Problems im Briefwechsel. |
| 26 | Wahl als Ermächtigung | trägt eingeschränkt | mittel | unverändert. |
| 27 | Lage und Schluss | trägt eingeschränkt | mittel | gestützt durch GS 2-26 („besonders unter den einfachen Arbeitern“) und Bender/Friedrich. |
| 28 | Ideelle Negation | trägt eingeschränkt | gering | unverändert, eng. |
| 29 | Konflikte ohne Eigentum | trägt eingeschränkt | gering | unverändert. |
| 30 | Kommt das Interesse danach? | trägt | hoch | gestützt durch Hegel § 268; mit 24 zu lesen. |
| 31 | Organisationen mit richtigem Zweck | offene Frage | mittel | unverändert. |

### 4.3 Was sich an der Rangfolge ändert

Bisher stand die Frage nach den Mitteln (02) an erster Stelle. Sie ist die Form, in der das Problem im Briefwechsel aufgetreten ist. In der Sache ist 25 der allgemeinere und besser belegte Punkt: Dass eine Kritik stimmt, hebt die Gründe nicht auf, aus denen der Einzelne weiter mitmacht, solange die anderen es tun. 02 fragt dasselbe von der Seite der Kräfteverhältnisse. Beide gehören als ein Komplex an die Spitze.

An zweiter Stelle steht der Komplex Urteil, Gewohnheit, Bindung (24, 03, 30). Er ist durch die Auswertungen am stärksten gewachsen. Der GSP erklärt Nationalismus, Konkurrenzmoral und psychologische Selbstdeutung als Urteile, die man fällt und zurücknehmen kann. Er beschreibt zugleich ein Volk, das „nicht Stellung“ nimmt, und Gewohnheiten, die bleiben, wenn das Urteil verworfen ist. Hegel hat dafür einen Begriff, der GSP nicht.

An dritter Stelle stehen die Größen der Werttheorie (neu 34, dazu 09, 15, 16, 19). An vierter die Punkte der Form „Funktion und eigener Grund“ (22, 23, 26, 28). Die übrigen folgen.

## 5. Ein zweites Muster: Was der Zweck nicht bestimmt

Die Leitfrage des Projekts betrifft den Schritt von der Bestimmung eines Verhältnisses zum Bewusstsein und Handeln der Beteiligten. Die Durchsicht aller Akten zeigt eine zweite, davon unabhängige Form:

> Wo beansprucht eine Erklärung aus dem Zweck mehr Bestimmtheit (Maß, Zeitpunkt, Häufigkeit, Träger, Form), als der Zweck hergibt?

Der GSP zieht diese Grenze selbst. Für den Sozialstaat sagt er, wie der Staat den Notwendigkeiten Rechnung trägt, sei „weder ausgemacht noch aus ihr deduzierbar“ (GS 2-16, `sources/5-sozialstaat-armut-reproduktion-alltag.md:8585`). An anderen Stellen spricht er, als folge die bestimmte Gestalt aus dem Zweck:

| Punkt | Begründet ist | Beansprucht wird darüber hinaus |
|---|---|---|
| 19 Krise | dass Überakkumulation aus der Konkurrenz folgt | dass sie periodisch eintritt |
| 15 Geldentwertung | dass nicht verwerteter Kredit das Geld belastet | dass er es „allemal“ entwertet |
| 16 Wachstum | dass der Zweck der Vermehrung maßlos ist | dass Kapital „nur“ wachsend besteht |
| 10 Lohn | dass ein Überangebot den Lohn drückt | dass er „schrankenlos“ fällt |
| 18 Klima | dass Klimapolitik Energiepolitik ist | dass sie damit „deckungsgleich“ ist |
| 27 Lage und Schluss | dass der nationalistische Schluss ein Fehler ist | (Lücke) warum er so regelmäßig verteilt ist |
| 33 Geschlecht | dass die Familie unter Lohnarbeit eine Arbeitsteilung fortsetzt | (Lücke) warum die Rolle den Frauen zufällt |
| 36 Rassismus als Recht | dass der Staat sortiert und die Konkurrenzmoral ausgrenzt | (Lücke) wann die Sortierung Recht wird und wen sie trifft |
| 37 Strafe | dass der Staat straft | (Lücke) wie viel und in welcher Form |

Das ist kein Einwand gegen die Erklärung aus dem Zweck. Es ist ein Maßstab für die Rekonstruktion: Wo der GSP ein „nur“, „allemal“, „schrankenlos“ oder „deckungsgleich“ setzt, ist zu prüfen, ob der Text es begründet oder ob es eine Zuspitzung ist. Und es erklärt, warum die externen Autorinnen (Davis, Haraway, Harding, Fritz) an denselben Stellen ansetzen: Sie fragen nach Maß, Träger und Geschichte, wo der GSP den Grund nennt. Ihre eigenen Antworten halten seiner Kritik meist nicht stand; die Fragen bleiben.

## 6. Neue Punkte

Jeder Punkt ist an `sources/` geprüft und als Akte angelegt.

| Nr. | Punkt | Befund | Gewicht | Woher |
|---|---|---|---|---|
| 32 | Welches Interesse verdirbt das Urteil? | offene Frage | mittel | Intemann, Harding, Haraway, Weasel, Handbook |
| 33 | Warum fällt die Familienrolle der Frau zu? | offene Frage | mittel | bisher Gesamtdarstellung III 4.3 ohne Akte; Davis, Haraway, Harding, Fritz, Hegel § 166, Brown |
| 34 | Wertgröße und Preis | offene Frage | hoch | bisher Gesamtdarstellung III 3.6 ohne Akte |
| 35 | Ist jeder Staatskredit Geldschöpfung? | offene Frage | gering | bisher Ableitung 6.9 und Gesamtdarstellung III 3.5 ohne Akte |
| 36 | Rassismus als Recht: Braucht das Kapital den Rassismus? | offene Frage | mittel | Davis, *Women, Race and Class* und *Are Prisons Obsolete?* |
| 37 | Maß und Form der Strafe | offene Frage | gering | Davis, *Are Prisons Obsolete?*; Hegel § 214 |
| 38 | Bildet das Kapital die Bedürfnisse? | offene Frage | mittel | Baudrillard |

Zu den einzelnen Punkten:

- **32** ist der einzige neue Punkt, der die Methode betrifft. Der GSP sagt, Kritik gehe vom Interesse aus, und er sagt, der „Wille zur Anpassung“ verderbe die Sachlichkeit. Das Kriterium, das beides trennt, ist das Vorschreiben des Ergebnisses. Ob es mehr ist als der Satz, dass falsch ist, was falsch ist, zeigen die Texte nicht; für die Naturwissenschaften, die der GSP für erfolgreich hält, hat er nur den Hinweis auf „sachfremde Gründe“.
- **34** ist nach dem Gewicht der wichtigste neue Punkt, weil er die Werttheorie selbst betrifft: Der Erlös ist die „einzig gültige Art“ der Bezifferung, und doch arbeitet der GSP mit Größen, von denen ein Preis abweichen kann.
- **36** enthält die einzige Stelle, an der zwei Texte des GSP für denselben Gegenstand verschiedene Erklärungen geben, ohne das zu sagen (GS 1-15 und GS 3-20), und einen Fall, den keiner der beiden deckt: Rassismus als Rechtslage in einer bürgerlichen Demokratie, der Süden der USA bis 1965.
- **33, 37, 38** sind Lücken der in Abschnitt 5 beschriebenen Art.

Geprüft und nicht als eigener Punkt angelegt:

- **„Wer bemerkt den Fehler?“** (Longino, Wylie): geht in 13 auf.
- **„Reicht der Sozialcharakter bis in die Beziehungen unter Frauen?“** (Fritz): Material zu 33 und 24, kein eigener Einwand.
- **„Wem nützt das Gefängnis?“** (Davis): Die Auswertung zeigt, dass der GSP hier stärker ist; Davis' eigene Zahlen sprechen gegen den Profit als Grund. Verworfen, mit Grund in `verworfen.md`.
- **„Warum wählt der Souverän das Kapital als Machtgrundlage?“** (Kern, „Was nicht im Kern steht“): bleibt dort als Vorbehalt; kein Text, an dem sich ein Einwand festmachen ließe.

## 7. Einwände, die auch nach den externen Texten nicht halten

Die Auswertungen haben einige verbreitete Einwände geprüft und verworfen. Sie gehören in die Liste der gescheiterten Einwände, damit sie nicht wiederkommen:

- **Der Marxismus mache die Arbeit zur Natur des Menschen** (Haraway). Der GSP bestimmt Arbeit unter dem Kapital als Dienst am Eigentum und kritisiert ihre Verehrung.
- **Der Marxismus könne unbezahlte Arbeit nicht fassen** (Haraway, Harding). GS 4-19 behandelt die Hausarbeit ausdrücklich; dass sie keinen Wert bildet, ist bei ihm ein Befund über das Kapital, kein blinder Fleck.
- **Emanzipation der Frau als Mittel der Entwicklungspolitik** sei ein Fortschritt, den der GSP übersehe (Harding). GS 4-94 behandelt gerade das als Bevölkerungspolitik.
- **Das Gefängnis wachse, weil Firmen daran verdienen** (Davis). Siehe oben.
- **Die Moralkritik des GSP behaupte, die Moral kenne keinen Unterschied von gut und böse.** Das wäre die starke Form von Hegels Leerheitseinwand, die Wood für falsch hält. Der GSP vertritt die schwache: Die Moral bestimmt ihre Pflichten nicht aus sich, sie nimmt sie aus der bestehenden Ordnung.
- **Standpunkttheorie als Privileg der Unterdrückten.** Die heutigen Fassungen (Wylie, Intemann) vertreten das selbst nicht mehr; der Streit geht um Entdeckung und begründete Werte (32, 13).

## 8. Umsetzung

Mit dieser Kritik zusammen umgesetzt:

1. Skripte berichtigt; README über den Generator neu erzeugt.
2. Zitatfehler in Ableitung und Zitatsammlung behoben, alte Pfade ersetzt.
3. Gesamtdarstellung: I.8 berichtigt, IV.1 berichtigt, Einleitung, II.6, III, V.7, V.9 und VI auf den Stand der 24 Auswertungen gebracht, Übersicht auf die neue Skala.
4. Kern: Reichweitenhinweise zu 1.1, 1.2, 7.5, 8.11, 10.5 und 16.2, Satz zur Erkenntnistheorie, neue Zeilen in „Einwände, die sich nicht lohnen“, veralteter Verweis berichtigt.
5. Angriffspunkte: einheitliche Kopfzeilen mit Befund und Gewicht, sieben neue Akten (32 bis 38), Außenstimmen aus den Auswertungen, Bereinigung von 02, 16, 19, 22, 23 und 26, neue Übersicht mit beiden Leitfragen.
6. Forschungsfelder, `verworfen.md`, `_vorlage.md`, die READMEs in `theorie/`, `angriffspunkte/` und `extern/` nachgezogen.

Nicht umgesetzt, mit Grund:

- **Die Zitatsammlung und die Ableitung sind nicht um die neuen Gegenstellen erweitert** (Theorie 7.5, 8.7, 10.5, 15.1, 16.2). Beide Dateien sind kapitelweise gegen die Quellen geprüft; neue Abschnitte verlangen dieselbe Prüfung Schritt für Schritt. Die Stellen stehen mit Fundort in den Forschungsfeldern.
- **Zahlen aus externen Quellen** sind nicht nachgeprüft (siehe Abschnitt 2).
- **Hegels Enzyklopädie §§ 409–410** ist nur über Woods Darstellung belegt; in Akte 24 als ungeprüft gekennzeichnet.
- **Bücher des Verlags** (Psychologie, Proletariat, Finanzkapital, Staat) liegen weiter nicht vor. An ihnen hängen die Antworten auf 24, 25, 19 und 34.
