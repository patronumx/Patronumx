// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/partonum.png";

const navLinks = [
  { name: "HOME", type: "route", to: "/" },
  { name: "BLOG", type: "route", to: "/blog" }, // routed
  { name: "SERVICES", type: "route", to: "/services" },
  { name: "ABOUT US", type: "route", to: "/about" }, // changed from anchor to route
  { name: "CONTACT", type: "route", to: "/contact" }, // changed to use route
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // highlight HOME only on '/', BLOG on '/blog' and '/blog/*', SERVICES on '/services', ABOUT US on '/about', CONTACT on '/contact'
  const isActive = (link) => {
    if (link.name === "HOME") return pathname === "/";
    if (link.name === "BLOG") return pathname === "/blog" || pathname.startsWith("/blog/");
    if (link.name === "SERVICES") return pathname === "/services";
    if (link.name === "ABOUT US") return pathname === "/about";
    if (link.name === "CONTACT") return pathname === "/contact";
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-slate-900/50 backdrop-blur-lg border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" aria-label="PatronumX Home">
              <img className="h-8 w-auto" src={logo} alt="PatronumX Logo" />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => {
              const baseClasses =
                "relative font-medium transition-colors duration-300 group";
              const active = isActive(link);
              const colorClasses = active
                ? "text-white"
                : "text-slate-300 hover:text-white";

              const underline =
                "absolute bottom-[-6px] left-0 h-[2px] w-full bg-gradient-to-r from-purple-500 to-blue-400 transform transition-transform duration-300 ease-out " +
                (active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100");

              if (link.type === "route") {
                return (
                  <Link
                    key={link.name}
                    to={link.to}
                    className={`${baseClasses} ${colorClasses}`}
                  >
                    {link.name}
                    <span className={underline} />
                  </Link>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`${baseClasses} ${colorClasses}`}
                >
                  {link.name}
                  <span className={underline} />
                </a>
              );
            })}
          </div>

          {/* Desktop Email */}
          <div className="hidden md:block">
            <a
              href="mailto:thepatronumx@gmail.com"
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200"
            >
              thepatronumx@gmail.com
            </a>
          </div>

          {/* Static Mobile Menu Icon (placeholder) */}
          <div className="md:hidden flex flex-col space-y-1.5">
            <span className="h-0.5 w-6 bg-slate-300" />
            <span className="h-0.5 w-6 bg-slate-300" />
            <span className="h-0.5 w-6 bg-slate-300" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
