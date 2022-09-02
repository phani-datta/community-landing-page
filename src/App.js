import React from "react";
import Drawer from "./components/Drawer";
import Nav from "./components/Nav";
import Hero from "./components/Hero/Hero";
import About from "./components/sections/about/About";

function App() {
  return (
    <Drawer>
      <Nav />
      <Hero />
      <About />
    </Drawer>
  );
}

export default App;