import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.frame}>
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
