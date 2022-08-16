import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/color";

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <div className="flex justify-between p-7">
        <div className="text-white">Salafi Blog</div>
        <MiddleContainer className="text-white">
          <div>Design Tools</div>
          <div>Daily Updates</div>
          <div>Tutorials</div>
          <div>Library</div>
        </MiddleContainer>
        <div className="text-white w-22 rounded-md cursor-pointer h-7 px-2 bg-slate-500">
          Subscribe
        </div>
      </div>
      <div className="flex justify-center items-center flex-col font-bold	text-white ">
        <div className="text-left	">As-Salaam Alaikum</div>
        <div className="text-3xl">
          Insights about my personal and work <br/> life, and the in-betweens
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
`;

const MiddleContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;
