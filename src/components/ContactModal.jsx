import React, { useEffect, useRef, useState, useMemo } from "react";
import { X, Mail, User, Phone, Building2, MessageSquare, Sparkles } from "lucide-react";

export default function ContactModal({ isOpen, onClose, onSubmit }) {
  const panelRef = useRef(null);
  const [showOther, setShowOther] = useState(false);
  const [otherValue, setOtherValue] = useState("");
  const [selected, setSelected] = useState(() => new Set());

  const SERVICES = useMemo(
    () => [
      "Web Development",
      "Web Management",
      "Social Media",
      "Photoshoot",
      "Analytics",
      "SEO",
      "Paid Ads",
      "Brand Strategy",
    ],
    []
  );

  // ESC to close
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey, { passive: true });
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const onBackdropClick = (e) => {
    if (panelRef.current && !panelRef.current.contains(e.target)) onClose();
  };

  const toggleService = (s) => {
    const next = new Set(selected);
    next.has(s) ? next.delete(s) : next.add(s);
    setSelected(next);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-title"
      className="fixed inset-0 z-[80] flex items-center justify-center"
      onMouseDown={onBackdropClick}
      style={{ contain: "paint" }}
    >
      {/* Lighter blur & alpha to keep things fast */}
      <div className="absolute inset-0 bg-slate-950/35 backdrop-blur-md will-change-transform" />

      {/* Thin gradient ring with cheap shadow */}
      <div className="relative w-[min(92vw,980px)] p-[1px] rounded-2xl bg-gradient-to-br from-violet-500/30 via-fuchsia-500/25 to-cyan-400/30 shadow-[0_12px_40px_rgba(0,0,0,.32)]">
        <div
          ref={panelRef}
          className="
            rounded-2xl border border-white/10
            bg-[rgba(12,16,25,0.78)] backdrop-blur-xl
            text-white overflow-hidden
            animate-[modalIn_.2s_ease-out]
            will-change: transform, opacity;
          "
        >
          <style>{`
            @keyframes modalIn {
              from { transform: translateY(10px) scale(.985); opacity: 0 }
              to   { transform: translateY(0)     scale(1);    opacity: 1 }
            }
            .glass-field:focus {
              outline: none;
              box-shadow:
                0 0 0 3px rgba(124,58,237,.22),
                inset 0 0 0 1px rgba(255,255,255,.18);
            }
            .chip { transition: transform .12s ease, background-color .12s ease, box-shadow .12s ease; }
            .chip:hover { transform: translateY(-1px); }
            @media (prefers-reduced-motion: reduce) {
              .chip, .chip:hover { transition: none; transform: none; }
            }
          `}</style>

          {/* Header */}
          <div className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1 rounded-full bg-violet-500/15 text-violet-200 border border-violet-400/25">
                <Sparkles size={14} />
                Let’s Collaborate
              </span>
              <h3 id="contact-title" className="font-bold text-xl md:text-2xl tracking-tight">
                Contact Us
              </h3>
            </div>
            <button
              aria-label="Close"
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-white/10 transition"
            >
              <X size={18} />
            </button>
          </div>

          {/* Form */}
          <form
            className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const services = Array.from(selected);
              if (showOther && otherValue.trim()) services.push(otherValue.trim());
              const data = {
                name: fd.get("name")?.toString() ?? "",
                email: fd.get("email")?.toString() ?? "",
                phone: fd.get("phone")?.toString() ?? "",
                company: fd.get("company")?.toString() ?? "",
                message: fd.get("message")?.toString() ?? "",
                services,
              };
              onSubmit ? onSubmit(data) : console.log("Contact form:", data);
              onClose();
            }}
          >
            {/* Name */}
            <label className="flex flex-col gap-1">
              <span className="text-sm text-slate-300">Name*</span>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  required
                  name="name"
                  placeholder="Full name"
                  className="glass-field w-full rounded-xl bg-white/5 border border-white/10 px-9 py-3 text-sm placeholder:text-slate-400"
                />
              </div>
            </label>

            {/* Email */}
            <label className="flex flex-col gap-1">
              <span className="text-sm text-slate-300">Email*</span>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  className="glass-field w-full rounded-xl bg-white/5 border border-white/10 px-9 py-3 text-sm placeholder:text-slate-400"
                />
              </div>
            </label>

            {/* Phone */}
            <label className="flex flex-col gap-1">
              <span className="text-sm text-slate-300">Phone*</span>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  required
                  name="phone"
                  inputMode="tel"
                  placeholder="+92 3xx xxxxxxx"
                  className="glass-field w-full rounded-xl bg-white/5 border border-white/10 px-9 py-3 text-sm placeholder:text-slate-400"
                />
              </div>
            </label>

            {/* Company */}
            <label className="flex flex-col gap-1">
              <span className="text-sm text-slate-300">Company / Restaurant</span>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  name="company"
                  placeholder="Brand or business"
                  className="glass-field w-full rounded-xl bg-white/5 border border-white/10 px-9 py-3 text-sm placeholder:text-slate-400"
                />
              </div>
            </label>

            {/* Services — chips */}
            <div className="md:col-span-2">
              <div className="flex items-end justify-between gap-4">
                <span className="text-sm text-slate-300">Services Needed</span>
                <span className="text-[11px] text-slate-400">Choose all that apply</span>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {SERVICES.map((s) => {
                  const active = selected.has(s);
                  return (
                    <button
                      type="button"
                      key={s}
                      onClick={() => toggleService(s)}
                      className={`chip rounded-full px-3.5 py-2 text-[13px] border
                        ${active
                          ? "bg-violet-500/25 text-violet-100 border-violet-400/40 shadow-[0_6px_16px_rgba(139,92,246,.18)]"
                          : "bg-white/5 text-slate-200 border-white/10 hover:bg-white/10"}`}
                      aria-pressed={active}
                    >
                      {s}
                    </button>
                  );
                })}

                <button
                  type="button"
                  onClick={() => setShowOther((v) => !v)}
                  className={`chip rounded-full px-3.5 py-2 text-[13px] border
                    ${showOther
                      ? "bg-fuchsia-500/25 text-fuchsia-100 border-fuchsia-400/40 shadow-[0_6px_16px_rgba(217,70,239,.18)]"
                      : "bg-white/5 text-slate-200 border-white/10 hover:bg-white/10"}`}
                  aria-expanded={showOther}
                  aria-controls="services-other"
                >
                  Other
                </button>
              </div>

              <div
                id="services-other"
                className="grid transition-[grid-template-rows,opacity] duration-200 ease-out"
                style={{ gridTemplateRows: showOther ? "1fr" : "0fr", opacity: showOther ? 1 : 0 }}
              >
                <div className="overflow-hidden">
                  <input
                    value={otherValue}
                    onChange={(e) => setOtherValue(e.target.value)}
                    placeholder="e.g., Packaging design, Influencer outreach, Print collateral…"
                    className="mt-3 glass-field w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm placeholder:text-slate-400"
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <label className="md:col-span-2 flex flex-col gap-1">
              <span className="text-sm text-slate-300">Tell us about your project</span>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-slate-400" size={16} />
                <textarea
                  name="message"
                  rows={5}
                  placeholder="What are you looking to build or improve?"
                  className="glass-field w-full rounded-xl bg-white/5 border border-white/10 pl-9 pr-3 py-3 text-sm placeholder:text-slate-400 resize-y"
                />
              </div>
            </label>

            {/* Footer */}
            <div className="md:col-span-2 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pt-1">
              <p className="text-[12px] text-slate-400">We usually respond within a few hours.</p>
              <button
                type="submit"
                className="rounded-xl px-5 py-3 text-sm font-semibold bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 hover:opacity-95 active:translate-y-[1px] shadow-[0_10px_22px_rgba(99,102,241,.28)] will-change-transform"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
