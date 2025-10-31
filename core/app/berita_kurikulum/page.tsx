"use client";
import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts2";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function page() {
  const [selectedPost, setSelectedPost] = useState<
    (typeof blogPosts)[0] | null
  >(null);

  return (
    <>
      <Header />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">
          Berita Kurikulum
        </h1>

        {selectedPost ? (
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedPost(null)}
              className="mb-6 text-blue-600 hover:text-blue-800 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Kembali ke Daftar Blog
            </button>
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-[400px] md:h-[500px] w-full">
                <Image
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {selectedPost.title}
                  </h1>
                  <p className="text-gray-600 mb-4">{selectedPost.date}</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-img:rounded-lg prose-hr:border-gray-200">
                  <selectedPost.content />
                </div>
              </div>
            </article>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  className="group overflow-hidden bg-transparent hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="relative h-[300px] w-full">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 z-10" />
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                      <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-300 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-sm text-gray-200 mb-4">{post.date}</p>
                      <p className="text-gray-100 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex gap-2 mt-4">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-blue-600/80 px-2 py-1 rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}