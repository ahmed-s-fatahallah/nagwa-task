import classes from "./MainBtn.module.css";

interface MainBtnProps {
  text: string;
}

const MainBtn = (props: MainBtnProps) => {
  return (
    <button type="button" className={classes.mainBtn}>
      {props.text}
    </button>
  );
};

export default MainBtn;
