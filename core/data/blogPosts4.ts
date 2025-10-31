import kunjunganDharmawanita from "@/app/berita_kehumasan/kunjungan-dharmawanita-ke-pabrik-fiesta.mdx";
import ppdb from "@/app/berita_kesiswaan/ppdb.mdx";
import purnawidya from "@/app/berita_kehumasan/purnawidya.mdx";
import hariPendidikan from "@/app/berita_kehumasan/hari-pendidikan.mdx";
import bestCostume from "@/app/berita_kehumasan/best-costume.mdx";
import halalBihalal from "@/app/berita_kehumasan/halal-bihalal.mdx";
import sumpahPemuda from "@/app/berita_kehumasan/sumpah-pemuda.mdx";
import lombaGuru from "@/app/berita_kehumasan/lomba-guru.mdx";

export interface BlogPost4 {
  id: string;
  title: string;
  date: string;
  tags: string[];
  image: string;
  excerpt: string;
  content: React.ComponentType;
}

export const blogPosts: BlogPost4[] = [
  {
    id: "kunjungan-dharmawanita-fiesta",
    title: "Kunjungan Dharmawanita ke Pabrik Fiesta",
    date: "30 April 2024",
    excerpt:
      "Kunjungan Dharmawanita SMAN 17 Surabaya ke Pabrik Fiesta di Ngoro, Kabupaten Mojokerto memberikan wawasan baru tentang proses produksi makanan...",
    image: "/hiya.jpeg",
    tags: ["kegiatan", "dharmawanita", "kunjungan"],
    content: kunjunganDharmawanita,
  },
  {
    id: "p-p-d-b",
    title: "PPDB SMAN 17 Surabaya",
    date: "30 Mei 2024",
    excerpt: "informasi ppdb bisa dilihat di post ini...",
    image: "/ppdb_1.jpeg",
    tags: ["ppdb", "pendaftaran"],
    content: ppdb,
  },
  {
    id: "purnawidya",
    title: "PURNAWIDYA SMA NEGERI 17 SURABAYA TAHUN AJARAN 2023/2024",
    date: "22 Mei 2024",
    excerpt: "Read More...",
    image: "/end_to_last.jpeg",
    tags: ["kelulusan", "kehumasan"],
    content: purnawidya,
  },
  {
    id: "hari-pendidikan",
    title: "PELAKSANAAN UPACARA BENDERA MEMPERINGATI HARI PENDIDIKAN NASIONAL",
    date: "02 Mei 2024",
    excerpt: "Read More...",
    image: "/hari-pendidikan.jpeg",
    tags: ["kehumasan", "hari", "pendidikan"],
    content: hariPendidikan,
  },
  {
    id: "best-costume",
    title:
      "BEST COSTUME KATEGORI GURU PADA MOMEN HARI PENDIDIKAN NASIONAL DAN HARI KARTINI 2024",
    date: "09 Mei 2024",
    excerpt: "Read More...",
    image: "/best-costume.jpeg",
    tags: ["kehumasan", "hari", "pendidikan", "kartini"],
    content: bestCostume,
  },
  {
    id: "halal-bihalal",
    title: "Halal Bihalal SMAN 17 Surabaya",
    date: "22 April 2024",
    excerpt: "Read More...",
    image: "/halal-bihalal.jpeg",
    tags: ["kehumasan", "halal", "bihalal"],
    content: halalBihalal,
  },
  {
    id: "sumpah-pemuda",
    title: "UPACARA MEMPERINGATI HARI SUMPAH PEMUDA",
    date: "14 Maret 2024",
    excerpt: "Read More...",
    image: "/sumpah-pemuda.jpeg",
    tags: ["Kehumasan", "hari", "sumpah", "pemuda"],
    content: sumpahPemuda,
  },
  {
    id: "lomba-guru",
    title: "KESERUAN LOMBA GURU PADA SAAT MOMEN AGUSTUSAN DI SMAN 17 SURABAYA",
    date: "12 Maret 2024",
    excerpt: "Read More...",
    image: "/lomba-guru.jpeg",
    tags: ["kehumasan", "lomba", "guru"],
    content: lombaGuru,
  },
];