import "@fontsource-variable/cinzel";
import "@fontsource/poppins";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  metadataBase: new URL("https://www.goddessrisinghair.co.uk"),
  title: {
    default: "Mesh Integration in Belper",
    template: "%s | Goddess Rising Hair Extensions",
  },
  description:
    "A private hair studio in Belper offering bespoke hair extensions and mesh integration for natural looking results, comfort, and confidence.",
  keywords: [
    "hair extensions",
    "mesh integration",
    "Belper",
    "Derbyshire",
    "hair salon",
    "bespoke hair",
  ],
  authors: [{ name: "Goddess Rising Hair Extensions" }],
  creator: "Goddess Rising Hair Extensions",
  publisher: "Goddess Rising Hair Extensions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.goddessrisinghair.co.uk",
    siteName: "Goddess Rising Hair Extensions",
    title: "Goddess Rising Hair Extensions | Belper",
    description:
      "Private one to one hair services in Belper, specialising in bespoke extensions and mesh integration.",
    images: [
      {
        url: "https://www.goddessrisinghair.co.uk/assets/images/home-goddess-rising-og.webp",
        width: 1200,
        height: 630,
        alt: "Goddess Rising Hair Extensions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Goddess Rising Hair Extensions | Belper",
    description:
      "A calm, private hair studio in Belper offering tailored hair extension and mesh integration solutions.",
    images: [
      "https://www.goddessrisinghair.co.uk/assets/images/home-goddess-rising-og.webp",
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e1e1e",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
