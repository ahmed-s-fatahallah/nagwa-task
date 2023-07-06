//  DEPENDANCIES IMPORTS
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
  // divid it by the scores list length and muliplied by 100 to get the rank percentage
  const rank =
    (data.scoresList.filter((s) => s < score).length / data.scoresList.length) *
    100;
  // check if the rank is an integer or a float number
  if (rank % 1 === 0) {
    // if it is an interger send the response with the rank % as a string
    res.send({ rank: `${rank}%` });
  } else {
    // if it is a float numberr send the response with the rank % rounded to the nearest hundredth as a string
    res.send({ rank: `${rank.toFixed(2)}%` });
  }
};

/**
 * this is the rank routes handler function
 * @param app express application object
 */
const rankRoutes = (app: Application) => {
  app.post("/rank", generateRank);
};

//  EXPORTS STATMENTS
export default rankRoutes;
