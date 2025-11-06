// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import patronumLogo from '../assets/Plogo.png'; // Update path if needed

const tags = [
    "Realtime & WebRTC", "Computer Vision & AI",
    "APIs & Platform", "Headless Commerce", "Security & SRE"
];

// Animation variants for children elements
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const Welcome = () => {
  return (
    <section id="about" className="relative py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* The main floating glass panel */}
        <motion.div 
          className="relative rounded-3xl p-[1px] bg-gradient-to-br from-purple-500/40 via-blue-500/40 to-purple-500/40 [background-size:200%_100%] animate-border-shimmer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="relative bg-slate-950/60 backdrop-blur-xl rounded-[23px] w-full h-full p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              
              {/* Left Column: Logo */}
              <div className="flex flex-col items-center justify-center text-center lg:col-span-1">
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow effect behind logo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-blue-500/30 to-cyan-500/30 blur-2xl group-hover:blur-3xl transition-all duration-300 opacity-60 group-hover:opacity-100" />

                  {/* Logo container */}
                  <div className="relative bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 group-hover:border-purple-400/30 transition-all duration-300">
                    <img
                      src={patronumLogo}
                      alt="PatronumX Logo"
                      className="w-32 h-32 object-contain drop-shadow-2xl"
                    />
                  </div>

                  {/* Decorative corner accents */}
                  <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-purple-400/50 rounded-tl-lg" />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-cyan-400/50 rounded-br-lg" />
                </motion.div>
              </div>

              {/* Right Column: Text Content */}
              <div className="lg:col-span-2">
                <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Welcome to PatronumX — Unified Tech House
                </h1>
                
                <p className="mt-6 text-base md:text-lg text-slate-300 leading-relaxed">
                  PatronumX is a newly founded <strong className="font-semibold text-purple-300">technology company</strong> backed by a team with <strong className="font-semibold text-purple-300">4+ years of experience</strong> delivering production-grade products. We build future-ready solutions across <strong className="font-semibold text-purple-300">AI, Web & App Development, Digital Marketing</strong>, and enterprise <strong className="font-semibold text-purple-300">ERP/CRM</strong> systems—designed for protection, precision and performance.
                </p>
                
                {/* Decorative Divider */}
                <div className="my-6 h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

                <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                  As a leading software house in Pakistan, our developers have designed <strong className="font-semibold text-purple-300">100+ websites</strong> and modern applications for clients worldwide. We specialize in building secure APIs, cloud infrastructure, realtime data pipelines, and commerce integrations that power modern digital businesses.
                </p>

                {/* Tags/Chips */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {tags.map((tag) => (
                    <motion.span 
                      key={tag}
                      variants={itemVariants}
                      whileHover={{ y: -4, scale: 1.05, filter: 'brightness(1.2)' }}
                      className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm font-medium text-slate-300 cursor-default transition-all"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Welcome;