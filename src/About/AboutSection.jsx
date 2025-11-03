import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Globe, Smartphone, Bot, Wallet } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative py-28 px-6 text-white overflow-hidden bg-transparent">
      {/* Background glow + stars */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
      </div>

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-14">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight"
        >
          One stack for{" "}
          <span className="text-blue-400">Web</span>,{" "}
          <span className="text-green-400">Apps</span>,{" "}
          <span className="text-yellow-400">AI</span> &{" "}
          <span className="text-pink-400">Blockchain.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-gray-300 mt-6 text-lg max-w-3xl mx-auto leading-relaxed"
        >
          We architect and ship production systems for web & mobile products,
          AI copilots, and verifiable commerce—built for protection, precision,
          and performance. Every hand-off stays clean with docs, SLOs, and
          observability from day one.
        </motion.p>
      </div>

      {/* Category Chips */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex flex-wrap justify-center gap-4 mb-16"
      >
        {[
          { label: "Web Development", icon: <Globe size={16} /> },
          { label: "App Development", icon: <Smartphone size={16} /> },
          { label: "AI & Data", icon: <Bot size={16} /> },
          { label: "Blockchain", icon: <Wallet size={16} /> },
        ].map((tag, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(251,191,36,0.1)" }}
            transition={{ type: "spring", stiffness: 250, damping: 15 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-gray-300 hover:text-amber-300 hover:border-amber-400/40 backdrop-blur-md"
          >
            {tag.icon}
            <span className="text-sm">{tag.label}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Why we exist */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-5xl mx-auto bg-white/[0.04] border border-white/10 rounded-3xl p-10 backdrop-blur-md shadow-[0_0_25px_rgba(0,0,0,0.4)] relative overflow-hidden"
      >
        {/* subtle top gradient */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400/50 via-pink-400/50 to-blue-400/50 rounded-t-3xl" />

        <div className="flex items-center gap-3 mb-4">
          <Sparkles size={22} className="text-amber-400" />
          <h2 className="text-2xl font-bold text-white">Why we exist</h2>
        </div>

        <p className="text-gray-300 leading-relaxed text-base">
          Modern products live at the intersection of <b>speed</b> and{" "}
          <b>trust</b>. You can't afford to be slow, and you can't afford to be
          sloppy. PatronumX brings battle-tested engineering patterns from
          fintech and consumer apps into one dependable stack—so your
          team can focus on users, not plumbing.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-8 text-center"
        >
          
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
}
