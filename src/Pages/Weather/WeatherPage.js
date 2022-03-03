import React, { useState, useEffect } from "react";
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

const TopLeft = styled.div`
  font-size: 6rem;
  color: white;
  text-shadow: 5px 5px 5px black;
`;

const TopRight = styled.div``;
const Bottom = styled.div`
  margin: 5% auto;
  width: 95%;
  min-height: 285px;
`;

const WeatherPage = () => {
  const [city, setCity] = useState("Sydney");
  const formatCityName = (event) => {
    event.preventDefault();
    const cityName = event.target.elements.cityName.value;
    setCity(cityName.replace(cityName[0], cityName[0].toUpperCase()));
  };

  return (
    <WeatherWrapper>
      <Top>
        <TopLeft>{city}</TopLeft>
        <TopRight>
          <form onSubmit={formatCityName}>
            <input type="text" id="cityName" />
            <button type="submit" value="search">
              Search
            </button>
          </form>
        </TopRight>
      </Top>
      <Bottom>
        <WeatherCard city={city} />
      </Bottom>
    </WeatherWrapper>
  );
};

export default WeatherPage;
