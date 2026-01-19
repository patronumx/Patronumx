import React, { useState } from "react";
import {
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  ShieldCheck,
  Building2,
  Sparkles,
  ArrowRight,
  Linkedin,
  Twitter,
  Instagram,
  Github,
  Copy,
  Check,
  X,
} from "lucide-react";
import ContactModal from "../components/ContactModal";

export default function Contact() {
  const [openModal, setOpenModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const EMAIL = "thepatronumx@gmail.com";
  const PHONE = "+92 303 5921629";
  const WHATSAPP = "+92 303 5921629";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (_) { }
  };

  return (
    <main className="relative text-white overflow-hidden min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      {/* Hero */}
      <section className="px-6 pt-32 pb-16 md:pt-40 md:pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full border border-purple-500/20 text-purple-300 bg-purple-500/10 backdrop-blur-md mb-6">
            <Sparkles size={14} />
            Let’s build the future
          </div>
          <h1 className="font-bold text-5xl md:text-7xl leading-tight tracking-tight mb-6">
            Visionary AI Solutions. <br className="hidden sm:block" />
            <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text">
              Engineered for Impact.
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mb-10">
            From autonomous AI agents to predictive enterprise systems—our team
            ships fast with clean hand-offs, SLOs, and observability from day one.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setOpenModal(true)}
              className="group relative inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4
                         font-bold text-white transition-all duration-300 overflow-hidden
                         bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500
                         shadow-[0_0_20px_rgba(139,92,246,0.5)]
                         hover:shadow-[0_0_30px_rgba(139,92,246,0.7)]
                         hover:scale-[1.02]
                         active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact us <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-xl px-6 py-4
                         border border-white/10 bg-white/5 backdrop-blur-md text-slate-200
                         hover:text-white hover:border-purple-500/50 hover:bg-white/10
                         transition-all duration-300 font-medium"
            >
              <Mail size={20} />
              {EMAIL}
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-xl px-6 py-4
                         border border-white/10 bg-white/5 backdrop-blur-md text-slate-200
                         hover:text-white hover:border-purple-500/50 hover:bg-white/10
                         transition-all duration-300 font-medium"
              title="Copy email"
            >
              {copied ? <Check size={20} className="text-emerald-400" /> : <Copy size={20} />}
              {copied ? "Copied" : "Copy email"}
            </button>
          </div>
        </div>
      </section>

      {/* Quick contact tiles & SLAs */}
      <section className="px-6 pb-16 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <InfoCard
            icon={<MessageSquare size={20} />}
            title="Sales & Partnerships"
            subtitle="New projects, RFPs, and collaborations"
            action={
              <a
                href={`mailto:${EMAIL}`}
                className="text-purple-400 hover:text-purple-300 hover:underline inline-flex items-center gap-1 font-medium mt-2"
              >
                {EMAIL} <ArrowRight size={14} />
              </a>
            }
          />

          <Panel title="Office hours" icon={<Clock size={20} />}>
            <ul className="text-slate-300 text-sm space-y-2">
              <li className="flex justify-between"><span>Mon–Fri:</span> <span className="font-mono text-slate-200">9:00–18:00 (PKT)</span></li>
              <li className="flex justify-between"><span>Sat:</span> <span className="font-mono text-slate-200">10:00–14:00 (support)</span></li>
              <li className="flex justify-between"><span>Sun:</span> <span className="text-purple-300 font-medium">On-call for incidents</span></li>
            </ul>
          </Panel>

          <Panel title="Response times (SLA)" icon={<ShieldCheck size={20} />}>
            <ul className="text-slate-300 text-sm space-y-2">
              <li className="flex justify-between"><span>New inquiries:</span> <span className="font-mono text-emerald-400">&lt; 24 hours</span></li>
              <li className="flex justify-between"><span>Priority support (P1):</span> <span className="font-mono text-emerald-400">&lt; 30 minutes</span></li>
              <li className="flex justify-between"><span>Escalations:</span> <span className="text-purple-300 font-medium">Immediate</span></li>
            </ul>
          </Panel>
        </div>
      </section>

      {/* Map / Alt channels */}
      <section className="px-6 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="rounded-[24px] border border-white/10 bg-slate-900/40 backdrop-blur-xl p-2 shadow-2xl">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-[20px] grayscale hover:grayscale-0 transition-all duration-700">
              <iframe
                title="Office Map"
                src="https://maps.google.com/maps?q=Islamabad,Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
            <p className="text-slate-400 text-xs mt-3 px-2 mb-1 text-center">
              Visiting? Ping us before you drop by — we’re often embedded with clients.
            </p>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-slate-900/40 backdrop-blur-xl p-8 shadow-2xl flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-6 text-white">Prefer a different channel?</h3>
            <div className="space-y-4">
              <Row icon={<Mail size={18} />} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
              <Row icon={<Phone size={18} />} label="Phone" value={PHONE} />
              <Row
                icon={<MessageSquare size={18} />}
                label="WhatsApp"
                value={WHATSAPP}
                href={`https://wa.me/${WHATSAPP.replace(/\D/g, "")}`}
              />
            </div>

            <div className="h-px bg-white/5 my-8" />

            <h4 className="text-sm font-semibold mb-4 text-slate-400 uppercase tracking-wider">Social</h4>
            <div className="flex flex-wrap gap-3">
              <Social href="https://www.linkedin.com/company/patronum-x-solutions?trk=blended-typeahead" icon={<Linkedin size={18} />} label="LinkedIn" />
              <Social href="#" icon={<X size={18} />} />
              <Social href="https://www.instagram.com/patronumxsolutions/" icon={<Instagram size={18} />} label="Instagram" />
            </div>

            <div className="mt-8 text-slate-400 text-sm">
              Want us to contact you?{" "}
              <button
                className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                onClick={() => setOpenModal(true)}
              >
                Open the form
              </button>{" "}
              and we’ll reply shortly.
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-6 pb-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-10 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <FAQ
              q="How quickly can you start?"
              a="For most projects we can begin discovery within 5–7 business days. For urgent production issues, our on-call team can engage same-day."
            />
            <FAQ
              q="Do you offer fixed-scope pricing?"
              a="Yes — for small/medium engagements we provide fixed-scope quotes. Larger or open-ended initiatives are usually monthly retainers with a shared roadmap and KPIs."
            />
            <FAQ
              q="Can you work with our in-house team?"
              a="Absolutely. We pair well with internal teams — sharing component libraries, establishing runbooks, and documenting patterns for long-term ownership."
            />
            <FAQ
              q="What’s your hand-off like?"
              a="Clean and explicit. You’ll get SLOs, runbooks, dashboards, and training. You can run it yourself, or keep us on retainer for co-running and improvements."
            />
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      <button
        onClick={() => setOpenModal(true)}
        className="fixed right-6 bottom-6 z-50 inline-flex items-center gap-2 rounded-full px-6 py-3
                   font-semibold text-white bg-purple-600 hover:bg-purple-500
                   shadow-[0_4px_20px_rgba(147,51,234,0.4)] hover:-translate-y-1 transition-all duration-300"
      >
        <Sparkles size={18} />
        Contact us
      </button>

      {/* Contact Modal */}
      <ContactModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={(payload) => {
          // TODO: wire to your API/CRM
          console.log("Contact payload:", payload);
        }}
      />
    </main>
  );
}

