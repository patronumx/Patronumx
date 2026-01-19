// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, Mail, ChevronRight } from "lucide-react";
import logo from "../assets/partonum.png";
import newLogo from "../assets/logo.png";

const navLinks = [
  { name: "HOME", type: "route", to: "/" },
  { name: "BLOG", type: "route", to: "/blog" },
  { name: "SERVICES", type: "route", to: "/services" },
  { name: "ABOUT US", type: "route", to: "/about" },
  { name: "CONTACT", type: "route", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileMenuOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
  }, [mobileMenuOpen]);

  const isActive = (link) => {
    if (link.name === "HOME") return pathname === "/";
    return pathname.startsWith(link.to) && link.to !== "/";
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-transparent ${scrolled
            ? "bg-slate-950/70 backdrop-blur-2xl border-white/5 shadow-[0_0_40px_-10px_rgba(168,85,247,0.15)]"
            : "bg-transparent"
          }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img className="h-10 w-auto relative z-10" src={newLogo} alt="PatronumX AI Logo" />
              </div>
              <img className="h-8 w-auto hidden sm:block opacity-90 group-hover:opacity-100 transition-opacity" src={logo} alt="PatronumX Logo" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <div className="flex items-center p-1 rounded-full bg-white/5 border border-white/5 backdrop-blur-md">
                {navLinks.map((link) => {
                  const active = isActive(link);
                  return (
                    <Link
                      key={link.name}
                      to={link.to}
                      className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${active
                          ? "text-white bg-white/10 shadow-lg shadow-purple-500/10"
                          : "text-slate-400 hover:text-white hover:bg-white/5"
                        }`}
                    >
                      {link.name}
                      {active && (
                        <motion.div
                          layoutId="navBlob"
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-white/5"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="mailto:thepatronumx@gmail.com"
                className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 hover:text-white border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <Mail size={16} />
                <span className="text-sm font-semibold">Contact</span>
                <ChevronRight size={14} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-xl lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-slate-900 border-l border-white/10 p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xl font-bold text-white">Menu</span>
                  <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-white/5 rounded-full">
                    <X size={20} className="text-slate-400" />
                  </button>
                </div>

                <div className="space-y-2">
                  {navLinks.map((link, i) => (
                    <Link
                      key={link.name}
                      to={link.to}
                      className="block px-4 py-4 rounded-xl text-lg font-medium text-slate-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/5 transition-all"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                <div className="mt-auto pt-8 border-t border-white/10">
                  <a href="mailto:thepatronumx@gmail.com" className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-purple-600 text-white font-semibold">
                    <Mail size={18} />
                    Get in Touch
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
