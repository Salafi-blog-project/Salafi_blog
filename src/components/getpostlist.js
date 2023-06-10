import React, { useEffect, useState } from "react";
import { db } from "../config/firebase.js";
import { getDocs, collection, addDoc } from "firebase/firestore";
import styled from "styled-components";

const GetPostList = () => {
  const [postList, setPostList] = useState([]);

  const getPostRef = collection(db, "posts");

  const getPostList = async () => {
    try {
      const data = await getDocs(getPostRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPostList(filteredData);
      console.log(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPostList();
  }, []);

  // new form

  const [newFormData, setNewFormData] = useState({
    title: "",
    author: "",
    date: 0,
    content: "",
    isFavourite: false,
  });

  console.log(newFormData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    e.preventDefault();
    setNewFormData((prevNewFormData) => ({
      ...prevNewFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onSubmitPost = async (e) => {
    try {
      e.preventDefault();
      const title = newFormData.title;
      const author = newFormData.author;
      const content = newFormData.content;
      const isFavourite = newFormData.isFavourite;
      const date = newFormData.date;
      await addDoc(getPostRef, {
        title: title,
        author: author,
        content: content,
        isFavourite: isFavourite,
        date: date,
      });
      getPostList();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-gray-200 p-4 mx-auto max-w-5xl sm:mx-0">
      {postList.map((post) => (
        <div className="bg-white p-6 rounded-lg shadow-md space-y-4 mx-auto max-w-2xl sm:w-full">
          <h1
            className={`font-bold text-2xl text-center ${
              post.favourite ? "text-green-500" : "text-red-500"
            }`}
          >
            {post.title}
          </h1>
          <p className="text-gray-600">{post.content}</p>
          <div className="flex justify-between items-center">
            <p className="text-gray-500">Written by: {post.author}</p>
            <p className="text-gray-500">Date: {post.date}</p>
          </div>
          <form className="mx-auto max-w-2xl sm:w-full flex flex-col justify-center items-center">
            <legend className="font-bold text-lg text-center py-2">
              Write your article here
            </legend>
            <InputField>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="title..."
                className="border-2 p-4 rounded-md"
                onChange={handleChange}
                value={newFormData.title}
              />
            </InputField>

            <InputField>
              <label htmlFor="author">Author</label>
              <input
                type="text"
                id="author"
                name="author"
                placeholder="author..."
                className="border-2 p-4 rounded-md"
                onChange={handleChange}
                value={newFormData.author}
              />
            </InputField>

            <InputField>
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                placeholder="date..."
                className="border-2 p-4 rounded-md"
                onChange={handleChange}
                value={newFormData.date}
              />
            </InputField>

            <InputField>
              <label htmlFor="content">Content</label>
              <textarea
                id="content"
                cols="30"
                rows="10"
                name="content"
                placeholder="content"
                className="border-2 p-4 rounded-md"
                onChange={handleChange}
                value={newFormData.content}
              />
            </InputField>
            <InputField>
              <label htmlFor="isFavourite">
                Is this your favourite article
              </label>
              <input
                type="checkbox"
                id="isFavourite"
                name="isFavourite"
                className="border-2 p-4 rounded-md"
                onChange={handleChange}
                value={newFormData.isFavourite}
              />
            </InputField>
            <button
              onClick={onSubmitPost}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Post
            </button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default GetPostList;

const InputField = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
`;
