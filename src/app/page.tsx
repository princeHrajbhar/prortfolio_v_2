// src/pages/index.tsx or src/app/page.tsx (if using the new App Router in Next.js 13+)

"use client";
import Image from "next/image";
import Navbar from "./components/Navbar"; 
import Background from "./components/Background";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Project from "./components/Projects";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Form from "./components/Form";

export default function Home() {
  return (
    <>
      <Navbar />
      <Background />
      <Hero />
      <Skills />
      <Team />
      <Project />
      <Contact />
      <Form />
      <Footer />
    </>
  );
}
