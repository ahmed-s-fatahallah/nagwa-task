//  DEPENDANCIES IMPORTS
import { Application, Request, Response } from "express";

//  DATA FILE IMPORT
import data from "./../assets/TestData.json";

//  UTILITIES FUNCTIONS IMPORTS
import getRandomItem from "../util/getRandomItem";

//  Types defination
interface Word {
  id: number;
  word: string;
  pos: string;
}

/**
 * This function is used to generate random words array and send it as a response
 * @param _req request object not used here
 * @param res response object which responds with the words array
 */
const generateRndWordsArry = (_req: Request, res: Response) => {
  // create empty array to store the generated words
  const wordsArry: Word[] = [];
  // array of the 4 types of pos to make sure that all of them are included in the generated words array
  const posArry = ["noun", "verb", "adjective", "adverb"];

  // loop to populate the words array with 10 items
  while (wordsArry.length < 10) {
    // generate a random word from data word list
    const randomWord = getRandomItem(data.wordList);

    // loop inside the posArry to make sure that the final arary contains all 4 types of pos words
    posArry.forEach((el, i) => {
      // if statement that check if the random generated word equals one of the 4 types of pos
      // if true then remove that type from the pos array and add the word to the words array
      if (randomWord.pos === el) {
        posArry.splice(i, 1);
        wordsArry.push(randomWord);
      }
    });

    // when the foreach loop finishes we will have 4 uniqe types of pos words inside the words array
    // then after we can just add random generated words to the words array
    if (wordsArry.length >= 4) {
      wordsArry.push(randomWord);
    }
  }
  // respond with the words array
  res.send(wordsArry);
};

/**
 * this is the words routes handler function
 * @param app express application object
 */
const wordsRoutes = (app: Application) => {
  app.get("/words", generateRndWordsArry);
};

//  EXPORTS STATMENTS
export default wordsRoutes;
