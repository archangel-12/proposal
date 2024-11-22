"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import headerLogo from "../../public/cropped-HeaderLogo.png";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  tags: string[];
  slug: string;
}

const blogPosts: BlogPost[] = [
  {

    title: "Kunjungan Dharmawanita ke Pabrik Fiesta",
    date: "30 April 2024",
    excerpt:
      "Kunjungan Dharmawanita SMAN 17 Surabaya ke Pabrik Fiesta di Ngoro, Kabupaten Mojokerto memberikan wawasan baru tentang proses produksi makanan...",
    image: "/hiya.jpeg",
    tags: ["kegiatan", "dharmawanita", "kunjungan"],
    slug: "kunjungan-dharmawanita-fiesta",
  },
  {

    title: "Tim Voli Putri Raih Juara 2 Tingkat Kota",
    date: "28 April 2024",
    excerpt:
      "Tim voli putri SMAN 17 Surabaya berhasil meraih prestasi membanggakan dengan menjadi runner-up dalam kompetisi tingkat kota...",
    image: "/lmao.png",
    tags: ["olahraga", "prestasi", "voli"],
    slug: "tim-voli-juara-2",
  },
  // Add more blog posts as needed
];

export default function StrukturOrganisasi() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100">
      {/* Header */}
      <header
        className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-1" : "py-1"
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex justify-between items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src={headerLogo}
                alt="SMAN 17 SURABAYA"
                width={150}
                height={40}
                className={`transition-all duration-300 ${
                  isScrolled ? "h-12" : "h-16"
                } w-fit`}
                priority
              />
            </Link>
            <div className="ml-auto">
              <ul className="flex items-center space-x-6">
                <li>
                  <Link href="/" className="text-gray-700 hover:text-blue-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link
                    href="/strukturOrganisasi"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    Struktur Organisasi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/academics"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    Agenda Sekolah
                  </Link>
                </li>
                <li>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfwyfDk9qmKQCleFVsvsC-77Ps9ZnrxhoxD3qSNWH45_8ZmeQ/viewform?usp=sf_link"
                    className="text-gray-700 hover:text-blue-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tamu
                  </a>
                </li>
                <li>
                  <Link
                    href="/admissions"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    Prestasi Siswa
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admissions"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    Aplikasi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Rekap & Kegiatan Sekolah
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.image}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <Card className="group overflow-hidden bg-transparent hover:shadow-xl transition-shadow duration-300">
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
              </Link>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">
                <Image
                  src={headerLogo}
                  alt="SMAN 17 SURABAYA"
                  width={150}
                  height={40}
                  className="h-15 w-auto"
                />
              </h3>
              <p className="text-sm">
                {" "}
                Jl. Rungkut Asri Tengah, Rungkut Kidul
                <br />
                Surabaya, Jawa Timur 60293
              </p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <p className="text-sm">Email: info@sman17sby.sch.id</p>
              <p className="text-sm">Phone: (031) 8700717</p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Academics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Admissions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4">
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/smantass/"
                  className="text-white hover:text-blue-400"
                >
                  <FaFacebookF className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/smansby17/"
                  className="text-white hover:text-blue-400"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com/IASmantass"
                  className="text-white hover:text-blue-400"
                >
                  <FaXTwitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; 2024 SMAN 17 SURABAYA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}