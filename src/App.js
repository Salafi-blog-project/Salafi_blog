import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/hero/hero";
import FooterSection from "./components/footer/footer";
import CardDetails from "./pages/carddetails";
import Subscribe from "./pages/subscribe";
import About from "./pages/about";
import HomePage from "./pages/home";
import NavBar from "./components/navbar/navbar";
import SignUpPage from "./components/signup/signup";
import LogInPage from "./components/login/login";

function App() {
  return (
    <div className="flex justify-center items-center flex-col my-1">
      <BrowserRouter>
        <NavBar />
        <HeroSection />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:slug" element={<CardDetails />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<div>test page</div>} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
        </Routes>
        <FooterSection
          subscribe="Subscribe to my blog."
          content="I post fresh content every week."
        />
        {/* <SignUpPage /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
