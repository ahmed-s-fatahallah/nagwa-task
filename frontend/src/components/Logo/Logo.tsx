// CSS MODULES IMPORTS
import classes from "./Logo.module.css";

/**
 * This component is responsible for rendering the logo image
 * @component This is the logo component
 */
const Logo = () => {
  return (
    <img
      src="https://contents-live.nagwa.com/content/images/logo.svg"
      alt="Nagwa Logo"
      className={classes.logo}
    />
  );
};

// EXPORT STATEMENTS
export default Logo;
