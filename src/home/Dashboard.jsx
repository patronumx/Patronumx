// src/components/DashboardShowcase.jsx
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence, useAnimate } from 'framer-motion';
import { Bell, Search, ShoppingCart, ListOrdered } from 'lucide-react';
import { AreaChart, Area, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

// --- AI DUMMY DATA --- //
const quickStatsData = { activeAgents: 124, tokensProcessed: 8945, inferenceCalls: 12450890 };

const sessionData = [
  { name: 'Support', value: 45 },
  { name: 'Analytics', value: 32 },
  { name: 'Sales', value: 28 },
];
// palette: AI/Cyberpunk
const SESSION_COLORS = ['#d946ef', '#8b5cf6', '#06b6d4'];

const trendData = [
  { name: '00:00', Load: 2400 }, { name: '04:00', Load: 1800 },
  { name: '08:00', Load: 4500 }, { name: '12:00', Load: 6700 },
  { name: '16:00', Load: 8900 }, { name: '20:00', Load: 5600 },
];

// System Health & Infrastructure
const systemHealthData = [
  { name: 'GPU Cluster', metric: '87% Load', status: 'Operational', color: '#10a37f' },
  { name: 'Vector DB', metric: '12ms Latency', status: 'Healthy', color: '#8b5cf6' },
  { name: 'API Gateway', metric: '4.2k req/s', status: 'Stable', color: '#3b82f6' },
  { name: 'Training Nodes', metric: '3 Active', status: 'Processing', color: '#f59e0b' },
  { name: 'Context Cache', metric: '45GB Used', status: 'Optimized', color: '#ec4899' },
];

// --- HELPERS --- //
const AnimatedNumber = ({ value }) => {
  const [ref, animate] = useAnimate();
  useEffect(() => {
    const node = ref.current;
    if (node) {
      animate(0, value, {
        duration: 1.2,
        ease: 'easeOut',
        onUpdate: (latest) => {
          node.textContent = latest.toLocaleString('en-US', { maximumFractionDigits: 0 });
        },
      });
    }
  }, [value, animate, ref]);
  return <span ref={ref} />;
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900/80 backdrop-blur-sm px-2.5 py-1.5 rounded-md border border-slate-700 text-xs">
        <p className="label text-slate-300">{`${label} : ${payload[0].value.toLocaleString()} reqs`}</p>
      </div>
    );
  }
  return null;
};

