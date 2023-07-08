# Categorizing A Set Of Words Activity <!-- omit from toc -->

In English language, words can be categorized according to their syntactic functions, which is known as "Part of Speech".
Examples of part of speech: (noun, verb, adjective, ..)

table of content:

- [1. Startup Guides](#1-startup-guides)
  - [1.1. API Application Startup](#11-api-application-startup)
  - [1.2. Frontend Application Startup](#12-frontend-application-startup)
- [2. How Does The Activity Work](#2-how-does-the-activity-work)
- [3. Design Choices](#3-design-choices)
- [4. Technologies Choices](#4-technologies-choices)
  - [4.1. Api Technologies](#41-api-technologies)
  - [4.2. Frontend Technologies](#42-frontend-technologies)
- [5. Approaches Explanations](#5-approaches-explanations)
  - [5.1. Api Approaches](#51-api-approaches)
  - [5.2. Frontend Approaches](#52-frontend-approaches)
- [6. Folders Structures](#6-folders-structures)
  - [6.1. Api Folder Structure](#61-api-folder-structure)
  - [6.2. Frontend Folder Structure](#62-frontend-folder-structure)
- [7. Additional Resources](#7-additional-resources)

## 1. Startup Guides

### 1.1. API Application Startup

- Navigate into the api folder by typing `cd api/` into the terminal.

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

2. After done installing type the following to start the development server:

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
- Now API server is running.

### 1.2. Frontend Application Startup

1. Open new terminal and navigate to the frontend folder by typing `cd frontend/` into the terminal.
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

3. After done installing type the following to start the development server:

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

> **Note**: make sure that the api development server is up and running in order for the frontend app to be fully functional. The frontend app expects that the api endpoint is <http://localhost:8080> if you started the api server on a different port kindly change the `API_ENDPOINT` constant in `frontend/src/network/index.ts`

## 2. How Does The Activity Work

1. Click on start Activity.
2. You will see a Word and 4 buttons under it each button has a Part Of Speech (POS).
3. You have to choose one of POSs by clicking on the button.
4. If your choice is correct the button and the word will turn green and the button will pulse.
5. If your choice is wrong the button and the word will turn red and the button will shake and turn red.
6. Keep repeating this until you reach 100% on the progress bar under the buttons.
7. then after choosing the final word the screen will change with your Rank depending on your score and a restart button.

## 3. Design Choices

- I imitated the Nagwa website design and I used Nagwa Logo, colors, paddings, font-size, margins, borders, and border radius.
- The buttons shake and pulse animations and coloring are to give feedback to the user on his choices.
- The design is responsive and compatible with all screens.

## 4. Technologies Choices

### 4.1. Api Technologies

- [**Express**](https://expressjs.com/): dependency to create the server because it's the most famous, quick and easy, simple to set up and personalize, also it allows you to define application routes using HTTP methods and URLs.
- [**TypeScript**](https://www.typescriptlang.org/): to ensure types safety and to discover errors and bugs early during development and to improve development experience.
- [**body-parser**](https://www.npmjs.com/package/body-parser): dependency to parse the request body and expose it.
- [**cors**](https://www.npmjs.com/package/cors): dependency to secure the connection and data transfer between cross-origins
- [**nodemon**](https://www.npmjs.com/package/nodemon): to refresh the server automatically after any changes are done to the code during development.
- [**lodash.shuffle**](https://lodash.com/): the shuffle method only from _lodash_ library to use it to shuffle the words array before send it to the frontend.

### 4.2. Frontend Technologies

- [**React**](https://react.dev/): required by the task description, in addition to being the most famous JavaScript frontend framework.
- [**TypeScript**](https://www.typescriptlang.org/): to ensure types safety and to discover errors and bugs early during development and to improve development experience.
- [**vite**](https://vitejs.dev/): I chose to use **vite** as my bundler because it is way faster than webpack which is the default bundler for react and provide better development experience and easier configurations.
- [**eslint**](https://eslint.org/): to make sure the code is well formatted and find and fix problems with your JavaScript code.

## 5. Approaches Explanations

### 5.1. Api Approaches

- Created and established the server and the index route inside the _server.ts_ file using **express** and used **cors** and **body-parser** inside the root dir.
- Created a _routes_ folder to group different routes.
- Created a different file for each endpoint _rank.ts && words.ts_
- Created _util_ folder to group all utility functions, inside of it there is _getRandomItem.ts_ file.
- Created assets folder to keep the json data file inside it.

### 5.2. Frontend Approaches

- first of all i added imports aliases to vite.config.ts file and tsconfig.json to make import statements shorter and cleaner.

## 6. Folders Structures

### 6.1. Api Folder Structure

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

### 6.2. Frontend Folder Structure

```bash
📦src
 ┣ 📂components
 ┃ ┣ 📂activityWrapper
 ┃ ┃ ┣ 📂activityScreen
 ┃ ┃ ┃ ┣ 📜Activity.module.css
 ┃ ┃ ┃ ┗ 📜ActivityScreen.tsx
 ┃ ┃ ┣ 📂endScreen
 ┃ ┃ ┃ ┣ 📜EndScreen.module.css
 ┃ ┃ ┃ ┗ 📜EndScreen.tsx
 ┃ ┃ ┣ 📂startScreen
 ┃ ┃ ┃ ┗ 📜StartScreen.tsx
 ┃ ┃ ┣ 📜ActivityWrapper.module.css
 ┃ ┃ ┗ 📜ActivityWrapper.tsx
 ┃ ┣ 📂Button
 ┃ ┃ ┣ 📜Button.module.css
 ┃ ┃ ┗ 📜Button.tsx
 ┃ ┣ 📂footer
 ┃ ┃ ┣ 📜Footer.module.css
 ┃ ┃ ┗ 📜Footer.tsx
 ┃ ┣ 📂header
 ┃ ┃ ┣ 📜Header.module.css
 ┃ ┃ ┗ 📜Header.tsx
 ┃ ┣ 📂loadingSpinner
 ┃ ┃ ┣ 📜LoadingSpinner.module.css
 ┃ ┃ ┗ 📜LoadingSpinner.tsx
 ┃ ┣ 📂logo
 ┃ ┃ ┣ 📜Logo.module.css
 ┃ ┃ ┗ 📜Logo.tsx
 ┃ ┗ 📂main
 ┃ ┃ ┣ 📜Main.module.css
 ┃ ┃ ┗ 📜Main.tsx
 ┣ 📂network
 ┃ ┗ 📜index.ts
 ┣ 📂store
 ┃ ┗ 📜MainContext.tsx
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```

## 7. Additional Resources

- [Nagwa website](https://www.nagwa.com/en/) used as a reference for the UI design and Logo.
- [Stack overflow](https://stackoverflow.com/) used to search bugs and problems that I faced during the development.
- [React Official Docs](https://react.dev/) used to check the solution for the _useEffect_ hook being run twice during the development.
- [loading.io/css](https://loading.io/css/) used to get the loading spinner.
- [GitHub](https://github.com/ahmed-s-fatahallah?tab=repositories) used to create a public repo and publish the solution
