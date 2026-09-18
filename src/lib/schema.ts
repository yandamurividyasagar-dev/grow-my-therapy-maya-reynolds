import { therapistProfile } from "@/config/therapistProfile";

export function generatePsychologistSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": therapistProfile.name + ", " + therapistProfile.degree,
    "image": "https://drmayareynolds.vercel.app" + therapistProfile.office.images.headshot,
    "@id": "https://drmayareynolds.vercel.app/#psychologist",
    "url": "https://drmayareynolds.vercel.app",
    "telephone": "(310) 555-0192",
    "medicalSpecialty": [
      "Psychiatry",
      "Clinical Psychology",
      "EMDR Therapy",
      "Trauma Therapy"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123th Street 45 W",
      "addressLocality": "Santa Monica",
      "addressRegion": "CA",
      "postalCode": "90401",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.0195,
      "longitude": -118.4912
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "$$$",
    "description": therapistProfile.bio.headline + " " + therapistProfile.bio.subtext
  };
}
