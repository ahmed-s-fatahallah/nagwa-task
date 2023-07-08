import { useContext } from "react";
import Button from "@components/Button/Button";
import MainContext from "@store/MainContext";

const StartScreen = () => {
  const { startActivity } = useContext(MainContext);
  return (
    <Button variant="primary" onClick={startActivity}>
      Start Activity
    </Button>
  );
};

export default StartScreen;
