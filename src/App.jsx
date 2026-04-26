import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

export default function Portfolio() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>    
          <Route
            index
            element={
              <>
                <Hero />
                <Footer />
              </>
            }
          />
          <Route path="skills" element={<Skills />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}
