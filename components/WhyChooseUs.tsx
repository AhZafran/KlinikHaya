import { Icon } from "@iconify/react";
import { ParkingCircle, Clock } from "lucide-react";

const features = [
  {
    icon: "healthicons:doctor",
    title: "Dr dan Staff Berpengalaman",
    description: "Pasukan perubatan berpengalaman yang komited untuk kesihatan anda",
    useLucide: false
  },
  {
    icon: "healthicons:hospital",
    title: "Klinik yang Bersih dan Selesa",
    description: "Persekitaran klinik yang bersih, selesa dan mesra keluarga",
    useLucide: false
  },
  {
    icon: "clock",
    title: "Masa Menunggu yang Sekejap",
    description: "Perkhidmatan cepat dan efisien untuk menjimatkan masa anda",
    useLucide: true
  },
  {
    icon: "parking",
    title: "Parking Banyak dan Mudah",
    description: "Kemudahan parking yang luas dan mudah diakses",
    useLucide: true
  },
  {
    icon: "healthicons:health-data-security",
    title: "Lebih dari 5 Panel Klinik",
    description: "Rangkaian panel klinik yang luas untuk kemudahan anda",
    useLucide: false
  },
  {
    icon: "healthicons:coins",
    title: "Harga Berpatutan",
    description: "Perkhidmatan berkualiti tinggi dengan harga yang berpatutan",
    useLucide: false
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#f4d8ef] to-[#ebd0f6]">
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8c55a1] mb-4">
            Mengapa Pilih Kami?
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Komitmen kami untuk memberikan perkhidmatan kesihatan terbaik kepada anda dan keluarga
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#8c55a1] to-[#de539d] text-white shadow-lg">
                {feature.useLucide ? (
                  feature.icon === "parking" ? (
                    <ParkingCircle className="h-10 w-10" />
                  ) : feature.icon === "clock" ? (
                    <Clock className="h-10 w-10" />
                  ) : null
                ) : (
                  <Icon icon={feature.icon} className="h-10 w-10" />
                )}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#8c55a1]">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
