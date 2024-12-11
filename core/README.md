### <div align="center">Penjelasan</div>
#### <div align="center">Untuk teks dalam bahasa ![terjemahan bahasa Inggris](https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/20px-Flag_of_the_United_Kingdom_%283-5%29.svg.png?20230715230526) bisa melihat ke deskripsi [paling awal](/README.md)</div>
##### <div align="center">Untuk keterangan bersifat teknis, bisa dilihat dalam format `.md` dan BUKAN `.mdx`</div>
---

### Jadi, apa ini?
Repositori ini seperti *folder* tempat saya menyimpan semua file, gambar, dan kode untuk situs web yang saya usulkan untuk SMA Negeri 17 Surabaya. Meskipun struktur kodenya mungkin belum sempurna (dan mungkin perlu penyesuaian sebelum dipublikasikan secara online), ini adalah fondasi untuk membangun proyek ini.

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
         /run_all.bash
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

1. Segala jenis Virtual *Integrated Development Environment*
   
   Secara default, IDE (*Integrated Development Environment*) adalah editor teks gratis dan sumber terbuka yang terjangkau dan memungkinkan kita untuk menyimpan file langsung ke *cloud*. Sebagai seorang *enthusiast*, saya menggunakan alat ini karena mereka memungkinkan saya untuk mengedit kode secara online tanpa perlu menginstal perangkat lunak tambahan di komputer saya. Namun, alasan utama saya mengandalkan ini adalah karena laptop saya kesulitan menjalankan aplikasi pengkodean berat dan sering melambat atau mengalami *error* :)

