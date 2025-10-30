"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import factoryVisit from "../public/hiya.jpeg";
import Voley from "../public/lmao.png";

export default function Berita() {
  const newsItems = [
    {
      image: factoryVisit,
      title: "Kunjungan Dharmawanita",
      description:
        "Kunjungan Dharmawanita SMAN 17 Surabaya ke Pabrik Fiesta di Ngoro, Kabupaten Mojokerto",
      link: "/berita_kehumasan",
    },
    {
      image: Voley,
      title: "intoTheLmao",
      description: "Ey big shout out to X-4",
      content: "She's just wow...",
      link: "/akademik",
    },
  ];

  return (
    <section className="news-events container mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Berita Sekolah
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {newsItems.map((item, index) => (
          <Card key={index} className="flex flex-col">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            {item.content && (
              <CardContent>
                <p>{item.content}</p>
              </CardContent>
            )}
            <CardFooter className="mt-auto">
              <a href={item.link}>
                <Button variant="outline">Read More</Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}