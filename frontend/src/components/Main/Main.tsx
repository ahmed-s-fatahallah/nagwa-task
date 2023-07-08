// COMPONENTS IMPORTS
import ActivityWrapper from "@components/activityWrapper/ActivityWrapper";

// CSS MODULES IMPORTS
import classes from "./Main.module.css";

/**
 * This component is responsible for rendering the header text above the activity window and the description,
 * in addition to the activity section which has the activity windows inside of it.
 * @component This is the main component
 */
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
        <section className={classes["activity-section"]}>
          <ActivityWrapper />
        </section>
      </div>
    </main>
  );
};

// EXPORT STATEMENTS
export default Main;
