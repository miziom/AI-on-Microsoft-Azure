# Video Indexer

1. #### Intro

   - wykorzystuje modele uczenia maszynowego, które można adaptować i douczać 
   - umożliwia:
     - identyfikacje twarzy
     - rozpoznawanie tekstu
     - etykietowanie obiektów
     - segmentacje scen
     - analiza dźwięku -> transkrypcja, wykrywanie emocji

   - obsługuje wiele formatów w tym WMV, MOV, MPG i AVI

2. #### Use cases

   * automatyczna generacja transkrypcji rozpraw sądowych na podstawie nagrania
   * przeszukiwanie video pod kątem fraz a następne np. ograniczenie zasięgów ze względu na wulgaryzmy
   * identyfikacja osób poszukiwanych na podstawie nagrań z dobrej jakości monitoringu
   
3. #### How to

   * Jak użyć [dokładne kroki](https://docs.microsoft.com/en-us/learn/modules/extract-insights-from-videos-with-video-indexer-service/3-upload-index-videos?pivots=python)

     - Zalogować się do [Video Indexer Portal](https://www.videoindexer.ai/account/login)

     - wygenerowanie API key

     - podanie informacji:
   
       - id konta Video Indexer 
       - API key
       - api URL
       - adres/lokacja klipu 
         - przekazanie nagrania po przez adres URL, wysyłanie pliku jako tablicy bajtów lub odwoływanie się do istniejącego id zasobu
         - preferowane przez URL
         - tablica bajtów - ograniczenie do 2 GB oraz 30 minut
   
     - przykładowa odpowiedź:
   
       ```json
       "summarizedInsights": {
       "name": "Beach waves",
       "id": "60eb06669e",
       "duration": {
           "time": "0:00:13.355",
           "seconds": 13.4
       },
       "faces": [],
       "keywords": [],
       "sentiments": [{
           "sentimentKey": "Neutral",
           "seenDurationRatio": 0.3744,
           }],
       "emotions": [],
       "audioEffects": [],
       "labels": [{
           "id": 1,
           "name": "outdoor",
           "appearances": [{
               "startTime": "0:00:00",
               "endTime": "0:00:13.3",
               "startSeconds": 0,
               "endSeconds": 13.3
           }]
       }
       ```
   
     - istnieje możliwość znajdywania fragmentów video:	
   
       ```json
       "results":
       [{
       	"id": "66de3cd83e",
       	"name": "Beach Scenes",
       	"durationInSeconds": 14,
       	"searchMatches": [{
              "startTime": "00:00:01.1000000",
              "text": "wave",
            },
            {
              "startTime": "00:00:11.7000000",
              "text": "wave",
            }]
        }]
       ```
   
       
   
   * Pricing 
   
     - darmowe 10h indeksowania dla użytkowników witryny
     - darmowe 40h indeksowania dla użytkowników API
     - podczas używania grupy zasobów Azure Media Services ponad limit obowiązują dodatkowe opłaty ([dokładna rozpiska](dokładna rozpiska))

