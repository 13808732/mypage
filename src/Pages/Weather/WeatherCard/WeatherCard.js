/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Axios from "axios";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  border: white 1px solid;
  border-radius: 10px;
`;

const Temperature = styled.div``;
const Climate = styled.div``;
const Bottom = styled.div``;
const Humidity = styled.div``;
const Wind = styled.div``;

const API_key = "7a5511e38f3f7cde296243ec83e7af91";

const WeatherCard = (props) => {
  const city = props.city ? props.city : "Sydney";
  const [weatherData, setWeatherData] = useState({});
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric&country=AU`;
  const {
    time,
    temp,
    temp_max,
    temp_min,
    humidity,
    description,
    windSpeed,
    sunrise,
    sunset,
    iconURL,
  } = weatherData;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const { data } = await Axios.get(api);
    setWeatherData(formatWeatherData(data));
  }, [city]);

  const formatWeatherData = (apiResponse) => {
    const { temp, temp_max, temp_min, humidity } = apiResponse.main;
    const { description, icon } = apiResponse.weather[0];
    const iconURL = `openweathermap.org/img/wn/${icon}@2x.png`;
    const windSpeed = apiResponse.wind.speed;
    const { sunrise, sunset } = apiResponse.sys;
    const time = new Date(apiResponse.coord.dt).toLocaleTimeString();

    return {
      time,
      temp,
      temp_max,
      temp_min,
      humidity,
      description,
      windSpeed,
      sunrise,
      sunset,
      iconURL,
    };
  };
  return (
    <>
      <Wrapper>
        <Temperature>{temp}&#8451;</Temperature>
      </Wrapper>
    </>
  );
};

export default WeatherCard;
