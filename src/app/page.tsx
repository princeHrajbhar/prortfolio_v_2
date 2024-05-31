"use client"
import Image from "next/image";
import Navbar from "./components/Navbar"; 
import Background from "./components/Background";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Project from "./components/Projects";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Form from "./components/Form"
// import SendEmailForm from "../../pages/index";


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
      <Form/>
      {/* <SendEmailForm/> */}
      <Footer />
    </>
  );
}
