import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/color";

const FooterSection = ({ subscribe, content }) => {
  return (
    <FooterContainer>
      <div className="text-white font-bold text-lg	">{subscribe}</div>
      <div className="text-white text-base font-normal">{content}</div>
      <FormButtonContainer>
        <div>
          <input type="text" className="p-2 rounded-l" />
        </div>
        <div className="cursor-pointer bg-green-300 p-2 px-5 rounded-r">
          subscribe
        </div>
      </FormButtonContainer>
    </FooterContainer>
  );
};

export default FooterSection;

const FooterContainer = styled.div`
  background-color: ${colors.deepblue};
  width: 60vw;
  height: 40vh;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FormButtonContainer = styled.div`
  display: flex;
  padding-top: 3rem;
`;
