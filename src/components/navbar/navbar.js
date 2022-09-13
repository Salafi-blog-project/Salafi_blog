import React from "react";
import styled from "styled-components";
import RightNavBar from "./rightnav";
import { Link } from "react-router-dom";
import HarmBurger from "./harmburger";

const NavBar = () => {
  return (
    <NavBarContainer>
      <Link to="/" className="text-white">
        SALAFI BLOG
      </Link>
      <HarmBurger/>
     <RightNavBar/>
    </NavBarContainer>
  );
};

export default NavBar;

const NavBarContainer = styled.div`
display:flex;
justify-content:space-between;
padding:1rem;
width:85%;

// @media (max-width: 480px) {
//      flex-flow:column nowrap;
//   }
//   @media (max-width: 880px) {
//     flex-flow:row nowrap;
//  }
//   @media (max-width: 1024px) {
//     flex-flow:row nowrap;
//  }

`