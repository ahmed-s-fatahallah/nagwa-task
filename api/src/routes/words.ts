//  DEPENDANCIES IMPORTS
import { Application, Request, Response } from "express";
import shuffle from "lodash.shuffle";

//  DATA FILE IMPORT
import data from "./../assets/TestData.json";

//  UTILITIES FUNCTIONS IMPORTS
import getRandomItem from "../util/getRandomItem";

//  Types defination
type Pos = "noun" | "verb" | "adverb" | "adjective";
interface Word {
  id: number;
  word: string;
  pos: Pos;
}

type WordsSegregated = Record<Pos, Word[]>;

/**
 * This function is used to generate random words array and send it as a response
 * @param _req request object not used here
 * @param res response object which responds with the words array
 */
const generateRndWordsArry = (_req: Request, res: Response) => {
  const words = data.wordList as Word[];
  // create empty array to store the generated words
  const pickedWords: Word[] = [];
  const segregatedWords: WordsSegregated = {
    noun: [],
    verb: [],
    adverb: [],
    adjective: [],
  };

  words.forEach((word) => {
    if (!Object.keys(segregatedWords).includes(word.pos)) {
      // if invalid data missing word pos handle error here
      return;
    }
    segregatedWords[word.pos].push(word);
  });

  // Add one random word from each POS
  let pos: keyof WordsSegregated;
  for (pos in segregatedWords) {
    pickedWords.push(getRandomItem(segregatedWords[pos]));
  }

  // populate the rest of the array with random unique words.
  while (pickedWords.length < 10) {
    const randomWord = getRandomItem(words);
    if (pickedWords.every((word) => word.id !== randomWord.id)) {
      pickedWords.push(randomWord);
    }
  }

  // respond with the words array shuffled
  res.send(shuffle(pickedWords));
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
