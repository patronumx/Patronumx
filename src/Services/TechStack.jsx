import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BrainCircuit,
  Database,
  Cpu,
  Eye,
  Network,
  CloudLightning,
  Workflow,
  ShieldCheck,
  Bot
} from "lucide-react";
import ContactModal from "../components/ContactModal";

const CATEGORIES = [
  "All",
  "Generative Models",
  "Infrastructure",
  "Intelligent Agents",
  "Computer Vision"
];

const SERVICES = [
  {
    id: 1,
    icon: <Bot size={24} />,
    title: "Autonomous Agents",
    desc: "Self-governing AI workers that plan, execute, and iterate on complex workflows without human intervention.",
    points: [
      "Multi-agent orchestration",
      "Memory & long-term retention",
      "Tool use & API execution",
      "Self-correction loops"
    ],
    tags: ["Agents", "LangChain", "AutoGPT"],
    category: "Intelligent Agents",
  },
  {
    id: 2,
    icon: <Database size={24} />,
    title: "Vector Database Infra",
    desc: "High-performance semantic search and knowledge retrieval systems for RAG pipelines.",
    points: [
      "Pinecone / Weaviate clusters",
      "Billion-scale indexing",
      "Hybrid search (keyword + semantic)",
      "Real-time embeddings"
    ],
    tags: ["RAG", "Vector DB", "Embeddings"],
    category: "Infrastructure",
  },
  {
    id: 3,
    icon: <BrainCircuit size={24} />,
    title: "Fine-Tuned LLMs",
    desc: "Custom language models trained on your proprietary data for unmatched domain expertise.",
    points: [
      "Domain-specific datasets",
      "Privacy-preserving training",
      "Model quantization"
    ],
    tags: ["LLM", "Fine-tuning", "PyTorch"],
    category: "Generative Models",
  },
  {
    id: 4,
    icon: <Eye size={24} />,
    title: "Computer Vision Systems",
    desc: "Automated visual inspection, object detection, and facial recognition for security and retail.",
    points: [
      "YOLO / ResNet pipelines",
      "Real-time video inference",
      "Edge deployment capability",
      "Anomaly detection"
    ],
    tags: ["CV", "YOLO", "Edge AI"],
    category: "Computer Vision",
  },
  {
    id: 5,
    icon: <ShieldCheck size={24} />,
    title: "AI Safety & Governance",
    desc: "Guardrails and evaluation frameworks to ensure your AI behaves predictably and ethically.",
    points: [
      "Output validation & filtering",
      "Hallucination detection",
      "PII redaction layers",
      "Regulatory compliance logging"
    ],
    tags: ["Safety", "Compliance", "Guardrails"],
    category: "Infrastructure",
  },
  {
    id: 6,
    icon: <CloudLightning size={24} />,
    title: "Edge AI Deployment",
    desc: "Running high-performance models locally on devices to reduce latency and bandwidth costs.",
    points: [
      "TensorRT / ONNX optimization",
      "Mobile-first inference",
      "Offline capability",
      "Distributed sensing"
    ],
    tags: ["Edge", "ONNX", "IoT"],
    category: "Infrastructure",
  },
  {
    id: 7,
    icon: <Workflow size={24} />,
    title: "Generative Workflows",
    desc: "End-to-end content production pipelines generating text, code, images, and video on demand.",
    points: [
      "Prompt engineering at scale",
      "Multi-modal generation",
      "Asset management integration",
      "Style consistency controls"
    ],
    tags: ["GenAI", "Content", "Automation"],
    category: "Generative Models",
  },
  {
    id: 8,
    icon: <Network size={24} />,
    title: "Predictive Analytics",
    desc: "Forecasting models that find hidden patterns in your data to anticipate market trends.",
    points: [
      "Time-series forecasting",
      "Churn prediction",
      "Customer lifetime value",
      "Demand planning"
    ],
    tags: ["Analytics", "Forecasting", "Data"],
    category: "Generative Models",
  },
  {
    id: 9,
    icon: <Cpu size={24} />,
    title: "Custom Neural Networks",
    desc: "Bespoke deep learning architectures designed for your unique problem space.",
    points: [
      "Architecture design",
      "Hyperparameter optimization",
      "Training rigor & MLOps",
      "Scalable inference APIs"
    ],
    tags: ["Deep Learning", "Neural Nets", "R&D"],
    category: "Intelligent Agents",
  },
];

export default function TechStack() {
  const [active, setActive] = useState("All");
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const filtered = active === "All" ? SERVICES : SERVICES.filter((s) => s.category === active);

  const handleGetQuote = useCallback((svc) => {
    setSelectedService(svc);
    setIsContactOpen(true);
  }, []);

  const handleContactSubmit = useCallback((data) => {
    if (selectedService) {
      data.serviceInterest = selectedService.title;
    }
    console.log("Contact form:", data);
  }, [selectedService]);

  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 relative bg-transparent text-white overflow-hidden" id="tech-stack">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-purple-900/10 blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none brightness-50 contrast-150"></div>

      <div className="max-w-7xl mx-auto text-center mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-purple-300 mb-6 backdrop-blur-md">
            Our Arsenal
          </span>
          <h1 className="font-bold text-4xl sm:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-white to-cyan-200 tracking-tight">
            Core Technologies
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We leverage the most advanced stack in the industry. From self-healing infrastructure to specialized generative models, every layer is built for intelligence.
          </p>
        </motion.div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16 relative z-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border backdrop-blur-md ${active === cat
              ? "bg-white/10 border-purple-500/50 text-white shadow-[0_0_25px_rgba(168,85,247,0.3)] scale-105"
              : "bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto relative z-10">
        <AnimatePresence mode="popLayout">
          {filtered.map((svc) => (
            <motion.div
              key={svc.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-3xl p-8 bg-slate-900/40 border border-white/10 hover:border-purple-500/30 backdrop-blur-xl transition-all duration-500 overflow-hidden"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-6">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-purple-300 group-hover:text-cyan-300 group-hover:scale-110 transition-all duration-300 shadow-xl">
                    {svc.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 transition-all">
                    {svc.title}
                  </h3>
                </div>

                <p className="text-slate-400 mb-8 leading-relaxed h-14 md:h-12 overflow-hidden text-ellipsis line-clamp-2">
                  {svc.desc}
                </p>

                <ul className="space-y-3 mb-8">
                  {svc.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-500 group-hover:text-slate-300 transition-colors">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500/50 group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all" />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors">
                  <div className="flex gap-2">
                    {svc.tags.slice(0, 2).map((t) => (
                      <span key={t} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-slate-500 border border-white/5 group-hover:border-white/10 group-hover:text-slate-400 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => handleGetQuote(svc)}
                    className="text-sm font-semibold text-purple-400 hover:text-cyan-300 transition-colors flex items-center gap-1 group/btn"
                  >
                    Details <span className="block transition-transform group-hover/btn:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        onSubmit={handleContactSubmit}
      />
    </section>
  );
}
