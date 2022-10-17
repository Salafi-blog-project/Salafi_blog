import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import postlist from "../posts.json";
import ReactMarkdown from "react-markdown";

const CardDetails = () => {
  const { slug } = useParams();
  const post = postlist.find((item) => slug === item.id.toString());
  console.log("ONE POST", post);

  return (
    <DetailContainer>
      <div className="bg-blue-100 rounded text-center text-xl font-bold py-3">
        {post.title}
      </div>
      <DetailsImageContainer>
        <DetailsImage src={post.image} />
      </DetailsImageContainer>
      <ReactMarkdown children={post.content} />
      <div className="py-4">
        written by:
        <span className="text-base font-medium"> {post.author}</span> on
        <span>{post.date}</span>
      </div>
    </DetailContainer>
  );
};

export default CardDetails;

const DetailContainer = styled.div`
  padding: 4rem 10rem 4rem 8rem;
  margin: 1rem;

  @media (max-width: 480px) {
    padding: 4rem 2rem 4rem 4rem;
  }
`;

const DetailsImage = styled.img`
  object-fit: cover;
  width: 70vw;
  height: 20vh;
`;

const DetailsImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0rem 1rem 0rem;
`;
