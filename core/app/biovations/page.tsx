"use client";
import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import currents from "../biovations/currents.mdx";
import BlogList from "@/components/BlogList";
import BlogDetail from "@/components/BlogDetail";

const blogPosts = [
  {
    id: "currents",
    title: "Currents of Change",
    date: "01 Desember 2024",
    excerpt: "A Journey Through Sound, Self, and Pop Culture",
    image:
      "https://payload.cargocollective.com/1/4/158872/9666476/currents-gatefold-outside_1340_c.jpg",
    tags: ["example", "biovations"],
    content: currents,
  },
];

export default function page() {
  const [selectedPost, setSelectedPost] = useState<
    (typeof blogPosts)[0] | null
  >(null);

  return (
    <>
      <Header />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Biovations</h1>

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