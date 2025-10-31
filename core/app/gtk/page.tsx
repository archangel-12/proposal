"use client";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { staff, principal } from "@/data/staff";

export default function page() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}