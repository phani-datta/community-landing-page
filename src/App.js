import React from "react";
import Drawer from "./components/Drawer/Drawer";
import Nav from "./components/Nav";
import Hero from "./components/Hero/Hero";
import About from "./components/sections/about/About";
import Footer from "./components/Footer";
import AboutOwner from "./components/sections/aboutOwner/AboutOwner";
import Groups from "./components/sections/groups/Groups";

function App() {
  return (
    <Drawer>
      <Nav />
      <Hero />
      <About />
      <AboutOwner />
      <Groups />
      <Footer />
    </Drawer>
  );
}

export default App;