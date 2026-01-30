"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/brand";

// Map service types to healthicons
const serviceIconMap: Record<string, string> = {
  pregnancy: "healthicons:pregnant",
  ultrasound: "healthicons:ultrasound-scanner",
  baby: "healthicons:baby-0306m",
  vaccine: "healthicons:syringe-vaccine",
  book: "healthicons:i-documents-accepted",
  allergy: "healthicons:allergies",
  surgery: "healthicons:general-surgery",
  wound: "healthicons:bandaged",
  circumcision: "healthicons:boy-0105y",
  cosmetic: "healthicons:syringe",
};

// Service icon component using healthicons
const ServiceIcon = ({ type }: { type: string }) => {
  const iconName = serviceIconMap[type] || "healthicons:health";
  return <Icon icon={iconName} className="w-full h-full" />;
};

// Doctor profiles data with services
const doctors = [
  {
    id: "dr-nabilah",
    name: "Dr. Nabilah",
    fullTitle: "Dr. Nabilah | Kesihatan Wanita",
    specialty: "Kesihatan Wanita & Keluarga",
    headlinePart1: "Penjagaan Ibu Hamil, Kanak-Kanak & ",
    headlineHighlight: "Kesihatan Keluarga",
    location: "",
    description: "Kami komited memberikan rawatan terbaik untuk anda sekeluarga. Diuruskan oleh doktor wanita yang berpengalaman, klinik kami menawarkan perkhidmatan menyeluruh",
    image: "/images/doctors/dr-nabilah.png",
    locations: [],
    services: [
      {
        title: "Perkhidmatan Ibu Hamil",
        icon: "pregnancy"
      },
      {
        title: "Ultrasound Kehamilan",
        icon: "ultrasound"
      },
      {
        title: "Berkhatan Bayi Perempuan",
        icon: "baby"
      },
      {
        title: "Vaksinasi Kanak-Kanak",
        icon: "vaccine"
      },
      {
        title: "Buka Buku Pink dan Follow-up Kehamilan",
        icon: "book"
      },
      {
        title: "Ujian Alergik",
        icon: "allergy"
      }
    ],
    stats: {
      experience: "10",
      experienceLabel: "Tahun Pengalaman",
      patients: "4,000",
      patientsLabel: "Pesakit Dirawat",
      reviews: "400+",
      reviewsLabel: "Ulasan Positif",
      satisfaction: "98%",
      satisfactionLabel: "Kepuasan Pesakit"
    }
  },
  {
    id: "dr-fadzli",
    name: "Dr. Fadzli",
    fullTitle: "Dr. Fadzli | Pembedahan Kecil",
    specialty: "Pembedahan Kecil & Prosedur",
    headlinePart1: "",
    headlineHighlight: "Pembedahan Kecil & Prosedur Perubatan",
    location: "di Kajang",
    description: "Dengan kepakaran dan pendekatan yang teliti, kami memberikan perkhidmatan pembedahan kecil dan prosedur perubatan yang selamat dan berkualiti tinggi.",
    image: "/images/doctors/dr-fadzli.png",
    locations: [],
    services: [
      {
        title: "Pembedahan Kecil",
        icon: "surgery"
      },
      {
        title: "Rawatan Luka",
        icon: "wound"
      },
      {
        title: "Berkhatan Kanak-Kanak Lelaki",
        icon: "circumcision"
      },
      {
        title: "Prosedur Kosmetik",
        icon: "cosmetic"
      }
    ],
    stats: {
      experience: "10",
      experienceLabel: "Tahun Pengalaman",
      patients: "3,500",
      patientsLabel: "Pesakit Dirawat",
      reviews: "350+",
      reviewsLabel: "Ulasan Positif",
      satisfaction: "97%",
      satisfactionLabel: "Kepuasan Pesakit"
    }
  }
];

