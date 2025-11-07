// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import patronumLogo from '../assets/Plogo.png'; // Update path if needed

const tags = [
    "Realtime & WebRTC", "Computer Vision & AI",
    "APIs & Platform", "Headless Commerce", "Security & SRE"
];

const itemVariants = {
  hidden: { y: 15, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 10 } },
};

const Welcome = () => {
  return (
    <section id="about" className="relative py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <motion.div 
          className="relative rounded-2xl p-[1px] bg-gradient-to-br from-purple-500/40 via-blue-500/40 to-purple-500/40 shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="relative bg-slate-950/70 backdrop-blur-lg rounded-[15px] w-full h-full p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              
              <div className="flex flex-col items-center justify-center text-center lg:col-span-1">
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-blue-500/30 to-cyan-500/30 blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50 group-hover:opacity-90" />
                  <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-5 group-hover:border-purple-400/30 transition-all duration-300">
                    <img
                      src={patronumLogo}
                      alt="PatronumX Logo"
                      className="w-24 h-24 object-contain drop-shadow-xl"
                    />
                  </div>
                  <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-purple-400/60 rounded-tl-md" />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-cyan-400/60 rounded-br-md" />
                </motion.div>
              </div>

              <div className="lg:col-span-2">
                <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  Welcome to PatronumX — Unified Tech House
                </h1>
                
                <p className="mt-4 text-sm md:text-base text-slate-300 leading-relaxed">
                  PatronumX is a new <strong className="font-semibold text-purple-300">technology company</strong> backed by a team with <strong className="font-semibold text-purple-300">4+ years of experience</strong>. We build future-ready solutions across <strong className="font-semibold text-purple-300">AI, Web & App Development, Digital Marketing</strong>, and enterprise <strong className="font-semibold text-purple-300">ERP/CRM</strong> systems.
                </p>
                
                <div className="my-4 h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

                <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                  Our developers have designed <strong className="font-semibold text-purple-300">100+ websites</strong> and modern applications. We specialize in secure APIs, cloud infrastructure, realtime data pipelines, and commerce integrations.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <motion.span 
                      key={tag}
                      variants={itemVariants}
                      whileHover={{ y: -3, scale: 1.05, filter: 'brightness(1.15)' }}
                      className="px-3 py-1.5 bg-slate-800/60 border border-slate-700 rounded-full text-xs font-medium text-slate-300 cursor-default transition-all"
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
