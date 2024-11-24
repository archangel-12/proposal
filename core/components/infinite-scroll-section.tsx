"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Component() {
  const images = [
    "/collection/034_DSC_2852-370x247.jpg",
    "/collection/035_DSC_2883-370x247.jpg",
    "/collection/036_DSC_2928-370x247.jpg",
    "/collection/037_DSC_2940-370x247.jpg",
    "/collection/038_DSC_3009-370x247.jpg",
    "/collection/039_DSC_3019-370x247.jpg",
    "/collection/040_DSC_3053-370x247.jpg",
    "/collection/041_DSC_3059-370x247.jpg",
    "/collection/042_DSC_3063-370x247.jpg",
    "/collection/043_DSC_2690-370x247.jpg",
    "/collection/044_DSC_2640-370x247.jpg",
    "/collection/045_WhatsApp-Image-2024-06-07-at-12.24.49-1-370x247.jpeg"
  ];

  const duplicatedImages = [...images, ...images, ...images, ...images, ...images, ...images];

  return (
    <section className="relative overflow-hidden">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-black mb-4">
          Kehidupan Sekolah
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Kegiatan Sekolah
        </p>
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
      <div className="pointer-events-none absolute inset-y-0 left-0 w-48 bg-gradient-to-r" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-48 bg-gradient-to-l" />
    </section>
  );
}