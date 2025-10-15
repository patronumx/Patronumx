// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

// The Logo Icon component (no changes needed)
const LogoIcon = () => (
    <motion.svg 
      width="120" 
      height="120" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]"
      whileHover={{ 
        scale: 1.05, 
        filter: 'drop-shadow(0 0 15px rgba(192, 132, 252, 0.7))',
        transition: { duration: 0.3 }
      }}
    >
      <path d="M12 2L2 7V17C2 21 12 23 12 23C12 23 22 21 22 17V7L12 2Z" 
        stroke="rgba(168, 85, 247, 0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke="rgba(192, 132, 252, 0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 23V15" stroke="rgba(168, 85, 247, 0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </motion.svg>
);


const tags = [
    "Broadcast & Overlays", "Realtime & WebRTC", "Computer Vision & AI",
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
              <div className="flex flex-col items-center text-center lg:col-span-1">
                <LogoIcon />
                <h2 className="mt-4 text-3xl font-bold tracking-wider text-white">
                  PATRONUM
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                    X
                  </span>
                </h2>
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
                  As a leading software house in Pakistan, our developers have designed <strong className="font-semibold text-purple-300">100+ websites</strong> and modern applications for clients worldwide. We also specialize in <strong className="font-semibold text-purple-300">Esports broadcast solutions</strong>—reactive overlays, score bugs, observer tools and realtime data pipelines—alongside secure APIs, cloud infrastructure, and commerce integrations.
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