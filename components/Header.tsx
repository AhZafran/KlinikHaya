import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { BRAND, getWhatsAppUrl } from "@/lib/brand";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={BRAND.logo.path}
            alt={BRAND.logo.alt}
            width={120}
            height={60}
            className="object-contain"
            priority
          />
        </Link>

        {/* WhatsApp Button */}
        <Link href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            className="bg-[#de539d] hover:bg-[#de539d]/90 text-white font-semibold shadow-lg h-12 px-6"
          >
            <Icon icon="healthicons:communication" className="h-5 w-5" />
            <span className="hidden sm:inline">WhatsApp Kami</span>
            <span className="sm:hidden">Chat</span>
          </Button>
        </Link>
      </div>
    </header>
  );
}
