// src/components/sections/OurServices.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  MonitorCog, Camera, BarChart3, Share2, CalendarDays,
  Search, Film, Megaphone, Sparkles, Gift, Check, Bot
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
  { id: "agentic", icon: <Bot size={36} color="#fff" />, color: "#a855f7", title: "Agentic AI: Autonomous Workflows & Smart Systems",
    description: "AI agents designed to operate, decide, and execute tasks autonomously, built for operations, analytics, customer support, content workflows, and internal tooling.",
    includes: ["Multi-agent systems with memory & context","Tool-use & API-action capabilities","Automated task orchestration","Real-time decision-making & analytics","Human-handoff & safety guardrails"] },
  { id: "web", icon: <MonitorCog size={36} color="#fff" />, color: "#7c8cff", title: "Web Updates & Management",
    description: "Fast content edits, menu/banners, uptime and performance care for a crisp, always-on presence.",
    includes: ["Weekly content / banner updates","Menu & pricing changes","Uptime monitoring & alerts","Image compression & performance care","Minor landing page tweaks"] },
  { id: "photoshoot", icon: <Camera size={36} color="#fff" />, color: "#5eead4", title: "Tasty Snapshots",
    description: "Styled visuals for campaigns, menus and delivery apps—consistent, appetizing and on-brand.",
    includes: ["Shot planning & moodboard","Lighting, styling & capture","Color-corrected hero shots","Web & social exports","Shoot-day coordination"] },
  { id: "analytics", icon: <BarChart3 size={36} color="#fff" />, color: "#38bdf8", title: "Analytics Report",
    description: "Monthly KPIs, funnels & attribution with clear actions. See what drives orders and why.",
    includes: ["Traffic & conversion KPIs","Channel / campaign attribution","Funnel analysis & drop-off","Action items & experiments","MoM trend view"] },
  { id: "social", icon: <Share2 size={36} color="#fff" />, color: "#fb923c", title: "Social Media Management",
    description: "Posts, replies and story coverage to keep fans engaged and your brand top of mind.",
    includes: ["Post scheduling & replies","Story coverage","Comment hygiene & moderation","Community prompts","Monthly performance recap"] },
  { id: "calendar", icon: <CalendarDays size={36} color="#fff" />, color:"#fbbf24", title: "Monthly Content Calendar",
    description: "A cross-platform plan with topics, captions and creative notes—approved ahead of time.",
    includes: ["Monthly content themes","Captions & hooks","Asset checklist","Shoot & design slots","Approval workflow"] },
  { id: "seo", icon: <Search size={36} color="#fff" />, color: "#a78bfa", title: "Monthly SEO Report",
    description: "Keyword gaps, on-page fixes and local search hygiene to grow discoverability over time.",
    includes: ["Keyword ranking changes","On-page issue fixes","Local listing checks","Competitor gap insights","Search-led content ideas"] },
  { id: "reels", icon: <Film size={36} color="#fff" />, color: "#f87171", title: "Reels / Short-form",
    description: "Concept, shoot and edit for IG/TT/Shorts—fast storytelling that drives reach.",
    includes: ["Concept & script beats","Shoot plan & assets","Edit, titles & music","Platform-optimized exports","A/B creative variants"] },
  { id: "ads", icon: <Megaphone size={36} color="#fff" />, color: "#f59e0b", title: "Meta Ads Management",
    description: "Prospecting + retargeting with weekly optimizations and creative tests for ROAS.",
    includes: ["Account structure & pixels","Prospecting & retargeting","Budget pacing & bids","Creative & copy tests","Weekly optimization log"] },
  { id: "strategy", icon: <Sparkles size={36} color="#fff" />, color: "#60a5fa", title: "Creative Brand Strategy",
    description: "Positioning, tone and visual direction so every touchpoint feels consistently 'you'.",
    includes: ["Messaging & voice","Moodboard & visual system","Asset usage rules","Campaign concepts","Launch playbook"] },
  { id: "seasonal", icon: <Gift size={36} color="#fff" />, color: "#fb7185", title: "Seasonal Campaigns & Offer Calendar",
    description: "Holiday/event promos mapped on an offer calendar—brief, goals & delivery schedule.",
    includes: ["Offer calendar & brief","KPIs & success criteria","Creative & copy plan","Launch roadmap + owners","Weekly check-ins & report"] },
];

/* Motion */
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05 } } };
const cardVariants = { hidden: { y: 12, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } } };

