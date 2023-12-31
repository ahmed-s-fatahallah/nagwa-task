//  DEPENDENCIES IMPORTS
import { Application, Request, Response } from "express";

//  DATA FILE IMPORT
import data from "./../assets/TestData.json";

/**
 * this function generates rank depending on the scores list in the data file and the received score from the front-end
 * @param req request object which has the score key sent with the body
 * @param res response object which respond with the rank
 */
const generateRank = (req: Request, res: Response) => {
  // get the score from the request body
  const score = req.body.score;
  // filter the scores list inside the data file and return the number of scores below the received score then
  // divide it by the scores list length and multiplied by 100 to get the rank percentage
  const rank =
    (data.scoresList.filter((s) => s < score).length / data.scoresList.length) *
    100;

  // response with the rank % rounded to the nearest hundredth as a string
  console.log(rank);
  res.send({ rank: `${+rank.toFixed(2)}%` });
};

/**
 * this is the rank routes handler function
 * @param app express application object
 */
const rankRoutes = (app: Application) => {
  app.post("/rank", generateRank);
};

//  EXPORTS STATEMENTS
export default rankRoutes;
