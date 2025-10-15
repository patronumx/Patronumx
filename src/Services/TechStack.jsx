import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Shield,
  Globe,
  LayoutDashboard,
  Smartphone,
  Settings2,
  Bot,
  BarChart3,
  Wallet,
  CheckCircle2,
} from "lucide-react";

const CATEGORIES = [
  "All",
  "Esports",
  "Web Development",
  "App Development",
  "AI & Data",
  "Blockchain",
];

const SERVICES = [
  {
    id: 1,
    icon: <Cpu size={22} />,
    title: "Broadcast Graphics & Overlays",
    desc: "HTML5/OBS/NDI overlays driven by real-time data—lower thirds, score bugs, match timers, leaderboards, sponsor stingers.",
    points: [
      "Realtime sockets + control panel",
      "Data ingest from tournament APIs",
      "Operator UI with safety guards",
      "Latency-safe scene switching",
    ],
    tags: ["OBS", "HTML5", "NDI", "Node.js"],
    category: "Esports",
  },
  {
    id: 2,
    icon: <Shield size={22} />,
    title: "Tournament Ops Toolkit",
    desc: "Match lobbies, brackets, team registration, anti-smurf/anti-cheat signals & referee dashboards for fair play at scale.",
    points: [
      "Ref tools (timeouts, rulings)",
      "Bracket, seeds, check-ins",
      "Player identity sanity checks",
      "Audit logs and incident reports",
    ],
    tags: ["Ops", "Admin", "Anti-cheat"],
    category: "Esports",
  },
  {
    id: 3,
    icon: <Globe size={22} />,
    title: "Headless Commerce & CMS",
    desc: "Lightning fast storefronts with headless CMS—split routes, edge caching, and conversion-first UX for food & gaming brands.",
    points: [
      "Next/Vite + Headless CMS",
      "A/B tests + analytics events",
      "Dynamic offers & bundles",
      "Localization & multi-branch menus",
    ],
    tags: ["Headless", "Vite", "CMS", "A/B"],
    category: "Web Development",
  },
  {
    id: 4,
    icon: <LayoutDashboard size={22} />,
    title: "Admin Panels & Dashboards",
    desc: "Operator-first admin apps with access control, audit trails, exports, and realtime metrics to run your business with confidence.",
    points: [
      "Role-based permissions",
      "Searchable tables & exports",
      "WebSockets or SSE feeds",
      "Global keyboard actions",
    ],
    tags: ["RBAC", "SSE", "UX"],
    category: "Web Development",
  },
  {
    id: 5,
    icon: <Smartphone size={22} />,
    title: "Consumer Apps",
    desc: "Personalized mobile apps for ordering, loyalty & community—deep links, push campaigns, and wallet checkout.",
    points: [
      "React Native / Flutter",
      "Wallet & social login",
      "Offer calendars & rewards",
      "Offline-first patterns",
    ],
    tags: ["RN", "Flutter", "Loyalty"],
    category: "App Development",
  },
  {
    id: 6,
    icon: <Settings2 size={22} />,
    title: "Staff & Ops Apps",
    desc: "Kitchen displays, runner tablets, and courier apps—built for low-latency communication and rugged environments.",
    points: [
      "KDS + ticket routing",
      "Multi-device sync",
      "Background tasks",
      "Crash-proof UX",
    ],
    tags: ["KDS", "Sync", "Ops"],
    category: "App Development",
  },
  {
    id: 7,
    icon: <Bot size={22} />,
    title: "AI CX: Chat, Menus & Support",
    desc: "LLM chat tuned to your brand—menu Q&A, order assistance, post-order support with guardrails and human handoff.",
    points: [
      "RAG tuned with your data",
      "Tone & safety policies",
      "Analytics & fallback routes",
      "POS/CRM intents",
    ],
    tags: ["LLM", "RAG", "Guardrails"],
    category: "AI & Data",
  },
  {
    id: 8,
    icon: <BarChart3 size={22} />,
    title: "Forecasting & Creative at Scale",
    desc: "Demand forecasting, inventory planning, and ad creative generation with measurable uplift and privacy-first pipelines.",
    points: [
      "Prophet/ARIMA or ML stacks",
      "1P conversions & pixels",
      "Creative templates (video/img)",
      "Experiment diaries & KPIs",
    ],
    tags: ["ML", "1P Data", "ROAS"],
    category: "AI & Data",
  },
  {
    id: 9,
    icon: <Wallet size={22} />,
    title: "Wallet Integrations & Gating",
    desc: "Token-gated offers and community perks; seamless wallet onboarding; off-chain + on-chain event tracking.",
    points: [
      "WalletConnect + email wallets",
      "Token/NFT gating",
      "On-chain events with off-chain UX",
      "Fraud signals & throttles",
    ],
    tags: ["Wallet", "NFT", "Events"],
    category: "Blockchain",
  },
  {
    id: 10,
    icon: <CheckCircle2 size={22} />,
    title: "Proof & Receipts",
    desc: "Verifiable on-chain receipts for limited drops, tournament rewards or donations—without burdening your users.",
    points: [
      "Gas-optimized actions",
      "Custodial or non-custodial",
      "Indexers & lightweight nodes",
      "Data vault privacy patterns",
    ],
    tags: ["Proof", "Receipts", "Privacy"],
    category: "Blockchain",
  },
];

export default function TechStack() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? SERVICES : SERVICES.filter((s) => s.category === active);

  return (
    <section className="py-20 px-6 text-white bg-transparent relative">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h1 className="font-extrabold text-4xl sm:text-5xl mb-3">
          One Stack for Esports, Web, Apps, AI & Blockchain
        </h1>
        <p className="text-slate-300 max-w-3xl mx-auto">
          From live broadcasts to headless commerce, AI copilots, and verifiable receipts — we ship fast,
          measure impact, and keep hand-offs clean with docs, SLOs, and observability.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full border text-sm transition-all duration-300 ${
              active === cat
                ? "bg-amber-400/20 border-amber-400 text-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.4)]"
                : "border-white/10 text-gray-300 hover:border-amber-400/40"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Service Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <AnimatePresence>
          {filtered.map((svc) => (
            <motion.div
              key={svc.id}
              layout
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 25 }}
              transition={{ duration: 0.3 }}
              className="group relative border border-white/10 rounded-2xl bg-white/[0.05] hover:bg-white/[0.08] backdrop-blur-md shadow-xl p-6 text-left transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-amber-400/10 text-amber-300">{svc.icon}</div>
                <h3 className="text-lg font-semibold group-hover:text-amber-300 transition-colors">
                  {svc.title}
                </h3>
              </div>

              <p className="text-sm text-slate-300 mb-4">{svc.desc}</p>

              <ul className="text-sm text-gray-400 list-disc pl-5 space-y-1 mb-4">
                {svc.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-5">
                {svc.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-1 border border-white/10 rounded-full bg-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button className="px-4 py-2 border border-amber-400/60 rounded-md text-sm text-amber-300 hover:bg-amber-400/20 transition-all">
                Get a quote
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
