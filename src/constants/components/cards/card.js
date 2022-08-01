import React from "react";
import styled from "styled-components";
import { colors } from "../../color ";

const Card = () => {
  return (
    <CardComponent>
      <DetailsContainer className="">
        <div className="flex ">
          <div>Design tools</div>
          <div>AUGust 13, 2021 </div>
        </div>
        <div>
          10 Hilarious Cartoons That Depict Real-Life Problems of Programmers
        </div>
        <div>
          Redefined the user acquisition and redesigned the onboarding
          experience, all within 3 working weeks.
        </div>
      </DetailsContainer>

      <div>2</div>
    </CardComponent>
  );
};

export default Card;

const CardComponent = styled.div`
  width: 70vw;
  height: 20vh;
  display: flex;
  padding: 10rem;
`;

const DetailsContainer = styled.div`
  background-color: ${colors.deepblue};
`;
