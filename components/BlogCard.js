import Link from "next/link";
import styles from "./BlogCard.module.css";

const BlogCard = ({ title, date, excerpt, image, id, bgColor }) => (
  <div
    className={styles.card}
    style={{ backgroundColor: bgColor || "#fff" }}
    aria-label={`Blog post titled ${title}`}
  >
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.dateExcerpt}>
      {date} – {excerpt}
    </p>
    {image && (
      <img src={image} alt={`Cover for ${title}`} className={styles.image} />
    )}
    <Link
      href={`/blog/${id}`}
      className={styles.link}
      aria-label={`Read more: ${title}`}
    >
      See Blog
    </Link>
  </div>
);

export default BlogCard;
