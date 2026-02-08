import Link from "next/link";
import Script from "next/script";
import TransformationCarousel from "../../components/TransformationCarousel";
import styles from "../../styles/About.module.css";

export const metadata = {
  title: "About Our Hair Extensions Specialist in Belper",
  description:
    "Learn about Goddess Rising Hair Extensions, founded by Sal in Belper, Derbyshire. A private one to one hair studio focused on confidence, empowerment, and bespoke hair solutions.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    title: "About Goddess Rising Hair Extensions",
    description:
      "Discover the story behind Goddess Rising Hair Extensions, a private luxury hair studio in Belper specialising in bespoke hair extensions and confidence focused transformations.",
    images: ["/assets/images/about-goddess-rising-dt.webp"],
    url: "https://www.goddessrisinghair.co.uk/about",
    siteName: "Goddess Rising Hair Extensions",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Goddess Rising Hair Extensions",
    description:
      "A private one to one hair studio in Belper offering bespoke hair extensions and confidence led transformations.",
    images: ["/assets/images/about-goddess-rising-dt.webp"],
  },
};

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "Goddess Rising Hair Extensions",
    image:
      "https://www.goddessrisinghair.co.uk/assets/images/about-goddess-rising-dt.webp",
    url: "https://www.goddessrisinghair.co.uk",
    telephone: "",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Belper",
      addressRegion: "Derbyshire",
      addressCountry: "GB",
    },
    founder: {
      "@type": "Person",
      name: "Sal",
    },
    priceRange: "££",
    sameAs: ["https://www.instagram.com/", "https://www.facebook.com/"],
  };

  return (
    <>
      <Script
        id="about-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className={styles.aboutPage} aria-label="About Goddess Rising">
        {/* HERO */}
        <div className={styles.heroSection} aria-label="About page hero">
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="/assets/images/about-goddess-rising-dt.webp"
            />
            <img
              src="/assets/images/mobile/about-goddess-rising-sm.webp"
              alt=""
              className={styles.heroImage}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width="1600"
              height="900"
            />
          </picture>

          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Goddess Rising Hair Extensions</h1>
          </div>
        </div>

        {/* SPLIT */}
        <section
          className={styles.aboutSplitSection}
          aria-label="About Message"
        >
          <div className={styles.aboutSplitContainer}>
            <div className={styles.textSide}>
              <div className={styles.textBox}>
                <h2>
                  Your Hair.
                  <br />
                  Your confidence.
                  <br />
                  Your Power
                </h2>

                <Link href="/faq" className={styles.readMore}>
                  Frequently Asked Questions
                </Link>
              </div>
            </div>

            <div className={styles.imageSide}>
              <img
                src="/assets/images/goddess-logo.webp"
                alt="Goddess Rising Hair Extensions company logo"
                className={styles.aboutImage}
                loading="lazy"
                decoding="async"
                width="300"
                height="300"
              />
            </div>
          </div>
        </section>

        {/* LONG COPY */}
        <section
          className={styles.testimonialSection}
          aria-labelledby="about-goddess-rising-heading"
          role="region"
        >
          <div className={styles.aboutContainer}>
            <div className={styles.testimonialContent}>
              <h3 id="about-goddess-rising-heading">
                About Goddess Rising Hair Extensions
              </h3>

              <p>
                Hi, I’m Sal, the founder and stylist behind{" "}
                <span className={styles.emphasis}>
                  Goddess Rising Hair Extensions
                </span>{" "}
                in Belper, Derbyshire. I’ve been working with hair extensions
                for almost a decade now, but my journey started long before
                that. I have fine hair myself, and I’ve worn extensions for
                years, so I know the struggle.
              </p>

              <p>
                I know how it feels to look in the mirror and think this just
                doesn’t match how I feel inside. I also know the magic of
                finding the right solution and feeling like yourself again.
                That’s why I’m so passionate about what I do. I’ve lived it.
              </p>

              <p>
                My approach is intuitive because no two clients are the same.
                I’ll never give you a one size fits all answer. I take the time
                to understand what you need, whether that’s a discreet solution
                for hair loss, a mesh integration system, a complete
                transformation with natural looking hair extensions, or a luxury
                blow dry to remind yourself how good it feels to take up space.
              </p>

              <p>
                <strong className={styles.emphasis}>Goddess Rising Hair</strong>{" "}
                was never just about hair for me. It’s about transformation. Our
                outer appearance affects how we feel and how we show up in the
                world. When hair doesn’t reflect how you feel inside, it creates
                imbalance.
              </p>

              <p>
                Hair carries our confidence and identity. When it feels right,
                you rise and show up as the most powerful version of yourself.
              </p>

              <p>
                This is more than a salon. It’s a private one to one hair studio
                where women come not only for longer or fuller hair, but for
                confidence and alignment. Based in{" "}
                <strong className={styles.emphasis}>
                  Belper, Amber Valley
                </strong>
                , the studio is known for its calm atmosphere and bespoke
                approach.
              </p>

              <p>
                The salon itself is part of the experience. It’s not a busy high
                street setting. It’s a private luxury space with soft lighting,
                calming aromas, and a restorative atmosphere where the focus is
                entirely on you.
              </p>

              <div className={styles.subSection}>
                <h4>The Salon Experience</h4>
                <ul>
                  <li>Soft lighting and calming aromas</li>
                  <li>Private one to one appointments</li>
                  <li>A relaxed, restorative atmosphere</li>
                </ul>
              </div>

              <div className={styles.subSection}>
                <h4>My Ethos</h4>
                <ul>
                  <li>Hair is a tool for confidence and empowerment</li>
                  <li>Every service is tailored to your needs</li>
                  <li>Honest advice with specialist care</li>
                </ul>
              </div>

              <p>
                Step into{" "}
                <strong className={styles.emphasis}>
                  Goddess Rising Hair Extensions
                </strong>{" "}
                and let’s create the hair and confidence that you deserve.
              </p>
            </div>
          </div>
        </section>

        <TransformationCarousel />
      </section>
    </>
  );
}
