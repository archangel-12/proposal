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
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {title}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="ml-1 h-4 w-4" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-52 bg-white rounded-md shadow-lg py-1 z-50"
          >
            {items.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                <Link
                  href={item.href}
                  target={item.target}
                  rel={item.rel}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
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