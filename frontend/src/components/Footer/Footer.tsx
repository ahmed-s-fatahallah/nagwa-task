// COMPONENTS IMPORTS
import Logo from "@components/logo/Logo";

// CSS MODULES IMPORTS
import classes from "./Footer.module.css";

/**
 * this component is responsible for rendering the footer section
 * @component The footer section component
 */
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <div className={classes["footer__container"]}>
          <Logo />
          <p>
            Nagwa is an educational technology startup aiming to help teachers
            teach and students learn.
          </p>
        </div>
      </div>
    </footer>
  );
};

// EXPORTS STATEMENTS
export default Footer;
