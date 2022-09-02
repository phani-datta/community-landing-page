import React from "react";
import Drawer from "./components/Drawer";
import Nav from "./components/Nav";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <Drawer>
      <Nav />
      <Hero />
      <div></div>
    </Drawer>
  );
}

export default App;