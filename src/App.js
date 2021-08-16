import React from "react";
import { GlobalStyle, ResetStyle } from "./globalStyle";
import Header from "./Header";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <ResetStyle />
      <GlobalStyle />
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
