// src/components/sections/OurServices.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  MonitorCog, Camera, BarChart3, Share2, CalendarDays,
  Search, Film, Megaphone, Sparkles, Gift, Check
} from "lucide-react";

/* Helpers */
const rgba = (hex, a) => {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

/* Data */
const servicesData = [
  { id: "web", icon: <MonitorCog size={36} />, color: "#7c8cff", title: "Web Updates & Management",
    description: "Fast content edits, banners, uptime and performance care.",
    includes: ["Weekly content updates","Menu & pricing changes","Uptime monitoring"] },
  { id: "photoshoot", icon: <Camera size={36} />, color: "#5eead4", title: "Tasty Snapshots",
    description: "Styled visuals for campaigns, menus, and delivery apps.",
    includes: ["Shot planning & moodboard","Lighting & styling","Color-corrected hero shots"] },
  { id: "analytics", icon: <BarChart3 size={36} />, color: "#38bdf8", title: "Analytics Report",
    description: "Monthly KPIs, funnels & attribution with clear actions.",
    includes: ["Traffic & conversion KPIs","Channel attribution","Funnel analysis"] },
  { id: "social", icon: <Share2 size={36} />, color: "#fb923c", title: "Social Media Management",
    description: "Posts, replies and story coverage to keep fans engaged.",
    includes: ["Post scheduling & replies","Story coverage","Community prompts"] },
  { id: "calendar", icon: <CalendarDays size={36} />, color: "#fbbf24", title: "Content Calendar",
    description: "A cross-platform plan with topics, captions and creative notes.",
    includes: ["Monthly content themes","Captions & hooks","Asset checklist"] },
  { id: "seo", icon: <Search size={36} />, color: "#a78bfa", title: "Monthly SEO Report",
    description: "Keyword gaps, on-page fixes and local search hygiene.",
    includes: ["Keyword ranking changes","On-page issue fixes","Local listing checks"] },
  { id: "reels", icon: <Film size={36} />, color: "#f87171", title: "Reels / Short-form",
    description: "Concept, shoot and edit for IG/TT/Shorts for reach.",
    includes: ["Concept & script beats","Shoot plan & assets","Edit, titles & music"] },
  { id: "ads", icon: <Megaphone size={36} />, color: "#f59e0b", title: "Meta Ads Management",
    description: "Prospecting & retargeting with weekly optimizations for ROAS.",
    includes: ["Account structure & pixels","Ad creative & copy tests","Weekly optimization log"] },
];

/* Motion */
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05 } } };
const cardVariants = { hidden: { y: 10, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } } };

