"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { ChevronDown, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/brand";
import { cn } from "@/lib/utils";
import { FeatureSteps } from "@/components/ui/feature-section";

const expertiseFeatures = [
  {
    step: "Kepakaran 1",
    title: "Kesihatan Wanita dan Reproduktif",
    content: "Perkhidmatan kesihatan reproduktif yang menyeluruh untuk wanita di semua peringkat kehidupan",
    image: "/images/kepakaran/kesihatan-wanita.avif"
  },
  {
    step: "Kepakaran 2",
    title: "Kaunseling Perancang Keluarga",
    content: "Nasihat profesional untuk perancangan keluarga yang sesuai dengan keperluan anda",
    image: "/images/kepakaran/perancang-keluarga.jpg"
  },
  {
    step: "Kepakaran 3",
    title: "Masalah Haid & Hormon (PCOS & Menopaus)",
    content: "Diagnosis dan rawatan untuk masalah hormon termasuk PCOS dan menopaus",
    image: "/images/kepakaran/masalah-hormon.jpeg"
  },
  {
    step: "Kepakaran 4",
    title: "Vaginismus dan Masalah Seksual Wanita",
    content: "Rawatan profesional dan kaunseling untuk masalah kesihatan seksual wanita",
    image: "/images/kepakaran/kesihatan-seksual.avif"
  },
  {
    step: "Kepakaran 5",
    title: "Ujian Kesuburan Lelaki dan Wanita",
    content: "Pemeriksaan menyeluruh untuk mengenal pasti dan mengatasi masalah kesuburan",
    image: "/images/kepakaran/ujian-kesuburan.jpg"
  },
  {
    step: "Kepakaran 6",
    title: "Pap Smear dan Saringan Kanser Payudara",
    content: "Pemeriksaan pencegahan untuk mengesan kanser serviks dan payudara pada peringkat awal",
    image: "/images/kepakaran/pap-smear.jpg"
  }
];

const faqs = [
  {
    question: "Apakah perkhidmatan kesihatan wanita yang ditawarkan di Klinik Haya?",
    answer: "Klinik Haya menawarkan pelbagai perkhidmatan kesihatan wanita termasuk pemeriksaan ultrasound antenatal, penjagaan ibu hamil, konsultasi penyusuan ibu (laktasi), saringan kanser serviks (Pap Smear), saringan kanser payudara, rawatan masalah haid dan hormon (PCOS & Menopaus), serta kaunseling perancangan keluarga."
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
  }
];

export default function KesihatanWanita() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-60 -left-20 w-60 h-60 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10 py-16 lg:py-24">
          <Link href="/" className="inline-flex items-center gap-2 text-[#8c55a1] hover:text-[#7a3d8f] mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Halaman Utama
          </Link>

          <div className="max-w-3xl">
            <span className="bg-[#8c55a1] text-white px-4 py-2 rounded-full text-sm font-medium inline-block mb-6">
              Kesihatan Wanita & Kesuburan
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6">
              Perkhidmatan Kesihatan Wanita &{" "}
              <span className="text-[#8c55a1]">Kesuburan</span>
            </h1>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
              Klinik Haya mengfokuskan kepada perkhidmatan perancangan keluarga, ujian dan saringan kesuburan (fertiliti), kesihatan reproduktif, serta rawatan masalah kesihatan seksual wanita, bagi menyokong perjalanan kesihatan anda dengan penuh prihatin.
            </p>

            <Link href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-[#8c55a1] hover:bg-[#7a3d8f] text-white font-semibold text-base px-8 py-6 h-auto shadow-xl rounded-full"
              >
                Buat Temujanji
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <FeatureSteps
            features={expertiseFeatures}
            title="Kepakaran Kesihatan Wanita"
            subtitle="Perkhidmatan kesihatan reproduktif dan kesuburan yang komprehensif untuk wanita di semua peringkat kehidupan"
            autoPlayInterval={4000}
            imageHeight="h-[500px]"
            visibleItemsCount={5}
            className="p-0"
          />
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#8c55a1] mb-4">
              Perkhidmatan Kami
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Perkhidmatan kesihatan wanita dan kesuburan yang lengkap
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: "healthicons:pregnant", title: "Penjagaan Ibu Hamil" },
              { icon: "healthicons:ultrasound-scanner", title: "Ultrasound Antenatal" },
              { icon: "healthicons:heart", title: "Kesihatan Reproduktif" },
              { icon: "healthicons:family-planning", title: "Perancangan Keluarga" },
              { icon: "healthicons:blood-cells", title: "Ujian Kesuburan" },
              { icon: "healthicons:health", title: "Pap Smear & Saringan Kanser" },
              { icon: "healthicons:mental-health", title: "Rawatan PCOS & Menopaus" },
              { icon: "healthicons:baby-0306m", title: "Penyusuan Ibu (Laktasi)" },
              { icon: "healthicons:doctor", title: "Kaunseling Kesihatan Seksual" },
            ].map((service, index) => (
              <div
                key={index}
                className="group rounded-xl border-2 border-gray-100 bg-white p-6 shadow-md transition-all hover:shadow-xl hover:border-[#de539d] hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#8c55a1] to-[#de539d] text-white shadow-lg">
                  <Icon icon={service.icon} className="h-7 w-7" />
                </div>
                <h3 className="text-base font-bold text-[#8c55a1] group-hover:text-[#de539d] transition-colors leading-snug">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#8c55a1] mb-4">
              Soalan Lazim
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Jawapan kepada soalan-soalan yang sering ditanya mengenai perkhidmatan kesihatan wanita kami
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
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

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#8c55a1] to-[#7a3d8f]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hubungi Kami Untuk Temujanji
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Pasukan kami sedia membantu anda. Hubungi kami melalui WhatsApp untuk membuat temujanji.
          </p>
          <Link href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-white text-[#8c55a1] hover:bg-gray-100 font-semibold text-base px-8 py-6 h-auto shadow-xl rounded-full"
            >
              WhatsApp Kami Sekarang
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
