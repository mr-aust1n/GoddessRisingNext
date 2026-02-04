import Link from "next/link";
import BeforeAfter from "../../components/BeforeAfter";
import styles from "../../styles/HairExtensions.module.css";

export const metadata = {
  title: "Hair Extensions in Belper | Natural Looking Results | Goddess Rising",
  description:
    "Premium hair extensions in Belper with seamless blending and a tailored approach. Options include nano rings, tiny tips, braidless weave, and secret weave.",
  alternates: { canonical: "/hair-extensions" },
  openGraph: {
    type: "website",
    title: "Hair Extensions in Belper | Goddess Rising",
    description:
      "Explore premium hair extension methods with a personalised fit, natural blend, and professional aftercare support in Belper, Derbyshire.",
    images: ["/assets/images/hair-extensions-goddess-rising-og.webp"],
    url: "https://www.goddessrisinghair.co.uk/hair-extensions",
    siteName: "Goddess Rising Hair Extensions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hair Extensions in Belper | Goddess Rising",
    description:
      "Natural looking hair extensions with tailored method choice, seamless blending, and aftercare guidance from a private Belper studio.",
    images: ["/assets/images/hair-extensions-goddess-rising-og.webp"],
  },
};

export default function HairExtensions() {
  return (
    <>
      {/* SEO Helmet */}

      {/* HERO (copied from Mesh, adjusted for Hair Extensions) */}
      <section className={styles.heroSection} aria-label="Hair extensions hero">
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Hair Extensions
              <span className={styles.heroTitleAccent}>
                Bespoke length, volume, and confidence
              </span>
            </h1>

            <p className={styles.heroSubtitle}>
              Fully customised extensions designed to look and feel like your
              own hair, with comfortable, seamless results.
            </p>

            <div
              className={styles.heroActions}
              aria-label="Hair extensions hero actions"
            >
              <a
                href="https://www.fresha.com/a/goddess-rising-hair-extensions-belper-21-market-place-cfr78yg5"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroButtonPrimary}
                aria-label="Book a hair extensions consultation on Fresha (opens in a new tab)"
              >
                Book a Consultation
              </a>

              <Link
                href="/faq"
                className={styles.heroButtonPrimary}
                aria-label="Read frequently asked questions on the FAQ page"
              >
                Read FAQs
              </Link>
            </div>
          </div>

          <div
            className={styles.heroMedia}
            aria-label="Hair extensions hero image"
          >
            <img
              src="/assets/images/salon-goddess-rising-extension.webp"
              alt="Hair extensions result shown with natural-looking length and volume"
              className={styles.heroImage}
              width="1074"
              height="605"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Hair Extension explanation */}
      <section
        className={styles.extensionSection}
        aria-label="About Goddess Rising Hair Extensions"
      >
        <div className={styles.extensionContainer}>
          <h1>Hair Extensions</h1>

          <p>
            Hair extensions are so much more than added length, they’re about
            creating natural, seamless results that look and feel like your own
            hair. At Goddess Rising Hair Extensions, every set of extensions is
            fully customised to you.
          </p>

          <p>
            With almost 10 years of experience and fine hair myself, I know what
            works, what doesn’t, and how to achieve flawless results that are
            comfortable and long-lasting.
          </p>

          <p>
            I work with multiple hair extension suppliers, including Remi
            Cachet, Beauty Works, Prestige, Hair Kings & Blend hair. This gives
            me access to a wide variety of textures and colours.
          </p>

          <h2>Methods I Offer</h2>

          <p>
            <strong>Nano Rings</strong> – One of the smallest and most discreet
            methods, perfect for fine hair.
          </p>

          <p>
            <strong>Tiny Tips</strong> – Lightweight bonds that blend
            beautifully with natural hair.
          </p>

          <p>
            <strong>Braidless Weave / LA Weave</strong> – Secure, comfortable,
            and ideal for thickness and volume.
          </p>

          <p>
            <strong>Secret Weave</strong> – A virtually invisible option with no
            visible beads.
          </p>

          <p>
            Every method is chosen based on your hair type, lifestyle, and
            long-term hair health.
          </p>

          <p>
            <a
              href="https://www.fresha.com/a/goddess-rising-hair-extensions-belper-21-market-place-cfr78yg5"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a consultation on Fresha (opens in a new tab)"
            >
              Click here to book your consultation today.
            </a>
          </p>
        </div>
      </section>

      {/* Before & After sections */}
      <BeforeAfter
        name="Sophie"
        location="Amber Valley, Derbyshire"
        description="Years of chemical damage and struggling with trichotillomania left Sharine’s hair fragile and uneven, and her confidence low. We applied a mesh integration system which transformed not just her hair, but how she felt. Soft, natural-looking hair gave her the confidence to finally feel like herself again."
        beforeImage="/assets/images/Hair_weave_before.webp"
        afterImage="/assets/images/Hair_weave_after.webp"
      />

      <BeforeAfter
        name="Katie"
        location="Ripley, Derbyshire"
        description="Katie’s fine, wispy hair left her feeling self-conscious. She wanted a full, glamorous mane that turned heads. I applied three rows of invisible weave extensions in 24”, blending three shades for the perfect colour match and added brightness, leaving her with a show-stopping, confidence-boosting transformation."
        beforeImage="/assets/images/Hair_weave_before_Client1.webp"
        afterImage="/assets/images/Hair_weave_after_Client1.webp"
        flip={true}
      />

      <BeforeAfter
        name="Vicky"
        location="Eastwood, Nottingham"
        description="After struggling with trichotillomania, uneven regrowth left Vicky self-conscious. Two rows of LA Weave transformed her hair while protecting her natural growth, giving her the confidence and relief she’d been waiting for."
        beforeImage="/assets/images/Hair_weave_before_Client3.webp"
        afterImage="/assets/images/Hair_weave_after_Client3.webp"
      />

      {/* CTA after transformations */}
      <section
        className={styles.beforeAfterCtaSection}
        aria-label="Book hair extensions consultation"
      >
        <a
          href="https://www.fresha.com/a/goddess-rising-hair-extensions-belper-21-market-place-cfr78yg5"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.beforeAfterButton}
          aria-label="Book a hair extensions consultation on Fresha (opens in a new tab)"
        >
          Book Your Consultation
        </a>
      </section>
    </>
  );
}
