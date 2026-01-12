import { BRAND } from "@/lib/brand";

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": BRAND.name,
    "description": "Klinik Haya yang beroperasi di Alam Sari komited memberikan rawatan perubatan menyeluruh untuk seisi keluarga – dari bayi, kanak-kanak, ibu mengandung hingga ke warga emas. Perkhidmatan 24 jam tersedia.",
    "image": `https://klinikhaya.com${BRAND.logo.path}`,
    "url": "https://klinikhaya.com",
    "telephone": BRAND.contact.phone,
    "email": BRAND.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BRAND.contact.address.street,
      "addressLocality": BRAND.contact.address.city,
      "addressRegion": BRAND.contact.address.state,
      "postalCode": BRAND.contact.address.postcode,
      "addressCountry": BRAND.contact.address.country,
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "2.9",
      "longitude": "101.7",
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        "opens": "08:30",
        "closes": "23:00",
      },
    ],
    "priceRange": "$$",
    "medicalSpecialty": [
      "Family Practice",
      "Gynecology",
      "Obstetrics",
      "Pediatrics",
      "Fertility Medicine",
    ],
    "availableService": BRAND.services.map((service) => ({
      "@type": "MedicalProcedure",
      "name": service.titleEn,
      "description": service.description,
    })),
    "sameAs": [
      BRAND.social.facebook,
      BRAND.social.instagram,
      BRAND.social.tiktok,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
