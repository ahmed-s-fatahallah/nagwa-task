import MainBtn from "../MainBtn/MainBtn";

import classes from "./Activity.module.css";
const Activity = () => {
  return (
    <section className={classes["activity-section"]}>
      <p className={classes.word}>Word</p>
      <div className={classes["btns-container"]}>
        <MainBtn text="Noun" />
        <MainBtn text="Verb" />
        <MainBtn text="Adverb" />
        <MainBtn text="Adjective" />
      </div>
      <div className={classes["prog-container"]}>
        <div className={classes["score-container"]}>
          <p>Score</p>
          <span>50%</span>
        </div>
        <div className={classes["prog-bar-container"]}>
          <div className={classes["prog-bar"]}></div>
        </div>
      </div>
    </section>
  );
};

export default Activity;
