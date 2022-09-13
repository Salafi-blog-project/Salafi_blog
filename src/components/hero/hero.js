import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../constants/color";
import NavBar from "../navbar/navbar";

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <NavBar/>
      <div className="flex justify-center items-center flex-col font-bold	text-white py-5">
        <div className="text-3xl">
          Insights about my personal and work <br/> life, and the in-betweens
        </div>
      </div>
    </HeroSectionContainer>
  );
};

export default HeroSection;

const HeroSectionContainer = styled.div`


  @media (min-width: 320px) {
  }

  @media (min-width: 640px) {
  }

  @media (min-width: 1024px) {
    background-color: ${colors.deepblue};
    width: 80vw;
    height: 40vh;
    border-radius: 0.5rem;
    padding:1.5rem;
  }
`;

// const MiddleContainer = styled.div`
//   width: 50%;
//   display: flex;
//   justify-content: space-between;
// `;
