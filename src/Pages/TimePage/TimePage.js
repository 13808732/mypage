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
  //=============这里开始利用hooks============
  const [timeStamp, setTimeStamp] = useState();
  const cb = () => {
    setInterval(() => {
      setTimeStamp(new Date().getTime(), 500);
    });
  };
  useEffect(cb, []);
  //========================================
  const sydney = new Date(timeStamp);
  const beijing = new Date(timeStamp-7200000)
  const bankok = new Date(timeStamp-10800000)
  const newyork = new Date(timeStamp-50400000)
  return (
    <TimeWrapper>
      <TimeCard position="Sydney" d={sydney} />
      <TimeCard position="Beijing" d={beijing} />
      <TimeCard position="Bankok" d={bankok} />
      <TimeCard position="NewYork" d={newyork} />
    </TimeWrapper>
  );
};

export default TimePage;
