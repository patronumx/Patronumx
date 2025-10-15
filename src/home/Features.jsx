// src/components/Features.jsx
import React from 'react';
import { motion } from 'framer-motion';

// --- Icons (Placeholder - replace with actual Lucide React icons if using) ---
// For a real project, you'd install 'lucide-react' and import like:
// import { Monitor, Settings, Cloud, Shield, ShoppingBag, Link } from 'lucide-react';
// For now, we'll use simple SVG placeholders to keep it self-contained.

const MonitorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.78 1.22a2 2 0 0 0 .73 2.73l.04.02a2 2 0 0 1 .97 1.93v.34a2 2 0 0 1-.97 1.93l-.04.02a2 2 0 0 0-.73 2.73l.78 1.22a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.78-1.22a2 2 0 0 0-.73-2.73l-.04-.02a2 2 0 0 1-.97-1.93v-.34a2 2 0 0 1 .97-1.93l.04-.02a2 2 0 0 0 .73-2.73l-.78-1.22a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const CloudIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const ShoppingBagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

const LinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07L9.44 1.46"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
  </svg>
);
// --- End Icons ---


const featuresData = [
  {
    icon: <MonitorIcon />,
    title: "Broadcast & Overlays",
    description: "Reactive HUDs, lower-thirds, score bugs, observer tools for high-FPS esports.",
    buttonLink: "#",
  },
  {
    icon: <SettingsIcon />,
    title: "AI Analytics",
    description: "CV pipelines, player heatmaps, cheat detection signals, coach dashboards.",
    buttonLink: "#",
  },
  {
    icon: <CloudIcon />,
    title: "Cloud Infra",
    description: "Autoscaled APIs, ingestion, WebRTC, Kafka/Redis for realtime data.",
    buttonLink: "#",
  },
  {
    icon: <ShieldIcon />,
    title: "Security Stack",
    description: "AuthN/AuthZ, rate-limiting, anti-tamper telemetry, secrets & vaults.",
    buttonLink: "#",
  },
  {
    icon: <ShoppingBagIcon />,
    title: "Merch & E-com",
    description: "Headless storefronts, payments, fulfillment, CRM/ERP integrations.",
    buttonLink: "#",
  },
  {
    icon: <LinkIcon />,
    title: "Game Dev Tooling",
    description: "Live-ops dashboards, build pipelines, crash/telemetry insights.",
    buttonLink: "#",
  },
];

// Animation variants for Framer Motion
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // Stagger cards' appearance
    },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 10 },
  },
};

const Features = () => {
  return (
    <section id="features" className="relative py-20 sm:py-32 overflow-hidden bg-gradient-to-b from-transparent to-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.h2 
          className="text-4xl sm:text-5xl font-extrabold text-white mb-16 text-center tracking-tight"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Transform Your Stack with{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            PatronumX
          </span>
        </motion.h2>

        {/* Feature Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {featuresData.map((feature, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: '0 0 30px rgba(168,85,247,0.4)', 
                transition: { type: 'spring', stiffness: 300 }
              }}
              className="relative p-[1px] rounded-2xl bg-gradient-to-br from-purple-500/30 via-blue-500/30 to-purple-500/30 overflow-hidden group"
            >
              {/* Inner card content */}
              <div className="bg-slate-900/80 backdrop-blur-md rounded-[15px] p-6 h-full flex flex-col items-start text-left">
                <div className="flex items-center justify-center size-12 rounded-full bg-slate-800/50 border border-slate-700 mb-4 transition-colors group-hover:bg-slate-700/70">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-base flex-grow">{feature.description}</p>
                {/* Learn More button removed */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;