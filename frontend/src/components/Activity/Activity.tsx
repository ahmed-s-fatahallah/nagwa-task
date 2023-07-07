// REACT HOOKS IMPORTS
import { useCallback, useContext, useEffect, useState } from "react";

// COMPONENTS IMPORTS
import MainBtn from "@components/MainBtn/MainBtn";
import MainContext from "@store/MainContext";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";

// CSS MODULES IMPORTS
import classes from "./Activity.module.css";
import { ENDPOINTS } from "@network/index";

// TYPES DEFINITIONS
interface Word {
  id: number;
  word: string;
  pos: string;
}

/**
 *  responsible for rendering the activity window and fetching
 * the words array from the endpoint then display the word and the btns containing
 * different word pos, also it is responsible for enabling and disabling the btns container.
 * @component the activity window component.
 */
const Activity = () => {
  const [words, setWords] = useState<Word[]>([]);
  const [wordNum, setWordNum] = useState(0);
  const [btnListClasses, setBtnListClasses] = useState(
    `${classes["btns-container"]}`
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    isError: false,
    msg: "",
  });
  const ctx = useContext(MainContext);

  useEffect(() => {
    const fetchWords = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(ENDPOINTS.words);
        const data = await res.json();
        setWords(data);
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
    fetchWords();
  }, []);

  const setwordNumHandler = () => {
    setWordNum((prevState) => prevState + 1);

    if (wordNum === words.length - 1) {
      ctx.endActivity();
    }
  };

  const btnActiveHandler = useCallback((isActive: boolean) => {
    if (!isActive) {
      setBtnListClasses(`${classes["btns-container"]} ${classes.disabled}`);
    } else {
      setBtnListClasses(`${classes["btns-container"]}`);
    }
  }, []);

  let progBar = 0;
  if (words.length) {
    progBar = (wordNum / words.length) * 100;
  }

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
              <ul className={btnListClasses}>
                <li>
                  <MainBtn
                    text="Noun"
                    wordPos={words[wordNum]?.pos}
                    setWordNum={setwordNumHandler}
                    btnActive={btnActiveHandler}
                  />
                </li>
                <li>
                  <MainBtn
                    text="Verb"
                    wordPos={words[wordNum]?.pos}
                    setWordNum={setwordNumHandler}
                    btnActive={btnActiveHandler}
                  />
                </li>
                <li>
                  <MainBtn
                    text="Adverb"
                    wordPos={words[wordNum]?.pos}
                    setWordNum={setwordNumHandler}
                    btnActive={btnActiveHandler}
                  />
                </li>
                <li>
                  <MainBtn
                    text="Adjective"
                    wordPos={words[wordNum]?.pos}
                    setWordNum={setwordNumHandler}
                    btnActive={btnActiveHandler}
                  />
                </li>
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

export default Activity;
