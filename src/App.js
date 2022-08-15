import "./App.css";
import Card from "./components/cards/card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HeroSection from "./components/hero/hero";
import FooterSection from "./components/footer/footer";
import { Room, Dining, Flower } from "../src/components/image";
import CardDetails from "./pages/carddetails";

function App() {
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
    <BrowserRouter>
      <div className="flex justify-center items-center flex-col my-1">
        <HeroSection />
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
        <FooterSection
          subscribe="Subscribe to my blog."
          content="I post fresh content every week."
        />
        <Switch>
          <Route>
            <CardDetails />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
