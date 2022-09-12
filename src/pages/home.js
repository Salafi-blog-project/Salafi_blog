import React, { useEffect } from "react";
import Card from "../components/cards/card";
import postlist from "../posts.json";

const HomePage = () => {
  const excerptList = postlist.map((post) => {
    return post.content.split(" ").slice(0, 10).join(" ");
  });

  return (
    <div>
      {postlist.map((post, i) => (
        <Card
          key={post.id}
          id={post.id}
          image={post.image}
          content={excerptList[i]}
          title={post.title}
          date={post.date}
          author={post.author}
        />
      ))}
    </div>
  );
};

export default HomePage;
