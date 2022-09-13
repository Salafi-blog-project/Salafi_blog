import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/color";
import NavBar from "../navbar/navbar";

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <NavBar />
      <div className="flex justify-center items-center flex-col font-bold	text-white py-5">
        <div className="text-3xl md:flex hidden">
          Insights about my personal and work <br /> life, and the in-betweens
        </div>
      </div>
    </HeroSectionContainer>
  );
};

export default HeroSection;

const HeroSectionContainer = styled.div`

background-color: ${colors.deepblue};
width: 80vw;
height: 40vh;
border-radius: 0.5rem;
padding: 1.5rem;

  // @media (min-width: 480px) {
  //   background-color: ${colors.deepblue};
  //   border-radius: 0.5rem;
  //   width: 80%;
  // }

  @media (min-width: 880px) {
  }

  
  
`;
