"use client";
import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts2";
import BlogList from "@/components/BlogList";
import BlogDetail from "@/components/BlogDetail";
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
          <BlogDetail
            post={selectedPost}
            onBack={() => setSelectedPost(null)}
          />
        ) : (
          <BlogList blogPosts={blogPosts} onSelectPost={setSelectedPost} />
        )}
      </main>
      <Footer />
    </>
  );
}