//  DEPENDANCIES IMPORTS
import { Application } from "express";

//  DATA FILE IMPORT
import data from "./../assets/TestData.json";

/**
 * this is the rank routes handler function
 * @param app express application object
 */
const rankRoutes = (app: Application) => {
  app.get("/rank", (req, res) => {
    res.send("rank route");
  });
};

//  EXPORTS STATMENTS
export default rankRoutes;
