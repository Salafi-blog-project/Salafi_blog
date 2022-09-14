import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const RightNavBar = ({ open }) => {
  return (
    <Ul open={open} className=" text-white">
      <li>Aqeedah</li>
      <li>Methodology</li>
      <li>Tafsir</li>
      <Link to="/tutorials">About</Link>
      <Link
        to="/subscribe"
        className=" w-22 rounded-md cursor-pointer h-7 px-2 bg-slate-500"
      >
        Subscribe
      </Link>
    </Ul>
  );
};

export default RightNavBar;

const Ul = styled.div`
  list-style: none;
  display: flex;
  // flex-flow: row-nowrap;
  justify-content: space-between;
  width:70%;

  //   @media (max-width: 480px) {
  //     flex-flow:column nowrap;
  //  }

  @media (max-width: 880px) {
    flex-flow: column nowrap;
    justify-content: space-between;
    position: fixed;
    top: 1.3rem;
    right: 0;
    height: 50%;
    width: 6rem;
    // background-color: green;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    padding-top: 4rem;
    transition: transform 0.3s ease-in-out;
  }

  //   @media (max-width: 1024px) {
  //     flex-flow:row nowrap;
  //  }
`;
