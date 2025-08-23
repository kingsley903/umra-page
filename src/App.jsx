import React from "react";

import "./index.css";
import Section from "./components/HeroSection";
import Frame6 from "./components/Frame6section";
import Frame7 from "./components/Frame7";
import Frame8 from "./components/Frame8";
import Frame9 from "./components/Frame9";
import Frame10 from "./components/Frame10";
import FAQSection from "./components/Frame11";
import Frame12 from "./components/Frame12";
import Footer from "./components/Frame13";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Section />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <FAQSection />
      <Frame12 />
      <Footer />
    </div>
  );
}

export default App;
