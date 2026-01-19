// src/components/sections/ConstellationBenefits.jsx
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  MonitorCog, Camera, BarChart3, Share2, CalendarDays,
  Search, Film, Megaphone, Sparkles, Gift, Bot
} from "lucide-react";
import Plogo from "../assets/logo.png";

/* -------------------- Data -------------------- */
const services = [
  { id: "agentic", icon: <Bot size={20} />, color: "#a855f7", title: "Nexus Agents", desc: "Deploy autonomous AI workers for support, sales, and operations." },
  { id: "web", icon: <MonitorCog size={20} />, color: "#7c8cff", title: "Infinity Cloud", desc: "Serverless edge infrastructure with auto-scaling and 99.99% uptime." },
  { id: "shoot", icon: <Camera size={20} />, color: "#5eead4", title: "Vision Forge", desc: "Text-to-Image studio for generation of product assets and marketing visuals." },
  { id: "analytics", icon: <BarChart3 size={20} />, color: "#38bdf8", title: "Deep Insights", desc: "Real-time data visualization and predictive churn modeling." },
  { id: "social", icon: <Share2 size={20} />, color: "#fb923c", title: "Pulse Monitor", desc: "AI-driven social listening and automated community engagement." },
  { id: "calendar", icon: <CalendarDays size={20} />, color: "#fbbf24", title: "Flow Pilot", desc: "Drag-and-drop workflow builder for multi-channel content scheduling." },
  { id: "seo", icon: <Search size={20} />, color: "#a78bfa", title: "Rank Matrix", desc: "Semantic entity graphing and automated on-page optimization." },
  { id: "reels", icon: <Film size={20} />, color: "#f87171", title: "Motion Synth", desc: "Generate high-converting video shorts from text prompts instantly." },
  { id: "ads", icon: <Megaphone size={20} />, color: "#f59e0b", title: "Ad Neural", desc: "Programmatic bidding engine optimized for max ROAS." },
  { id: "strategy", icon: <Sparkles size={20} />, color: "#60a5fa", title: "Identity Core", desc: "Centralized brand design system and asset compliance guardrails." },
  { id: "seasonal", icon: <Gift size={20} />, color: "#fb7185", title: "Smart Loops", desc: "Event-triggered campaign automation and dynamic personalization." },
];

/* -------------------- Helpers -------------------- */
const soft = (hex) => rgba(hex, 0.16);
const glow = (hex) => `0 0 36px ${rgba(hex, 0.45)}`;
function rgba(hex, a) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

const polarToXY = (angleDeg, radius, cx, cy) => {
  const rad = (angleDeg - 90) * (Math.PI / 180);
  return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
};

