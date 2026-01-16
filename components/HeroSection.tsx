"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/brand";

// Service icon components
const ServiceIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactElement> = {
    pregnancy: (
      <svg viewBox="0 0 120 120" fill="currentColor" className="w-full h-full">
        <path d="M60 20c-8.284 0-15 6.716-15 15 0 5.523 2.985 10.344 7.425 12.96C45.746 50.746 40 58.373 40 67.5V90c0 2.761 2.239 5 5 5h30c2.761 0 5-2.239 5-5V67.5c0-9.127-5.746-16.754-12.425-19.54C72.015 45.344 75 40.523 75 35c0-8.284-6.716-15-15-15zm0 5c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10zm-15 42.5c0-8.284 6.716-15 15-15s15 6.716 15 15V90H45V67.5z"/>
      </svg>
    ),
    ultrasound: (
      <svg viewBox="0 0 120 120" fill="currentColor" className="w-full h-full">
        <rect x="25" y="25" width="60" height="45" rx="3" stroke="currentColor" strokeWidth="3" fill="none"/>
        <circle cx="55" cy="47.5" r="15" opacity="0.3"/>
        <path d="M45 80 L55 70 L75 70" stroke="currentColor" strokeWidth="3" fill="none"/>
        <text x="55" y="52" fontSize="8" textAnchor="middle" fill="currentColor" opacity="0.5">BABY</text>
        <line x1="30" y1="30" x2="80" y2="30" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
      </svg>
    ),
    baby: (
      <svg viewBox="0 0 120 120" fill="currentColor" className="w-full h-full">
        <circle cx="60" cy="35" r="12"/>
        <path d="M50 38c0 2 2 4 4 6s4 2 6 2 4 0 6-2 4-4 4-6"/>
        <circle cx="55" cy="33" r="2" fill="white"/>
        <circle cx="65" cy="33" r="2" fill="white"/>
        <path d="M60 48c-15 0-25 8-25 20v25h50V68c0-12-10-20-25-20z"/>
        <path d="M42 60c2-3 5-5 8-6M78 60c-2-3-5-5-8-6" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    ),
    vaccine: (
      <svg viewBox="0 0 120 120" fill="currentColor" className="w-full h-full">
        <rect x="52" y="45" width="16" height="40" rx="2"/>
        <path d="M48 50h24v8h-24z" opacity="0.7"/>
        <circle cx="60" cy="35" r="8"/>
        <path d="M60 43v2m-6-10l4 4m8-4l-4 4" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="48" cy="78" r="6" opacity="0.5"/>
        <circle cx="72" cy="78" r="6" opacity="0.5"/>
      </svg>
    ),
    book: (
      <svg viewBox="0 0 120 120" fill="currentColor" className="w-full h-full">
        <rect x="30" y="25" width="60" height="70" rx="3"/>
        <rect x="30" y="25" width="10" height="70" opacity="0.3"/>
        <line x1="45" y1="40" x2="80" y2="40" stroke="white" strokeWidth="2"/>
        <line x1="45" y1="50" x2="80" y2="50" stroke="white" strokeWidth="2"/>
        <line x1="45" y1="60" x2="75" y2="60" stroke="white" strokeWidth="2"/>
        <line x1="45" y1="70" x2="75" y2="70" stroke="white" strokeWidth="2"/>
      </svg>
    ),
    allergy: (
      <svg viewBox="0 0 120 120" fill="currentColor" className="w-full h-full">
        <path d="M60 30c-8 0-15 7-15 15v10h30V45c0-8-7-15-15-15z"/>
        <circle cx="60" cy="60" r="5"/>
        <path d="M60 65v15m-10-5l10-5m10 5l-10-5" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <circle cx="52" cy="43" r="3" fill="white"/>
        <circle cx="68" cy="43" r="3" fill="white"/>
        <path d="M50 85c0-5 4-10 10-10s10 5 10 10" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      </svg>
    ),
    surgery: (
      <svg viewBox="0 0 120 120" fill="currentColor" className="w-full h-full">
        <path d="M35 50l20-20 10 10-20 20z"/>
        <circle cx="50" cy="35" r="5"/>
        <rect x="40" y="60" width="40" height="8" rx="2"/>
        <path d="M45 68v15m10-15v15m10-15v15m10-15v15" stroke="currentColor" strokeWidth="2"/>
        <circle cx="75" cy="45" r="3" opacity="0.5"/>
        <circle cx="70" cy="55" r="3" opacity="0.5"/>
      </svg>
    ),
    wound: (
      <svg viewBox="0 0 120 120" fill="currentColor" className="w-full h-full">
        <ellipse cx="60" cy="60" rx="25" ry="15" stroke="currentColor" strokeWidth="3" fill="none"/>
        <path d="M45 60h30M55 55h20M55 65h20" stroke="currentColor" strokeWidth="2"/>
        <circle cx="50" cy="50" r="2"/>
        <circle cx="70" cy="70" r="2"/>
        <path d="M35 45l8 8m42-8l-8 8M35 75l8-8m42 8l-8-8" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
      </svg>
    ),
    circumcision: (
      <svg viewBox="0 0 120 120" fill="currentColor" className="w-full h-full">
        <circle cx="60" cy="45" r="12"/>
        <path d="M60 57c-12 0-20 6-20 15v20h40V72c0-9-8-15-20-15z"/>
        <circle cx="55" cy="43" r="2" fill="white"/>
        <circle cx="65" cy="43" r="2" fill="white"/>
        <path d="M55 48c0 3 2 5 5 5s5-2 5-5" stroke="white" strokeWidth="1.5" fill="none"/>
        <rect x="52" y="75" width="16" height="3" rx="1" opacity="0.5"/>
      </svg>
    ),
    cosmetic: (
      <svg viewBox="0 0 120 120" fill="currentColor" className="w-full h-full">
        <circle cx="60" cy="55" r="20" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M60 35v5m0 30v5m-20-20h5m30 0h5" stroke="currentColor" strokeWidth="2"/>
        <circle cx="60" cy="55" r="8"/>
        <path d="M48 42l3 3m18-3l-3 3M48 68l3-3m18 3l-3-3" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
        <circle cx="60" cy="55" r="3" fill="white"/>
      </svg>
    )
  };

  return icons[type] || null;
};

