"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import headerLogo from "../../public/cropped-HeaderLogo.png";
import p5 from "../berita_kurikulum/p5.mdx";
import Apple from "../berita_kurikulum/apel-pembukaan.mdx";
import SAS from "../berita_kurikulum/sas.mdx";
import PAT from "../berita_kurikulum/pat.mdx";
import ANBK from "../berita_kurikulum/anbk.mdx";
import ASA from "../berita_kurikulum/asa.mdx";
import SLB from "../berita_kurikulum/slb.mdx";
import hidrponik from "../berita_kurikulum/hidroponik.mdx";
import pleno from "../berita_kurikulum/pleno.mdx";
import WIROSABLENG from "../berita_kurikulum/p5-closing.mdx";
import osn from "../berita_kurikulum/osn.mdx";
import usp from "../berita_kurikulum/usp-bks.mdx";
import uprak from "../berita_kurikulum/uprak.mdx";
import Verification from "../berita_kurikulum/verifikasi.mdx";

const blogPosts = [
  {
    id: "p-5-smantass",
    title: "Proyek Penguatan Profil Pelajar Pancasila 2024 SMAN 17 Surabaya",
    date: "13 Juli 2024",
    excerpt:
      "Terbaik Pertama hasil karya P5 mengenai Kesetaraan Gender dengan tema Suara Demokrasi dengan tim personil nya di kelas XI- 8, yang terdiri dari:...",
    image: "/apel-p5.jpeg",
    tags: ["p5", "smantass"],
    content: p5,
  },
  {
    id: "apel-p5",
    title: "Apel pembukaan P5",
    date: "27 Mei 2024",
    excerpt: "Selengkapnya...",
    image: "/apel-p5.jpeg",
    tags: ["p5", "smantass"],
    content: Apple,
  },
  {
    id: "sas-ii-bks",
    title: "SAS II-BKS",
    date: "23 Mei 2024",
    excerpt: "Selengkapnya...",
    image: "/sks.jpeg",
    tags: ["sas", "smantass"],
    content: SAS,
  },
  {
    id: "pat-sat-bks",
    title: "PAT-SAT BKS",
    date: "29 April 2024",
    excerpt: "Selengkapnya...",
    image: "/sat-sks.jpg",
    tags: ["pat", "sat"],
    content: PAT,
  },
  {
    id: "akbn",
    title: "Asesmen Nasional Berbasis Komputer",
    date: "28 Agustus 2023",
    excerpt: "Selengkapnya...",
    image: "/sat-sks-2.jpeg",
    tags: ["akbn", "smantass"],
    content: ANBK,
  },
  {
    id: "asa",
    title: "Asesmen Non-Akademik",
    date: "27 September 2023",
    excerpt: "Selengkapnya...",
    image: "/sat-sks-3.jpeg",
    tags: ["asa", "smantass"],
    content: ASA,
  },
  {
    id: "survei-lingkungan-belajar",
    title: "Survei Lingkungan Belajar",
    date: "11 September 2023",
    excerpt: "Selengkapnya...",
    image: "/sat-4.jpg",
    tags: ["survei", "smantass"],
    content: SLB,
  },
  {
    id: "hidroponik",
    title: "Pemanfaatan Hidroponik",
    date: "15 Mei 2023",
    excerpt: "Selengkapnya...",
    image: "/hidroponik.jpeg",
    tags: ["hidroponik", "smantass"],
    content: hidrponik,
  },
  {
    id: "rapat-pleno",
    title: "Rapat Pleno Kelulusan Peserta didik tahun Akademik 2023/2024",
    date: "23 Mei 2024",
    excerpt: "Selengkapnya...",
    image: "/rapat_pleno.jpeg",
    tags: ["rapat", "pleno"],
    content: pleno,
  },
  {
    id: "pembukaan-p5",
    title: "P5 ronde 2",
    date: "4 November 2024",
    excerpt: "Selengkapnya...",
    image: "/penutupan_p5.jpg",
    tags: ["p5", "smantass"],
    content: WIROSABLENG,
  },
  {
    id: "o-s-n",
    title:
      "Membidik Siswa Smantass untuk meroket pada ajang Olimpiade Nasional Nasional",
    date: "23 Febuari 2024",
    excerpt: "Selengkapnya...",
    image: "/osn.jpeg",
    tags: ["osn", "smantass"],
    content: osn,
  },
  {
    id: "usp-bks",
    title: "USP-BKS",
    date: "17 Febuari 2023",
    excerpt: "Selengkapnya...",
    image: "/usp-bks.jpeg",
    tags: ["usp", "smantass"],
    content: usp,
  },
  {
    id: "uprak-xii",
    title: "UPRAK kelas XII",
    date: "6 Febuari 2023",
    excerpt: "Selengkapnya...",
    image: "/uprak_xii.jpeg",
    tags: ["uprak", "smantass"],
    content: uprak,
  },
  {
    id: "verifikasi-kelulusan",
    title: "Verifikasi Kelulusan",
    date: "5 Mei 2023",
    excerpt: "Selengkapnya...",
    image: "/verification.jpeg",
    tags: ["verifikasi", "smantass"],
    content: Verification,
  },
];