export default function OurServices() {
  return (
    <section className="relative overflow-hidden py-20 text-white bg-transparent" id="services" aria-labelledby="services-title">
      <style>{`
        .svc-card {
          width: 230px;
          height: 300px;
          perspective: 1200px;
          contain: layout style paint;
        }
        .svc-content {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 420ms cubic-bezier(.2,.6,.2,1);
        }
        .svc-card:hover .svc-content {
          will-change: transform;
        }
        .svc-card:hover .svc-content,
        .svc-card:focus-within .svc-content {
          transform: rotateY(180deg);
        }

        .svc-face {
          position: absolute;
          inset: 0;
          border-radius: 12px;       /* a bit tighter */
          overflow: hidden;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .svc-face::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(120% 120% at 0% 100%, rgba(99,102,241,.10), transparent 60%),
            radial-gradient(120% 120% at 100% 0%, rgba(217,70,239,.10), transparent 60%);
          border: 1px solid rgba(255,255,255,.08);
          box-shadow:
            inset 0 0 0 1px rgba(255,255,255,.06),
            0 10px 22px rgba(0,0,0,.28);
          border-radius: inherit;
          pointer-events: none;
        }
        @supports (backdrop-filter: blur(6px)) {
          .svc-face::before {
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
          }
        }

        .svc-front {
          transform: rotateY(0deg);
          display: grid;
          place-items: center;
          background: rgba(10,14,25,0.78);
          text-align: center;
        }

        .svc-front-inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;               /* was 10px */
          padding: 12px 14px;     /* tighter */
        }

        .svc-iconWrap {
          width: 48px;            /* was 56px */
          height: 48px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          box-shadow: 0 0 14px rgba(255,255,255,.08);
        }

        .svc-title {
          font-weight: 800;
          font-size: 16px;        /* was 18px */
          line-height: 1.2;
          text-shadow: 0 1px 0 rgba(0,0,0,.25);
        }

        .svc-orbs { position: absolute; inset: 0; }
        .svc-orb {
          position: absolute;
          border-radius: 9999px;
          filter: blur(16px);     /* slightly smaller blur */
          opacity: .82;
          animation: svcFloat 2400ms infinite linear;
        }
        @keyframes svcFloat { 0% { transform: translateY(0) } 50% { transform: translateY(6px) } 100% { transform: translateY(0) } }

        .svc-back {
          transform: rotateY(180deg);
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(10,14,25,0.90);
        }

        .spin-frame {
          position: absolute;
          width: 150px;           /* narrower to fit */
          height: 165%;
          background: linear-gradient(90deg, transparent, #ff9966, #ff9966, #ff9966, #ff9966, transparent);
          animation: svcSpin 5s linear infinite;
          opacity: .85;
        }
        @keyframes svcSpin { from { transform: rotateZ(0) } to { transform: rotateZ(360deg) } }

        .svc-back-inner {
          position: absolute;
          inset: 1%;
          border-radius: 10px;
          background: rgba(10,14,25,0.92);
          border: 1px solid rgba(255,255,255,.08);
          box-shadow: inset 0 0 20px rgba(0,0,0,.32);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px;
          text-align: center;
        }

        .svc-desc {
          font-size: 12px;        /* was 13px */
          opacity: .9;
          line-height: 1.4;
          max-width: 220px;       /* was 260px */
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .inc-list {
          width: 92%;
          background: rgba(0,0,0,.50);
          border-radius: 10px;
          padding: 8px;
          box-shadow: 0 0 8px 3px rgba(0,0,0,.35);
          text-align: left;
          font-size: 12px;
        }
        @supports (backdrop-filter: blur(4px)) {
          .inc-list {
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
          }
        }
        .inc-item { display: flex; gap: 6px; align-items: flex-start; color: #d1d5db; }
      `}</style>

      <motion.div
        className="max-w-7xl mx-auto px-6 text-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={containerVariants}
      >
        <p className="font-semibold text-amber-400 mb-1.5">Our Services</p>
        <h2 id="services-title" className="font-bold text-[clamp(1.1rem,3vw,1.9rem)] mb-12">
          Everything you need to launch, grow and optimize
        </h2>

        {/* 5 per row on xl screens */}
        <motion.div
          className="grid gap-6 justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
          variants={containerVariants}
        >
          {servicesData.map((s) => {
            const c1 = rgba(s.color, 0.55);
            const c2 = rgba(s.color, 0.35);
            const c3 = rgba(s.color, 0.20);
            return (
              <motion.div key={s.id} variants={cardVariants}>
                <div className="svc-card" tabIndex={0}>
                  <div className="svc-content">
                    {/* FRONT */}
                    <div className="svc-face svc-front">
                      <div className="svc-orbs" aria-hidden>
                        <div className="svc-orb" style={{ left: 14, top: 22, width: 86, height: 86, background: c1 }} />
                        <div className="svc-orb" style={{ right: -10, top: -34, width: 40, height: 40, background: c3, animationDelay: '-1400ms' }} />
                        <div className="svc-orb" style={{ left: 42, bottom: -10, width: 150, height: 150, background: c2, animationDelay: '-700ms' }} />
                      </div>

                      <div className="svc-front-inner">
                        <div className="svc-iconWrap" style={{ background: s.color, boxShadow: `0 0 14px ${rgba(s.color, .45)}` }}>
                          {s.icon}
                        </div>
                        <h3 className="svc-title">{s.title}</h3>
                      </div>
                    </div>

                    {/* BACK */}
                    <div className="svc-face svc-back">
                      <div className="spin-frame" aria-hidden />
                      <div className="svc-back-inner">
                        <div
                          className="w-10 h-10 rounded-xl grid place-items-center text-white"
                          style={{ background: s.color, boxShadow: `0 0 12px ${rgba(s.color, .55)}` }}
                          aria-hidden
                        >
                          {React.cloneElement(s.icon, { size: 24 })}
                        </div>

                        <p className="svc-desc">{s.description}</p>

                        <div className="inc-list mt-1.5 space-y-1.5">
                          {s.includes.slice(0, 3).map((item, i) => (
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
