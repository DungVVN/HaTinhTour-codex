import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const source = await readFile(new URL('../src/main.jsx', import.meta.url), 'utf8');
const styles = await Promise.all(['styles.css', 'spacing.css', 'responsive-layout.css', 'mobile-nav.css', 'contrast.css'].map(file => readFile(new URL(`../src/${file}`, import.meta.url), 'utf8'))).then(files => files.join('\n'));

test('prototype source keeps Vietnamese text readable', () => {
  assert.match(source, /Biển Thiên Cầm/);
  assert.match(source, /Khám phá điểm đến/);
  assert.doesNotMatch(source, /Biá»|HÃ|Ä‘/);
});

test('prototype contains all primary sections and responsive navigation', () => {
  for (const section of ['destinations', 'search', 'journeys', 'events', 'son-trang']) assert.match(source, new RegExp(`id="${section}"`));
  assert.match(source, /mobile-nav/);
  assert.match(styles, /@media\s*\(max-width:\s*767px\)/);
  assert.match(styles, /@media\s*\(min-width:\s*768px\)/);
});

test('internal navigation targets existing sections', () => {
  const ids = new Set([...source.matchAll(/id="([^"]+)"/g)].map(match => match[1]));
  const links = [...source.matchAll(/href="#([^"]+)"/g)].map(match => match[1]);
  assert.ok(links.length > 0);
  for (const link of links) assert.ok(ids.has(link), `Missing target for #${link}`);
});

test('all referenced local image assets exist', async () => {
  const images = [...source.matchAll(/(?:src|image):\s*['"](\/[^'"]+\.jpg)['"]/g)].map(match => match[1]);
  assert.ok(images.length > 0);
  for (const image of images) await readFile(new URL(`../public${image}`, import.meta.url));
});
