// REACT HOOKS IMPORTS
import { useContext } from "react";

// COMPONENTS && CONTEXT IMPORTS
import Button from "@components/button/Button";
import MainContext from "@store/MainContext";

/**
 * This component responsible for rendering the start activity screen
 * @component The start activity screen component
 */
const StartScreen = () => {
  const { startActivity } = useContext(MainContext);
  return (
    <Button variant="primary" onClick={startActivity}>
      Start Activity
    </Button>
  );
};

// EXPORTS STATEMENTS
export default StartScreen;
