import { useState } from "react";
import classes from "./MainBtn.module.css";

interface MainBtnProps {
  text: string;
  wordPos: string;
  setWordNum: () => void;
}

const MainBtn = (props: MainBtnProps) => {
  const [btnClasses, setBtnClasses] = useState(classes.mainBtn);
  const [score, setScore] = useState(0);

  const onClickHandler = () => {
    if (props.wordPos.toLocaleLowerCase() === props.text.toLocaleLowerCase()) {
      setBtnClasses((prevState) => `${prevState} ${classes.correct}`);
      setScore((prevState) => (prevState += 10));
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
