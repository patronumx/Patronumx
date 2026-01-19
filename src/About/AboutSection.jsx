// src/About/AboutSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, BrainCircuit, Bot, Network, Workflow } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative py-32 px-6 text-white overflow-hidden bg-transparent">
      {/* Background glow + stars */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-7xl font-bold leading-tight tracking-tight mb-8"
        >
          One Platform for{" "}
          <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text">
            Autonomous Intelligence
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-slate-300 mt-6 text-xl max-w-3xl mx-auto leading-relaxed"
        >
          We architect and ship production-grade AI systems, from autonomous agents to
          edge-deployed inference engines. Built for precision, protection, and
          scale—so you can deploy intelligence with confidence.
        </motion.p>
      </div>

      {/* Category Chips */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex flex-wrap justify-center gap-4 mb-24"
      >
        {[
          { label: "Generative AI", icon: <Sparkles size={18} /> },
          { label: "Agentic Workflows", icon: <Bot size={18} /> },
          { label: "Vector Search", icon: <Network size={18} /> },
          { label: "Edge Inference", icon: <BrainCircuit size={18} /> },
        ].map((tag, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(168,85,247,0.15)" }}
            transition={{ type: "spring", stiffness: 250, damping: 15 }}
            className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 text-slate-300 hover:text-white hover:border-purple-400/50 backdrop-blur-md bg-white/5 shadow-lg shadow-purple-900/10"
          >
            {tag.icon}
            <span className="text-sm font-semibold">{tag.label}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Why we exist */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-5xl mx-auto bg-slate-900/40 border border-white/10 rounded-[30px] p-10 md:p-14 backdrop-blur-xl shadow-[0_0_60px_rgba(168,85,247,0.15)] relative overflow-hidden group"
      >
        {/* Holographic Border Effect */}
        <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none" />

        {/* Subtle top gradient */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <Workflow size={28} />
            </div>
            <h2 className="text-3xl font-bold text-white">Why we exist</h2>
          </div>

          <p className="text-slate-200 leading-loose text-lg sm:text-2xl font-light">
            The future of enterprise isn't just about adopting AI—it's about <b className="text-white font-semibold">trusting</b> it.
            PatronumX solves the "black box" problem by building explainable, observable, and secure
            AI infrastructure. We bridge the gap between research prototypes and
            mission-critical production systems.
          </p>
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
}
