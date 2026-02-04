import Image from "next/image";
import styles from "./BeforeAfter.module.css";

const BeforeAfter = ({
  name,
  location,
  description,
  beforeImage,
  afterImage,
  flip = false,
}) => {
  const sectionClass = flip
    ? `${styles.beforeAfter} ${styles.flip}`
    : styles.beforeAfter;

  return (
    <section
      className={sectionClass}
      aria-label={`Before and after results for ${name}, ${location}`}
    >
      <div className={styles.text}>
        <h3>
          {name} - {location}
        </h3>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.images}>
        <figure className={styles.image}>
          <Image
            className={styles.photo}
            src={beforeImage}
            alt={`Before results for ${name}`}
            width={359}
            height={604}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 50vw, 359px"
          />
        </figure>

        <figure className={styles.image}>
          <Image
            className={styles.photo}
            src={afterImage}
            alt={`After results for ${name}`}
            width={359}
            height={604}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 50vw, 359px"
          />
        </figure>
      </div>
    </section>
  );
};

export default BeforeAfter;
