import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const main = await readFile(new URL('../src/main.jsx', import.meta.url), 'utf8');
const sourceFiles = [];
async function collect(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await collect(path);
    else if (path.endsWith('.jsx') || path.endsWith('.js')) sourceFiles.push(await readFile(path, 'utf8'));
  }
}
await collect(fileURLToPath(new URL('../src/', import.meta.url)));
const source = sourceFiles.join('\n');
const styles = await readFile(new URL('../src/styles.css', import.meta.url), 'utf8');

test('prototype source keeps Vietnamese text readable', () => {
  assert.match(source, /Biển Thiên Cầm/);
  assert.match(source, /Khám phá điểm đến/);
  assert.doesNotMatch(source, /BiÃ|HÃ|Ä‘/);
});

test('prototype is split into pages, shared components and responsive navigation', async () => {
  for (const path of ['src/pages/HomePage.jsx', 'src/pages/DestinationsPage.jsx', 'src/pages/JourneysPage.jsx', 'src/pages/EventsPage.jsx', 'src/pages/SonTrangPage.jsx', 'src/components/SiteHeader.jsx', 'src/data/mockData.js', 'src/router/AppRouter.jsx']) assert.ok(await readFile(new URL(`../${path}`, import.meta.url)));
  assert.match(source, /mobile-nav/);
  assert.match(styles, /@media\s*\(max-width:\s*767px\)/);
  assert.match(styles, /@media\s*\(max-width:\s*991px\)/);
  assert.match(styles, /--gutter/);
});

test('hash navigation targets defined routes', () => {
  for (const route of ['destinations', 'journeys', 'events', 'son-trang']) assert.match(source, new RegExp(`#/${route}`));
});

test('all referenced local image assets exist', async () => {
  const images = [...source.matchAll(/(?:src|image):\s*['"](\/[^'"]+\.jpg)['"]/g)].map(match => match[1]);
  assert.ok(images.length > 0);
  for (const image of images) await readFile(new URL(`../public${image}`, import.meta.url));
});
