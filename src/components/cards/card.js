import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  display: flex;
  border-top: 0.1rem solid #ebf2fe;
  padding:2rem;

  // @media (max-width: 480px) {
  //   width: 100%;
  //   margin: 2rem 0rem 2rem 0rem;
  //   flex-direction: column-reverse;
  //   border-top: 0.1rem solid #ebf2fe;
  //   padding:2rem;
  // }

  // @media (min-width: 880px) {
  //   border-top: 0.1rem solid #ebf2fe;
  //   padding:2rem;
  // }


  
`;

const DetailsContainer = styled.div`
  @media (min-width: 480px) {
    width: 70%;
  }

  @media (min-width: 880px) {
  }

  @media (min-width: 1024px) {
  }
`;

const ImageContainer = styled.div`
  @media (min-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 880px) {
  }

  @media (min-width: 1024px) {
  }
`;
