import { useEffect, useRef, useState } from "react";
import MainBtn from "../MainBtn/MainBtn";

import classes from "./Activity.module.css";

interface word {
  id: number;
  word: string;
  pos: string;
}

const Activity = () => {
  const [words, setWords] = useState<word[]>([]);
  const [wordNum, setWordNum] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const res = await fetch("http://localhost:8080/words");
        const data = await res.json();
        setWords(data);
      } catch (error: unknown) {
        if (error instanceof Error)
          console.log(
            `sorry an error has occured while getting the data ${error}`
          );
      }
    };
    fetchWords();
  }, []);

  const setwordNumHandler = () => {
    setWordNum((prevState) => (prevState += 1));
  };

  const setScoreHandler = () => {
    setScore((prevState) => (prevState += 10));
  };

  let progBar;
  if (words.length) progBar = (wordNum / words.length) * 100;

  return (
    <section className={classes["activity-section"]}>
      <p className={classes.word}>{words[wordNum]?.word}</p>
      <ul className={classes["btns-container"]}>
        <li>
          <MainBtn
            text="Noun"
            wordPos={words[wordNum]?.pos}
            setWordNum={setwordNumHandler}
            setScore={setScoreHandler}
          />
        </li>
        <li>
          <MainBtn
            text="Verb"
            wordPos={words[wordNum]?.pos}
            setWordNum={setwordNumHandler}
            setScore={setScoreHandler}
          />
        </li>
        <li>
          <MainBtn
            text="Adverb"
            wordPos={words[wordNum]?.pos}
            setWordNum={setwordNumHandler}
            setScore={setScoreHandler}
          />
        </li>
        <li>
          <MainBtn
            text="Adjective"
            wordPos={words[wordNum]?.pos}
            setWordNum={setwordNumHandler}
            setScore={setScoreHandler}
          />
        </li>
      </ul>
      <div className={classes["prog-container"]}>
        <div className={classes["score-container"]}>
          <p>Score</p>
          <span>{`${progBar}%`}</span>
        </div>
        <div className={classes["prog-bar-container"]}>
          <div
            className={classes["prog-bar"]}
            style={{ width: `${progBar}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Activity;
