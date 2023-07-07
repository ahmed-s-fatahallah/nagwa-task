import { useContext, useEffect, useState } from "react";
import MainContext from "@store/MainContext";

import classes from "./MainBtn.module.css";

interface MainBtnProps {
  text: string;
  wordPos: string;
  setWordNum: () => void;
  btnActive: (btnActive: boolean) => void;
}

const MainBtn = ({ text, wordPos, setWordNum, btnActive }: MainBtnProps) => {
  const [btnClasses, setBtnClasses] = useState(classes.mainBtn);
  const [isBtnActive, setIsBtnActive] = useState(true);
  const ctx = useContext(MainContext);

  useEffect(() => {
    btnActive(isBtnActive);
  }, [btnActive, isBtnActive]);

  const onClickHandler = () => {
    if (wordPos.toLocaleLowerCase() === text.toLocaleLowerCase()) {
      setBtnClasses((prevState) => `${prevState} ${classes.correct}`);
      ctx.updateScore();
      setIsBtnActive(false);
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
