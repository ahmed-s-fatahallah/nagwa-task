# Categorizing A Set Of Words Activity <!-- omit from toc -->

![Screenshot (3)](https://github.com/ahmed-s-fatahallah/nagwa-task/assets/115148623/cd2d7f4e-a326-49f4-a057-a085c40414f5)

In the English language, words can be categorized according to their syntactic functions, which is known as "Part of Speech".
Examples of parts of speech: (noun, verb, adjective, ..)

table of content:

- [1. Startup Guides](#1-startup-guides)
  - [1.1. API Application Startup](#11-api-application-startup)
  - [1.2. Frontend Application Startup](#12-frontend-application-startup)
- [2. Run Unit Tests Guide](#2-run-unit-tests-guide)
- [3. How Does The Activity Work](#3-how-does-the-activity-work)
- [4. Design Choices](#4-design-choices)
- [5. Technologies Choices](#5-technologies-choices)
  - [5.1. API Technologies](#51-api-technologies)
  - [5.2. Frontend Technologies](#52-frontend-technologies)
- [6. Approaches Explanations](#6-approaches-explanations)
  - [6.1. Api Approaches](#61-api-approaches)
  - [6.2. Frontend Approaches](#62-frontend-approaches)
- [7. Folders Structures](#7-folders-structures)
  - [7.1. Api Folder Structure](#71-api-folder-structure)
  - [7.2. Frontend Folder Structure](#72-frontend-folder-structure)
- [8. Additional Resources](#8-additional-resources)

## 1. Startup Guides

### 1.1. API Application Startup

- Navigate into the API folder by typing `cd api/` into the terminal.

1. Install all the dependencies by typing the following:

   ```bash
   npm install
   ```

   or

   ```bash
   pnpm install
   ```

   or

   ```bash
   yarn install
   ```

2. After installing type the following to start the development server:

   ```bash
   npm start
   ```

   or

   ```bash
   pnpm start
   ```

   or

   ```bash
   yarn start
   ```

- After the server starts you should see _server is running on port **8080**_ in the terminal.
- Now the API server is running.

### 1.2. Frontend Application Startup

1. Open a new terminal and navigate to the frontend folder by typing `cd frontend/` into the terminal.
2. Install all the dependencies by typing the following:

   ```bash
   npm install
   ```

   or

   ```bash
   pnpm install
   ```

   or

   ```bash
   yarn install
   ```

3. After installing type the following to start the development server:

   ```bash
   npm start
   ```

   or

   ```bash
   pnpm start
   ```

   or

   ```bash
   yarn start
   ```

4. The link should be <http://localhost:3000/>.
5. Now the development frontend server is running.

> **Note**: make sure that the API development server is up and running in order for the frontend app to be fully functional. The frontend app expects that the API endpoint is <http://localhost:8080> if you started the API server on a different port kindly change the `API_ENDPOINT` constant in `frontend/src/network/index.ts`

## 2. Run Unit Tests Guide

1. Make sure that the API server is up and running
2. Navigate to the frontend root folder
3. Write the following commands in the terminal to run tests

   ```bash
   npm run test
   ```

   or

   ```bash
   pnpm run test
   ```

   or

   ```bash
   yarn run test
   ```

4. You should see all the tests passed in the terminal

## 3. How Does The Activity Work

1. Click on Start Activity.
2. You will see a Word and 4 buttons under it each button has a Part Of Speech (POS).
3. You have to choose one of the POSs by clicking on the button.
4. If your choice is correct the button and the word will turn green and the button will pulse.
5. If your choice is wrong the button and the word will turn red and the button will shake and turn red.
6. Keep repeating this until you reach 100% on the progress bar under the buttons.
7. then after choosing the final word the screen will change with your Rank depending on your score and a restart button.

## 4. Design Choices

- I imitated the Nagwa website design and I used Nagwa Logo, `color`s, `padding`s, `font-size`, `margin`s, `border`s, and `border-radius`.
- The buttons shake and pulse animations and coloring are to give feedback to the user on his choices.
- The design is responsive and compatible with all screens.

## 5. Technologies Choices

### 5.1. API Technologies

- [**Express**](https://expressjs.com/): dependency to create the server because it's the most famous, quick and easy, simple to set up and personalize, also it allows you to define application routes using HTTP methods and URLs.
- [**TypeScript**](https://www.typescriptlang.org/): to ensure types safety and to discover errors and bugs early during development and to improve development experience.
- [**body-parser**](https://www.npmjs.com/package/body-parser): dependency to parse the request body and expose it.
- [**cors**](https://www.npmjs.com/package/cors): dependency to secure the connection and data transfer between cross-origins
- [**nodemon**](https://www.npmjs.com/package/nodemon): to refresh the server automatically after any changes are done to the code during development.
- [**lodash.shuffle**](https://lodash.com/): the shuffle method only from `lodash` library to use to shuffle the words array before sending it to the frontend.

### 5.2. Frontend Technologies

- [**React**](https://react.dev/): required by the task description, in addition to being the most famous JavaScript frontend framework.
- [**TypeScript**](https://www.typescriptlang.org/): to ensure types safety and to discover errors and bugs early during development and to improve development experience.
- [**vite**](https://vitejs.dev/): I chose to use **vite** as my bundler because it is way faster than Webpack which is the default bundler for React and provides a better development experience and easier configurations.
- [**eslint**](https://eslint.org/): to make sure the code is well formatted and find and fix problems with your JavaScript code.
- [**vitest**](https://vitest.dev/): used to write the unit tests for the frontend application.

## 6. Approaches Explanations

### 6.1. Api Approaches

- Created and established the server and the index route inside the `server.ts` file using `express` and used `cors` and `body-parser` inside the root dir.
- Created a `routes` folder to group different routes.
- Created a different file for each endpoint `rank.ts` && `words.ts`
- Created a `util` folder to group all utility functions, inside of it there is a `getRandomItem.ts` file.
- Created an assets folder to keep the JSON data file inside it.

### 6.2. Frontend Approaches

- first of all, I added import aliases to the vite.config.ts file and tsconfig.json to make import statements shorter and cleaner.

## 7. Folders Structures

### 7.1. Api Folder Structure

```bash
📦src
 ┣ 📂assets
 ┃ ┗ 📜TestData.json
 ┣ 📂routes
 ┃ ┣ 📜rank.ts
 ┃ ┗ 📜words.ts
 ┣ 📂util
 ┃ ┗ 📜getRandomItem.ts
 ┗ 📜server.ts
```

### 7.2. Frontend Folder Structure

```bash
📦src
 ┣ 📂components
 ┃ ┣ 📂activityWrapper
 ┃ ┃ ┣ 📂activityScreen
 ┃ ┃ ┃ ┣ 📜Activity.module.css
 ┃ ┃ ┃ ┣ 📜ActivityScreen.tsx
 ┃ ┃ ┃ ┗ 📜README.md
 ┃ ┃ ┣ 📂endScreen
 ┃ ┃ ┃ ┣ 📜EndScreen.module.css
 ┃ ┃ ┃ ┣ 📜EndScreen.tsx
 ┃ ┃ ┃ ┗ 📜README.md
 ┃ ┃ ┣ 📂startScreen
 ┃ ┃ ┃ ┣ 📜README.md
 ┃ ┃ ┃ ┗ 📜StartScreen.tsx
 ┃ ┃ ┣ 📜ActivityWrapper.module.css
 ┃ ┃ ┣ 📜ActivityWrapper.tsx
 ┃ ┃ ┗ 📜README.md
 ┃ ┣ 📂button
 ┃ ┃ ┣ 📜Button.module.css
 ┃ ┃ ┣ 📜Button.tsx
 ┃ ┃ ┗ 📜README.md
 ┃ ┣ 📂footer
 ┃ ┃ ┣ 📜Footer.module.css
 ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┗ 📜README.md
 ┃ ┣ 📂header
 ┃ ┃ ┣ 📜Header.module.css
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┗ 📜README.md
 ┃ ┣ 📂loadingSpinner
 ┃ ┃ ┣ 📜LoadingSpinner.module.css
 ┃ ┃ ┣ 📜LoadingSpinner.tsx
 ┃ ┃ ┗ 📜README.md
 ┃ ┣ 📂logo
 ┃ ┃ ┣ 📜Logo.module.css
 ┃ ┃ ┣ 📜Logo.tsx
 ┃ ┃ ┗ 📜README.md
 ┃ ┗ 📂main
 ┃ ┃ ┣ 📜Main.module.css
 ┃ ┃ ┣ 📜Main.tsx
 ┃ ┃ ┗ 📜README.md
 ┣ 📂network
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜README.md
 ┣ 📂store
 ┃ ┣ 📜MainContext.tsx
 ┃ ┗ 📜README.md
 ┣ 📂tests
 ┃ ┣ 📜ActivityScreen.test.jsx
 ┃ ┗ 📜EndScreen.test.jsx
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```

## 8. Additional Resources

- [Nagwa website](https://www.nagwa.com/en/) used as a reference for the UI design and Logo.
- [Stack overflow](https://stackoverflow.com/) used to search for bugs and problems that I faced during the development.
- [React Official Docs](https://react.dev/) used to check the solution for the `useEffect` hook being run twice during the development.
- [loading.io/css](https://loading.io/css/) used to get the loading spinner.
