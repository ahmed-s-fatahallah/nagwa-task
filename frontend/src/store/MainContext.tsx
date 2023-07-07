import { ReactNode, createContext, useState } from "react";

const MainContext = createContext({
  score: 0,
  isStarted: false,
  isEnded: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updateScore: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  startActivity: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  endActivity: () => {},
});

export const MainContextProvider = (props: { children: ReactNode }) => {
  const [score, setScore] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isEnded, setIsEnded] = useState(false);

  const updateScoreHandler = () => {
    setScore((prevState) => prevState + 10);
  };

  const startHandler = () => {
    setIsStarted(true);
    setIsEnded(false);
  };
  const endHandler = () => {
    setIsStarted(false);
    setIsEnded(true);
  };

  return (
    <MainContext.Provider
      value={{
        score,
        isStarted,
        isEnded,
        updateScore: updateScoreHandler,
        startActivity: startHandler,
        endActivity: endHandler,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContext;
