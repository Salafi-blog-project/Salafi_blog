import "./App.css";
import Card from "./constants/components/cards/card";
import image1 from "./assets/room_card.svg";

function App() {
  return (
    <div>
      <Card
        img1={image1}
        subtitle="Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks."
        title="10 Hilarious Cartoons That Depict Real-Life Problems of Programmers"
        date="AUGust 13, 2021"
        name=" Design tools"
      />
    </div>
  );
}

export default App;
