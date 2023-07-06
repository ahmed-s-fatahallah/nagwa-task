import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <img
      src="https://contents-live.nagwa.com/content/images/logo.svg"
      alt="Nagwa Logo"
      className={classes.logo}
    />
  );
};

export default Logo;
