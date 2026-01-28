"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Apakah perkhidmatan yang ditawarkan di Klinik Haya?",
    answer: "Klinik Haya menawarkan pelbagai perkhidmatan kesihatan termasuk rawatan am dan akut, pemeriksaan ultrasound antenatal, penjagaan ibu hamil, konsultasi penyusuan ibu (laktasi), rawatan kanak-kanak (pediatrik), pembedahan kecil, vaksinasi, kesihatan mental, serta perkhidmatan 24 jam."
  },
  {
    question: "Adakah Klinik Haya menyediakan perkhidmatan ultrasound untuk ibu mengandung?",
    answer: "Ya, kami menyediakan perkhidmatan ultrasound antenatal yang komprehensif untuk memantau perkembangan dan kesihatan bayi dalam kandungan. Pemeriksaan ini termasuk ultrasound dating, ultrasound trimester pertama, kedua dan ketiga, serta pemeriksaan anomali untuk memastikan bayi berkembang dengan sihat."
  },
  {
    question: "Apakah perkhidmatan pembedahan kecil yang ditawarkan?",
    answer: "Klinik Haya menyediakan pelbagai perkhidmatan pembedahan kecil termasuk pembedahan ketuat dan ketumbuhan kulit, rawatan luka, khatan kanak-kanak dan dewasa, serta prosedur kosmetik. Semua prosedur dilakukan oleh doktor berpengalaman dengan peralatan moden."
  },
  {
    question: "Adakah Klinik Haya beroperasi 24 jam?",
    answer: "Klinik Haya beroperasi dari 8:30 pagi hingga 11:00 malam setiap hari termasuk hujung minggu dan cuti umum. Perkhidmatan kecemasan 24 jam juga tersedia. Sila hubungi kami melalui WhatsApp atau telefon untuk maklumat lanjut."
  },
  {
    question: "Apakah panel insurans yang diterima di Klinik Haya?",
    answer: "Klinik Haya menerima pelbagai panel insurans kesihatan. Sila hubungi kami melalui WhatsApp atau telefon untuk mengesahkan sama ada panel insurans anda diterima di klinik kami."
  },
  {
    question: "Apakah perkhidmatan yang disediakan untuk ibu selepas bersalin?",
    answer: "Kami menyediakan perkhidmatan postnatal yang menyeluruh termasuk konsultasi penyusuan ibu (laktasi) untuk membantu ibu yang menghadapi masalah menyusu, pemeriksaan kesihatan ibu selepas bersalin, dan sokongan kesihatan mental postnatal."
  },
  {
    question: "Bagaimana cara untuk membuat temujanji di Klinik Haya?",
    answer: "Anda boleh membuat temujanji dengan mudah melalui WhatsApp kami atau menghubungi talian klinik. Walk-in juga dialu-alukan, namun temujanji awal adalah digalakkan untuk mengelakkan masa menunggu yang lama terutamanya untuk perkhidmatan ultrasound dan konsultasi khusus."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8c55a1] mb-4">
            Soalan Lazim
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Jawapan kepada soalan-soalan yang sering ditanya mengenai perkhidmatan kami
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={cn(
                  "w-full flex items-center justify-between p-5 text-left transition-colors",
                  openIndex === index
                    ? "bg-gradient-to-r from-[#8c55a1] to-[#de539d] text-white"
                    : "bg-white hover:bg-gray-50 text-gray-800"
                )}
              >
                <span className="font-semibold pr-4">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 transition-transform duration-300",
                    openIndex === index ? "rotate-180" : ""
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96" : "max-h-0"
                )}
              >
                <p className="p-5 text-gray-600 leading-relaxed bg-gray-50">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
