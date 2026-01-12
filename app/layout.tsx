import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";
import { BRAND } from "@/lib/brand";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://klinikhaya.com"),
  title: `${BRAND.name} - Klinik Keluarga & Kesihatan Wanita di Kajang, Selangor`,
  description: "Klinik Haya yang beroperasi di Alam Sari komited memberikan rawatan perubatan menyeluruh untuk seisi keluarga – dari bayi, kanak-kanak, ibu mengandung hingga ke warga emas. Perkhidmatan 24 jam tersedia.",
  keywords: [...BRAND.keywords],
  authors: [{ name: BRAND.name }],

  openGraph: {
    title: `${BRAND.name} - Klinik Keluarga & Kesihatan Wanita di Kajang`,
    description: "Klinik Haya yang beroperasi di Alam Sari komited memberikan rawatan perubatan menyeluruh untuk seisi keluarga – dari bayi, kanak-kanak, ibu mengandung hingga ke warga emas. Perkhidmatan 24 jam tersedia.",
    url: "https://klinikhaya.com",
    siteName: BRAND.name,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${BRAND.name} - Klinik Keluarga & Kesihatan Wanita di Kajang, Selangor`,
      },
    ],
    locale: "ms_MY",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} - Klinik Keluarga & Kesihatan Wanita di Kajang`,
    description: "Klinik Haya yang beroperasi di Alam Sari komited memberikan rawatan perubatan menyeluruh untuk seisi keluarga – dari bayi, kanak-kanak, ibu mengandung hingga ke warga emas.",
    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');`,
          }}
        />
      </head>
      <body className={`${openSans.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <StructuredData />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
