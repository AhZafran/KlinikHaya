import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND, getWhatsAppUrl, getPhoneUrl, getEmailUrl } from "@/lib/brand";

export function ContactUs() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-[#f4d8ef] to-[#ebd0f6]">
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8c55a1] mb-4">
            Hubungi Kami
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Kami sedia membantu anda. Hubungi kami untuk sebarang pertanyaan atau tempahan temu janji.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="rounded-xl border-2 border-white bg-white p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-[#8c55a1]">
                Maklumat Perhubungan
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#8c55a1] to-[#de539d] text-white">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold mb-2 text-[#8c55a1]">Telefon</div>
                    <Link
                      href={getPhoneUrl()}
                      className="text-sm text-gray-600 hover:text-[#de539d] block"
                    >
                      {BRAND.contact.phone}
                    </Link>
                    <Link
                      href={`tel:${BRAND.contact.phoneSecondary.replace(/\s/g, '')}`}
                      className="text-sm text-gray-600 hover:text-[#de539d] block"
                    >
                      {BRAND.contact.phoneSecondary}
                    </Link>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#8c55a1] to-[#de539d] text-white">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold mb-2 text-[#8c55a1]">Email</div>
                    <Link
                      href={getEmailUrl()}
                      className="text-sm text-gray-600 hover:text-[#de539d]"
                    >
                      {BRAND.contact.email}
                    </Link>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#8c55a1] to-[#de539d] text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold mb-2 text-[#8c55a1]">Alamat</div>
                    <Link
                      href={BRAND.contact.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 hover:text-[#de539d]"
                    >
                      {BRAND.contact.address.full}
                    </Link>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#8c55a1] to-[#de539d] text-white">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold mb-2 text-[#8c55a1]">Waktu Operasi</div>
                    <div className="text-sm text-gray-600">
                      {BRAND.operatingHours.daily}
                    </div>
                    <div className="text-sm text-[#de539d] font-bold mt-1">
                      {BRAND.operatingHours.note}
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <Link href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="mt-8 block">
                <Button className="w-full bg-[#de539d] hover:bg-[#de539d]/90 text-white font-bold shadow-xl h-14 text-base" size="lg">
                  <MessageCircle className="h-6 w-6" />
                  Whatsapp Kami Sekarang
                </Button>
              </Link>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden border-4 border-white shadow-2xl h-[400px] md:h-full min-h-[500px]">
            <iframe
              src={BRAND.contact.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Klinik Haya"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
