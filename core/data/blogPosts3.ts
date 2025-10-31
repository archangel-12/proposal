import achievement from "@/app/berita_kesiswaan/selamat-atas-prestasi-gemilang.mdx";
import cawaka from "@/app/berita_kesiswaan/cawaska.mdx";
import ppdb from "@/app/berita_kesiswaan/ppdb.mdx";
import istighosa from "@/app/berita_kesiswaan/istighosa.mdx";
import gchq from "@/app/berita_kesiswaan/qchq.mdx";
import pondok1 from "@/app/berita_kesiswaan/pondok1.mdx";
import pondok2 from "@/app/berita_kesiswaan/pondok2.mdx";
import storica from "@/app/berita_kesiswaan/storica.mdx";
import teacher from "@/app/berita_kesiswaan/teachers_day.mdx";
import isra from "@/app/berita_kesiswaan/skintas.mdx";
import X9 from "@/app/berita_kesiswaan/selamat-atas-prestasi-gemilang.mdx";

export interface BlogPost3 {
  id: string;
  title: string;
  date: string;
  tags: string[];
  image: string;
  excerpt: string;
  content: React.ComponentType;
}

export const blogPosts: BlogPost3[] = [
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
    id: "prestasi-cemerlang",
    title: "Prestasi Cemerlang SMAN 17 Surabaya",
    date: "9 September 2024",
    excerpt:
      "SELAMAT ATAS PRESTASI YANG SUDAH DI CAPAI DENGAN CEMERLANG, TERIMAKASIH KEPADA SISWA DAN SISWI YANG BERPRESTASI DI BIDANG PENCAK SILAT, PASKIBRAKA, PADUAN SUARA...",
    image: "/prestasi_1.jpeg",
    tags: ["another", "achivement"],
    content: achievement,
  },
  {
    id: "audiensi-capaska",
    title: "Audiensi SMAN 17 Surabaya 2024",
    date: "8 Juni 2024",
    excerpt:
      "audiensi capaska Nasional dengan Bapak Sekretaris Daerah Kota Surabaya bersama...",
    image: "/audiensi_5.jpeg",
    tags: ["audiensi"],
    content: cawaka,
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
    id: "highschool-ambassador",
    title: "Seleksi Duta SMA 2024",
    date: "8 Juni 2024",
    excerpt: "baca selengkapnya..",
    image: "/qchq-ambassador.jpeg",
    tags: ["seleksi", "duta", "sma"],
    content: gchq,
  },
  {
    id: "istighosa",
    title: "Istighosah Smantass",
    date: "29 April 2024",
    excerpt: "read me...",
    image: "/istiqomah.jpeg",
    tags: ["", "istighosah"],
    content: istighosa,
  },
  {
    id: "pelaksanaan-pondok-ramadhan-xi",
    title: "Pelaksanaan Pondok Ramadhan Kelas XI",
    date: "3 April 2024",
    excerpt: "Read More...",
    image: "/pondok_1.jpeg",
    tags: ["pondok", "ramadhan"],
    content: pondok1,
  },
  {
    id: "pelaksanaan-pondok-ramadhan-x",
    title: "Pelaksanaan Pondok Ramadhan Kelas X",
    date: "1 April 2024",
    excerpt: "Read More...",
    image: "/pondok_5.jpeg",
    tags: ["pondok", "ramadhan"],
    content: pondok2,
  },
  {
    id: "be-the-champion",
    title:
      "BE THE CHAMPION AND LET’S CARVE HISTORY WITH SMANTASS COMPETITION XVII INCISIONE STORICA",
    date: "8 Maret 2024",
    excerpt: "Read More...",
    image: "/help_me.jpeg",
    tags: ["be", "the", "champion"],
    content: storica,
  },
  {
    id: "hari-guru-nasional",
    title:
      "PERAYAAN HARI GURU NASIONAL 2023, SMANTASS HADIRKAN DUA MAESTERO PENGABDI ILMU INSPIRATIF",
    date: "27 November 2023",
    excerpt: "Read More...",
    image: "/isra_4.jpeg",
    tags: ["hari", "guru"],
    content: teacher,
  },
  {
    id: "skintass-isra",
    title: "SKINTASS GELAR PERINGATAN ISRA’ MI’RAJ",
    date: "2 Febuari 2024",
    excerpt: "Read More...",
    image: "/isra_!.jpg",
    tags: ["skintas", "isra"],
    content: isra,
  },
];