import Logo from "../Logo/Logo";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes["main-header"]}>
      <div className="container">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
