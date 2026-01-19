import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function WalkthroughModal({ service, onClose }) {
  if (!service) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-6"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative max-w-2xl w-full rounded-2xl bg-white/[0.08] border border-white/10 p-8 shadow-xl text-white"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-amber-300 transition"
        >
          <X size={22} />
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2 text-amber-300">
            {service.icon}
            <h2 className="text-2xl font-bold">{service.title}</h2>
          </div>
          <p className="text-gray-300">{service.desc}</p>
        </div>

        <div className="space-y-4">
          {service.walkthrough.map((s, i) => (
            <div
              key={i}
              className="border border-white/10 bg-white/[0.05] rounded-xl p-4"
            >
              <div className="flex items-center gap-3 mb-1">
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-amber-400/10 text-amber-300 text-sm font-bold">
                  {s.step}
                </span>
                <h3 className="font-semibold">{s.title}</h3>
              </div>
              <p className="text-sm text-gray-300">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg font-semibold hover:brightness-110 transition-all shadow-[0_0_12px_rgba(239,68,68,0.5)]"
          >
            Start a Project →
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
