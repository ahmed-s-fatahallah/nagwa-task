import { useEffect, useState } from "react";
import classes from "./MainBtn.module.css";

interface MainBtnProps {
  text: string;
  wordPos: string;
  setWordNum: () => void;
  setScore: () => void;
  btnActive: (btnActive: boolean) => void;
}

const MainBtn = ({
  text,
  wordPos,
  setWordNum,
  setScore,
  btnActive,
}: MainBtnProps) => {
  const [btnClasses, setBtnClasses] = useState(classes.mainBtn);
  const [isBtnActive, setIsBtnActive] = useState(true);

  useEffect(() => {
    btnActive(isBtnActive);
  }, [btnActive, isBtnActive]);

  const onClickHandler = () => {
    if (wordPos.toLocaleLowerCase() === text.toLocaleLowerCase()) {
      setBtnClasses((prevState) => `${prevState} ${classes.correct}`);
      setIsBtnActive(false);
      setScore();
    } else {
      setBtnClasses((prevState) => `${prevState} ${classes.wrong}`);
      setIsBtnActive(false);
    }
    setTimeout(() => {
      setBtnClasses(classes.mainBtn);
      setIsBtnActive(true);
      setWordNum();
    }, 1000);
  };

  return (
    <button type="button" className={btnClasses} onClick={onClickHandler}>
      {text}
    </button>
  );
};

export default MainBtn;
