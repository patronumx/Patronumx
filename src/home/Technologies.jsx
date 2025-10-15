import React from "react";
import LogoLoop from "../components/Logoloop";

// helper for Simple Icons CDN
function icon(slug, color) {
  const hex = color.replace("#", "");
  return `https://cdn.simpleicons.org/${slug}/${hex}`;
}

const allLogosData = [
  // Frontend
  { name: "React",        src: icon("react",        "#61DAFB") },
  { name: "Next.js",      src: icon("nextdotjs",    "#FFFFFF") },
  { name: "Angular",      src: icon("angular",      "#DD0031") },
  { name: "Svelte",       src: icon("svelte",       "#FF3E00") },
  { name: "TypeScript",   src: icon("typescript",   "#3178C6") },
  { name: "JavaScript",   src: icon("javascript",   "#F7DF1E") },
  { name: "Tailwind CSS", src: icon("tailwindcss",  "#06B6D4") },
  { name: "Bootstrap",    src: icon("bootstrap",    "#7952B3") },
  { name: "Redux",        src: icon("redux",        "#764ABC") },
  { name: "Vite",         src: icon("vite",         "#646CFF") },
  { name: "Webpack",      src: icon("webpack",      "#8DD6F9") },
  { name: "Babel",        src: icon("babel",        "#F9DC3E") },

  // Backend / Runtimes
  { name: "Node.js",      src: icon("nodedotjs",    "#339933") },
  { name: "Express",      src: icon("express",      "#000000") },
  { name: "NestJS",       src: icon("nestjs",       "#E0234E") },
  { name: "Django",       src: icon("django",       "#092E20") },
  { name: "Flask",        src: icon("flask",        "#000000") },
  { name: "FastAPI",      src: icon("fastapi",      "#009688") },
  { name: "Laravel",      src: icon("laravel",      "#FF2D20") },
  { name: "Spring",       src: icon("spring",       "#6DB33F") },
  { name: ".NET",         src: icon("dotnet",       "#512BD4") },
  { name: "Rails",        src: icon("rubyonrails",  "#CC0000") },
  { name: "Go",           src: icon("go",           "#00ADD8") },
  { name: "Rust",         src: icon("rust",         "#000000") },

  // Databases / Data
  { name: "MongoDB",      src: icon("mongodb",      "#47A248") },
  { name: "PostgreSQL",   src: icon("postgresql",   "#4169E1") },
  { name: "MySQL",        src: icon("mysql",        "#4479A1") },
  { name: "SQLite",       src: icon("sqlite",       "#003B57") },
  { name: "Redis",        src: icon("redis",        "#DC382D") },
  { name: "Elasticsearch",src: icon("elasticsearch","#005571") },

  // Cloud / DevOps
  { name: "Google Cloud", src: icon("googlecloud",  "#1A73E8") },
  { name: "Docker",       src: icon("docker",       "#2496ED") },
  { name: "Kubernetes",   src: icon("kubernetes",   "#326CE5") },
  { name: "Nginx",        src: icon("nginx",        "#009639") },
  { name: "Apache",       src: icon("apache",       "#D22128") },
  { name: "Cloudflare",   src: icon("cloudflare",   "#F38020") },
  { name: "Vercel",       src: icon("vercel",       "#000000") },
  { name: "Netlify",      src: icon("netlify",      "#00C7B7") },
  { name: "Firebase",     src: icon("firebase",     "#FFCA28") },
  { name: "Supabase",     src: icon("supabase",     "#3ECF8E") },

  // Mobile
  { name: "iOS",          src: icon("apple",        "#FFFFFF") },
  { name: "Android",      src: icon("android",      "#3DDC84") },
  { name: "Flutter",      src: icon("flutter",      "#02569B") },
  { name: "Swift",        src: icon("swift",        "#FA7343") },
  { name: "Kotlin",       src: icon("kotlin",       "#7F52FF") },
  { name: "React Native", src: icon("react",        "#61DAFB") },

  // APIs / Tooling
  { name: "GraphQL",      src: icon("graphql",      "#E10098") },
  { name: "Apollo",       src: icon("apollographql","#311C87") },
  { name: "Prisma",       src: icon("prisma",       "#2D3748") },
  { name: "RabbitMQ",     src: icon("rabbitmq",     "#FF6600") },
  { name: "Kafka",        src: icon("apachekafka",  "#231F20") },

  // Payments
  { name: "Stripe",       src: icon("stripe",       "#635BFF") },
  { name: "PayPal",       src: icon("paypal",       "#003087") },

  // Version Control / PM
  { name: "Git",          src: icon("git",          "#F05032") },
  { name: "GitHub",       src: icon("github",       "#181717") },
  { name: "GitLab",       src: icon("gitlab",       "#FC6D26") },
  { name: "Bitbucket",    src: icon("bitbucket",    "#0052CC") },
  { name: "Jira",         src: icon("jira",         "#0052CC") },
];

// Remove href for non-clickable
const logosToDisplay = allLogosData.map(l => ({ src: l.src, alt: l.name }));

export default function Tech() {
  return (
    <>
      <style>{`
        /* Slim, fully transparent strip. No vertical scrollbars. */
        .tech-strip {
          height: 150px;             /* fits 110px logo + label comfortably */
          display: flex;
          align-items: center;
          background: transparent;
          overflow-x: hidden;        /* hide horizontal scrollbar */
          overflow-y: visible;       /* allow hover lift to render outside */
        }
        .tech-heading {
          font-size: 2.5rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          text-align: center;
          margin-bottom: 1rem;
          background: linear-gradient(90deg, #6366f1, #a21caf 60%, #9333ea 100%);
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 2px 28px rgba(100,80,255,0.11);
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
            speed={120}
            direction="right"
            logoHeight={110}
            gap={40}
            pauseOnHover
            scaleOnHover           /* enable hover effect */
            fadeOut={false}
            showNames
            nameSize={14}
            nameColor="currentColor"
            ariaLabel="Technology stack"
          />
        </div>
      </div>
    </>
  );
}
