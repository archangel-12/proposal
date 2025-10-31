import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function page() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Struktur Organisasi
        </h1>
        <div className="flex justify-center">
          <Image
            src="/struktur.jpg"
            alt="struktur organisasi"
            width={600}
            height={800}
            className="rounded-lg shadow-lg"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}