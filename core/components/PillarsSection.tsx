"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FileText, Users, Lightbulb } from "lucide-react";

export default function PillarsSection() {
  const pillars = [
    {
      title: "INOVATIF",
      icon: FileText,
      description:
        "Di era digital sekarang ini guru harus bisa mengimbangi dan melangkah maju untuk mengikuti perkembangan pendidikan untuk meningkatkan keprofesionalan dalam mengajar sehingga lebih menarik dan mampu berinovatif",
      name: "INARNI, S.PD",
      image:
        "https://i.pinimg.com/originals/62/8b/e9/628be9123fd21fddf512814d3e36da7c.gif",
    },
    {
      title: "MANDIRI",
      icon: Users,
      description:
        "Manusia hebat adalah mereka yang mampu memotivasi dirinya sendiri tanpa harus diminta atau dipaksa orang lain. Berinisiatif sendiri dan berbuat baik menjadikan manusia kuat dan mandiri",
      name: "TOTOK SUDARTO, S.PD",
      image:
        "https://i.pinimg.com/originals/64/a9/19/64a9196a102faf69e4ff8284cb3996ca.gif",
    },
    {
      title: "KREATIF",
      icon: Lightbulb,
      description:
        "Pembelajaran yang disesuaikan dengan kondisi fisik pada jam tersebut dengan selingan humor dan tidak mengurangi isi materi",
      name: "DRS. TEGUH JUANA, M.SI",
      image:
        "https://i.pinimg.com/originals/60/03/0e/60030eb651d4f7965b67dceab21484b7.gif",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {pillars.map((pillar, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative h-[300px]"
        >
          <Image
            src={pillar.image}
            alt={pillar.title}
            fill
            className="absolute z-0 object-cover"
          />
          <div className="relative z-20 p-6 flex flex-col text-justify h-full text-white">
            <div>
              <div className="flex items-center mb-4">
                <pillar.icon className="w-8 h-8 mr-2" />
                <h3 className="text-2xl font-bold">{pillar.title}</h3>
              </div>
              <p>{pillar.description}</p>
            </div>
            <div className="mt-auto">
              <span className="text-md font-semibold px-3 py-1 bg-white text-blue-600 rounded">
                {pillar.name}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}