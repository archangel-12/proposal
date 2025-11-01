import X9 from "@/app/berita_kesiswaan/selamat-atas-prestasi-gemilang.mdx";
import cheerleader from "@/app/non_akademik/cheerleader.mdx";
import paskib from "@/app/non_akademik/paskib-ikn.mdx";
import finswimming from "@/app/non_akademik/finswimming.mdx";
import fins2 from "@/app/non_akademik/finswimming_1.mdx";
import grade5 from "@/app/non_akademik/grade-5.mdx";
import GCHQ from "@/app/non_akademik/qchq.mdx";
import kartiniModern from "@/app/non_akademik/kartini.mdx";
import senjata from "@/app/non_akademik/senjata.mdx";
import type { BlogPost } from "@/types/blog";

export interface BlogPost5 {
  id: string;
  title: string;
  date: string;
  tags: string[];
  image: string;
  excerpt: string;
  content: React.ComponentType;
}

export const blogPosts: BlogPost5[] = [
  {
    id: "x-9",
    title: "SELAMAT ATAS PRESTASI YANG GEMILANG",
    date: "09 November 2024",
    excerpt:
      "SMAN 17 Surabaya mengucapkan selamat atas prestasi untuk ananda bernama Bintang Aulia Rahmat kelas X-9 meraih Juara ke 2, medali perak di kegiatan Kejurnas hapkido Indonesia ke VII dengan penyelenggara Pengurus Pusat Hapkido Indonesia Semarang, dan di laksanakan pada tanggal 9-10 November",
    image: "/x9.jpeg",
    tags: ["Kesiswaan", "prestasi", "non", "akademik"],
    content: X9,
  },
  {
    id: "cheerleader",
    title: "PRESTASI LAGI…..DAN LAGI…SEMANGAT!!",
    date: "25 September 2024",
    excerpt: "Read More...",
    image: "/cheerleader.jpeg",
    tags: ["cheerleader", "non", "akademik"],
    content: cheerleader,
  },
  {
    id: "paskib",
    title:
      "AUDIENSI PERSIAPAN PASKIBRAKA NASIONAL 2024 DI IKN OLEH KEPALA SEKOLAH SMAN 17 SURABAYA DAN WALIKOTA SURABAYA",
    date: "11 Juli 2024",
    excerpt: "Read More...",
    image: "/adsense.jpeg",
    tags: ["paskibraka", "non", "akademik"],
    content: paskib,
  },
  {
    id: "finswimming",
    title: "Juara 3 (perunggu) Finswimming 400m Bifin",
    date: "26 Mei 2023",
    excerpt: "Read More...",
    image: "/alif.jpeg",
    tags: ["finswimming", "non", "akademik"],
    content: finswimming,
  },
  {
    id: "fins2",
    title: "Juara 2 (perak) Finswimming Estafet 4x100m Bifin kel.U A(18+)",
    date: "26 Mei 2023",
    excerpt: "Read More...",
    image: "/alif.jpeg",
    tags: ["finswimming", "non", "akademik"],
    content: fins2,
  },
  {
    id: "grade5",
    title: "Juara I Lomba Piano Irama Mas Music Party 2023 kategori Grade 5",
    date: "13 April 2024",
    excerpt:
      "Selamat kepada Evan Aryo Wibowo kelas X-9 atas prestasinya pada tingkat Kota Surabaya meraih Juara I Lomba Piano Irama Mas Music Party 2023 kategori Grade 5. Tetap semangat berkarya, semoga sukses selalu !",
    image: "/evan.jpg",
    tags: ["piano", "grade", "5", "non", "akademik"],
    content: grade5,
  },
  {
    id: "kartiniModern",
    title:
      "Pemenang Duta SMA Provinsi Jawa Timur 2023 pada Pemilihan Duta SMA Nasional Tahun 2023",
    date: "13 April 2024",
    excerpt:
      "Selamat kepada Marsha Oktavia Rahmadhani Irianto kelas XI-8 atas prestasinya pada tingkat nasional sebagai Pemenang Duta SMA Provinsi Jawa Timur 2023 pada Pemilihan Duta SMA Nasional Tahun 2023. Tetap semangat berkarya, semoga sukses selalu!",
    image: "/masha.jpeg",
    tags: ["duta", "sma", "non", "akademik"],
    content: kartiniModern,
  },
  {
    id: "GCHQ",
    title: "Runner Up 3 Putri Kartini Jawa Timur",
    date: "13 April 2024",
    excerpt:
      "Selamat kepada Alaicha Rahmadhania Putri Wibisono kelas XI – 2 atas prestasinya pada tingkat Provinsi Jawa Timur meraih Runner Up 3 Puteri Kartini Jawa Timur. Tetap semangat berkarya, semoga sukses selalu!",
    image: "/alaicha.jpeg",
    tags: ["putri", "kartini", "non", "akademik"],
    content: GCHQ,
  },
  {
    id: "senjata",
    title: "Juara I Junior / SMA Putra Seni Tunggal Bersenjata",
    date: "25 Agustus 2023",
    excerpt:
      "Selamat kepada Farel Fajar Dwiutomo kelas XI-3 atas prestasinya sebagai Juara I Junior / SMA Putra Seni Tunggal Bersenjata tingkat nasional pada kejuaraan Pasuruan National Martial Art Championship I yang diselenggarakan di GOR SASANA KRIDA ANORAGA. Tetap semangat berkarya, semoga sukses selalu!",
    image: "/farel.jpeg",
    tags: ["martial", "art", "non", "akademik"],
    content: senjata,
  },
];