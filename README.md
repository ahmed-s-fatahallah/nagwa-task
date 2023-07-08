# table of content

1. How to start the API application
2. How to start the frontend application
3. How does the activity works
4. Design choices
5. Dependencies used in the API and the frontend
6. API approaches explanation
7. Frontend approaches explanation
8. Additional Resources

## How to start the API application

- Navigate into the api folder by typing **cd api/** into the terminal.
- Install all the dependencies by typing **pnpm install** or **npm install** if you do not have pnpm.
- After done installing type **pnpm start** or **npm start** After the server starts you should see _server is running on port 8080_ in the terminal.
- Now API server is running.

## How to start the frontend application

- Open new terminal and navigate to the frontend folder by typing **cd frontend/** into the terminal.
- Install all the dependencies by typing **pnpm install** or **npm install** if you do not have pnpm.
- After done installing type **pnpm start** or **npm start** After the application starts you should see the vite massage and the link for the frontend application.
- The link should be **http://localhost:3000/** control click on or press **o** to start the frontend application.
- Now the frontend server is running.

## How does the activity works

1. Click on start Activity.
2. You will see a Word and 4 buttons under it each button has a Part Of Speech (POS).
3. You have to choose one of POSs by clicking on the button.
4. If your choice is correct the button and the word will turn green and the button will pulse.
5. If your choice is wrong the button and the word will turn red and the button will shake and turn red.
6. Keep repeating this until you reach 100% on the progress bar under the buttons.
7. then after choosing the final word the screen will change with your Rank depending on your score and a restart button.

## Design choices

- I Imitated the Nagwa website design and I used Nagwa Logo, colors, paddings, font-size, margins, borders, and border radius.
- The buttons shake and pulse animations and coloring are to give feedback to the user on his choices.
- The design is responsive and compatible with all screens.

## Dependencies used in the API and the frontend

### API dependencies

- **Express** dependency to create the server because it's the most famous, quick and easy, simple to set up and personalize, also it allows you to define application routes using HTTP methods and URLs.
- **TypeScript** to ensure types safety and to discover errors and bugs early during development and to improve development experience.
- **body-parser** dependency to parse the request body and expose it.
- **cors** dependency to secure the connection and data transfer between cross-origins
- **nodemon** to refresh the server automatically after any changes are done to the code during development.
- **lodash.shuffle** the shuffle method only from _lodash_ library to use it to shuffle the words array before send it to the frontend.

### Frontend dependencies

- **React** required by the task description, in addition to being the most famous JavaScript frontend framework.
- **TypeScript** to ensure types safety and to discover errors and bugs early during development and to improve development experience.
- **vite** I chose to use **vite** as my bundler because it is way faster than webpack which is the default bundler for react and provide better development experience and easier configurations.
- **eslint** to make sure the code is well formatted and find and fix problems with your JavaScript code.

## API approaches explanation

- Created and established the server and the index route inside the _server.ts_ file using **express** and used **cors** and **body-parser** inside the root dir.
- Created a _routes_ folder to group different routes.
- Created a different file for each endpoint _rank.ts && words.ts_
- Created _util_ folder to group all utility functions, inside of it there is _getRandomItem.ts_ file.
- Created assets folder to keep the json data file inside it.

#### rank.ts

##### generateRank function

- receives **POST** request from the frontend with the score in the request body, then do the rank calculations and send the rank in the response object.

##### rankRoutes function

- handles all routes for the rank endPoint.

#### word.ts

##### generateRndWordsArry function

- receives a **GET** request from the frontend and send a response with an array with length of 10 random and shuffled words.
- this function starts by creating empty array to store the words inside of it and send it after it is populated.
- then it has an object which has 4 keys assigned to empty arrays, each key represent different type of the word Part of Speech to segregate the words array received from the json file.
- then loop inside the initial array received from the json file and check inside the forEach loop if the received array has invalid data or missing word pos the we _return_ if we made it past this guard clause then we add each word to its corresponding array inside the segregatedWords Object.
- start a for loop to add 1 word from each array of the 4 types inside the picked words array to make sure that the picked words array contains at least 1 word from each POS.
- then start a while loop until the length of the picked words array reaches 10, first get a random word from the initial array then check if this word already exists inside the picked words array, if so then go to the next iteration, if not add it inside the picked words array, with that approach we make sure the picked words array contains no duplicates.
- finally respond with the picked words array shuffled using the shuffle method from _lodash library_.

##### wordsRoutes function

- handles all routes for the words endpoint.

#### getRandomItem.ts

##### getRandomItem utility function

- receives an array of generic type T and returns a random item from this array by picking a random index using `Math.random` javascript built in function.

## frontend approaches explanation

- first of all i added imports aliases to vite.config.ts file and tsconfig.json to make import statements shorter and cleaner.

# src folder structure

- src
  - components
    - Activity wrapper folder
      - ActivityWrapper.tsx
      - ActivityWrapper.module.css
      - activityScreen folder
        - ActivityScreen.tsx
        - ActivityScreen.module.css
      - endScreen folder
        - EndScreen.tsx
        - EndScreen.module.css
      - startScreen folder
        - StartScreen.tsx
    - Button folder
      - Button.tsx
      - Button.module.css
    - Footer folder
      - Footer.tsx
      - Footer.module.css
    - header folder
      - Header.tsx
      - Header.module.css
    - loadingSpinner folder
      - LoadingSpinner.tsx
      - LoadingSpinner.module.css
    - logo folder
      - Logo.tsx
      - Logo.module.css
    - main folder
      - Main.tsx
      - Main.module.css
  - network
    - index.ts
  - store
    - MainContext.tsx

#### components folder

##### ActivityWrapper component

- This component acts as a wrapper for different activity components and handles which component to be rendered depending of the activity state.

##### ActivityScreen component

- This component is responsible for fetching data when rendered and display the current word from the fetched array and a button for each POS.
- It uses 3 _useState_ hooks first hook to store the fetched data array, 2nd hook manages the state of the clicked button, 3rd hook manage which word is displayed from the fetched array.
- It uses _useContext_ hook to manage the global context states.
- It uses 2 _useEffect_ hooks to manage side effects such as sending **GET** request to get the data and _setTimeOut_ to make sure the user gets a feedback before the next word is displayed.
- It has _onClickHandler_ function that handles the button clicked state and checks if the clicked button has the right POS or not if so it increment the score counter.
- It checks if the data is loading it returns a loading spinner if not checks if there is an error and displays it, otherwise it returns a paragraph element that displays the current word, a list of buttons each has different POS, and a progress bar that increment during activity to show how far have you got.

##### ActivityScreen component

- This component is responsible for rendering the end screen and post the score to the API and get the rank and display it.
- It uses _useState_ hook to store the fetched rank.
- It uses _useContext_ hook to manage the global context states.
- It uses _useEffect_ hook to handle side effects like sending the **POST** request with the score to get the rank.
- It checks if the data is loading it returns a loading spinner if not checks if there is an error and displays it. otherwise it returns a button that can restart the activity and div containing a paragraph with text and a span with the rank the rank.

##### StartScreen component

- This component is responsible for rendering the starting screen.
- It uses 1 hook which is _useContext_ to manage the global states.
- It returns a button that starts the Activity

##### Button component

- This is a reuseable button component that renders a button.
- This a dumb component that doesn't manage any state instead it receives props and adjust according to them.

##### Footer component

- This component is responsible for rending the footer section.
- It is a stateless component that does not change or receive any props or manage any state.
- It returns a footer element with a container wrapper div for styling and inside it a div that wraps the Logo component and a paragraph.

##### Header component

- This component is responsible for rending the header section.
- It is a stateless component that does not change or receive any props or manage any state.
- It returns a header element with a container wrapper div for styling and inside it the Logo component.

##### LoadingSpinner component

- This component is responsible for rending a loading spinner.
- It is a stateless component that does not change or receive any props or manage any state.
- It returns a div contains 12 empty div that are styled by css to form a loading spinner.

##### Logo component

- This component is responsible for rending Nagwa Logo
- It is a stateless component that does not change or receive any props or manage any state.
- It returns an img element which has src attribute that refers to Nagwa logo link.

##### Main component

- This component is responsible for rending the main section of the page.
- It is a stateless component that does not change or receive any props or manage any state.
- It returns a main element which contains a wrapper container div inside of it a div that contains h1 element with the activity section title and small element with the small text under it, paragraph element with the text above the activity section, and a section element which wraps the activity wrapper component.

#### network folder

##### index.ts

- It contains a constant javaScript Object which has 2 keys (words && rank) each key has a value of the url to its endpoint.

#### store

##### MainContext.tsx

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

# Additional resources

- [Nagwa website](https://www.nagwa.com/en/) used as a reference for the UI design and Logo.
- [Stack overflow](https://stackoverflow.com/) used to search bugs and problems that I faced during the development.
- [React Official Docs](https://react.dev/) used to check the solution for the _useEffect_ hook being run twice during the development.
- [loading.io/css](https://loading.io/css/) used to get the loading spinner.
- [GitHub] (https://github.com/ahmed-s-fatahallah?tab=repositories) used to create a public repo and publish the solution
