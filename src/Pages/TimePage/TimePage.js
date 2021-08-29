import React, { useState, useEffect } from "react";
import styled from "styled-components";
import bg from "../../assets/images/weatherBG.png";
import TimeCard from "./TimeCard";

const TimeWrapper = styled.div`
  position: relative;
  width: 80vw;
  height: 80vh;
  max-height: 450px;
  max-width: 945px;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row wrap;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const TimePage = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = days[new Date().getDay()];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[new Date().getMonth()];
  const date = new Date().getDate();
  const year = new Date().getFullYear();
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  //=============这里开始利用hooks============
  const [second, setSecond] = useState();
  const cb = () => {
    setInterval(() => {
      setSecond(new Date().getSeconds(), 500);
    });
  };
  useEffect(cb, [second]);
  //========================================
  return (
    <TimeWrapper>
      <TimeCard
        position="Sydney"
        day={day}
        month={month}
        date={date}
        year={year}
        hour={hour}
        minute={minute}
        second={second}
      />
      <TimeCard
        position="Beijing"
        day={day}
        month={month}
        date={date}
        year={year}
        hour={hour - 2}
        minute={minute}
        second={second}
      />
      <TimeCard
        position="Bankok"
        day={day}
        month={month}
        date={date}
        year={year}
        hour={hour - 3}
        minute={minute}
        second={second}
      />
      <TimeCard
        position="NewYork"
        day={day}
        month={month}
        date={date}
        year={year}
        hour={hour - 14}
        minute={minute}
        second={second}
      />
    </TimeWrapper>
  );
};

export default TimePage;
