import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import { GlobalStyle, ResetStyle } from "./globalStyle";
import Header from "./components/Header";
import HomePage from "./Pages/HomePage";
import WeatherPage from "./Pages/Weather";
import About from "./Pages/About";

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
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/Home" exact component={HomePage} />
          <Route path="/Weather" component={WeatherPage} />
          <Route path="/About" exact component={About} />
        </Switch>
      </Wrapper>
    </div>
  );
}

export default App;
