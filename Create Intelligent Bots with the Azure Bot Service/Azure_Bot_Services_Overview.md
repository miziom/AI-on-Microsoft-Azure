# Azure Bot Service

1. #### Intro

   - Jest usługą, która pozwala na tworzenie botów, które mogą posłużyć do kontaktu z użytkownikiem. 
- Serwis odpowiada na pytania użytkownika na postawie przygotowanej bazy danych (baza pytań i odpowiedzi)
   
2. #### Use cases

   * support dla serwisów - użytkownik kieruje swoje pytania do bota i tam uzyskuje odpowiedź:
   * portale informacyjne - użytkownika pyta o np. kurs waluty i dostaję odpowiedź

3. #### How to

   * Jak użyć

     - tworzymy nowy zasób *Web App Bot* na portalu Azure - tworzymy bota
   - tworzymy zasób QnA Maker
     - Tworzymy bazę pytań i odpowiedzi i udostępniamy ją
   - updatujemy bota, żeby korzystał z ze stworzonej bazy pytań
     - publikujemy zaktualizowanego bota

   * Pricing 

     Możliwość korzystania z dwóch kanałów:

     - standard

       - bezpłatny

         Nieograniczona liczba komunikatów

       - s1

         Nieograniczona liczba komunikatów

     - premium

       - bezpłatny

         10 000 komunik./miesiąc

       - s1

         $0,50 za 1000 komunikatów



# Bot Framework Composer

1. #### Intro

   * Pozwala na szybkie tworzenie botów konwersacyjnych przy użyciu edytora bez użycia kodu.
* Jest intuicyjny dla użytkownika, ponieważ jego obsługa polega na przeciąganiu odpowiednich elementów do obszaru pracy.
   * Pozwala na korzystanie z dialogów adaptacyjnych, które umożliwiają generowanie języka.
* Nie trzeba korzystać ze środowiska, co wpływa na oszczędność czasu.
   
2. #### Use cases

   * uzyskiwanie formacji - aplikacja umożliwiająca użytkownikowi otrzymanie informacji np. na temat tego jaka jest cena waluty i jej historia zmian w określonym czasie
   * uzyskiwanie rekomendacji - aplikacja umożliwiająca użytkownikowi otrzymanie rekomendacji np. na temat restauracji serwujących kuchnie chińską
   * uzyskiwanie ostrzeżeń - aplikacja umożliwiająca użytkownikowi otrzymanie informacji na temat wypadków drogowych w określonym przez niego regionie

3. ####  How to

   * Jak użyć

     - Instalujemy [BotFramework-Emulator](https://github.com/microsoft/BotFramework-Emulator)
   - Planujemy z czego chcemy skorzystać i układamy przebieg
     - Przebieg realizujemy po przez przeciągniecie odpowiednich okien reprezentujących określone funkcjonalności oraz następnie ich odpowiednie połączenie 

   * Pricing

     Samo korzystanie z Bot Framework Composer jest darmowe, ewentualne koszty mogą być związane z użytymi wewnątrz serwisami / funkcjonalnościami - LUIS.

