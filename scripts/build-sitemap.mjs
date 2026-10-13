#!/usr/bin/env node
// Generate documentation only; the source materials are never modified.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const check = process.argv.includes('--check');
const files = fs.readdirSync(path.join(root, 'sources'))
  .filter(name => /^\d+-.*\.md$/.test(name))
  .sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
const escape = text => text.replace(/\\/g, '\\\\').replace(/[[\]<>|]/g, char => `\\${char}`);
const clean = text => text.replace(/\s+/g, ' ').trim();
const output = new Map();
const categories = [];
const allURLs = [];
const descriptions = {
  2: 'Capital, value, money and credit.',
  3: 'Crisis, competition and the world market.',
  4: 'Wage labour, labour disputes and trade unions.',
  5: 'Welfare, poverty, social reproduction and everyday life.',
  6: 'The state, law and democracy.',
  7: 'Nation, people, right-wing ideologies and racism.',
  8: 'Imperialism, war and the international order.',
  9: 'Europe and European politics.',
  10: 'The United States and the Americas.',
  11: 'Russia, the post-Soviet region and real socialism.',
  12: 'The Near and Middle East and Islamism.',
  13: 'The Third World, development and migration.',
  14: 'The left, the labour movement, Marxism and criticism.',
  15: 'Ideologies, morality, religion and worldviews.',
  16: 'Science, education, culture and media.',
  17: 'Miscellaneous material outside the other categories.',
};

