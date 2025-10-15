// src/components/sections/ConstellationBenefits.jsx
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  MonitorCog, Camera, BarChart3, Share2, CalendarDays,
  Search, Film, Megaphone, Sparkles, Gift
} from "lucide-react";
import Plogo from "../assets/Plogo.png";

/* -------------------- Data -------------------- */
const services = [
  { id: "web",       icon: <MonitorCog size={22} />, color: "#7c8cff", title: "Web Updates & Management", desc: "Fast content edits, banners, uptime checks and performance care." },
  { id: "shoot",     icon: <Camera size={22} />,     color: "#5eead4", title: "Food Photoshoot",          desc: "Styled, edited visuals for web, menus and social launches." },
  { id: "analytics", icon: <BarChart3 size={22} />,  color: "#38bdf8", title: "Analytics Report",         desc: "Monthly KPIs, funnels and attribution with clear actions." },
  { id: "social",    icon: <Share2 size={22} />,     color: "#fb923c", title: "Social Media Mgmt",        desc: "Posts, replies and story coverage to keep fans engaged." },
  { id: "calendar",  icon: <CalendarDays size={22} />,color:"#fbbf24", title: "Content Calendar",         desc: "A cross-platform plan—topics, captions and creative notes." },
  { id: "seo",       icon: <Search size={22} />,     color: "#a78bfa", title: "Monthly SEO Report",       desc: "Ranking, keyword gaps and on-page fixes for steady growth." },
  { id: "reels",     icon: <Film size={22} />,       color: "#f87171", title: "Reels / Short-form",       desc: "Concept, shoot and edit for IG/TT/Shorts to drive reach." },
  { id: "ads",       icon: <Megaphone size={22} />,  color: "#f59e0b", title: "Meta Ads Management",      desc: "Prospecting/retargeting, creative tests, weekly optimizations." },
  { id: "strategy",  icon: <Sparkles size={22} />,   color: "#60a5fa", title: "Creative Brand Strategy",  desc: "Positioning, tone and visual direction for consistency." },
  { id: "seasonal",  icon: <Gift size={22} />,       color: "#fb7185", title: "Seasonal Campaigns",       desc: "Holiday/event promos mapped on an offer calendar." },
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

// angle -> cartesian; 0° visually up
const polarToXY = (angleDeg, radius, cx, cy) => {
  const rad = (angleDeg - 90) * (Math.PI / 180);
  return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
};

// starfield
const genStars = (n) =>
  Array.from({ length: n }, (_, i) => ({
    id: i,
    l: `${Math.random() * 100}%`,
    t: `${Math.random() * 100}%`,
    s: `${Math.random() * 2 + 1}px`,
    d: `${Math.random() * 1.5 + 1.2}s`,
    delay: `${Math.random() * 1.2}s`,
    op: Math.random() * 0.6 + 0.3,
  }));

export default function ConstellationBenefits() {
  const [hovered, setHovered]   = useState(null);
  const [selected, setSelected] = useState(null);

  // Shared geometry (all elements use this)
  const SIZE    = 760;
  const CX      = SIZE / 2;
  const CY      = SIZE / 2;
  const HUB_R   = 120;
  const ICON_R  = 280;  // badge ring radius
  const LABEL_GAP = 46; // pixels BELOW the badge center for label
  const BADGE_SIZE = 56; // w-14 h-14 → 56px

  // Even spacing around the ring
  const nodes = useMemo(() => {
    const N = services.length;
    const step = 360 / N;
    return services.map((s, i) => {
      const angle = i * step;
      const { x: iconX,  y: iconY }  = polarToXY(angle, ICON_R, CX, CY);
      return {
        ...s,
        angle,
        iconX, iconY,
        // label directly under every badge
        labelX: iconX,
        labelY: iconY + LABEL_GAP,
      };
    });
  }, []);

  // Connector: stop well before badge + smaller arrowhead
  const connectorPath = (angle) => {
    // stop before the badge edge (half badge + padding)
    const STOP_PAD = BADGE_SIZE / 2 + 14; // 28 + 14 = 42px
    const from = polarToXY(angle, HUB_R + 24, CX, CY);
    const to   = polarToXY(angle, ICON_R - STOP_PAD, CX, CY);
    return `M ${from.x} ${from.y} L ${to.x} ${to.y}`;
  };

  const stars = useMemo(() => genStars(110), []);
  const activeId = selected ?? hovered;

  return (
    <section className="relative overflow-hidden py-24 text-white bg-transparent" id="benefits" aria-labelledby="benefits-title">
      <style>{`
        @keyframes twinkle { 0%,100%{opacity:.35} 50%{opacity:1} }
        .twinkle { animation: twinkle var(--d,1.6s) ease-in-out infinite alternate; }
      `}</style>

      {/* transparent starfield */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {stars.map(s => (
          <div
            key={s.id}
            className="absolute rounded-full twinkle"
            style={{ left: s.l, top: s.t, width: s.s, height: s.s, background: "rgba(255,255,255,0.85)", opacity: s.op, animationDuration: s.d, animationDelay: s.delay }}
          />
        ))}
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-8 text-center relative z-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-semibold text-amber-400 mb-2">Benefits</p>
        <h2 id="benefits-title" className="font-bold text-[clamp(2rem,5vw,3.5rem)] mb-14">
          What you get with PatronumX
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
                {/* smaller, set-back arrowhead so tip doesn't touch the badge */}
                <marker id="arrowHead" viewBox="0 0 10 10" refX="7.8" refY="5" markerWidth="4" markerHeight="4" orient="auto">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
                </marker>
              </defs>

              {/* rings */}
              <circle cx={CX} cy={CY} r={HUB_R}  fill="none" stroke="url(#ringGrad)" strokeDasharray="4 8" />
              <circle cx={CX} cy={CY} r={ICON_R} fill="none" stroke="url(#ringGrad)" strokeDasharray="3 10" />

              {/* light, narrow connector */}
              {activeId &&
                nodes.filter(n => n.id === activeId).map(n => (
                  <path
                    key={`p-${n.id}`}
                    d={connectorPath(n.angle)}
                    stroke="rgba(255,255,255,.45)"
                    strokeWidth="1.05"
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
              <div className="w-[140px] h-[140px] p-6 rounded-3xl bg-slate-900/55 backdrop-blur-md border border-white/10 shadow-[0_0_44px_rgba(168,85,247,0.35)] grid place-items-center">
                <img src={Plogo} alt="PatronumX logo" className="w-full h-auto" />
              </div>
              <div className="mt-3 font-medium text-gray-300 text-lg text-center">Unified Stack</div>
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
                  className="w-14 h-14 rounded-2xl grid place-items-center text-white shadow-lg transition-transform duration-200 hover:scale-110 relative"
                  style={{ background: n.color, boxShadow: glow(n.color) }}
                >
                  {(selected === n.id || hovered === n.id) && (
                    <span className="absolute inset-0 rounded-2xl" style={{ boxShadow: `0 0 0 10px ${soft(n.color)}` }} />
                  )}
                  {n.icon}
                </div>
              </button>
            ))}

            {/* labels: always centered under the badge */}
            {nodes.map((n) => (
              <div
                key={`lbl-${n.id}`}
                className="absolute select-none"
                style={{
                  left: n.labelX,
                  top: n.labelY,
                  transform: "translate(-50%,-50%)",
                  textAlign: "center",
                  maxWidth: 180,
                  lineHeight: "1.15",
                }}
              >
                <span className="inline-block text-gray-100/95 font-semibold text-[14.5px] tracking-[0.01em]">
                  {n.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ========================= MOBILE ========================= */}
        <div className="grid gap-5 mt-10 md:hidden" aria-label="Benefits list">
          {services.map((s) => (
            <div key={s.id} className="flex items-start gap-4 text-left bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="flex-shrink-0 w-11 h-11 rounded-lg grid place-items-center" style={{ background: soft(s.color), color: s.color }}>
                {s.icon}
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">{s.title}</h4>
                <p className="text-sm text-gray-300 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
