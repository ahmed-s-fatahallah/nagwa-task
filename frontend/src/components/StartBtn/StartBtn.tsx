import { useContext } from "react";
import MainContext from "@store/MainContext";

import classes from "./StartBtn.module.css";
interface StartBtnProps {
  text: string;
}

const StartBtn = (props: StartBtnProps) => {
  const ctx = useContext(MainContext);
  return (
    <button
      type="button"
      className={classes["start-btn"]}
      onClick={ctx.startActivity}
    >
      {props.text}
    </button>
  );
};

export default StartBtn;
