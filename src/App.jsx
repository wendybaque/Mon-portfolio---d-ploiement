import React from "react";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import SectionContact from "./components/SectionContact";
import SectionSkills from "./components/SectionSkills";
import SectionAbout from "./components/SectionAbout";
import SectionProjects from "./components/SectionProjects";
import SectionWendev from "./components/SectionWendev";
import Navbar from "./components/Navbar";

import "./App.css";
import ButtonTop from "./components/ButtonTop";
import Wendev from "./components/Wendev";

function Home() {
  return (
    <div className="App bg-slate-50">
      <Navbar />
      <Hero />
      <Intro />
      <SectionAbout />
      <About />
      <SectionSkills />
      <Skills />
      <SectionProjects />
      <ProjectList />
      <SectionWendev />
      <Wendev />
      <SectionContact />
      <Contact />
      <ButtonTop />
      <Footer />
    </div>
  );
}

export default Home;