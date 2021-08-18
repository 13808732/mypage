import React, { Component } from "react";
import styled from "styled-components";
import Logo from "../Logo";
import Navbar from "./NavBar";

const HeaderContainer = styled.div`
  width: 80%;
  height: 30px;
  margin: 10px auto;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 1);
  box-shadow: 5px 5px 5px rgba(50, 50, 51, 0.5);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default class Header extends Component {
  //eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <HeaderContainer>
        <Logo>Hao Tang</Logo>
        <Navbar />
      </HeaderContainer>
    );
  }
}
