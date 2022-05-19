import React from "react";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Toggle from "./components/Toggle";
import "./App.css";

function Home() {
  return (
    <div className="App">
      {/* <Toggle /> */}
      <Intro />
      <About />
      <Skills />
      <ProjectList />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;