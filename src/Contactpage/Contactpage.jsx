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
} from "lucide-react";
import ContactModal from "../components/ContactModal"; // <- adjust path if needed

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
    } catch (_) {}
  };

  return (
    <main className="relative text-white">
      {/* star / gradient background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
      </div>

      {/* Hero */}
      <section className="px-6 pt-16 pb-10 md:pt-24 md:pb-14">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold px-3 py-1 rounded-full border border-amber-300/30 text-amber-300 bg-amber-400/10">
            <Sparkles size={14} />
            Let’s collaborate
          </div>
          <h1 className="mt-3 font-extrabold text-[clamp(2rem,6.5vw,3.5rem)] leading-tight">
            Tell us where you want to go. <br className="hidden sm:block" />
            We’ll design the shortest path there.
          </h1>
          <p className="mt-3 text-slate-300 max-w-2xl">
            Whether it's headless commerce, apps, or AI copilots—our team
            ships fast with clean hand-offs, SLOs, and observability from day one.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => setOpenModal(true)}
              className="relative inline-flex items-center gap-2 rounded-2xl px-5 py-3
                         font-semibold text-slate-950 transition-all
                         bg-gradient-to-r from-amber-300 via-amber-400 to-red-400
                         shadow-[0_10px_28px_rgba(251,191,36,0.28)]
                         hover:shadow-[0_16px_40px_rgba(251,191,36,0.38)]
                         hover:-translate-y-0.5"
            >
              Start a conversation
              <ArrowRight size={18} />
            </button>

            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-3
                         border border-white/10 bg-white/[0.06] text-slate-200
                         hover:text-white hover:border-amber-400/40 hover:bg-white/[0.1]
                         transition"
            >
              <Mail size={18} />
              {EMAIL}
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-3
                         border border-white/10 bg-white/[0.06] text-slate-200
                         hover:text-white hover:border-amber-400/40 hover:bg-white/[0.1]
                         transition"
              title="Copy email"
            >
              {copied ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
              {copied ? "Copied" : "Copy email"}
            </button>
          </div>
        </div>
      </section>

      {/* Quick contact tiles */}
      <section className="px-6 pb-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4">
          <InfoCard
            icon={<MessageSquare size={18} />}
            title="Sales & Partnerships"
            subtitle="New projects, RFPs, and collaborations"
            action={
              <a
                href={`mailto:${EMAIL}`}
                className="text-amber-300 hover:underline inline-flex items-center gap-1"
              >
                {EMAIL} <ArrowRight size={14} />
              </a>
            }
          />
          <InfoCard
            icon={<ShieldCheck size={18} />}
            title="Customer Support"
            subtitle="Incidents, SLOs, or urgent production issues"
            action={
              <div className="flex flex-col sm:flex-row gap-2">
                <a href={`mailto:${EMAIL}`} className="text-amber-300 hover:underline">
                  support@patronumx.com
                </a>
                <span className="text-slate-400">·</span>
                <span className="text-slate-300">{PHONE}</span>
              </div>
            }
          />
          <InfoCard
            icon={<Building2 size={18} />}
            title="Careers"
            subtitle="We hire for craft and clarity"
            action={
              <a
                href="mailto:careers@patronumx.com"
                className="text-amber-300 hover:underline inline-flex items-center gap-1"
              >
                careers@patronumx.com <ArrowRight size={14} />
              </a>
            }
          />
        </div>
      </section>

      {/* Hours / SLAs / Locations */}
      <section className="px-6 pb-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-4">
          <Panel title="Office hours" icon={<Clock size={16} />}>
            <ul className="text-slate-300 text-sm space-y-1.5">
              <li>Mon–Fri: 9:00–18:00 (PKT)</li>
              <li>Sat: 10:00–14:00 (support only)</li>
              <li>Sun: on-call for incidents</li>
            </ul>
          </Panel>

          <Panel title="Response times (SLA)" icon={<ShieldCheck size={16} />}>
            <ul className="text-slate-300 text-sm space-y-1.5">
              <li>New inquiries: &lt; 24 hours</li>
              <li>Priority support (P1): &lt; 30 minutes</li>
              <li>Production escalations: immediate on-call</li>
            </ul>
          </Panel>

          <Panel title="Locations" icon={<MapPin size={16} />}>
            <ul className="text-slate-300 text-sm space-y-1.5">
              <li>Islamabad · Karachi · Lahore · Remote</li>
              <li>Client delivery across US/EU/APAC</li>
              <li className="text-slate-400">On-site available for events</li>
            </ul>
          </Panel>
        </div>
      </section>

      {/* Map / Alt channels */}
      <section className="px-6 pb-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-4 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-xl">
              {/* Replace src with your office map link */}
              <iframe
                title="Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509384!2d144.95373531531868!3d-37.81627974201237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAwLjYiUyAxNDTCsDU3JzI2LjQiRQ!5e0!3m2!1sen!2sus!4v1614038931231"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
            <p className="text-slate-400 text-xs mt-2">
              Visiting? Ping us before you drop by — we’re often embedded with clients or on-site at events.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
            <h3 className="text-lg font-semibold mb-3">Prefer a different channel?</h3>
            <div className="space-y-3">
              <Row icon={<Mail size={16} />} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
              <Row icon={<Phone size={16} />} label="Phone" value={PHONE} />
              <Row
                icon={<MessageSquare size={16} />}
                label="WhatsApp"
                value={WHATSAPP}
                href={`https://wa.me/${WHATSAPP.replace(/\D/g, "")}`}
              />
            </div>

            <div className="h-px bg-white/10 my-5" />

            <h4 className="text-sm font-semibold mb-2 text-slate-200">Social</h4>
            <div className="flex flex-wrap gap-2">
              <Social href="#" icon={<Linkedin size={16} />} label="LinkedIn" />
              <Social href="#" icon={<Twitter size={16} />} label="X / Twitter" />
              <Social href="#" icon={<Instagram size={16} />} label="Instagram" />
              <Social href="#" icon={<Mail size={16} />} label="Mail" />
            </div>

            <div className="h-px bg-white/10 my-5" />

            <p className="text-slate-300 text-sm">
              Want us to contact you?{" "}
              <button
                className="text-amber-300 hover:underline"
                onClick={() => setOpenModal(true)}
              >
                Open the quick form
              </button>{" "}
              and we’ll reply shortly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
            Frequently asked
          </h2>

          <div className="grid lg:grid-cols-2 gap-4">
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
        className="fixed right-6 bottom-6 z-40 inline-flex items-center gap-2 rounded-full px-5 py-3
                   font-semibold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-red-400
                   shadow-[0_12px_28px_rgba(251,191,36,0.35)] hover:-translate-y-0.5 transition"
      >
        <Sparkles size={18} />
        Let’s Collaborate
      </button>

      {/* Modal */}
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
    <div className="rounded-2xl border border-white/10 bg-white/[0.045] backdrop-blur-md p-5 shadow-[0_6px_24px_rgba(0,0,0,0.35)]">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-xl bg-amber-400/10 text-amber-300">{icon}</div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-slate-300 text-sm mt-1">{subtitle}</p>
          <div className="mt-2">{action}</div>
        </div>
      </div>
    </div>
  );
}

