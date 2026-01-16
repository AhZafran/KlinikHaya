"use client";

import { FeatureSteps } from "@/components/ui/feature-section";

const features = [
  {
    step: "Kepakaran 1",
    title: "Pemeriksaan Ultrasound Antenatal",
    content: "Pemeriksaan ultrasound komprehensif untuk memantau kesihatan ibu dan bayi sepanjang kehamilan",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=2070&auto=format&fit=crop"
  },
  {
    step: "Kepakaran 2",
    title: "Kesihatan Wanita dan Reproduktif",
    content: "Perkhidmatan kesihatan reproduktif yang menyeluruh untuk wanita di semua peringkat kehidupan",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
  },
  {
    step: "Kepakaran 3",
    title: "Postnatal Laktasi & Penyusuan Ibu",
    content: "Sokongan dan bimbingan penyusuan susu ibu untuk memastikan kesihatan bayi dan ibu",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2070&auto=format&fit=crop"
  },
  {
    step: "Kepakaran 4",
    title: "Kaunseling Perancang Keluarga",
    content: "Nasihat profesional untuk perancangan keluarga yang sesuai dengan keperluan anda",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2091&auto=format&fit=crop"
  },
  {
    step: "Kepakaran 5",
    title: "Masalah Haid & Hormon (PCOS & Menopaus)",
    content: "Diagnosis dan rawatan untuk masalah hormon termasuk PCOS dan menopaus",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    step: "Kepakaran 6",
    title: "Vaginismus dan Masalah Seksual Wanita",
    content: "Rawatan profesional dan kaunseling untuk masalah kesihatan seksual wanita",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
  },
  {
    step: "Kepakaran 7",
    title: "Ujian Kesuburan Lelaki dan Wanita",
    content: "Pemeriksaan menyeluruh untuk mengenal pasti dan mengatasi masalah kesuburan",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    step: "Kepakaran 8",
    title: "Pap Smear dan Saringan Kanser Payudara",
    content: "Pemeriksaan pencegahan untuk mengesan kanser serviks dan payudara pada peringkat awal",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop"
  }
];

export function OurExpertise() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <FeatureSteps
          features={features}
          title="Kepakaran Kami"
          autoPlayInterval={4000}
          imageHeight="h-[500px]"
          visibleItemsCount={5}
          className="p-0"
        />
        <div className="text-center mt-8">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami komited untuk memberikan perkhidmatan kesihatan yang berkualiti tinggi dengan kepakaran khusus dalam penjagaan wanita dan keluarga
          </p>
        </div>
      </div>
    </section>
  );
}
