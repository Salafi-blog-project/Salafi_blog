import React, { useEffect } from 'react';
import { useState } from "react";
import Card from "../components/cards/card";
import { blogdata } from './blogdata';


const HomePage = () => {
    const [cards, setCard] = useState([]);
    useEffect(()=>{
      setCard(blogdata)
    },[])
    return (
        <div>
          {cards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              img={card.img}
              subtitle={card.subtitle}
              title={card.title}
              date={card.date}
              name={card.name}
            />
          ))}
        </div>
    );
}
 
export default HomePage;