export default function OurServices() {
  return (
    <section className="relative overflow-hidden py-20 text-white bg-transparent" id="services" aria-labelledby="services-title">
      <style>{`
        .svc-card { width: 240px; height: 320px; perspective: 1000px; contain: content; }
        .svc-content { position: relative; width: 100%; height: 100%; transform-style: preserve-3d; transition: transform 400ms cubic-bezier(.2,.6,.2,1); will-change: transform; }
        .svc-card:hover .svc-content, .svc-card:focus-within .svc-content { transform: rotateY(180deg); }
        .svc-face { position: absolute; inset: 0; border-radius: 12px; overflow: hidden; backface-visibility: hidden; -webkit-backface-visibility: hidden; }
        .svc-face::before { content: ""; position: absolute; inset: 0; background: radial-gradient(100% 100% at 0% 100%, rgba(99,102,241,.1), transparent 50%), radial-gradient(100% 100% at 100% 0%, rgba(217,70,239,.1), transparent 50%); border: 1px solid rgba(255,255,255,.07); backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px); box-shadow: inset 0 0 0 1px rgba(255,255,255,.05), 0 8px 20px rgba(0,0,0,.25); border-radius: inherit; pointer-events: none; }
        .svc-front { transform: rotateY(0deg); display: grid; place-items: center; background: rgba(10,14,25,0.75); text-align: center; }
        .svc-front-inner { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 12px; }
        .svc-iconWrap { width: 48px; height: 48px; border-radius: 12px; display: grid; place-items: center; box-shadow: 0 0 14px rgba(255,255,255,.07); }
        .svc-title { font-weight: 700; font-size: 16px; line-height: 1.25; text-shadow: 0 1px 0 rgba(0,0,0,.2); }
        .svc-orbs { position: absolute; inset: 0; }
        .svc-orb { position: absolute; border-radius: 9999px; filter: blur(16px); opacity: .8; animation: svcFloat 2600ms infinite linear alternate; }
        @keyframes svcFloat { from { transform: translateY(-4px) } to { transform: translateY(4px) } }
        .svc-back { transform: rotateY(180deg); display: flex; align-items: center; justify-content: center; background: rgba(10,14,25,0.88); }
        .svc-back-inner { position: absolute; inset: 0.7%; border-radius: 10px; background: rgba(10,14,25,0.9); border: 1px solid rgba(255,255,255,.07); box-shadow: inset 0 0 20px rgba(0,0,0,.3); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; padding: 12px; text-align: center; }
        .svc-desc { font-size: 12px; opacity: .9; line-height: 1.4; max-width: 220px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .inc-list { width: 90%; background: rgba(0,0,0,.45); backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px); border-radius: 8px; padding: 8px; box-shadow: 0 0 8px rgba(0,0,0,.35); text-align: left; font-size: 12px; }
        .inc-item { display: flex; gap: 6px; align-items: flex-start; color: #d1d5db; }
      `}</style>

      <motion.div
        className="max-w-6xl mx-auto px-4 text-center relative z-10"
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <p className="font-semibold text-amber-400 mb-2 text-sm">Our Services</p>
        <h2 id="services-title" className="font-bold text-[clamp(2rem,4.5vw,3.25rem)] mb-12">
          Everything you need to launch, grow and optimize
        </h2>

        <motion.div
          className="grid gap-5 justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={containerVariants}
        >
          {servicesData.map((s) => {
            const c1 = rgba(s.color, 0.5);
            const c2 = rgba(s.color, 0.3);
            const c3 = rgba(s.color, 0.15);
            return (
              <motion.div key={s.id} variants={cardVariants}>
                <div className="svc-card" tabIndex={0}>
                  <div className="svc-content">
                    {/* FRONT */}
                    <div className="svc-face svc-front">
                      <div className="svc-orbs" aria-hidden>
                        <div className="svc-orb" style={{ left: 12, top: 22, width: 90, height: 90, background: c1 }} />
                        <div className="svc-orb" style={{ right: -8, top: -38, width: 40, height: 40, background: c3, animationDelay: '-1600ms' }} />
                        <div className="svc-orb" style={{ left: 50, bottom: -10, width: 150, height: 150, background: c2, animationDelay: '-800ms' }} />
                      </div>
                      <div className="svc-front-inner">
                        <div className="svc-iconWrap text-white" style={{ background: s.color, boxShadow: `0 0 16px ${rgba(s.color, .4)}` }}>
                          {s.icon}
                        </div>
                        <h3 className="svc-title">{s.title}</h3>
                      </div>
                    </div>

                    {/* BACK */}
                    <div className="svc-face svc-back">
                      <div className="svc-back-inner">
                        <div
                          className="w-10 h-10 rounded-lg grid place-items-center text-white"
                          style={{ background: s.color, boxShadow: `0 0 14px ${rgba(s.color, .5)}` }}
                          aria-hidden
                        >
                          {React.cloneElement(s.icon, { size: 24 })}
                        </div>
                        <p className="svc-desc">{s.description}</p>
                        <div className="inc-list mt-1 space-y-1.5">
                          {s.includes.map((item, i) => (
                            <div key={i} className="inc-item">
                              <Check size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
