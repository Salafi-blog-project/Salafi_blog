// import React, { useState } from "react";
// import styled from "styled-components";
// import RightNavBar from "./rightnav";

// const HarmBurger = () => {
//   const [open, setOpen] = useState(false);
//   return (
//     <>
//       <StyledHarmBurger open={open} onClick={() => setOpen(!open)}>
//         <div />
//         <div />
//         <div />
//       </StyledHarmBurger>
//       <RightNavBar open={open} />
//     </>
//   );
// };

// export default HarmBurger;

// const StyledHarmBurger = styled.div`
//   width: 2rem;
//   height: 2rem;
//   display: flex;
//   position: fixed;
//   top: 1.5rem;
//   right: 3.5rem;
//   z-index: 20;
//   display: none;

//   @media (max-width: 880px) {
//     display: flex;
//     justify-content: space-around;
//     flex-flow: column nowrap;
//   }

//   div {
//     width: 2rem;
//     height: 0.3rem;
//     background-color: ${({ open }) => (open ? "#fff" : "black")};
//     border-radius: 0.3rem;
//     transform-origin: 0.3rem;
//     transition: all 0.3s linear;

//     &:nth-child(1) {
//       transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
//     }
//     &:nth-child(2) {
//       transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
//       opacity: ${({ open }) => (open ? 0 : 1)};
//     }
//     &:nth-child(3) {
//       transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
//     }
//   }
// `;

import React, { useState } from "react";
import styled from "styled-components";
import RightNavBar from "./rightnav";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <StyledHamburgerMenu open={open} onClick={handleClick}>
        <Bar open={open} />
        <Bar open={open} />
        <Bar open={open} />
      </StyledHamburgerMenu>
      <RightNavBar open={open} />
    </>
  );
};

export default HamburgerMenu;

const StyledHamburgerMenu = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 1.5rem;
  right: 2rem;
  z-index: 20;
  cursor: pointer;

  @media (min-width: 880px) {
    display: none;
  }
`;

const Bar = styled.div`
  width: 2rem;
  height: 0.2rem;
  background-color: ${({ open }) => (open ? "#ffffff" : "#000000")};
  border-radius: 0.1rem;
  transition: background-color 0.3s, transform 0.3s;

  &:not(:last-child) {
    margin-bottom: 0.4rem;
  }

  ${({ open }) =>
    open &&
    `
    &:nth-child(1) {
      transform: translateY(0.6rem) rotate(45deg);
    }

    &:nth-child(2) {
      opacity: 0;
    }

    &:nth-child(3) {
      transform: translateY(-0.6rem) rotate(-45deg);
    }
  `}
`;
