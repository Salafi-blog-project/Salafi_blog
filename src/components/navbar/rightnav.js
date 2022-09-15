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

  @media (max-width: 880px) {
    flex-flow: column nowrap;
    justify-content: space-between;
    position: fixed;
    top: 0.3rem;
    right: 0;
    height: 50%;
    width: 100%;
    background-color: #232E52;
    padding: 3rem 0rem 3rem 0rem;
    border-radius:0.5rem;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    text-align: center;
    transition: transform 0.3s ease-in-out;
  }
`;
