import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle, Award, Users, Clock } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/brand";

export function HeroSection() {
  return (
    <section className="relative min-h-[700px] flex items-center justify-center bg-white py-20">
      {/* Background Image Overlay - Ready for team photo */}
      <div className="absolute inset-0 bg-[url('/images/team-bg.jpg')] bg-cover bg-center opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-gray-900">
            Pemeriksaan Ibu Mengandung, Kanak-Kanak, Dewasa, serta perkhidmatan{" "}
            <span className="text-[#de539d]">Kesihatan Am</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-700">
            Perkhidmatan perubatan profesional untuk anda dan keluarga. Rasai perkhidmatan yang mesra,
            lokasi yang strategik, dan penjagaan kesihatan berkualiti bila anda memerlukannya.
          </p>

          {/* CTA Button */}
          <Link href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-[#de539d] hover:bg-[#de539d]/90 text-white font-semibold text-lg px-10 py-7 h-auto shadow-2xl rounded-lg"
            >
              <MessageCircle className="h-6 w-6" />
              Hubungi Kami di WhatsApp
            </Button>
          </Link>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 pt-12 border-t border-gray-200">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Award className="h-10 w-10 text-[#8c55a1]" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-[#8c55a1]">10+</div>
              <div className="text-base md:text-lg text-gray-700">Tahun Pengalaman</div>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Users className="h-10 w-10 text-[#8c55a1]" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-[#8c55a1]">100+</div>
              <div className="text-base md:text-lg text-gray-700">Lebih Pesakit<br />Berpuas Hati</div>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Clock className="h-10 w-10 text-[#8c55a1]" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-[#8c55a1]">24/7</div>
              <div className="text-base md:text-lg text-gray-700">Perkhidmatan<br />Tersedia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
