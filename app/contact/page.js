// app/contact/page.js
import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Goddess Rising Hair Studio | Belper, Derbyshire",
  description:
    "Get in touch with Goddess Rising in Belper. Ask a question, request a consultation, or find directions to 21 Market Place, DE56 1FZ.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.goddessrisinghair.co.uk/contact",
    siteName: "Goddess Rising Hair Extensions",
    title: "Contact Goddess Rising Hair Studio | Belper, Derbyshire",
    description:
      "Get in touch with Goddess Rising in Belper. Ask a question, request a consultation, or find directions to 21 Market Place, DE56 1FZ.",
    images: [
      {
        url: "/assets/images/contact-goddess-rising-og.webp",
        width: 1200,
        height: 630,
        alt: "Contact Goddess Rising Hair Extensions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Goddess Rising Hair Studio | Belper, Derbyshire",
    description:
      "Get in touch with Goddess Rising in Belper. Ask a question, request a consultation, or find directions to 21 Market Place, DE56 1FZ.",
    images: ["/assets/images/contact-goddess-rising-og.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "@id": "https://www.goddessrisinghair.co.uk/#hair-salon",
  name: "Goddess Rising Hair Extensions",
  url: "https://www.goddessrisinghair.co.uk",
  telephone: "+447356077270",
  email: "sal@goddessrisinghair.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "21 Market Place",
    addressLocality: "Belper",
    addressRegion: "Derbyshire",
    postalCode: "DE56 1FZ",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.0236442,
    longitude: -1.4785165,
  },
  sameAs: [
    "https://www.instagram.com/goddess_rising_hair/",
    "https://www.facebook.com/profile.php?id=61565118399072&sk=reels_tab",
    "https://www.tiktok.com/",
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  );
}
