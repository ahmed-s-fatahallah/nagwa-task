import { ReactNode, createContext, useState } from "react";

const MainContext = createContext({
  score: 0,
  isStarted: false,
  isEnded: false,
  isLoading: false,
  error: { isError: false, msg: "" },
  /* eslint-disable @typescript-eslint/no-empty-function*/
  incrementScore: () => {},
  startActivity: () => {},
  endActivity: () => {},
  resetScore: () => {},
  setError: (msg: string) => {},
  setLoading: () => {},
  /* eslint-enable @typescript-eslint/no-empty-function */
});

export const MainContextProvider = (props: { children: ReactNode }) => {
  const [score, setScore] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isEnded, setIsEnded] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    isError: false,
    msg: "",
  });

  const incrementScoreHandler = () => {
    setScore((prevState) => prevState + 10);
  };
  // console.log(score);
  const resetScoreHandler = () => {
    setScore(0);
  };
  const startHandler = () => {
    setIsStarted(true);
    setIsEnded(false);
    setScore(0);
  };
  const endHandler = () => {
    setIsStarted(false);
    setIsEnded(true);
  };

  const loadingHandler = () => {
    setIsLoading((prevState) => !prevState);
  };
  const errorHandler = (msg: string) => {
    setError({
      isError: true,
      msg,
    });
  };

  return (
    <MainContext.Provider
      value={{
        score,
        isStarted,
        isEnded,
        isLoading,
        error,
        incrementScore: incrementScoreHandler,
        startActivity: startHandler,
        endActivity: endHandler,
        resetScore: resetScoreHandler,
        setLoading: loadingHandler,
        setError: errorHandler,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContext;
