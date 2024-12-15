### Penjelasan

Anggaplah kita ingin menulis pos berupa rangkaian penggunaan kurikulum baru. Kita bisa menulis pos tersebut dengan cara:

1. buatlah file berformat .``mdx``. Misalnya, `kurikulum-baru.mdx`,
2. kemudian untuk menghubungkan file `kurikulum-baru.mdx` ke file `page.tsx`, kita bisa menuliskannya dalam bentuk:
```ts
import kurikulumBaru from "../berita_kurikulum/kurikulum-baru.mdx"
```
3. Sekedar informasi, saya menyarankan untuk mengawali penaaman identitas file (*dalam konkeks ini, file `kurikulum-baru.mdx`*) dalam huruf kapital. Harapannya ini bisa memudahkan kompiler TypeScript untuk memvalidasi identitas file `.mdx` kita.
4. Kemudian, kita tinggal membuat kode yang panjenengan bisa copy:
```ts
{
    id: "kurikulum-baru",
    title: "Kegiatan Belajar mengajar dengan pemakaian kurikulum baru",
    date: "27 November 2024",
    excerpt:
    /*Anggaplah excerpt seperti baca selengkapnya atau Read More dalam sebuah pos blog*/
      "Terbaik Pertama hasil karya P5 mengenai Kesetaraan Gender dengan tema Suara Demokrasi dengan tim personil nya di kelas XI- 8, yang terdiri dari:...",
    /*Kita bisa mengimpor gambar dari folder public, karena folder public adalah tempat dimana semua foto-foto disimpan*/
    image: "/apel-p5.jpeg",
    /*Anggaplah tags seperti kata kunci dalam sebuah pos blog*/
    tags: ["kurikum", "smantass", "baru"],
    /*Anggaplah content seperti konten pos blog*/
    content: kurikulumBaru,
  },
```

5. Jujur, saya sendiri sebenarnya tidak tahu bagaimana setiap *funtion* dan *logic* yang saya buat bekerja dengan sempurna :)