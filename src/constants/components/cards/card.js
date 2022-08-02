import React from "react";
import styled from "styled-components";
import { colors } from "../../color";

const Card = () => {
  return (
    <CardComponent>
      <DetailsContainer className="p-5">
        <div className="flex justify-between">
          <div>Design tools</div>
          <div>AUGust 13, 2021 </div>
        </div>
        <div className="gap-y-3">
          <div className="text-left	">
            10 Hilarious Cartoons That Depict Real-Life Problems of Programmers
          </div>
          <div className="text-left	">
            Redefined the user acquisition and redesigned the onboarding
            experience, all within 3 working weeks.
          </div>
        </div>
      </DetailsContainer>
      <div>2</div>
    </CardComponent>
  );
};

export default Card;

const CardComponent = styled.div`
  border-bottom: 0.1rem solid;
  width: 70vw;
  height: 20vh;
  display: flex;
`;

const DetailsContainer = styled.div`
  width: 70%;
  height: 200px;
`;
