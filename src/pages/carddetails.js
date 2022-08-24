import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import image_one from "../assets/details_image.png";
import image_two from "../assets/details_image2.png";
import { blogdata } from "./blogdata";

const CardDetails = () => {
  const {slug} = useParams();
  const [blog, setBlog]=useState([])

  useEffect(()=>{
    const item = blogdata.filter((it)=> it.title === slug)
    setBlog(item)
    console.log(blog);
  },[])

  return (
    <div>
      <div className=" p-4">
        <img src={image_one} alt="img1" />
      </div>
      <div className="p-10 px-48">
        <p>
          Design comps, layouts, wireframes—will your clients accept that you go
          about things the facile way? Authorities in our business will tell in
          no uncertain terms that Lorem Ipsum is that huge, huge no no to
          forswear forever.
        </p>

        <p className="py-3">
          Not so fast, I'd say, there are some redeeming factors in favor of
          greeking text, as its use is merely the symptom of a worse problem to
          take into consideration.
        </p>
        <p>
          The toppings you may chose for that TV dinner pizza slice when you
          forgot to shop for foods, the paint you may slap on your face to
          impress the new boss is your business. But what about your daily
          bread?
        </p>
      </div>
      <div flex className="flex justify-center items-center">
        <img src={image_two} alt="img2" />
      </div>
      <div className="py-4 px-48">
        <p className="py-3">
          The toppings you may chose for that TV dinner pizza slice when you
          forgot to shop for foods, the paint you may slap on your face to
          impress the new boss is your business. But what about your daily
          bread? Not so fast, I'd say, there are some redeeming factors in favor
          of greeking text, as its use is merely the symptom of a worse problem
          to take into consideration.
        </p>
        <p>
          Design comps, layouts, wireframes—will your clients accept that you go
          about things the facile way? Authorities in our business will tell in
          no uncertain terms that Lorem Ipsum is that huge, huge no no to
          forswear forever.
        </p>
      </div>
    </div>
  );
};

export default CardDetails;
