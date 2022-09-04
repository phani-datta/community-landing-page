import React from "react";
import Drawer from "./components/Drawer/Drawer";
import Nav from "./components/Nav";
import Hero from "./components/Hero/Hero";
import About from "./components/sections/about/About";
import Footer from "./components/Footer";

function App() {
  return (
    <Drawer>
      <Nav />
      <Hero />
      <About />
      <Footer />
    </Drawer>
  );
}

export default App;