import React from "react";
import { useParams } from "react-router-dom";
import postlist from "../posts.json";

const CardDetails = () => {
  const { slug } = useParams();
  const post = postlist.find((item) => slug === item.id.toString());
  console.log("ONE POST", post);

  return (
    <div>
      <div>{post.title}</div>
      <div>{post.content}</div>
    </div>
  );
};

export default CardDetails;