function Panel({ title, icon, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.045] backdrop-blur-md p-6 shadow-[0_6px_24px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-amber-300">{icon}</span>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function Row({ icon, label, value, href }) {
  return (
    <div className="flex items-center justify-between gap-3 border border-white/10 bg-white/[0.04] rounded-xl p-3">
      <div className="flex items-center gap-2">
        <span className="text-amber-300">{icon}</span>
        <div>
          <div className="text-sm font-semibold">{label}</div>
          <div className="text-slate-300 text-sm">{value}</div>
        </div>
      </div>
      {href ? (
        <a href={href} className="text-amber-300 text-sm hover:underline">
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
      className="inline-flex items-center gap-2 rounded-xl px-3 py-2
                 border border-white/10 bg-white/[0.06] text-slate-200
                 hover:text-white hover:border-amber-400/40 hover:bg-white/[0.1]
                 transition"
    >
      {icon}
      <span className="text-sm">{label}</span>
    </a>
  );
}

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.045] backdrop-blur-md p-4">
      <button
        className="w-full text-left flex items-center justify-between gap-3"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="font-semibold">{q}</span>
        <span className={`transition-transform ${open ? "rotate-90" : ""}`}>
          <ArrowRight size={16} />
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows,opacity] duration-200 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0 }}
      >
        <div className="overflow-hidden">
          <p className="text-slate-300 text-sm mt-3">{a}</p>
        </div>
      </div>
    </div>
  );
}
