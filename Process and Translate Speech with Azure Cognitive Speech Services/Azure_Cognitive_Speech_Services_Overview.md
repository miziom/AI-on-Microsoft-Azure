# Transcribe (speech-to-text)

1. #### Intro

   - jest to Azure Cognitive Services
   - Pozwala na transkrypcje strumienia audio na tekst w czasie rzeczywistym
   - bazuje na ML oraz AI
   - usługa udostępniona przez REST API lub Speech SDK
   - domyślnie używa Universal Language model
   - używając we własnym unikalnym środowisku można tworzyć i trenować własne modele akustyczne, językowe i wymowy, dostosowanie jest pomocne w radzeniu sobie z hałasem otoczenia lub słownictwem specyficznym dla branży.
   - wspiera format audio/wav
2. #### Use cases

   * transkrypcja prezentacji na żywo
   * generowanie transkrypcji do filmu dla ludzi niesłyszących
   * przetwarzanie mowy na wiadomości dla komunikatorów 
   
3. #### How to

   * Jak użyć

     - Utworzenie usługi **Speech** w portalu Azure
     - Otrzymujemy *subscription key*, który posłuży do autentykacji oraz *endpoint*, na który możemy wysyłać zapytania
  - możemy korzystać z usługi za pomocą
       - PYTHON przez *azure.cognitiveservices.speech*
       - C# przez *Microsoft.CognitiveServices.Speech*
   * Pricing 
   
     - **Free **(1 zapytanie na raz)
       - standard: 5 godzina audio na miesiąc
       - custom: 5 godzina audio na miesiąc,
                        Endpoint hosting: 1 model darmowy na miesiąc
       - Conversation Transcription Multichannel Audio: 5 godzina audio na miesiąc
     - **Standard **(20 zapytań na raz)
       - standard: €0.844 za 1h audio
       - custom: €1.181 za godzinę,
                       Endpoint hosting: €1.0882 za model za godzinę
       - Conversation Transcription Multichannel Audio: €1.78 za godzinę

# Synthesize (text-to-speech)

1. #### Intro

   - usługa Azure Cognitive Services
   - działa odwrotnie w stosunku do Transcribe 
   - służy do syntezowania głosu (generuje sztuczne reprodukcje mowy ludzkiej)
   - przekształca tekst języka w mowę
   - wspiera ponad 45 języków
   - wygenerowany głos może zostać nacechowany emocjami

2. #### Use cases

   * czytanie wiadomości podczas kiedy użytkownika prowadzi samochód
   * aplikacja umożliwiająca czytanie tekstu osobom niewidomym
   * asystenci głosowi - np. w telefonie

3. #### How to

   * Jak użyć

     - Utworzenie usługi **Speech** w portalu Azure
  - Otrzymujemy *subscription key*, który posłuży do autentykacji oraz *endpoint*, na który możemy wysyłać zapytania
     - możemy korzystać z usługi za pomocą
    - PYTHON przez *azure.cognitiveservices.speech*
       - C# przez *Microsoft.CognitiveServices.Speech*
   
   * Pricing 
   
     - **Free** (1 zapytanie na raz)
       - standard: 5 milionów znaków/mies
       - neural: 0.5 milionów/mies
       - custom: 5 milionów znaków/mies, 
                        Endpoint hosting: 1 model / mies
     - **Standard** (20 zapytań na raz)
       - standard: €3.374 / 1M znaków
       - neural: €13.493 / 1M znaków; 
                       Long audio creation: €84.33/ 1M znaków
       - custom: €5.060 /1M znaków
                        Endpoint hosting: €0.0453 /model za godzinę 
       - Custom Neural: 
         Synthesis w czasie rzeczywistym: €20.240 / 1M znaków
         Endpoint hosting: €3.41 /model za godzinę 
         Long audio creation: €84.33 /1M znaków



# Translate

1. #### Intro

   - usługa Azure Cognitive Services
   - mówione wyrażenia są natychmiast tłumaczone (i wypowiadane na głos) w drugim języku
   - pozwala na pokonywanie barier kulturowych / językowych
   - wykorzystywane w biznesie jak i konsumentów
   - wykorzystują automatyczne rozpoznawanie mowy (za pomocą sieci neuronowej wyszkolonej w zakresie analizowania tysięcy godzin przychodzącej mowy dźwiękowej), a także elementy tłumaczenia maszynowego i syntezy głosu
   - 

2. #### Use cases

   * tłumaczenie prezentacji na żywo
   * wsparcie klienta
   * komunikacja pomiędzy osobami, które nie znają wspólnego języka

3. #### How to

   - Jak użyć
     - Utworzenie usługi **Speech** w portalu Azure
     - Otrzymujemy *subscription key*, który posłuży do autentykacji oraz *endpoint*, na który możemy wysyłać zapytania
     - możemy korzystać z usługi za pomocą
       - PYTHON przez *azure.cognitiveservices.speech*
       - C# przez *Microsoft.CognitiveServices.Speech*

   * Pricing 

     - **Free** (1 zapytanie na raz)
       - 5h audio / mies
     - **Standard** (20 zapytań na raz)
       - €2.11 / godzinę audio