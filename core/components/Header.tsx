"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import headerLogo from "../public/cropped-HeaderLogo.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBlogOpen, setBlogOpen] = useState(false);
  const [isTentangKamiOpen, setTentangKamiOpen] = useState(false);
  const [isAplikasiOpen, setIsAplikasiOpen] = useState(false);
  const [isPrestasiOpen, setIsPrestasiOpen] = useState(false);
  const BlogRef = useRef<HTMLDivElement>(null);
  const TentangKamiRef = useRef<HTMLDivElement>(null);
  const aplikasiRef = useRef<HTMLDivElement>(null);
  const prestasiRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const TentangKamiItems = [
    { name: "Sejarah Pendirian Sekolah", href: "/sejarah" },
    { name: "Guru & Tenaga Kependidikan", href: "/gtk" },
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

  return (
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
  );
}