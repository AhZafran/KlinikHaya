"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { getWhatsAppUrl } from "@/lib/brand";

export function WhatsAppFloat() {
  return (
    <Link
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <Icon icon="mdi:whatsapp" className="w-8 h-8 text-white" />
    </Link>
  );
}
