import React from 'react';
import { useState } from "react";
import Card from "../components/cards/card";
import { Room, Dining, Flower } from "../components/image";

const HomePage = () => {

    const [cards, setCard] = useState([
        {
          id: 1,
          name: " Design tools",
          date: "AUGust 13, 2021",
          img: Room,
          title:
            "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
          subtitle:
            "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
        },
        {
          name: " Design tools",
          date: "AUGust 13, 2021",
          img: Dining,
          title:
            "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
          subtitle:
            "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
        },
        {
          name: " Design tools",
          date: "AUGust 13, 2021",
          img: Flower,
          title:
            "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
          subtitle:
            "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
        },
      ]);
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