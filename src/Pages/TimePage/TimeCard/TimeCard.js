import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex: 0 0 50%;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

const ReusableSize = styled.div`
  font-size: 1rem;
  height: 2rem;
  line-height: 2rem;
  width: 12rem;
`;

const Position = styled(ReusableSize)`
  background-color: black;
  color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const DateWrapper = styled(ReusableSize)`
  background-color: rgb(255, 115, 24);
  color: white;
`;

const TimeWrapper = styled(ReusableSize)`
  display: flex;
  justify-content: space-evenly;
  background-color: orange;
  height: 6rem;
  align-items: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Square = styled(ReusableSize)`
  background-color: rgb(255, 115, 24);
  width: 2rem;
  border: 1px solid white;
`;

const TimeCard = (props) => {
  const { position, day, month, date, year, hour, minute, second } = props;
  return (
    <CardContainer>
      <Position>{position || "Sydney"}</Position>
      <DateWrapper>
        {day} {month} {date || "today"} {year}
      </DateWrapper>
      <TimeWrapper>
        <Square>{hour || "00"}</Square>
        <span>:</span>
        <Square>{minute || "00"}</Square>
        <span>:</span>
        <Square>{second || "00"}</Square>
      </TimeWrapper>
    </CardContainer>
  );
};

export default TimeCard;
