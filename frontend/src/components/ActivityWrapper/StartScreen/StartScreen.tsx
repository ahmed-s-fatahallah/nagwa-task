// REACT HOOKS IMPORTS
import { useDispatch } from "react-redux";
// COMPONENTS && CONTEXT IMPORTS
import Button from "@components/Button/Button";
import { startActivity } from "@store/mainSlice";

/**
 * This component responsible for rendering the start activity screen
 * @component The start activity screen component
 */
const StartScreen = () => {
  const dispatch = useDispatch();
  const StartHandler = () => {
    dispatch(startActivity());
  };

  return (
    <Button variant="primary" onClick={StartHandler}>
      Start Activity
    </Button>
  );
};

// EXPORTS STATEMENTS
export default StartScreen;
