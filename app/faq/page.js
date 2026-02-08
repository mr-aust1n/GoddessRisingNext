import FaqClient from "./FaqClient";

export const metadata = {
  title: "Hair Extensions FAQs",
  description:
    "Frequently asked questions about hair extensions and mesh integration, including maintenance, aftercare, and what to expect.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ | Goddess Rising Hair Extensions",
    description:
      "Answers to common questions about hair extensions and mesh integration.",
    url: "https://www.goddessrisinghair.co.uk/faq",
    siteName: "Goddess Rising Hair Extensions",
    type: "website",
    locale: "en_GB",
  },
};

export default function FaqPage() {
  return <FaqClient />;
}
