import { Application } from "express";

const wordsRoute = (app: Application) => {
  app.get("/words", (req, res) => {
    res.send("words route");
  });
};

export default wordsRoute;
