"use client";

import { Heart } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

// Panel data
const panels = [
  {
    name: "Panel 1",
    logo: "/images/panels/panel-1.png",
  },
  {
    name: "Panel 2",
    logo: "/images/panels/panel-2.png",
  },
  {
    name: "Panel 3",
    logo: "/images/panels/panel-3.jpg",
  },
  {
    name: "Panel 4",
    logo: "/images/panels/panel-4.png",
  },
  {
    name: "Panel 5",
    logo: "/images/panels/panel-5.png",
  },
  {
    name: "Panel 6",
    logo: "/images/panels/panel-6.png",
  },
  {
    name: "Panel 7",
    logo: "/images/panels/panel-7.png",
  },
  {
    name: "Panel 8",
    logo: "/images/panels/panel-8.png",
  },
  {
    name: "Panel 9",
    logo: "/images/panels/panel-9.png",
  },
  {
    name: "Panel 10",
    logo: "/images/panels/panel-10.png",
  },
];

export function PanelKlinik() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#f4d8ef] to-[#ebd0f6]">
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="border border-[#8c55a1] py-1 px-4 rounded-lg text-[#8c55a1] font-medium">
              Panel
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#8c55a1] mb-4">
            Panel Klinik Kami
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Kami menerima panel insurans dan korporat yang berikut. Hubungi kami untuk maklumat lanjut.
          </p>
        </motion.div>

        {/* Panels Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {panels.map((panel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              className="rounded-xl border-2 border-white bg-white p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 flex flex-col items-center justify-center text-center min-h-[160px]"
            >
              {/* Panel Logo */}
              <div className="relative w-full h-32 mb-3 flex items-center justify-center px-4">
                <Image
                  src={panel.logo}
                  alt={panel.name}
                  width={200}
                  height={128}
                  className="object-contain w-full h-full"
                  priority={index < 4}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="rounded-xl border-2 border-white bg-white p-6 shadow-lg inline-block">
            <div className="flex items-center gap-3 text-[#8c55a1]">
              <Heart className="h-6 w-6 fill-[#de539d] text-[#de539d]" />
              <p className="text-sm font-medium">
                Tidak pasti sama ada panel anda diterima? Hubungi kami untuk pengesahan.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
