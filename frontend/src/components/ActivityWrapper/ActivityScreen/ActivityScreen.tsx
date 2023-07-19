// REACT HOOKS IMPORTS
import { useContext, useEffect, useState } from "react";

// COMPONENTS && CONTEXT IMPORTS
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import Button from "@components/button/Button";
import { ENDPOINTS } from "@network/index";
import MainContext from "@store/MainContext";

// CSS MODULES IMPORTS
import classes from "./Activity.module.css";

// TYPES DEFINITIONS
type Pos = "noun" | "verb" | "adverb" | "adjective";
interface Word {
  id: number;
  word: string;
  pos: Pos;
}
const POS_OPTIONS: Pos[] = ["noun", "verb", "adverb", "adjective"];

// GLOBAL VARIABLES
const TIMEOUT_DURATION = 1000; //ms

/**
 *  responsible for rendering the activity screen and fetching the words array from the endpoint
 *  and display the word and the buttons containing different word pos.
 * @component the activity screen component.
 */
const ActivityScreen = () => {
  const [words, setWords] = useState<Word[]>([]);
  const [clickedPos, setClickedPos] = useState<Pos | null>(null);
  const [wordNum, setWordNum] = useState(0);
  const [prog, setProg] = useState(0);

  const {
    endActivity,
    incrementScore,
    setLoading,
    setError,
    isLoading,
    error,
  } = useContext(MainContext);

  useEffect(() => {
    setLoading(true);
    const fetchWords = async () => {
      try {
        const res = await fetch(ENDPOINTS.words);
        const data = await res.json();
        if (data) setWords(data);
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
    fetchWords();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (clickedPos) {
      timeout = setTimeout(() => {
        setClickedPos(null);
        // Increment the num to show the next word from the array
        setWordNum((prev) => prev + 1);
        // Condition to check if the activity has ended
        if (wordNum === words.length - 1) {
          endActivity();
        }
      }, TIMEOUT_DURATION);
    }
    return () => clearTimeout(timeout);
  }, [clickedPos, wordNum, words, endActivity]);

  /**
   * This function takes the current clicked button POS and check if it's equal to the current word POS.
   * @param pos The clicked button POS
   */
  const onClickHandler = (pos: Pos) => {
    setClickedPos(pos);
    setProg((prevState) => prevState + 1);
    if (words[wordNum]?.pos === pos) {
      // If the clicked button has the correct POS increment score
      incrementScore();
    }
  };

  // // Calculate the progress bar according to the received array length and the current showing element index;
  const progBar = words.length && (prog / words.length) * 100;

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
              <p
                className={`${classes.word}  ${
                  clickedPos === null
                    ? ""
                    : clickedPos === words[wordNum]?.pos
                    ? classes.correct
                    : classes.wrong
                } `}
              >
                {words[wordNum]?.word}
              </p>
              <ul className={classes["btns-container"]}>
                {POS_OPTIONS.map((pos) => {
                  const isClicked = clickedPos === pos;
                  const isCorrect = words[wordNum]?.pos === pos;
                  return (
                    <li key={pos}>
                      <Button
                        className={`${classes["option-btn"]} ${
                          !isClicked
                            ? ""
                            : isCorrect
                            ? "pulse"
                            : "horizontal-shake"
                        }`}
                        disabled={Boolean(clickedPos)}
                        variant={
                          !isClicked
                            ? "outlined"
                            : isCorrect
                            ? "secondary"
                            : "danger"
                        }
                        onClick={onClickHandler.bind(null, pos)}
                      >
                        {pos}
                      </Button>
                    </li>
                  );
                })}
              </ul>

              <div className={classes["prog-container"]}>
                <div className={classes["progress-container"]}>
                  <p>Progress</p>
                  <span>{`${progBar}%`}</span>
                </div>
                <div className={classes["prog-bar-container"]}>
                  <div
                    className={classes["prog-bar"]}
                    style={{ width: `${progBar}%` }}
                  ></div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

// EXPORTS STATEMENTS
export default ActivityScreen;
