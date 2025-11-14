// src/home/Welcome.jsx
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import patronumLogo from "../assets/Plogo.png"; // adjust path if needed

const tags = [
  "Realtime & WebRTC",
  "Computer Vision & AI",
  "APIs & Platform",
  "Headless Commerce",
  "Security & SRE",
];

export default function Welcome() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    reduceMotion
      ? { initial: false, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.45, ease: "easeOut", delay },
        };

  return (
    <section id="about" className="relative z-10 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* OUTER FRAME — darker gradient */}
        <motion.div
          className="
            relative rounded-3xl p-[1px]
            bg-gradient-to-br
            from-[#2a175a]/70 via-[#0f1230]/70 to-[#081026]/70
            [background-size:200%_100%] animate-border-shimmer
          "
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          {/* Subtle dark overlay to deepen the card */}
          <div className="rounded-[22px] bg-black/20">
            {/* INNER — transparent, just a soft border */}
            <div className="rounded-[22px] border border-white/10 px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-center">
                {/* Logo card — with border + corner ticks preserved */}
                <motion.div
                  {...fadeUp(0)}
                  // Added 'ml-4' and 'lg:ml-8' to shift logo slightly right on all and even more on large screens
                  className="flex items-start lg:items-center justify-center lg:justify-start ml-8 lg:ml-16
                  "
                >
                  <div className="relative group">
                    {/* card */}
                    <div className="relative rounded-2xl p-4 sm:p-5 ring-1 ring-white/10">
                      <img
                        src={patronumLogo}
                        alt="PatronumX Logo"
                        className="w-24 h-24 sm:w-28 sm:h-28 object-contain drop-shadow-xl"
                      />
                    </div>

                    {/* corner ticks (keep the look) */}
                    <span className="pointer-events-none absolute -top-1 -left-1 w-4 h-4 rounded-tl-lg border-t-2 border-l-2 border-purple-400/60" />
                    <span className="pointer-events-none absolute -bottom-1 -right-1 w-4 h-4 rounded-br-lg border-b-2 border-r-2 border-cyan-400/60" />
                  </div>
                </motion.div>

                {/* Text */}
                <div className="lg:col-span-2">
                  <motion.h2
                    {...fadeUp(0.05)}
                    className="text-white font-extrabold tracking-tight
                               text-[22px] sm:text-[28px] lg:text-[25px] leading-tight"
                  >
                    Welcome to PatronumX — Unified Tech House
                  </motion.h2>

                  <motion.p
                    {...fadeUp(0.1)}
                    className="mt-4 text-slate-300 text-[15px] sm:text-[16px] leading-relaxed"
                  >
                    PatronumX is a <span className="font-semibold text-purple-300">technology company</span> backed by
                    <span className="font-semibold text-purple-300"> 4+ years</span> of delivering production-grade products.
                    We build future-ready solutions across <span className="font-semibold text-purple-300">AI</span>,{" "}
                    <span className="font-semibold text-purple-300">Web & App Development</span>,{" "}
                    <span className="font-semibold text-purple-300">Digital Marketing</span>, and{" "}
                    <span className="font-semibold text-purple-300">ERP/CRM</span>—designed for protection, precision,
                    and performance.
                  </motion.p>

                  <motion.hr
                    {...fadeUp(0.16)}
                    className="my-5 border-t border-white/10"
                  />

                  <motion.p
                    {...fadeUp(0.2)}
                    className="text-slate-300 text-[15px] sm:text-[16px] leading-relaxed"
                  >
                    Our team has shipped <span className="font-semibold text-purple-300">100+ websites</span> and modern
                    applications for clients worldwide—specializing in secure APIs, cloud infrastructure, realtime data
                    pipelines, and commerce integrations that power modern digital businesses.
                  </motion.p>

                  {/* Tags — compact outline chips */}
                  <motion.div
                    {...fadeUp(0.28)}
                    className="mt-6 flex flex-wrap gap-2.5"
                  >
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full border border-white/12
                                   text-[12.5px] sm:text-sm text-slate-200/95
                                   hover:border-white/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
