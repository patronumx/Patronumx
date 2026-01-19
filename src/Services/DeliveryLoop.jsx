// src/Services/DeliveryLoop.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  PenTool,
  Wrench,
  Rocket,
  FileCheck,
  ChevronDown,
  Cpu,
  Workflow,
  Zap
} from "lucide-react";
import ContactModal from "../components/ContactModal";

const STEPS = [
  { id: 1, icon: <ClipboardList size={20} />, title: "Audit & Strategy", desc: "Assess data readiness and define AI use-cases." },
  { id: 2, icon: <Workflow size={20} />, title: "Model Design", desc: "Architect agents, RAG pipelines, and fine-tuning." },
  { id: 3, icon: <Cpu size={20} />, title: "Train & Develop", desc: "Iterative training, validation, and integration." },
  { id: 4, icon: <Rocket size={20} />, title: "Deploy & Scale", desc: "Edge inference rollout with auto-scaling infra." },
  { id: 5, icon: <Zap size={20} />, title: "Optimization", desc: "Continuous monitoring and RLHF loop." },
];

const FAQS = [
  { q: "How do you handle data privacy?", a: "We deploy private VPCs and local LLMs ensuring your data never leaves your infrastructure." },
  { q: "Can you integrate with legacy systems?", a: "Yes, our agentic layer acts as a bridge, reading/writing to existing SQL/ERPs via APIs." },
  { q: "What is the typical deployment timeline?", a: "Prototypes in 2 weeks; production-grade autonomous systems in 6-8 weeks." },
];

export default function DeliveryLoop() {
  const [open, setOpen] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section className="py-20 px-6 text-white bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-cyan-200">
          The Intelligence Lifecycle
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {STEPS.map((s) => (
            <div
              key={s.id}
              className="rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md p-6 shadow-xl hover:border-purple-500/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-purple-300 font-bold border border-white/5 group-hover:text-cyan-300 transition-colors">
                  {s.id}
                </div>
                <span className="text-slate-300 group-hover:text-white transition-colors">{s.icon}</span>
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">{s.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-8 text-center">Common Questions</h3>

        <div className="max-w-3xl mx-auto space-y-4 mb-20">
          {FAQS.map((f, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-xl bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300 overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-left font-medium text-slate-200 hover:text-white"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{f.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${open === i ? "rotate-180" : ""
                    }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-sm text-slate-400 leading-relaxed"
                  >
                    {f.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-r from-purple-900/40 to-slate-900/60 backdrop-blur-xl p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Ready to Architect Your Intelligence?
              </h3>
              <p className="text-slate-300 max-w-xl text-lg">
                Whether it's <span className="text-purple-300">Autonomous Agents</span>, <span className="text-cyan-300">Predictive Infra</span>, or <span className="text-purple-300">Edge AI</span> — we guide you from data to deployment.
              </p>
            </div>

            <button
              className="px-8 py-4 rounded-full font-bold text-white shadow-lg bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 transition-all transform hover:scale-105 hover:shadow-cyan-500/25 whitespace-nowrap"
              type="button"
              onClick={() => setIsContactOpen(true)}
            >
              Start Your Project
            </button>
          </div>
        </motion.div>

        <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      </div>
    </section>
  );
}

