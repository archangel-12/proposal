// this is a sort of test script that i do in the ``page.tsx`` script//
// originally i want to make a dropdown menu when it comes to mobile but apparently my attempt is sort of fail //
// to whoever see this, please do not mess with it as this whole thing is part of the test.//
// thank you and god speed //


// 'use client'

// import { useState, useEffect, useRef } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Menu, X, ChevronDown } from 'lucide-react'
// import headerLogo from "../public/cropped-HeaderLogo.png"

// export default function Home() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
//   const [isTentangKamiOpen, setIsTentangKamiOpen] = useState(false);
//   const [isBlogOpen, setIsBlogOpen] = useState(false);
//   const [isPrestasiOpen, setIsPrestasiOpen] = useState(false);
//   const [isAplikasiOpen, setIsAplikasiOpen] = useState(false);
//   const mobileMenuRef = useRef<HTMLDivElement>(null)

//   // Navigation items data
//   const navItems = {
//     main: [
//       { name: "Home", href: "/" },
//       { name: "Tentang Kami", href: "#", items: [
//         { name: "Sejarah Pendirian Sekolah", href: "/sejarah" },
//         { name: "Guru & Tenaga Kependidikan", href: "/gtk" }
//       ]},
//       { name: "Struktur Organisasi", href: "/strukturOrganisasi" },
//       { name: "Agenda Sekolah", href: "/agenda_sekolah" },
//       { name: "Blog", href: "#", items: [
//         { name: "Berita Kurikulum", href: "/berita_kurikulum" },
//         { name: "Berita Kesiswaan", href: "/berita_kesiswaan" },
//         { name: "Berita Kehumasan", href: "/berita_kehumasan" },
//         { name: "Komite", href: "/komite" }
//       ]},
//       { name: "Tamu", href: "https://docs.google.com/forms/d/e/1FAIpQLSfwyfDk9qmKQCleFVsvsC-77Ps9ZnrxhoxD3qSNWH45_8ZmeQ/viewform", external: true },
//       { name: "Prestasi Siswa", href: "#", items: [
//         { name: "Input Prestasi Siswa", href: "https://docs.google.com/forms/d/e/1FAIpQLScD-xvJtGLx2XiR0oeiDlBwtXTGlZXJ9mxqyxQpV80fhgZqXA/viewform", external: true },
//         { name: "Lulusan SNBP tahun 2024", href: "/snbp" },
//         { name: "Prestasi Akademik", href: "/akademik" },
//         { name: "Prestasi Non-Akademik", href: "/non_akademik" },
//         { name: "BIOVATIONS", href: "/biovations" }
//       ]},
//       { name: "Aplikasi", href: "#", items: [
//         { name: "Info GTK", href: "https://info.gtk.kemdikbud.go.id/", external: true },
//         { name: "Dapodik", href: "http://dapodik.sman17sby.sch.id/", external: true },
//         { name: "Erapor KM", href: "/erapor-km" },
//         { name: "Erapor", href: "http://eraporkm.sman17sby.sch.id/login", external: true },
//         { name: "Quick Edu", href: "/quick-edu" }
//       ]}
//     ]
//   }

//   const handleTentangKamiClick = () => setIsTentangKamiOpen(!isTentangKamiOpen);
//   const handleBlogClick = () => setIsBlogOpen(!isBlogOpen);
//   const handlePrestasiClick = () => setIsPrestasiOpen(!isPrestasiOpen);
//   const handleAplikasiClick = () => setIsAplikasiOpen(!isAplikasiOpen);


//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 0)
//     const handleClickOutside = (event: MouseEvent) => {
//       if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
//         setIsMobileMenuOpen(false)
//         setActiveDropdown(null)
//         setIsTentangKamiOpen(false);
//         setIsBlogOpen(false);
//         setIsPrestasiOpen(false);
//         setIsAplikasiOpen(false);
//       }
//     }

//     window.addEventListener('scroll', handleScroll)
//     document.addEventListener('mousedown', handleClickOutside)

//     return () => {
//       window.removeEventListener('scroll', handleScroll)
//       document.removeEventListener('mousedown', handleClickOutside)
//     }
//   }, [])

//   const toggleDropdown = (name: string) => {
//     setActiveDropdown(activeDropdown === name ? null : name)
//   }

