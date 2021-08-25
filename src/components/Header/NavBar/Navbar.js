import styled from "styled-components";
import NavItem from "./NavItem/NavItem";

const NavBarContainer = styled.div`
`;

const NavItems = ["Home", "Weather", "About", "Resume", "Contact"];
const NavBar = () =>
  NavItems.map((item) => (
    <NavBarContainer>
      <NavItem content={item} />
    </NavBarContainer>
  ));
export default NavBar;