export default function ConstellationBenefits() {
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);

  // ------ Reduced geometry ------
  const SIZE = 600;
  const CX = SIZE / 2;
  const CY = SIZE / 2;
  const HUB_R = 96;
  const ICON_R = 230;
  const LABEL_GAP = 36;
  const BADGE_SIZE = 48;

  const nodes = useMemo(() => {
    const N = services.length;
    const step = 360 / N;
    return services.map((s, i) => {
      const angle = i * step;
      const { x: iconX, y: iconY } = polarToXY(angle, ICON_R, CX, CY);
      return {
        ...s,
        angle,
        iconX, iconY,
        labelX: iconX,
        labelY: iconY + LABEL_GAP,
      };
    });
  }, []);

  // shorter connector + smaller arrow
  const connectorPath = (angle) => {
    const STOP_PAD = BADGE_SIZE / 2 + 12;
    const from = polarToXY(angle, HUB_R + 18, CX, CY);
    const to = polarToXY(angle, ICON_R - STOP_PAD, CX, CY);
    return `M ${from.x} ${from.y} L ${to.x} ${to.y}`;
  };

  const activeId = selected ?? hovered;

  return (
    <section className="relative overflow-hidden py-20 text-white bg-transparent" id="benefits" aria-labelledby="benefits-title">
      <motion.div
        className="max-w-6xl mx-auto px-6 md:px-8 text-center relative z-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-semibold text-amber-400 mb-2">Benefits</p>
        <h2 id="benefits-title" className="font-bold text-[clamp(1.4rem,3.2vw,2.1rem)] mb-8">
          The PatronumX AI Ecosystem
        </h2>

        {/* ========================= DESKTOP ========================= */}
        <div className="hidden md:block">
          <div className="relative mx-auto" style={{ width: SIZE, height: SIZE }}>
            <svg
              width={SIZE}
              height={SIZE}
              viewBox={`0 0 ${SIZE} ${SIZE}`}
              className="absolute inset-0"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="rgba(255,255,255,.14)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,.05)" />
                </linearGradient>
                <marker
                  id="arrowHead"
                  viewBox="0 0 10 10"
                  refX="6.2" refY="5"
                  markerWidth="3" markerHeight="3"
                  orient="auto"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
                </marker>
              </defs>

              {/* keep the rings */}
              <circle cx={CX} cy={CY} r={HUB_R} fill="none" stroke="url(#ringGrad)" strokeDasharray="4 8" />
              <circle cx={CX} cy={CY} r={ICON_R} fill="none" stroke="url(#ringGrad)" strokeDasharray="3 10" />

              {/* connectors only on hover/active */}
              {activeId &&
                nodes.filter(n => n.id === activeId).map(n => (
                  <path
                    key={`p-${n.id}`}
                    d={connectorPath(n.angle)}
                    stroke="rgba(255,255,255,.45)"
                    strokeWidth="0.9"
                    strokeLinecap="round"
                    fill="none"
                    markerEnd="url(#arrowHead)"
                  />
                ))
              }
            </svg>

            {/* center hub */}
            <div
              className="absolute"
              style={{ left: CX, top: CY, transform: "translate(-50%,-50%)" }}
            >
              <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-xl text-center tracking-wide">
                Platform Core
              </div>
            </div>

            {/* badges */}
            {nodes.map((n) => (
              <button
                key={n.id}
                type="button"
                className="absolute outline-none"
                style={{ left: n.iconX, top: n.iconY, transform: "translate(-50%,-50%)" }}
                onMouseEnter={() => setHovered(n.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setSelected(s => (s === n.id ? null : n.id))}
                title={n.desc}
              >
                <div
                  className="w-12 h-12 rounded-2xl grid place-items-center text-white shadow-lg transition-transform duration-200 hover:scale-110 relative"
                  style={{ background: n.color, boxShadow: glow(n.color) }}
                >
                  {(selected === n.id || hovered === n.id) && (
                    <span className="absolute inset-0 rounded-2xl" style={{ boxShadow: `0 0 0 8px ${soft(n.color)}` }} />
                  )}
                  {n.icon}
                </div>
              </button>
            ))}

            {/* labels under badges */}
            {nodes.map((n) => (
              <div
                key={`lbl-${n.id}`}
                className="absolute select-none mt-5"
                style={{
                  left: n.labelX,
                  top: n.labelY,
                  transform: "translate(-50%,-50%)",
                  textAlign: "center",
                  maxWidth: 170,
                  lineHeight: "1.15",
                }}
              >
                <span className="inline-block text-gray-100/95 font-semibold text-[13.5px] tracking-[0.01em]">
                  {n.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ========================= MOBILE ========================= */}
        <div className="grid gap-4 mt-8 md:hidden" aria-label="Benefits list">
          {services.map((s) => (
            <div key={s.id} className="flex items-start gap-3 text-left bg-white/5 p-3.5 rounded-xl border border-white/10">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg grid place-items-center" style={{ background: soft(s.color), color: s.color }}>
                {s.icon}
              </div>
              <div>
                <h4 className="font-semibold text-white mb-0.5 mt-2">{s.title}</h4>
                <p className="text-sm text-gray-300 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
