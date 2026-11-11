# Bezpieczeństwo sztucznej inteligencji

## Co to jest bezpieczeństwo AI?
Bezpieczeństwo AI polega na ochronie danych,
systemów i użytkowników korzystających
z narzędzi sztucznej inteligencji.

## Prompt injection
Prompt injection to próba nakłonienia
modelu AI do wykonania niepożądanych instrukcji.

Atak może znajdować się w wiadomości
użytkownika lub w zewnętrznym dokumencie.

## Ochrona kluczy API
Klucze API służą do uwierzytelniania
aplikacji korzystających z usług internetowych.

Nie wolno publikować kluczy API na GitHubie.

Klucze można przechowywać w zmiennych
środowiskowych lub bezpiecznym menedżerze sekretów.

## GitHub i plik .gitignore
Plik .gitignore pozwala wskazać pliki,
których Git nie powinien dodawać
do repozytorium.

Przykładowe wpisy:
- node_modules/
- .env

## Bezpieczna praca z GitHub Copilot
Kod wygenerowany przez Copilota należy
samodzielnie przeczytać i przetestować.

Nie należy bez sprawdzenia akceptować
wszystkich proponowanych zmian.

## Dwa główne ryzyka
1. Ujawnienie haseł lub kluczy API.
2. Błędne odpowiedzi AI lub wskazanie
   niewłaściwego dokumentu.

## Sposoby ograniczania ryzyka
- Nie umieszczać sekretów w repozytorium.
- Sprawdzać odpowiedzi AI w dokumentach źródłowych.
- Uruchamiać testy przed publikacją projektu.