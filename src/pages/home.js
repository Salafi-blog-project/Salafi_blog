import React from "react";
import Card from "../components/cards/card";
import postlist from "../posts.json";

const HomePage = () => {
  const excerptList = postlist.map((post) => {
    return post.content.split(" ").slice(0, 20).join(" ");
  });

  console.log(postlist);

  return (
    <div>
      {postlist
        .filter((post) => post.category === "Aqeedah\r")
        .slice(0, 3)
        .map((post, i) => {
          console.log(post);
          return (
            <>
              <div>Aqeedah</div>
              <Card
                key={post.id}
                id={post.id}
                image={post.image}
                content={excerptList[i]}
                title={post.title}
                category={post.category}
                date={post.date}
                author={post.author}
              />
              <div>Manhaj</div>
              <Card
                key={post.id}
                id={post.id}
                image={post.image}
                content={excerptList[i]}
                title={post.title}
                category={post.category}
                date={post.date}
                author={post.author}
              />
              <div>Tarbiyah</div>
              <Card
                key={post.id}
                id={post.id}
                image={post.image}
                content={excerptList[i]}
                title={post.title}
                category={post.category}
                date={post.date}
                author={post.author}
              />
            </>
          );
        })}
    </div>
  );
};

export default HomePage;
