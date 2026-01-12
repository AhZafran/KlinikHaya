"use client";

import { Stethoscope, ClipboardCheck, TestTube, Scan, Syringe, Baby, Wind, Activity, Brain, HeartPulse, UserCheck, Calendar, Pill, Shield, Microscope, Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const services = [
  { icon: Stethoscope, title: "Rawatan Am & Akut" },
  { icon: ClipboardCheck, title: "Medical Checkup Pelajar/Prapekerjaan" },
  { icon: TestTube, title: "Ujian Darah, Air Kencing & ECG" },
  { icon: Scan, title: "Pemeriksaan Ultrasound (Antenatal dan lain-lain)" },
  { icon: Activity, title: "Rawatan Denggi, COVID-19, Influenza & Penyakit Kelamin (STD)" },
  { icon: Baby, title: "Pemeriksaan Kuning Bayi (Jaundis)" },
  { icon: Wind, title: "Nebuliser & Sedut Kahak Rawatan Cuci Luka" },
  { icon: Syringe, title: "Suntikan Vaksin Dewasa dan Kanak-kanak" },
  { icon: Brain, title: "Kesihatan Mental & Kaunseling" },
  { icon: HeartPulse, title: "Kesihatan Wanita dan Reproduktif" },
  { icon: UserCheck, title: "Rawatan Antenatal & Postnatal Laktasi & Penyusuan Ibu" },
  { icon: Calendar, title: "Kaunseling Perancang Keluarga" },
  { icon: Pill, title: "Masalah Haid & Hormon (PCOS & Menopaus)" },
  { icon: Shield, title: "Vaginismus dan Masalah Seksual Wanita" },
  { icon: Microscope, title: "Ujian Kesuburan Lelaki dan Wanita" },
  { icon: Users, title: "Pap Smear dan Saringan Kanser Payudara" },
];

// Split services into slides of 6
const servicesPerSlide = 6;
const slides = [];
for (let i = 0; i < services.length; i += servicesPerSlide) {
  slides.push(services.slice(i, i + servicesPerSlide));
}

export function OurServices() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8c55a1] mb-4">
            Perkhidmatan Kami
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Kami menyediakan pelbagai perkhidmatan kesihatan yang komprehensif untuk anda & keluarga
          </p>
        </div>

        {/* Services Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {slides.map((slide, slideIndex) => (
              <CarouselItem key={slideIndex}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {slide.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={index}
                        className="group rounded-xl border-2 border-gray-100 bg-white p-6 shadow-md transition-all hover:shadow-xl hover:border-[#de539d] hover:-translate-y-1"
                      >
                        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#8c55a1] to-[#de539d] text-white shadow-lg">
                          <Icon className="h-7 w-7" />
                        </div>
                        <h3 className="text-base font-bold text-[#8c55a1] group-hover:text-[#de539d] transition-colors leading-snug">
                          {service.title}
                        </h3>
                      </div>
                    );
                  })}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-16 bg-[#8c55a1] text-white hover:bg-[#de539d] border-0" />
          <CarouselNext className="hidden md:flex -right-16 bg-[#8c55a1] text-white hover:bg-[#de539d] border-0" />
        </Carousel>

        {/* Mobile Swipe Indicator */}
        <div className="text-center mt-8 md:hidden">
          <p className="text-sm text-gray-500">Swipe untuk melihat lebih banyak perkhidmatan →</p>
        </div>
      </div>
    </section>
  );
}
