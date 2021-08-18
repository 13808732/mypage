import React from "react";
import styled from "styled-components";

const NavItemWrapper = styled.a`
  border: black 1px solid;
  display: inline-block;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  font-size: 1rem;
  &:hover {
    border-bottom: white 1px solid;
  }
`;

const NavItem = (props) => {
  return <NavItemWrapper>{props.content}</NavItemWrapper>;
};

export default NavItem;
