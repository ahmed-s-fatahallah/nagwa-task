import classes from "./Button.module.css";

type Pos = "noun" | "verb" | "adverb" | "adjective";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  clickedPos?: Pos | null;
  variant: "main" | "secondary" | "danger" | "outlined";
  onClickHandler: () => void;
}

const Button = ({
  children,
  clickedPos,
  variant,
  onClickHandler,
}: ButtonProps) => {
  let buttonClasses;
  switch (variant) {
    case "main":
      buttonClasses = classes["start-btn"];
      break;
    case "outlined":
      buttonClasses = classes.btn;
      break;
    case "secondary":
      buttonClasses = `${classes.btn} ${classes.correct}`;
      break;
    case "danger":
      buttonClasses = `${classes.btn} ${classes.wrong}`;
      break;
    default:
      buttonClasses = classes.btn;
      break;
  }

  return (
    <button
      type="button"
      disabled={Boolean(clickedPos)}
      onClick={onClickHandler}
      className={buttonClasses}
    >
      {children}
    </button>
  );
};

export default Button;
