//  DEPENDANCIES IMPORTS
import { Application, Request, Response } from "express";

//  DATA FILE IMPORT
import data from "./../assets/TestData.json";

//  UTILITIES FUNCTIONS IMPORTS
import randomWordGenerator from "../util/randomWord";

//  Types defination
interface word {
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
  const wordsArry: word[] = [];
  const posArry = ["noun", "verb", "adjective", "adverb"];

  while (wordsArry.length < 10) {
    // generate a random word from data word list
    const randomWord = randomWordGenerator(data.wordList);

    if (wordsArry.length < 4) {
      // loop inside the posArry to make sure that the final arary contains all 4 pos words
      posArry.forEach((el, i) => {
        if (randomWord.pos === el) {
          posArry.splice(i, 1);
          wordsArry.push(randomWord);
        }
      });
    } else {
      wordsArry.push(randomWord);
    }
  }
  // respond with the words array
  res.send(wordsArry);
};

/**
 * this is the words route handler function
 * @param app express application object
 */
const wordsRoute = (app: Application) => {
  app.get("/words", generateRndWordsArry);
};

//  EXPORTS STATMENTS
export default wordsRoute;
