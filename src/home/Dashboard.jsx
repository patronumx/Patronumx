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

const dealsData = [
  { emoji: '🍔', title: 'Summer Deal 1', price: 699, stock: 82 },
  { emoji: '🍕', title: 'Pizza Fest', price: 1199, stock: 45 },
  { emoji: '🍗', title: 'Chicken Biryani', price: 399, stock: 73 },
  { emoji: '🥙', title: 'Shawarma Roll', price: 249, stock: 112 },
  { emoji: '🍟', title: 'Masala Fries', price: 149, stock: 135 },
];

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
      <div className="bg-slate-800/80 backdrop-blur-sm p-2 rounded-lg border border-slate-700 text-xs">
        <p className="label text-slate-300">{`${label} : Rs. ${payload[0].value.toLocaleString()}`}</p>
      </div>
    );
  }
  return null;
};

// --- MAIN COMPONENT --- //
const DashboardShowcase = () => {
  const [activities, setActivities] = useState(initialActivities);
  const listRef = useRef(null);
  const isAtTopRef = useRef(true);

  const onListScroll = () => {
    const el = listRef.current;
    if (!el) return;
    isAtTopRef.current = el.scrollTop <= 2;
  };

  useLayoutEffect(() => {
    if (isAtTopRef.current) {
      listRef.current?.scrollTo(0, 0);
    }
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
    <section className="min-h-screen bg-slate-900/50 p-3 sm:p-4 lg:p-6 font-sans">
      <motion.div
        className="text-center mb-10"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">PatronumX — Sales Dashboard</h1>
        <p className="mt-3 inline-block bg-purple-500/10 text-purple-300 text-xs font-medium px-3 py-1 rounded-full border border-purple-500/30">
          (Preview)
        </p>
      </motion.div>

      <div className="max-w-screen-xl mx-auto">
        <motion.header 
          className="flex items-center justify-between mb-6"
          initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}
        >
            <div>
              <h1 className="text-2xl font-bold text-white">Command Center</h1>
              <p className="text-slate-400 text-sm">Welcome to your PatronumX Dashboard</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-9 pr-3 py-1.5 w-52 bg-slate-800/50 rounded-md border border-slate-700 text-white text-sm focus:ring-1 focus:ring-purple-500 focus:outline-none transition-all"
                />
              </div>
              <button className="p-2 rounded-md bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-white hover:border-purple-500 transition-colors">
                <Bell size={18} />
              </button>
              <button className="p-2 rounded-md bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-white hover:border-purple-500 transition-colors">
                <ShoppingCart size={18} />
              </button>
            </div>
        </motion.header>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-10 gap-4"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Left Column */}
          <motion.div variants={{ hidden: { x: -40, opacity: 0 }, visible: { x: 0, opacity: 1 } }} className="lg:col-span-3 space-y-4">
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-xl p-4">
              <h2 className="font-bold text-base text-white mb-3">Total Sessions</h2>
              <div style={{ width: '100%', height: 160 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie data={sessionData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={45} outerRadius={65} cornerRadius={4} paddingAngle={2}>
                      {sessionData.map((e, i) => (
                        <Cell key={`c-${i}`} fill={SESSION_COLORS[i]} stroke={SESSION_COLORS[i]} style={{ filter: `drop-shadow(0 0 4px ${SESSION_COLORS[i]})` }} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-x-3 mt-3 text-xs">
                {sessionData.map((s, i) => (
                  <div key={s.name} className="flex items-center gap-1.5 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: SESSION_COLORS[i] }} />
                    {s.name} <span className="font-semibold text-white">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-xl p-4">
              <h2 className="font-bold text-base text-white mb-3">Live Activity</h2>
              <style>{`.live-scrollbar { scrollbar-width: thin; scrollbar-color: #a78bfa #0f172a; } .live-scrollbar::-webkit-scrollbar { width: 8px; } .live-scrollbar::-webkit-scrollbar-track { background: #0f172a; border-radius: 10px; box-shadow: inset 0 0 0 1px #334155; } .live-scrollbar::-webkit-scrollbar-thumb { background: linear-gradient(135deg, #a78bfa, #818cf8); border-radius: 8px; border: 2px solid #0f172a; }`}</style>
              <div ref={listRef} onScroll={onListScroll} className="space-y-2.5 h-48 pr-2 pl-1 live-scrollbar overflow-y-auto">
                <AnimatePresence>
                  {activities.map((act) => (
                    <motion.div
                      key={act.id} layout
                      initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -15 }}
                      transition={{ duration: 0.25 }}
                      className="flex items-center gap-2.5 text-xs"
                    >
                      <div className="p-1.5 bg-slate-800 rounded-full border border-slate-700">
                        <ListOrdered size={14} className="text-purple-400" />
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
          </motion.div>

          {/* Center Column */}
          <motion.div variants={{ hidden: { y: 40, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="lg:col-span-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-xl p-4">
                <h3 className="text-slate-400 text-sm">Total Visits</h3>
                <p className="text-3xl font-bold text-white mt-1"><AnimatedNumber value={quickStatsData.visits} /></p>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-xl p-4">
                <h3 className="text-slate-400 text-sm">Total Orders</h3>
                <p className="text-3xl font-bold text-white mt-1"><AnimatedNumber value={quickStatsData.orders} /></p>
              </div>
              <div className="col-span-2 bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-xl p-4">
                <h3 className="text-slate-400 text-sm">Total Sales</h3>
                <p className="text-4xl font-bold text-white mt-1">Rs. <AnimatedNumber value={quickStatsData.sales} /></p>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-xl p-4">
              <h2 className="font-bold text-base text-white mb-4">Sales Trend</h2>
              <div style={{ width: '100%', height: 200 }}>
                <ResponsiveContainer>
                  <AreaChart data={trendData} margin={{ top: 5, right: 15, left: -25, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" tick={{ fontSize: 10 }} stroke="#64748b" />
                    <YAxis tick={{ fontSize: 10 }} stroke="#64748b" tickFormatter={(v) => `Rs.${v / 1_000_000}M`} />
                    <Tooltip content={<CustomTooltip />} />
                    <Area type="monotone" dataKey="Sales" stroke="#8b5cf6" strokeWidth={1.5} fillOpacity={1} fill="url(#colorSales)" style={{ filter: 'drop-shadow(0 0 5px #8b5cf6)' }} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div variants={{ hidden: { x: 40, opacity: 0 }, visible: { x: 0, opacity: 1 } }} className="lg:col-span-3 space-y-4">
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-xl p-4 h-full">
              <h2 className="font-bold text-base text-white mb-3">Top Deals</h2>
              <div className="space-y-3">
                {dealsData.map((deal, i) => (
                  <motion.div key={i} whileHover={{ scale: 1.02 }} className="bg-slate-800/50 p-3 rounded-lg flex items-center gap-3 border border-slate-700 hover:border-purple-500 transition-colors">
                    <div className="text-2xl bg-slate-700/50 p-2 rounded-md">{deal.emoji}</div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-white text-sm">{deal.title}</h3>
                      <p className="text-xs text-slate-300">Rs {deal.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-400">Stock</p>
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