for (const file of files) {
  const number = parseInt(file, 10);
  if (number < 2 || number > 17) continue;
  const text = fs.readFileSync(path.join(root, 'sources', file), 'utf8');
  const lines = text.split('\n');
  const title = lines[0].replace(/^# /, '').trim();
  const headings = [];
  let fenced = false;
  let fenceChar = '';
  for (let index = 0; index < lines.length; index++) {
    const fence = lines[index].match(/^\s{0,3}(`{3,}|~{3,})/);
    if (fence) {
      if (!fenced) { fenced = true; fenceChar = fence[1][0]; }
      else if (fence[1][0] === fenceChar) fenced = false;
      continue;
    }
    if (fenced) continue;
    const heading = lines[index].match(/^(#{1,6}) (.+)$/);
    if (heading) headings.push({ level: heading[1].length, title: heading[2].trim(), line: index + 1 });
  }
  const starts = headings.filter(heading => heading.level === 2);
  const articles = starts.map((heading, index) => {
    const end = starts[index + 1]?.line ?? lines.length + 1;
    const body = lines.slice(heading.line - 1, end - 1);
    const metaIndex = body.findIndex(line => /^\*.* · \[Quelle\]\(https:\/\//.test(line));
    if (metaIndex < 1) throw new Error(`Missing article metadata: ${file}:${heading.line}`);
    const metadata = body[metaIndex].match(/^\*(.*?) · \[Quelle\]\((https:\/\/[^)]+)\)\*/);
    if (!metadata) throw new Error(`Malformed metadata: ${file}:${heading.line}`);
    const tags = body.find(line => /^\*Schlagworte: /.test(line))
      ?.replace(/^\*Schlagworte: /, '').replace(/\*$/, '') ?? '';
    const fullTitle = clean(body.slice(0, metaIndex).join(' ').replace(/^## /, ''));
    const sections = headings.filter(section => section.line > heading.line && section.line < end);
    if (sections.some(section => section.level < 3)) throw new Error(`Unexpected article boundary in ${file}`);
    const article = {
      title: fullTitle, line: heading.line, metadata: metadata[1], url: metadata[2],
      tags, sections, id: `article-${metadata[2].split('/').at(-1)}`,
    };
    allURLs.push(article.url);
    return article;
  });
  const declared = text.match(/^\*(\d+) Texte\*/m);
  if (!declared || Number(declared[1]) !== articles.length) {
    throw new Error(`Article count does not match source declaration: ${file}`);
  }
  const docName = file.replace(/^\d+/, String(number).padStart(2, '0'));
  categories.push({ number, file, docName, title, articles, sections: articles.reduce((sum, article) => sum + article.sections.length, 0) });
}

const registerFile = files.find(file => file.startsWith('18-'));
const provenanceFile = files.find(file => file.startsWith('1-'));
if (!registerFile || !provenanceFile || categories.length !== 16) throw new Error('Incomplete collection structure');
const register = fs.readFileSync(path.join(root, 'sources', registerFile), 'utf8');
const registerURLs = [...register.matchAll(/\]\((https:\/\/de\.gegenstandpunkt\.com\/artikel\/[^)]+)\)/g)].map(match => match[1]);
const unique = new Set(allURLs);
const registerSet = new Set(registerURLs);
if (unique.size !== allURLs.length || registerSet.size !== registerURLs.length ||
    unique.size !== registerSet.size || [...unique].some(url => !registerSet.has(url))) {
  throw new Error('The article collection and master register do not match one-to-one');
}
const articleCount = allURLs.length;
const sectionCount = categories.reduce((sum, category) => sum + category.sections, 0);
const snapshot = fs.readFileSync(path.join(root, 'sources', provenanceFile), 'utf8');
const generatedDate = snapshot.match(/Generiert am (\d{4}-\d{2}-\d{2})/)?.[1] ?? 'not recorded';
const discoveredCount = snapshot.match(/aus (\d+) entdeckten Artikel-URLs/)?.[1] ?? 'not recorded';
const sourceLink = (category, line) => `../../sources/${category.file}?plain=1#L${line}`;
const count = value => value.toLocaleString('en-US');

function categoryIntro(category) {
  return `# ${category.title}\n\nThis sitemap covers all ${count(category.articles.length)} articles and ${count(category.sections)} subsection headings in [the source file](../../sources/${category.file}). Article titles, issue/date labels and keywords are taken from that file; no thematic reclassification has been applied.\n\n[Repository README](../../README.md#source-material-sitemap) | [Master register](../../sources/${registerFile})\n\nArticle and subsection links target the source-code view at the recorded line. Very large source files may exceed GitHub's display limits; use the publisher link or a local checkout in that case.\n\n`;
}

function articleBlock(category, article) {
  const out = [
    `<a id="${article.id}"></a>`,
    '',
    `## [${escape(article.title)}](${sourceLink(category, article.line)})`,
    '',
    `${escape(article.metadata)} | [Publisher original](${article.url}) | Source line: ${article.line}`,
    '',
  ];
  if (article.tags) out.push(`Keywords: ${escape(article.tags)}`, '');
  if (article.sections.length) {
    out.push('<details>', `<summary>Subsection sitemap (${article.sections.length} headings)</summary>`, '');
    // Source heading levels determine indentation; no new sections are invented.
    const base = Math.min(...article.sections.map(section => section.level));
    for (const section of article.sections) {
      out.push(`${'  '.repeat(section.level - base)}- [${escape(section.title)}](${sourceLink(category, section.line)}) (H${section.level}, line ${section.line})`);
    }
    out.push('', '</details>', '');
  } else {
    out.push('No Markdown subsection headings in the source.', '');
  }
  return out.join('\n') + '\n';
}

for (const category of categories) {
  const blocks = category.articles.map(article => articleBlock(category, article));
  const chunks = [];
  let chunk = [];
  let bytes = 0;
  // Keep each generated Markdown page comfortably below GitHub's render-size limit.
  for (let index = 0; index < blocks.length; index++) {
    const size = Buffer.byteLength(blocks[index]);
    if (chunk.length && bytes + size > 350_000) { chunks.push(chunk); chunk = []; bytes = 0; }
    chunk.push({ block: blocks[index], article: category.articles[index] });
    bytes += size;
  }
  if (chunk.length) chunks.push(chunk);
  const relative = `docs/sitemap/${category.docName}`;
  if (chunks.length === 1) {
    output.set(relative, categoryIntro(category) + blocks.join(''));
  } else {
    let indexPage = categoryIntro(category);
    indexPage += '## Complete article index\n\nThe detailed subsection sitemap is split into linked parts to keep the Markdown pages renderable. Every article appears below in source-file order.\n\n';
    chunks.forEach((entries, index) => {
      const partName = category.docName.replace(/\.md$/, `-part-${index + 1}.md`);
      indexPage += `### [Part ${index + 1}](${partName})\n\n`;
      for (const { article } of entries) {
        indexPage += `- [${escape(article.title)}](${partName}#${article.id}) (${escape(article.metadata)})\n`;
      }
      indexPage += '\n';
      const navigation = chunks.map((_, n) => {
        const name = category.docName.replace(/\.md$/, `-part-${n + 1}.md`);
        return `[Part ${n + 1}](${name})`;
      }).join(' | ');
      output.set(`docs/sitemap/${partName}`,
        categoryIntro(category) + `## Part ${index + 1}\n\n[Complete category index](${category.docName}) | ${navigation}\n\n` + entries.map(entry => entry.block).join(''));
    });
    output.set(relative, indexPage);
  }
}

const tree = [
  'gsp/',
  '├── README.md',
  '├── sources/',
  ...files.map((file, index) => `│   ${index === files.length - 1 ? '└' : '├'}── ${file}`),
  '├── theorie/        # Theorieschrift und ihre Prüfungen',
  '│   ├── GSP-Theorie.md',
  '│   ├── GSP-Ableitung.md',
  '│   └── pruefungen/',
  '├── angriffspunkte/  # Probleme, Inkonsistenzen, offene Fragen',
  '├── korrespondenz/   # Briefwechsel, Entwürfe, Bewertungen',
  '│   ├── entwuerfe/',
  '│   └── bewertungen/',
  '├── docs/',
  '│   └── sitemap/  # complete article and subsection indexes',
  '└── scripts/',
  '    ├── build-sitemap.mjs',
  '    └── check-quotes.mjs',
].join('\n');

const table = categories.map(category =>
  `| ${category.number} | [${escape(category.title)}](sources/${category.file}) | ${count(category.articles.length)} | ${count(category.sections)} | ${descriptions[category.number]} | [Complete sitemap](docs/sitemap/${category.docName}) |`
).join('\n');

const readme = `# gsp: GegenStandpunkt source collection

## Arbeitsstand

Dieses Repository dient dazu, die Theorie des GegenStandpunkt (GSP) korrekt herauszuarbeiten und ebenso ihre Probleme, Inkonsistenzen und die Bereiche, die sie nicht erklären oder erfassen kann. Neben den Primärtexten in \`sources/\` gibt es drei Arbeitsordner:

- **[theorie/](theorie/)**: [GSP-Theorie.md](theorie/GSP-Theorie.md), eine Rekonstruktion der Theorie aus den Zeitschriftenartikeln, nach Themen geordnet und mit wörtlichen, geprüften Zitaten belegt; [GSP-Ableitung.md](theorie/GSP-Ableitung.md), dieselben Argumente als Ableitung in Prämissen, Schritten und Schlüssen; dazu die Prüfungen und Korrekturen.
- **[angriffspunkte/](angriffspunkte/)**: die bisher erarbeiteten Probleme und offenen Fragen, je eine Datei mit These, GSP-Fundstellen, stärkster Gegenrede, Stand und Suchansätzen; dazu verworfene Einwände und noch offene Forschungsfelder.
- **[korrespondenz/](korrespondenz/)**: der Briefwechsel mit dem GSP-Verlag, alle Antwortentwürfe und ihre Bewertungen.

Zitate in Arbeitsdateien lassen sich mit \`node scripts/check-quotes.mjs <dateien>\` gegen \`sources/\` prüfen.

## The source collection

This repository contains German-language GegenStandpunkt articles collected into thematic Markdown files, alongside the working folders described above. This README is the entry point to the whole collection: the file-level sitemap below links to complete indexes of **${count(articleCount)} articles** and **${count(sectionCount)} subsection headings**, preserving the source files' existing categories and order.

## Navigation

- [Source-material sitemap](#source-material-sitemap): all source files, category descriptions and article counts.
- [Repository layout](#repository-layout): where the materials and generated indexes live.
- [Arbeitsstand](#arbeitsstand): the theory write-up, the open problems and the correspondence.
- [Reading and searching](#reading-and-searching): how to navigate the large Markdown files.
- [Coverage and limitations](#coverage-and-limitations): what the collection and sitemap do, and do not, cover.
- [Regenerating the sitemap](#regenerating-the-sitemap): keep the documentation in sync with the materials.
- [Provenance and rights](#provenance-and-rights): collection metadata and the original rights notice.

## Source-material sitemap

The \`sources/\` folder has 18 files: one provenance note, 16 thematic full-text collections and one master register. Each “Complete sitemap” covers every article in that thematic file, including its full title, recorded issue/date label, publisher URL, available keywords and all Markdown subsection headings.

### Collection metadata and master register

- **[Collection provenance](sources/${provenanceFile})**: the extraction date, discovered-URL and extracted-text counts, publisher attribution and personal-use notice. Despite its “Gesamtwerk” title, this file is a short metadata note, not the combined full text.
- **[Chronologisches Register](sources/${registerFile})**: ${count(registerURLs.length)} original article links with recorded publication labels. The file calls itself chronological, but its current sequence is not consistently date-sorted; use it as a master register rather than a reliable publication timeline.

### Thematic collections

| File no. | Collection / full text | Articles | Subsections | Scope | Detailed navigation |
| --- | --- | ---: | ---: | --- | --- |
${table}
| | **Total** | **${count(articleCount)}** | **${count(sectionCount)}** | 16 thematic collections | |

The category names are those of the existing extraction, not a new editorial taxonomy. An article relevant to several topics is still indexed in its existing file, so a small regional category should not be read as the total coverage of that region across the collection.

### How the detailed sitemap works

- **Article links**: the full article title links to its starting line in the local source file's GitHub source-code view; the publisher original is listed separately.
- **Subsection links**: expand an article's “Subsection sitemap” to see every recorded H3–H6 heading, its original heading level and its source line. Articles without such headings are explicitly marked.
- **Metadata**: issue labels, any dates included in those labels and available keywords are reproduced rather than inferred. Multiline article titles are joined into a single readable title.
- **Large indexes**: when necessary, a category's index links to smaller parts, each retaining the complete subsection map for its articles. This keeps the generated navigation pages manageable without dropping entries.

## Repository layout

\`\`\`text
${tree}
\`\`\`

The \`sources/\` files are the materials; \`docs/sitemap/\` is generated navigation, not an additional article collection. The generator reads the materials without rewriting them. The working folders \`theorie/\`, \`angriffspunkte/\` and \`korrespondenz/\` are not part of the ${count(articleCount)}-article total; each has its own README.

## Reading and searching

Start with a category in the table above, then use its complete sitemap to choose an article or subsection. Follow “Publisher original” for the article's website version, or use the local file and line reference for the stored extraction.

Several source files are large enough that GitHub may not display their rendered Markdown or all source lines. If a line link cannot be displayed, download the file or clone the repository and navigate to the recorded line in an editor; the navigation indexes remain separate, smaller files.

\`\`\`sh
git clone https://github.com/LoredCast/gsp.git
cd gsp

# Search full texts, not just article titles.
rg -n -i 'konkurrenz' sources/

# Search the readable article and subsection indexes.
rg -n -i 'kritik' docs/sitemap/

# Locate article headings in an individual thematic file.
rg -n '^## ' sources/6-staat-recht-demokratie.md
\`\`\`

\`rg\` is ripgrep; the commands above are optional reading tools. A Markdown viewer or ordinary text editor is sufficient to read the collection.

## Coverage and limitations

- **Verified coverage**: the generator finds ${count(articleCount)} article entries with ${count(unique.size)} unique publisher URLs across the 16 thematic files. These match the ${count(registerURLs.length)} master-register URLs one-to-one, and each thematic file's declared article count matches its actual article headings.
- **Subsection coverage**: all ${count(sectionCount)} H3–H6 headings within those articles are included. Unheaded paragraphs, inline lists, tables, footnotes and externally linked pages are not separate sitemap nodes; they remain part of the linked source text.
- **Snapshot, not a live mirror**: the provenance note records generation on ${generatedDate}, ${discoveredCount} discovered article URLs and ${count(articleCount)} extracted full texts. The ${Number(discoveredCount) - articleCount} discovered URLs without extracted full texts are not itemized in the repository, so this sitemap does not identify them or claim to cover the publisher's entire output.
- **Existing extraction artefacts**: some article titles continue on the next line, and some extracted in-article navigation URLs point to the website root with a \`#section...\` fragment rather than the article page. The new sitemap uses recorded local lines and article-level publisher URLs instead of treating those fragments as reliable navigation.
- **Ordering**: articles and subsection headings retain source-file order. No chronological sorting, correction of article contents or reclassification is performed.

## Regenerating the sitemap

The dependency-free generator requires Node.js 18 or later. Run it after changing the source collection, and commit the regenerated README and sitemap pages together.

\`\`\`sh
node scripts/build-sitemap.mjs
node scripts/build-sitemap.mjs --check
\`\`\`

The first command writes this README and the files under \`docs/sitemap/\`; the second checks whether those generated files are current without writing anything. Both validate article counts, unique article URLs and agreement with the master register, and neither changes the original source materials.

## Provenance and rights

The [collection provenance note](sources/${provenanceFile}) attributes the material to [de.gegenstandpunkt.com](https://de.gegenstandpunkt.com), records generation on ${generatedDate}, and states: “Alle Rechte beim GegenStandpunkt-Verlag, München. Nur zur persönlichen Nutzung.” The README and sitemap do not grant a licence to republish or reuse the article texts.

The sitemap documents the files present in this repository, rather than claiming publisher endorsement or independently verifying every extraction against its current website version. Consult each article's publisher link when checking the original publication.
`;
output.set('README.md', readme);

const sitemapDir = path.join(root, 'docs', 'sitemap');
const stale = fs.existsSync(sitemapDir)
  ? fs.readdirSync(sitemapDir).filter(name => /^\d{2}-.*\.md$/.test(name) && !output.has(`docs/sitemap/${name}`))
  : [];
// Never silently delete documentation, even when a source change makes a split obsolete.
if (stale.length) throw new Error(`Obsolete generated pages require review: ${stale.join(', ')}`);
const differences = [];
for (const [relative, generated] of output) {
  const content = generated.replace(/\n+$/, '\n');
  const absolute = path.join(root, relative);
  if (check) {
    if (!fs.existsSync(absolute) || fs.readFileSync(absolute, 'utf8') !== content) differences.push(relative);
  } else {
    fs.mkdirSync(path.dirname(absolute), { recursive: true });
    fs.writeFileSync(absolute, content);
  }
}
if (differences.length) {
  console.error(`Generated documentation is out of date:\n${differences.join('\n')}`);
  process.exitCode = 1;
} else {
  console.log(`${check ? 'Verified' : 'Generated'} ${output.size} documentation files: ${articleCount} articles, ${sectionCount} subsections, ${unique.size} unique URLs; register coverage matches.`);
}
