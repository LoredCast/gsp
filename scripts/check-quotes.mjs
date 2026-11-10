#!/usr/bin/env node
// Prüft, ob die „…“-Zitate in den angegebenen Markdown-Dateien wörtlich in sources/ oder korrespondenz/ stehen.
// Aufruf: node scripts/check-quotes.mjs angriffspunkte/*.md
// Nicht geprüft werden: Zeilen mit „(nur online)“ und Stücke unter vier Wörtern. Ein Stück, das nicht gefunden wird
// und in Belegposition steht (direkt vor einer Heftangabe wie „, GS 3-17“ oder „ (GS 3-17)“, oder direkt nach „ — “),
// gilt als Artikeltitel und wird nur gezählt.
// Eigene Formulierungen und Titel fremder Schriften gehören in ‚…‘, Zitate aus externen Texten in »…«.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// Alle Anführungszeichen gleich behandeln, weil verschachtelte Zitate „…“ zu ‚…‘ werden. Leerzeichen vor Satzzeichen und an Anführungszeichen entfallen, weil die Sammlungen nach Hervorhebungen oft „*Wort* ,“ oder „*Wort* “ schreiben. Ein Bindestrich zwischen Leerzeichen gilt als Gedankenstrich.
const normalize = text => text.replace(/\*/g, '').replace(/[„“”"‚‘’']/g, '"').replace(/\s+/g, ' ').replace(/ ([,.;:!?)])/g, '$1').replace(/ ?" ?/g, '"').replace(/ - /g, ' – ').trim();
const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
  const full = path.join(dir, entry.name);
  return entry.isDirectory() ? walk(full) : /\.(md|txt)$/.test(entry.name) ? [full] : [];
});
const corpus = ['sources', 'korrespondenz']
  .flatMap(dir => walk(path.join(root, dir)))
  .map(file => ({ file: path.relative(root, file), text: normalize(fs.readFileSync(file, 'utf8')) }));

const targets = process.argv.slice(2);
if (!targets.length) {
  console.error('Aufruf: node scripts/check-quotes.mjs <datei.md> …');
  process.exit(2);
}
let missing = 0;
let checked = 0;
let titles = 0;
for (const target of targets) {
  const lines = fs.readFileSync(target, 'utf8').split('\n');
  lines.forEach((line, index) => {
    // Zitate, die nur auf der Website stehen, sind in der Zeile mit „(nur online)“ markiert.
    if (line.includes('(nur online)')) return;
    for (const match of line.matchAll(/„([^„“"]+)[“"]/g)) {
      const after = line.slice(match.index + match[0].length);
      const before = line.slice(0, match.index);
      // Belegposition: direkt vor einer Heftangabe oder direkt nach „ — “. Dort stehen meist Artikeltitel.
      const titlePosition = /^,? \(?GS \d-\d\d/.test(after) || / — $/.test(before);
      // Auslassungen trennen das Zitat in Stücke, die einzeln vorkommen müssen.
      const pieces = match[1].split(/\s*(?:\[…\]|…|\.\.\.)\s*/).map(normalize).filter(piece => piece.split(' ').length >= 4);
      for (const piece of pieces) {
        if (corpus.some(entry => entry.text.includes(piece))) { checked++; continue; }
        // Ein nicht auffindbares Stück in Belegposition gilt als Titel (die Sammlungen brechen lange Titel um oder kürzen sie).
        if (titlePosition) { titles++; continue; }
        checked++;
        missing++;
        console.log(`${target}:${index + 1}: nicht gefunden: „${piece}“`);
      }
    }
  });
}
console.log(`${checked} Zitatstücke geprüft, ${missing} nicht in sources/ oder korrespondenz/ gefunden; ${titles} Titel in Belegposition nicht geprüft.`);
process.exitCode = missing ? 1 : 0;
