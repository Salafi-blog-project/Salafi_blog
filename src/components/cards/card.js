import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import Global from "../../global";

const Card = ({ image, title, date, author, content, id }) => {
  return (
    <CardComponent>
      <DetailsContainer className="p-5">
        <div className="flex justify-between gap-2 w-full">
          <Link to={`/blog/${id}`} className="font-bold">
            {title}
          </Link>
          <div className="">{date} </div>
        </div>
        <div>
          <ReactMarkdown children={content} />
          <div>written by: {author} </div>
        </div>
      </DetailsContainer>
      <ImageContainer className="">
        <img src={image} alt="" />
      </ImageContainer>
    </CardComponent>
  );
};

export default Card;

const CardComponent = styled.div`
  // border-top: 0.1rem solid #ebf2fe;
  // width: 60%;
  // height: 20vh;
  // display: flex;

  @media (min-width: 320px) {
    // background-color: blue;
    width: 100%;
  margin: 2rem 0rem 2rem 0rem;
   border-top: 0.1rem solid #ebf2fe;
  }

  @media (min-width: 640px) {
    background-color: green;
  }

  @media (min-width: 1024px) {
    background-color: brown;
  }
`;

const DetailsContainer = styled.div`
  @media (min-width: 320px) {
    width: 70%;
  }

  @media (min-width: 640px) {
  }

  @media (min-width: 1024px) {
  }
`;

const ImageContainer = styled.div`
  @media (min-width: 320px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 640px) {
  }

  @media (min-width: 1024px) {
  }
`;
