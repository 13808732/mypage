import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  text-align: center;
  margin-top: 20px;
  border: white 2px solid;
  box-shadow: 5px 5px 5px black;
  margin-top: 15px;
  margin-bottom: 5px;

  ${(props) =>
    ({
      main: css`
        width: 200px;
        height: 200ps;
      `,
      sub: css`
        width: 100px;
        height: 100px;
      `,
    }[props.size])}
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
`;
const Temperature = styled.div`
  ${(props) =>
    ({
      main: css`
        font-size: 7rem;
      `,
      sub: css`
        font-size: 2rem;
      `,
    }[props.size])}
`;
const Climate = styled.div`
  margin: 0 auto;
  ${(props) =>
    ({
      main: css`
        font-size: 1rem;
      `,
      sub: css`
        font-size: 0.5rem;
      `,
    }[props.size])}
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  font-weight: 400;
  ${(props) =>
    ({
      main: css`
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
        font-weight: 400;
      `,
      sub: css`
        display: none;
      `,
    }[props.size])}
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

const WeatherCard = (props) => {
  return (
    <Wrapper size={props.size}>
      <Top>
        <Temperature size={props.size}>12˚</Temperature>
        <Climate size={props.size}>CLOUDY</Climate>
      </Top>
      <Bottom size={props.size}>
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
};

export default WeatherCard;
