import { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import StartActivity from "../StartActivity/StartActivity";
import classes from "./Main.module.css";

const Main = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [isEnded, setIsEnded] = useState(false);
  const [rank, SetRank] = useState("");

  useEffect(() => {
    const postScore = async () => {
      try {
        const res = await fetch("http://localhost:8080/rank", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            score: score,
          }),
        });

        const data = await res.json();
        SetRank(data.rank);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.log(`An error occured during getting rank ${error}`);
        }
      }
    };
    postScore();
  }, [score]);

  const startActivityHandler = () => {
    setIsStarted(true);
    setIsEnded(false);
  };

  const activityStatusHandler = (score: number, isEnded: boolean) => {
    setScore(score);
    setIsEnded(isEnded);
  };

  return (
    <main className={classes.main}>
      <div className="container">
        <div className={classes["main__header-container"]}>
          <h1 className={classes.main__header}>
            Categorizing A Set Of Words
            <small>English</small>
          </h1>
        </div>
        <p className={classes.description}>
          In this activity, we will practice categorizing a set of words
          according to their part of speech.
        </p>
        <section className={classes["activity-section"]}>
          {isEnded || !isStarted ? (
            <StartActivity
              startActivity={startActivityHandler}
              rank={rank}
              isEnded={isEnded}
            />
          ) : (
            <Activity activityStatus={activityStatusHandler} />
          )}
        </section>
      </div>
    </main>
  );
};

export default Main;
