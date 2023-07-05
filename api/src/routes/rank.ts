import { Application } from "express";

const rankRoute = (app: Application) => {
  app.get("/rank", (req, res) => {
    res.send("rank route");
  });
};

export default rankRoute;
