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
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  const handleAplikasiClick = () => {
    setIsAplikasiOpen(!isAplikasiOpen);
  };

  const handlePrestasiClick = () => {
    setIsPrestasiOpen(!isPrestasiOpen);
  };

  const principal = {
    name: "Elon Reeve Musk, FRS",
    role: "Founder & CEO of Tesla, Inc, SpaceX, X Corp, The Boring Company, & Co-founder of Neuralink, OpenAI, & PayPal",
    image:
      "https://foreignpolicy.com/wp-content/uploads/2023/11/elon-musk-messy-hero-GettyImages-1239416791.jpg?resize=1200,1200",
  };

  const staff = [
    {
      name: "Endang Restuningsih, M.Pd",
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
      name: "Dra. Pipik Maria Poespita, M.M",
      role: "Guru Kimia",
      image: "/teachers/Bu Pipik_kimia.png",
    },
    {
      name: "Qurratul 'Aini, M.Pd",
      role: "Guru Fisika",
      image: "/teachers/Bu Aini_fisika.png",
    },
    {
      name: "Maria Agustina Darma Rahayu, S.Pd",
      role: "Guru Fisika & PKWU",
      image: "/teachers/bu maria_bahasa inggris.png",
    },
    {
      name: "Kustapa Yuli Priyanto, S.Pd",
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
      name: "Fifid Suryaning Fitri, M.Pd",
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
      name: "Elvyn Bahterawati, S.Sos., M.Pd",
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
      name: "Wafir Hasanudin, S.Pd.I, M.Pd",
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
      name: "Nindya Riantika Putri Dewayani, S.Sos, M.Pd",
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
      name: "Aviarina Widya Ismanto, S.Si, M.T",
      role: "Guru Kimia",
      image: "/teachers/bu avi_kimia.png",
    },
    {
      name: "Mohammad Rafli Alfisyar, S.Pd",
      role: "Guru Geografi",
      image: "/teachers/pak rafli_geografi.png",
    },
    {
      name: "Rena Nurida, S.Pd",
      role: "Guru Bahasa Jepang",
      image: "/teachers/bu reni_nihon.png",
    },
    {
      name: "Nur Haniyyah M, S.Pd",
      role: "Guru Biologi",
      image: "/teachers/bu nur_biologi.png",
    },
    {
      name: "Adawiya Kurnianingsih, S.Sos",
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
      name: "Andrej Karpathy",
      role: "Former Tesla's Director of Artificial Intelligence & Autopilot Vision",
      image: "/karpathy.jpg",
    },
    {
      name: "Novi Kiki Rizki Amalia",
      role: "Tenaga Kependidikan",
      image: "/tenaga_kependidikan/bu novi.png",
    },
    {
      name: "Julius Gatot Pranoto, S.E",
      role: "Tenaga Kependidikan",
      image: "/tenaga_kependidikan/pak gatot.png",
    },
    {
      name: "Nurul Huda",
      role: "Tenaga Kependidikan",
      image: "/tenaga_kependidikan/pak nurul.png",
    },
    {
      name: "Afri Kurniawan",
      role: "Kebersihan",
      image: "/kebersihan/afri.png",
    },
    {
      name: "Ahmat Subakir",
      role: "Kebersihan",
      image: "/kebersihan/ahmat.png",
    },
    {
      name: "Warijo",
      role: "Kebersihan",
      image: "/kebersihan/warijo.png",
    },
    {
      name: "Iswanto",
      role: "Keamanan",
      image: "/keamanan/is.png",
    },
    {
      name: "Rizki Dwi Aryanto",
      role: "Keamanan",
      image: "/keamanan/rizky.png",
    },
    {
      name: "Saipul Anwar",
      role: "Keamanan",
      image: "/keamanan/saiful.png",
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
                  <Link
                    href="/"
                    className="text-gray-700 hover:text-blue-600"
                  >
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

      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Susunan Pimpinan Sekolah
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="relative w-48 h-48 mb-4">
            <div className="absolute inset-0 rounded-full bg-blue-500" />
            <Image
              src={principal.image}
              alt={principal.name}
              width={192}
              height={192}
              className="rounded-full object-cover relative z-10"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {principal.name}
          </h2>
          <p className="text-lg text-gray-600">{principal.role}</p>
        </motion.div>

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