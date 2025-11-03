// src/components/DashboardShowcase.jsx
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence, useAnimate } from 'framer-motion';
import { Bell, Search, ShoppingCart, ListOrdered } from 'lucide-react';
import { AreaChart, Area, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

// --- DUMMY DATA --- //
const quickStatsData = { visits: 61245, orders: 3256, sales: 3689340 };

const sessionData = [
  { name: 'Web', value: 2087 },
  { name: 'Android', value: 2134 },
  { name: 'iOS', value: 17 },
];
const SESSION_COLORS = ['#8b5cf6', '#3b82f6', '#ec4899'];

const trendData = [
  { name: 'Jan', Sales: 2100000 }, { name: 'Feb', Sales: 2800000 },
  { name: 'Mar', Sales: 3200000 }, { name: 'Apr', Sales: 3600000 },
  { name: 'May', Sales: 3900000 }, { name: 'Jun', Sales: 4200000 },
];

// Update dealsData with Pakistani fast food, remove Jumbo Dog
const dealsData = [
  { emoji: '🍔', title: 'Summer Deal 1', price: 699, stock: 82 },
  { emoji: '🍕', title: 'Pizza Fest', price: 1199, stock: 45 },
  { emoji: '🍗', title: 'Chicken Biryani', price: 399, stock: 73 },
  { emoji: '🥙', title: 'Shawarma Roll', price: 249, stock: 112 },
  { emoji: '🍟', title: 'Masala Fries', price: 149, stock: 135 },
];

// seed with enough items so it overflows
const initialActivities = Array.from({ length: 14 }).map((_, i) => ({
  id: 1000 - i,
  icon: 'ORDER',
  text: `New order #${8450 + i} from Karachi`,
  time: `${i * 2 + 1}m ago`,
}));

// --- HELPER COMPONENTS --- //
const AnimatedNumber = ({ value }) => {
  const [ref, animate] = useAnimate();
  useEffect(() => {
    const node = ref.current;
    if (node) {
      animate(0, value, {
        duration: 1.5,
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
      <div className="bg-slate-800/80 backdrop-blur-sm p-2 rounded-lg border border-slate-700 text-sm">
        <p className="label text-slate-300">{`${label} : Rs. ${payload[0].value.toLocaleString()}`}</p>
      </div>
    );
  }
  return null;
};

// --- MAIN COMPONENT --- //
const DashboardShowcase = () => {
  const [activities, setActivities] = useState(initialActivities);

  // live activity scroll management
  const listRef = useRef(null);
  const isAtTopRef = useRef(true); // are we pinned at the very top?

  // keep track of whether user is at the top so we can "stick to top" intelligently
  const onListScroll = () => {
    const el = listRef.current;
    if (!el) return;
    // consider within 2px as "top"
    isAtTopRef.current = el.scrollTop <= 2;
  };

  // when activities change, if the user is at the top, keep them at the top
  useLayoutEffect(() => {
    const el = listRef.current;
    if (!el) return;
    if (isAtTopRef.current) {
      // stick to top without animation
      el.scrollTop = 0;
    }
    // if user scrolled down, do nothing (manual control preserved)
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
        const next = [newActivity, ...prev];
        return next.slice(0, 40); // keep more items so scrolling is meaningful
      });
      // no forced scroll; manual control remains
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-slate-900/50 p-4 sm:p-6 lg:p-8 font-sans">
      {/* Title */}
      <motion.div
        className="text-center mb-12"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">PatronumX — Sales Dashboard</h1>
        <p className="mt-4 inline-block bg-purple-500/10 text-purple-300 text-sm font-medium px-4 py-1.5 rounded-full border border-purple-500/30">
          (Preview)
        </p>
      </motion.div>

      <div className="max-w-screen-2xl mx-auto">
        <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          <header className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white">Command Center</h1>
              <p className="text-slate-400">Welcome to your PatronumX Dashboard</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 w-64 bg-slate-800/50 rounded-lg border border-slate-700 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
                />
              </div>
              <button className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-white hover:border-purple-500 transition-colors">
                <Bell size={20} />
              </button>
              <button className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-white hover:border-purple-500 transition-colors">
                <ShoppingCart size={20} />
              </button>
            </div>
          </header>
        </motion.div>

        {/* Main Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-10 gap-6"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Left Column */}
          <motion.div variants={{ hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1 } }} className="lg:col-span-3 space-y-6">
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-6">
              <h2 className="font-bold text-lg text-white mb-4">Total Sessions</h2>
              <div style={{ width: '100%', height: 200 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie data={sessionData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} cornerRadius={5} paddingAngle={2}>
                      {sessionData.map((e, i) => (
                        <Cell key={`c-${i}`} fill={SESSION_COLORS[i]} stroke={SESSION_COLORS[i]} style={{ filter: `drop-shadow(0 0 5px ${SESSION_COLORS[i]})` }} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-x-4 mt-4 text-sm">
                {sessionData.map((s, i) => (
                  <div key={s.name} className="flex items-center gap-2 text-slate-300">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: SESSION_COLORS[i] }} />
                    {s.name} <span className="font-semibold text-white">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-6">
              <h2 className="font-bold text-lg text-white mb-4">Live Activity</h2>

              {/* Scoped styles for the scrollbar (component-only) */}
              <style>
                {`
                  /* Pretty, theme-matched scrollbar + stable layout */
                  .live-scrollbar {
                    overflow-y: scroll;                 /* always show manual scrollbar */
                    scrollbar-gutter: stable both-edges;
                    overscroll-behavior: contain;
                    touch-action: pan-y;
                    /* Firefox */
                    scrollbar-width: thin;
                    scrollbar-color: #a78bfa #0f172a;  /* thumb | track */
                  }
                  /* WebKit (Chromium, Safari, Edge) */
                  .live-scrollbar::-webkit-scrollbar { width: 10px; height: 10px; background: transparent; }
                  .live-scrollbar::-webkit-scrollbar-track {
                    background: #0f172a;               /* slate-900 */
                    border-radius: 12px;
                    box-shadow: inset 0 0 0 1px #334155; /* slate-700 hairline */
                  }
                  .live-scrollbar::-webkit-scrollbar-thumb {
                    background: linear-gradient(135deg, #a78bfa 0%, #818cf8 60%, #ec4899 100%);
                    border-radius: 10px;
                    min-height: 24px;
                    border: 2px solid #0f172a;
                    background-size: 180% 180%;
                    transition: background-position 200ms ease, box-shadow 200ms ease, opacity 200ms ease;
                    box-shadow: 0 0 0 0 rgba(167,139,250,0);
                    opacity: 0.9;
                  }
                  .live-scrollbar:hover::-webkit-scrollbar-thumb {
                    background-position: 100% 0;
                    box-shadow: 0 0 12px 2px rgba(167,139,250,0.35);
                    opacity: 1;
                  }
                  .live-scrollbar::-webkit-scrollbar-thumb:active {
                    box-shadow: 0 0 14px 3px rgba(129,140,248,0.45);
                  }
                  .live-scrollbar::-webkit-scrollbar-corner { background: #0f172a; border-radius: 10px; }
                  @media (max-width: 640px) {
                    .live-scrollbar::-webkit-scrollbar { width: 8px; height: 8px; }
                  }
                `}
              </style>

              <div
                ref={listRef}
                onScroll={onListScroll}
                className="space-y-3 h-56 pr-2 pl-1 live-scrollbar"
              >
                <div className="h-full">
                  <AnimatePresence>
                    {activities.map((act) => (
                      <motion.div
                        key={act.id}
                        layout
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                        className="flex items-center gap-3 text-sm"
                      >
                        <div className="p-1.5 bg-slate-800 rounded-full border border-slate-700">
                          <ListOrdered size={16} className="text-purple-400" />
                        </div>
                        <div>
                          <p className="text-white">{act.text}</p>
                          <p className="text-slate-400 text-xs">{act.time}</p>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center Column */}
          <motion.div variants={{ hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="lg:col-span-4 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-6">
                <h3 className="text-slate-400">Total Visits</h3>
                <p className="text-4xl font-bold text-white mt-1"><AnimatedNumber value={quickStatsData.visits} /></p>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-6">
                <h3 className="text-slate-400">Total Orders</h3>
                <p className="text-4xl font-bold text-white mt-1"><AnimatedNumber value={quickStatsData.orders} /></p>
              </div>
              <div className="col-span-2 bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-6">
                <h3 className="text-slate-400">Total Sales</h3>
                <p className="text-5xl font-bold text-white mt-1">Rs. <AnimatedNumber value={quickStatsData.sales} /></p>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-6">
              <h2 className="font-bold text-lg text-white mb-14">Sales Trend</h2>
              <div style={{ width: '100%', height: 250 }}>
                <ResponsiveContainer>
                  <AreaChart data={trendData} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#64748b" />
                    <YAxis tick={{ fontSize: 12 }} stroke="#64748b" tickFormatter={(v) => `Rs.${v / 1_000_000}M`} />
                    <Tooltip content={<CustomTooltip />} />
                    <Area type="monotone" dataKey="Sales" stroke="#8b5cf6" strokeWidth={2} fillOpacity={1} fill="url(#colorSales)" style={{ filter: 'drop-shadow(0 0 6px #8b5cf6)' }} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div variants={{ hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1 } }} className="lg:col-span-3 space-y-6">
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 h-full">
              <h2 className="font-bold text-lg text-white mb-4">Top Deals</h2>
              <div className="space-y-4">
                {dealsData.map((deal, i) => (
                  <motion.div key={i} whileHover={{ scale: 1.02 }} className="bg-slate-800/50 p-4 rounded-xl flex items-center gap-4 border border-slate-700 hover:border-purple-500 transition-colors">
                    <div className="text-3xl bg-slate-700/50 p-3 rounded-lg">{deal.emoji}</div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-white">{deal.title}</h3>
                      <p className="text-sm text-slate-300">Rs {deal.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-400">Stock</p>
                      <p className="font-semibold text-white">{deal.stock}</p>
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
