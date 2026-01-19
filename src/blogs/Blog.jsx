// src/blogs/Blog.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Tag } from "lucide-react";
import { BLOGS, getBlogImage } from "./BlogData";

export default function Blog() {
  const featuredPost = BLOGS[0];
  const regularPosts = BLOGS.slice(1);

  return (
    <section className="relative py-24 min-h-screen overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-6"
          >
            Insights & Intelligence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Exploring the frontiers of Agentic AI, Enterprise Automation, and the future of intelligent infrastructure.
          </motion.p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-20"
          >
            <Link to={`/blog/${featuredPost.slug}`} className="group relative block">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative grid md:grid-cols-2 gap-8 p-6 md:p-8 rounded-3xl bg-slate-900/50 border border-white/10 backdrop-blur-xl hover:border-purple-500/30 transition-all duration-300">
                <div className="aspect-[16/9] md:aspect-auto overflow-hidden rounded-2xl">
                  <img
                    src={getBlogImage(featuredPost)}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-sm text-purple-400 mb-4">
                    <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                      Featured
                    </span>
                    <span className="text-slate-400">{featuredPost.date}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-400 text-lg mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-white font-medium group-hover:translate-x-2 transition-transform">
                    Read Article <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-purple-500/30 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)] transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={getBlogImage(post)}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <span className="px-2 py-1 text-xs font-medium bg-black/50 backdrop-blur-md rounded-lg text-white border border-white/10">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.read}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {post.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-[10px] text-slate-300 border border-white/10 rounded-md bg-white/5"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
