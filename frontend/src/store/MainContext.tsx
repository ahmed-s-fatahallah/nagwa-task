// REACT HOOKS IMPORTS
import { ReactNode, createContext, useState } from "react";

// React create context function
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setError: (_error: { isError: boolean; msg: string }) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setLoading: (_isLoading: boolean) => {},
  /* eslint-enable @typescript-eslint/no-empty-function */
});

// Main context provider function to handle all global states
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
  const startHandler = () => {
    setIsStarted(true);
    setIsEnded(false);
    setScore(0);
  };
  const endHandler = () => {
    setIsStarted(false);
    setIsEnded(true);
  };

  const loadingHandler = (isLoading: boolean) => {
    setIsLoading(isLoading);
  };
  const errorHandler = (error: { isError: boolean; msg: string }) => {
    setError({
      isError: error.isError,
      msg: error.msg,
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
        setLoading: loadingHandler,
        setError: errorHandler,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

// EXPORTS STATEMENTS
export default MainContext;
