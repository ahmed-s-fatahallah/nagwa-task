// CSS MODULES IMPORTS
import classes from "./Button.module.css";

// TYPES DEFINITIONS
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "danger" | "outlined";
}

/**
 * This component is responsible for rendering the main reuseable button.
 * @param variant the variant of the button depending on where it is rendered
 * @param children the children of the button component
 * @param className set to empty by default to accept any additional classes passed to the button
 * @param rest the rest of any explicit props passed to the button.
 * @component The reuseable button component
 */
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

// EXPORTS STATEMENTS
export default Button;
