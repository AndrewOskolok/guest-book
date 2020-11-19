import Main from "../Components/Main/Main";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import css from "./App.module.css";

function App() {
  return (
    <div className={css.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
