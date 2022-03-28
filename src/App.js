import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
import Main from "./Main";

function App() {
  return (
    <div className="frame">
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
