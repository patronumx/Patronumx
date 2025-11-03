// src/components/Navbar.jsx
import React, { useState, useEffect, useCallback, useMemo, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, Mail } from "lucide-react";
import logo from "../assets/partonum.png";

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

  // Optimized scroll handler with throttling
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const isActive = (link) => {
    if (link.name === "HOME") return pathname === "/";
    if (link.name === "BLOG") return pathname === "/blog" || pathname.startsWith("/blog/");
    if (link.name === "SERVICES") return pathname === "/services";
    if (link.name === "ABOUT US") return pathname === "/about";
    if (link.name === "CONTACT") return pathname === "/contact";
    return false;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          scrolled
            ? "bg-slate-900/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-purple-500/10"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link to="/" aria-label="PatronumX Home">
                <img className="h-7 lg:h-9 w-auto" src={logo} alt="PatronumX Logo" />
              </Link>
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex lg:items-center lg:space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const active = isActive(link);

                return (
                  <Link
                    key={link.name}
                    to={link.to}
                    className="relative px-3 xl:px-4 py-2 group"
                  >
                    <span
                      className={`relative z-10 text-sm xl:text-base font-medium transition-colors duration-300 ${
                        active ? "text-white" : "text-slate-300 group-hover:text-white"
                      }`}
                    >
                      {link.name}
                    </span>
                    {/* Animated underline */}
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500 transform transition-transform duration-300 ease-out ${
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                    {/* Hover glow effect */}
                    <span
                      className={`absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 via-blue-400/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-blue-400/10 group-hover:to-purple-500/10 transition-all duration-300 ${
                        active ? "from-purple-500/10 via-blue-400/10 to-purple-500/10" : ""
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Desktop Email Button */}
            <div className="hidden lg:block">
              <a
                href="mailto:thepatronumx@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-sm font-medium text-slate-300 hover:text-white hover:border-purple-400/40 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm group"
              >
                <Mail size={16} className="group-hover:text-purple-400 transition-colors" />
                <span className="hidden xl:inline">thepatronumx@gmail.com</span>
                <span className="xl:hidden">Email Us</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-slate-900/95 backdrop-blur-xl border-l border-white/10 z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                  <img className="h-8 w-auto" src={logo} alt="PatronumX Logo" />
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-all"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-6 py-8 overflow-y-auto">
                  <div className="space-y-2">
                    {navLinks.map((link, index) => {
                      const active = isActive(link);
                      return (
                        <motion.div
                          key={link.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            to={link.to}
                            className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                              active
                                ? "bg-gradient-to-r from-purple-500/20 to-blue-400/20 text-white border border-purple-400/30"
                                : "text-slate-300 hover:text-white hover:bg-white/5 border border-transparent"
                            }`}
                          >
                            {link.name}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </nav>

                {/* Mobile Menu Footer */}
                <div className="px-6 py-6 border-t border-white/10 space-y-4">
                  <a
                    href="mailto:thepatronumx@gmail.com"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-400/20 border border-purple-400/30 text-white hover:from-purple-500/30 hover:to-blue-400/30 transition-all duration-300"
                  >
                    <Mail size={20} />
                    <span className="text-sm font-medium">thepatronumx@gmail.com</span>
                  </a>
                  <p className="text-xs text-slate-400 text-center">
                    © 2025 PatronumX. All rights reserved.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
