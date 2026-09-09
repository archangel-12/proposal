"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface MenuItem {
  name: string;
  href: string;
  target?: string;
  rel?: string;
}

interface MobileDropdownMenuProps {
  title: string;
  items: MenuItem[];
}

export default function MobileDropdownMenu({
  title,
  items,
}: MobileDropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center text-gray-700 hover:text-blue-600 py-2 transition-colors duration-200 font-medium"
      >
        <span>{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden pl-4 space-y-1"
          >
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target={item.target}
                rel={item.rel}
                className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-150"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}