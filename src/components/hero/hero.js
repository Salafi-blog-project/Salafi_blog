import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/color";
import NavBar from "../navbar/navbar";

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <NavBar />
      <div className="flex justify-center items-center flex-col font-bold	text-white py-5">
        <div className="text-3xl">
          Insights about my personal and work <br /> life, and the in-betweens
        </div>
      </div>
    </HeroSectionContainer>
  );
};

export default HeroSection;

const HeroSectionContainer = styled.div`
  background-color: ${colors.deepblue};
  width: 90vw;
  height: 50vh;
  border-radius: 0.5rem;
  padding: 3rem;

  @media (max-width: 480px) {
    // background-color: ${colors.deepblue};
    // border-radius: 0.5rem;
    // width: 80%;
  }

  @media (max-width: 880px) {
  }
`;
