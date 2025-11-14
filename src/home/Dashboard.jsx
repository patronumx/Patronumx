// src/components/DashboardShowcase.jsx
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence, useAnimate } from 'framer-motion';
import { Bell, Search, ShoppingCart, ListOrdered } from 'lucide-react';
import { AreaChart, Area, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

// --- DUMMY DATA (unchanged) --- //
const quickStatsData = { visits: 61245, orders: 3256, sales: 3689340 };

const sessionData = [
  { name: 'Web', value: 2087 },
  { name: 'Android', value: 2134 },
  { name: 'iOS', value: 17 },
];
// palette: more purple than blue, no green
const SESSION_COLORS = ['#8b5cf6', '#7c3aed', '#3b82f6'];

const trendData = [
  { name: 'Jan', Sales: 2100000 }, { name: 'Feb', Sales: 2800000 },
  { name: 'Mar', Sales: 3200000 }, { name: 'Apr', Sales: 3600000 },
  { name: 'May', Sales: 3900000 }, { name: 'Jun', Sales: 4200000 },
];

// simplified “logos” for deals: color-dot + short code, no emojis
const dealsData = [
  { code: 'SD1', title: 'Summer Deal 1', price: 699, stock: 82,  color: '#8b5cf6' },
  { code: 'PZA', title: 'Pizza Fest',    price: 1199, stock: 45, color: '#7c3aed' },
  { code: 'CBY', title: 'Chicken Biryani', price: 399, stock: 73, color: '#3b82f6' },
  { code: 'SWR', title: 'Shawarma Roll', price: 249, stock: 112, color: '#6366f1' },
  { code: 'FRI', title: 'Masala Fries',  price: 149, stock: 135, color: '#a78bfa' },
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
        <p className="label text-slate-300">{`${label} : Rs. ${payload[0].value.toLocaleString()}`}</p>
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
        const newActivity = {
          id: Date.now(),
          icon: 'ORDER',
          text: `New order #${Math.floor(8453 + Math.random() * 300)}`,
          time: 'now',
        };
        return [newActivity, ...prev].slice(0, 40);
      });
    }, 5000);
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
        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">PatronumX — Sales Dashboard</h1>
        <p className="mt-2 inline-block bg-purple-500/10 text-purple-300 text-xs font-medium px-3 py-1 rounded-full border border-purple-500/30">
          (Preview)
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.45 }}>
          <header className="flex items-center justify-between mb-5">
            <div>
              <h1 className="text-xl font-bold text-white">Command Center</h1>
              <p className="text-slate-400 text-sm">Welcome to your PatronumX Dashboard</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-9 pr-3 py-2 w-56 bg-slate-800/50 rounded-md border border-slate-700 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all text-sm"
                />
              </div>
              <button className="p-2 rounded-md bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-white hover:border-purple-500 transition-colors">
                <Bell size={18} />
              </button>
              <button className="p-2 rounded-md bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-white hover:border-purple-500 transition-colors">
                <ShoppingCart size={18} />
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
              <h2 className="font-semibold text-base text-white mb-2">Total Sessions</h2>
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
                <h3 className="text-slate-400 text-xs">Total Visits</h3>
                <p className="text-3xl font-bold text-white mt-1"><AnimatedNumber value={quickStatsData.visits} /></p>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-xl p-4">
                <h3 className="text-slate-400 text-xs">Total Orders</h3>
                <p className="text-3xl font-bold text-white mt-1"><AnimatedNumber value={quickStatsData.orders} /></p>
              </div>
              <div className="col-span-2 bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-xl p-4">
                <h3 className="text-slate-400 text-xs">Total Sales</h3>
                <p className="text-4xl font-bold text-white mt-1">Rs. <AnimatedNumber value={quickStatsData.sales} /></p>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-xl p-4">
              <h2 className="font-semibold text-base text-white mb-8">Sales Trend</h2>
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
                    <YAxis tick={{ fontSize: 11 }} stroke="#64748b" tickFormatter={(v) => `Rs.${v / 1_000_000}M`} />
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
              <h2 className="font-semibold text-base text-white mb-3">Top Deals</h2>
              <div className="space-y-3">
                {dealsData.map((deal, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.015 }}
                    className="bg-slate-800/50 p-3.5 rounded-lg flex items-center gap-3 border border-slate-700 hover:border-purple-500 transition-colors"
                  >
                    {/* Simple logo: colored dot + code */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-md border border-slate-700"
                         style={{ background: `${deal.color}20` }}>
                      <span
                        className="inline-block w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: deal.color }}
                        title={deal.code}
                      />
                    </div>

                    <div className="flex-grow">
                      <h3 className="font-semibold text-white text-sm">{deal.title}</h3>
                      <p className="text-xs text-slate-300">Rs {deal.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] text-slate-400 leading-none">Stock</p>
                      <p className="font-semibold text-white text-sm">{deal.stock}</p>
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
