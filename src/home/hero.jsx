// src/home/hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
      {/* Animated background blobs - Reduced size */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.15, 1, 1.15], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-1/4 -right-40 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl"
        />
      </div>

      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-2xl relative z-10 pt-20 pb-16 flex flex-col items-center justify-center">
        {/* Badge - Reduced size and margin */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-400/20 backdrop-blur-sm mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-xs font-medium text-purple-300">Building the Future Together</span>
        </motion.div>

        {/* Main Headline - Reduced font size and margin */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4"
        >
          <span className="block text-white mb-1.5">Guardians of</span>
          <span className="block text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-purple-600 bg-clip-text drop-shadow-md">
            the Next Generation
          </span>
        </motion.h1>

        {/* Description - Reduced font size and margin */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-4 text-center text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto"
        >
          No more scattered solutions. Find developers, agencies, tools, and opportunities all under one digital house. We bring every tech resource together for you.
        </motion.p>

        {/* CTA Buttons - Reduced padding and margin */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 mt-8 justify-center"
        >
          <Link
            to="/services"
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 shadow-md shadow-purple-500/40 hover:shadow-lg hover:shadow-purple-500/60 hover:scale-105 transition-all duration-300 text-sm"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/about"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 text-sm"
          >
            <span>Learn More</span>
          </Link>
        </motion.div>

        {/* Rating - Reduced size and margin */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-10 flex flex-col items-center"
        >
          <div className="flex items-center gap-2 justify-center">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => {
                const id = `gradStar-${i}`;
                return (
                  <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.104L3.57508 11.6626C2.63463 10.9794 3.11796 9.49182 4.28043 9.49182H8.43387C8.95374 9.49182 9.41448 9.15706 9.57513 8.66264L10.8586 4.71248Z" fill={`url(#${id})`} />
                    <defs><linearGradient id={id} x1="3" y1="4" x2="23" y2="7" gradientUnits="userSpaceOnUse"><stop stopColor="#06b6d4" /><stop offset="1" stopColor="#a855f7" /></linearGradient></defs>
                  </svg>
                );
              })}
            </div>
            <span className="text-sm sm:text-base font-semibold text-white ml-1.5">4.9/5 Rating</span>
          </div>
          <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1.5">
            Trusted by teams and makers worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
}
