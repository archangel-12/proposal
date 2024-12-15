### <div align="center">how to write a new post?</div>
---

#### 1. Now, imagine we want to make a new post. For example, the name will be ``lomba-komputer.mdx`` (*worth to mention the file format must be in mdx instead of a plain markdown file because it'll be easier for us to make a difference*),

#### 2. Of course, when it comes to presenting it to the web, we must import our file to the actual code file. which is the [``page.tsx``](./page.tsx) file. Now, let's do the import:

```ts
 import LombaKomputer from "../non_akademik/lomba-komputer.mdx"
```

#### 3. Then, let's create the description of this new created post. For example:

```ts
{
    id: "lomba-komputer",
    title: "SELAMAT ATAS PRESTASI YANG GEMILANG",
    date: "28 July 2025",
    excerpt: "SMAN 17 Surabaya mengucapkan selamat atas prestasi untuk ananda bernama Bintang Aulia Rahmat kelas X-9 meraih Juara ke 2, medali perak di kegiatan Kejurnas hapkido Indonesia ke VII dengan penyelenggara PengurusNovember Pusat Hapkido Indonesia Semarang, dan di laksanakan pada tanggal 9-10 ",
    image: "/x9.jpeg",
    tags: ["Kesiswaan", "prestasi", "non", "akademik"],
    content: LombaKomputer
}
```
#### After that, include the description __INSIDE__ the ``const blogPost`` code...

#### 4. That's it. That's how we create a new post. This is also applied to the [komite](../komite/), [erapor-km](../erapor-km/), [biovations](../biovations/), [berita kurikulum](../berita_kurikulum/), [kesiswaan](../berita_kesiswaan/), [kehumasan](../berita_kehumasan/), & [akademik](../akademik/) section. The code is literally the same so, this method can also be applied in a different section.