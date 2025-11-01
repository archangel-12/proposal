"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import type { BlogPost } from "@/types/blog";

export default function BlogList({
  blogPosts,
  onSelectPost,
}: {
  blogPosts: BlogPost[];
  onSelectPost: (post: BlogPost) => void;
}) {
  return (
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
            onClick={() => onSelectPost(post)}
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
                <p className="text-gray-100 line-clamp-3">{post.excerpt}</p>
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
  );
}