3. [*Runtime*](https://bun.sh/)
   
   Dalam dunia webdev, "*runtime*" merujuk pada periode ketika sebuah skrip atau program sedang aktif berjalan di browser atau server, mengeksekusi kode yang ditulis oleh pengembang. Ini penting karena di sinilah program berinteraksi dengan pengguna, menangani data, atau melakukan tugas-tugas secara nyata (*real time*). Sekarang, saya sebagai yang membuat proyek ini mengandalkan lingkungan *runtime* untuk mengeksekusi kode secara dinamis, alih-alih hanya menyiapkan file statis, memungkinkan fitur-fitur seperti interaksi pengguna atau mengambil data dari database.
   
   Nah, sekarang imajinasikan runtime seperti sebuah pertunjukan langsung di teater. Sebelum pertunjukan, semua skrip, kostum, dan properti sudah dipersiapkan dan dilatih, mirip dengan bagaimana kode ditulis dan diuji sebelumnya. Tetapi pertunjukan yang sebenarnya, di mana aktor membawa cerita ke hidup di depan penonton, adalah runtime. Inilah saat segalanya terjadi secara nyata, sama seperti aplikasi web yang memproses input, menampilkan hasil, atau berinteraksi dengan server saat pengguna terlibat dengannya.

4. [Bahasa](https://www.typescriptlang.org/) & [Saudara kembar](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
   
   Secara default, JavaScript (bukan bahasa Jawa yang "*hana caraka, dhata sawala*") adalah "*bahasa web*". Bahasa ini hadir di setiap browser dan sangat penting untuk membuat situs web interaktif. Namun, seiring dengan berkembangnya proyek menjadi lebih besar dan kompleks, JavaScript bisa menjadi lebih sulit untuk dikelola karena ia tidak memeriksa jenis kesalahan tertentu (*bug*) saat menulis kode. Di sinilah TypeScript hadir. TypeScript adalah seperti "*saudara kembar, tapi jauh lebih ambis*" dari JavaScript. Bahasa ini di buat di atas Bahasa JavaScript dengan menambahkan fitur seperti pemeriksaan tipe, yang membantu dev mengetaui bug lebih awal, dan alat yang lebih baik untuk mengorganisasi basis kode yang besar. TypeScript membuatnya lebih mudah untuk memahami, memelihara, dan menskalakan proyek sambil tetap bekerja dengan mulus dengan JavaScript. *Developer* dapat menulis kode TypeScript, dan itu akan diubah (atau “*dikompilasi*”) menjadi JavaScript reguler agar dapat dijalankan di browser atau server. Banyak pengembang yang menyukai TypeScript karena memberi mereka kepercayaan bahwa kode mereka akan berperilaku seperti yang diharapkan, yang mengurangi bug dan mempercepat pengembangan dalam jangka panjang. Tetapi pada saat yang sama, pengembang tetap menyebutkan JavaScript karena TypeScript tidak akan ada tanpa JavaScript. Pada akhirnya, semua kode TypeScript harus menjadi JavaScript agar dapat bekerja di web. 
   
   Bayangkan JavaScript sebagai sketsa bebas tangan, cepat, fleksibel, dan kita bisa menggambar apapun yang Anda inginkan. Tetapi saat gambar kita menjadi lebih detail dan Anda menginginkan ketelitian, menggambar bebas menjadi sulit. TypeScript seperti menambahkan penggaris dan *template* ke dalam alat kita. Kita masih bisa menggambar bebas, tetapi sekarang Anda memiliki alat yang membantu kita menggambar garis lurus dan menjaga proporsi, menjadikan hasil akhir lebih halus dan dapat diandalkan. Sama seperti setiap proyek TypeScript pada akhirnya bergantung pada JavaScript untuk bekerja, bahkan gambar yang paling tepat dimulai dengan garis pensil yang sederhana.

6. [*Styling*](https://tailwindcss.com/)
   
   [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) (_Cascading Style Sheets_) adalah bahasa standar untuk menata situs web. CSS memungkinkan kita untuk mendefinisikan bagaimana elemen di halaman harus terlihat, seperti warna, ukuran, tata letak, dan lainnya. CSS sangat kuat dan esensial, tetapi seiring berkembangnya proyek, mengelola gaya bisa menjadi frustasi. Salah satu keluhan terbesar developer tentang CSS adalah betapa sulitnya menjaga semuanya tetap teratur. Gaya bisa saling bertentangan, terutama di proyek yang lebih besar, dan mencari tahu mengapa sesuatu terlihat salah bisa terasa seperti "*membuka benang kusut besar*". Masalah lainnya adalah konsistensi, memastikan setiap halaman atau komponen terlihat kohesif sering kali memerlukan pekerjaan yang berulang. Di sinilah alat seperti *Tailwind* hadir. Alih-alih menulis file CSS kustom yang panjang, kita tinggal menata elemen dengan menambahkan nama kelas spesifik seperti `bg-blue-500` (untuk latar belakang biru) atau `text-center` (untuk meratakan teks). Pendekatan ini membuat gaya dapat digunakan kembali, mengurangi kemungkinan konflik, dan mempercepat pengembangan. Ini juga membuat kode kita lebih dapat diprediksi dan lebih mudah untuk dipelihara.
   
   Bayangkan CSS seperti memiliki kotak perlengkapan kerajinan, kita memiliki cat, kuas, kertas, dan lem, dan kita bisa membuat apapun yang Anda inginkan dari awal. Ini kreatif, tetapi saat proyek kita tumbuh, menjadi berantakan, dan menemukan alat yang tepat di kotak kita membutuhkan waktu lebih lama. *Tailwind*, di sisi lain, seperti memiliki kotak alat yang terorganisir dengan baik, di mana setiap alat memiliki tujuan spesifik dan diberi label dengan jelas. Alih-alih menghabiskan waktu mencari perlengkapan, kita mengambil apa yang Anda butuhkan dan membangun lebih cepat sambil menjaga semuanya tetap rapi dan konsisten.

8. [Kerangka Kerja](https://nextjs.org/)
   
   Secara default, JavaScript memungkinkan developer untuk membuat situs web interaktif, tetapi saat laman menjadi lebih kompleks, mengelola semua bagian yang bergerak menjadi tantangan. [*React*](https://react.dev/) diperkenalkan sebagai pustaka, yaitu sekumpulan alat yang dirancang untuk mempermudah pembuatan antarmuka pengguna dengan memecahnya menjadi komponen yang dapat digunakan kembali. Tetapi, meskipun *React* sangat baik untuk membangun bagian-bagian laman, itu bukan solusi lengkap untuk membuat laman secara keseluruhan. Di sinilah "*kerangka kerja*" masuk. Dalam dunia webdev, kerangka kerja adalah seperti struktur yang sudah dibangun yang menyediakan pengembang dengan alat dan aturan untuk membangun laman wesbite lebih efisien. Kerangka kerja biasanya menangani hal-hal seperti *routing* (navigasi antar halaman), manajemen status (pelacakan data), dan optimasi kinerja, sehingga pengembang tidak perlu membuat sistem ini dari awal. *Next* adalah kerangka kerja yang dibangun di atas *React*. Ini mengambil kemampuan React dan menambahkan fitur seperti server-side rendering (yang membantu dengan [SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) dan kecepatan halaman), *routing* bawaan, dan integrasi mudah untuk API atau file statis. Fitur-fitur ini menyelesaikan banyak masalah yang dihadapi pengembang saat menggunakan *React* sendirian, menjadikan *Next* pilihan yang sangat baik untuk membangun laman web modern.

10. [Pustaka komponen](https://ui.shadcn.com/)
   
    Secara default, ketika membangun antarmuka pengguna, developer menggunakan kerangka kerja seperti *Tailwind* atau pustaka seperti React untuk menata dan mengelola komponen. Alat-alat ini mempermudah pembuatan situs web yang menarik dan interaktif. Namun, saat proyek berkembang, mengelola sistem desain dan menjaga konsistensi antar komponen bisa menjadi tantangan. Di sinilah pustaka komponen hadir. Pustaka komponen menyediakan blok bangunan yang dapat digunakan kembali dan sudah dirancang sebelumnya (seperti tombol, modal, dan formulir) yang membantu pengembang menjaga tampilan dan nuansa konsisten di seluruh aplikasi mereka. Namun, meskipun menggunakan pustaka komponen, developer sering menghadapi kompromi, beberapa pustaka kaku dan tidak memungkinkan banyak penyesuaian, sementara yang lain terlalu minimalis, membutuhkan banyak pekerjaan ekstra. shadcn/ui dibuat untuk mengatasi masalah ini. Ini menggabungkan fleksibilitas *Tailwind* dengan kekuatan dari pustaka komponen. Alih-alih hanya memberikan komponen yang sudah tetap, ia menyediakan kumpulan komponen yang dirancang dengan baik, dapat diakses, yang bisa kita sesuaikan dan miliki. Ini berarti komponen tidak terkunci pada gaya atau pustaka tertentu—mereka berintegrasi dengan mulus ke dalam proyek kita dan tetap sepenuhnya dapat disesuaikan seiring laman web kita berkembang.

    Bayangkan kita sedang membangun rumah. Furnitur yang sudah jadi seperti pustaka komponen biasa, mudah digunakan tetapi sulit dimodifikasi jika kita ingin sesuatu yang unik. *Tailwind*, di sisi lain, seperti memiliki bahan mentah—kayu, paku, dan alat—untuk membuat furnitur kita , memberi kita kontrol penuh tetapi membutuhkan waktu dan usaha. shadcn/ui seperti menerima kit furnitur berkualitas tinggi yang dapat disesuaikan. Potongan-potongannya siap dirakit, tetapi kita bisa melukis, menyesuaikan, dan menyusunnya sesuka kita, menjadikannya milik kita sambil menghemat waktu.

12. [*MDX*](https://mdxjs.com/)
   
    Secara default, [*Markdown*](https://daringfireball.net/projects/markdown/syntax) adalah bahasa sederhana yang digunakan untuk menulis konten di web. Ini sangat baik untuk membuat dokumen seperti file README atau posting blog karena mudah dibaca dan ditulis. Namun, *Markdown* sendiri memiliki keterbatasan, meskipun bekerja dengan baik untuk format teks dasar, ia kesulitan ketika kita perlu menambahkan fungsionalitas dinamis, seperti menyematkan komponen interaktif atau menggunakan elemen *React* dalam konten Anda. Inilah fungsi kehadiran MDX (*Markdown* + [*JSX*](https://react.dev/learn/writing-markup-with-jsx)). *MDX* adalah versi yang diperluas dari *Markdown* yang memungkinkan kita menggunakan komponen *React* langsung di dalam file *Markdown* kita. Misalnya, di file MDX, kita bisa menulis teks biasa bersama dengan komponen kustom seperti grafik, tombol, atau formulir, semuanya dalam satu tempat. MDX sangat populer dalam proyek-proyek seperti situs dokumentasi atau blog karena memungkinkan pengembang untuk mengintegrasikan kode dan konten secara mulus. Alih-alih memisahkan keduanya ke dalam file yang berbeda, kita bisa menjaga semuanya dalam satu file, menjadikannya lebih mudah untuk dikelola dan dipelihara :)
   

### Apa lagi yang perlu diketahui?
Repositori ini dilindungi oleh Lisensi [MIT](/LICENSE). Artinya, Anda bebas menggunakan, menyalin, memodifikasi, dan mendistribusikan kode ini selama kita menyertakan lisensi aslinya. Ini seperti meminjam alat dari seseorang, tetapi tetap memberikan penghargaan kepada mereka.