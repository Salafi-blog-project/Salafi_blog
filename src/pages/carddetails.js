import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import postlist from "../posts.json";
import ReactMarkdown from "react-markdown";

const CardDetails = () => {
  const { slug } = useParams();
  const post = postlist.find((item) => slug === item.id.toString());
  // const history = useHistory();

  // const goBack = () => {
  //   history.goBack();
  // };

  return (
    <DetailContainer>
      <Title>{post.title}</Title>
      <DetailsImageContainer>
        <DetailsImage src={post.image} alt={post.title} />
      </DetailsImageContainer>
      <Content>
        <ReactMarkdown children={post.content} />
      </Content>
      <AuthorInfo>
        Written by: <AuthorName>{post.author}</AuthorName> on{" "}
        <PublishedDate>{post.date}</PublishedDate>
      </AuthorInfo>
      <GoBackButton>Go Back</GoBackButton>
    </DetailContainer>
  );
};

export default CardDetails;

const DetailContainer = styled.div`
  padding: 4rem 8rem;
  margin: 1rem;

  @media (max-width: 480px) {
    padding: 4rem 2rem;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const DetailsImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;

const DetailsImage = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 300px;
  border-radius: 0.5rem;
`;

const Content = styled.div`
  margin-top: 2rem;
  font-size: 1.2rem;
  line-height: 1.6;
`;

const AuthorInfo = styled.div`
  margin-top: 2rem;
  font-size: 1rem;
  font-weight: 500;
`;

const AuthorName = styled.span`
  font-weight: bold;
`;

const PublishedDate = styled.span`
  margin-left: 0.5rem;
  color: #888888;
`;

const GoBackButton = styled.button`
  display: block;
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background-color: #4a5568;
  color: #ffffff;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2d3748;
  }
`;
