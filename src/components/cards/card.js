import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = ({ image, title, date, author, content, id, category }) => {
  return (
    <CardComponent>
      <DetailsContainer className="p-5">
        <TitleAndDate className="flex justify-between w-full py-2">
          <div className="bg-blue-100 p-2 px-3 rounded font-bold">
            {category}
          </div>
          <div className="py-2">{date} </div>
        </TitleAndDate>
        <div>
          <Link to={`/blog/${id}`} className="font-bold text-3xl">
            {title}
          </Link>
        </div>
        <div>
          <ReactMarkdown children={content} />
          <div>written by: {author} </div>
        </div>
      </DetailsContainer>
      <Image src={image} alt="" />
    </CardComponent>
  );
};

export default Card;

const CardComponent = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 0.1rem solid #ebf2fe;
  padding: 2rem;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;

const DetailsContainer = styled.div`
  width: 38rem;
  margin-right: 20px;
  flex-shrink: 0;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 18rem;
  flex-shrink: 0;
  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const TitleAndDate = styled.div`
  padding-bottom: 1rem;

  @media (max-width: 480px) {
    padding-bottom: 1rem;
  }
`;
