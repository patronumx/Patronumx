// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Github,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  ArrowUpRight,
  Shield,
  Sparkles
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", path: "/#features" },
      { name: "Services", path: "/services" },
      { name: "Technologies", path: "/#technologies" },
      { name: "Benefits", path: "/#benefits" },
    ],
    company: [
      { name: "About Us", path: "/about" },
      { name: "Blog", path: "/blog" },
      { name: "Contact", path: "/contact" },
      { name: "Careers", path: "/#" },
    ],
    resources: [
      { name: "Documentation", path: "/#" },
      { name: "Help Center", path: "/#" },
      { name: "Community", path: "/#" },
      { name: "Developers", path: "/#" },
    ],
    legal: [
      { name: "Privacy Policy", path: "/#" },
      { name: "Terms of Service", path: "/#" },
      { name: "Cookie Policy", path: "/#" },
      { name: "Licenses", path: "/#" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contact@patronumx.com", label: "Email" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-transparent via-purple-950/20 to-purple-950/40 border-t border-white/5 backdrop-blur-sm">
      {/* Animated background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-48 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -top-48 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 px-4 py-12 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 pb-10 border-b border-white/5">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="relative">
                <Shield className="w-8 h-8 text-purple-400 group-hover:text-cyan-400 transition-colors duration-300" />
                <Sparkles className="w-3 h-3 text-cyan-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <span className="text-2xl font-bold text-white">PatronumX</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Guardians of the Next Generation. Bringing developers, agencies, tools, and opportunities together under one digital house.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-cyan-500/20 hover:border-purple-400/30 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-8 sm:grid-cols-4">
            {/* Product */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                Product
              </h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-sm text-slate-400 hover:text-purple-400 transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-sm text-slate-400 hover:text-purple-400 transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                Resources
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-sm text-slate-400 hover:text-purple-400 transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                Legal
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-sm text-slate-400 hover:text-purple-400 transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} PatronumX. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            

            <div className="h-4 w-px bg-slate-700" />

            <p className="text-xs text-slate-500">
              Powered by{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text font-semibold">
                Patronum Solutions
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
