// REACT HOOKS IMPORTS
import { useContext, useState, useEffect } from "react";

// COMPONENTS && CONTEXT IMPORTS
import LoadingSpinner from "@components/loadingSpinner/LoadingSpinner";
import Button from "@components/button/Button";
import { ENDPOINTS } from "@network/index";
import MainContext from "@store/MainContext";

// CSS MODULES IMPORTS
import classes from "./EndScreen.module.css";

/**
 * This component is responsible for rendering the end screen and post the score to the backend,
 * then fetch the rank and renders it in addition to a restart button.
 * @component The end screen component.
 */
const EndScreen = () => {
  const [rank, SetRank] = useState("");

  const {
    score,
    isEnded,
    isLoading,
    error,
    setLoading,
    setError,
    startActivity,
  } = useContext(MainContext);

  useEffect(() => {
    setLoading(true);
    const postScore = async () => {
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
        setLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setLoading(false);
          setError({
            isError: true,
            msg: `An error occurred during fetching data! Please try again later! "${error}"`,
          });
        }
      }
    };
    if (isEnded) postScore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEnded]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {error.isError ? (
            <p className="error">{error.msg}</p>
          ) : (
            <>
              <Button variant="primary" onClick={startActivity}>
                Try Again
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

// EXPORTS STATEMENTS
export default EndScreen;
