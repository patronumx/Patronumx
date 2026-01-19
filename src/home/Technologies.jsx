import React from "react";
import LogoLoop from "../components/Logoloop";
import OpenAIImg from "../assets/OPENAI.png";
import LangChainImg from "../assets/langchain.png";
import PineconeImg from "../assets/Pinecone.png";
import AWSImg from "../assets/AWS.png";

// helper for Simple Icons CDN
function icon(slug, color) {
  const hex = color.replace("#", "");
  return `https://cdn.simpleicons.org/${slug}/${hex}`;
}

const allLogosData = [
  // AI & ML
  { name: "Python", src: icon("python", "#3776AB") },
  { name: "OpenAI", src: OpenAIImg },
  { name: "TensorFlow", src: icon("tensorflow", "#FF6F00") },
  { name: "PyTorch", src: icon("pytorch", "#EE4C2C") },
  { name: "HuggingFace", src: icon("huggingface", "#FFD21E") },
  { name: "LangChain", src: LangChainImg },
  { name: "Pinecone", src: PineconeImg },
  { name: "NVIDIA", src: icon("nvidia", "#76B900") },

  // Cloud & Infra
  { name: "AWS", src: AWSImg },
  { name: "Google Cloud", src: icon("googlecloud", "#4285F4") },
  { name: "Docker", src: icon("docker", "#2496ED") },
  { name: "Kubernetes", src: icon("kubernetes", "#326CE5") },
  { name: "Vercel", src: icon("vercel", "#FFFFFF") },
  { name: "Supabase", src: icon("supabase", "#3ECF8E") },

  // Core Stack
  { name: "React", src: icon("react", "#61DAFB") },
  { name: "Next.js", src: icon("nextdotjs", "#FFFFFF") },
  { name: "TypeScript", src: icon("typescript", "#3178C6") },
  { name: "Tailwind", src: icon("tailwindcss", "#06B6D4") },
  { name: "PostgreSQL", src: icon("postgresql", "#4169E1") },
  { name: "Redis", src: icon("redis", "#DC382D") },
];

// Remove href for non-clickable
const logosToDisplay = allLogosData.map(l => ({ src: l.src, alt: l.name }));

export default function Tech() {
  return (
    <>
      <style>{`
        .tech-strip {
          height: 100px;            /* was 150px */
          display: flex;
          align-items: center;
          background: transparent;
          overflow-x: hidden;
          overflow-y: visible;
        }
        .tech-heading {
          font-size: clamp(1.25rem, 2.2vw + 0.5rem, 2rem); /* smaller, responsive */
          font-weight: 800;
          letter-spacing: -0.04em;
          text-align: center;
          margin-bottom: 0.75rem;   /* was 1rem */
          background: linear-gradient(90deg, #22d3ee, #e879f9 50%, #818cf8 100%);
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 20px rgba(34, 211, 238, 0.3);
          font-family: inherit;
        }
        @media (max-width: 640px) {
          .tech-strip { height: 84px; }
        }
      `}</style>

      <div>
        <div className="tech-heading">Technologies we work around</div>

        <div className="tech-strip">
          <LogoLoop
            logos={logosToDisplay}
            speed={120}
            direction="right"
            logoHeight={72}     /* was 110 */
            gap={28}            /* was 40 */
            pauseOnHover
            scaleOnHover
            fadeOut={true}
            showNames
            nameSize={12}       /* was 14 */
            nameColor="currentColor"
            ariaLabel="Technology stack"
          />
        </div>
      </div>
    </>
  );
}
