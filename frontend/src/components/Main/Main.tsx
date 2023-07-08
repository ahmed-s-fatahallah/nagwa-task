import { useContext } from "react";
import Activity from "@components/ActivityWrapper/ActivityScreen/ActivityScreen";
import StartActivity from "@components/ActivityWrapper/EndScreen/EndScreen";
import MainContext from "@store/MainContext";

import classes from "./Main.module.css";
import ActivityWrapper from "@components/ActivityWrapper/ActivityWrapper";

const Main = () => {
  const ctx = useContext(MainContext);

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
          <ActivityWrapper />
        </section>
      </div>
    </main>
  );
};

export default Main;
