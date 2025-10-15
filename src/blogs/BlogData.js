// src/blogs/BlogData.js

// ✅ Verified Unsplash images — all real and stable
export const BLOGS = [
  {
    id: "conversion",
    slug: "online-ordering-conversion-boost-2025",
    category: "Online Ordering",
    title:
      "7 Proven Ways to Lift Online Ordering Conversion for Food Brands (to 3.5%+)",
    excerpt:
      "Most restaurant sites sit between 1.2–2.0% conversion. With thoughtful UX and analytics, 3.5%+ is realistic. Here’s the playbook.",
    image:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
    read: "8 min",
    date: "Aug 2025",
    tags: ["UX", "CRO", "Analytics"],
    content: [
      { type: "p", text: "Most restaurant sites sit between 1.2–2.0% conversion. In this guide we outline seven practical levers we use to push past 3.5%+." },
      { type: "h3", text: "1) Faster Menus & Better LCP" },
      { type: "p", text: "Optimize images, enable HTTP/2, and prefetch likely next routes. Tie this to your menu structure." },
      { type: "h3", text: "2) Dynamic Bundles" },
      { type: "ul", items: [
        "Bundle high-frequency sides to reduce AOV friction",
        "Seasonal bundles with clear savings",
        "Use badges to highlight popular picks"
      ]}
    ]
  },
  {
    id: "ai-roas",
    slug: "ai-roas-restaurants-first-party-data",
    category: "AI & Marketing",
    title:
      "How Restaurants Can Use AI (Safely) to Lift ROAS: First-Party Data + Creative at Scale",
    excerpt:
      "Ad platforms are powerful—but without clean first-party data, ROAS plateaus. Use AI to segment POS/CRM data and automate creative testing.",
    image:
      "https://images.unsplash.com/photo-1665686309338-6d5d14701d3a?auto=format&fit=crop&w=1200&q=80",
    read: "9 min",
    date: "Aug 2025",
    tags: ["AI", "Data", "Ads"],
    content: [
      { type: "p", text: "AI is a force multiplier when it’s grounded in clean first-party data and explicit feedback loops." },
      { type: "h3", text: "Guardrails & Practical Steps" },
      { type: "ul", items: [
        "Segment POS/CRM cohorts and sync to ad platforms",
        "Generate compliant variations for copy & visuals",
        "Close the loop with post-purchase signals"
      ]}
    ]
  },
  {
    id: "perf",
    slug: "fast-food-menus-react-vite-image-cdn",
    category: "Engineering",
    title:
      "Lightning-Fast Menus: Our Frontend Recipe (React + Vite + Image CDN) for Sub-2s Loads",
    excerpt:
      "Food menus are image-heavy. Here’s how we keep LCP under 2s: Vite, responsive image CDN, skeleton loaders, and optimistic cart.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    read: "7 min",
    date: "Aug 2025",
    tags: ["Performance", "Frontend"],
    content: [
      { type: "p", text: "Sub-2s load times are realistic with image-heavy menus if optimized from the start." },
      { type: "h3", text: "Our Stack" },
      { type: "ul", items: [
        "Vite + code splitting",
        "Image CDN with AVIF/WebP and DPR-aware sizes",
        "Skeleton loaders and optimistic cart actions"
      ]}
    ]
  },
  {
    id: "esports-broadcast",
    slug: "esports-broadcast-tooling-2025",
    category: "Esports",
    title: "Broadcast Tooling 2025: Latency, Observability, and Failover",
    excerpt:
      "A practical guide to building or buying esports broadcast tooling that scales with your event ops.",
    image:
      "https://images.unsplash.com/photo-1556139943-4bdca53adf1e?auto=format&fit=crop&w=1200&q=80",
    read: "6 min",
    date: "Jul 2025",
    tags: ["Esports", "DevOps"],
    content: [
      { type: "p", text: "Broadcast quality depends on resilience and observability across your stack." },
      { type: "h3", text: "Core Ideas" },
      { type: "ul", items: [
        "Low-latency ingest & distribution",
        "Health checks & failover",
        "Operator-first dashboards"
      ]}
    ]
  },
  {
    id: "blockchain-loyalty",
    slug: "blockchain-loyalty-food-brands",
    category: "Blockchain",
    title: "Blockchain Loyalty for Food Brands: Real Utility, Not Hype",
    excerpt:
      "Use tokenized rewards responsibly to drive repeat orders and community participation.",
    image:
      "https://images.unsplash.com/photo-1621570169304-7edfd168c0b8?auto=format&fit=crop&w=1200&q=80",
    read: "8 min",
    date: "Jun 2025",
    tags: ["Web3", "Loyalty"],
    content: [
      { type: "p", text: "Tokenized rewards can work—when they’re tied to real customer value." },
      { type: "h3", text: "What Works" },
      { type: "ul", items: [
        "Earning via real purchases",
        "Perks customers actually want",
        "Simple UX with custodial wallets"
      ]}
    ]
  },
  {
    id: "ai-ops",
    slug: "ai-ops-restaurant-automation",
    category: "AI & Ops",
    title: "AI Ops: Automating Repetitive Restaurant Processes Safely",
    excerpt:
      "From inbox triage to inventory forecasting — AI Ops can streamline workflows while keeping humans in control.",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1200&q=80",
    read: "6 min",
    date: "May 2025",
    tags: ["AI", "Automation"],
    content: [
      { type: "p", text: "AI Ops can free up staff time and reduce errors if rolled out safely." },
      { type: "h3", text: "A Safe Starter Path" },
      { type: "ul", items: [
        "Inbox triage & canned replies",
        "Forecasting with guardrails",
        "Human review at key steps"
      ]}
    ]
  }
];

// Helpers
export const getBlogBySlug = (slug) => {
  if (!slug) return null;
  const clean = slug.replace(/^\/?blog\/?/i, "");
  return BLOGS.find((b) => b.slug === clean);
};

export const getBlogImage = (post) => post?.image || "";
