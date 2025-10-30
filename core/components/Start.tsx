"use client";
import { useState, useEffect } from "react";
import Loading from "@/app/loading";
import Infinity from "../components/infinite-scroll-section";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PillarsSection from "@/components/PillarsSection";
import PrincipalMessage from "@/components/PrincipalMessage";
import TeachersSection from "@/components/TeachersSection";
import Berita from "@/components/Berita";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "/collection/122_DSC_2852-2048x1360.jpg",
    "/collection/new stuff.jpeg",
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

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => {
      clearInterval(imageInterval);
      clearTimeout(timer);
    };
  }, [heroImages.length]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100">
      <Header />
      <main>
        <HeroSection
          heroImages={heroImages}
          currentImageIndex={currentImageIndex}
        />
        <PillarsSection />
        <main className="container mx-auto px-6 py-12">
          <PrincipalMessage />
          <TeachersSection/>
          <Infinity />
        </main>
        <Berita/>
      </main>
      <Footer/>
    </div>
  );
}