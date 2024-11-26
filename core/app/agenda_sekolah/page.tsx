"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import headerLogo from "../../public/cropped-HeaderLogo.png";
import MLPLS2024 from "../agenda_sekolah/MPLS-2024-smantass.mdx";
import muharram2024 from "../agenda_sekolah/muharram-2024.mdx";
import p5 from "../agenda_sekolah/p5.mdx";
import p5November from "../agenda_sekolah/p5-november.mdx";
import blood from "../agenda_sekolah/gedor.mdx";
import SKI from "../agenda_sekolah/aksi-6.mdx";

const blogPosts = [
  {
    id: "MPLS-2024-smantass",
    title: "Kegiatan MPLS 2024 di SMAN 17 Surabaya",
    date: "18 Juli 2024",
    excerpt:
      "Masa Pengenalan Lingkungan Sekolah (MPLS) di SMA Negeri 17 Surabaya untuk tahun ajaran 2024/2025 merupakan momentum yang sangat dinanti bagi seluruh peserta didik baru...",
    image: "/mpls.jpeg",
    tags: ["mpls", "smantass", "orientasi"],
    content: MLPLS2024,
  },
  {
    id: "Muharram 2024",
    title: "Peringatan tahun baru Islam 1 Muharram 1446 H di SMAN 17 Surabaya",
    date: "26 Juli 2024",
    excerpt:
      "Tahun Baru Islam atau 1 Muharram menjadi momen penting bagi umat Islam untuk merayakan kesempatan baru sekaligus merenungkan arti hijrah...",
    image: "/muharram_1.jpeg",
    tags: ["perayaan", "muharram", "hari suci"],
    content: muharram2024,
  },
  {
    id: "p5",
    title: "Proyek penguatan profil pelajar Pancasila di SMAN 17 Surabaya",
    date: "09 September 2024",
    excerpt:
      "Projek Penguatan Profil Pelajar Pancasila (P5) adalah inisiatif yang bertujuan untuk menggali, memahami, dan menerapkan nilai-nilai Pancasila dalam kehidupan sehari-hari para pelajar...",
    image: "/p5_1.jpeg",
    tags: ["p5", "kreativitas", "tanpa batas"],
    content: p5,
  },
  {
    id: "p5-ronde-2",
    title:
      "Proyek penguatan profil pelajar Pancasila di SMAN 17 Surabaya Ronde 2",
    date: "03 November 2024",
    excerpt:
      "Projek Penguatan Profil Pelajar Pancasila (P5) adalah inisiatif yang bertujuan untuk menggali, memahami, dan menerapkan nilai-nilai Pancasila dalam kehidupan sehari-hari para pelajar...",
    image: "/p5-1_2.jpeg",
    tags: ["p5", "kreativitas", "tanpa batas"],
    content: p5November,
  },
  {
    id: "donor-darah",
    title: "✨ GEDOR 2K24 – Gerakan Donor Darah PMR SMAN 17 Surabaya ✨",
    date: "19 September 2024",
    excerpt: "informasi seputar donor darah bisa dibaca di post berikut...",
    image: "/gedor_1.png",
    tags: [
      "sharing is caring",
      "pmr",
      "SaveLives",
      "GEDOR2K24",
      "#PMRSMAN17Surabaya",
    ],
    content: blood,
  },
  {
    id: "aksi-6",
    title: "Kegiatan SKI-SMAN 17 Surabaya",
    date: "12 Oktober 2024",
    excerpt:
      "Kegiatan AKSI (Apresiasi Kreatif dan Seni Islam) yang di selenggarakan oleh SKI SMAN 17 Surabaya...",
    image: "/aksi_6.jpeg",
    tags: ["tahfid", "banjari", "kaligrafi"],
    content: SKI,
  },
];

export default function BlogPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isBlogOpen, setBlogOpen] = useState(false);
  const BlogRef = useRef<HTMLDivElement>(null);
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
        <h1 className="text-4xl font-bold text-center mb-12">Agenda Sekolah</h1>

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