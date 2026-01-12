import { Award, Building2, Clock, ParkingCircle, Shield, Wallet } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Dr dan Staff Berpengalaman",
    description: "Pasukan perubatan berpengalaman yang komited untuk kesihatan anda"
  },
  {
    icon: Building2,
    title: "Klinik yang Bersih dan Selesa",
    description: "Persekitaran klinik yang bersih, selesa dan mesra keluarga"
  },
  {
    icon: Clock,
    title: "Masa Menunggu yang Sekejap",
    description: "Perkhidmatan cepat dan efisien untuk menjimatkan masa anda"
  },
  {
    icon: ParkingCircle,
    title: "Parking Banyak dan Mudah",
    description: "Kemudahan parking yang luas dan mudah diakses"
  },
  {
    icon: Shield,
    title: "Lebih dari 5 Panel Klinik",
    description: "Rangkaian panel klinik yang luas untuk kemudahan anda"
  },
  {
    icon: Wallet,
    title: "Harga Berpatutan",
    description: "Perkhidmatan berkualiti tinggi dengan harga yang berpatutan"
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
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#8c55a1] to-[#de539d] text-white shadow-lg">
                  <Icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#8c55a1]">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
