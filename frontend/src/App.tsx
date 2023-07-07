import Footer from "@components/Footer/Footer";
import Main from "@components/Main/Main";
import Header from "@components/header/Header";

import { MainContextProvider } from "@store/MainContext";

import "./App.css";

function App() {
  return (
    <MainContextProvider>
      <Header />
      <Main />
      <Footer />
    </MainContextProvider>
  );
}

export default App;
