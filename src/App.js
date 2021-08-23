import React from "react";
import styled from "styled-components";
import { GlobalStyle, ResetStyle } from "./globalStyle";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

const Wrapper = styled.div`
  background-color: rgb(150, 150, 150);
  width: 100vw;
  height: 100vh;
  padding: 5px;
`;

function App() {
  return (
    <div className="App">
      <Wrapper>
        <ResetStyle />
        <GlobalStyle />
        <Header />
        <HomePage />
      </Wrapper>
    </div>
  );
}

export default App;
