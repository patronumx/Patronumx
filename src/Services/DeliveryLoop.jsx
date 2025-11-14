import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  PenTool,
  Wrench,
  Rocket,
  FileCheck,
  ChevronDown,
} from "lucide-react";
import ContactModal from "../components/ContactModal";

const STEPS = [
  { id: 1, icon: <ClipboardList size={20} />, title: "Scope & Goals", desc: "Define outcomes, metrics, and risks." },
  { id: 2, icon: <PenTool size={20} />, title: "Design & Prototype", desc: "Wireframes, visuals, and alignment reviews." },
  { id: 3, icon: <Wrench size={20} />, title: "Build & Integrate", desc: "Develop, test, and deploy modularly." },
  { id: 4, icon: <Rocket size={20} />, title: "Launch & Monitor", desc: "Progressive rollout with tracking dashboards." },
  { id: 5, icon: <FileCheck size={20} />, title: "Docs & Handoff", desc: "Clean ownership transfer and support docs." },
];

const FAQS = [
  { q: "How do you price projects?", a: "Fixed scope for small builds; retainers for continuous product growth." },
  { q: "Do you work with internal teams?", a: "Yes, we collaborate seamlessly with in-house developers or designers." },
  { q: "What happens after launch?", a: "We offer ongoing monitoring, optimization, and post-launch support." },
];

export default function DeliveryLoop() {
  const [open, setOpen] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section className="py-20 px-6 text-white bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center">
          Our 5-Step Delivery Process
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {STEPS.map((s) => (
            <div
              key={s.id}
              className="rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-md p-5 shadow-md hover:bg-white/[0.08] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-400/10 text-amber-300 font-semibold">
                  {s.id}
                </div>
                <span className="text-amber-300">{s.icon}</span>
              </div>
              <h3 className="font-semibold text-base mb-1">{s.title}</h3>
              <p className="text-sm text-gray-300">{s.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-extrabold mb-6 text-center">FAQs</h3>

        <div className="max-w-3xl mx-auto space-y-4 mb-16">
          {FAQS.map((f, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] transition-all duration-300"
            >
              <button
                className="w-full flex justify-between items-center px-5 py-4 text-left font-medium text-white"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{f.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-amber-300 transition-transform ${
                    open === i ? "rotate-180" : ""
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
                    className="px-5 pb-4 text-sm text-gray-300"
                  >
                    {f.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-r from-[#3f1010]/80 to-[#1c1c1c]/60 backdrop-blur-md p-8 shadow-lg text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-5"
        >
          <div>
            <h3 className="text-xl font-extrabold text-white mb-1">
              Ready to start your project?
            </h3>
            <p className="text-gray-300 max-w-lg">
              Whether it's web apps, AI, or blockchain — we'll guide you from scope to launch.
            </p>
          </div>

          <button
            className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg font-semibold hover:brightness-110 transition-all shadow-[0_0_15px_rgba(239,68,68,0.5)]"
            type="button"
            onClick={() => setIsContactOpen(true)}
          >
            Start a Project →
          </button>
        </motion.div>

        <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      </div>
    </section>
  );
}
