'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Carousel.module.css';

export default function Carousel() {
  return (
    <section className={styles.carouselContainer} aria-label="Hero Carousel">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className={styles.swiper}
      >
        <SwiperSlide className={`${styles.slide} ${styles.slide1}`}>
          {/* Slide 1 uses an actual image so we can prioritise it */}
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="/assets/images/mobile/mesh-hair-system-goddess-rising-sm.webp"
            />
            <img
              src="/assets/images/mesh-hair-system-goddess-rising.webp"
              alt="Mesh integration hair system result shown with natural-looking coverage"
              className={styles.slideImage}
              loading="eager"
              width={1600}
              height={900}
            />
          </picture>

          <div className={styles.carouselContent}>
            <div className={styles.textBlock}>
              <h1>MESH INTEGRATION</h1>
              <span>
                A discreet, specialist solution for female hair loss and
                thinning, offering secure coverage, comfort and confidence
              </span>
            </div>

            <Link
              href="/mesh-integration"
              className={styles.carouselBtn}
              aria-label="Discover Mesh Integration page"
            >
              Discover Mesh Integration
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className={`${styles.slide} ${styles.slide2}`}>
          <div className={styles.carouselContent}>
            <div className={styles.textBlock}>
              <h2>HAIR EXTENSIONS</h2>
              <span>
                Luxury, bespoke hair extensions designed to add thickness,
                length and confidence, while still looking and feeling like your
                own hair.
              </span>
            </div>

            <Link
              href="/hair-extensions"
              className={styles.carouselBtn}
              aria-label="Learn more about Hair Extensions page"
            >
              Learn More About Hair Extensions
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className={`${styles.slide} ${styles.slide3}`}>
          <div className={styles.carouselContent}>
            <div className={styles.textBlock}>
              <h2>CONFIDENCE THROUGH HAIR</h2>
              <span>
                Goddess Rising is about more than hair, it is about restoring
                confidence and reconnecting with your inner Goddess.
              </span>
            </div>

            <Link
              href="/consultation"
              className={styles.carouselBtn}
              aria-label="Book a free consultation page"
            >
              Book a Free Consultation
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
