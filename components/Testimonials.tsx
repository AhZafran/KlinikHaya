"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Klinik Haya is one of the best clinics I've ever visited! The doctors are very detailed and passionate during the consultation, and you can really feel that they care about their patients. The staff are super nice and friendly.",
    image: "https://ui-avatars.com/api/?name=Aina+Solehah&background=de539d&color=fff&size=128",
    name: "Aina Solehah",
    role: "",
  },
  {
    text: "I had a very positive experience at this newly opened clinic. The female doctor is highly experienced and treated my daughter's asthma with great care. The consultation was detailed, professional, and reassuring.",
    image: "https://ui-avatars.com/api/?name=Asyraf&background=8c55a1&color=fff&size=128",
    name: "Asyraf",
    role: "",
  },
  {
    text: "I came all the way from Setia Alam just to meet Dr Alia Syamim. She helped me with my health concerns. She even suggested me better options that suits my budget & time. No hard sell whatsoever.",
    image: "https://ui-avatars.com/api/?name=Syafiqah&background=f492c6&color=fff&size=128",
    name: "Syafiqah",
    role: "",
  },
  {
    text: "I had a very pleasant experience during my medical check-up. The staff were friendly, professional, and efficient. The doctor explained everything clearly and made me feel comfortable. Highly recommended.",
    image: "https://ui-avatars.com/api/?name=Zuhairah&background=de539d&color=fff&size=128",
    name: "Zuhairah",
    role: "",
  },
  {
    text: "Overall for me doctor yang sangat soft spoken and gives me a clear instructions! environment clinic sangat comfy especially the toilet bersihh lulus! Definitely my best decision to come to this clinic.",
    image: "https://ui-avatars.com/api/?name=Mel&background=8c55a1&color=fff&size=128",
    name: "Mel",
    role: "",
  },
  {
    text: "Clinic environment is very clean, smells good, greeted with smiles from the counter and Dr Alia really went extra miles. Very thorough explanation and consultation. The price is reasonable. Overall 5/5.",
    image: "https://ui-avatars.com/api/?name=Athirah&background=f492c6&color=fff&size=128",
    name: "Athirah",
    role: "",
  },
  {
    text: "I've visited this clinic several times, and Dr. Nabilah together with the staff have always been friendly and kind. The waiting time is not too long as well. Thank you for the excellent service.",
    image: "https://ui-avatars.com/api/?name=Sabrina&background=de539d&color=fff&size=128",
    name: "Sabrina",
    role: "",
  },
  {
    text: "The clinic has a calm and comfortable environment, which helps reduce stress while waiting. The doctor treated my mom very kindly and also took the time to explain and share useful ideas. Overall, a very pleasant experience.",
    image: "https://ui-avatars.com/api/?name=Zati&background=8c55a1&color=fff&size=128",
    name: "Zati",
    role: "",
  },
  {
    text: "The staff are very friendly and helpful, and the doctor explained everything clearly in a concise and approachable manner. The clinic is clean and comfortable. I also appreciate that the prices and charges were informed upfront.",
    image: "https://ui-avatars.com/api/?name=Nur+Syifa&background=f492c6&color=fff&size=128",
    name: "Nur Syifa",
    role: "",
  },
  {
    text: "A pleasant place to get your medical checkup. The Dr. is courteous and make you comfortable during his medical observation.",
    image: "https://ui-avatars.com/api/?name=Nazri&background=de539d&color=fff&size=128",
    name: "Nazri",
    role: "",
  },
  {
    text: "Recommended clinic for the whole family. The doctor is really friendly and made me feel comfortable. She is very skilled and knowledgeable. Highly recommended.",
    image: "https://ui-avatars.com/api/?name=Amirah&background=8c55a1&color=fff&size=128",
    name: "Amirah",
    role: "",
  },
  {
    text: "I received treatment from Dr Alia. She demonstrated a high level of skill and extensive knowledge, which, combined with her compassionate and gentle demeanor, made me feel completely at ease.",
    image: "https://ui-avatars.com/api/?name=Siti+Nurazelinda&background=f492c6&color=fff&size=128",
    name: "Siti Nurazelinda",
    role: "",
  },
];

const firstColumn = testimonials.slice(0, 4);
const secondColumn = testimonials.slice(4, 8);
const thirdColumn = testimonials.slice(8, 12);

export function Testimonials() {
  return (
    <section className="bg-white py-20 relative">
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-[#8c55a1] py-1 px-4 rounded-lg text-[#8c55a1] font-medium">
              Testimoni
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-[#8c55a1]">
            Apa Kata Pesakit Kami
          </h2>
          <p className="text-center mt-5 opacity-75 text-gray-600">
            Kepuasan pesakit adalah keutamaan kami. Lihat apa yang mereka katakan tentang perkhidmatan kami.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
