import Carousel from "../components/Carousel";

export const metadata = {
  title: "Hair Extensions Specialist in Belper",
  description:
    "A private hair studio in Belper offering bespoke hair extensions and mesh integration for natural looking results, comfort, and confidence.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.goddessrisinghair.co.uk/",
    siteName: "Goddess Rising Hair Extensions",
    title: "Hair Extensions Specialist in Belper",
    description:
      "A private hair studio in Belper offering bespoke hair extensions and mesh integration for natural looking results, comfort, and confidence.",
    images: [
      {
        url: "/assets/images/home-goddess-rising-og.webp",
        width: 1200,
        height: 630,
        alt: "Goddess Rising Hair Extensions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hair Extensions Specialist in Belper",
    description:
      "A private hair studio in Belper offering bespoke hair extensions and mesh integration for natural looking results, comfort, and confidence.",
    images: ["/assets/images/home-goddess-rising-og.webp"],
  },
};

export default function Home() {
  return (
    <main aria-label="Home Page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HairSalon",
            "@id": "https://www.goddessrisinghair.co.uk/#hair-salon",
            name: "Goddess Rising Hair Extensions",
            url: "https://www.goddessrisinghair.co.uk",
            image:
              "https://www.goddessrisinghair.co.uk/assets/images/home-goddess-rising-og.webp",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Belper",
              addressRegion: "Derbyshire",
              addressCountry: "GB",
            },
            priceRange: "££",
            sameAs: [
              "https://www.instagram.com/goddess_rising_hair/",
              "https://www.facebook.com/profile.php?id=61565118399072",
            ],
          }),
        }}
      />
      <Carousel />
    </main>
  );
}
