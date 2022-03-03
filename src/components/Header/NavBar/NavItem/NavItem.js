import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavItemWrapper = styled(NavLink)`
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
  return <NavItemWrapper to={props.content}>{props.content}</NavItemWrapper>;
};

export default NavItem;
