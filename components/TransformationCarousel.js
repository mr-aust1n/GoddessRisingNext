"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./TransformationCarousel.module.css";

export default function TransformationCarousel() {
  return (
    <section
      className={styles.carouselContainer}
      aria-label="Transformation Carousel"
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className={styles.swiper}
      >
        <SwiperSlide className={`${styles.slide} ${styles.slide1}`}>
          <div className={styles.carouselContent}>
            <Link
              href="/mesh-integration"
              className={styles.carouselBtn}
              aria-label="Discover Mesh Integration"
            >
              Discover Mesh Integration
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className={`${styles.slide} ${styles.slide2}`}>
          <div className={styles.carouselContent}>
            <Link
              href="/hair-extensions"
              className={styles.carouselBtn}
              aria-label="Discover Hair Extensions"
            >
              Discover Hair Extensions
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className={`${styles.slide} ${styles.slide3}`}>
          <div className={styles.carouselContent}>
            <Link
              href="/consultation"
              className={styles.carouselBtn}
              aria-label="Book a free consultation"
            >
              Book a Free Consultation
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
