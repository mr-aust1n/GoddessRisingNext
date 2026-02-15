// app/faq/FaqClient.js
"use client";

import { useMemo, useState, useEffect } from "react";
import styles from "../../styles/Faq.module.css";
import { faqs } from "./faqs-data";

export default function FaqClient() {
  const [openIndex, setOpenIndex] = useState(null);
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredFaqs = useMemo(() => {
    const q = query.trim().toLowerCase();

    return faqs.filter((faq) => {
      const matchesFilter =
        activeFilter === "all" ? true : faq.category === activeFilter;

      if (!matchesFilter) return false;
      if (!q) return true;

      const haystack = `${faq.question} ${faq.answer.join(" ")}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [query, activeFilter]);

  useEffect(() => {
    setOpenIndex(null);
  }, [query, activeFilter]);

  const toggleFaq = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <section className={styles.faqPage} aria-label="Hair extension FAQs">
      <div className={styles.container}>
        <header className={styles.intro}>
          <p className={styles.tagline}>Answers before your appointment</p>
          <h1>Frequently Asked Questions</h1>
          <p>
            From maintenance schedules to styling tips, here are the answers to
            the questions I receive most often. If you can't find what you're
            looking for, drop me a message and I'll be happy to help.
          </p>

          <div className={styles.controls} aria-label="FAQ search and filters">
            <label className={styles.searchLabel}>
              <span className={styles.srOnly}>Search FAQs</span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={styles.searchInput}
                placeholder="Search questions..."
                aria-label="Search FAQs"
              />
            </label>

            <div
              className={styles.filterGroup}
              role="group"
              aria-label="Filter FAQs"
            >
              <button
                type="button"
                onClick={() => handleFilter("all")}
                className={`${styles.filterBtn} ${
                  activeFilter === "all" ? styles.active : ""
                }`}
                aria-pressed={activeFilter === "all"}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => handleFilter("mesh")}
                className={`${styles.filterBtn} ${
                  activeFilter === "mesh" ? styles.active : ""
                }`}
                aria-pressed={activeFilter === "mesh"}
              >
                Mesh
              </button>
              <button
                type="button"
                onClick={() => handleFilter("extensions")}
                className={`${styles.filterBtn} ${
                  activeFilter === "extensions" ? styles.active : ""
                }`}
                aria-pressed={activeFilter === "extensions"}
              >
                Hair Extensions
              </button>
            </div>

            <p className={styles.resultsCount} aria-live="polite">
              Showing {filteredFaqs.length}{" "}
              {filteredFaqs.length === 1 ? "result" : "results"}
            </p>
          </div>
        </header>

        {filteredFaqs.length === 0 ? (
          <div className={styles.noResults} role="status" aria-live="polite">
            No FAQs found. Try a different search term.
          </div>
        ) : (
          <div className={styles.faqList} role="list">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;

              const itemClass = `${styles.faqItem} ${
                faq.category === "mesh" ? styles.meshItem : styles.extItem
              }`;

              return (
                <article
                  className={itemClass}
                  key={faq.question}
                  role="listitem"
                >
                  <button
                    type="button"
                    className={styles.questionButton}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                    onClick={() => toggleFaq(index)}
                  >
                    <span className={styles.questionText}>{faq.question}</span>
                    <span className={styles.toggleCopy}>
                      {isOpen ? "Hide answer" : "Read more"}
                      <span className={styles.toggleIcon}>
                        {isOpen ? "-" : "+"}
                      </span>
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    aria-hidden={!isOpen}
                    className={`${styles.answer} ${isOpen ? styles.open : ""}`}
                  >
                    {faq.answer.map((paragraph, paragraphIndex) => (
                      <p key={`${faq.question}-${paragraphIndex}`}>
                        {paragraph}
                      </p>
                    ))}

                    <button
                      type="button"
                      className={styles.readMore}
                      onClick={() => toggleFaq(index)}
                      aria-label={
                        isOpen ? "Hide answer" : "Read more about this question"
                      }
                    >
                      {isOpen ? "Hide answer" : "Read more"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
