# DogRecogniser

1. #### Intro

   - Przygotowana aplikacja DogRecogniser pozwala na rozpoznawanie rasy psa na obrazie 
   - Dodatkowo wykorzystano aplikację JS, która umożliwia użytkownikowi w łatwy sposób wysyłanie zdjęć do weryfikacji w API
   - Aplikacja JS wyświetla jaka rasa została rozpoznana oraz jakie jest prawdopodobieństwo rozpoznania (musi być większe niż 90%) 
   
2. Architektura 

   - opublikowany model w serwisie Custom Vision 
   - aplikacja w języku JavaScript do komunikacji z wystawionym modelem przez wygenerowany endpoint
   - aplikacja JS analizuje odpowiedź i w zależności od wyników wyświetla odpowiednie komunikaty
   
3. #### Use case

   * użytkownik posiada zdjęcia psów, jednak nie zna ich ras
   * użytkownik wczytuje pojedyncze zdjęcia do aplikacji, a aplikacja po odwołaniu do modelu w API stara się określić rasę
   
4. #### How to

   Jak użyć (dokładny proces tworzenia modelu w opublikowanym [filmiku](https://www.youtube.com/watch?v=NspmEEookFA))
   * zainstalować node.js
   * pobrać/sklonować foldery *data_set* oraz *dog-app*
   * zalogować się do serwisu [Custom Vision](https://www.customvision.ai/) i utworzyć projekt
   * w folderze *data_set* znajduje się 20 zestawów zdjęć dla 20 ras
   * wczytać do modelu przygotowane zdjęcia (lub użyć innych zestawów - [przykładowe inne zestawy](https://github.com/jigsawpieces/dog-api-images#dog-api-images)) i odpowiednio je oznaczyć przy wczytywaniu do modelu
   * wytrenować i opublikować model
   * w pobranym/sklonowanym folderze *dog-app* wykonać polecenie `npm install`  - zostaną zainstalowane potrzebne moduły
   * plik *dog-app/src/predict.js* uzupełnić o *url, predictionKey, contentType*, które zostały wygenerowane przy publikowaniu modelu
   * sprawdzić poprawność odwołań *tagName* w dalszej części pliku *dog-app/src/predict.js*
   * uruchomić aplikację komendą `npm start`
   * wczytać zdjęcie z psem - wynik zostanie wyświetlony

5. YouTube link

   [Prezentacja](https://www.youtube.com/watch?v=NspmEEookFA)

   