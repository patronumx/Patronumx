// src/sections/SelectedWinsAndStack.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Layers,
  Bot,
  Cpu,
  Database,
  Network,
  BrainCircuit,
  Lock,
  Workflow
} from "lucide-react";

/* -------------------------- Content -------------------------- */

const wins = [
  "Reduced customer support costs by 90% via autonomous Level 1 AI agents.",
  "Processed 50M+ vector embeddings with sub-10ms retrieval latency.",
  "Deployed self-healing infrastructure that predicts outage spikes before they happen.",
];

const stackLeft = [
  { label: "Models", chips: ["OpenAI / Gemini", "Llama 3 / Mistral (Local)", "Anthropic Claude"] },
  { label: "Orchestration", chips: ["LangChain", "LangGraph", "Semantic Kernel"] },
  { label: "Vector Memory", chips: ["Pinecone", "Weaviate", "ChromaDB"] },
  { label: "Inference", chips: ["vLLM", "AWS Bedrock", "Modal / RunPod"] },
];

const stackRight = [
  { label: "Data Pipeline", chips: ["Apache Airflow", "Kafka", "Snowflake"] },
  { label: "Interface", chips: ["React (Generative UI)", "Streamlit", "Next.js"] },
  { label: "Observability", chips: ["LangSmith", "Arize Phoenix", "Weights & Biases"] },
  { label: "Security", chips: ["Guardrails AI", "Presidio (PII)", "OWASP LLM Top 10"] },
];

const roles = ["AI Architect", "ML Engineer", "Full-stack Developer", "Prompt Engineer"];

/* How we work */
const steps = [
  {
    n: "01",
    title: "Audit & Align",
    body:
      "We assess your data readiness and identify high-impact AI use cases. No hype, just ROI.",
  },
  {
    n: "02",
    title: "Model Blueprint",
    body:
      "Selecting the right LLMs, RAG architecture, and agent behaviors for your specific domain.",
  },
  {
    n: "03",
    title: "Prototype & Train",
    body:
      "Rapid prototyping with fine-tuning on your proprietary data. We validate efficacy early.",
  },
  {
    n: "04",
    title: "Eval & Alignment",
    body:
      " rigorous testing against hallucinations, safety guardrails, and performance benchmarks.",
  },
  {
    n: "05",
    title: "Deploy & Scale",
    body:
      "Production rollout on auto-scaling edge infra. Continuous monitoring and retraining loops.",
  },
];

/* Principles */
const principles = [
  {
    title: "Models are commodities",
    body:
      "Your data and your workflows are the moat. We build systems that swap models easily.",
  },
  {
    title: "Safety First",
    body:
      "We implement strict guardrails and PII redaction. AI should never be a liability.",
  },
  {
    title: "Latency Matters",
    body:
      "Optimized inference and caching strategies. Nobody likes waiting for a robot to think.",
  },
  {
    title: "Transparency",
    body:
      "Explainable AI. We ensure you understand why the system made a decision.",
  },
  {
    title: "Human-in-the-loop",
    body:
      "Critical workflows always have an escape hatch for human review.",
  },
];

/* ------------------------ Main Section ------------------------ */

/* ------------------------ Main Section ------------------------ */

export default function SelectedWinsAndStack() {
  return (
    <section className="relative py-24 sm:py-32 px-6 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      {/* ----------------------- Selected Wins ----------------------- */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-8 sm:mb-10">
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300">
            <Trophy size={24} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-500">
            Impact at Scale
          </h2>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-slate-900/40 backdrop-blur-xl p-8 sm:p-10 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <ul className="space-y-6">
            {wins.map((w, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="mt-1 p-1 rounded-full bg-amber-500/10 border border-amber-500/30">
                  <CheckCircle2 size={16} className="text-amber-300" />
                </div>
                <p className="text-slate-200 leading-relaxed text-lg font-light">{w}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* ------------------------- Stats Row ------------------------- */}
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
        {[
          { stat: "1B+", sub: "Tokens Processed" },
          { stat: "90%", sub: "Avg. Automation Rate" },
          { stat: "<50ms", sub: "Vector Retrieval Latency" },
          { stat: "100%", sub: "Data Privacy Compliance" },
        ].map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-[20px] border border-white/10 bg-slate-900/40 backdrop-blur-md p-6 text-center hover:border-purple-500/40 hover:bg-slate-900/60 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="text-3xl sm:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 group-hover:from-purple-200 group-hover:to-cyan-200 transition-all">{s.stat}</div>
            <div className="text-sm font-medium text-slate-500 group-hover:text-slate-300 transition-colors uppercase tracking-wide">{s.sub}</div>
          </motion.div>
        ))}
      </div>

      {/* ---------------------- Testimonial Card ---------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto mt-8 rounded-[24px] border border-white/10 bg-gradient-to-br from-purple-500/5 to-slate-900/40 backdrop-blur-md p-8 sm:p-12 text-center shadow-lg relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-10 font-serif text-9xl leading-none font-bold text-white pointer-events-none">"</div>
        <p className="text-xl sm:text-2xl leading-relaxed font-light text-slate-100 max-w-4xl mx-auto relative z-10">
          "PatronumX is the rare partner that can ship fast and still hand over clean systems.
          They built exactly what we needed, with clarity and precision."
        </p>
        <p className="mt-6 text-purple-300 font-medium tracking-wide uppercase text-sm">— Client, Head of Technology</p>
      </motion.div>

      {/* ------------------------ How we work ------------------------ */}
      <div className="max-w-6xl mx-auto mt-24 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-10 text-white">
          How we work
        </h2>

        {/* 3 cards top row */}
        <div className="grid lg:grid-cols-3 gap-6">
          {steps.slice(0, 3).map((s, i) => (
            <StepCard key={s.n} step={s} index={i} />
          ))}
        </div>

        {/* 2 cards second row */}
        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          {steps.slice(3).map((s, i) => (
            <StepCard key={s.n} step={s} index={i + 3} />
          ))}
        </div>
      </div>

      {/* ---------------------- Principles (ethos) ---------------------- */}
      <div className="max-w-6xl mx-auto mt-24 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-10 text-white">
          Principles we won’t compromise
        </h2>

        <div className="grid lg:grid-cols-3 gap-6">
          {principles.slice(0, 3).map((p, i) => (
            <PrincipleCard key={p.title} item={p} index={i} />
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          {principles.slice(3).map((p, i) => (
            <PrincipleCard key={p.title} item={p} index={i + 3} />
          ))}
        </div>
      </div>

      {/* --------------------------- The Stack --------------------------- */}
      <div className="max-w-6xl mx-auto mt-24 relative z-10">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
            <Layers size={24} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            The stack <span className="text-slate-500 text-2xl font-light ml-2 break-keep block sm:inline mt-2 sm:mt-0">(opinionated, interchangeable)</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            {stackLeft.map((group, gi) => (
              <GroupCard key={group.label} group={group} index={gi} />
            ))}
          </div>
          <div className="space-y-6">
            {stackRight.map((group, gi) => (
              <GroupCard key={group.label} group={group} index={gi} />
            ))}
          </div>
        </div>
      </div>

      {/* --------------------------- Careers ---------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className="max-w-6xl mx-auto mt-20 rounded-[24px] border border-white/10 bg-slate-900/40 backdrop-blur-xl p-10 shadow-xl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-50" />
        <div className="relative z-10">
          <h3 className="text-3xl font-bold mb-4 text-white">Careers</h3>
          <p className="text-slate-300 max-w-4xl text-lg leading-relaxed mb-8">
            We hire people who care about <b>craft and clarity</b>. If you enjoy building things that
            stand up to production reality—and you like clean hand-offs as much as clean code—reach out.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {roles.map((r) => (
              <span
                key={r}
                className="text-sm px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all cursor-default"
              >
                {r}
              </span>
            ))}
          </div>

          <div className="text-slate-300">
            Email us:{" "}
            <a href="mailto:careers@patronumx.com" className="text-purple-400 font-semibold hover:text-purple-300 transition-colors">
              careers@patronumx.com
            </a>
          </div>
        </div>
      </motion.div>

      {/* ----------------------------- CTA ----------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative max-w-6xl mx-auto mt-12 rounded-[30px] border border-purple-500/20 bg-slate-900/80 backdrop-blur-xl p-10 sm:p-14 shadow-2xl overflow-hidden group"
      >
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] -z-10 group-hover:bg-purple-600/30 transition-colors duration-700" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px] -z-10 group-hover:bg-cyan-600/30 transition-colors duration-700" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 brightness-100 contrast-150 mix-blend-overlay"></div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
          <div className="text-center lg:text-left flex-1">
            <h4 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
              Let's build something{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
                durable
              </span>
              .
            </h4>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
              Launching a new product, modernizing a stack, or building real-world impact—we're here to help.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <PrimaryCTA href="mailto:thepatronumx@gmail.com">Contact us</PrimaryCTA>
            <EmailPill href="mailto:thepatronumx@gmail.com">thepatronumx@gmail.com</EmailPill>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ----------------------- Small sub components ----------------------- */

function GroupCard({ group, index }) {
  const icons = {
    Models: <BrainCircuit size={18} />,
    Orchestration: <Workflow size={18} />,
    "Vector Memory": <Database size={18} />,
    Inference: <Cpu size={18} />,
    "Data Pipeline": <Network size={18} />,
    Interface: <Zap size={18} />,
    Observability: <ShieldCheck size={18} />,
    Security: <Lock size={18} />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="rounded-[20px] border border-white/10 bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-md p-6 sm:p-7 shadow-lg transition-all duration-300 hover:border-purple-500/30 group"
    >
      <div className="flex items-center gap-3 text-white mb-5">
        <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-purple-400 group-hover:text-purple-300 transition-colors">
          {icons[group.label] ?? <Layers size={18} />}
        </div>
        <h3 className="text-lg font-bold">{group.label}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {group.chips.map((c) => (
          <span
            key={c}
            className="text-xs font-medium px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-400 group-hover:text-slate-200 group-hover:border-white/20 transition-all"
          >
            {c}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

/* How we work: card */
function StepCard({ step, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="h-full rounded-[24px] border border-white/10 bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-md p-8 shadow-lg transition-all duration-300 group hover:-translate-y-1"
    >
      <div className="flex items-center gap-4 mb-4">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-500/5 border border-amber-500/20 text-amber-300 font-bold text-lg shadow-inner">
          {step.n}
        </span>
        <h3 className="text-xl font-bold text-white group-hover:text-amber-100 transition-colors">{step.title}</h3>
      </div>
      <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{step.body}</p>
    </motion.div>
  );
}

/* Principle: card */
function PrincipleCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="h-full rounded-[24px] border border-white/10 bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-md p-8 shadow-lg transition-all duration-300 hover:border-purple-500/30 group"
    >
      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-200 transition-colors">{item.title}</h3>
      <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{item.body}</p>
    </motion.div>
  );
}

/* Premium CTA buttons */

function PrimaryCTA({ href, children }) {
  return (
    <a
      href={href}
      className="group relative inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4
                 font-bold text-white transition-all duration-300 overflow-hidden
                 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500
                 shadow-[0_0_20px_rgba(168,85,247,0.4)]
                 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
                 hover:scale-[1.02]
                 active:scale-95"
    >
      {/* Shine effect */}
      <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100
                       bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.3),transparent_50%)]
                       transition-opacity duration-300" />

      {/* Animated gradient border */}
      <span className="absolute inset-0 rounded-xl opacity-75 group-hover:opacity-100
                       bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400
                       blur-sm transition-opacity duration-300"
        style={{ zIndex: -1 }} />

      <span className="relative z-10 flex items-center gap-2 text-base">
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current group-hover:scale-110 transition-transform duration-300">
          <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-.4 3.25l-6.98 4.66a2 2 0 01-2.24 0L3.4 7.25A1 1 0 014 6h16a1 1 0 01-.4 1.25z" />
        </svg>
        <span>{children}</span>
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-current group-hover:translate-x-1 transition-transform duration-300"
        >
          <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
        </svg>
      </span>
    </a>
  );
}

function EmailPill({ href, children }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-3 rounded-xl px-6 py-4
                 border border-white/10 bg-white/5 backdrop-blur-xl text-slate-300
                 hover:text-white hover:border-purple-400/40 hover:bg-white/10
                 transition-all duration-300
                 shadow-sm hover:shadow-lg hover:shadow-purple-500/10"
    >
      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)]
                       group-hover:shadow-[0_0_15px_rgba(16,185,129,1)] transition-shadow" />
      <span className="tracking-tight text-base font-medium hidden sm:inline">{children}</span>
      <span className="tracking-tight text-sm font-medium sm:hidden">Email</span>
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300"
      >
        <path fill="currentColor" d="M13 5l7 7-7 7v-4H4v-6h9V5z" />
      </svg>
    </a>
  );
}
