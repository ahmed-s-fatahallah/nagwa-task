// REACT HOOKS IMPORTS
import { useSelector } from "react-redux";
import { RootState } from "@store/Store";

// COMPONENTS && CONTEXT IMPORTS
import StartScreen from "./StartScreen/StartScreen";
import Activity from "./ActivityScreen/ActivityScreen";
import EndScreen from "./EndScreen/EndScreen";

// CSS MODULES IMPORTS
import classes from "./ActivityWrapper.module.css";

/**
 * This component is responsible for handling which activity component to get rendered.
 * @component The activity screens wrapper component
 */
const ActivityWrapper = () => {
  const ctx = useSelector((state: RootState) => state.slice);
  return (
    <div className={classes["activity-container"]}>
      {ctx.isStarted ? (
        <Activity />
      ) : ctx.isEnded ? (
        <EndScreen />
      ) : (
        <StartScreen />
      )}
    </div>
  );
};

// EXPORTS STATEMENTS
export default ActivityWrapper;
