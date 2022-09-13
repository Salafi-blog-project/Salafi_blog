import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <NavBarContainer>
      <Link to="/" className="text-white">
        SALAFI BLOG
      </Link>
      <ul className="flex gap-x-10 text-white">
        <li>Aqeedah</li>
        <li>Methodology</li>
        <li>Hadith</li>
        <li>Tafsir</li>
        <Link to="/tutorials">About</Link>
        <Link to="/subscribe" className=" w-22 rounded-md cursor-pointer h-7 px-2 bg-slate-500">Subscribe</Link>
      </ul>
    </NavBarContainer>
  );
};

export default NavBar;

const NavBarContainer = styled.div`
display:flex;
justify-content:space-between;
padding:1rem;
`