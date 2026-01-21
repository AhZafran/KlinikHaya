export const BRAND = {
  // Basic Info
  name: "Klinik Haya",
  tagline: "Your Trusted Clinic for Family & Women's Health",
  description: "Professional healthcare services specializing in women's health, family clinic, fertility, pediatrics, and lactation support in Kajang, Selangor.",
  descriptionMalay: "Klinik Haya yang beroperasi di Alam Sari komited memberikan rawatan perubatan menyeluruh untuk seisi keluarga – dari bayi, kanak-kanak, ibu mengandung hingga ke warga emas.",

  // Colors
  colors: {
    primary: "#8c55a1", // Purple
    secondary: "#de539d", // Pink
    accent: "#f492c6", // Soft Pink
    lavender: "#ebd0f6",
    lightPink: "#f4d8ef"
  },

  // Logo
  logo: {
    path: "/images/logo-haya.png",
    alt: "Logo Klinik Haya - Klinik Keluarga & Kesihatan Wanita di Kajang, Selangor"
  },

  // Contact
  contact: {
    whatsapp: "60123499793",
    whatsappMessage: "Hello! I would like to inquire about your services at Klinik Haya.",
    phone: "+60 12-349 9793",
    phoneSecondary: "+60 3-6243 9793",
    address: {
      street: "20-1, Jalan Sari Niaga, Setia Emporia",
      city: "Kajang",
      state: "Selangor",
      postcode: "43000",
      country: "Malaysia",
      full: "20-1, Jalan Sari Niaga, Setia Emporia, 43000 Kajang, Selangor"
    },
    email: "klinikhaya@gmail.com",
    googleMapsUrl: "https://maps.google.com/?q=20-1,Jalan+Sari+Niaga,Setia+Emporia,43000+Kajang,Selangor",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.6147512297284!2d101.79552509999999!3d2.9265702000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdcf617013e25b%3A0x1d6c869c2ba78c0b!2sKlinik%20Haya%2024%20Jam!5e0!3m2!1sen!2smy!4v1768124692733!5m2!1sen!2smy"
  },

  // Operating Hours
  operatingHours: {
    daily: "8:30 AM - 11:00 PM",
    note: "24-hour services available",
    weekdays: "8:30 AM - 11:00 PM",
    weekends: "8:30 AM - 11:00 PM",
    publicHolidays: "Open (24-hour services)"
  },

  // Social Media
  social: {
    facebook: "https://facebook.com/klinikhaya_",
    instagram: "https://instagram.com/klinikhaya_",
    tiktok: "https://www.tiktok.com/@klinikhaya",
    instagramHandle: "@klinikhaya_",
    facebookHandle: "@klinikhaya_",
    tiktokHandle: "@klinikhaya"
  },

  // Services
  services: [
    {
      title: "Klinik Keluarga",
      titleEn: "Family Clinic",
      description: "Comprehensive family healthcare services for all ages",
      icon: "Users"
    },
    {
      title: "Kesihatan Wanita",
      titleEn: "Women's Health",
      description: "Specialized healthcare services for women at all life stages",
      icon: "Heart"
    },
    {
      title: "Perkhidmatan Kesuburan",
      titleEn: "Fertility Services",
      description: "Expert fertility consultation and treatment services",
      icon: "Baby"
    },
    {
      title: "Pediatrik",
      titleEn: "Pediatrics",
      description: "Specialized medical care for infants, children, and adolescents",
      icon: "Smile"
    },
    {
      title: "Sokongan Laktasi",
      titleEn: "Lactation Support",
      description: "Professional breastfeeding support and consultation",
      icon: "Heart"
    },
    {
      title: "Sunat Bayi Perempuan",
      titleEn: "Baby Girl Circumcision",
      description: "Safe and professional circumcision services",
      icon: "Shield"
    }
  ],

  // Why Choose Us
  whyChooseUs: [
    {
      title: "Professional & Caring",
      description: "Experienced healthcare professionals dedicated to your wellbeing",
      icon: "Award"
    },
    {
      title: "24-Hour Service",
      description: "Round-the-clock medical care when you need it most",
      icon: "Clock"
    },
    {
      title: "Women & Family Focused",
      description: "Specialized care for women, mothers, and children",
      icon: "HeartHandshake"
    },
    {
      title: "Modern Facilities",
      description: "Clean, comfortable, and well-equipped clinic environment",
      icon: "Building2"
    }
  ],

  // SEO Keywords
  keywords: [
    "klinik kajang",
    "klinik haya",
    "klinik 24 jam kajang",
    "klinik keluarga kajang",
    "klinik wanita kajang",
    "kesihatan wanita kajang",
    "klinik kesuburan kajang",
    "klinik pediatrik kajang",
    "klinik ibu mengandung kajang",
    "klinik bayi kajang",
    "laktasi kajang",
    "family clinic kajang",
    "women's health kajang",
    "fertility services kajang",
    "klinik alam sari",
    "klinik setia emporia",
    "klinik sari niaga"
  ]
} as const;

// Helper Functions
export function getWhatsAppUrl(): string {
  return "https://wa.link/dhjb4b";
}

export function getPhoneUrl(): string {
  return `tel:${BRAND.contact.phone.replace(/\s/g, '')}`;
}

export function getEmailUrl(): string {
  return `mailto:${BRAND.contact.email}`;
}
