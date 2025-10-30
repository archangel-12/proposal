import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Light.otf",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Italic.otf",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});


export const metadata: Metadata = {
  title: "SMAN 17 SURABAYA",
  description: "Berbudi dan Berprestasi",
  referrer: "no-referrer",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;"
        />
      </head>
      <body
        className={`${satoshi.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}