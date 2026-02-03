"use client";

import { useRef } from "react";
import styles from "./Reviews.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const reviews = [
  {
    name: "Siobhan H.",
    message:
      "Sally always does an amazing job! She’s not only a fab Extensionist, Sally is a lovely person who makes you feel at ease and comfortable. Highly recommend.",
  },
  {
    name: "Emily - Belper",
    message:
      "Such a beautiful experience. From consultation to the results, I felt heard, seen, and absolutely radiant after my appointment.",
  },
  {
    name: "Britney G",
    message: "Best experience I’ve had with my mesh integration",
  },
  {
    name: "Erin B",
    message:
      "An amazing experience! My first time visiting the salon and I can confidently say I’ll be returning, Sally was so welcoming and professional.",
  },
  {
    name: "Tracey F",
    message:
      "Sal fitted my nano ring hair extensions today and I absolutely love them. I had a consultation and explained what I wanted, and the end result far exceeded my expectations.”",
  },
  {
    name: "Rebekah B",
    message:
      "Fantastic experience visiting Sally at Goddess Hair Rising. Sally is so friendly yet professional and my hair looks amazing. Highly recommended.”",
  },
  {
    name: "Lauren S",
    message:
      "The environment in Goddess Rising is always so relaxing! Sally is super informative and reachable and is clearly really passionate about what she does, I couldn’t be happier with my extensions!",
  },
  {
    name: "Claire S",
    message:
      "This was the first time I’d been to Sally. The salon is beautiful with a relaxed decor and atmosphere. Sally was very welcoming and conversation was very easy. I don’t think we stopped chatting the whole appointment. The hug at the end was an added bonus too. Thank you Sally and I will see you shortly.",
  },
  {
    name: "Joanne A",
    message:
      "I always feel fabulous walking out of the salon. Sal takes time and care with my hair and I have not had any issues for all the years I have been going to her! 100% recommended!! ",
  },
];

const Reviews = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className={styles.reviewsSection} aria-label="Customer Reviews">
      <h2 className={styles.heading}>Customer Reviews</h2>

      <div className={styles.swiperWrapper}>
        <button
          ref={prevRef}
          className={styles.arrowButtonLeft}
          aria-label="Previous Slide"
        >
          <img
            src="/assets/images/left.webp"
            alt="Previous"
            className={styles.arrowIcon}
          />
        </button>

        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            // Little trick: wait for refs to exist
            setTimeout(() => {
              if (
                swiper.params &&
                swiper.params.navigation &&
                swiper.navigation
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.destroy(); // destroy previous navigation
                swiper.navigation.init(); // init again
                swiper.navigation.update(); // update navigation
              }
            });
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className={styles.swiperContainer}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <div className={styles.reviewCard}>
                <p className={styles.reviewer}>{review.name}:</p>
                <p className={styles.message}>{review.message}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          ref={nextRef}
          className={styles.arrowButtonRight}
          aria-label="Next Slide"
        >
          <img
            src="/assets/images/right.webp"
            alt="Next"
            className={styles.arrowIcon}
          />
        </button>
      </div>
    </section>
  );
};

export default Reviews;
