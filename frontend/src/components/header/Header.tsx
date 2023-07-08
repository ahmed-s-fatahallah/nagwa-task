// COMPONENTS IMPORTS
import Logo from "@components/logo/Logo";

// CSS MODULES IMPORTS
import classes from "./Header.module.css";

/**
 * This component is responsible for rendering the header section
 * @component The header section component
 */
const Header = () => {
  return (
    <header className={classes["main-header"]}>
      <div className="container">
        <Logo />
      </div>
    </header>
  );
};

// EXPORTS STATEMENTS
export default Header;
