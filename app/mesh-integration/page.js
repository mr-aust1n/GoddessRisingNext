// Mesh Integration Page
import Link from "next/link";
import BeforeAfter from "../../components/BeforeAfter";
import styles from "../../styles/MeshIntegration.module.css";
export const metadata = {
  title:
    "Mesh Integration in Belper | Hair Loss and Thinning Support | Goddess Rising",
  description:
    "Mesh integration in Belper for women experiencing hair thinning or hair loss. A discreet, breathable system designed for secure coverage and natural blending.",
  alternates: { canonical: "/mesh-integration" },
  openGraph: {
    type: "website",
    title: "Mesh Integration in Belper | Goddess Rising",
    description:
      "A discreet mesh integration system for coverage, comfort, and confidence. Tailored fitting and ongoing maintenance in a private Belper studio.",
    images: ["/assets/images/mesh-integration-goddess-rising-og.webp"],
    url: "https://www.goddessrisinghair.co.uk/mesh-integration",
    siteName: "Goddess Rising Hair Extensions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mesh Integration in Belper | Goddess Rising",
    description:
      "Breathable, discreet coverage for hair thinning or hair loss with tailored fitting and regular maintenance support.",
    images: ["/assets/images/mesh-integration-goddess-rising-og.webp"],
  },
};

export default function Hairmeshs() {
  return (
    <>
      {/* HERO */}
      <section
        className={styles.heroSection}
        aria-label="Mesh integration hero"
      >
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Mesh Integration Systems
              <span className={styles.heroTitleAccent}>
                {" "}
                A hair-loss solution
              </span>
            </h1>

            <p className={styles.heroSubtitle}>
              A gentle, non-surgical system designed to restore confidence with
              a natural, breathable finish.
            </p>

            <div
              className={styles.heroActions}
              aria-label="Mesh integration hero actions"
            >
              <a
                href="https://www.fresha.com/a/goddess-rising-hair-meshs-belper-21-market-place-cfr78yg5"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroButtonPrimary}
                aria-label="Book a mesh consultation on Fresha (opens in a new tab)"
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

          <div className={styles.heroMedia} aria-label="Mesh hero image">
            <img
              src="/assets/images/salon-goddess-rising-mesh.webp"
              alt="Mesh integration hair system result shown with natural-looking volume"
              className={styles.heroImage}
              width="1074"
              height="605"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* MESH INTEGRATION CONTENT */}
      <section
        className={styles.meshSection}
        aria-label="About Goddess Rising mesh integration"
      >
        <div className={styles.meshContainer}>
          <div className={styles.meshContent}>
            <h2>
              Mesh Integration: The Empowering Solution for Female Hair Loss &
              Thinning
            </h2>

            <p>
              Hair loss can be one of the most deeply personal and painful
              experiences for a woman. It’s not just hair disappearing, it can
              chip away at confidence, identity, and how you feel about stepping
              out into the world. I understand that loss on a visceral level,
              and I created Goddess Rising to provide more than a cosmetic fix:
              a transformation that helps restore not only your hair, but your
              spirit, your sense of self, and your feminine energy.
            </p>

            <h2>What Is Mesh Integration?</h2>

            <p>
              Mesh integration is a non-surgical, gentle, and custom-fitted hair
              loss system that bridges areas of thinning or hair loss by
              integrating a fine, breathable mesh onto your scalp. Through this
              mesh, I anchor premium hair that blends with your natural hair.
            </p>
            <p>
              Key features: <br />• The mesh acts as a foundation, allowing
              added hair to sit seamlessly and invisibly, rather than pulling or
              stressing weak natural hair. <br /> • It limits tension because
              the mesh shares the weight, rather than putting strain on your
              remaining strands. <br /> • It covers areas where hair has thinned
              or gone completely, giving you a full, natural finish.
            </p>
            <p>
              Unlike wigs or glued systems, mesh integration gives you freedom,
              breathability, and a solution that feels like your own hair.
            </p>

            <p>
              For more frequently asked questions see our{" "}
              <Link href="/faq" aria-label="Visit the FAQ page">
                FAQ page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <BeforeAfter
        name="Sharine"
        location="Belper, Derbyshire"
        description="Years of chemical damage and struggling with trichotillomania left Sharine’s hair fragile and uneven, and her confidence low. We applied a mesh integration system which transformed not just her hair, but how she felt. Soft, natural-looking hair gave her the confidence to finally feel like herself again."
        beforeImage="/assets/images/Mesh_Hair_before_Client1.webp"
        afterImage="/assets/images/Mesh_Hair_after_Client1.webp"
        flip={true}
      />

      <BeforeAfter
        name="Jo"
        location="Heanor, Derbyshire"
        description="Years of lightening had left Jo’s hair damaged and fragile. A mesh integration system gave her the long, glamorous hair she desired, while protecting her natural hair underneath so it could recover and grow."
        beforeImage="/assets/images/Mesh_Hair_before_Client2.webp"
        afterImage="/assets/images/Mesh_Hair_after_Client2.webp"
        flip={false}
      />

      <BeforeAfter
        name="Lucy"
        location="Heage, Amber Valley"
        description="After cancer treatment left Lucy with hair loss, her slow regrowth became a difficult reminder of her journey. A mesh integration system gently transformed her hair, restoring her confidence, identity, and sense of self as she rebuilt her life after cancer."
        beforeImage="/assets/images/Mesh_Hair_before_Client3.webp"
        afterImage="/assets/images/Mesh_Hair_after_Client3.webp"
        flip={true}
      />

      {/* CTA */}
      <section
        className={styles.beforeAfterCtaSection}
        aria-label="Book hair consultation"
      >
        <a
          href="https://www.fresha.com/a/goddess-rising-hair-extensions-belper-21-market-place-cfr78yg5"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.beforeAfterButton}
          aria-label="Book a hair consultation on Fresha (opens in a new tab)"
        >
          Book Your Consultation
        </a>
      </section>
    </>
  );
}
