import MLPLS2024 from "@/app/agenda_sekolah/MPLS-2024-smantass.mdx";
import muharram2024 from "@/app/agenda_sekolah/muharram-2024.mdx";
import p5 from "@/app/agenda_sekolah/p5.mdx";
import p5November from "@/app/agenda_sekolah/p5-november.mdx";
import blood from "@/app/agenda_sekolah/gedor.mdx";
import SKI from "@/app/agenda_sekolah/aksi-6.mdx";
import hariGuru from "@/app/agenda_sekolah/hari-guru.mdx";

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  tags: string[];
  image: string;
  excerpt: string;
  content: React.ComponentType;
}

export const blogPosts: BlogPost[] = [
  {
    id: "hari-guru",
    title: "Upacara hari Guru 2024",
    date: "25 November 2024",
    excerpt: "Read More...",
    image: "/hari-guru/20241125_072755-1536x1152.jpg",
    tags: ["hari", "guru"],
    content: hariGuru,
  },
  {
    id: "MPLS-2024-smantass",
    title: "Kegiatan MPLS 2024 di SMAN 17 Surabaya",
    date: "18 Juli 2024",
    excerpt:
      "Masa Pengenalan Lingkungan Sekolah (MPLS) di SMA Negeri 17 Surabaya untuk tahun ajaran 2024/2025 merupakan momentum yang sangat dinanti bagi seluruh peserta didik baru...",
    image: "/mpls.jpeg",
    tags: ["mpls", "smantass", "orientasi"],
    content: MLPLS2024,
  },
  {
    id: "Muharram 2024",
    title: "Peringatan tahun baru Islam 1 Muharram 1446 H di SMAN 17 Surabaya",
    date: "26 Juli 2024",
    excerpt:
      "Tahun Baru Islam atau 1 Muharram menjadi momen penting bagi umat Islam untuk merayakan kesempatan baru sekaligus merenungkan arti hijrah...",
    image: "/muharram_1.jpeg",
    tags: ["perayaan", "muharram", "hari suci"],
    content: muharram2024,
  },
  {
    id: "p5",
    title: "Proyek penguatan profil pelajar Pancasila di SMAN 17 Surabaya",
    date: "09 September 2024",
    excerpt:
      "Projek Penguatan Profil Pelajar Pancasila (P5) adalah inisiatif yang bertujuan untuk menggali, memahami, dan menerapkan nilai-nilai Pancasila dalam kehidupan sehari-hari para pelajar...",
    image: "/p5_1.jpeg",
    tags: ["p5", "kreativitas", "tanpa batas"],
    content: p5,
  },
  {
    id: "p5-ronde-2",
    title:
      "Proyek penguatan profil pelajar Pancasila di SMAN 17 Surabaya Ronde 2",
    date: "03 November 2024",
    excerpt:
      "Projek Penguatan Profil Pelajar Pancasila (P5) adalah inisiatif yang bertujuan untuk menggali, memahami, dan menerapkan nilai-nilai Pancasila dalam kehidupan sehari-hari para pelajar...",
    image: "/p5-1_2.jpeg",
    tags: ["p5", "kreativitas", "tanpa batas"],
    content: p5November,
  },
  {
    id: "donor-darah",
    title: "✨ GEDOR 2K24 – Gerakan Donor Darah PMR SMAN 17 Surabaya ✨",
    date: "19 September 2024",
    excerpt: "informasi seputar donor darah bisa dibaca di post berikut...",
    image: "/gedor_1.png",
    tags: [
      "sharing is caring",
      "pmr",
      "SaveLives",
      "GEDOR2K24",
      "#PMRSMAN17Surabaya",
    ],
    content: blood,
  },
  {
    id: "aksi-6",
    title: "Kegiatan SKI-SMAN 17 Surabaya",
    date: "12 Oktober 2024",
    excerpt:
      "Kegiatan AKSI (Apresiasi Kreatif dan Seni Islam) yang di selenggarakan oleh SKI SMAN 17 Surabaya...",
    image: "/aksi_6.jpeg",
    tags: ["tahfid", "banjari", "kaligrafi"],
    content: SKI,
  },
];