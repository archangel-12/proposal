"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface MenuItem {
  name: string;
  href: string;
  target?: string;
  rel?: string;
}

interface DropdownMenuProps {
  title: string;
  items: MenuItem[];
}

export default function DropdownMenu({ title, items }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      className="relative inline-block text-left"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center h-full py-2"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="ml-1 flex items-center justify-center"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full mt-1 w-52 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100"
          >
            {items.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15, delay: index * 0.03 }}
              >
                <Link
                  href={item.href}
                  target={item.target}
                  rel={item.rel}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}