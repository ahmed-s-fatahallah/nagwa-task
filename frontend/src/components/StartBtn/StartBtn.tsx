import classes from "./StartBtn.module.css";

interface StartBtnProps {
  text: string;
  startActivity: () => void;
}

const StartBtn = (props: StartBtnProps) => {
  return (
    <button
      type="button"
      className={classes["start-btn"]}
      onClick={props.startActivity}
    >
      {props.text}
    </button>
  );
};

export default StartBtn;
