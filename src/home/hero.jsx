// src/home/hero.jsx
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative bg-transparent overflow-hidden flex items-center"
      style={{ minHeight: "74vh", contentVisibility: "auto" }}
    >
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-16 pb-14 sm:pt-20 sm:pb-16 flex flex-col items-center text-center">
        {/* Small badge, no background chips */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 8, scale: 0.98 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="inline-flex items-center gap-2 mb-4"
        >
          <Sparkles className="w-4 h-4 text-purple-300/90" />
          <span className="text-xs sm:text-sm font-medium tracking-wide text-purple-200/90">
            Building the Future Together
          </span>
        </motion.div>

        {/* Headline — reduced sizes */}
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="leading-tight font-extrabold tracking-tight mb-3
                     text-3xl sm:text-4xl lg:text-5xl"
        >
          <span className="block text-white">Guardians of</span>
          <span className="block text-transparent bg-clip-text
                           bg-gradient-to-r from-cyan-400 via-purple-400 to-purple-600">
            the Next Generation
          </span>
        </motion.h1>

        {/* Description — smaller, tighter line-height */}
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.45, ease: "easeOut" }}
          className="mt-3 text-slate-300/90 max-w-2xl
                     text-sm sm:text-base lg:text-[17px] leading-relaxed"
        >
          No more scattered solutions. Find developers, agencies, tools, and
          opportunities all under one digital house—seamless, simple, and truly
          connected.
        </motion.p>

        {/* CTAs — compact; no backgrounds on secondary */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-8"
        >
          <Link
            to="/services"
            className="group inline-flex items-center justify-center gap-2
                       px-6 py-3 rounded-lg font-semibold text-white
                       bg-gradient-to-r from-purple-500 to-blue-500
                       shadow-lg/30 hover:shadow-lg transition-transform duration-200
                       hover:scale-[1.02] active:scale-[0.99]"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link
            to="/about"
            className="group inline-flex items-center justify-center gap-2
                       px-6 py-3 rounded-lg font-semibold
                       text-slate-100 border border-white/15
                       hover:border-white/25 hover:bg-white/5 transition"
          >
            <span>Learn More</span>
          </Link>
        </motion.div>

        {/* Trust row — smaller, cleaner */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-8 sm:mt-9 flex flex-col items-center"
        >
          <div className="flex items-center gap-2">
            
          
          </div>
        
        </motion.div>
      </div>
    </section>
  );
}
