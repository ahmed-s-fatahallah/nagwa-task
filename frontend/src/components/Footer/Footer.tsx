import Logo from "../Logo.tsx";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer__container"]}>
        <Logo />
        <p>
          Nagwa is an educational technology startup aiming to help teachers
          teach and students learn.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
