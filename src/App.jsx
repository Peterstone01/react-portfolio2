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


// import Hero from './components/Hero';
// import About from './components/About';
// import Projects from './components/Projects';
// import Experience from './components/Experience';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="scroll-smooth font-sans bg-gray-50 text-gray-900">
//       <Hero />
//       <About />
//       <Projects />
//       <Experience />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;
