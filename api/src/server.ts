//  DEPENDENCIES IMPORTS
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

//  ROUTES IMPORTS
import wordsRoutes from "./routes/words";
import rankRoutes from "./routes/rank";

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = 8080;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

app.get("/", (_req, res) => {
  res.send("hello, this is ahmed's server for Nagwa task");
});

wordsRoutes(app);
rankRoutes(app);
