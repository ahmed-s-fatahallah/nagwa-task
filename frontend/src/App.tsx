// COMPONENTS AND CONTEXT PROVIDER IMPORTS
import Header from "@components/header/Header";
import Main from "@components/Main/Main";
import Footer from "@components/Footer/Footer";
// import { MainContextProvider } from "@store/MainContext";
import { Provider } from "react-redux";
import { store } from "@store/Store";

// GLOBAL CSS STYLES IMPORT
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Main />
      <Footer />
    </Provider>
  );
}

// EXPORTS STATEMENT
export default App;
