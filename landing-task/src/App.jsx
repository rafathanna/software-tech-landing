import Navbar from "./components/1-Navbar/Navbar";
import Hero from "./components/2-Hero/Hero";
import Services from "./components/3-Services/Services";
import Projects from "./components/4-Projects/Projects";
import Contact from "./components/5-Contct-Us/Contact";
import Footer from "./components/6-Footer/Footer";
import "./Styles/global.css";
import "./Styles/variables.css";
import { useEffect } from "react";

export default function App() {



 

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );

}