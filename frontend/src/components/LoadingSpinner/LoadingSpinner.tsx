// CSS MODULES IMPORTS
import classes from "./LoadingSpinner.module.css";

/**
 * This component responsible for rendering the loading spinner
 * @component The loading spinner component
 */
const LoadingSpinner = () => {
  return (
    <div className={classes["lds-default"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

// EXPORTS STATEMENTS
export default LoadingSpinner;
