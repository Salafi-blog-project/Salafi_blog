import React from "react";
import styled from "styled-components";
import RightNavBar from "./rightnav";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <NavBarContainer>
      <Link to="/" className="text-white">
        SALAFI BLOG
      </Link>
     <RightNavBar/>
    </NavBarContainer>
  );
};

export default NavBar;

const NavBarContainer = styled.div`
display:flex;
justify-content:space-between;
padding:1rem;

// @media (min-width: 480px) {
//      flex-flow:column nowrap;
//   }
//   @media (min-width: 880px) {
//     flex-flow:row nowrap;
//  }
//   @media (min-width: 1024px) {
//     flex-flow:row nowrap;
//  }

`