"use client";

import { useMemo, useState, useEffect } from "react";
import styles from "../../styles/Faq.module.css";

const faqs = [
  {
    category: "extensions",
    question: "Will hair extensions damage my natural hair?",
    answer: [
      "When fitted correctly and maintained properly, hair extensions will not damage your natural hair. The problem usually comes from poorly applied or badly matched extensions, which I see far too often. At Goddess Rising, my priority is always the health of your hair and scalp. I only use safe, professional methods and tailor the weight and placement to your unique hair type, so your natural hair can stay strong and healthy. I also provide full aftercare advice, to ensure that you can care for your extensions properly at home, which also avoids causing damage to your natural hair",
    ],
  },
  {
    category: "extensions",
    question: "How long do hair extensions last?",
    answer: [
      "With the right care and maintenance, the hair itself can be re-used for up to a year. Once you've had your extensions applied, your natural hair will continue to grow, which means that you will require a full refit every 6-10 weeks.",
      'I do not offer "push ups" as some salons do, because opening and moving the beads can cause unnecessary damage. Instead, I fully remove and reapply your extensions on a new section of hair to avoid matting and tension.',
    ],
  },
  {
    category: "extensions",
    question: "Can I style my hair extensions?",
    answer: [
      "Yes! You can curl, straighten, and style your extensions just like your own hair.",
      "The use of heat tools can cause damage and shorten the life of your extension, so it's important that you do not use heat excessively.",
      "I'll show you how to look after them properly, including the right products and techniques, so your extensions stay smooth, shiny, and beautiful for as long as possible.",
    ],
  },
  {
    category: "extensions",
    question: "Will the extensions look natural?",
    answer: [
      "Absolutely. I work with multiple premium suppliers, which gives me access to a wide variety of textures, colours, and lengths. I have over 9 years experience specialising in hair extensions. This means I can create a seamless blend that matches your own hair perfectly. Whether you want subtle thickness or a complete transformation, the end result will look natural.",
    ],
  },
  {
    category: "extensions",
    question: "Which method is best for me?",
    answer: [
      "There's no one-size-fits-all answer…it depends on your hair type, lifestyle, and desired result. That's why I offer a detailed consultation, where I'll assess your hair and recommend the method (nano rings, tiny tips, braidless weave, or secret weave) that will work best for you.",
    ],
  },
  {
    category: "extensions",
    question: "Can I wash and blow-dry my extensions?",
    answer: [
      "Yes, and I'll teach you the best way to do it. I also offer luxury wash and blow-dry appointments here in the salon if you'd like to treat yourself and let me take care of it for you.",
    ],
  },
  {
    category: "extensions",
    question: "I've had bad extensions before - can you fix them?",
    answer: [
      "Unfortunately, I see this a lot. Many clients come to me with extensions that have been fitted incorrectly, are too heavy for their hair, or just don't blend. In most cases, I can safely remove and refit them, or create a new set that suits your hair properly.",
    ],
  },
  {
    category: "mesh",
    question: "Is mesh integration painful?",
    answer: [
      "Not at all. The system is designed to be lightweight and breathable. The mesh distributes the weight of the added hair evenly, so there's no tension or pulling on your natural hair. Many clients say they forget it's even there once it's fitted.",
    ],
  },
  {
    category: "mesh",
    question: "Will my natural hair keep growing underneath?",
    answer: [
      "Mesh integration won't address underlying hair loss issues, but one of the main benefits of mesh integration is that your natural hair can continue to grow safely beneath the system. Because the weight is distributed across the mesh (instead of directly onto fragile strands), it allows weak hair to rest and recover while giving you full coverage.",
    ],
  },
  {
    category: "mesh",
    question: "How often will I need maintenance?",
    answer: [
      "After your initial fitting, you'll come back for a pinch-forward appointment at 4 weeks. This is a quick check-up where I tighten the system to keep everything secure. Around 3–4 weeks after that, you'll return for a full refit. This involves carefully removing the entire system, brushing out the natural hair you've shed (we all lose 80–100 hairs a day naturally, but because they've been held under the mesh, they're released all at once at this stage), then treating you to a relaxing wash and scalp treatment before reapplying your system fresh.",
    ],
  },
  {
    category: "mesh",
    question: "How long does mesh integration last?",
    answer: [
      "The closure itself can last 3–6 months with proper aftercare, and the premium wefts used within the system are reusable for 9–12 months. With regular maintenance and care, this makes mesh integration a long-term solution.",
    ],
  },
  {
    category: "mesh",
    question: "Is it a big commitment?",
    answer: [
      "Yes - mesh integration is an investment in both time and finances. It's not a quick fix, and I'll always be honest about that. During your consultation, we'll talk through your lifestyle, goals, and any alternative options to make sure this is the right solution for you. That said, for the women who choose mesh integration, it's often life-changing. The transformation in confidence, freedom, and self-expression is priceless.",
    ],
  },
  {
    category: "mesh",
    question: "Will people be able to tell I'm wearing a system?",
    answer: [
      "No. Mesh integration is designed to be discreet, seamless, and completely undetectable. The added hair is blended perfectly with your own, so it looks like it's growing from your scalp. Even close-up, it's virtually invisible.",
    ],
  },
  {
    category: "mesh",
    question: "Can I wash and style my hair as normal?",
    answer: [
      "Yes, you can wash, blow-dry, curl, and straighten your hair as usual. I'll give you full aftercare advice and recommend the best products to keep your system in beautiful condition between maintenance appointments.",
    ],
  },
];

export default function Faq() {
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.answer.join(" "),
              },
            })),
          }),
        }}
      />

      <section className={styles.faqPage} aria-label="Hair extension FAQs">
        <div className={styles.container}>
          <header className={styles.intro}>
            <p className={styles.tagline}>Answers before your appointment</p>
            <h1>Frequently Asked Questions</h1>
            <p>
              From maintenance schedules to styling tips, here are the answers
              to the questions I receive most often. If you can't find what
              you're looking for, drop me a message and I'll be happy to help.
            </p>

            <div
              className={styles.controls}
              aria-label="FAQ search and filters"
            >
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
                      <span className={styles.questionText}>
                        {faq.question}
                      </span>
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
                          isOpen
                            ? "Hide answer"
                            : "Read more about this question"
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
    </>
  );
}
