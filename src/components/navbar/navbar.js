import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HarmBurger from "./harmburger";

const NavBar = () => {
  return (
    <NavBarContainer>
      <Link to="/" className="text-black text-2xl font-extrabold">
        SALAFI BLOG
      </Link>
      <HarmBurger />
    </NavBarContainer>
  );
};

export default NavBar;

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  width: 85%;
`;
