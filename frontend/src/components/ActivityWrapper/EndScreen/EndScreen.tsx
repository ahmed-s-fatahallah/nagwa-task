// REACT HOOKS IMPORTS
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// COMPONENTS && CONTEXT IMPORTS
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import Button from "@components/Button/Button";
import { ENDPOINTS } from "@network/index";

// CSS MODULES IMPORTS
import classes from "./EndScreen.module.css";
import { RootState } from "@store/Store";
import { isLoading, setError, startActivity } from "@store/mainSlice";

/**
 * This component is responsible for rendering the end screen and post the score to the backend,
 * then fetch the rank and renders it in addition to a restart button.
 * @component The end screen component.
 */
const EndScreen = () => {
  const [rank, SetRank] = useState("");

  const ctx = useSelector((state: RootState) => state.slice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isLoading(true));
    const postScore = async () => {
      try {
        const res = await fetch(ENDPOINTS.rank, {
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
        dispatch(isLoading(false));
      } catch (error: unknown) {
        if (error instanceof Error) {
          dispatch(isLoading(false));

          dispatch(
            setError({
              isError: true,
              msg: `An error occurred during fetching data! Please try again later! "${error}"`,
            })
          );
        }
      }
    };
    if (ctx.isEnded) postScore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const restartHandler = () => {
    dispatch(startActivity());
  };

  return (
    <>
      {ctx.isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {ctx.error.isError ? (
            <p className="error">{ctx.error.msg}</p>
          ) : (
            <>
              <Button variant="primary" onClick={restartHandler}>
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
