// src/blogs/BlogPost.jsx
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
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
      <section className="min-h-screen flex items-center justify-center text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="text-center z-10">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Post not found
          </h1>
          <p className="text-slate-400 mb-8">The article you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <ArrowLeft size={18} /> Back to Insights
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="relative min-h-screen py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Breadcrumb / Back */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </Link>

          {/* Header */}
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-6">
              <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400">
                {post.category}
              </span>
              <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
              <span className="flex items-center gap-1"><Clock size={14} /> {post.read}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-slate-400 mb-8">
              {post.title}
            </h1>

            <div className="flex gap-2 flex-wrap">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-1 px-3 py-1 text-xs text-slate-300 border border-white/10 rounded-md bg-white/5"
                >
                  <Tag size={10} /> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
            <img
              src={getBlogImage(post)}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-slate-300 prose-a:text-purple-400 hover:prose-a:text-purple-300 prose-strong:text-white">
            {post.content?.map((block, i) => {
              if (block.type === "p")
                return <p key={i} className="leading-relaxed">{block.text}</p>;
              if (block.type === "h3")
                return <h3 key={i} className="text-2xl font-bold mt-12 mb-6 text-purple-100">{block.text}</h3>;
              if (block.type === "ul")
                return (
                  <ul key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 my-8 space-y-2">
                    {block.items.map((li, j) => (
                      <li key={j} className="text-slate-300">{li}</li>
                    ))}
                  </ul>
                );
              return null;
            })}
          </div>

          {/* Footer Navigation */}
          <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
            <Link
              to="/blog"
              className="text-slate-400 hover:text-white transition-colors"
            >
              ← View all articles
            </Link>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
