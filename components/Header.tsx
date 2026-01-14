import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { BRAND, getWhatsAppUrl } from "@/lib/brand";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={BRAND.logo.path}
            alt={BRAND.logo.alt}
            width={48}
            height={48}
            className="object-contain"
            priority
          />
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-bold text-[#8c55a1] tracking-tight">KLINIK</span>
            <span className="text-xl font-bold text-[#8c55a1] tracking-tight">HAYA</span>
          </div>
        </Link>

        {/* WhatsApp Button */}
        <Link href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            className="bg-[#de539d] hover:bg-[#de539d]/90 text-white font-semibold shadow-lg h-12 px-6"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="hidden sm:inline">WhatsApp Kami</span>
            <span className="sm:hidden">Chat</span>
          </Button>
        </Link>
      </div>
    </header>
  );
}
