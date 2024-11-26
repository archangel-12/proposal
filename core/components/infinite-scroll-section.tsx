"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Component() {
  const images = [
    "/collection/122_DSC_2852-2048x1360.jpg",
    "/collection/132_DSC_2928-2048x1360.jpg",
    "/collection/152_DSC_3019-2048x1360.jpg",
    "/collection/167_DSC_3063-2048x1360.jpg",
    "/collection/172_DSC_2690-2048x1360.jpg",
    "/collection/192_IMG_8842-2048x1365.jpg",
    "/collection/187_IMG_9014-2048x1365.jpg",
    "/collection/207_IMG_9272-2048x1365.jpg",
    "/collection/262_DSCF0545-2048x1365.jpg",
    "/collection/272_DSCF0653-2048x1365.jpg",
    "/collection/282_DSCF0738-2048x1365.jpg",
    "/collection/262_DSCF0545-2048x1365.jpg",
  ];

  const duplicatedImages = [
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-black mb-4">
          Rekap foto- foto kegiatan sekolah
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Kegiatan Sekolah</p>
      </div>

      <motion.div
        className="flex gap-4 px-4"
        animate={{
          x: [0, -1800],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 50,
            ease: "linear",
          },
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 h-[300px] w-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src={image}
              alt={`School life ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </motion.div>

      {/* Second row moving in opposite direction */}
      <motion.div
        className="flex gap-4 px-4 mt-4"
        animate={{
          x: [-1800, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 50,
            ease: "linear",
          },
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 h-[300px] w-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src={image}
              alt={`School life ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </motion.div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute bg-gradient-to-r" />
      <div className="pointer-events-none absolute bg-gradient-to-l" />
    </section>
  );
}