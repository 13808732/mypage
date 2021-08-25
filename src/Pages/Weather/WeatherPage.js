import React from "react";
import styled from "styled-components";
import sydneybg from "../../assets/images/sydney_bg.jpeg";
import WeatherCard from "./WeatherCard";

const WeatherWrapper = styled.div`
  position: relative;
  width: 80vw;
  height: 80vh;
  max-height: 450px;
  max-width: 945px;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  background-image: url(${sydneybg});
  background-repeat: no-repeat;
  background-size: cover;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-around;
`;

const TopRight = styled.div`
  font-size: 6rem;
  color: white;
  text-shadow: 5px 5px 5px black;
`;
const Bottom = styled.div`
  display: flex;
  margin: 30px auto 0px;
  width: 95%;
  height: 40%;
  background-color: rgba(255, 255, 255, 0.5);
  border: white 1px solid;
  border-radius: 10px;
`;
const WeatherPage = () => (
  <WeatherWrapper>
    <Top>
      <WeatherCard />
      <TopRight>Sydney</TopRight>
    </Top>
    <Bottom></Bottom>
  </WeatherWrapper>
);

export default WeatherPage;
