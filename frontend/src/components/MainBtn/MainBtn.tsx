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

  const onClickHandler = () => {
    if (props.wordPos.toLocaleLowerCase() === props.text.toLocaleLowerCase()) {
      setBtnClasses((prevState) => `${prevState} ${classes.correct}`);
      props.setScore();
    } else {
      setBtnClasses((prevState) => `${prevState} ${classes.wrong}`);
    }
    setTimeout(() => {
      setBtnClasses(classes.mainBtn);
      props.setWordNum();
    }, 1000);
  };

  return (
    <button type="button" className={btnClasses} onClick={onClickHandler}>
      {props.text}
    </button>
  );
};

export default MainBtn;
