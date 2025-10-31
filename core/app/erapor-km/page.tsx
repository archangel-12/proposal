import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-4 text-center">E-Rapor KM</h1>
        <div className="flex justify-center">
          <Image
            src="https://i.pinimg.com/736x/b9/a1/2a/b9a12a663840acc6028f3dcffb6c4890.jpg"
            alt="real"
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