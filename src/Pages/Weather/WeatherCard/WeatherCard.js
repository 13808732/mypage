import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  text-align: center;
  margin-top: 20px;
  border: white 2px solid;
  &:hover {
    box-shadow: 5px 5px 5px black;
    margin-top: 15px;
    margin-bottom: 5px;
  }
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
`;
const Temperature = styled.div`
  font-size: 7rem;
`;
const Climate = styled.div`
  margin: 0 auto;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  font-weight: 400;
`;
const Humidity = styled.div`
  width: 30%;
  span {
    display: block;
    margin-bottom: 5px;
  }
`;
const Wind = styled.div`
  width: 30% auto;
  span {
    display: block;
    margin-bottom: 5px;
  }
`;

const WeatherCard = () => (
  <Wrapper>
    <Top>
      <Temperature>12˚</Temperature>
      <Climate>CLOUDY</Climate>
    </Top>
    <Bottom>
      <Humidity>
        <span>HUMIDITY</span>
        <span>64%</span>
      </Humidity>
      <span style={{ fontSize: "2rem" }}>|</span>
      <Wind>
        <span>WIND</span>
        <span>12 K/M</span>
      </Wind>
    </Bottom>
  </Wrapper>
);

export default WeatherCard;
