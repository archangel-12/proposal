"use client";
import Image from "next/image";
import type { BlogPost } from "@/types/blog";

export default function BlogDetail({
  post,
  onBack,
}: {
  post: BlogPost;
  onBack: () => void;
}) {
  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
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
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="p-6 md:p-8">
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {post.title}
            </h1>
            <p className="text-gray-600 mb-4">{post.date}</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
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
            <post.content />
          </div>
        </div>
      </article>
    </div>
  );
}