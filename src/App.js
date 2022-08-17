import "./App.css";
import Card from "./components/cards/card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HeroSection from "./components/hero/hero";
import FooterSection from "./components/footer/footer";
import { Room, Dining, Flower } from "../src/components/image";
import CardDetails from "./pages/carddetails";
import Subscribe from "./pages/subscribe";
import HomePage from "./pages/home";

function App() {
 

  return (
    <div className="flex justify-center items-center flex-col my-1">
        <BrowserRouter>
        <HeroSection />        
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path="/carddetails" element={<CardDetails />}/>            
          <Route path="/subscribe" element={<Subscribe />}/> 
          <Route path="/test" element={(
            <div>test page</div>
          )}  />
        </Routes>
        <FooterSection
          subscribe="Subscribe to my blog."
          content="I post fresh content every week."
        />
    </BrowserRouter>
      </div>
  );
}

export default App;
