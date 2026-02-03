import Image from 'next/image';
import Link from 'next/link';
import TransformationCarousel from '../../components/TransformationCarousel';
import styles from '../../styles/About.module.css';

export const metadata = {
  title: 'About Goddess Rising | Luxury Hair Studio in Belper',
  description: 'Learn about Goddess Rising Hair Extensions, founded by Sal in Belper, Derbyshire. A private one to one hair studio focused on confidence, empowerment, and bespoke hair solutions.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Goddess Rising Hair Extensions',
    description: 'Discover the story behind Goddess Rising Hair Extensions, a private luxury hair studio in Belper specialising in bespoke hair extensions and confidence focused transformations.',
    images: ['/assets/images/about-goddess-rising-dt.webp'],
    url: 'https://www.goddessrisinghair.co.uk/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Goddess Rising Hair Extensions',
    description: 'A private one to one hair studio in Belper offering bespoke hair extensions and confidence led transformations.',
    images: ['/assets/images/about-goddess-rising-dt.webp'],
  },
};

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HairSalon',
            name: 'Goddess Rising Hair Extensions',
            image: 'https://www.goddessrisinghair.co.uk/assets/images/about-goddess-rising-dt.webp',
            url: 'https://www.goddessrisinghair.co.uk',
            telephone: '',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Belper',
              addressRegion: 'Derbyshire',
              addressCountry: 'GB',
            },
            founder: {
              '@type': 'Person',
              name: 'Sal',
            },
            priceRange: '££',
            sameAs: ['https://www.instagram.com/', 'https://www.facebook.com/'],
          }),
        }}
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
              width={1600}
              height={900}
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
              />
            </div>
          </div>
        </section>

        {/* ABOUT CONTENT SECTION */}
        <section
          className={styles.testimonialSection}
          aria-labelledby="about-goddess-rising-heading"
          role="region"
        >
          <div className={styles.aboutContainer}>
            <h2 id="about-goddess-rising-heading" className={styles.aboutHeading}>
              ABOUT GODDESS RISING
            </h2>

            <div className={styles.aboutContent}>
              <p>
                As a hair extension and mesh integration specialist, Goddess
                Rising Hair Extensions isn't just about offering hair—it's about
                providing a sanctuary where you feel heard, understood, and truly
                cared for.
              </p>

              <p>
                For many, hair is deeply personal. Whether you're navigating hair
                loss, seeking fuller, longer locks, or simply wanting to feel more
                like yourself again, the journey can be emotional. That's why
                Goddess Rising takes the time to listen to your story and create a
                solution tailored to your unique needs.
              </p>

              <p>
                Located in the heart of Belper, this private, one-to-one studio
                offers a calm, judgment-free space where you can relax and feel
                confident in every step of the process. From your first
                consultation to your aftercare support, you're never just another
                client—you're someone whose confidence and wellbeing matters.
              </p>
            </div>
          </div>
        </section>

        {/* TRANSFORMATION CAROUSEL */}
        <section className={styles.carouselSection} aria-label="Client Transformations">
          <h2 className={styles.carouselHeading}>CLIENT TRANSFORMATIONS</h2>
          <TransformationCarousel />
        </section>

        {/* FOUNDER SECTION */}
        <section
          className={styles.founderSection}
          aria-labelledby="meet-sal-heading"
        >
          <div className={styles.founderContainer}>
            <h2 id="meet-sal-heading" className={styles.founderHeading}>
              MEET SAL - FOUNDER OF GODDESS RISING
            </h2>

            <div className={styles.founderContent}>
              <p>
                Goddess Rising was founded by Sal, a compassionate and experienced
                hair extension specialist who understands the transformative power
                of beautiful hair.
              </p>

              <p>
                With years of expertise in both traditional hair extensions and
                specialist mesh integration systems, Sal brings a unique blend of
                technical skill and genuine care to every appointment. Her mission
                is simple: to help you feel confident, empowered, and beautiful in
                your own skin.
              </p>

              <p>
                Whether you're dealing with hair loss, thinning, or simply want to
                enhance your natural hair, Sal's gentle, personalised approach
                ensures you'll leave feeling like the goddess you truly are.
              </p>
            </div>

            <Link href="/consultation" className={styles.ctaButton}>
              Book Your Free Consultation
            </Link>
          </div>
        </section>

        {/* VALUES SECTION */}
        <section className={styles.valuesSection} aria-label="Our Values">
          <div className={styles.valuesContainer}>
            <h2 className={styles.valuesHeading}>WHY CHOOSE GODDESS RISING?</h2>

            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <h3>Specialist Expertise</h3>
                <p>
                  Trained in advanced hair extension techniques and specialist mesh
                  integration systems for hair loss.
                </p>
              </div>

              <div className={styles.valueCard}>
                <h3>Private & Confidential</h3>
                <p>
                  One-to-one appointments in a calm, private studio where your
                  privacy is respected.
                </p>
              </div>

              <div className={styles.valueCard}>
                <h3>Personalised Care</h3>
                <p>
                  Every client receives a bespoke consultation and tailored
                  solution designed for their unique needs.
                </p>
              </div>

              <div className={styles.valueCard}>
                <h3>Compassionate Service</h3>
                <p>
                  A gentle, understanding approach that puts your comfort and
                  confidence first.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
