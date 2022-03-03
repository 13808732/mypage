import React from "react";
import styled from "styled-components";
import bg from "../../assets/images/homePageBG.png";
import yellowbg from "../../assets/images/yellowbg.png";
import face from "../../assets/images/Face.png";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaTwitterSquare,
  FaCreditCard,
} from "react-icons/fa";

const HomePageWrapper = styled.div`
  position: relative;
  width: 80vw;
  height: 80vh;
  max-height: 450px;
  max-width: 945px;
  margin: 20px auto;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  @media screen and (max-width: 660px) {
    height: 100vh;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 210px;
  padding-left: 2rem;
  z-index: 1;
  @media screen and (max-width: 600px) {
    position: absolute;
    bottom: 5px;
    left: -15px;
  }
`;

const Title = styled.div`
  color: white;
  font-size: 4rem;
  font-weight: 800;
  @media screen and (max-width: 600px) {
    text-shadow: 0 0 5px black;
  }
`;

const Title2 = styled.div`
  color: black;
  text-shadow: orange 0px 0px 5px;
  font-size: 2rem;
  font-weight: 400;
  border-top: 5px solid orange;
  margin-top: 10px;
  padding-top: 5px;
`;

const ContectIcons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  @media screen and (max-width: 600px) {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    border: 1px solid white;
    margin-top: 0;
  }
  svg {
    color: orange;
    @media screen and (max-width: 600px) {
      box-shadow: 0 0 5px black;
    }
    &:hover {
      color: white;
    }
  }
`;

const Right = styled.div`
  width: 50%;
  @media screen and (man-width: 660px) {
    width: 100%;
  }
`;

const Yellowbg = styled.img`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 50%;
  height: 90%;
  @media screen and (man-width: 660px) {
    height: auto;
  }
`;

const Face = styled.img`
  position: absolute;
  right: 0;
  height: 100%;
  border-bottom-right-radius: 10px;
  @media screen and (max-width: 400px) {
    border-bottom-left-radius: 10px;
    height: auto;
    width: 100%;
    position: none;
    top: 0;
    right: 0;
  }
`;

const HomePage = () => (
  <>
    <HomePageWrapper>
      <Left>
        <Title>Hao Tang</Title>
        <Title2>Front End Developer</Title2>
        <ContectIcons>
          <FaFacebookSquare size={30} />
          <FaLinkedin size={30} />
          <FaInstagramSquare size={30} />
          <FaTwitterSquare size={30} />
        </ContectIcons>
      </Left>
      <Right>
        <Yellowbg src={yellowbg} />
        <Face src={face} />
      </Right>
    </HomePageWrapper>
  </>
);

export default HomePage;
