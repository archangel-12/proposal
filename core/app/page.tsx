'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Lightbulb } from 'lucide-react';
import headerLogo from "../public/cropped-HeaderLogo.png";
import factoryVisit from "../public/hiya.jpeg";
import Voley from "../public/lmao.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3">
          <ul className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src={headerLogo}
                alt="SMAN 17 SURABAYA"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <li><Link href="/about" className="text-gray-700 hover:text-blue-600">Tentang Kami</Link></li>
            <li><Link href="/academics" className="text-gray-700 hover:text-blue-600">Agenda Sekolah</Link></li>
            <li><Link href="/admissions" className="text-gray-700 hover:text-blue-600">Prestasi Siswa</Link></li>
            <li><Link href="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero relative h-[600px] flex items-center justify-center">
          <Image
            src= "https://images2.alphacoders.com/902/902437.jpg"
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
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Selamat datang di laman resmi SMA Negeri 17 Surabaya</h1>
            <p className="text-xl mb-8 drop-shadow-md">Untuk Bangsa, dan Negaraku</p>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/admissions">Apply Now</Link>
            </Button>
          </motion.div>
        </section>

        <section className="features container mx-auto px-6 py-16">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Our Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: "INOVATIF", 
                icon: FileText, 
                description: "Di era digital sekarang ini guru harus bisa mengimbangi dan melangkah maju untuk mengikuti perkembangan pendidikan untuk meningkatkan keprofesionalan dalam mengajar sehingga lebih menarik dan mampu berinovatif", 
                color: "from-blue-900 to-blue-10", 
                name: "INARNI, S.PD", 
                image: "https://i.pinimg.com/originals/62/8b/e9/628be9123fd21fddf512814d3e36da7c.gif" 
              },
              { 
                title: "MANDIRI", 
                icon: Users, 
                description: "Manusia hebat adalah mereka yang mampu memotivasi dirinya sendiri tanpa harus diminta atau dipaksa orang lain. Berinisiatif sendiri dan berbuat baik menjadikan manusia kuat dan mandiri", 
                color: "from-blue-700 to-blue-10", 
                name: "TOTOK SUDARTO, S.PD", 
                image: "https://i.pinimg.com/originals/64/a9/19/64a9196a102faf69e4ff8284cb3996ca.gif" 
              },
              { 
                title: "KREATIF", 
                icon: Lightbulb, 
                description: "Pembelajaran yang disesuaikan dengan kondisi fisik pada jam tersebut dengan selingan humor dan tidak mengurangi isi materi", 
                color: "from-blue-900 to-blue-10", 
                name: "DRS. TEGUH JUANA, M.SI", 
                image: "https://i.pinimg.com/originals/60/03/0e/60030eb651d4f7965b67dceab21484b7.gif" 
              }
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-[400px] rounded-lg overflow-hidden"
              >
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  layout="fill"
                  objectFit="cover"
                  className="absolute z-0"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-80 z-10`}></div>
                <div className="relative z-20 p-6 flex flex-col justify-between h-full text-white">
                  <div>
                    <div className="flex items-center mb-4">
                      <pillar.icon className="w-8 h-8 mr-2" />
                      <h3 className="text-2xl font-bold">{pillar.title}</h3>
                    </div>
                    <p className="text-sm mb-6">{pillar.description}</p>
                  </div>
                  <div className="mt-auto">
                    <span className="text-sm font-semibold px-3 py-1 bg-white text-blue-600 rounded">{pillar.name}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="news-events container mx-auto px-6 py-16">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Berita Sekolah</h2>
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
                <CardDescription>Kunjungan Dharmawanita SMAN 17 Surabaya ke Pabrik Fiesta di Ngoro, Kabupaten Mojokerto</CardDescription>
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
                <CardDescription>Expanding our curriculum with innovative arts courses</CardDescription>
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
              <p className="text-sm"> Jl. Rungkut Asri Tengah, Rungkut Kidul, Kec. Rungkut<br />Surabaya, Jawa Timur 60293</p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
              <ul className="text-sm">
                <li><Link href="/about" className="hover:text-blue-300">About Us</Link></li>
                <li><Link href="/academics" className="hover:text-blue-300">Academics</Link></li>
                <li><Link href="/admissions" className="hover:text-blue-300">Admissions</Link></li>
                <li><Link href="/contact" className="hover:text-blue-300">Contact</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Connect with us!</h4>
              <ul className="text-sm">
                <li><a href="#" className="hover:text-blue-300">Facebook</a></li>
                <li><a href="#" className="hover:text-blue-300">Twitter</a></li>
                <li><a href="#" className="hover:text-blue-300">Instagram</a></li>
                <li><a href="#" className="hover:text-blue-300">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
            <p>&copy; 2024 SMAN 17 SURABAYA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}