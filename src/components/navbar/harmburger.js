import React, { useState } from "react";
import styled from "styled-components";
import RightNavBar from "./rightnav";

const HarmBurger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledHarmBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledHarmBurger>
      <RightNavBar open={open} />
    </>
  );
};

export default HarmBurger;

const StyledHarmBurger = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  position: fixed;
  top: 1.5rem;
  right: 3.5rem;
  z-index: 20;
  display: none;

  @media (max-width: 880px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.3rem;
    background-color: ${({ open }) => (open ? "#fff" : "black")};
    border-radius: 0.3rem;
    transform-origin: 0.3rem;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
