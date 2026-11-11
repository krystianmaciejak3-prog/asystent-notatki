
import fs from 'node:fs';
import path from 'node:path';

export function podzielNaFragmenty(tekst, zrodlo) {
  const bloki = tekst
    .replace(/\r\n/g, '\n')
    .split(/\n\s*\n/)
    .map(blok => blok.trim())
    .filter(blok => {
      if (blok === '') return false;
      return !/^#+\s+.+$/.test(blok);
    });

  return bloki.map((tekst, indeks) => ({
    id: `${zrodlo}#${indeks + 1}`,
    zrodlo,
    tekst
  }));
}

export function wczytajDokumenty(folder) {
  const pliki = fs.readdirSync(folder)
    .filter(plik => plik.endsWith('.md'))
    .sort();

  const fragmenty = [];

  for (const plik of pliki) {
    const sciezka = path.join(folder, plik);
    const tekst = fs.readFileSync(sciezka, 'utf8');

    fragmenty.push(...podzielNaFragmenty(tekst, plik));
  }

  return fragmenty;
}

