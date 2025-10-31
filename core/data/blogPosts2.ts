import p5 from "@/app/berita_kurikulum/p5.mdx";
import Apple from "@/app/berita_kurikulum/apel-pembukaan.mdx";
import SAS from "@/app/berita_kurikulum/sas.mdx";
import PAT from "@/app/berita_kurikulum/pat.mdx";
import ANBK from "@/app/berita_kurikulum/anbk.mdx";
import ASA from "@/app/berita_kurikulum/asa.mdx";
import SLB from "@/app/berita_kurikulum/slb.mdx";
import hidrponik from "@/app/berita_kurikulum/hidroponik.mdx";
import pleno from "@/app/berita_kurikulum/pleno.mdx";
import WIROSABLENG from "@/app/berita_kurikulum/p5-closing.mdx";
import osn from "@/app/berita_kurikulum/osn.mdx";
import usp from "@/app/berita_kurikulum/usp-bks.mdx";
import uprak from "@/app/berita_kurikulum/uprak.mdx";
import Verification from "@/app/berita_kurikulum/verifikasi.mdx";
import basket from "@/app/berita_kurikulum/basket.mdx";
import admission from "@/app/berita_kurikulum/kelulusan.mdx";
import exchange from "@/app/berita_kurikulum/student-exchange.mdx";

export interface BlogPost2 {
  id: string;
  title: string;
  date: string;
  tags: string[];
  image: string;
  excerpt: string;
  content: React.ComponentType;
}

export const blogPosts: BlogPost2[] = [
  {
    id: "basket",
    title: "Lanjutkan Prestasi Kalian, dan Tetap Semangat Terus!!!",
    date: "25 September 2024",
    excerpt: "Read More...",
    image: "/end-me.jpeg",
    tags: ["basket", "dbl"],
    content: basket,
  },
  {
    id: "penerimaan",
    title:
      "Cek Kelulusan Siswa SMA Negeri 17 Surabaya Tahun Pelajaran 2023/2024",
    date: "06 Mei 2024",
    excerpt: "Read More...",
    image: "/pengumuman.png",
    tags: ["ppdb", "penerimaan"],
    content: admission,
  },
  {
    id: "student-exchange",
    title: "kegiatan Student Exchange, SMAN 17 SURABAYA",
    date: "10 Juli 2023",
    excerpt: "Read More...",
    image: "/exchange.jpeg",
    tags: ["kurikulum", "student", "exchange"],
    content: exchange,
  },
  {
    id: "p-5-smantass",
    title: "Proyek Penguatan Profil Pelajar Pancasila 2024 SMAN 17 Surabaya",
    date: "13 Juli 2024",
    excerpt:
      "Terbaik Pertama hasil karya P5 mengenai Kesetaraan Gender dengan tema Suara Demokrasi dengan tim personil nya di kelas XI- 8, yang terdiri dari:...",
    image: "/apel-p5.jpeg",
    tags: ["p5", "smantass"],
    content: p5,
  },
  {
    id: "apel-p5",
    title: "Apel pembukaan P5",
    date: "27 Mei 2024",
    excerpt: "Selengkapnya...",
    image: "/apel-p5.jpeg",
    tags: ["p5", "smantass"],
    content: Apple,
  },
  {
    id: "sas-ii-bks",
    title: "SAS II-BKS",
    date: "23 Mei 2024",
    excerpt: "Selengkapnya...",
    image: "/sks.jpeg",
    tags: ["sas", "smantass"],
    content: SAS,
  },
  {
    id: "pat-sat-bks",
    title: "PAT-SAT BKS",
    date: "29 April 2024",
    excerpt: "Selengkapnya...",
    image: "/sat-sks.jpg",
    tags: ["pat", "sat"],
    content: PAT,
  },
  {
    id: "akbn",
    title: "Asesmen Nasional Berbasis Komputer",
    date: "28 Agustus 2023",
    excerpt: "Selengkapnya...",
    image: "/sat-sks-2.jpeg",
    tags: ["akbn", "smantass"],
    content: ANBK,
  },
  {
    id: "asa",
    title: "Asesmen Non-Akademik",
    date: "27 September 2023",
    excerpt: "Selengkapnya...",
    image: "/sat-sks-3.jpeg",
    tags: ["asa", "smantass"],
    content: ASA,
  },
  {
    id: "survei-lingkungan-belajar",
    title: "Survei Lingkungan Belajar",
    date: "11 September 2023",
    excerpt: "Selengkapnya...",
    image: "/sat-4.jpg",
    tags: ["survei", "smantass"],
    content: SLB,
  },
  {
    id: "hidroponik",
    title: "Pemanfaatan Hidroponik",
    date: "15 Mei 2023",
    excerpt: "Selengkapnya...",
    image: "/hidroponik.jpeg",
    tags: ["hidroponik", "smantass"],
    content: hidrponik,
  },
  {
    id: "rapat-pleno",
    title: "Rapat Pleno Kelulusan Peserta didik tahun Akademik 2023/2024",
    date: "23 Mei 2024",
    excerpt: "Selengkapnya...",
    image: "/rapat_pleno.jpeg",
    tags: ["rapat", "pleno"],
    content: pleno,
  },
  {
    id: "pembukaan-p5",
    title: "P5 ronde 2",
    date: "4 November 2024",
    excerpt: "Selengkapnya...",
    image: "/penutupan_p5.jpg",
    tags: ["p5", "smantass"],
    content: WIROSABLENG,
  },
  {
    id: "o-s-n",
    title:
      "Membidik Siswa Smantass untuk meroket pada ajang Olimpiade Nasional Nasional",
    date: "23 Febuari 2024",
    excerpt: "Selengkapnya...",
    image: "/osn.jpeg",
    tags: ["osn", "smantass"],
    content: osn,
  },
  {
    id: "usp-bks",
    title: "USP-BKS",
    date: "17 Febuari 2023",
    excerpt: "Selengkapnya...",
    image: "/usp-bks.jpeg",
    tags: ["usp", "smantass"],
    content: usp,
  },
  {
    id: "uprak-xii",
    title: "UPRAK kelas XII",
    date: "6 Febuari 2023",
    excerpt: "Selengkapnya...",
    image: "/uprak_xii.jpeg",
    tags: ["uprak", "smantass"],
    content: uprak,
  },
  {
    id: "verifikasi-kelulusan",
    title: "Verifikasi Kelulusan",
    date: "5 Mei 2023",
    excerpt: "Selengkapnya...",
    image: "/verification.jpeg",
    tags: ["verifikasi", "smantass"],
    content: Verification,
  },
];