export function HeroSection() {
  const [activeDoctor, setActiveDoctor] = useState(0);
  const doctor = doctors[activeDoctor];

  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-white overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/HeroBackground/HeroBackgroundHaya.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Light overlay to soften the background */}
        <div className="absolute inset-0 bg-white/80"></div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-60 -left-20 w-60 h-60 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Doctor Toggle */}
        <div className="pt-12 pb-6 flex justify-center gap-4">
          {doctors.map((doc, index) => (
            <button
              key={doc.id}
              onClick={() => setActiveDoctor(index)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeDoctor === index
                  ? "bg-[#8c55a1] text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {doc.name}
            </button>
          ))}
        </div>

        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center py-8 lg:py-16 min-h-[600px]">
          {/* Left Content */}
          <div className="space-y-6 z-10">
            {/* Doctor Badge */}
            <div className="inline-block">
              <span className="bg-[#8c55a1] text-white px-4 py-2 rounded-full text-sm font-medium">
                {doctor.fullTitle}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              {doctor.headlinePart1}
              <span className="text-[#8c55a1]">{doctor.headlineHighlight}</span>
              {doctor.location && <span className="text-gray-900"> {doctor.location}</span>}
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg">
              {doctor.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-[#8c55a1] hover:bg-[#7a3d8f] text-white font-semibold text-base px-8 py-6 h-auto shadow-xl rounded-full"
                >
                  Buat Temujanji
                </Button>
              </Link>
              <Link href="#about" className="flex items-center gap-2 text-gray-700 hover:text-[#8c55a1] font-medium transition-colors">
                Tentang {doctor.name}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Content - Doctor Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Large decorative blob behind doctor */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-50 blur-sm"></div>

            {/* Doctor image container */}
            <div className="relative z-10">
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={450}
                height={550}
                className="object-contain object-bottom drop-shadow-2xl"
                priority
              />

              {/* Floating card - Doctor name */}
              <div className="absolute bottom-32 right-0 lg:-right-4 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#8c55a1] rounded-full flex items-center justify-center">
                  <Icon icon="healthicons:doctor" className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{doctor.name.toUpperCase()}</p>
                  <p className="text-xs text-gray-500">Klinik Haya</p>
                </div>
              </div>

              {/* Floating card - Specialty */}
              <div className="absolute bottom-8 left-0 lg:-left-8 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#de539d] rounded-full flex items-center justify-center">
                  <Icon icon="healthicons:heart" className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm uppercase">{doctor.specialty.split(" ")[0]}</p>
                  <p className="text-xs text-gray-500">{doctor.specialty}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="pb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {doctor.services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 mb-4 text-[#a8c5dd] group-hover:text-[#8c55a1] transition-colors">
                  <ServiceIcon type={service.icon} />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-gray-800 leading-tight">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-[#8c55a1] to-[#7a3d8f] rounded-3xl shadow-2xl -mb-20 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 p-8 md:p-12">
            {/* Stat 1 - Experience */}
            <div className="text-center text-white">
              <div className="text-5xl md:text-6xl font-bold mb-2">{doctor.stats.experience}</div>
              <div className="text-base md:text-lg opacity-90">{doctor.stats.experienceLabel}</div>
            </div>

            {/* Stat 2 - Patients */}
            <div className="text-center text-white">
              <div className="text-5xl md:text-6xl font-bold mb-2">{doctor.stats.patients}</div>
              <div className="text-base md:text-lg opacity-90">{doctor.stats.patientsLabel}</div>
            </div>

            {/* Stat 3 - Reviews */}
            <div className="text-center text-white">
              <div className="text-5xl md:text-6xl font-bold mb-2">{doctor.stats.reviews}</div>
              <div className="text-base md:text-lg opacity-90">{doctor.stats.reviewsLabel}</div>
            </div>

            {/* Stat 4 - Satisfaction */}
            <div className="text-center text-white">
              <div className="text-5xl md:text-6xl font-bold mb-2">{doctor.stats.satisfaction}</div>
              <div className="text-base md:text-lg opacity-90">{doctor.stats.satisfactionLabel}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom spacing for stats overlap */}
      <div className="h-20"></div>
    </section>
  );
}
