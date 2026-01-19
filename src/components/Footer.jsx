// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Instagram, Linkedin, Mail, ArrowUpRight, Sparkles
} from "lucide-react";
import footerLogo from "../assets/logo.png";

const XIcon = ({ size = 24, className, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path d="M18.901 0H22.581L14.541 9.186L24 21.691H16.591L10.789 14.102L4.15099 21.691H0.469994L9.08899 11.834L0 0H7.60899L12.83 6.903L18.901 0ZM17.61 19.489H19.649L6.48599 2.083H4.29799L17.61 19.489Z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/patronumxsolutions/", label: "Instagram" },
    { icon: XIcon, href: "#", label: "X (formerly Twitter)" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/patronum-x-solutions", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contact@patronumx.com", label: "Email" },
  ];

  return (
    <footer className="relative bg-slate-950 pt-20 pb-10 overflow-hidden border-t border-white/5">
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px]" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-5 lg:col-span-4">
            <Link to="/" className="flex items-center gap-2 mb-6 group w-fit">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                <img src={footerLogo} alt="PatronumX Logo" className="w-10 h-10 object-contain relative z-10" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">PatronumX</span>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-6">
              Pioneering the future of autonomous enterprise. We build the intelligent infrastructure that powers the next generation of business.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                {['Nexus Agents', 'Infinity Cloud', 'Vision Forge', 'Deep Insights'].map((item) => (
                  <li key={item}><Link to="#" className="hover:text-purple-400 transition-colors">{item}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                {['About Us', 'Careers', 'Blog', 'Contact'].map((item) => (
                  <li key={item}><Link to="#" className="hover:text-purple-400 transition-colors">{item}</Link></li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-slate-900 border border-white/10">
                <h4 className="font-semibold text-white mb-2">Join the Revolution</h4>
                <p className="text-xs text-slate-400 mb-4">Subscribe to our newsletter for AI insights.</p>
                <div className="flex gap-2">
                  <input type="email" placeholder="Email" className="w-full bg-slate-950 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500" />
                  <button className="p-2 bg-purple-600 rounded-lg text-white hover:bg-purple-500 transition-colors">
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} PatronumX Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
