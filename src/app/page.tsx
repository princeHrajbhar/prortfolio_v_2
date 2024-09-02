"use client"; // Ensure this component runs on the client side

import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Project from "./components/Projects";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ContactForm from "@/components/contact/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Background />
      <Hero />
      <section id="skills">
        <Skills />
      </section>
      <Team />
      <section id="projects">
        <Project />
      </section>
      <Contact />
      <section id="contact">
        <ContactForm />
      </section>
      <Footer />
    </>
  );
}
