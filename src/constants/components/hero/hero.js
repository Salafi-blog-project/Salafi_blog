import React from "react";
import styled from "styled-components";
import { colors } from "../../color";

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <div>1</div>
      <div>2</div>
    </HeroSectionContainer>
  );
};

export default HeroSection;

const HeroSectionContainer = styled.div`
  background-color: ${colors.deepblue};
  width: 60vw;
  height: 20vh;
`;
