// src/App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";

// Global Components
import Particles from "./components/Particles";
import Navbar from "./components/Navbar";
import ContactButton from "./components/ContactButton";
import ContactModal from "./components/ContactModal";

// Home Sections
import Hero from "./home/Hero";
import Welcome from "./home/Welcome";
import Features from "./home/Features";
import DashboardShowcase from "./home/Dashboard";
import ConstellationBenefits from "./home/Benifits";
import Tech from "./home/Technologies";
import OurServices from "./home/Services";
import CtaSection from "./home/CTA";

// Blog
import Blog from "./blogs/Blog.jsx";
import BlogPost from "./blogs/BlogPost";


//Services
import TechStack from "./Services/TechStack.jsx";
import DeliveryLoop from "./Services/DeliveryLoop.jsx";


//About
import AboutSection from "./About/AboutSection.jsx";
import SelectedWinsAndStack from "./About/SelectedWinsAndStack.jsx";

// Contact
import Contact from "./Contactpage/Contactpage.jsx";

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      {/* ===== Background Particles ===== */}
      <div
        id="bgParticles"
        className="fixed inset-0 z-0 pointer-events-none w-screen h-screen"
      >
        <Particles
          particleColors={["#ffffff"]}
          particleCount={400}
          particleSpread={10}
          speed={0.3}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles
          disableRotation={false}
        />
      </div>

      {/* ===== Navbar ===== */}
      <Navbar />

      {/* ===== Routes ===== */}
      <Routes>
        {/* Home Sections as Separate Routes */}
        <Route path="/" element={
          <>
            <Hero />
            <Welcome />
            <Features />
            <DashboardShowcase />
            <ConstellationBenefits />
            <Tech />
            <OurServices />
            <CtaSection />
          </>
        } />

        {/* Blog Pages */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        {/* Services */}
        <Route path="/services" element={
          <>
            <TechStack />
            <DeliveryLoop />
          </>
        } />



        {/* Services */}
        <Route path="/about" element={
          <>
           <AboutSection/>
           <SelectedWinsAndStack/>
          </>
        } />



  {/* Contactpage*/}
  <Route path="/contact" element={
          <>
           <Contact/>

          </>
        } />


      </Routes>

      {/* ===== Floating Contact Button ===== */}
      <ContactButton onClick={() => setIsContactOpen(true)} />

      {/* ===== Contact Modal ===== */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
