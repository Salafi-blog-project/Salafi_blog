import React, { useState } from "react";
import { blogimages } from './blogimages';

const Tutorials = () => {

const [images, setImage] = useState([
  { Image1: Image1 },
  { Image2: Image2 },
  { Image3: Image3 },
  { Image4: Image4 },
])

  return <div>
    {images.map((image) => (
      <div>{image.Image1}</div>
    ))}
  </div>;
};

export default Tutorials;
