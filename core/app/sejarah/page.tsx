"use client";
import Image from "next/image";
import History from "./sejarah_sekolah.mdx";
import Principals from "./kepala_sekolah.mdx";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function sejarah() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-4 text-left">
          Awal Mula Pendirian Sekolah
        </h1>
        <History />
      </main>

      <main className="container mx-auto px-6 py-8 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4 text-left">
          Visi & Misi Sekolah
        </h2>
        <Image
          src="/troll.png"
          alt="struktur organisasi"
          width={500}
          height={700}
          className="object-contain"
        />
      </main>

      <main className="container mx-auto px-6 py-8">
        <h3 className="text-3xl font-m mb-4 text-left">
          Berikut daftar nama kepala SMA Negeri 17 Surabaya:
        </h3>
        <Principals />
      </main>
      <Footer />
    </>
  );
}