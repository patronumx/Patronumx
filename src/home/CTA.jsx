import React, { useMemo, useState, useCallback } from "react";
import { motion } from "framer-motion";
import ContactModal from "../components/ContactModal";

// Smaller version of random twinkling stars background
const generateStars = (numStars) => {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 1.1 + 0.7}px`, // 0.7px to 1.8px; smaller stars
      delay: `${Math.random() * 1.2}s`,
      duration: `${Math.random() * 1.2 + 1.1}s`, // 1.1s to 2.3s
    });
  }
  return stars;
};

const CtaSection = () => {
  const stars = useMemo(() => generateStars(30), []);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = useCallback((e) => {
    e.preventDefault();
    setModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const handleSubmit = useCallback((data) => {
    // Example: Send data to an API, show toast, etc. Could extend this.
    console.log("Contact form:", data);
  }, []);

  return (
    <section className="relative overflow-hidden py-10 sm:py-14 bg-transparent text-white text-center">
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.34; }
          50% { opacity: 0.9; }
        }
        .animate-star-twinkle {
          animation-name: twinkle;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-direction: alternate;
        }
        .cta-button-gradient {
          background: linear-gradient(to right, #e74c3c, #c0392b);
          box-shadow: 0 2px 8px rgba(231, 76, 60, 0.23);
          transition: all 0.2s;
          font-size: 1rem;
          padding: 0.625rem 2rem !important;
        }
        .cta-button-gradient:hover {
          background: linear-gradient(to right, #c0392b, #e74c3c);
          box-shadow: 0 4px 14px rgba(231, 76, 60, 0.38);
          transform: translateY(-1px);
        }
      `}</style>
      <ContactModal isOpen={modalOpen} onClose={handleCloseModal} onSubmit={handleSubmit} />
      {/* Fewer, smaller stars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full opacity-0 animate-star-twinkle"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      {/* Smaller/flatter gradient blobs */}
      <div className="absolute -left-16 top-1/4 w-40 h-40 bg-purple-600 opacity-15 blur-2xl rounded-full z-0 md:w-60 md:h-60"></div>
      <div className="absolute -right-16 bottom-1/4 w-40 h-40 bg-purple-600 opacity-15 blur-2xl rounded-full z-0 md:w-60 md:h-60"></div>

      {/* Wider content area */}
      <motion.div
        className="w-full max-w-7xl mx-auto px-4 sm:px-8 relative z-10"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center justify-center w-full">
          <p className="font-semibold text-amber-400 mb-2 text-base tracking-wide uppercase">
            Ready to Scale?
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5 w-full bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-white to-cyan-200">
            Transform Your Operations with AI
          </h2>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-8 w-full leading-relaxed">
            Join forward-thinking enterprises leveraging PatronumX to automate workflows, reduce overhead, and drive 10x efficiency.
          </p>
          <button
            type="button"
            className="inline-block px-8 py-3.5 rounded-full font-bold text-white shadow-lg bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 transition-all transform hover:scale-105 hover:shadow-cyan-500/25"
            onClick={handleOpenModal}
          >
            Start Your Transformation
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaSection;