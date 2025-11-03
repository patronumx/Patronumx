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
  Smartphone,
  Cpu,
} from "lucide-react";

/* -------------------------- Content -------------------------- */

const wins = [
  "Sub-2s menu loads for high-traffic brands via code-split routes + image CDN.",
  "AI copilots for ops/support that reduce manual response time by 60%—brand safe.",
  "Verifiable receipts & loyalty with on-chain proofs that cut dispute friction.",
];

const stackLeft = [
  { label: "Frontend", chips: ["React / Next / Vite", "Tailwind / shadcn", "WebSockets"] },
  { label: "Backend", chips: ["Node (Nest/Fastify)", "Python (FastAPI)", "Go (select cases)"] },
  { label: "AI", chips: ["OpenAI / local LLMs", "RAG, embeddings", "Guardrails & filters"] },
  { label: "Observability", chips: ["OpenTelemetry", "Grafana & Prometheus", "Sentry"] },
];

const stackRight = [
  { label: "Mobile", chips: ["React Native / Flutter", "Offline-first patterns"] },
  { label: "Data", chips: ["Postgres, Redis", "Elastic/OpenSearch", "BigQuery"] },
  { label: "Infra", chips: ["Docker, K8s (when useful)", "AWS / GCP / Vercel"] },
  { label: "Security", chips: ["OWASP baseline", "Dependency hygiene", "Least-privilege IAM"] },
];

const roles = ["Full-stack Engineer", "Frontend Engineer", "Data/AI Engineer", "Product Designer"];

/* How we work */
const steps = [
  {
    n: "01",
    title: "Discover & Frame",
    body:
      "Agree on outcomes, risks, and SLOs. If it can’t be measured, it can’t be improved.",
  },
  {
    n: "02",
    title: "Blueprint",
    body:
      "Architecture, observability plan, security model, and runbooks before cutting code.",
  },
  {
    n: "03",
    title: "Sprint & Ship",
    body:
      "Short cycles, weekly demos, production early. Small, safe, reversible releases.",
  },
  {
    n: "04",
    title: "Measure & Iterate",
    body:
      "Analytics + experimentation frameworks. Learn fast; keep what works.",
  },
  {
    n: "05",
    title: "Handoff or Co-Run",
    body:
      "Docs, SLOs, monitors, and training. Stay with us, or run it yourself.",
  },
];

/* Principles */
const principles = [
  {
    title: "Precision > noise",
    body:
      "Fewer features, better outcomes. We optimize for clarity and measurable impact.",
  },
  {
    title: "Protection by design",
    body:
      "Security, privacy, and compliance are part of the spec—not bolt-ons.",
  },
  {
    title: "Performance is a feature",
    body:
      "Fast wins. Sub-2s loads, low latency, lean payloads by default.",
  },
  {
    title: "Ownership",
    body:
      "We build like we’ll be on-call. Clean repos, clean hand-offs, no black boxes.",
  },
  {
    title: "Clarity",
    body:
      "SLOs, runbooks, observability from day one. You always know what shipped—and why.",
  },
];

/* ------------------------ Main Section ------------------------ */

export default function SelectedWinsAndStack() {
  return (
    <section className="relative py-16 sm:py-20 px-6 text-white">
      {/* Subtle star/gradient background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
      </div>

      {/* ----------------------- Selected Wins ----------------------- */}
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <Trophy className="text-amber-300" size={22} />
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Selected wins</h2>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
          <ul className="space-y-3 sm:space-y-3.5">
            {wins.map((w, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 size={18} className="mt-[2px] text-amber-300" />
                <p className="text-slate-200/90 leading-relaxed">{w}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* ------------------------- Stats Row ------------------------- */}
      <div className="max-w-6xl mx-auto mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { stat: "50+", sub: "Production releases (12 mo)" },
          { stat: "99.9%+", sub: "Uptime on managed props" },
          { stat: "2–8 wks", sub: "Time-to-first-value" },
          { stat: "100%", sub: "Projects shipped w/ SLOs + obs" },
        ].map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/[0.045] backdrop-blur-md p-5 text-center shadow-[0_6px_24px_rgba(0,0,0,0.35)]"
          >
            <div className="text-3xl font-extrabold mb-1">{s.stat}</div>
            <div className="text-sm text-slate-300">{s.sub}</div>
          </motion.div>
        ))}
      </div>

      {/* ---------------------- Testimonial Card ---------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className="max-w-6xl mx-auto mt-6 rounded-2xl border border-white/10 bg-white/[0.045] backdrop-blur-md p-6 sm:p-8 text-slate-200 shadow-[0_6px_24px_rgba(0,0,0,0.35)]"
      >
        <p className="text-lg leading-relaxed">
          "PatronumX is the rare partner that can ship fast and still hand over clean systems.
          They built exactly what we needed, with clarity and precision."
        </p>
        <p className="mt-2 text-slate-400">— Client, Head of Technology</p>
      </motion.div>

      {/* ------------------------ How we work ------------------------ */}
      <div className="max-w-6xl mx-auto mt-10 sm:mt-14">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-5">
          How we work
        </h2>

        {/* 3 cards top row */}
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-5">
          {steps.slice(0, 3).map((s, i) => (
            <StepCard key={s.n} step={s} index={i} />
          ))}
        </div>

        {/* 2 cards second row */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-5 mt-4">
          {steps.slice(3).map((s, i) => (
            <StepCard key={s.n} step={s} index={i + 3} />
          ))}
        </div>
      </div>

      {/* ---------------------- Principles (ethos) ---------------------- */}
      <div className="max-w-6xl mx-auto mt-10 sm:mt-14">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-5">
          Principles we won’t compromise
        </h2>

        <div className="grid lg:grid-cols-3 gap-4 sm:gap-5">
          {principles.slice(0, 3).map((p, i) => (
            <PrincipleCard key={p.title} item={p} index={i} />
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-5 mt-4">
          {principles.slice(3).map((p, i) => (
            <PrincipleCard key={p.title} item={p} index={i + 3} />
          ))}
        </div>
      </div>

      {/* --------------------------- The Stack --------------------------- */}
      <div className="max-w-6xl mx-auto mt-10 sm:mt-14">
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <Layers className="text-amber-300" size={22} />
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            The stack <span className="text-slate-300">(opinionated, interchangeable)</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-5">
          <div className="space-y-4 sm:space-y-5">
            {stackLeft.map((group, gi) => (
              <GroupCard key={group.label} group={group} index={gi} />
            ))}
          </div>
          <div className="space-y-4 sm:space-y-5">
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
        className="max-w-6xl mx-auto mt-8 sm:mt-10 rounded-2xl border border-white/10 bg-white/[0.045] backdrop-blur-md p-6 sm:p-8 shadow-[0_6px_24px_rgba(0,0,0,0.35)]"
      >
        <h3 className="text-3xl font-extrabold mb-2">Careers</h3>
        <p className="text-slate-300 max-w-4xl">
          We hire people who care about <b>craft and clarity</b>. If you enjoy building things that
          stand up to production reality—and you like clean hand-offs as much as clean code—reach out.
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {roles.map((r) => (
            <span
              key={r}
              className="text-[12px] sm:text-sm px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.06] text-slate-200 hover:text-amber-300 hover:border-amber-400/40 transition"
            >
              {r}
            </span>
          ))}
        </div>

        <div className="mt-4 text-slate-300">
          Email us:{" "}
          <a href="mailto:careers@patronumx.com" className="underline text-amber-300">
            careers@patronumx.com
          </a>
        </div>
      </motion.div>

      {/* ----------------------------- CTA ----------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: 0.1 }}
        className="relative max-w-6xl mx-auto mt-6 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-slate-900/80 via-purple-900/20 to-slate-900/80 backdrop-blur-md p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(139,92,246,0.15)] overflow-hidden"
      >
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          <div className="text-center lg:text-left flex-1">
            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-2">
              Let's build something{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                durable
              </span>
              .
            </h4>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Launching a new product, modernizing a stack, or building real-world impact—we're here to help.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full lg:w-auto">
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
    Frontend: <Zap size={16} />,
    Backend: <ShieldCheck size={16} />,
    AI: <Bot size={16} />,
    Observability: <ShieldCheck size={16} />,
    Mobile: <Smartphone size={16} />,
    Data: <Layers size={16} />,
    Infra: <Cpu size={16} />,
    Security: <ShieldCheck size={16} />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="rounded-2xl border border-white/10 bg-white/[0.045] hover:bg-white/[0.065] backdrop-blur-md p-5 sm:p-6 shadow-[0_6px_24px_rgba(0,0,0,0.35)]"
    >
      <div className="flex items-center gap-2 text-slate-200 mb-4">
        <span className="text-amber-300">{icons[group.label] ?? <Layers size={16} />}</span>
        <h3 className="text-lg font-semibold">{group.label}</h3>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {group.chips.map((c) => (
          <span
            key={c}
            className="text-[12px] sm:text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.06] text-slate-200 hover:text-amber-300 hover:border-amber-400/40 transition"
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
      className="rounded-2xl border border-white/10 bg-white/[0.05] hover:bg-white/[0.07] backdrop-blur-md p-5 sm:p-6 shadow-[0_6px_20px_rgba(0,0,0,0.32)]"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-amber-400/15 border border-amber-300/30 text-amber-300 font-bold">
          {step.n}
        </span>
        <h3 className="text-lg font-semibold">{step.title}</h3>
      </div>
      <p className="text-slate-300">{step.body}</p>
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
      className="rounded-2xl border border-white/10 bg-white/[0.05] hover:bg-white/[0.07] backdrop-blur-md p-5 sm:p-6 shadow-[0_6px_20px_rgba(0,0,0,0.32)]"
    >
      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
      <p className="text-slate-300">{item.body}</p>
    </motion.div>
  );
}

/* Premium CTA buttons */

function PrimaryCTA({ href, children }) {
  return (
    <a
      href={href}
      className="group relative inline-flex items-center justify-center gap-2 rounded-xl px-6 sm:px-8 py-3.5 sm:py-4
                 font-bold text-white transition-all duration-300 overflow-hidden
                 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500
                 shadow-lg shadow-purple-500/50
                 hover:shadow-xl hover:shadow-purple-500/60
                 hover:scale-105
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

      <span className="relative z-10 flex items-center gap-2 text-sm sm:text-base">
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current group-hover:scale-110 transition-transform duration-300">
          <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-.4 3.25l-6.98 4.66a2 2 0 01-2.24 0L3.4 7.25A1 1 0 014 6h16a1 1 0 01-.4 1.25z" />
        </svg>
        <span>{children}</span>
        <svg
          viewBox="0 0 24 24"
          className="w-4 h-4 sm:w-5 sm:h-5 fill-current group-hover:translate-x-1 transition-transform duration-300"
        >
          <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
        </svg>
      </span>
    </a>
  );
}

function EmailPill({ href, children }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 sm:gap-3 rounded-xl px-4 sm:px-5 py-3 sm:py-3.5
                 border border-white/10 bg-white/[0.05] backdrop-blur-sm text-slate-200
                 hover:text-white hover:border-purple-400/40 hover:bg-white/[0.1]
                 transition-all duration-300
                 shadow-sm hover:shadow-lg hover:shadow-purple-500/20"
    >
      <span className="w-2 h-2 rounded-full bg-emerald-400/90 shadow-[0_0_10px_rgba(16,185,129,0.8)]
                       group-hover:shadow-[0_0_15px_rgba(16,185,129,1)] transition-shadow" />
      <span className="tracking-tight text-sm sm:text-base font-medium hidden sm:inline">{children}</span>
      <span className="tracking-tight text-xs font-medium sm:hidden">Email</span>
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300"
      >
        <path fill="currentColor" d="M13 5l7 7-7 7v-4H4v-6h9V5z" />
      </svg>
    </a>
  );
}
