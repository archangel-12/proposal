"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PrincipalMessage() {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2 flex items-center justify-center">
          <Image
            src="https://asset.kompas.com/crops/bVzqiC1Fk6lbCaIDX4MXnyepvzY=/16x0:787x514/1200x800/data/photo/2018/03/16/69007999.jpg"
            alt="anggap aja contoh"
            width={600}
            height={800}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        <motion.div
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold">
            <span className="text-gray-800">Selamat Pagi</span>{" "}
            <span className="text-orange-500">semuanya!</span>
          </h1>

          <h2 className="text-2xl text-gray-700">
            Kita memilih untuk pergi ke Bulan!
          </h2>

          <div className="prose prose-lg text-justify">
            <p>
              Jika catatan sejarah perjalanan kemajuan kita mengajarkan sesuatu,
              itu adalah bahwa manusia, dalam pencariannya akan pengetahuan dan
              kemajuan, memiliki tekad yang tak tergoyahkan. Eksplorasi luar
              angkasa akan terus berlanjut, entah kita berpartisipasi atau
              tidak, dan ini adalah salah satu petualangan terbesar sepanjang
              masa.
            </p>

            <p>
              Mereka yang datang sebelum kita memastikan bahwa negara ini
              menunggangi gelombang pertama revolusi industri, penemuan modern,
              dan kekuatan nuklir. Generasi ini tidak berniat terombang-ambing
              di gelombang belakang era luar angkasa yang akan datang. Kita
              bermaksud menjadi bagian darinya.
            </p>

            <p className="italic">
              Kita memilih untuk pergi ke bulan — bukan karena hal itu mudah,
              tetapi karena itu sulit. Karena tujuan itu akan menjadi sarana
              untuk mengorganisasi dan mengukur kemampuan dan energi terbaik
              kita.
            </p>

            <p>
              Nah, luar angkasa ada di sana, dan kita akan menjangkaunya. Bulan
              dan planet-planet ada di sana, dan harapan baru untuk pengetahuan
              dan perdamaian juga ada di sana. Oleh karena itu, saat kita
              memulai perjalanan ini, kita memohon berkat Tuhan atas petualangan
              paling berbahaya, menantang, dan terbesar yang pernah dilakukan
              umat manusia.
            </p>
          </div>

          <div className="mt-8 inline-block border-2 border-gray-800 px-6 py-2">
            <p className="font-semibold">John Fitzgerald Kennedy</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}