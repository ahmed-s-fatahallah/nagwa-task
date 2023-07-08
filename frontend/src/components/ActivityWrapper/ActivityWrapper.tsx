// REACT HOOKS IMPORTS
import { useContext } from "react";

// COMPONENTS && CONTEXT IMPORTS
import StartScreen from "./startScreen/StartScreen";
import Activity from "./activityScreen/ActivityScreen";
import EndScreen from "./endScreen/EndScreen";
import MainContext from "@store/MainContext";

// CSS MODULES IMPORTS
import classes from "./ActivityWrapper.module.css";

/**
 * This component is responsible for handling which activity component to get rendered.
 * @component The activity screens wrapper component
 */
const ActivityWrapper = () => {
  const { isStarted, isEnded } = useContext(MainContext);
  return (
    <div className={classes["activity-container"]}>
      {isStarted ? <Activity /> : isEnded ? <EndScreen /> : <StartScreen />}
    </div>
  );
};

// EXPORTS STATEMENTS
export default ActivityWrapper;
