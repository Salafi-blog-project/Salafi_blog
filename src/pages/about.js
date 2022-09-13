import React, { useState } from "react";
import { blogimages } from './blogimages';
// import { Image1, Image2, Image3, Image4 } from "../components/image";

const About = () => {

const [images, setImage] = useState(blogimages)

  return <div>
    {images.map((image) => (
      <div className="">
        <img src={image} alt="image"/>
      </div>
    ))}
  </div>;
};

export default About;
