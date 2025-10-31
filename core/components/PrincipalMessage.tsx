"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CurrentPrincipal from "../public/BANG-J-PROFIL.png";

export default function PrincipalMessage() {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2 flex items-center justify-center">
          <Image
            src={CurrentPrincipal}
            alt="."
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
            <span className="text-gray-800">Assalamu’alaikum. Wr. Wb</span>{" "}
          </h1>

          <h2 className="text-2xl text-gray-700">
            Salam Sejahtera Untuk Kita Semua.
          </h2>

          <div className="prose prose-lg text-justify">
            <p>
              Selamat datang di laman web SMAN 17 Surabaya. Sejalan dengan
              perkembangan teknologi industri 4.0, laman web ini dibangun
              sebagai media informasi dan komunikasi sekolah, sehingga
              memudahkan mencari informasi tentang SMAN 17 Surabaya. Kualitas
              layanan yang merupakan salah satu misi sekolah, terbantu dengan
              adanya laman web yang mengedepankan prinsip transparansi informasi
              dan perkembangan terkini sekolah.
            </p>

            <p>
              Saya akan terus mendorong warga sekolah untuk berinovasi dan
              berkreasi, serta mengeratkan tali saliturahmi, kekeluargaan, dan
              kerjasama seluruh pihak terkait dalam membangun SMAN 17 Surabaya
              yang akan melahirkan generasi yang inovatif, kreatif, religius,
              dan akhlakul karimah yang berwawasan luas.
            </p>

            <p>
              Saya mengajak seluruh civitas akademik SMAN 17 Surabaya untuk
              berkolaborasi mengembangkan sekolah nyaman, aman, dan menyenangkan
              bagi putra-putri kita dalam menuntut ilmu dan tetap mempertahankan
              serta mengembangkan citra SMAN 17 Surabaya sebagai sekolah
              unggulan di Surabaya
            </p>

            <p className="italic">
              Wassalamu’alaikum Warohmatullahi Wabarokatuh
            </p>
          </div>

          <div className="mt-8 inline-block border-2 border-gray-800 px-6 py-2">
            <p className="font-semibold">Zaenal Arifin, M.PD</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}