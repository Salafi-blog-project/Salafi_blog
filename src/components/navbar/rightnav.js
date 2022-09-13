import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const RightNavBar = () => {
  return (
    <Ul className="flex gap-x-10 text-white">
      <li>Aqeedah</li>
      <li>Methodology</li>
      <li>Hadith</li>
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

//   @media (min-width: 480px) {
//     flex-flow:column nowrap;
//     list-style:none;

//  }

//   @media (min-width: 880px) {
//     flex-flow:row nowrap;
//     list-style:none;
//  }
//   @media (min-width: 1024px) {
//     flex-flow:row nowrap;
//  }

`
