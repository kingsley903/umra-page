import React from "react";

import "./index.css";
import { Section } from "./components/HeroSection";
import { Frame2 } from "./components/Frame2Section";
import { Frame3 } from "./components/Frame3Section";
import { Frame4 } from "./components/Frame4Section";
import { Frame5 } from "./components/Frame5Section";

function App() {
  return (
    <div>
      <Section />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />


    </div>
  );
}

export default App;