// --- MAIN COMPONENT (compact) --- //
const DashboardShowcase = () => {
  const [activities, setActivities] = useState(
    Array.from({ length: 14 }).map((_, i) => ({
      id: 1000 - i,
      icon: 'ORDER',
      text: `New order #${8450 + i} from Karachi`,
      time: `${i * 2 + 1}m ago`,
    }))
  );

  // live activity scroll management
  const listRef = useRef(null);
  const isAtTopRef = useRef(true);

  const onListScroll = () => {
    const el = listRef.current;
    if (!el) return;
    isAtTopRef.current = el.scrollTop <= 2;
  };

  useLayoutEffect(() => {
    const el = listRef.current;
    if (!el) return;
    if (isAtTopRef.current) el.scrollTop = 0;
  }, [activities]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivities((prev) => {
        const actions = ['Agent triggered', 'Workflow completed', 'Anomaly detected', 'Model retrained', 'New context added'];
        const randomAction = actions[Math.floor(Math.random() * actions.length)];
        const newActivity = {
          id: Date.now(),
          icon: 'BOT',
          text: `${randomAction} in pipeline #${Math.floor(100 + Math.random() * 900)}`,
          time: 'now',
        };
        return [newActivity, ...prev].slice(0, 40);
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-slate-900/50 p-4 sm:p-5 lg:p-6 font-sans">
      {/* Title (smaller) */}
      <motion.div
        className="text-center mb-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">PatronumX — AI Operations Hub</h1>
        <p className="mt-2 inline-block bg-purple-500/10 text-purple-300 text-xs font-medium px-3 py-1 rounded-full border border-purple-500/30">
          (Live Demo)
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.45 }}>
          <header className="flex items-center justify-between mb-5">
            <div>
              <h1 className="text-xl font-bold text-white">AI Command Center</h1>
              <p className="text-slate-400 text-sm">Real-time Inference & Agent Monitoring</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search agents..."
                  className="pl-9 pr-3 py-2 w-56 bg-slate-800/50 rounded-md border border-slate-700 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all text-sm"
                />
              </div>
              <button className="p-2 rounded-md bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-white hover:border-purple-500 transition-colors">
                <Bell size={18} />
              </button>
            </div>
          </header>
        </motion.div>

        {/* Main Grid (tighter) */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-10 gap-4"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {/* Left Column */}
          <motion.div variants={{ hidden: { x: -30, opacity: 0 }, visible: { x: 0, opacity: 1 } }} className="lg:col-span-3 space-y-4">
            {/* Sessions (smaller chart) */}
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-xl p-4">
              <h2 className="font-semibold text-base text-white mb-2">Agent Distribution</h2> (original Sessions)
              <div style={{ width: '100%', height: 160 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={sessionData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={48}
                      outerRadius={64}
                      cornerRadius={4}
                      paddingAngle={1.5}
                    >
                      {sessionData.map((_, i) => (
                        <Cell key={`c-${i}`} fill={SESSION_COLORS[i]} stroke={SESSION_COLORS[i]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-x-4 mt-2 text-xs">
                {sessionData.map((s, i) => (
                  <div key={s.name} className="flex items-center gap-1.5 text-slate-300">
                    <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: SESSION_COLORS[i] }} />
                    {s.name} <span className="font-semibold text-white">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Activity (fixed height smaller) */}
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-xl p-4">
              <h2 className="font-semibold text-base text-white mb-2">Live Activity</h2>

              <style>
                {`
                  .live-scrollbar {
                    overflow-y: scroll;
                    scrollbar-gutter: stable both-edges;
                    overscroll-behavior: contain;
                    touch-action: pan-y;
                    scrollbar-width: thin;
                    scrollbar-color: #a78bfa #0f172a;
                  }
                  .live-scrollbar::-webkit-scrollbar { width: 8px; height: 8px; background: transparent; }
                  .live-scrollbar::-webkit-scrollbar-track {
                    background: #0f172a;
                    border-radius: 10px;
                    box-shadow: inset 0 0 0 1px #334155;
                  }
                  .live-scrollbar::-webkit-scrollbar-thumb {
                    background: linear-gradient(135deg, #a78bfa 0%, #7c3aed 60%, #3b82f6 100%);
                    border-radius: 10px;
                    min-height: 20px;
                    border: 2px solid #0f172a;
                    opacity: 0.9;
                  }
                `}
              </style>

              <div ref={listRef} onScroll={onListScroll} className="space-y-2.5 h-44 pr-2 pl-1 live-scrollbar">
                <div className="h-full">
                  <AnimatePresence>
                    {activities.map((act) => (
                      <motion.div
                        key={act.id}
                        layout
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -16 }}
                        transition={{ duration: 0.22 }}
                        className="flex items-center gap-2.5 text-sm"
                      >
                        <div className="p-1.5 bg-slate-800 rounded-full border border-slate-700">
                          <ListOrdered size={14} className="text-purple-400" />
                        </div>
                        <div>
                          <p className="text-white text-sm">{act.text}</p>
                          <p className="text-slate-400 text-[11px] leading-none mt-0.5">{act.time}</p>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center Column */}
          <motion.div variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="lg:col-span-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-xl p-4">
                <h3 className="text-slate-400 text-xs">Active Agents</h3>
                <p className="text-3xl font-bold text-white mt-1"><AnimatedNumber value={quickStatsData.activeAgents} /></p>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-xl p-4">
                <h3 className="text-slate-400 text-xs">Tokens Processed (M)</h3>
                <p className="text-3xl font-bold text-white mt-1"><AnimatedNumber value={quickStatsData.tokensProcessed} /></p>
              </div>
              <div className="col-span-2 bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-xl p-4">
                <h3 className="text-slate-400 text-xs">Total Inference Calls</h3>
                <p className="text-4xl font-bold text-white mt-1"><AnimatedNumber value={quickStatsData.inferenceCalls} /></p>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-xl p-4">
              <h2 className="font-semibold text-base text-white mb-8">Inference Load</h2>
              <div style={{ width: '100%', height: 200 }}>
                <ResponsiveContainer>
                  <AreaChart data={trendData} margin={{ top: 6, right: 16, left: -16, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.38} />
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" tick={{ fontSize: 11 }} stroke="#64748b" />
                    <YAxis tick={{ fontSize: 11 }} stroke="#64748b" tickFormatter={(v) => `${v / 1000}k`} />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                      type="monotone"
                      dataKey="Sales"
                      stroke="#8b5cf6"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorSales)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div variants={{ hidden: { x: 30, opacity: 0 }, visible: { x: 0, opacity: 1 } }} className="lg:col-span-3 space-y-4">
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-xl p-4 h-full">
              <h2 className="font-semibold text-base text-white mb-3">System Health</h2>
              <div className="space-y-3">
                {systemHealthData.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.015 }}
                    className="bg-slate-800/50 p-3.5 rounded-lg flex items-center gap-3 border border-slate-700 hover:border-purple-500 transition-colors"
                  >
                    {/* Status Dot */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-md border border-slate-700"
                      style={{ background: `${item.color}20` }}>
                      <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: item.color }}></span>
                        <span className="relative inline-flex rounded-full h-3 w-3" style={{ backgroundColor: item.color }}></span>
                      </div>
                    </div>

                    <div className="flex-grow">
                      <h3 className="font-semibold text-white text-sm">{item.name}</h3>
                      <p className="text-xs text-slate-300">{item.metric}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] text-slate-400 leading-none">Status</p>
                      <p className="font-semibold text-white text-sm" style={{ color: item.color }}>{item.status}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardShowcase;
