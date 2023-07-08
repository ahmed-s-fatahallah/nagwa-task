import { useContext } from "react";
import MainContext from "@store/MainContext";
import StartScreen from "./StartScreen/StartScreen";

import classes from "./ActivityWrapper.module.css";
import Activity from "./ActivityScreen/ActivityScreen";
import EndScreen from "./EndScreen/EndScreen";

const ActivityWrapper = () => {
  const { isStarted, isEnded } = useContext(MainContext);
  return (
    <div className={classes["activity-container"]}>
      {!isStarted ? <StartScreen /> : !isEnded ? <Activity /> : <EndScreen />}
    </div>
  );
};

export default ActivityWrapper;
