// import React from "react";
// import styled from "styled-components";
// import { colors } from "../../constants/color";
// import NavBar from "../navbar/navbar";

// const HeroSection = ({
//   title = "Insights about the salafi Aqeedah and Manhaj, this is Salafiyyah",
// }) => {
//   return (
//     <HeroSectionContainer>
//       <NavBar />
//       <div className="flex justify-center items-center flex-col font-bold	text-white py-5">
//         <SmallText1>{title}</SmallText1>
//       </div>
//     </HeroSectionContainer>
//   );
// };

// export default HeroSection;

// const HeroSectionContainer = styled.div`
//   background-color: ${colors.deepblue};
//   width: 95vw;
//   height: 50vh;
//   border-radius: 0.5rem;
//   padding: 3rem;

//   @media (max-width: 880px) {
//     width: 99%;
//   }
// `;

// const SmallText1 = styled.div`
//   font-size: 1.875rem;

//   @media (max-width: 880px) {
//     font-size: 1.5rem;
//   }
// `;

import React from "react";
import styled from "styled-components";
// import NavBar from "../navbar/navbar";

const HeroSection = ({
  title = "Unleash Your Potential in the Digital Age",
  subtitle = "Welcome to our blog, your ultimate destination for all things programming, business, and technology. Explore the latest trends, industry insights, and practical tips to thrive in today's fast-paced digital world,",
}) => {
  return (
    <HeroSectionContainer>
      {/* <NavBar /> */}
      <HeroContent>
        <HeroTitle>{title}</HeroTitle>
        <HeroSubtitle>{subtitle}</HeroSubtitle>
        <HeroButton>Get inspired</HeroButton>
      </HeroContent>
    </HeroSectionContainer>
  );
};

export default HeroSection;

const HeroSectionContainer = styled.div`
  background-color: lightBlue;
  padding: 3rem;
`;

const HeroContent = styled.div`
  text-align: center;
  color: white;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #00008b;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const HeroButton = styled.button`
  background-color: teal;
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 0.75rem 2rem;
  border-radius: 0.25rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #045d5d;
  }
`;
