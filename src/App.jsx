// src/App.jsx
import React, { useState, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";

// Global Components (Keep these - needed immediately)
import Particles from "./components/Particles";
import Navbar from "./components/Navbar";
import ContactButton from "./components/ContactButton";
import ContactModal from "./components/ContactModal";
import Footer from "./components/Footer";

// Lazy load Home Sections (Below the fold)
const Hero = lazy(() => import("./home/hero.jsx"));
const Welcome = lazy(() => import("./home/Welcome"));
const Features = lazy(() => import("./home/Features"));
const DashboardShowcase = lazy(() => import("./home/Dashboard"));
const ConstellationBenefits = lazy(() => import("./home/Benifits"));
const Tech = lazy(() => import("./home/Technologies"));
const OurServices = lazy(() => import("./home/Services"));
const CtaSection = lazy(() => import("./home/CTA"));

// Lazy load Blog Pages
const Blog = lazy(() => import("./blogs/Blog.jsx"));
const BlogPost = lazy(() => import("./blogs/BlogPost"));

// Lazy load Services
const TechStack = lazy(() => import("./Services/TechStack.jsx"));
const DeliveryLoop = lazy(() => import("./Services/DeliveryLoop.jsx"));

// Lazy load About
const AboutSection = lazy(() => import("./About/AboutSection.jsx"));
const SelectedWinsAndStack = lazy(() => import("./About/SelectedWinsAndStack.jsx"));

// Lazy load Contact
const Contact = lazy(() => import("./Contactpage/Contactpage.jsx"));

// Loading Fallback Component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 bg-white/10 rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
);

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      {/* ===== Global Particle Background (fixed behind everything) ===== */}
      <div
        id="bgParticles"
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ willChange: "auto" }}
      >
        <Particles
          particleColors={["#ffffff"]}
          particleCount={250}
          particleSpread={10}
          speed={0.3}
          particleBaseSize={80}
          moveParticlesOnHover
          alphaParticles
          disableRotation={false}
        />
      </div>

      {/* ===== All App Content lives ABOVE particles ===== */}
      <div className="relative z-10">
        {/* ===== Navbar ===== */}
        <Navbar />

        {/* ===== Routes ===== */}
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Home Sections as Separate Routes */}
            <Route
              path="/"
              element={
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
              }
            />

            {/* Blog Pages */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />

            {/* Services */}
            <Route
              path="/services"
              element={
                <>
                  <TechStack />
                  <DeliveryLoop />
                </>
              }
            />

            {/* About */}
            <Route
              path="/about"
              element={
                <>
                  <AboutSection />
                  <SelectedWinsAndStack />
                </>
              }
            />

            {/* Contact */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>

        {/* ===== Floating Contact Button ===== */}
        <ContactButton onClick={() => setIsContactOpen(true)} />

        {/* ===== Contact Modal ===== */}
        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />

        {/* ===== Footer ===== */}
        <Footer />
      </div>
    </>
  );
}
