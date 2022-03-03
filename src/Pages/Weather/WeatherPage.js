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
  justify-content: space-around;
  align-items: center;
  margin: 30px auto 0px;
  width: 95%;
  height: 40%;
  background-color: rgba(255, 255, 255, 0.5);
  border: white 1px solid;
  border-radius: 10px;
`;


const WeatherPage = () => {
  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition((pos) => {
  //     let lat = pos.coords.latitude;
  //     let lng = pos.coords.longitude;
  //     console.log(lat, lng);
  //     const timeStamp = new Date().getTime();
  //     const api = axios.create({
  //       baseURL: `http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}lon=${lng}&dt=${timeStamp}&appid=7a5511e38f3f7cde296243ec83e7af91`,
  //     });

  //   });
  // }
  return(
  <WeatherWrapper>
    <Top>
      <WeatherCard size="main" />
      <TopRight>Sydney</TopRight>
    </Top>
    <Bottom>
      <WeatherCard size="sub" />
      <WeatherCard size="sub" />
      <WeatherCard size="sub" />
      <WeatherCard size="sub" />
      <WeatherCard size="sub" />
    </Bottom>
  </WeatherWrapper>
)};

export default WeatherPage;
