"use client";

import "./main.css";

import Hero from "./hero/Hero";
import AboutMe from "./aboutMe/AboutMe";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Education from "./education/Education";
import ContactMe from "./contactMe/ContactMe";

export default function Main() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Education />
      <ContactMe />
    </main>
  )
}