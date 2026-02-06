// app/about/page.jsx
import Link from "next/link";
import Script from "next/script";
import TransformationCarousel from "../../components/TransformationCarousel";
import styles from "../../styles/About.module.css";

export const metadata = {
  title: "About Goddess Rising | Luxury Hair Studio in Belper",
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
        {/* HERO SECTION */}
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

        {/* ABOUT SPLIT SECTION */}
        <section
          className={styles.aboutSplitSection}
          aria-label="About Message"
        >
          <div className={styles.aboutSplitContainer}>
            {/* Text side */}
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

            {/* Image side */}
            <div className={styles.imageSide}>
              <img
                src="/assets/images/goddess-logo.webp"
                alt="Goddess Rising Hair Extensions company logo"
                className={styles.aboutImage}
                loading="lazy"
                decoding="async"
                width="900"
                height="900"
              />
            </div>
          </div>
        </section>

        {/* ABOUT CONTENT SECTION (ORIGINAL LONG COPY RESTORED) */}
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
                <strong>Goddess Rising Hair Extensions</strong> in Belper,
                Derbyshire. I’ve been working with hair extensions for almost a
                decade now, but my journey started long before that. I have fine
                hair myself, and I’ve worn extensions for years, so I know the
                struggle. I know how it feels to look in the mirror and think,
                this just doesn’t match how I feel inside. And I also know the
                magic of finding the right solution and feeling like yourself
                again. That’s why I’m so passionate about what I do. I’ve lived
                it.
              </p>

              <p>
                My approach is very intuitive because no two clients are the
                same. I’ll never give you a one size fits all answer. I take the
                time to really understand what you need, whether that’s a
                discreet solution for hair loss, a mesh integration system, a
                complete transformation with natural looking hair extensions, or
                just a luxury blow dry to remind yourself how good it feels to
                take up space. Clients often tell me they feel like they’re
                sitting with a friend, but one who’s also a straight talking
                professional who knows exactly what works and what doesn’t.
              </p>

              <p>
                <strong>Goddess Rising Hair</strong> was never just about hair
                for me, it’s about transformation. I’ve always believed that our
                outer energy and appearance affect how we feel and how we show
                up in the world. And the other way around too. If you feel
                amazing inside but your hair doesn’t reflect that, it creates a
                kind of imbalance. Hair carries our feminine energy, our
                confidence, and our identity. When it feels right, you rise. You
                show up as the most powerful, unapologetic version of yourself.
              </p>

              <p>
                That’s exactly why I created{" "}
                <strong>Goddess Rising Hair Extensions</strong>. This is more
                than a salon. It’s a private one to one hair studio where women
                come not only for longer, thicker, or fuller hair, but for
                confidence, empowerment, and a feeling of alignment. Based in a
                quiet little town called <strong>Belper, Amber Valley</strong>,
                my salon is known for its calm atmosphere and bespoke approach
                to hair extensions and hair restoration.
              </p>

              <p>
                The salon itself is part of the experience. It’s not your
                typical busy high street setting. It’s a private luxury hair
                salon with soft lighting, gentle candlelight, and the soothing
                aroma of Nag Champa, sage, and sandalwood to relax your mind and
                body. The space is energetically cleansed with sage and infused
                with crystals, creating an atmosphere that feels fresh,
                positive, and deeply restorative. From the moment you arrive,
                the focus is entirely on you. Your comfort, your confidence,
                your transformation.
              </p>

              <div
                className={styles.subSection}
                role="group"
                aria-labelledby="salon-experience-heading"
              >
                <h4 id="salon-experience-heading">The Salon Experience</h4>
                <ul>
                  <li>
                    Soft lighting and calming aromas of sage and sandalwood
                  </li>
                  <li>Healing crystals and energy cleansing rituals</li>
                  <li>
                    A warm, welcoming atmosphere designed for relaxation and
                    transformation
                  </li>
                </ul>
              </div>

              <div
                className={styles.subSection}
                role="group"
                aria-labelledby="my-ethos-heading"
              >
                <h4 id="my-ethos-heading">My Ethos</h4>
                <ul>
                  <li>
                    Hair is a tool for confidence, self expression, and
                    empowerment
                  </li>
                  <li>Every service is tailored to your unique needs</li>
                  <li>
                    Technical expertise meets intuition and genuine connection
                  </li>
                </ul>
              </div>

              <p>
                Step into <strong>Goddess Rising Hair Extensions</strong>, and
                let’s create the hair, and confidence that you deserve.
              </p>
            </div>
          </div>
        </section>

        <TransformationCarousel />
      </section>
    </>
  );
}
