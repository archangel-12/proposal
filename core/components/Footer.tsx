"use client";
import Image from "next/image";
import headerLogo from "../public/cropped-HeaderLogo.png";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">
              <Image
                src={headerLogo}
                alt="SMAN 17 SURABAYA"
                width={150}
                height={40}
                className="h-15 w-auto"
              />
            </h3>
            <p className="text-sm">
              {" "}
              Jl. Rungkut Asri Tengah, Rungkut Kidul
              <br />
              Surabaya, Jawa Timur 60293
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Hubungi kami:</h3>
            <p className="text-sm">Email: smantass@ymail.com</p>
            <p className="text-sm">Phone: (031) 8700717</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Link Altenatif</h3>
            <ul className="text-sm">
              <li>
                <a href="/tentangKami" className="hover:text-blue-400">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="/akademik" className="hover:text-blue-400">
                  Prestasi Akademik
                </a>
              </li>
              <li>
                <a href="/gtk" className="hover:text-blue-400">
                  Guru & Tenaga Kependidikan
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-2">
              Ikuti Media Sosial Kami
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/smantass/"
                className="text-white hover:text-blue-400"
              >
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/smansby17/"
                className="text-white hover:text-blue-400"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/IASmantass"
                className="text-white hover:text-blue-400"
              >
                <FaXTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} SMAN 17 SURABAYA. All rights
            reserved
          </p>
        </div>
      </div>
    </footer>
  );
}