// src/components/sections/OurServices.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  MonitorCog, Camera, BarChart3, Share2, CalendarDays,
  Search, Film, Megaphone, Sparkles, Gift, Check, Bot,
  Cpu, Zap, Layers, Globe, Shield, Terminal
} from "lucide-react";

/* Data */
const productsData = [
  {
    id: "nexus",
    icon: <Bot size={32} />,
    color: "#a855f7",
    title: "Nexus Agents",
    description: "Deploy autonomous AI workers that operate 24/7—handling support, sales, and complex workflows without human intervention.",
    features: ["Multi-agent orchestration", "Long-term memory context", "Tool-use & API actions"]
  },
  {
    id: "infinity",
    icon: <Globe size={32} />,
    color: "#3b82f6",
    title: "Infinity Cloud",
    description: "Serverless edge infrastructure that auto-scales instantly. Zero cold starts, 99.99% uptime, and global low-latency distribution.",
    features: ["Edge-native computing", "DDoS shield included", "Instant rollbacks"]
  },
  {
    id: "vision",
    icon: <Camera size={32} />,
    color: "#14b8a6",
    title: "Vision Forge",
    description: "Generative image studio for marketing assets. Create photorealistic product shots and dynamic campaign visuals in seconds.",
    features: ["Text-to-Image generation", "Brand style consistency", "Batch asset production"]
  },
  {
    id: "insights",
    icon: <BarChart3 size={32} />,
    color: "#f59e0b",
    title: "Deep Insights",
    description: "Predictive analytics engine that forecasts trends, churn, and revenue. Turn raw data into actionable strategic intelligence.",
    features: ["Real-time dashboards", "Predictive churn modeling", "Revenue forecasting"]
  },
  {
    id: "pulse",
    icon: <Share2 size={32} />,
    color: "#ec4899",
    title: "Pulse Monitor",
    description: "AI-driven social listening and automated engagement. Detect brand sentiment and auto-respond to community signals.",
    features: ["Sentiment analysis", "Trend spotting", "Auto-response bots"]
  },
  {
    id: "flow",
    icon: <Zap size={32} />,
    color: "#eab308",
    title: "Flow Pilot",
    description: "Drag-and-drop workflow builder for automating cross-platform tasks. Connect your apps and let AI handle the busy work.",
    features: ["Visual workflow builder", "500+ App integrations", "Trigger-based logic"]
  },
  {
    id: "matrix",
    icon: <Search size={32} />,
    color: "#8b5cf6",
    title: "Rank Matrix",
    description: "Semantic SEO optimization. Analyze search intent, optimize content structure, and dominate rankings with entity graphs.",
    features: ["Entity-based graphing", "Content optimization", "Competitor analysis"]
  },
  {
    id: "motion",
    icon: <Film size={32} />,
    color: "#f43f5e",
    title: "Motion Synth",
    description: "Text-to-Video generation for high-converting shorts and ads. Produce studio-quality motion content from simple prompts.",
    features: ["AI video generation", "Voice synthesis", "Auto-captions"]
  },
  {
    id: "neural",
    icon: <Megaphone size={32} />,
    color: "#f97316",
    title: "Ad Neural",
    description: "Programmatic advertising engine used to automate bidding, creative testing, and ROAS optimization across all channels.",
    features: ["Automated bidding", "Creative variance testing", "Cross-channel attribution"]
  },
  {
    id: "identity",
    icon: <Shield size={32} />,
    color: "#06b6d4",
    title: "Identity Core",
    description: "Centralized brand design system. Enforce visual consistency and asset compliance across all your AI-generated outputs.",
    features: ["Brand guardrails", "Asset compliance", "Design system sync"]
  }
];

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05 } } };
const cardVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.4 } } };

export default function OurServices() {
  return (
    <section className="relative py-32 px-4 overflow-hidden" id="products">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-purple-300 mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              The Product Suite
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8">
              AI-Native <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">Ecosystem</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-xl leading-relaxed">
              A complete arsenal of intelligent tools designed to automate, optimize, and scale your digital operations to new heights.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {productsData.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              className="group relative h-full"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-b from-white/20 to-white/0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              <div className="relative h-full bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[20px] p-8 hover:bg-slate-900/60 transition-all duration-300 group-hover:-translate-y-2 flex flex-col">

                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-white group-hover:scale-110 transition-transform duration-300 shadow-xl ring-1 ring-white/5"
                    style={{
                      boxShadow: `0 0 0 1px ${product.color}20, 0 8px 30px ${product.color}20`
                    }}>
                    {React.cloneElement(product.icon, { color: product.color, size: 28 })}
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: product.color }} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                  {product.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-3 pt-6 border-t border-white/5">
                  {product.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs font-medium text-slate-500 group-hover:text-slate-400 transition-colors">
                      <Check size={14} className="mt-0.5 shrink-0" style={{ color: product.color }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
