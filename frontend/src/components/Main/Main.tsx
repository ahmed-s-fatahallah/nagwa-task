import Activity from "../Activity/Activity";
import classes from "./Main.module.css";

const Main = () => {
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
        <Activity />
      </div>
    </main>
  );
};

export default Main;
