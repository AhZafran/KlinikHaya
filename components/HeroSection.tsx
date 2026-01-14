"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/brand";

// Doctor profiles data
const doctors = [
  {
    id: "dr-nabilah",
    name: "Dr. Nabilah",
    fullTitle: "Dr. Nabilah | Pakar Kesihatan Wanita",
    specialty: "Kesihatan Wanita & Kesuburan",
    headlinePart1: "Rakan",
    headlineHighlight: "Kesihatan Wanita & Kesuburan",
    location: "di Kajang",
    description: "Lebih 200 wanita telah memilih kami untuk kesejahteraan reproduktif mereka di Kajang",
    image: "/images/dr-nabilah.jpg",
    locations: [],
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
    headlinePart1: "Pakar",
    headlineHighlight: "Pembedahan Kecil & Prosedur Perubatan",
    location: "di Kajang",
    description: "Dengan kepakaran dan pendekatan yang teliti, kami memberikan perkhidmatan pembedahan kecil dan prosedur perubatan yang selamat dan berkualiti tinggi.",
    image: "/images/dr-fadzli.jpg",
    locations: [],
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
        <div className="grid lg:grid-cols-2 gap-12 items-center py-12 lg:py-20">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Doctor Badge */}
            <div className="inline-block">
              <div className="bg-[#8c55a1] text-white px-6 py-2 rounded-full text-sm font-semibold">
                {doctor.fullTitle}
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              {doctor.headlinePart1}{" "}
              <span className="text-[#8c55a1]">{doctor.headlineHighlight}</span>{" "}
              {doctor.location}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-[#8c55a1] leading-relaxed">
              {doctor.description}
            </p>

            {/* Location Badges */}
            {doctor.locations.length > 0 && (
              <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl w-fit">
                <span className="text-gray-700 font-medium">Lokasi Kami:</span>
                {doctor.locations.map((location) => (
                  <div key={location} className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4 text-[#de539d]" />
                    <span>{location}</span>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-[#8c55a1] hover:bg-[#8c55a1]/90 text-white font-semibold text-base px-8 py-6 h-auto shadow-xl rounded-full"
                >
                  <Calendar className="h-5 w-5" />
                  Buat Temujanji
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Doctor Image Placeholder */}
          <div className="relative lg:block hidden">
            <div className="relative bg-gradient-to-br from-[#8c55a1]/10 to-[#de539d]/10 rounded-3xl p-8 min-h-[500px] flex items-center justify-center">
              {/* Placeholder for doctor image */}
              <div className="text-center space-y-4">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-[#8c55a1] to-[#de539d] rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                  {doctor.name.split(' ')[1]?.[0] || doctor.name[0]}
                </div>
                <div className="space-y-2">
                  <div className="bg-white px-6 py-3 rounded-full shadow-lg inline-block">
                    <span className="font-bold text-[#8c55a1]">{doctor.name}</span>
                  </div>
                  <div className="bg-white px-6 py-3 rounded-full shadow-lg">
                    <span className="text-gray-700">{doctor.specialty}</span>
                  </div>
                </div>
              </div>
            </div>
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
