import { useContext, useState, useEffect } from "react";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import MainContext from "@store/MainContext";
import { ENDPOINTS } from "@network/index";
import Button from "@components/Button/Button";

import classes from "./EndScreen.module.css";

const EndScreen = () => {
  const {
    score,
    isEnded,
    isLoading,
    error,
    setLoading,
    setError,
    startActivity,
  } = useContext(MainContext);
  const [rank, SetRank] = useState("");

  useEffect(() => {
    const postScore = async () => {
      setLoading();
      try {
        const res = await fetch(ENDPOINTS.rank, {
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
        setLoading();
      } catch (error: unknown) {
        if (error instanceof Error) {
          setLoading();
          setError(
            `An error occurred during fetching data! Please try again later! "${error}"`
          );
        }
      }
    };
    if (isEnded) postScore();
  }, [isEnded]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {error.isError ? (
            <p>{error.msg}</p>
          ) : (
            <>
              <Button variant="main" onClickHandler={startActivity}>
                Restart Activity
              </Button>
              <div className={classes.rank}>
                <p>Your rank is:&nbsp;</p>
                <span>{rank}</span>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default EndScreen;
