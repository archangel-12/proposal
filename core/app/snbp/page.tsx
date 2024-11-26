"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import headerLogo from "../../public/cropped-HeaderLogo.png";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
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

  const staff = [
    {
      name: "Putu Kanya Anindita Prabhaswari",
      role: "Psikologi - Universitas Airlangga",
      image:
        "/snbp_2024/XII-IPS-3_PUTU-KANYA-ANINDITA-PRABHASWARI-fotor-2024033062626-350x350.png",
    },
    {
      name: "Ilma Hafizha Nasri",
      role: "Kewirausahaan - UPN Veteran Jawa Timur",
      image:
        "/snbp_2024/XII-IPS-3_ILMA-HAFIZHA-NASRI-fotor-2024033062324-350x350.png",
    },
    {
      name: "Risma Amalia",
      role: "Manajemen - Universitas Airlangga",
      image:
        "/snbp_2024/XII-IPS-3_RISMA-AMALIA-fotor-2024033062741-350x350.png",
    },
    {
      name: "Khairina Putri Anindya",
      role: "Hukum - UPN Veteran Jawa Timur",
      image:
        "/snbp_2024/XII-IPS-3_KHAIRINA-PUTRI-ANINDYA-fotor-202403306254-350x350.png",
    },
    {
      name: "Arimbi Rahmawati",
      role: "Pend. Bahasa Inggris - Universitas Negeri Surabaya",
      image:
        "/snbp_2024/XII-IPS-2_ARIMBI-RAHMAWATI-fotor-2024033063727-350x350.png",
    },
    {
      name: "Jessica Jovanca Valencia Marino",
      role: "Hubungan Internasional - Universitas Airlangga",
      image:
        "/snbp_2024/XII-IPS-2_JESSICA-JOVANCA-VALENICA-MARINO-fotor-2024033064528-350x350.png",
    },
    {
      name: "Tiara Avida Wulansari",
      role: "Ekonomi Pembangunan - UPN Veteran Jawa Timur",
      image:
        "/snbp_2024/XII-IPS-2_TIARA-AVIDA-WULANSARI-fotor-2024033064912-350x350.png",
    },
    {
      name: "Rizki Haryo Firstama",
      role: "Bisnis Digital - Universitas Negeri Surabaya",
      image:
        "/snbp_2024/XII-IPS-2_RISKI-HARYO-FIRSTAMA-fotor-202403306486-350x350.png",
    },
    {
      name: "Hanum Mafrudo",
      role: "Pend. Bahasa & Sastra Indonesia - Universitas Negeri Surabaya",
      image:
        "/snbp_2024/XII-IPS-2_HANUM-MAFRUDHO-fotor-2024033064418-350x350.png",
    },
    {
      name: "Nabila Ramadhani Hidayat",
      role: "Hukum - Universitas Airlangga",
      image:
        "/snbp_2024/XII-IPS-2_NABILA-RAMADHANI-HIDAYAT-fotor-2024033064645-350x350.png",
    },
    {
      name: "Najwa Eka Salsabila",
      role: "Ilmu Komunikasi - UPN Veteran Jawa Timur",
      image:
        "/snbp_2024/XII-IPS-1_NAJWA-EKA-SALSABILA-fotor-20240330155346-350x350.png",
    },
    {
      name: "Dini Mega Fatikasari",
      role: "Ekonomi Pembangunan - UPN Veteran Jawa Timur",
      image:
        "/snbp_2024/XII-IPS-1_DINI-MEGA-FATIKASARI-fotor-2024033071544-350x350.png",
    },
    {
      name: "Ratih Aulia Nisa",
      role: "Bimbingan & Konseling - Universitas Negeri Surabaya",
      image:
        "/snbp_2024/XII-IPS-1_RATIH-AULIA-NISA-fotor-20240330155821-350x350.png",
    },
    {
      name: "Salwa Paquitha Dametri",
      role: "Akuntansi - UPN Veteran Jawa Timur",
      image:
        "/snbp_2024/XII-IPS-1_SALWA-PAQUITHA-DAMETRI-fotor-2024033016033-350x350.png",
    },
    {
      name: "Novita Intan Prameswari",
      role: "Psikologi - Universitas Negeri Surabaya",
      image:
        "/snbp_2024/XII-IPS-1_NOVITA-INTAN-PRAMESWARI-fotor-2024033015568-350x350.png",
    },
    {
      name: "Karina Azaria",
      role: "Perpajakan - Universitas Airlangga",
      image:
        "/snbp_2024/XII-IPS-1_KARINA-AZARIA-fotor-2024033071658-350x350.png",
    },
    {
      name: "Ridwan Desta Alfriza",
      role: "Pend. Bahasa Jepang - Universitas Negeri Surabaya",
      image:
        "/snbp_2024/XII-MIPA-6_RIDWAN-DESTHA-ALFRIZA-fotor-2024033016756-350x350.png",
    },
    {
      name: "Eodia Putri Amalia",
      role: "Instrumentasi - Universitas Brawijaya",
      image:
        "/snbp_2024/XII-MIPA-6_EODIA-PUTRI-AMALIA-fotor-2024033016551-350x350.png",
    },
    {
      name: "Sesha Cindy Indriyana",
      role: "Kesehatan Masyarakat - Universitas Airlangga",
      image:
        "/snbp_2024/XII-MIPA-6_SESHA-CINDY-INDRIYANA-fotor-2024033016952-350x350.png",
    },
    {
      name: "Meutia Hakima",
      role: "Perencanaan Wilayah & Kota - Institut Teknologi Sepuluh Nopember",
      image:
        "/snbp_2024/XII-MIPA-6_-MEUTIA-HAKIMA-fotor-2024033016341-350x350.png",
    },
    {
      name: "Fawwaz Ammar Fayzul Setyawan",
      role: "Perencanaan Wilayah & Kota - Institut Teknologi Sepuluh Nopember",
      image:
        "/snbp_2024/XII-MIPA-5_FAWWAZ-AMMAR-FAYZUL-SETYAWAN-fotor-20240330161334-350x350.png",
    },
    {
      name: "Nhofa Titan Alghoffar",
      role: "Kedokteran - Universitas Udayana",
      image:
        "/snbp_2024/XII-MIPA-5_-NHOFA-TITAN-ALGHOFFAR-fotor-20240330161156-350x350.png",
    },
    {
      name: "Farrel Ranu Manggala",
      role: "Teknik Mesin - Universitas Brawijaya",
      image:
        "/snbp_2024/XII-MIPA-4_-FARREL-RANU-MANGGALA-fotor-20240330162627-350x350.png",
    },
    {
      name: "Natasha Aulia Erdiana Putri",
      role: "Statistika - Universitas Airlangga",
      image:
        "/snbp_2024/XII-MIPA-4_NATASYA-AULIA-ERDIANA-PUTRI-fotor-20240330162920-350x350.png",
    },
    {
      name: "Sandrina Anggun Anatasia Luvan",
      role: "Biologi - Universitas Airlangga",
      image:
        "/snbp_2024/XII-MIPA-4_SANDRINA-ANGGUN-ANATASIA-LUVAN-fotor-20240330163144-350x350.png",
    },
    {
      name: "Shania Naura Risanti",
      role: "Kedokteran Hewan - Universitas Airlangga",
      image:
        "/snbp_2024/XII-MIPA-3_SHANIA-NAURA-RISANTI-fotor-20240330163910-350x350.png",
    },
    {
      name: "Andin Meilanisa",
      role: "Teknologi Rekayasa Internet - Politeknik Elektronika Negeri Surabaya",
      image:
        "/snbp_2024/XII-MIPA-3_-ANDIN-MEILANISA-fotor-20240330163336-350x350.png",
    },
    {
      name: "Daifa Arifio Fitriandy",
      role: "Teknik Kelautan - Institut Teknologi Sepuluh Nopember",
      image:
        "/snbp_2024/XII-MIPA-3_DAIVA-ARIFIO-fotor-20240330163748-350x350.png",
    },
    {
      name: "Eva Aisyiyah Putri",
      role: "Manajemen Bisnis - Politeknik Perkapalan Negeri Surabaya",
      image:
        "/snbp_2024/XII-MIPA-3_-EVANNA-AISYIYAH-P.-fotor-20240330163456-350x350.png",
    },
    {
      name: "Bintang Nurcahya Putra",
      role: "Teknik Sipil - Institut Teknologi Sepuluh Nopember",
      image:
        "/snbp_2024/XII-MIPA-3_BINTANG-NURCAHYA-PUTRA-fotor-20240330163621-350x350.png",
    },
    {
      name: "Daffa Fadila Faisal",
      role: "Teknik Elektro - Universitas Airlangga",
      image:
        "/snbp_2024/XII-MIPA-2_DAFFA-FADILA-FAISAL-fotor-20240329132030-350x350.png",
    },
    {
      name: "Aidina Sofiyana",
      role: "Psikologi - Universitas Islam Negeri Sunan  Ampel Surabaya",
      image:
        "/snbp_2024/XII-MIPA-2_AIDINA-SOFIYANA-fotor-20240329131459-350x350.png",
    },
    {
      name: "Calista Anggraini",
      role: "Teknik Komputer - Politeknik Elektronika Negeri Surabaya",
      image:
        "/snbp_2024/XII-MIPA-2_CALISTA-ANGGRAINI-fotor-20240329131856-350x350.png",
    },
    {
      name: "Najwa Elok Zulfiah",
      role: "PGSD - Universitas Negeri Surabaya",
      image:
        "/snbp_2024/XII-MIPA-2_NAJWA-ELOK-ZULFIAH-fotor-20240329132643-350x350.png",
    },
    {
      name: "Ovelia Daffa Recha Putri",
      role: "Psikologi - Universitas Airlangga",
      image:
        "/snbp_2024/XII-MIPA-2_OVELIA-DAFFA-RECHA-PUTRI-fotor-20240329132835-350x350.png",
    },
    {
      name: "Fitria Abdullah",
      role: "Kedokteran Gigi - Universitas Airlangga",
      image:
        "/snbp_2024/xii-mipa-2_FITRIA-ABDULLAH-fotor-20240329132230-1-350x350.png",
    },
    {
      name: "Andi Marcella Caya",
      role: "Teknologi Sains Data - Universitas Airlangga",
      image:
        "/snbp_2024/XII-IPA-2_ANDI-MARCELLA-CAYA-fotor-20240329131325-1-350x350.png",
    },
    {
      name: "Azriel Rizky Baihaqy",
      role: "Teknik Perancangan & Konstruksi Kapal - Politeknik Perkapalan Negeri Surabaya",
      image:
        "/snbp_2024/xii-mipa-2_azriel-rizky-baihaqy-fotor-20240329131633-1-350x350.png",
    },
    {
      name: "Nabila Nurul Hidayah",
      role: "Teknik Mesin - Institut Teknologi Sepuluh Nopember",
      image:
        "/snbp_2024/XII-MIPA-2_NABILA-NURUL-HIDAYAH-fotor-2024032913256-1-350x350.png",
    },
  ];

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
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Peserta didik SMAN 17 Surabaya lulus SNBP tahun 2024
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16"
        ></motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {staff.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-40 h-40 mb-4">
                <div className="absolute inset-0 rounded-full bg-blue-500" />
                <Image
                  src={member.image}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="rounded-full object-cover relative z-10"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1 text-center">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600 text-center">{member.role}</p>
            </motion.div>
          ))}
        </div>
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