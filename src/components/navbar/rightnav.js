// import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";

// const RightNavBar = ({ open }) => {
//   return (
//     <Ul open={open} className=" text-white">
//       <li>Aqeedah</li>
//       <li>Methodology</li>
//       <li>Tafsir</li>
//       <Link to="/tutorials">About</Link>
//       <Link
//         to="/subscribe"
//         className=" w-22 rounded-md cursor-pointer h-7 px-2 bg-slate-500"
//       >
//         Subscribe
//       </Link>
//     </Ul>
//   );
// };

// export default RightNavBar;

// const Ul = styled.div`
//   list-style: none;
//   display: flex;
//   // flex-flow: row-nowrap;
//   justify-content: space-between;
//   width:70%;

//   @media (max-width: 880px) {
//     flex-flow: column nowrap;
//     justify-content: space-between;
//     position: fixed;
//     top: 0.3rem;
//     right: 0;
//     height: 50%;
//     width: 100%;
//     background-color: #232E52;
//     padding: 3rem 0rem 3rem 0rem;
//     border-radius:0.5rem;
//     transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
//     text-align: center;
//     transition: transform 0.3s ease-in-out;
//   }
// `;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const RightNavBar = ({ open }) => {
  return (
    <NavContainer open={open}>
      <Ul>
        <li>Aqeedah</li>
        <li>Methodology</li>
        <li>Tafsir</li>
        <li>
          <StyledLink to="/tutorials">About</StyledLink>
        </li>
        <li>
          <StyledLink to="/subscribe">Subscribe</StyledLink>
        </li>
      </Ul>
    </NavContainer>
  );
};

export default RightNavBar;

const NavContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 880px) {
    position: fixed;
    top: 0.3rem;
    right: 0;
    height: 100%;
    width: 100%;
    background-color: black;
    padding: 3rem 0;
    border-radius: 0.5rem;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  li {
    color: green;
    font-weight: bold;
    cursor: pointer;
  }

  @media (max-width: 880px) {
    flex-direction: column;
    gap: 2rem;
    padding: 0rem 0.5rem;
    align-items: start;
    color: white;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #437bfb;
  color: #ffffff;
  border-radius: 0.25rem;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1f4bff;
  }
`;
