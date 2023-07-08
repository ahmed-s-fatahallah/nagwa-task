# MainContext.tsx

- This file creates a global context using React context Api and _createContext_ function then pass an object with the initial value of each state that it will mange.
- Also, it has a _MainContextProvider_ that manages the different global states.
- This function uses 5 _useState_ hooks

  - 1st hook is used to manage score and increment it when the answer is correct.
  - 2nd hook is used to manage the start state to render the activityScreen when the user clicks start Activity button and the activity starts.
  - 3rd hook is used to manage the end state to render the endScreen when the user reaches the end of the activity.
  - 4th hook is used to manage the loading state, if the application still fetching data or sending data the loading sate is set to true and the loading spinner is rendered.
  - 5th hook is used to manage the error state, if something went wrong during fetching data or post request the _error.isError_ inside the error Object is sett to true and the error message is displayed.

- This function also has 5 handlers function which handles different states.

  1. is _incrementScoreHandler_ which increment score when the answer is correct.
  2. _startHandler_ which _setIsStarted_ state to true to render the Activity screen and _setIsEnded_ to false in case of restarting the activity. It also reset the score to 0.
  3. _endHandler_ which _setIsStarted_ state to false and _setIsEnded_ to true to render the end Screen.
  4. _loadingHandler_ that _setIsLoading_ to a boolean received from the component.
  5. _errorHandler_ that receives an error Object with _isError_ key that receives a boolean and _msg_ key that receives a string.

- It returns a _MainContext.provider_ React wrapper which has a value attribute that receives and object with all previously mentioned states and handlers, and wraps a props.children to give access to the context for his children.
