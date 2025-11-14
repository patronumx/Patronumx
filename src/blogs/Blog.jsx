// src/blogs/Blog.jsx
import React from "react";
import { Link } from "react-router-dom";
import { BLOGS, getBlogImage } from "./BlogData";

export default function Blog() {
  return (
    <section className="py-20 text-white bg-transparent relative">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-center font-semibold text-3xl sm:text-5xl mb-12">
          Insights & Stories
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS.map((post) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-2xl"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={getBlogImage(post)}
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-5">
                <div className="flex justify-between items-center text-xs text-gray-300 mb-2">
                  <span className="uppercase tracking-widest text-amber-300">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                </div>

                <h2 className="font-semibold text-lg mb-2 group-hover:text-amber-300 transition-colors">
                  {post.title}
                </h2>

                <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-4 flex justify-between items-center">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-[10px] border border-white/10 rounded-full bg-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-400">{post.read}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
