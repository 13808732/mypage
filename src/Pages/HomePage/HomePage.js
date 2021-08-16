import React from "react";
import styled from "styled-components";
import bg from "../../assets/images/homePageBG.png";
import yellowbg from "../../assets/images/yellowbg.png";
import face from "../../assets/images/Face.png";

const HomePageWrapper = styled.div`
  position: relative;
  width: 80vw;
  height: 80vh;
  max-height: 450px;
  margin: 20px auto;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  display: flex;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 25%;
  padding-left: 2rem;
`;

const Title = styled.div`
  color: white;
  font-size: 4rem;
  font-weight: 800;
`;

const Title2 = styled.div`
  color: orange;
  font-size: 2rem;
  font-weight: 400;
  border-top: 5px solid orange;
  margin-top: 10px;
  padding-top: 5px;
`;

const ContectIcons = styled.div``;



const Right = styled.div``;

const Yellowbg = styled.img`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 50%;
  height: 90%;
`;

const Face = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 100%;
  border-bottom-right-radius: 10px;
`;

const HomePage = () => (
  <HomePageWrapper>
    <Left>
      <Title>Hao Tang</Title>
      <Title2>Full Stack Developer</Title2>
    </Left>
    <Right>
      <Yellowbg src={yellowbg} />
      <Face src={face} />
    </Right>
  </HomePageWrapper>
);

export default HomePage;
