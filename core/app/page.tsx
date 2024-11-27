/*Ini adalah kode sumber untuk halaman depan proposal laman sekolah*/
/*Mungkin ada yang berandai-andai kenapa saya memakai simbol bintang dan garis miring. Karena, saya tidak ingin tulisan ini dideteksi oleh compiler TypeScript*/
/*Jika panjenengan semua membaca apa yang sudah tertulis di README.md, TypeScript adalah bahasa yang paling banyak saya pakai selama membuat proposal laman sekolah*/
/*TypeScript sendiri memiliki reputasi sebagai bahasa yang sangat ketat dalam mendeteksi kode yang ditulis oleh seorang software engineer*/
/*Jika kita menghitung berapa jumlah baris kode, termasuk dengan beberapa baris yang kosong, maka ada sekitar 1303 baris kode*/
/*Saya harus mengakui, proyek ini adalah yang paling besar dalam hal sekedar hobi*/

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Loading from "./loading";
import { FileText, Users, Lightbulb, ChevronDown, Menu, X } from "lucide-react";
import headerLogo from "../public/cropped-HeaderLogo.png";
import factoryVisit from "../public/hiya.jpeg";
import Voley from "../public/lmao.png";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import Infinity from "../components/infinite-scroll-section";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBlogOpen, setBlogOpen] = useState(false);
  const BlogRef = useRef<HTMLDivElement>(null);
  const [isTentangKamiOpen, setTentangKamiOpen] = useState(false);
  const TentangKamiRef = useRef<HTMLDivElement>(null);
  const [isAplikasiOpen, setIsAplikasiOpen] = useState(false);
  const aplikasiRef = useRef<HTMLDivElement>(null);
  const [isPrestasiOpen, setIsPrestasiOpen] = useState(false);
  const prestasiRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
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
      clearTimeout(timer);
    };
  }, []);

  const heroImages = [
    "/collection/122_DSC_2852-2048x1360.jpg",
    "/collection/new stuff.jpeg",
    "/collection/152_DSC_3019-2048x1360.jpg",
    "/collection/167_DSC_3063-2048x1360.jpg",
    "/collection/172_DSC_2690-2048x1360.jpg",
    "/collection/192_IMG_8842-2048x1365.jpg",
    "/collection/187_IMG_9014-2048x1365.jpg",
    "/collection/207_IMG_9272-2048x1365.jpg",
    "/collection/262_DSCF0545-2048x1365.jpg",
    "/collection/272_DSCF0653-2048x1365.jpg",
    "/collection/282_DSCF0738-2048x1365.jpg",
    "/collection/262_DSCF0545-2048x1365.jpg",
  ];

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

  const handleTentangKamiClick = () => {
    setTentangKamiOpen(!isTentangKamiOpen);
  };

  const handleBlogClick = () => {
    setBlogOpen(!isBlogOpen);
  };

  const handleAplikasiClick = () => {
    setIsAplikasiOpen(!isAplikasiOpen);
  };

  const handlePrestasiClick = () => {
    setIsPrestasiOpen(!isPrestasiOpen);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100">
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
            <button
              className="md:hidden text-gray-700 hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </ul>
        </nav>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white shadow-lg"
            >
              <div className="py-4 px-6 space-y-4">
                <Link
                  href="/"
                  className="block text-gray-700 hover:text-blue-600"
                >
                  Home
                </Link>
                <div className="relative">
                  <button
                    onClick={handleTentangKamiClick}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center w-full justify-between"
                    aria-haspopup="true"
                    aria-expanded={isTentangKamiOpen}
                  >
                    Tentang Kami
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <AnimatePresence>
                    {isTentangKamiOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 space-y-2 pl-4"
                      >
                        {TentangKamiItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block text-sm text-gray-700 hover:text-blue-600"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <Link
                  href="/strukturOrganisasi"
                  className="block text-gray-700 hover:text-blue-600"
                >
                  Struktur Organisasi
                </Link>
                <Link
                  href="/agenda_sekolah"
                  className="block text-gray-700 hover:text-blue-600"
                >
                  Agenda Sekolah
                </Link>
                {/* Blog dropdown */}
                <div ref={BlogRef} className="relative">
                  <button
                    onClick={handleBlogClick}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center w-full justify-between"
                    aria-haspopup="true"
                    aria-expanded={isBlogOpen}
                  >
                    Blog
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <AnimatePresence>
                    {isBlogOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 space-y-2 pl-4"
                      >
                        {BlogItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block text-sm text-gray-700 hover:text-blue-600"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfwyfDk9qmKQCleFVsvsC-77Ps9ZnrxhoxD3qSNWH45_8ZmeQ/viewform?usp=sf_link"
                  className="block text-gray-700 hover:text-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tamu
                </Link>
                {/* Prestasi Siswa dropdown */}
                <div ref={prestasiRef} className="relative">
                  <button
                    onClick={handlePrestasiClick}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center w-full justify-between"
                    aria-haspopup="true"
                    aria-expanded={isPrestasiOpen}
                  >
                    Prestasi Siswa
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <AnimatePresence>
                    {isPrestasiOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 space-y-2 pl-4"
                      >
                        {prestasiItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            target={item.target}
                            rel={item.rel}
                            className="block text-sm text-gray-700 hover:text-blue-600"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                {/* Aplikasi dropdown */}
                <div ref={aplikasiRef} className="relative">
                  <button
                    onClick={handleAplikasiClick}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center w-full justify-between"
                    aria-haspopup="true"
                    aria-expanded={isAplikasiOpen}
                  >
                    Aplikasi
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <AnimatePresence>
                    {isAplikasiOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 space-y-2 pl-4"
                      >
                        {aplikasiItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            target={item.target}
                            rel={item.rel}
                            className="block text-sm text-gray-700 hover:text-blue-600"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section className="hero relative h-[600px] flex items-center justify-center overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image
                src={heroImages[currentImageIndex]}
                alt={`School campus ${currentImageIndex + 1}`}
                fill
                sizes="100vw"
                priority
                quality={100}
                style={{ objectFit: "cover" }}
                className="absolute z-0"
              />
            </motion.div>
          </AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 text-center text-white"
          >
            <h1 className="text-5xl font-medium mb-4 drop-shadow-lg">
              Selamat datang di laman resmi SMA Negeri 17 Surabaya
            </h1>
            <p className="text-xl mb-8 drop-shadow-md">
              Untuk Bangsa, dan Negaraku
            </p>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link
                href="https://ppdbjatim.net/"
                target="__blank"
                rel="noopener nonreferrer"
              >
                Informasi PPDB
              </Link>
            </Button>
          </motion.div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {[
            {
              title: "INOVATIF",
              icon: FileText,
              description:
                "Di era digital sekarang ini guru harus bisa mengimbangi dan melangkah maju untuk mengikuti perkembangan pendidikan untuk meningkatkan keprofesionalan dalam mengajar sehingga lebih menarik dan mampu berinovatif",
              color: "from-blue-900 to-blue-10",
              name: "INARNI, S.PD",
              image:
                "https://i.pinimg.com/originals/62/8b/e9/628be9123fd21fddf512814d3e36da7c.gif",
            },
            {
              title: "MANDIRI",
              icon: Users,
              description:
                "Manusia hebat adalah mereka yang mampu memotivasi dirinya sendiri tanpa harus diminta atau dipaksa orang lain. Berinisiatif sendiri dan berbuat baik menjadikan manusia kuat dan mandiri",
              color: "from-blue-700 to-blue-10",
              name: "TOTOK SUDARTO, S.PD",
              image:
                "https://i.pinimg.com/originals/64/a9/19/64a9196a102faf69e4ff8284cb3996ca.gif",
            },
            {
              title: "KREATIF",
              icon: Lightbulb,
              description:
                "Pembelajaran yang disesuaikan dengan kondisi fisik pada jam tersebut dengan selingan humor dan tidak mengurangi isi materi",
              color: "from-blue-900 to-blue-10",
              name: "DRS. TEGUH JUANA, M.SI",
              image:
                "https://i.pinimg.com/originals/60/03/0e/60030eb651d4f7965b67dceab21484b7.gif",
            },
          ].map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-[300px]"
            >
              <Image
                src={pillar.image}
                alt={pillar.title}
                layout="fill"
                objectFit="cover"
                className="absolute z-0"
              />
              <div className="relative z-20 p-6 flex flex-col text-justify h-full text-white">
                <div>
                  <div className="flex items-center mb-4">
                    <pillar.icon className="w-8 h-8 mr-2" />
                    <h3 className="text-2xl font-bold">{pillar.title}</h3>
                  </div>
                  <p>{pillar.description}</p>
                </div>
                <div className="mt-auto">
                  <span className="text-md font-semibold px-3 py-1 bg-white text-blue-600 rounded">
                    {pillar.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <main className="container mx-auto px-6 py-12">
          <div className="flex gap-12">
            <div className="w-1/2 flex items-center justify-center">
              <Image
                src="https://asset.kompas.com/crops/bVzqiC1Fk6lbCaIDX4MXnyepvzY=/16x0:787x514/1200x800/data/photo/2018/03/16/69007999.jpg" // Replace with actual principal image
                alt="anggap aja contoh"
                width={600}
                height={800}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <motion.div
              className="w-1/2 space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold">
                <span className="text-gray-800">Selamat Pagi</span>{" "}
                <span className="text-orange-500">semuanya!</span>{" "}
              </h1>

              <h2 className="text-2xl text-gray-700">
                Kita memilih untuk pergi ke Bulan!
              </h2>

              <div className="prose prose-lg text-justify">
                <p>
                  Jika catatan sejarah perjalanan kemajuan kita mengajarkan
                  sesuatu, itu adalah bahwa manusia, dalam pencariannya akan
                  pengetahuan dan kemajuan, memiliki tekad yang tak tergoyahkan.
                  Eksplorasi luar angkasa akan terus berlanjut, entah kita
                  berpartisipasi atau tidak, dan ini adalah salah satu
                  petualangan terbesar sepanjang masa. Tidak ada bangsa yang
                  berharap menjadi pemimpin bagi bangsa lain yang bisa
                  mengharapkan tertinggal dalam perlombaan menuju luar angkasa.
                </p>

                <p>
                  Mereka yang datang sebelum kita memastikan bahwa negara ini
                  menunggangi gelombang pertama revolusi industri, gelombang
                  pertama penemuan modern, dan gelombang pertama kekuatan
                  nuklir. Generasi ini tidak berniat terombang-ambing di
                  gelombang belakang era luar angkasa yang akan datang. Kita
                  bermaksud menjadi bagian darinya, kita bermaksud memimpinnya.
                  Karena mata dunia kini tertuju ke luar angkasa, ke bulan, dan
                  ke planet-planet di luar sana, dan kita telah bersumpah bahwa
                  kita tidak akan membiarkan wilayah itu diperintah oleh bendera
                  permusuhan dan penaklukan, tetapi oleh panji kebebasan dan
                  perdamaian. Kita telah bersumpah bahwa kita tidak akan
                  membiarkan luar angkasa dipenuhi dengan senjata pemusnah
                  massal, tetapi dengan instrumen pengetahuan dan pemahaman.
                </p>

                <p className="italic">
                  Kita memilih untuk pergi ke bulan. Kita memilih untuk pergi ke
                  bulan dalam dekade ini dan melakukan hal-hal lain, bukan
                  karena hal itu mudah, tetapi karena itu sulit. Karena tujuan
                  itu akan menjadi sarana untuk mengorganisasi dan mengukur
                  kemampuan dan energi terbaik kita, karena tantangan itu adalah
                  sesuatu yang bersedia kita terima, sesuatu yang tidak ingin
                  kita tunda, dan sesuatu yang kita berniat untuk menangkan —
                  serta tantangan lainnya juga.
                </p>

                <p>
                  Namun, saya yakin kita akan melakukannya, dan saya percaya
                  bahwa kita harus membayar apa yang diperlukan. Saya tidak
                  berpikir kita seharusnya menyia-nyiakan dana yang ada, tetapi
                  saya percaya kita harus menyelesaikan tugas ini. Dan tugas ini
                  akan diselesaikan pada dekade enam puluhan. Mungkin akan
                  terjadi saat beberapa dari Anda masih di sekolah atau
                  berkuliah. Ini akan selesai selama masa jabatan beberapa orang
                  yang duduk di panggung ini. Tapi ini akan selesai. Dan ini
                  akan selesai sebelum akhir dekade ini.
                </p>

                <p>
                  Nah, luar angkasa ada di sana, dan kita akan menjangkaunya,
                  bulan dan planet-planet ada di sana, dan harapan baru untuk
                  pengetahuan dan perdamaian juga ada di sana. Oleh karena itu,
                  saat kita memulai perjalanan ini, kita memohon berkat Tuhan
                  atas petualangan paling berbahaya, menantang, dan terbesar
                  yang pernah dilakukan umat manusia. Terima kasih
                </p>
              </div>

              <div className="mt-8 inline-block border-2 border-gray-800 px-6 py-2">
                <p className="font-semibold">John Fitzgerald Kennedy</p>
              </div>
            </motion.div>
          </div>

          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-2">
                  DEWAN GURU
                </h2>
                <p className="text-gray-600">
                  Guru & Tenaga Kependidikan Sekolah
                </p>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                  {[
                    {
                      name: "Endang R., M.Pd",
                      role: "Guru Matematika",
                      image: "/teachers/bu endang_matematika.png",
                    },
                    {
                      name: "Drs.Teguh Juana, M.Si",
                      role: "Guru Sejarah",
                      image: "/teachers/Pak Teguh_Sejarah.png",
                    },
                    {
                      name: "Drs. Teguh Harjono, M.Pd",
                      role: "Guru Bahasa Indonesia",
                      image: "/teachers/Pak Jon_bahasa indonesia.png",
                    },
                    {
                      name: "Drs. Hari Purnomo, M.M",
                      role: "Guru Matematika",
                      image: "/teachers/Pak Hari_matematika.png",
                    },
                    {
                      name: "Dra. Sri Harijanti",
                      role: "Guru Bimbingan Konseling",
                      image: "/teachers/Bu Sri_BK.png",
                    },
                    {
                      name: "Inarni, S.Pd",
                      role: "Guru Biologi",
                      image: "/teachers/bu inarni_biologi.png",
                    },
                    {
                      name: "Dwi Untari, S.Pd, M.M",
                      role: "Guru Bahasa Indonesia",
                      image: "/teachers/Bu Dwi_bahasa indonesia.png",
                    },
                    {
                      name: "Chris Wratsari Arditi, M.Pd",
                      role: "Guru Bahasa Indonesia",
                      image: "/teachers/Bu chris_bahasa indonesia.png",
                    },
                    {
                      name: "Drs. Baris Juni Prastono",
                      role: "Guru Geografi",
                      image: "/teachers/Pak Baris_geografi.png",
                    },
                    {
                      name: "Dra. Pipik Maria P, M.M",
                      role: "Guru Kimia",
                      image: "/teachers/Bu Pipik_kimia.png",
                    },
                    {
                      name: "Qurratul 'Aini, M.Pd",
                      role: "Guru Fisika",
                      image: "/teachers/Bu Aini_fisika.png",
                    },
                    {
                      name: "Maria Agustina D.P, S.Pd",
                      role: "Guru Fisika & PKWU",
                      image: "/teachers/bu maria_bahasa inggris.png",
                    },
                    {
                      name: "Kustapa Yuli P, S.Pd",
                      role: "Guru Biologi",
                      image: "/teachers/pak kustapa_biologi.png",
                    },
                    {
                      name: "Suwandi, S.Pd., MM",
                      role: "Guru Matematika",
                      image: "/teachers/pak suwandi_matematika.png",
                    },
                    {
                      name: "Muhammad Rokhim, S.Pd",
                      role: "Guru Bahasa Inggris",
                      image: "/teachers/pak rokhim_bahasa inggris.png",
                    },
                    {
                      name: "L. Eko Wibowo, S.Pd",
                      role: "Guru Fisika",
                      image: "/teachers/pak eko_fisika.png",
                    },
                    {
                      name: "Fifid Suryaning F, M.Pd",
                      role: "Guru Bahasa Inggris",
                      image: "/teachers/bu fifid_bahasa inggris.png",
                    },
                    {
                      name: "Nur Fitriah, S.Pd",
                      role: "Guru Bahasa Inggris",
                      image: "/teachers/bu fitri_bahasa inggris.png",
                    },
                    {
                      name: "Nur Amalia, S.Pd",
                      role: "Guru Matematika",
                      image: "/teachers/bu amalia_matematika.png",
                    },
                    {
                      name: "Rino Hariyono, S.Pd",
                      role: "Guru Penjaskes",
                      image: "/teachers/pak rino_pendidikan olahraga.png",
                    },
                    {
                      name: "Linda Wirianty, S.Pd",
                      role: "Guru Kimia",
                      image: "/teachers/bu linda_kimia.png",
                    },
                    {
                      name: "Akhmad Fauzi, S.Pd",
                      role: "Guru PkN",
                      image: "/teachers/pak fauzi_olahraga.png",
                    },
                    {
                      name: "ELVYN B, S.Sos., M.Pd",
                      role: "Guru Sosiologi",
                      image: "/teachers/bu elvyn_sosiologi.png",
                    },
                    {
                      name: "Ibnu Mashuda, S.Pd",
                      role: "Guru Penjaskes",
                      image: "/teachers/pak ibnu_olahraga.png",
                    },
                    {
                      name: "Anang Didit Soesilo, S.T",
                      role: "Guru PKWU",
                      image: "/teachers/pak anang_cs.png",
                    },
                    {
                      name: "Fauzan Adim, S.E",
                      role: "Guru Ekonomi",
                      image: "/teachers/pak fauzan_ekonomi.png",
                    },
                    {
                      name: "Dimas Dananjaya, S.Pd",
                      role: "Guru Penjaskes",
                      image: "/teachers/pak dimas_olahraga.png",
                    },
                    {
                      name: "Galuh Prakasyta, S.Psi",
                      role: "Guru Bimbingan Konseling",
                      image: "/teachers/bu galuh_bk.png",
                    },
                    {
                      name: "Eka Fidia Ramadhania, S.Pd",
                      role: "Guru Bimbingan Konseling",
                      image: "/teachers/bu eka_bk.png",
                    },
                    {
                      name: "Made Hendra Sasmita, S.Pd",
                      role: "Guru Seni Budaya",
                      image: "/teachers/pak made_seni budaya.png",
                    },
                    {
                      name: "Nurus Sulhah, S.Pd",
                      role: "Guru PpKn",
                      image: "/teachers/bu nurus_pkn.png",
                    },
                    {
                      name: "Joko Susilo, S.Ag.K",
                      role: "Guru Agama Katolik",
                      image: "/teachers/pak joko_katolik.png",
                    },
                    {
                      name: "Indah Triyuliati, S.Pd",
                      role: "Guru Matematika",
                      image: "/teachers/bu indah_matematika.png",
                    },
                    {
                      name: "Wafi H, S.Pd.I, M.Pd",
                      role: "Guru Agama Islam",
                      image: "/teachers/pa wafi_islam.png",
                    },
                    {
                      name: "Mat Sumiaji, S.Pd, M.Si",
                      role: "Guru PpKn",
                      image: "/teachers/pak aji_ppkn.png",
                    },
                    {
                      name: "Ratih Indrawati, S.Pd",
                      role: "Guru Seni Budaya",
                      image: "/teachers/bu ratih_seni budaya.png",
                    },
                    {
                      name: "Nindya R.P.D, S.Sos, M.Pd",
                      role: "Guru Sosiologi",
                      image: "/teachers/bu nindya_sosiologi.png",
                    },
                    {
                      name: "Ratna Yulia Damayanti, S.Pd",
                      role: "Guru Bahasa Daerah",
                      image: "/teachers/bu ratna_bahasa daerah.png",
                    },
                    {
                      name: "Nur Fadhillah, S.Pd.I, M.Pd",
                      role: "Guru Agama Islam",
                      image: "/teachers/bu nur_islam.png",
                    },
                    {
                      name: "Saiful Hadi, S.Ag",
                      role: "Guru Agama Islam",
                      image: "/teachers/pak saiful_islam.png",
                    },
                    {
                      name: "Siti Astriana, S.Pd",
                      role: "Guru Sejarah",
                      image: "/teachers/bu astri_sejarah.png",
                    },
                    {
                      name: "Aviarina Widya I, S.Si, M.T",
                      role: "Guru Kimia",
                      image: "/teachers/bu avi_kimia.png",
                    },
                    {
                      name: "Mohammad Rafli A, S.Pd",
                      role: "Guru Geografi",
                      image: "/teachers/pak rafli_geografi.png",
                    },
                    {
                      name: "Rena Nurida, S.Pd",
                      role: "Guru Bahasa Jepang",
                      image: "/teachers/bu reni_nihon.png",
                    },
                    {
                      name: "Adawiya K, S.Sos",
                      role: "Guru Sosiologi",
                      image: "/teachers/bu ada_sosiologi.png",
                    },
                    {
                      name: "Stevani Siburian, S.Pd",
                      role: "Guru Ekonomi",
                      image: "/teachers/bu stevany_ekonomi.png",
                    },
                    {
                      name: "Faranita Dian S, S.Pd",
                      role: "Guru Bahasa Indonesia",
                      image: "/teachers/bu farah_bahasa indonesia.png",
                    },
                    {
                      name: "Elon Reeve Musk",
                      role: "CEO of Tesla, Inc, SpaceX, & X Corp",
                      image:
                        "https://foreignpolicy.com/wp-content/uploads/2023/11/elon-musk-messy-hero-GettyImages-1239416791.jpg?resize=1200,1200",
                    },
                    {
                      name: "Novi Kiki Rizki Amalia",
                      role: "Tenaga Kependidikan",
                      image: "/tenaga_kependidikan/bu novi.png",
                    },
                    {
                      name: "Julius Gatot P, S.E",
                      role: "Tenaga Kependidikan",
                      image: "/tenaga_kependidikan/pak gatot.png",
                    },
                    {
                      name: "Nurul Huda",
                      role: "Tenaga Kependidikan",
                      image: "/tenaga_kependidikan/pak nurul.png",
                    },
                  ]
                    .slice(currentPage * 4, (currentPage + 1) * 4)
                    .map((teacher, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex flex-col items-center"
                      >
                        <div className="relative w-48 h-48 mb-4">
                          <div className="absolute inset-0 bg-red-500 rounded-full"></div>
                          <Image
                            src={teacher.image}
                            alt={teacher.name}
                            width={192}
                            height={192}
                            className="rounded-full object-cover border-4  relative z-10"
                          />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          {teacher.name}
                        </h3>
                        <p className="text-gray-600">{teacher.role}</p>
                      </motion.div>
                    ))}
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center space-x-2 mt-8">
                {[...Array(13)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      i === currentPage ? "bg-blue-600" : "bg-gray-300"
                    } hover:bg-blue-400`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </section>

          <Infinity />
        </main>
        <section className="news-events container mx-auto px-6 py-16">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Berita Sekolah
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <Card className="flex flex-col">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={factoryVisit}
                  alt="Science Fair"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Kunjungan Dharmawanita</CardTitle>
                <CardDescription>
                  Kunjungan Dharmawanita SMAN 17 Surabaya ke Pabrik Fiesta di
                  Ngoro, Kabupaten Mojokerto
                </CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <a href="/berita_kehumasan">
                  <Button variant="outline">Read More</Button>
                </a>
              </CardFooter>
            </Card>
            <Card className="flex flex-col">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={Voley}
                  alt="Arts Program"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>intoTheLmao</CardTitle>
                <CardDescription>Ey big shout out to X-4</CardDescription>
              </CardHeader>
              <CardContent>
                <p>She's just wow...</p>
              </CardContent>
              <CardFooter className="mt-auto">
                <a href="/akademik">
                  <Button variant="outline">Read More</Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>

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