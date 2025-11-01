"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPostsKomite } from "@/data/blogPostsKomite";
import BlogList from "@/components/BlogList";
import BlogDetail from "@/components/BlogDetail";

export default function Page() {
  const [selectedPost, setSelectedPost] = useState<(typeof blogPostsKomite)[0] | null>(null);

  return (
    <>
      <Header />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Berita Komite</h1>

        {selectedPost ? (
          <BlogDetail post={selectedPost} onBack={() => setSelectedPost(null)} />
        ) : (
          <BlogList onSelectPost={setSelectedPost} blogPosts={blogPostsKomite} />
        )}
      </main>
      <Footer />
    </>
  );
}