// Doctor profiles data with services
const doctors = [
  {
    id: "dr-nabilah",
    name: "Dr. Nabilah",
    fullTitle: "Dr. Nabilah | Pakar Kesihatan Wanita",
    specialty: "Kesihatan Wanita & Kesuburan",
    headlinePart1: "Penjagaan Ibu Hamil, Kanak-Kanak & ",
    headlineHighlight: "Kesihatan Keluarga",
    location: "",
    description: "Kami komited memberikan rawatan terbaik untuk anda sekeluarga. Diuruskan oleh doktor wanita yang berpengalaman, klinik kami menawarkan perkhidmatan menyeluruh",
    image: "/images/dr-nabilah.jpg",
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
    fullTitle: "Dr. Fadzli | Pakar Pembedahan Kecil",
    specialty: "Pembedahan Kecil & Prosedur",
    headlinePart1: "Pakar ",
    headlineHighlight: "Pembedahan Kecil & Prosedur Perubatan",
    location: "di Kajang",
    description: "Dengan kepakaran dan pendekatan yang teliti, kami memberikan perkhidmatan pembedahan kecil dan prosedur perubatan yang selamat dan berkualiti tinggi.",
    image: "/images/dr-fadzli.jpg",
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
        <div className="grid lg:grid-cols-2 gap-12 items-start py-12 lg:py-20">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              {doctor.headlinePart1}
              <span className="text-[#8c55a1]">{doctor.headlineHighlight}</span>
              {doctor.location && <span className="text-[#8c55a1]">.</span>}
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              {doctor.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#8c55a1] to-[#de539d] hover:from-[#7a3d8f] hover:to-[#c4498a] text-white font-semibold text-base px-8 py-6 h-auto shadow-xl rounded-full"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Hubungi Kami
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Doctor Image Placeholder */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-white to-purple-50 rounded-3xl p-8 min-h-[400px] flex items-end justify-center overflow-hidden">
              {/* Decorative gradient blob */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#8c55a1]/20 to-[#de539d]/20 rounded-full blur-3xl"></div>

              {/* Placeholder for doctor image */}
              <div className="relative text-center space-y-4 pb-8">
                <div className="w-64 h-80 mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl flex items-center justify-center text-gray-500 text-6xl font-bold shadow-2xl">
                  {doctor.name}
                </div>
              </div>

              {/* Social media icons on the right */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </button>
              </div>

              {/* Scroll to top button */}
              <button className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
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
