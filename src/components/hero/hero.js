import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/color";
import NavBar from "../navbar/navbar";

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <NavBar />
      <div className="flex justify-center items-center flex-col font-bold	text-white py-5">
        <SmallText1 >
          Insights about the salafi Aqeedah and <br />  Manhaj,  this is Salafiyyah 
        </SmallText1>
      </div>
    </HeroSectionContainer>
  );
};

export default HeroSection;

const HeroSectionContainer = styled.div`
  background-color: ${colors.deepblue};
  width: 95vw;
  height: 50vh;
  border-radius: 0.5rem;
  padding: 3rem;

  @media (max-width: 880px) {
    width: 99%;
  }

  `;
  
  const SmallText1 = styled.div`
  font-size: 1.875rem;


  @media (max-width: 880px) {
  font-size: 1.5rem;
  }
  `;