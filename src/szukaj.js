
export const STOP = [
  'ile', 'jak', 'czy', 'sie', 'nie', 'ale', 'oraz',
  'dla', 'jest', 'sa', 'to', 'na', 'gdzie', 'kiedy',
  'mam', 'moge', 'musze', 'jaki', 'jaka', 'jakie',
  'przez', 'tak', 'lub', 'albo', 'mnie', 'jesli',
  'ktora', 'ktory', 'ktore'
];

// Zamienia tekst na słowa bez polskich znaków.
export function normalizuj(tekst) {
  const bezOgonkow = tekst
    .toLowerCase()
    .replace(/ł/g, 'l')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  return bezOgonkow
    .split(/[^a-z0-9]+/)
    .filter(slowo => slowo.length >= 3 && !STOP.includes(slowo));
}

// Wyszukuje najlepiej pasujące fragmenty.
export function szukaj(pytanie, fragmenty, ile = 3) {
  const slowaPytania = new Set(normalizuj(pytanie));

  return fragmenty
    .map(fragment => {
      const slowaFragmentu = new Set(normalizuj(fragment.tekst));

      let wynik = 0;

      for (const slowo of slowaPytania) {
        if (slowaFragmentu.has(slowo)) {
          wynik++;
        }
      }

      return { ...fragment, wynik };
    })
    .filter(fragment => fragment.wynik > 0)
    .sort((a, b) => b.wynik - a.wynik)
    .slice(0, ile);
}