export default function BlogPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBlogOpen, setBlogOpen] = useState(false);
  const BlogRef = useRef<HTMLDivElement>(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isTentangKamiOpen, setTentangKamiOpen] = useState(false);
  const TentangKamiRef = useRef<HTMLDivElement>(null);
  const [isAplikasiOpen, setIsAplikasiOpen] = useState(false);
  const aplikasiRef = useRef<HTMLDivElement>(null);
  const [isPrestasiOpen, setIsPrestasiOpen] = useState(false);
  const prestasiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        aplikasiRef.current &&
        !aplikasiRef.current.contains(event.target as Node)
      ) {
        setIsAplikasiOpen(false);
      }
      if (
        prestasiRef.current &&
        !prestasiRef.current.contains(event.target as Node)
      ) {
        setIsPrestasiOpen(false);
      }
      if (
        TentangKamiRef.current &&
        !TentangKamiRef.current.contains(event.target as Node)
      ) {
        setTentangKamiOpen(false);
      }
      if (BlogRef.current && !BlogRef.current.contains(event.target as Node)) {
        setBlogOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const BlogItems = [
    {
      name: "Berita Kurikulum",
      href: "/berita_kurikulum",
    },
    {
      name: "Berita Kesiswaan",
      href: "/berita_kesiswaan",
    },
    {
      name: "Berita Kehumasan",
      href: "/berita_kehumasan",
    },
    {
      name: "Komite",
      href: "/komite",
    },
  ];

  const TentangKamiItems = [
    {
      name: "Sejarah Pendirian Sekolah",
      href: "/sejarah",
    },
    {
      name: "Guru & Tenaga Kependidikan",
      href: "/gtk",
    },
  ];

  const aplikasiItems = [
    {
      name: "Info GTK",
      href: "https://info.gtk.kemdikbud.go.id/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      name: "Dapodik",
      href: "http://dapodik.sman17sby.sch.id/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      name: "Erapor KM",
      href: "/erapor-km",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      name: "Erapor",
      href: "http://eraporkm.sman17sby.sch.id/login",
      target: "_blank",
      rel: "noopener nonreferrer",
    },
    {
      name: "Quick Edu",
      href: "/quick-edu",
      target: "_blank",
      rel: "noopener nonreferrer",
    },
  ];

  const prestasiItems = [
    {
      name: "Input Prestasi Siswa",
      href: "https://docs.google.com/forms/d/e/1FAIpQLScD-xvJtGLx2XiR0oeiDlBwtXTGlZXJ9mxqyxQpV80fhgZqXA/viewform",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      name: "Lulusan SNBP tahun 2024",
      href: "/snbp",
    },
    {
      name: "Prestasi Akademik",
      href: "/akademik",
    },
    {
      name: "Prestasi Non-Akademik",
      href: "/non_akademik",
    },
    {
      name: "BIOVATIONS",
      href: "/biovations",
    },
  ];

  const handleBlogClick = () => {
    setBlogOpen(!isBlogOpen);
  };

  const handleTentangKamiClick = () => {
    setTentangKamiOpen(!isTentangKamiOpen);
  };

  const handleAplikasiClick = () => {
    setIsAplikasiOpen(!isAplikasiOpen);
  };

  const handlePrestasiClick = () => {
    setIsPrestasiOpen(!isPrestasiOpen);
  };

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
                <div ref={TentangKamiRef} className="relative">
                  <button
                    onClick={handleTentangKamiClick}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center"
                    aria-haspopup="true"
                    aria-expanded={isTentangKamiOpen}
                  >
                    Tentang Kami
                    <motion.div
                      animate={{ rotate: isTentangKamiOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isTentangKamiOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                      >
                        {TentangKamiItems.map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                          >
                            <Link
                              href={item.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                            >
                              {item.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
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
                    href="/agenda_sekolah"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    Agenda Sekolah
                  </Link>
                </li>
                <div ref={BlogRef} className="relative">
                  <button
                    onClick={handleBlogClick}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center"
                    aria-haspopup="true"
                    aria-expanded={isBlogOpen}
                  >
                    Blog
                    <motion.div
                      animate={{ rotate: isBlogOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isBlogOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                      >
                        {BlogItems.map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                          >
                            <Link
                              href={item.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                            >
                              {item.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
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
                <div ref={prestasiRef} className="relative">
                  <button
                    onClick={handlePrestasiClick}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center"
                    aria-haspopup="true"
                    aria-expanded={isPrestasiOpen}
                  >
                    Prestasi Siswa
                    <motion.div
                      animate={{ rotate: isPrestasiOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isPrestasiOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                      >
                        {prestasiItems.map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                          >
                            <Link
                              href={item.href}
                              target={item.target}
                              rel={item.rel}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                            >
                              {item.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div ref={aplikasiRef} className="relative">
                  <button
                    onClick={handleAplikasiClick}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center"
                    aria-haspopup="true"
                    aria-expanded={isAplikasiOpen}
                  >
                    Aplikasi
                    <motion.div
                      animate={{ rotate: isAplikasiOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isAplikasiOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                      >
                        {aplikasiItems.map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                          >
                            <Link
                              href={item.href}
                              target={item.target}
                              rel={item.rel}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                            >
                              {item.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ul>
            </div>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
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
              <h3 className="text-lg font-semibold mb-2">Hubungi kami:</h3>
              <p className="text-sm">Email: smantass@ymail.com</p>
              <p className="text-sm">Phone: (031) 8700717</p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Link Altenatif</h3>
              <ul className="text-sm">
                <li>
                  <a href="/tentangKami" className="hover:text-blue-400">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="/akademik" className="hover:text-blue-400">
                    Prestasi Akademik
                  </a>
                </li>
                <li>
                  <a href="/gtk" className="hover:text-blue-400">
                    Guru & Tenaga Kependidikan
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4">
              <h3 className="text-lg font-semibold mb-2">
                Ikuti Media Sosial Kami
              </h3>
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
            <p>&copy; 2024 SMAN 17 SURABAYA. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}