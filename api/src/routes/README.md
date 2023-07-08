# rank.ts

## generateRank function

- receives **POST** request from the frontend with the score in the request body, then do the rank calculations and send the rank in the response object.

## rankRoutes function

- handles all routes for the rank endPoint.

# word.ts

## generateRndWordsArry function

- receives a **GET** request from the frontend and send a response with an array with length of 10 random and shuffled words.
- this function starts by creating empty array to store the words inside of it and send it after it is populated.
- then it has an object which has 4 keys assigned to empty arrays, each key represent different type of the word Part of Speech to segregate the words array received from the json file.
- then loop inside the initial array received from the json file and check inside the forEach loop if the received array has invalid data or missing word pos the we _return_ if we made it past this guard clause then we add each word to its corresponding array inside the segregatedWords Object.
- start a for loop to add 1 word from each array of the 4 types inside the picked words array to make sure that the picked words array contains at least 1 word from each POS.
- then start a while loop until the length of the picked words array reaches 10, first get a random word from the initial array then check if this word already exists inside the picked words array, if so then go to the next iteration, if not add it inside the picked words array, with that approach we make sure the picked words array contains no duplicates.
- finally respond with the picked words array shuffled using the shuffle method from _lodash library_.

## wordsRoutes function

- handles all routes for the words endpoint.
