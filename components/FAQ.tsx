"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Apakah perkhidmatan kesihatan wanita yang ditawarkan di Klinik Haya?",
    answer: "Klinik Haya menawarkan pelbagai perkhidmatan kesihatan wanita termasuk pemeriksaan ultrasound antenatal, penjagaan ibu hamil, konsultasi penyusuan ibu (laktasi), saringan kanser serviks (Pap Smear), saringan kanser payudara, rawatan masalah haid dan hormon (PCOS & Menopaus), serta kaunseling perancangan keluarga."
  },
  {
    question: "Adakah Klinik Haya menyediakan perkhidmatan ultrasound untuk ibu mengandung?",
    answer: "Ya, kami menyediakan perkhidmatan ultrasound antenatal yang komprehensif untuk memantau perkembangan dan kesihatan bayi dalam kandungan. Pemeriksaan ini termasuk ultrasound dating, ultrasound trimester pertama, kedua dan ketiga, serta pemeriksaan anomali untuk memastikan bayi berkembang dengan sihat."
  },
  {
    question: "Bilakah waktu terbaik untuk membuat Pap Smear?",
    answer: "Pap Smear sebaiknya dilakukan apabila anda tidak sedang datang haid. Waktu terbaik adalah 10-20 hari selepas hari pertama haid. Wanita yang aktif secara seksual disyorkan untuk membuat Pap Smear setiap 3 tahun bermula dari umur 21 tahun, atau mengikut nasihat doktor berdasarkan faktor risiko individu."
  },
  {
    question: "Apakah tanda-tanda PCOS dan bagaimana ia dirawat?",
    answer: "Tanda-tanda PCOS (Polycystic Ovary Syndrome) termasuk haid tidak teratur, pertumbuhan bulu berlebihan, jerawat, dan kesukaran untuk hamil. Di Klinik Haya, kami menawarkan diagnosis melalui ultrasound dan ujian darah, serta rawatan yang merangkumi perubahan gaya hidup, ubat-ubatan untuk mengawal hormon, dan sokongan kesuburan jika diperlukan."
  },
  {
    question: "Adakah Klinik Haya menyediakan ujian kesuburan?",
    answer: "Ya, kami menyediakan ujian kesuburan untuk pasangan lelaki dan wanita. Untuk wanita, ini termasuk ultrasound ovari, ujian hormon, dan penilaian tiub fallopio. Untuk lelaki, kami menawarkan analisis semen. Keputusan ujian akan dibincangkan bersama doktor untuk merancang langkah seterusnya."
  },
  {
    question: "Apakah perkhidmatan yang disediakan untuk ibu selepas bersalin?",
    answer: "Kami menyediakan perkhidmatan postnatal yang menyeluruh termasuk konsultasi penyusuan ibu (laktasi) untuk membantu ibu yang menghadapi masalah menyusu, pemeriksaan kesihatan ibu selepas bersalin, sokongan kesihatan mental postnatal, dan nasihat perancangan keluarga untuk menentukan kaedah kontraseptif yang sesuai."
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
            Jawapan kepada soalan-soalan yang sering ditanya mengenai perkhidmatan kesihatan wanita kami
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
