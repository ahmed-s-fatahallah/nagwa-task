// REACT HOOKS IMPORTS
import { useContext, useEffect, useState } from "react";

// COMPONENTS IMPORTS

import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import { ENDPOINTS } from "@network/index";
import MainContext from "@store/MainContext";
import Button from "@components/Button/Button";

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
const TIMEOUT_DURATION = 1000; //ms

/**
 *  responsible for rendering the activity window and fetching
 * the words array from the endpoint then display the word and the btns containing
 * different word pos, also it is responsible for enabling and disabling the btns container.
 * @component the activity window component.
 */
const ActivityScreen = () => {
  const [words, setWords] = useState<Word[]>([]);
  const [clickedPos, setClickedPos] = useState<Pos | null>(null);
  const [wordNum, setWordNum] = useState(0);

  const {
    endActivity,
    incrementScore,
    setLoading,
    setError,
    isLoading,
    error,
  } = useContext(MainContext);

  useEffect(() => {
    const fetchWords = async () => {
      setLoading();
      try {
        const res = await fetch(ENDPOINTS.words);
        const data = await res.json();
        if (data) setWords(data);
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
    fetchWords();
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (clickedPos) {
      timeout = setTimeout(() => {
        setClickedPos(null);
        setWordNum((prev) => prev + 1);
        if (wordNum === words.length - 1) {
          endActivity();
        }
      }, TIMEOUT_DURATION);
    }
    return () => clearTimeout(timeout);
  }, [clickedPos, wordNum, words, endActivity]);

  const onClickHandler = (pos: Pos) => {
    setClickedPos(pos);
    if (words[wordNum]?.pos === pos) {
      incrementScore();
    }
  };

  const progBar = words.length && (wordNum / words.length) * 100;

  return (
    <div className={classes["activity-container"]}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {error.isError ? (
            <p>{error.msg}</p>
          ) : (
            <>
              <p className={classes.word}>{words[wordNum]?.word}</p>
              <ul className={classes["btns-container"]}>
                {POS_OPTIONS.map((pos) => (
                  <li key={pos}>
                    <Button
                      clickedPos={clickedPos}
                      variant={
                        clickedPos === pos
                          ? words[wordNum]?.pos === clickedPos
                            ? "secondary"
                            : "danger"
                          : "outlined"
                      }
                      onClickHandler={onClickHandler.bind(null, pos)}
                    >
                      {pos}
                    </Button>
                  </li>
                ))}
              </ul>

              <div className={classes["prog-container"]}>
                <div className={classes["score-container"]}>
                  <p>Score</p>
                  <span>{`${progBar + 10}%`}</span>
                </div>
                <div className={classes["prog-bar-container"]}>
                  <div
                    className={classes["prog-bar"]}
                    style={{ width: `${progBar + 10}%` }}
                  ></div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ActivityScreen;
