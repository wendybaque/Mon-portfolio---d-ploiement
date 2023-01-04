import React from "react";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Section from "./components/Section";

import "./App.css";
import Navbar from "./components/Navbar";

function Home() {
  return (
    <div className="App bg-slate-50">
      <Navbar />
      <Hero />
      <Intro />
      <Section/>
      <About />
      <Section />
      <Skills />
      <Section />
      <ProjectList />
      <Section />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;