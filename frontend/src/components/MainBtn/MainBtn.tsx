import { useState } from "react";
import classes from "./MainBtn.module.css";

interface MainBtnProps {
  text: string;
  wordPos: string;
  setWordNum: () => void;
  setScore: () => void;
}

const MainBtn = (props: MainBtnProps) => {
  const [btnClasses, setBtnClasses] = useState(classes.mainBtn);
  const [isDisabled, setIsDisabled] = useState(false);

  const onClickHandler = () => {
    if (props.wordPos.toLocaleLowerCase() === props.text.toLocaleLowerCase()) {
      setBtnClasses((prevState) => `${prevState} ${classes.correct}`);
      setIsDisabled(true);
      props.setScore();
    } else {
      setBtnClasses((prevState) => `${prevState} ${classes.wrong}`);
      setIsDisabled(true);
    }
    setTimeout(() => {
      setBtnClasses(classes.mainBtn);
      setIsDisabled(false);
      props.setWordNum();
    }, 1000);
  };

  return (
    <button
      type="button"
      className={btnClasses}
      onClick={onClickHandler}
      disabled={isDisabled}
    >
      {props.text}
    </button>
  );
};

export default MainBtn;
