"use client";

import { useState, useEffect } from "react";
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
import { FileText, Users, Lightbulb } from "lucide-react";
import headerLogo from "../public/cropped-HeaderLogo.png";
import factoryVisit from "../public/hiya.jpeg";
import Voley from "../public/lmao.png";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const TentangKami = [
  { title: "Pendirian Sekolah", href: "/about/kurikulum" },
  { title: "Visi & misi", href: "/about/kesiswaan" },
  { title: "GTK", href: "/about/kehumasan", hasSubmenu: true },
];

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
                    href="/about"
                    className="text-gray-700 hover:text-blue-600"
                  >
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

      <main>
        <section className="hero relative h-[600px] flex items-center justify-center">
          <Image
            src="https://images2.alphacoders.com/902/902437.jpg"
            alt="School campus"
            fill
            sizes="100vw"
            priority
            quality={100}
            objectFit="cover"
            className="absolute z-0 object-cover"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 text-center text-white"
          >
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
              Selamat datang di laman resmi SMA Negeri 17 Surabaya
            </h1>
            <p className="text-xl mb-8 drop-shadow-md">
              Untuk Bangsa, dan Negaraku
            </p>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/admissions">Apply Now</Link>
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
            <div className="w-1/2">
              <Image
                src="https://asset.kompas.com/crops/bVzqiC1Fk6lbCaIDX4MXnyepvzY=/16x0:787x514/1200x800/data/photo/2018/03/16/69007999.jpg" // Replace with actual principal image
                alt="anggap aja contoh"
                width={600}
                height={800}
                className="rounded-lg shadow-lg"
              />
            </div>
            <motion.div
              className="w-1/2 space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold">
                <span className="text-gray-800">Good Morning</span>{" "}
                <span className="text-orange-500">Everyone</span>{" "}
              </h1>

              <h2 className="text-2xl text-gray-700">
                We choose to go to the Moon!
              </h2>

              <div className="prose prose-lg text-justify">
                <p>
                  If this capsule history of our progress teaches us anything,
                  it is that man, in his quest for knowledge and progress, is
                  determined and cannot be deterred. The exploration of space
                  will go ahead, whether we join in it or not, and it is one of
                  the great adventures of all time, and no nation which expects
                  to be the leader of other nations can expect to stay behind in
                  the race for space.
                </p>

                <p>
                  Those who came before us made certain that this country rode
                  the first waves of the industrial revolutions, the first waves
                  of modern invention, and the first wave of nuclear power, and
                  this generation does not intend to founder in the backwash of
                  the coming age of space. We mean to be a part of it — we mean
                  to lead it. For the eyes of the world now look into space, to
                  the moon and to the planets beyond, and we have vowed that we
                  shall not see it governed by a hostile flag of conquest, but
                  by a banner of freedom and peace. We have vowed that we shall
                  not see space filled with weapons of mass destruction, but
                  with instruments of knowledge and understanding.
                </p>

                <p className="italic">
                  We choose to go to the moon. We choose to go to the moon in
                  this decade and do the other things, not because they are
                  easy, but because they are hard, because that goal will serve
                  to organize and measure the best of our energies and skills,
                  because that challenge is one that we are willing to accept,
                  one we are unwilling to postpone, and one which we intend to
                  win, and the others, too.
                </p>

                <p>
                  However, I think we’re going to do it, and I think that we
                  must pay what needs to be paid. I don’t think we ought to
                  waste any money, but I think we ought to do the job. And this
                  will be done in the decade of the sixties. It may be done
                  while some of you are still here at school at this college and
                  university. It will be done during the term of office of some
                  of the people who sit here on this platform. But it will be
                  done. And it will be done before the end of this decade.
                </p>

                <p>
                  Well, space is there, and we’re going to climb it, and the
                  moon and the planets are there, and new hopes for knowledge
                  and peace are there. And, therefore, as we set sail we ask
                  God’s blessing on the most hazardous and dangerous and
                  greatest adventure on which man has ever embarked. Thank you.
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
                      name: "Nur Haniyyah M, S.Pd",
                      role: "Guru Biologi",
                      image: "/teachers/bu nur_biologi.png",
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
                      name: "Rena Nurida, S.Pd",
                      role: "Guru Bahasa Jepang",
                      image: "/teachers/bu reni_nihon.png",
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
                {[...Array(14)].map((_, i) => (
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
        </main>
        <section className="news-events container mx-auto px-6 py-16">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Berita Sekolah
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <Card>
              <Image
                src={factoryVisit}
                alt="Science Fair"
                width={600}
                height={300}
                className="w-full h-48 object-contain"
              />
              <CardHeader>
                <CardTitle>Kunjungan Dharmawanita</CardTitle>
                <CardDescription>
                  Kunjungan Dharmawanita SMAN 17 Surabaya ke Pabrik Fiesta di
                  Ngoro, Kabupaten Mojokerto
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline">Read More</Button>
              </CardFooter>
            </Card>
            <Card>
              <Image
                src={Voley}
                alt="Arts Program"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>New Arts Program Launched</CardTitle>
                <CardDescription>
                  Expanding our curriculum with innovative arts courses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>other than that, fuck em'. we ball...</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Read More</Button>
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
                Jl. Rungkut Asri Tengah, Rungkut Kidul, Kec. Rungkut
                <br />
                Surabaya, Jawa Timur 60293
              </p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
              <ul className="text-sm">
                <li>
                  <Link href="/about" className="hover:text-blue-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/academics" className="hover:text-blue-300">
                    Academics
                  </Link>
                </li>
                <li>
                  <Link href="/admissions" className="hover:text-blue-300">
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Connect with us!</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/smantass/?locale=id_ID"
                  className="text-white hover:text-blue-300 transition-colors duration-300"
                >
                  <FaFacebookF size={24} />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="https://twitter.com/iasmantass"
                  className="text-white hover:text-blue-300 transition-colors duration-300"
                >
                  <FaXTwitter size={24} />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="https://www.instagram.com/smansby17/"
                  className="text-white hover:text-blue-300 transition-colors duration-300"
                >
                  <FaInstagram size={24} />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
            <p>&copy; 2024 SMAN 17 SURABAYA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
