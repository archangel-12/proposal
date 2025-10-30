"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  heroImages: string[];
  currentImageIndex: number;
}

export default function HeroSection({
  heroImages,
  currentImageIndex,
}: HeroSectionProps) {
  return (
    <section className="hero relative h-[600px] flex items-center justify-center overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={heroImages[currentImageIndex]}
            alt={`School campus ${currentImageIndex + 1}`}
            fill
            sizes="100vw"
            priority
            quality={100}
            style={{ objectFit: "cover" }}
            className="absolute z-0"
          />
        </motion.div>
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center text-white"
      >
        <h1 className="text-5xl font-medium mb-4 drop-shadow-lg">
          Selamat datang di laman resmi SMA Negeri 17 Surabaya
        </h1>
        <p className="text-xl mb-8 drop-shadow-md">
          Untuk Bangsa, dan Negaraku
        </p>
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link
            href="https://ppdbjatim.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Informasi PPDB
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}