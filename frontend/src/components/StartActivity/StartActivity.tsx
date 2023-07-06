import StartBtn from "../StartBtn/StartBtn";

import classes from "./StartActivity.module.css";

interface StartActivityProps {
  startActivity: () => void;
  isEnded: boolean;
  rank: string;
}

const StartActivity = (props: StartActivityProps) => {
  return (
    <div className={classes["start-container"]}>
      <StartBtn
        text={props.isEnded ? "Restart Activity" : "Start Activity"}
        startActivity={props.startActivity}
      />
      {props.isEnded && (
        <div className={classes.rank}>
          <p>Your rank is:&nbsp;</p>
          <span>{props.rank}</span>
        </div>
      )}
    </div>
  );
};

export default StartActivity;
