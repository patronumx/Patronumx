import React from "react";
import LogoLoop from "../components/Logoloop";

// helper for Simple Icons CDN
function icon(slug, color) {
  const hex = color.replace("#", "");
  return `https://cdn.simpleicons.org/${slug}/${hex}`;
}

const allLogosData = [
  // A curated, smaller list for a cleaner look
  { name: "React", src: icon("react", "#61DAFB") },
  { name: "Next.js", src: icon("nextdotjs", "#FFFFFF") },
  { name: "Angular", src: icon("angular", "#DD0031") },
  { name: "Svelte", src: icon("svelte", "#FF3E00") },
  { name: "TypeScript", src: icon("typescript", "#3178C6") },
  { name: "Tailwind CSS", src: icon("tailwindcss", "#06B6D4") },
  { name: "Node.js", src: icon("nodedotjs", "#339933") },
  { name: "Express", src: icon("express", "#000000") },
  { name: "NestJS", src: icon("nestjs", "#E0234E") },
  { name: "Django", src: icon("django", "#092E20") },
  { name: "Go", src: icon("go", "#00ADD8") },
  { name: "Rust", src: icon("rust", "#000000") },
  { name: "MongoDB", src: icon("mongodb", "#47A248") },
  { name: "PostgreSQL", src: icon("postgresql", "#4169E1") },
  { name: "Redis", src: icon("redis", "#DC382D") },
  { name: "Google Cloud", src: icon("googlecloud", "#1A73E8") },
  { name: "Docker", src: icon("docker", "#2496ED") },
  { name: "Kubernetes", src: icon("kubernetes", "#326CE5") },
  { name: "Vercel", src: icon("vercel", "#000000") },
  { name: "Firebase", src: icon("firebase", "#FFCA28") },
  { name: "Flutter", src: icon("flutter", "#02569B") },
  { name: "Swift", src: icon("swift", "#FA7343") },
  { name: "GraphQL", src: icon("graphql", "#E10098") },
  { name: "Stripe", src: icon("stripe", "#635BFF") },
  { name: "Git", src: icon("git", "#F05032") },
];

const logosToDisplay = allLogosData.map(l => ({ src: l.src, alt: l.name }));

export default function Tech() {
  return (
    <div className="py-8 sm:py-12">
      <style>{`
        .tech-strip {
          height: 120px; /* Reduced height */
          display: flex;
          align-items: center;
          background: transparent;
          overflow: hidden;
        }
        .tech-heading {
          font-size: 2rem; /* Reduced font size */
          font-weight: 800;
          letter-spacing: -0.03em;
          text-align: center;
          margin-bottom: 0.75rem; /* Reduced margin */
          background: linear-gradient(90deg, #6366f1, #a21caf 70%, #9333ea 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 2px 20px rgba(100,80,255,0.1);
          font-family: inherit;
        }
      `}</style>
      <div>
        <div className="tech-heading">
          Technologies we work around
        </div>
        <div className="tech-strip">
          <LogoLoop
            logos={logosToDisplay}
            speed={100} // Slightly reduced speed
            direction="right"
            logoHeight={80} // Reduced logo height
            gap={30} // Reduced gap
            pauseOnHover
            scaleOnHover
            fadeOut={false}
            showNames
            nameSize={12} // Reduced name size
            nameColor="currentColor"
            ariaLabel="Technology stack"
          />
        </div>
      </div>
    </div>
  );
}
