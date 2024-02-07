import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import ScrollToTop from "./components/ScrollToTop";

const App = () => {

  return (
    <div className="gradient_bg">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <ScrollToTop />
    </div>
  );
}

export default App