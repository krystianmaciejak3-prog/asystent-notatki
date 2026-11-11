
# Asystent notatki – projekt RAG

## 1. Opis projektu

Asystent notatki to aplikacja napisana w Node.js,
która wyszukuje informacje w dokumentach Markdown.

Projekt wykorzystuje metodę RAG
(Retrieval-Augmented Generation).

Asystent odczytuje dokumenty, dzieli je na fragmenty,
wyszukuje informacje pasujące do pytania
i przekazuje je do modelu AI.

## 2. Dokumenty

Projekt zawiera 5 własnych dokumentów:

- arduino.md – podstawy Arduino UNO.
- plc.md – podstawy sterowników PLC.
- python.md – zastosowanie Pythona w automatyce.
- brama-k11-mini.md – projekt bramy teleskopowej.
- bezpieczenstwo-ai.md – bezpieczeństwo AI.

Dokumenty nie zawierają haseł ani kluczy API.

## 3. Uruchomienie

Wymagane oprogramowanie:
- Node.js 24
- Visual Studio Code
- npm

Otwórz terminal w folderze projektu.

Instalacja zależności:

npm install

Uruchomienie asystenta:

npm start

Uruchomienie testów:

npm test

Ocena wyszukiwania dokumentów:

npm run ocena

Do korzystania z modelu AI może być potrzebna
konfiguracja dostawcy modelu zgodnie z plikiem
.env.przyklad.

Pliku .env nie należy publikować.

## 4. Wyniki testów

Data sprawdzenia: 11.11.2026

Testy automatyczne:
16 zaliczonych / 16 wykonanych.

Wynik oceny przed poprawkami:
Nie uzyskano wyniku liczbowego.
Program nie był jeszcze ukończony
i zgłaszał błędy brakujących funkcji.

Wprowadzone poprawki:
- Wczytywanie dokumentów Markdown.
- Dzielenie dokumentów na fragmenty.
- Normalizacja słów w pytaniach.
- Wyszukiwanie pasujących fragmentów.
- Przygotowanie bezpiecznego promptu.
- Dopasowanie testu do własnych dokumentów.

Wynik oceny po poprawkach:
5/5 trafień (100%).

Wymagane minimum: 4/5.

## 5. Zasady korzystania z GitHub Copilot

- AI pomaga przygotowywać i poprawiać kod.
- Każdą zmianę należy przeczytać i zrozumieć.
- Po zmianach należy uruchomić npm test.
- Wyniki oceny należy sprawdzić samodzielnie.
- Nie należy bez sprawdzenia akceptować kodu AI.
- Nie należy przekazywać AI haseł ani sekretów.

## 6. Dwa ryzyka

### Ryzyko 1 – ujawnienie danych

Przypadkowe opublikowanie haseł lub kluczy API.

Zabezpieczenie:
Plik .gitignore powinien wykluczać
.env oraz node_modules.

### Ryzyko 2 – błędne odpowiedzi

Asystent może znaleźć niewłaściwy dokument
lub wygenerować nieprawidłową odpowiedź.

Zabezpieczenie:
Sprawdzanie źródeł, testy automatyczne
i pytania kontrolne.

## 7. Podsumowanie

Projekt przeszedł 16 testów automatycznych
i uzyskał ocenę wyszukiwania 5/5.

Asystent może stanowić podstawę
do dalszego rozwijania projektu końcowego.
