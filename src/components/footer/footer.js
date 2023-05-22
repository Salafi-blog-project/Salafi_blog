import React from "react";
import styled from "styled-components";

const FooterSection = ({ subscribe, content }) => {
  return (
    <FooterContainer>
      <div className="text-white font-bold text-lg">{subscribe}</div>
      <div className="text-white text-base font-normal">{content}</div>
      <FormButtonContainer>
        <div>
          <input
            type="text"
            className="p-2 rounded-l focus:outline-none"
            placeholder="Enter your email"
          />
        </div>
        <div className="cursor-pointer bg-green-300 p-2 px-5 rounded-r">
          Subscribe
        </div>
      </FormButtonContainer>
    </FooterContainer>
  );
};

export default FooterSection;

const FooterContainer = styled.div`
  background-color: #000080;
  width: 100vw;
  height: 40vh;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 480px) {
    width: 85%;
  }
`;

const FormButtonContainer = styled.div`
  display: flex;
  padding-top: 3rem;

  @media (max-width: 480px) {
  }
`;
