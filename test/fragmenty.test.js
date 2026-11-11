
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { podzielNaFragmenty, wczytajDokumenty } from '../src/fragmenty.js';

test('dzieli tekst na fragmenty po pustych liniach', () => {
  const wynik = podzielNaFragmenty(
    'Pierwszy akapit.\n\nDrugi akapit.',
    'x.md'
  );

  assert.deepEqual(wynik, [
    { id: 'x.md#1', zrodlo: 'x.md', tekst: 'Pierwszy akapit.' },
    { id: 'x.md#2', zrodlo: 'x.md', tekst: 'Drugi akapit.' }
  ]);
});

test('pomija same nagłówki i puste bloki, numeruje bez dziur', () => {
  const tekst =
    '# Tytuł\n\n## Opłaty\nWarsztat kosztuje 20 zł.\n\n\nOstatni blok.';

  const wynik = podzielNaFragmenty(tekst, 'r.md');

  assert.equal(wynik.length, 2);
  assert.equal(wynik[0].id, 'r.md#1');
  assert.equal(wynik[0].tekst, '## Opłaty\nWarsztat kosztuje 20 zł.');
  assert.equal(wynik[1].id, 'r.md#2');
  assert.equal(wynik[1].tekst, 'Ostatni blok.');
});

test('radzi sobie z końcami linii z Windowsa', () => {
  const wynik = podzielNaFragmenty(
    'Jeden.\r\n\r\nDwa.\r\n',
    'w.md'
  );

  assert.deepEqual(
    wynik.map(f => f.tekst),
    ['Jeden.', 'Dwa.']
  );
});

test('pusty tekst daje pustą tablicę', () => {
  assert.deepEqual(podzielNaFragmenty('', 'p.md'), []);
});

test('wczytuje pięć własnych dokumentów w kolejności alfabetycznej', () => {
  const fragmenty = wczytajDokumenty('dokumenty');

  const pliki = [...new Set(fragmenty.map(f => f.zrodlo))];

  assert.deepEqual(pliki, [
    'arduino.md',
    'bezpieczenstwo-ai.md',
    'brama-k11-mini.md',
    'plc.md',
    'python.md'
  ]);
  for (const f of fragmenty) {
    assert.match(f.id, /^[a-z0-9-]+\.md#\d+$/);
    assert.ok(f.tekst.length > 0);
  }
});
