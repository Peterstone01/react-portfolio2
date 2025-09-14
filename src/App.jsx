import React from "react";
import Hero from "./pages/Hero";
import Technoloy from "./pages/Technoloy";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Technoloy />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
