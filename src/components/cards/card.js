import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = ({ image, title, date, author, content, id }) => {
  return (
    <CardComponent>
      <DetailsContainer className="p-5">
        <TitleAndDate className="flex justify-between gap-2 w-full">
          <div className="bg-blue-100 p-2 px-3 rounded">
          <Link to={`/blog/${id}`} className="font-bold">
            {title}
          </Link>
          </div>
          <div className="py-2">{date} </div>
        </TitleAndDate>
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
  justify-content: space-between;
  border-top: 0.1rem solid #ebf2fe;
  padding:2rem;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
  }  
`;

const DetailsContainer = styled.div`
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;

const TitleAndDate = styled.div`
  @media (max-width: 480px) {
    padding-bottom: 1rem;
  }

`;
