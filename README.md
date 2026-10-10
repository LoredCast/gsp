# gsp: GegenStandpunkt source collection

This repository contains German-language GegenStandpunkt articles collected into thematic Markdown files, alongside a separate correspondence folder. This README is the entry point to the whole collection: the file-level sitemap below links to complete indexes of **1,965 articles** and **8,385 subsection headings**, preserving the source files' existing categories and order.

## Navigation

- [Source-material sitemap](#source-material-sitemap): all source files, category descriptions and article counts.
- [Repository layout](#repository-layout): where the materials and generated indexes live.
- [Correspondence](#correspondence): the separate letters and replies in `comms/`.
- [Reading and searching](#reading-and-searching): how to navigate the large Markdown files.
- [Coverage and limitations](#coverage-and-limitations): what the collection and sitemap do, and do not, cover.
- [Regenerating the sitemap](#regenerating-the-sitemap): keep the documentation in sync with the materials.
- [Provenance and rights](#provenance-and-rights): collection metadata and the original rights notice.

## Source-material sitemap

The `sources/` folder has 18 files: one provenance note, 16 thematic full-text collections and one master register. Each “Complete sitemap” covers every article in that thematic file, including its full title, recorded issue/date label, publisher URL, available keywords and all Markdown subsection headings.

### Collection metadata and master register

- **[Collection provenance](sources/1-gegenstandpunkt-frei-zug-ngliches-gesamtwerk.md)**: the extraction date, discovered-URL and extracted-text counts, publisher attribution and personal-use notice. Despite its “Gesamtwerk” title, this file is a short metadata note, not the combined full text.
- **[Chronologisches Register](sources/18-chronologisches-register.md)**: 1,965 original article links with recorded publication labels. The file calls itself chronological, but its current sequence is not consistently date-sorted; use it as a master register rather than a reliable publication timeline.

### Thematic collections

| File no. | Collection / full text | Articles | Subsections | Scope | Detailed navigation |
| --- | --- | ---: | ---: | --- | --- |
| 2 | [Politische Ökonomie I: Kapital, Wert, Geld, Kredit](sources/2-politische-konomie-i-kapital-wert-geld-kredit.md) | 164 | 1,004 | Capital, value, money and credit. | [Complete sitemap](docs/sitemap/02-politische-konomie-i-kapital-wert-geld-kredit.md) |
| 3 | [Politische Ökonomie II: Krise, Konkurrenz, Weltmarkt](sources/3-politische-konomie-ii-krise-konkurrenz-weltmarkt.md) | 334 | 2,045 | Crisis, competition and the world market. | [Complete sitemap](docs/sitemap/03-politische-konomie-ii-krise-konkurrenz-weltmarkt.md) |
| 4 | [Lohnarbeit, Lohnkampf, Gewerkschaften](sources/4-lohnarbeit-lohnkampf-gewerkschaften.md) | 173 | 541 | Wage labour, labour disputes and trade unions. | [Complete sitemap](docs/sitemap/04-lohnarbeit-lohnkampf-gewerkschaften.md) |
| 5 | [Sozialstaat, Armut, Reproduktion, Alltag](sources/5-sozialstaat-armut-reproduktion-alltag.md) | 134 | 382 | Welfare, poverty, social reproduction and everyday life. | [Complete sitemap](docs/sitemap/05-sozialstaat-armut-reproduktion-alltag.md) |
| 6 | [Staat, Recht, Demokratie](sources/6-staat-recht-demokratie.md) | 351 | 1,321 | The state, law and democracy. | [Complete sitemap](docs/sitemap/06-staat-recht-demokratie.md) |
| 7 | [Nation, Volk, rechte Ideologien, Rassismus](sources/7-nation-volk-rechte-ideologien-rassismus.md) | 122 | 465 | Nation, people, right-wing ideologies and racism. | [Complete sitemap](docs/sitemap/07-nation-volk-rechte-ideologien-rassismus.md) |
| 8 | [Imperialismus, Krieg, Weltordnung](sources/8-imperialismus-krieg-weltordnung.md) | 276 | 1,452 | Imperialism, war and the international order. | [Complete sitemap](docs/sitemap/08-imperialismus-krieg-weltordnung.md) |
| 9 | [Europa](sources/9-europa.md) | 45 | 265 | Europe and European politics. | [Complete sitemap](docs/sitemap/09-europa.md) |
| 10 | [USA & Amerika](sources/10-usa-amerika.md) | 5 | 18 | The United States and the Americas. | [Complete sitemap](docs/sitemap/10-usa-amerika.md) |
| 11 | [Russland & postsowjetischer Raum, realer Sozialismus](sources/11-russland-postsowjetischer-raum-realer-sozialismus.md) | 11 | 92 | Russia, the post-Soviet region and real socialism. | [Complete sitemap](docs/sitemap/11-russland-postsowjetischer-raum-realer-sozialismus.md) |
| 12 | [Naher & Mittlerer Osten, Islamismus](sources/12-naher-mittlerer-osten-islamismus.md) | 17 | 54 | The Near and Middle East and Islamism. | [Complete sitemap](docs/sitemap/12-naher-mittlerer-osten-islamismus.md) |
| 13 | [Dritte Welt, Entwicklung, Migration](sources/13-dritte-welt-entwicklung-migration.md) | 9 | 45 | The Third World, development and migration. | [Complete sitemap](docs/sitemap/13-dritte-welt-entwicklung-migration.md) |
| 14 | [Linke, Arbeiterbewegung, Marxismus, Kritik](sources/14-linke-arbeiterbewegung-marxismus-kritik.md) | 69 | 288 | The left, the labour movement, Marxism and criticism. | [Complete sitemap](docs/sitemap/14-linke-arbeiterbewegung-marxismus-kritik.md) |
| 15 | [Ideologien, Moral, Religion, Weltanschauung](sources/15-ideologien-moral-religion-weltanschauung.md) | 64 | 150 | Ideologies, morality, religion and worldviews. | [Complete sitemap](docs/sitemap/15-ideologien-moral-religion-weltanschauung.md) |
| 16 | [Wissenschaft, Bildung, Kultur, Medien](sources/16-wissenschaft-bildung-kultur-medien.md) | 61 | 132 | Science, education, culture and media. | [Complete sitemap](docs/sitemap/16-wissenschaft-bildung-kultur-medien.md) |
| 17 | [Verschiedenes](sources/17-verschiedenes.md) | 130 | 131 | Miscellaneous material outside the other categories. | [Complete sitemap](docs/sitemap/17-verschiedenes.md) |
| | **Total** | **1,965** | **8,385** | 16 thematic collections | |

The category names are those of the existing extraction, not a new editorial taxonomy. An article relevant to several topics is still indexed in its existing file, so a small regional category should not be read as the total coverage of that region across the collection.

### How the detailed sitemap works

- **Article links**: the full article title links to its starting line in the local source file's GitHub source-code view; the publisher original is listed separately.
- **Subsection links**: expand an article's “Subsection sitemap” to see every recorded H3–H6 heading, its original heading level and its source line. Articles without such headings are explicitly marked.
- **Metadata**: issue labels, any dates included in those labels and available keywords are reproduced rather than inferred. Multiline article titles are joined into a single readable title.
- **Large indexes**: when necessary, a category's index links to smaller parts, each retaining the complete subsection map for its articles. This keeps the generated navigation pages manageable without dropping entries.

## Repository layout

```text
gsp/
├── README.md
├── sources/
│   ├── 1-gegenstandpunkt-frei-zug-ngliches-gesamtwerk.md
│   ├── 2-politische-konomie-i-kapital-wert-geld-kredit.md
│   ├── 3-politische-konomie-ii-krise-konkurrenz-weltmarkt.md
│   ├── 4-lohnarbeit-lohnkampf-gewerkschaften.md
│   ├── 5-sozialstaat-armut-reproduktion-alltag.md
│   ├── 6-staat-recht-demokratie.md
│   ├── 7-nation-volk-rechte-ideologien-rassismus.md
│   ├── 8-imperialismus-krieg-weltordnung.md
│   ├── 9-europa.md
│   ├── 10-usa-amerika.md
│   ├── 11-russland-postsowjetischer-raum-realer-sozialismus.md
│   ├── 12-naher-mittlerer-osten-islamismus.md
│   ├── 13-dritte-welt-entwicklung-migration.md
│   ├── 14-linke-arbeiterbewegung-marxismus-kritik.md
│   ├── 15-ideologien-moral-religion-weltanschauung.md
│   ├── 16-wissenschaft-bildung-kultur-medien.md
│   ├── 17-verschiedenes.md
│   └── 18-chronologisches-register.md
├── comms/
│   ├── leserbriefe-ausgangsbriefe(2).md
│   ├── gs-leserbriefe-antwort(1).txt
│   └── antwort-an-stefan-v10(1).md
├── docs/
│   └── sitemap/  # complete article and subsection indexes
└── scripts/
    └── build-sitemap.mjs
```

The original `sources/` and `comms/` files are the materials; `docs/sitemap/` is generated navigation, not an additional article collection. The generator reads the materials without rewriting them.

## Correspondence

The `comms/` folder is separate from the published-article collection and is not included in the 1,965-article total. Its existing filenames are preserved.

| File | Content |
| --- | --- |
| [leserbriefe-ausgangsbriefe(2).md](comms/leserbriefe-ausgangsbriefe%282%29.md) | Introductory note and three outgoing letters concerning “Kritik – wie geht das?”, the derivation of capitalist competition, and the Iran article. |
| [gs-leserbriefe-antwort(1).txt](comms/gs-leserbriefe-antwort%281%29.txt) | The response to those letters, stored as plain text. |
| [antwort-an-stefan-v10(1).md](comms/antwort-an-stefan-v10%281%29.md) | A follow-up response discussing corrections and remaining questions. |

## Reading and searching

Start with a category in the table above, then use its complete sitemap to choose an article or subsection. Follow “Publisher original” for the article's website version, or use the local file and line reference for the stored extraction.

Several source files are large enough that GitHub may not display their rendered Markdown or all source lines. If a line link cannot be displayed, download the file or clone the repository and navigate to the recorded line in an editor; the navigation indexes remain separate, smaller files.

```sh
git clone https://github.com/LoredCast/gsp.git
cd gsp

# Search full texts, not just article titles.
rg -n -i 'konkurrenz' sources/

# Search the readable article and subsection indexes.
rg -n -i 'kritik' docs/sitemap/

# Locate article headings in an individual thematic file.
rg -n '^## ' sources/6-staat-recht-demokratie.md
```

`rg` is ripgrep; the commands above are optional reading tools. A Markdown viewer or ordinary text editor is sufficient to read the collection.

## Coverage and limitations

- **Verified coverage**: the generator finds 1,965 article entries with 1,965 unique publisher URLs across the 16 thematic files. These match the 1,965 master-register URLs one-to-one, and each thematic file's declared article count matches its actual article headings.
- **Subsection coverage**: all 8,385 H3–H6 headings within those articles are included. Unheaded paragraphs, inline lists, tables, footnotes and externally linked pages are not separate sitemap nodes; they remain part of the linked source text.
- **Snapshot, not a live mirror**: the provenance note records generation on 2026-09-19, 1980 discovered article URLs and 1,965 extracted full texts. The 15 discovered URLs without extracted full texts are not itemized in the repository, so this sitemap does not identify them or claim to cover the publisher's entire output.
- **Existing extraction artefacts**: some article titles continue on the next line, and some extracted in-article navigation URLs point to the website root with a `#section...` fragment rather than the article page. The new sitemap uses recorded local lines and article-level publisher URLs instead of treating those fragments as reliable navigation.
- **Ordering**: articles and subsection headings retain source-file order. No chronological sorting, correction of article contents or reclassification is performed.

## Regenerating the sitemap

The dependency-free generator requires Node.js 18 or later. Run it after changing the source collection, and commit the regenerated README and sitemap pages together.

```sh
node scripts/build-sitemap.mjs
node scripts/build-sitemap.mjs --check
```

The first command writes this README and the files under `docs/sitemap/`; the second checks whether those generated files are current without writing anything. Both validate article counts, unique article URLs and agreement with the master register, and neither changes the original source materials.

## Provenance and rights

The [collection provenance note](sources/1-gegenstandpunkt-frei-zug-ngliches-gesamtwerk.md) attributes the material to [de.gegenstandpunkt.com](https://de.gegenstandpunkt.com), records generation on 2026-09-19, and states: “Alle Rechte beim GegenStandpunkt-Verlag, München. Nur zur persönlichen Nutzung.” The README and sitemap do not grant a licence to republish or reuse the article texts.

The sitemap documents the files present in this repository, rather than claiming publisher endorsement or independently verifying every extraction against its current website version. Consult each article's publisher link when checking the original publication.
