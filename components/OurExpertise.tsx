"use client";

import { FeatureSteps } from "@/components/ui/feature-section";

const features = [
  {
    step: "Kepakaran 1",
    title: "Pemeriksaan Ultrasound Antenatal",
    content: "Pemeriksaan ultrasound komprehensif untuk memantau kesihatan ibu dan bayi sepanjang kehamilan",
    image: "/images/kepakaran/ultrasound-antenatal.jpg"
  },
  {
    step: "Kepakaran 2",
    title: "Kesihatan Wanita dan Reproduktif",
    content: "Perkhidmatan kesihatan reproduktif yang menyeluruh untuk wanita di semua peringkat kehidupan",
    image: "/images/kepakaran/kesihatan-wanita.avif"
  },
  {
    step: "Kepakaran 3",
    title: "Postnatal Laktasi & Penyusuan Ibu",
    content: "Sokongan dan bimbingan penyusuan susu ibu untuk memastikan kesihatan bayi dan ibu",
    image: "/images/kepakaran/penyusuan-ibu.jpg"
  },
  {
    step: "Kepakaran 4",
    title: "Kaunseling Perancang Keluarga",
    content: "Nasihat profesional untuk perancangan keluarga yang sesuai dengan keperluan anda",
    image: "/images/kepakaran/perancang-keluarga.jpg"
  },
  {
    step: "Kepakaran 5",
    title: "Masalah Haid & Hormon (PCOS & Menopaus)",
    content: "Diagnosis dan rawatan untuk masalah hormon termasuk PCOS dan menopaus",
    image: "/images/kepakaran/masalah-hormon.jpeg"
  },
  {
    step: "Kepakaran 6",
    title: "Vaginismus dan Masalah Seksual Wanita",
    content: "Rawatan profesional dan kaunseling untuk masalah kesihatan seksual wanita",
    image: "/images/kepakaran/kesihatan-seksual.avif"
  },
  {
    step: "Kepakaran 7",
    title: "Ujian Kesuburan Lelaki dan Wanita",
    content: "Pemeriksaan menyeluruh untuk mengenal pasti dan mengatasi masalah kesuburan",
    image: "/images/kepakaran/ujian-kesuburan.jpg"
  },
  {
    step: "Kepakaran 8",
    title: "Pap Smear dan Saringan Kanser Payudara",
    content: "Pemeriksaan pencegahan untuk mengesan kanser serviks dan payudara pada peringkat awal",
    image: "/images/kepakaran/pap-smear.jpg"
  }
];

export function OurExpertise() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <FeatureSteps
          features={features}
          title="Kepakaran Kami"
          subtitle="Kami komited untuk memberikan perkhidmatan kesihatan yang berkualiti tinggi dengan kepakaran khusus dalam penjagaan wanita dan keluarga"
          autoPlayInterval={4000}
          imageHeight="h-[500px]"
          visibleItemsCount={5}
          className="p-0"
        />
      </div>
    </section>
  );
}
