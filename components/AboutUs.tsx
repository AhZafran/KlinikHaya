import Image from "next/image";
import { Icon } from "@iconify/react";

export function AboutUs() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8c55a1] mb-4">
            Tentang Kami
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Kenali lebih lanjut mengenai Klinik Haya dan komitmen kami terhadap kesihatan anda
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left - Clinic Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-full max-w-md overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
                <Image
                  src="/images/clinic/clinic-about.jpg"
                  alt="Klinik Haya"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#de539d]/20 rounded-full -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#8c55a1]/20 rounded-full -z-10"></div>
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              Klinik Haya yang beroperasi di Alam Sari komited memberikan rawatan perubatan menyeluruh untuk seisi keluarga – dari bayi, kanak-kanak, ibu mengandung hingga ke warga emas. Kami turut memberi tumpuan khusus kepada kesihatan wanita, penyusuan ibu, serta kesihatan mental.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Selain itu, Klinik Haya mengfokuskan kepada penjagaan kesihatan menyeluruh termasuk rawatan am, pediatrik, pembedahan kecil, dan perkhidmatan kecemasan 24 jam, bagi menyokong perjalanan kesihatan anda dengan penuh prihatin.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#8c55a1] to-[#de539d] rounded-full flex items-center justify-center">
                  <Icon icon="healthicons:health" className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Kesihatan Keluarga</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#8c55a1] to-[#de539d] rounded-full flex items-center justify-center">
                  <Icon icon="healthicons:pregnant" className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Kesihatan Wanita</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#8c55a1] to-[#de539d] rounded-full flex items-center justify-center">
                  <Icon icon="healthicons:mental-health" className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Kesihatan Mental</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#8c55a1] to-[#de539d] rounded-full flex items-center justify-center">
                  <Icon icon="healthicons:baby-0306m" className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Penyusuan Ibu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
