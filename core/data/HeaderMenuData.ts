export interface MenuItem {
  name: string;
  href: string;
  target?: string;
  rel?: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export const menus: MenuSection[] = [
  {
    title: "Tentang Kami",
    items: [
      { name: "Sejarah Pendirian Sekolah", href: "/sejarah" },
      { name: "Guru & Tenaga Kependidikan", href: "/gtk" },
    ],
  },
  {
    title: "Blog",
    items: [
      { name: "Berita Kurikulum", href: "/berita_kurikulum" },
      { name: "Berita Kesiswaan", href: "/berita_kesiswaan" },
      { name: "Berita Kehumasan", href: "/berita_kehumasan" },
      { name: "Komite", href: "/komite" },
    ],
  },
  {
    title: "Prestasi Siswa",
    items: [
      {
        name: "Input Prestasi Siswa",
        href: "https://docs.google.com/forms/d/e/1FAIpQLScD-xvJtGLx2XiR0oeiDlBwtXTGlZXJ9mxqyxQpV80fhgZqXA/viewform",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      { name: "Lulusan SNBP tahun 2024", href: "/snbp" },
      { name: "Prestasi Akademik", href: "/akademik" },
      { name: "Prestasi Non-Akademik", href: "/non_akademik" },
      { name: "BIOVATIONS", href: "/biovations" },
    ],
  },
  {
    title: "Aplikasi",
    items: [
      { name: "Info GTK", href: "https://info.gtk.kemdikbud.go.id/", target: "_blank" },
      { name: "Dapodik", href: "http://dapodik.sman17sby.sch.id/", target: "_blank" },
      { name: "Erapor KM", href: "/erapor-km", target: "_blank" },
      { name: "Erapor", href: "http://eraporkm.sman17sby.sch.id/login", target: "_blank" },
      { name: "Quick Edu", href: "/quick-edu", target: "_blank" },
    ],
  },
];