import ContactClient from "./ContactClient";

export const metadata = {
  title: "Get in Touch",
  description:
    "Contact Goddess Rising Hair Extensions in Belper. Book a consultation or ask a question about hair extensions and mesh integration.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Goddess Rising Hair Extensions",
    description:
      "Get in touch to book a consultation or ask a question about hair extensions or mesh integration.",
    url: "https://www.goddessrisinghair.co.uk/contact",
    siteName: "Goddess Rising Hair Extensions",
    type: "website",
    locale: "en_GB",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
