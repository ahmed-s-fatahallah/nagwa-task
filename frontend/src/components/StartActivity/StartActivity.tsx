import { useContext, useState, useEffect } from "react";
import StartBtn from "@components/StartBtn/StartBtn";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import MainContext from "@store/MainContext";

import classes from "./StartActivity.module.css";

const StartActivity = () => {
  const ctx = useContext(MainContext);
  const [rank, SetRank] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    isError: false,
    msg: "",
  });

  useEffect(() => {
    const postScore = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("http://localhost:8080/rank", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            score: ctx.score,
          }),
        });

        const data = await res.json();
        SetRank(data.rank);
        setIsLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setIsLoading(false);
          setError({
            isError: true,
            msg: `An error occured during fetching data! Please try again later! "${error}"`,
          });
        }
      }
    };
    if (ctx.isEnded) postScore();
  }, [ctx]);

  return (
    <div className={classes["start-container"]}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {error.isError ? (
            <p>{error.msg}</p>
          ) : (
            <>
              <StartBtn
                text={ctx.isEnded ? "Restart Activity" : "Start Activity"}
              />
              {ctx.isEnded && (
                <div className={classes.rank}>
                  <p>Your rank is:&nbsp;</p>
                  <span>{rank}</span>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default StartActivity;
