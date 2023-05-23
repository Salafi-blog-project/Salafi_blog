import React from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

const Card = ({ image, title, date, author, content, id, category }) => {
  return (
    <div className="flex flex-col lg:flex-row border-t border-blue-100 p-4 lg:p-6">
      <div className="w-full lg:w-3/5 lg:pr-4">
        <div className="bg-blue-100 p-2 px-3 rounded font-bold mb-2">
          {category}
        </div>
        <h2 className="text-3xl font-bold mb-2">
          <p>{title}</p>
        </h2>
        <div className="mb-2">
          <ReactMarkdown children={content} />
        </div>
        <div className="font-bold mb-2">Written by: {author}</div>
        <div className="text-gray-500">{date}</div>
      </div>
      <div className="w-full lg:w-2/5">
        <Link to={`/blog/${id}`}>
          <img src={image} alt="" className="w-full" />
        </Link>
      </div>
    </div>
  );
};

export default Card;
