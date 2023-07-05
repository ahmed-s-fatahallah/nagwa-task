import Logo from "../Logo";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes["main-header"]}>
      <Logo />
    </header>
  );
};

export default Header;
