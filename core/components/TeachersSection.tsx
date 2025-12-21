"use client";
import teachers from "@/json/list-guru.json";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function TeachersSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(teachers.length / itemsPerPage);
  const visibleTeachers = teachers.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">DEWAN GURU</h2>
          <p className="text-gray-600">Guru & Tenaga Kependidikan Sekolah</p>
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
            {visibleTeachers.map((teacher, index) => (
              <motion.div
                key={teacher.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="relative w-48 h-48 mb-4">
                  <div className="absolute inset-0 rounded-full"></div>
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    width={192}
                    height={192}
                    className="rounded-full object-cover border-4 relative z-10"
                  />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {teacher.name}
                </h3>
                <p className="font-normal text-gray-600">{teacher.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center space-x-2 mt-8">
          {[...Array(totalPages)].map((_, i) => (
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
  );
}