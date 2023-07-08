import classes from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "danger" | "outlined";
}

const Button = ({
  variant,
  children,
  className = "",
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`${classes.btn} ${classes[variant] || ""} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
