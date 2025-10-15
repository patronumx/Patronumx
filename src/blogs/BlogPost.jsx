// src/blogs/BlogPost.jsx
import React, { useMemo } from "react";
import { getBlogBySlug, getBlogImage } from "./BlogData";

export default function BlogPost({ slug }) {
  const normalizedSlug = useMemo(() => {
    if (slug) return slug;
    if (typeof window !== "undefined")
      return window.location.pathname.replace(/^\/?blog\/?/i, "");
    return "";
  }, [slug]);

  const post = getBlogBySlug(normalizedSlug);

  if (!post) {
    return (
      <section className="py-24 text-center text-white">
        <h1 className="text-3xl font-bold mb-2">Post not found</h1>
        <p className="text-gray-400">
          The article doesn’t exist.{" "}
          <a href="/blog" className="underline text-amber-300">
            Back to all posts
          </a>
        </p>
      </section>
    );
  }

  return (
    <article className="text-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-2xl mb-8 shadow-2xl">
          <img
            src={getBlogImage(post)}
            alt={post.title}
            className="w-full h-[420px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <header className="mb-6">
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-300 mb-2">
            <span className="bg-white/10 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.read}</span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex gap-2 flex-wrap">
            {post.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs border border-white/10 rounded-full bg-white/5"
              >
                {t}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-invert max-w-none mt-8">
          {post.content?.map((block, i) => {
            if (block.type === "p") return <p key={i}>{block.text}</p>;
            if (block.type === "h3") return <h3 key={i}>{block.text}</h3>;
            if (block.type === "ul")
              return (
                <ul key={i}>
                  {block.items.map((li, j) => (
                    <li key={j}>{li}</li>
                  ))}
                </ul>
              );
            return null;
          })}
        </div>

        <div className="mt-10">
          <a
            href="/blog"
            className="inline-block text-amber-300 hover:text-amber-200 transition-colors"
          >
            ← Back to all posts
          </a>
        </div>
      </div>
    </article>
  );
}
