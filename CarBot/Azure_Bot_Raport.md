# AzureBotCar

1. #### Intro

   - Przygotowany bot AzureBotCar jest narzędziem, które pozwala na wybór samochodu dla użytkownika w danym komisie / salonie samochodowym. 
   - Bot przedstawia propozycje modelu samochodu na podstawie określonych parametrów, jakimi są:
     - typ samochodu
     - pieniędzy przeznaczonych na zakup auta
     - mocy auta 
     - marki (opcjonalnie)

   - Bot pracuje w języku angielskim

2. Architektura 

   - Bot został stworzony za pomocą Bot Framework Composer v1.2.0
   - Bot korzysta z LUIS w celu rozpoznawania intencji i na podstawie ich odpowiednio reagować na decyzję / zapytania użytkownika
   - Bot został testowany przy użyciu Bot Framework Emulator (V4)
   - bot przypisuje propozycje modelu na podstawie wewnętrznej funkcji
   
3. #### Use case - przykład

   * użytkownik chce kupić samochód dla rodziny w komisie X, który posiada ofertę wielu samochodów
   * użytkownik piszę do / triggeruje bota, co potrzebuje:
     * piszemy do bota "type", na co odpowiada: "What car type are you looking for?"
     * użytkownika przekazuje botowi "I want sport car"
     * bot potwierdza przyjęcie informacji, jeżeli nie rozpozna intencji - brak takiej kategorii, ostrzeże o tym użytkownika
     * kontynuując użytkownik wprowadza hasło "money", które striggeruje bota do przyjęcia informacji na temat budżetu użytkownika
     * użytkownika podaję również informację na temat minimalnej mocy samochodu
     * przy określeniu marki użytkownik może zaznaczyć, że nie chce podawać marki, przez co bot nie będzie brał pod uwagę tej informacji
   * po określeniu potrzebnych informacji użytkownika pisze botowi, aby znalazł ofertę np. po przez prostą komendę "find"
   * bot wyświetla decyzje użytkownika oraz propozycje modelu samochodu 
   * użytkownik może na bieżąco podmieniać określone  wcześniej parametry

3. #### How to

   * Jak użyć
     * Należy zainstalować Bot Framework Composer
     * Zainstalować .NET Core 3.1
     * Zainstalowanie Bot Framework Emulator
     * Stworzyć zasób LUIS na portalu Azure
     * Należy pobrać folder AzureBotCar
     * Należy otworzyć folder AzureBotCar w Bot Framework Composer, a następnie wybrać "Start Bot", bot będzie wymagał podania wygenerowanego klucza dla LUIS 
     * Bot zostanie opublikowany lokalnie, następnie należy kliknąć "Test in Emulator"
     * Zostanie otworzony Bot Framework Emulator, który pozwoli przetestować / użyć bota

5. YouTube link

   [Prezentacja](https://youtu.be/M7pvYHOqXIA)

   