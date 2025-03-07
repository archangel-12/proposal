### <div align="center">Penjelasan</div>
#### <div align="center">Untuk teks dalam bahasa ![terjemahan bahasa Inggris](https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/20px-Flag_of_the_United_Kingdom_%283-5%29.svg.png?20230715230526) bisa melihat ke deskripsi [paling awal](/README.md)</div>
##### <div align="center">Untuk keterangan bersifat teknis, bisa dilihat dalam format `.md` dan BUKAN `.mdx`</div>
---

### Jadi, apa ini?
Repositori ini seperti *folder* tempat saya menyimpan semua file, gambar, dan kode untuk situs web yang saya usulkan untuk [SMA Negeri 17 Surabaya](https://maps.app.goo.gl/LTp8YwdNVenDtcFr9). Meskipun struktur kodenya mungkin belum sempurna (dan mungkin perlu penyesuaian sebelum dipublikasikan secara online), ini adalah fondasi untuk membangun proyek ini.

### Mengapa saya melakukan ini?
Proyek ini adalah cara saya menunjukkan rasa terima kasih kepada sekolah tempat saya magang selama hampir empat bulan. Pengalaman tersebut mengajarkan saya banyak hal, tidak hanya tentang pengembangan web, tetapi juga bagaimana bekerja dengan siswa dan memahami dunia mereka. Saya tahu bahwa saya bukan guru terbaik, tetapi pengalaman ini memberi saya pelajaran berharga, dan saya ingin memberikan sesuatu kembali dengan cara terbaik yang saya bisa.

### Bagaimana mengunduh dan melihat kumpulan folder dan file dengan benar?

- Lihat __kode sumber secara langsung__

   Bisa dengan mengklik tombol titik `.` atau tinggal mengubah link repo menjadi `.dev`. Pada akhirnya, tinggal mengubah domain dari `.com` menjadi `.dev`. [Github](https://github.com/), selaku platform tempat saya mengarspip semua proyek saya memperkenalkan konsep ini agar proses edit kode menjadi lebih mudah. Jika masih tidak mengerti bagaimana cara kerjanya, bisa dilihat demonstrasi di bawah atau penjelasan secara lengkap di link [ini](https://github.com/github/dev)

   ![github dev](https://user-images.githubusercontent.com/856858/130119109-4769f2d7-9027-4bc4-a38c-10f297499e8f.gif)

- Unduh?

  Ada berbagai cara untuk mengunduh dan melihat kode sumber untuk perangkat lokal. Saya mengkategorikan cara __Konvesional__ dan cara __Cepat__. Mari kita mulai dengan cara __konvensional__.


  - ### Konvensional
      1. Pertama, mari kita unduh folder yang ada dalam repositori dengan cara menekan tombol `Code <>` kemudiann menekan *Download Zip Folder*. Ini akan mengunduh kumpulan file dan folder yang ada dalam bentuk zip folder. Ingatlah kita mengunduh file dan folder dari repositori ini saja, jangan samakan seperti kita mengunduh virus ataupun *malware* karena pada dasarnya, kita tidak mengunduh virus, melainkan file dan folder di repo ini saja, semoga bisa dimengerti
      2. Pertama, mari kita mengunduh platform yang akan kita gunakan, dimulai dari [editor untuk kode](https://code.visualstudio.com/), dan yang terakhir, [*runtime* untuk mengeksekusi kode](https://nodejs.org/en)
      3. Jika sudah melewati tahap pertama, maka untuk saatnya kita tinggal memasukkan semua folder yang sudah di unduh ke dalam editor kode. Tinggal masukkan saja, maka editor kode akan insialisasi semua file yang ada dalam folder tersebut dengan sendirinya
      4. Saatnya kita mengunduh *plugin* yang akan kita gunakan. Kita bisa menekan kombinasi tombol `CTRL + SHIFT + tanda miring` di keyboard kita. Tentu saja sesuatu muncul secara tiba-tiba dari bawah, dan ini dinamakan `Terminal`. Terminal inilah tempat kita akan menulis dan memberitahukan alat-alat apa saja yang akan kita butuhkan nantinya selama proses melihat, ataupun jika ada yang berniat, mengedit kode
      5. Nah, jika sudah melewati tahap ketiga, kita bisa menulis sesuatu seperti:
         ```sh
         cd core
         ```
         ini akan mengarahkan terminal ke folder `core`. Karena disitulah saya menyimpan file dan semuanya

      6. Selanjutnya, kita tinggal mengunduh semua yang kita perlukan, yaitu dengan mengetik:
         ```sh
         ./run.sh
         ```
         ini akan menyuruh terminal untuk mengunduh segala jenis alat dan *plugin* yang kita perlukan

      7. Selamat :) kita sudah berada di tahap konvensional terakhir. Jika sudah melewati tahap-tahap sebelumnya, maka kita tinggal menekan link *localhost* yang berformat `http://localhost:3000/`. Selamat melihat-lihat :)


   - ### Cara Cepat

      Nah, semenjak Github diakuisi oleh [Microsoft](https://www.nytimes.com/2018/06/04/technology/microsoft-github-cloud-computing.html) dan ditambah pandemi Covid, Github memperkenalkan [*Codespaces*](https://github.com/features/codespaces). Codespaces inilah yang saya maksud dalam konsep IDE di point alat dan plugin. Lebih tepatnya, *Virtual IDE*. Ini bermanfaat sekali bagi saya yang tidak memiliki laptop dengan performa cepat. Kenapa? agar saya bisa mengedit, menyimpan, dan mengunduh alat-alat yang saya butuhkan tanpa harus konfigurasi langsung di laptop saya yang dimana, payah jika ingin mengedit kode :). Berikut jika ingin menerapkan cara cepat:

      1. Mari kita buat akun Github Jika ini [pertama kali](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github)nya mengakses Github, maka kita harus membuat akun. Pilihan pembuatan akun baru bisa darimana saja, bisa dengan memakai email dari Google, Apple, atau Facebook
      2. Jika sudah melewati tahap pertama, maka kita langsung menuju Codespaces, dengan menekan `Code <>` dan Codespaces. Harusnya pilihan Codespaces ada di sebelah opsi `local`
      3. Jika sudah ketemu, kita tinggal menekan "*Create codespace on main*". Github mungkin memberikan opsi untuk *forking* repositori, akan tetapi jika tidak menemukan *warning* atau semacamnya, maka kita berada di jalur yang benar
      4. Jika sudah melewati cara ketiga, maka untuk sejenak kita biarkan Github untuk inisialisi file dengan sendirinya
      5. Oke, tahap kelima dan setelahnya jauh lebih mudah setelah ini. Jika Codespace sudah siap, maka hal yang kita lakukan adalah dengan membuka terminal, yang dimana, cara membukanya sama seperti poin no.4 di cara konvensional
      6. Tahap terakhir tinggal mengaplikasikan metode yang sama seperti poin no.5 di cara konvensional...

      Ini adalah demonstrasi bagaimana cara menggunakan Codespace:

      ![github codespace](https://luke.geek.nz/assets/images/OpenCodespace-7ded5b93f6b3d8f25a98c42f2503235b.gif)

### Untuk selanjutnya, segala bentuk dokumentasi (dalam kasus ini, segala yang dalam bentuk file `README.md`) akan ditulis dalam bahasa Inggris dikarenakan, jujur, saya lebih nyaman memakai bahasa Inggris jika ber-urusan dalam hal teknis, ditambah banyak perbendaharaan kata dalam bahasa Indonesia tidak sekaya seperti bahasa Inggris.... Sekian dan harap dimaklumi :)

### Alat dan plugin apa saja yang saya gunakan saat membuat proposal website ini?

   1. Segala jenis *IDE* berbasis *virtual* – Menggunakan [Gitpod](https://www.gitpod.io/) atau [Project IDX](https://idx.dev/) oleh Google sebagai lingkungan pengembangan berbasis cloud.

   2. *Runtime* – Memakai [Bun](https://bun.sh/) karena performanya yang cepat dan efisien.

   3. Kerangka kerja – mengandalkan [Next.js](https://nextjs.org/) untuk fitur yang kuat serta dukungan [server-side rendering](https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering).

   4. *Styling* – Menggunakan tailwind.css sebagai solusi styling berbasis [*utility-first*](https://tailwindcss.com/docs/styling-with-utility-classes).

   5. Pustaka komponen – Menggunakan [ui](https://ui.shadcn.com/) untuk mempercepat pengembangan antarmuka pengguna.

   6. Bahasa – Menggunakan [TypeScript](http://typescriptlang.com/)

   7. Penulisan Konten – Menggunakan [MDX](https://mdxjs.com/) untuk mengintegrasikan Markdown dengan [JSX](https://react.dev/learn/writing-markup-with-jsx) agar pengalaman menulis konten lebih fleksibel.

   8. AI untuk mencari referensi

### Apa lagi yang perlu diketahui?
Repositori ini dilindungi oleh Lisensi [MIT](/LICENSE). Artinya, Anda bebas menggunakan, menyalin, memodifikasi, dan mendistribusikan kode ini selama kita menyertakan lisensi aslinya. Ini seperti meminjam alat dari seseorang, tetapi tetap memberikan penghargaan kepada mereka.

- [![let it happen](https://github.com/archangel-12/proposal/actions/workflows/main.yml/badge.svg?event=workflow_dispatch)](https://github.com/archangel-12/proposal/actions/workflows/main.yml)

- [![CodeQL](https://github.com/archangel-12/proposal/actions/workflows/github-code-scanning/codeql/badge.svg?branch=master)](https://github.com/archangel-12/proposal/actions/workflows/github-code-scanning/codeql)