import Link from "next/link";
import { MapPin, Phone, Clock, Mail, Facebook, Instagram } from "lucide-react";
import { BRAND, getWhatsAppUrl, getPhoneUrl, getEmailUrl } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#8c55a1] to-[#de539d] text-white">
      <div className="container mx-auto px-4 py-16 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 text-xl font-bold">{BRAND.name}</h3>
            <p className="text-sm opacity-95 leading-relaxed">
              Klinik Haya yang beroperasi di Alam Sari komited memberikan rawatan perubatan menyeluruh untuk seisi keluarga – dari bayi, kanak-kanak, ibu mengandung hingga ke warga emas.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Hubungi Kami</h3>
            <div className="space-y-4 text-sm">
              <Link
                href={getPhoneUrl()}
                className="flex items-start gap-3 opacity-95 hover:opacity-100 transition-opacity"
              >
                <Phone className="h-5 w-5 mt-0.5 shrink-0" />
                <div>
                  <div>{BRAND.contact.phone}</div>
                  <div>{BRAND.contact.phoneSecondary}</div>
                </div>
              </Link>
              <Link
                href={getEmailUrl()}
                className="flex items-center gap-3 opacity-95 hover:opacity-100 transition-opacity"
              >
                <Mail className="h-5 w-5 shrink-0" />
                <span>{BRAND.contact.email}</span>
              </Link>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Lokasi</h3>
            <Link
              href={BRAND.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-sm opacity-95 hover:opacity-100 transition-opacity"
            >
              <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
              <span>{BRAND.contact.address.full}</span>
            </Link>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Waktu Operasi</h3>
            <div className="mb-6 flex items-start gap-3 text-sm opacity-95">
              <Clock className="h-5 w-5 mt-0.5 shrink-0" />
              <div>
                <div>{BRAND.operatingHours.daily}</div>
                <div className="text-sm mt-1 font-semibold text-[#f492c6]">{BRAND.operatingHours.note}</div>
              </div>
            </div>

            <h3 className="mb-4 text-xl font-bold">Ikuti Kami</h3>
            <div className="flex gap-4">
              <Link
                href={BRAND.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-95 hover:opacity-100 hover:scale-110 transition-all"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href={BRAND.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-95 hover:opacity-100 hover:scale-110 transition-all"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/20 pt-8 text-center text-sm opacity-90">
          <p>
            &copy; {new Date().getFullYear()} {BRAND.name}. Hak Cipta Terpelihara.
          </p>
        </div>
      </div>
    </footer>
  );
}
