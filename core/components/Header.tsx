"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import headerLogo from "../public/cropped-HeaderLogo.png";
import DropdownMenu from "./DropdownMenu";
import MobileDropdownMenu from "./MobileDropdownMenu";
import { menus } from "../data/HeaderMenuData";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-1" : "py-1"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex-shrink-0">
          <Image
            src={headerLogo}
            alt="SMAN 17 SURABAYA"
            width={150}
            height={40}
            className={`transition-all duration-300 ${
              isScrolled ? "h-12" : "h-16"
            } w-fit`}
            priority
          />
        </Link>
        <ul className="hidden md:flex items-center space-x-6 ml-auto">
          <li>
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
          </li>
          {menus.map((menu) => (
            <li key={menu.title}>
              <DropdownMenu title={menu.title} items={menu.items} />
            </li>
          ))}
          <li>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfwyfDk9qmKQCleFVsvsC-77Ps9ZnrxhoxD3qSNWH45_8ZmeQ/viewform?usp=sf_link"
              className="text-gray-700 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tamu
            </a>
          </li>
        </ul>
        <button
          className="md:hidden text-gray-700 hover:text-blue-600"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="py-4 px-6 space-y-4">
              <Link
                href="/"
                className="block text-gray-700 hover:text-blue-600"
              >
                Home
              </Link>
              {menus.map((menu) => (
                <div key={menu.title}>
                  <MobileDropdownMenu title={menu.title} items={menu.items} />
                </div>
              ))}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfwyfDk9qmKQCleFVsvsC-77Ps9ZnrxhoxD3qSNWH45_8ZmeQ/viewform?usp=sf_link"
                className="block text-gray-700 hover:text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tamu
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}