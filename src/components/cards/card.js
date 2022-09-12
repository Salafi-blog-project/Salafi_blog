import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = ({ image, subtitle, title, date, name, content, id }) => {
  return (
    <CardComponent>
      <DetailsContainer className="p-5 md:bg-blue-500 lg:bg-green-500">
        <div className="flex gap-2 py-2">
          <div className="p-2 rounded-md bg-lightblue">{name} </div>
          <div className="p-2">{date} </div>
        </div>
        <div>
          <div className="text-left	py-2 font-bold">{title}</div>
          <div className="text-left	py-2 font-normal">{subtitle}</div>
          <ReactMarkdown children={content} />
          <Link to={`/blog/${id}`}>Read more ...</Link>
        </div>
      </DetailsContainer>
      <div className="py-4">
        <img src={image} alt="" />
      </div>
    </CardComponent>
  );
};

export default Card;

const CardComponent = styled.div`
  border-top: 0.1rem solid #ebf2fe;
  margin: 1rem 0rem 6rem 1rem;
  width: 60vw;
  height: 20vh;
  display: flex;
`;

const DetailsContainer = styled.div`
  width: 70%;
  height: 200px;
`;
