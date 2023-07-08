// COMPONENTS AND CONTEXT PROVIDER IMPORTS
import Header from "@components/header/Header";
import Main from "@components/main/Main";
import Footer from "@components/footer/Footer";
import { MainContextProvider } from "@store/MainContext";

// GLOBAL CSS STYLES IMPORT
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

// EXPORTS STATEMENT
export default App;
