import React from "react";
import styled from "styled-components";
import bg from "../../assets/images/weatherBG.png";

const AboutWrapper = styled.div`
  position: relative;
  width: 80vw;
  height: 80vh;
  max-height: 450px;
  max-width: 945px;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const About = () => <AboutWrapper></AboutWrapper>;

export default About;
