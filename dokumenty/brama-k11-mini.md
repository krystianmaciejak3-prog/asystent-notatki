# Projekt bramy teleskopowej K-11 MINI

## Cel projektu
Celem projektu jest wykonanie małej, przenośnej makiety
automatycznej bramy teleskopowej dwusegmentowej.

Makieta jest częścią projektu inżynierskiego z mechatroniki.

## Konstrukcja mechaniczna
Brama składa się z dwóch segmentów przesuwających się
poziomo i chowających się jeden za drugim.

Do budowy konstrukcji przewidziano profile aluminiowe
o przekroju 20 × 20 mm.

## Wymiary projektowe
- Światło otworu: 200 mm.
- Wysokość bramy: około 150 mm.
- Wstępny wymiar podstawy: 400 × 180 mm.
- Liczba segmentów: 2.

Wymiary mają charakter wstępny i wymagają weryfikacji.

## Układ sterowania
Do sterowania makietą przewidziano:
- Arduino UNO.
- Silnik DC 12 V z przekładnią.
- Sterownik silnika.
- Czujniki położenia.
- Zasilanie elektryczne.

## Działanie bramy
Po otrzymaniu polecenia otwarcia silnik przesuwa
segmenty bramy w lewo.

Podczas zamykania silnik obraca się w przeciwnym kierunku.

Czujniki położenia umożliwiają zatrzymanie napędu
w odpowiednim miejscu.

## Bezpieczeństwo
Układ powinien zatrzymać ruch po wykryciu przeszkody.

Silnik nie może być zasilany bezpośrednio z pinów Arduino.

## Planowane testy
- Test otwierania bramy.
- Test zamykania bramy.
- Test zatrzymania napędu.
- Test czujników położenia.
- Test reakcji na przeszkodę.