### <div align="center">Penjelasan mengenai folder `Lib`</div>

### Apa itu folder `lib`?
Folder `lib` ini adalah tempat di mana saya menyimpan "*alat*" khusus yang membantu membuat situs web lebih mudah diatur dan terlihat rapi. Dalam hal ini, alatnya adalah file [`utils.ts`](/core/lib/utils.ts).

### Apa yang dilakukan file `utils.ts`?
File ini seperti asisten pintar yang bertugas mengatur dan menyusun pakaian digital situs web. Bayangkan kita memiliki berbagai macam baju ([yang dalam hal ini adalah kelas-kelas CSS dari Tailwind CSS](https://tailwindcss.com/docs/utility-first)), asisten ini akan membantu kita memilih dan menggabungkan yang terbaik tanpa tumpang tindih.

### Bagaimana cara kerjanya?
File `utils.ts` memiliki satu *function* utama bernama `cn`. Berikut adalah analogi sederhana tentang cara kerjanya:

1. Mengelola Pilihan:

    - Kita memberikan beberapa pilihan pakaian (kelas CSS) kepada asisten ini,
    - Contohnya: "*Pengen deh kalau Bu Farah pakai baju berwarna kuning, tapi di satu sisi, dia kelihatan oke juga sih kalau dia pakai baju berwana hitam kalau yang berwarna kuning gak cocok*" 🥺

2. Memilih dan Menyusun:

    - Fungsi ini memeriksa semua pilihan yang kita berikan. Jika ada pilihan yang sama atau bertabrakan, asisten ini akan memilih yang paling cocok dan menyusunnya menjadi satu pakaian lengkap

3. Hasil Akhir:

    - Asisten memberikan kita satu set pakaian (kelas CSS yang bersih dan rapi) yang siap digunakan untuk laman web

<br/>

### Mengapa ini penting?
Dalam dunia *WebDev*, sering kali ada __bentrok aturan desain__ ketika kita menambahkan banyak gaya atau kelas (CSS). *Function* `cn` membantu memastikan bahwa gaya yang digunakan tidak saling berbenturan dan hasil akhirnya tetap terlihat rapi dan profesional