/* ------------------------ UI Subcomponents ------------------------ */

function InfoCard({ icon, title, subtitle, action }) {
  return (
    <div className="h-full rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md p-6 shadow-lg hover:border-purple-500/30 transition-colors group">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:scale-110 transition-transform">{icon}</div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="text-slate-400 text-sm mt-1 leading-relaxed">{subtitle}</p>
          <div className="mt-3">{action}</div>
        </div>
      </div>
    </div>
  );
}

function Panel({ title, icon, children }) {
  return (
    <div className="h-full rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md p-6 shadow-lg hover:border-purple-500/30 transition-colors group">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-purple-400">{icon}</span>
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function Row({ icon, label, value, href }) {
  return (
    <div className="flex items-center justify-between gap-4 border border-white/5 bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors group">
      <div className="flex items-center gap-3">
        <span className="text-purple-400 group-hover:scale-110 transition-transform">{icon}</span>
        <div>
          <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">{label}</div>
          <div className="text-slate-200 font-medium">{value}</div>
        </div>
      </div>
      {href ? (
        <a href={href} className="text-purple-400 text-sm font-semibold hover:text-purple-300">
          Open
        </a>
      ) : null}
    </div>
  );
}

function Social({ href, icon, label }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5
                 border border-white/10 bg-white/5 text-slate-300
                 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10
                 transition-all duration-300"
    >
      {icon}
      {label && <span className="text-sm font-medium">{label}</span>}
    </a>
  );
}

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-2xl border transition-all duration-300 overflow-hidden ${open ? 'border-purple-500/30 bg-slate-900/60' : 'border-white/10 bg-slate-900/40 hover:border-white/20'}`}>
      <button
        className="w-full text-left flex items-center justify-between gap-4 p-5"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="font-semibold text-lg text-slate-100">{q}</span>
        <span className={`transition-transform duration-300 text-purple-400 ${open ? "rotate-90" : ""}`}>
          <ArrowRight size={20} />
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows,opacity] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0 }}
      >
        <div className="overflow-hidden px-5 pb-5">
          <p className="text-slate-400 leading-relaxed border-t border-white/5 pt-4">{a}</p>
        </div>
      </div>
    </div>
  );
}
