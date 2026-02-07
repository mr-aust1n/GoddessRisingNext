import TransformationCarousel from "../../components/TransformationCarousel";
import Reviews from "../../components/Reviews";
import styles from "../../styles/Consultation.module.css";

export const metadata = {
  title:
    "Hair Consultation in Belper | Book a Private Appointment | Goddess Rising",
  description:
    "Arrange a confidential hair consultation in Belper. Discuss hair loss concerns, mesh integration options, and extension solutions in a calm one to one setting.",
  alternates: {
    canonical: "/consultation",
  },
  openGraph: {
    type: "website",
    title: "Private Hair Consultation | Goddess Rising Belper",
    description:
      "A discreet one to one consultation focused on hair loss solutions, mesh integration, and personalised extension planning in Belper, Derbyshire.",
    images: ["/assets/images/consultation-goddess-rising-og.webp"],
    url: "https://www.goddessrisinghair.co.uk/consultation",
    siteName: "Goddess Rising Hair Extensions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Private Hair Consultation in Belper",
    description:
      "A calm, confidential consultation to explore hair extension and mesh integration solutions tailored to you.",
    images: ["/assets/images/consultation-goddess-rising-og.webp"],
  },
};

export default function Consultation() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Private Hair Consultation",
            description:
              "A one to one hair consultation service offering personalised advice on hair extensions, mesh integration, and hair loss solutions.",
            provider: {
              "@type": "HairSalon",
              name: "Goddess Rising Hair Extensions",
              url: "https://www.goddessrisinghair.co.uk",
            },
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Derbyshire",
            },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceLocation: {
                "@type": "Place",
                name: "Goddess Rising Hair Extensions, Belper",
              },
            },
          }),
        }}
      />

      <TransformationCarousel />

      <section className={styles.heroSection}>
        <section
          className={styles.consultationSection}
          aria-label="Consultation Goddess Rising Hair Extensions"
        >
          <div className={styles.consultationContainer}>
            <div className={styles.consultationContent}>
              <h1>Your Consultation at Goddess Rising</h1>

              <p>
                Every transformation begins with a consultation. This is where
                we take the time to explore your goals, talk through your
                concerns, and create a bespoke plan that's completely tailored
                to you.
              </p>

              <p>
                I know how personal hair can be, whether you're coming to me
                because of hair loss, fine or thinning hair, or simply because
                you want more length and volume. That's why consultations at
                Goddess Rising Hair Extensions are never rushed. It's about you
                feeling seen, understood, and supported from the very start.
              </p>

              <h2>What happens during your consultation?</h2>

              <ul className={styles.bulletList}>
                <li>
                  We'll start by chatting about your current hair, lifestyle,
                  and what you'd love to achieve.
                </li>
                <li>
                  I'll assess your hair and scalp to determine the safest and
                  most effective options for you.
                </li>
                <li>
                  You'll learn about the different methods I offer, from nano
                  rings, tiny tips, braidless weave, and secret weave extensions
                  to mesh integration for hair loss.
                </li>
                <li>
                  I'll colour-match your hair and recommend a hair length,
                  weight and type, to achieve a seamless blend.
                </li>
                <li>
                  We'll go over maintenance, aftercare, and investment, so you
                  know exactly what to expect, no surprises, no hidden costs.
                </li>
                <li>
                  I'll answer all your questions (remember: there's no such
                  thing as a silly question!) and give you honest, professional
                  advice, even if that means recommending alternatives before
                  you commit.
                </li>
              </ul>

              <p>
                During your consultation, I'll colour match your extensions
                perfectly to your natural hair and advise on the weight, length,
                and method based on your hair type, cut, and bluntness. Blending
                is everything, so it's important that your hair isn't cut or
                coloured between the consultation and your fitting. This ensures
                the final result is seamless, natural, and tailored just for
                you.
              </p>

              <section
                className={styles.consultationImageSection}
                aria-label="Private hair consultation environment at Goddess Rising"
              >
                <img
                  src="/assets/images/goddess-rising-salon.webp"
                  alt="Private one-to-one hair consultation room with calm neutral tones"
                  className={styles.consultationImage}
                  loading="lazy"
                  width={1400}
                  height={933}
                />
              </section>

              <h2>Why a consultation matters</h2>
              <p>
                Hair extensions and hair loss solutions aren't
                one-size-fits-all. Choosing the right method is about more than
                picking what looks good, it's about protecting your natural
                hair, finding something that suits your lifestyle, and ensuring
                you feel completely confident with your choice.
              </p>
              <p>
                Your consultation gives us the chance to create a personalised
                hair plan that feels right for you, and sets the foundation for
                beautiful, natural, and long-lasting results.
              </p>

              <h2>A calming, private space</h2>
              <p>
                Just like your appointment, your consultation takes place in my
                private one-to-one salon. With soft lighting, candles, and the
                calming aroma of sage and sandalwood, it's a space where you can
                relax, open up, and feel at ease.
              </p>

              <p>
                Ready to take the first step?{" "}
                <a
                  href="https://www.fresha.com/a/goddess-rising-hair-extensions-belper-21-market-place-cfr78yg5"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book a consultation on Fresha (opens in a new tab)"
                  className={styles.ctaLink}
                >
                  <span className={styles.ctaSpan}>Book your consultation</span>
                </a>{" "}
                today and begin your journey towards confidence, transformation,
                and rising as the goddess you truly are.
              </p>
            </div>
          </div>
        </section>
      </section>

      <Reviews />
    </>
  );
}