//   return (
//     <header className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "py-1" : "py-1"}`}>
//       <nav className="container mx-auto px-6 py-4">
//         <div className="flex justify-between items-center">
//           <Link href="/" className="flex-shrink-0">
//             <Image
//               src={headerLogo}
//               alt="SMAN 17 SURABAYA"
//               width={150}
//               height={40}
//               className={`transition-all duration-300 ${isScrolled ? "h-12" : "h-16"} w-fit`}
//               priority
//             />
//           </Link>
//           <div className="ml-auto">
//             <ul className="flex items-center space-x-6">
//               {navItems.main.map((item) => (
//                 <div key={item.name} className="relative group">
//                   {item.items ? (
//                     <button
//                       onClick={() => item.name === "Tentang Kami" ? handleTentangKamiClick() : 
//                                     item.name === "Blog" ? handleBlogClick() :
//                                     item.name === "Prestasi Siswa" ? handlePrestasiClick() :
//                                     item.name === "Aplikasi" ? handleAplikasiClick() : null}
//                       className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center"
//                       aria-haspopup="true"
//                       aria-expanded={item.name === "Tentang Kami" ? isTentangKamiOpen :
//                                      item.name === "Blog" ? isBlogOpen :
//                                      item.name === "Prestasi Siswa" ? isPrestasiOpen :
//                                      item.name === "Aplikasi" ? isAplikasiOpen : false}
//                     >
//                       {item.name}
//                       <ChevronDown className="ml-1 h-4 w-4" />
//                     </button>
//                   ) : (
//                     <Link
//                       href={item.href}
//                       target={item.external ? "_blank" : undefined}
//                       rel={item.external ? "noopener noreferrer" : undefined}
//                       className="text-gray-700 hover:text-blue-600"
//                     >
//                       {item.name}
//                     </Link>
//                   )}

//                   {item.items && (
//                     <AnimatePresence>
//                       {(item.name === "Tentang Kami" && isTentangKamiOpen) ||
//                        (item.name === "Blog" && isBlogOpen) ||
//                        (item.name === "Prestasi Siswa" && isPrestasiOpen) ||
//                        (item.name === "Aplikasi" && isAplikasiOpen) ? (
//                         <motion.div
//                           initial={{ opacity: 0, y: -10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: -10 }}
//                           transition={{ duration: 0.2 }}
//                           className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
//                         >
//                           {item.items.map((subItem, index) => (
//                             <motion.div
//                               key={subItem.name}
//                               initial={{ opacity: 0, x: -10 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               transition={{ duration: 0.2, delay: index * 0.05 }}
//                             >
//                               <Link
//                                 href={subItem.href}
//                                 target={subItem.external ? "_blank" : undefined}
//                                 rel={subItem.external ? "noopener noreferrer" : undefined}
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                               >
//                                 {subItem.name}
//                               </Link>
//                             </motion.div>
//                           ))}
//                         </motion.div>
//                       ) : null}
//                     </AnimatePresence>
//                   )}
//                 </div>
//               ))}
//             </ul>
//           </div>
//           <button
//             className="md:hidden text-gray-700 hover:text-blue-600 p-2"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {isMobileMenuOpen ? (
//               <X className="h-6 w-6" />
//             ) : (
//               <Menu className="h-6 w-6" />
//             )}
//           </button>
//         </div>
//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {isMobileMenuOpen && (
//             <motion.div
//               ref={mobileMenuRef}
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden bg-white shadow-lg"
//             >
//               <div className="py-4 px-6 space-y-4">
//                 {navItems.main.map((item) => (
//                   <div key={item.name} className="relative">
//                     {item.items ? (
//                       <>
//                         <button
//                           onClick={() => item.name === "Tentang Kami" ? handleTentangKamiClick() : 
//                                       item.name === "Blog" ? handleBlogClick() :
//                                       item.name === "Prestasi Siswa" ? handlePrestasiClick() :
//                                       item.name === "Aplikasi" ? handleAplikasiClick() : null}
//                           className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center w-full justify-between"
//                           aria-haspopup="true"
//                           aria-expanded={item.name === "Tentang Kami" ? isTentangKamiOpen :
//                                          item.name === "Blog" ? isBlogOpen :
//                                          item.name === "Prestasi Siswa" ? isPrestasiOpen :
//                                          item.name === "Aplikasi" ? isAplikasiOpen : false}
//                         >
//                           {item.name}
//                           <ChevronDown className="h-4 w-4" />
//                         </button>
//                         <AnimatePresence>
//                           {(item.name === "Tentang Kami" && isTentangKamiOpen) ||
//                            (item.name === "Blog" && isBlogOpen) ||
//                            (item.name === "Prestasi Siswa" && isPrestasiOpen) ||
//                            (item.name === "Aplikasi" && isAplikasiOpen) ? (
//                             <motion.div
//                               initial={{ opacity: 0, y: -10 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               exit={{ opacity: 0, y: -10 }}
//                               transition={{ duration: 0.2 }}
//                               className="mt-2 space-y-2 pl-4"
//                             >
//                               {item.items.map((subItem) => (
//                                 <Link
//                                   key={subItem.name}
//                                   href={subItem.href}
//                                   target={subItem.external ? "_blank" : undefined}
//                                   rel={subItem.external ? "noopener noreferrer" : undefined}
//                                   className="block text-sm text-gray-700 hover:text-blue-600"
//                                   onClick={() => setIsMobileMenuOpen(false)}
//                                 >
//                                   {subItem.name}
//                                 </Link>
//                               ))}
//                             </motion.div>
//                           ) : null}
//                         </AnimatePresence>
//                       </>
//                     ) : (
//                       <Link
//                         href={item.href}
//                         target={item.external ? "_blank" : undefined}
//                         rel={item.external ? "noopener noreferrer" : undefined}
//                         className="block text-gray-700 hover:text-blue-600"
//                         onClick={() => setIsMobileMenuOpen(false)}
//                       >
//                         {item.name}
//                       </Link>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>
//     </header>
//   )
// }