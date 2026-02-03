"use client";

import { useState } from "react";
import styles from "../../styles/Contact.module.css";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      setFormStatus({ type: "success", message: "Thanks for your message!" });
      setName("");
      setEmail("");
      setSubject("");
      setMobile("");
      setMessage("");
    } catch (err) {
      setFormStatus({
        type: "error",
        message: "Failed to send message. Try again later.",
      });
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HairSalon",
            "@id": "https://www.goddessrisinghair.co.uk/#hair-salon",
            name: "Goddess Rising Hair Extensions",
            url: "https://www.goddessrisinghair.co.uk",
            telephone: "+447356077270",
            email: "sal@goddessrisinghair.co.uk",
            address: {
              "@type": "PostalAddress",
              streetAddress: "21 Market Place",
              addressLocality: "Belper",
              addressRegion: "Derbyshire",
              postalCode: "DE56 1FZ",
              addressCountry: "GB",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 53.0236442,
              longitude: -1.4785165,
            },
            sameAs: [
              "https://www.instagram.com/goddess_rising_hair/",
              "https://www.facebook.com/profile.php?id=61565118399072&sk=reels_tab",
              "https://www.tiktok.com/",
            ],
          }),
        }}
      />

      <section
        className={styles.contactSection}
        aria-labelledby="contact-heading"
      >
        <div className={styles.container} aria-label="Contact page content">
          {/* Contact Info */}
          <div
            className={styles.infoColumn}
            aria-label="Business contact details"
          >
            <h1 id="contact-heading" className={styles.pageTitle}>
              Contact
            </h1>

            <div
              className={styles.singleContact}
              aria-label="Business location"
            >
              <h2>Location</h2>
              <address className={styles.address}>
                Goddess Rising Hair Extensions
                <br />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Goddess+Rising+Hair+Extensions+21+Market+Place+Belper+DE56+1FZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open directions to Goddess Rising Hair Extensions on Google Maps"
                >
                  21 Market Place, Belper, Derbyshire, DE56 1FZ, United Kingdom
                </a>
              </address>
            </div>

            <div
              className={styles.singleContact}
              aria-label="Business telephone number"
            >
              <h2>Contact number</h2>
              <a
                href="tel:+447356077270"
                aria-label="Call Goddess Rising Hair Extensions on 07356 077270"
              >
                07356 077270
              </a>
            </div>

            <div
              className={styles.singleContact}
              aria-label="Business email address"
            >
              <h2>Email</h2>
              <a
                href="mailto:sal@goddessrisinghair.co.uk"
                aria-label="Email sal at Goddess Rising Hair Extensions"
              >
                sal@goddessrisinghair.co.uk
              </a>
            </div>

            <div
              className={styles.singleContact}
              aria-label="Social media links"
            >
              <h2>Socials</h2>
              <ul className={styles.socials} aria-label="Social media profiles">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61565118399072&sk=reels_tab"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit Goddess Rising Hair Extensions on Facebook"
                  >
                    <FaFacebook aria-hidden="true" focusable="false" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/goddess_rising_hair/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit Goddess Rising Hair Extensions on Instagram"
                  >
                    <FaInstagram aria-hidden="true" focusable="false" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit Goddess Rising Hair Extensions on TikTok"
                  >
                    <FaTiktok aria-hidden="true" focusable="false" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.formColumn} aria-label="Contact form">
            <form
              className={styles.contactForm}
              onSubmit={handleSubmit}
              aria-label="Send a message to Goddess Rising Hair Extensions"
            >
              <div className={styles.formGroup}>
                <label htmlFor="name">Full name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Sally Hair"
                  autoComplete="name"
                  required
                  aria-label="Enter your full name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="hello@websitename.com"
                  autoComplete="email"
                  required
                  aria-label="Enter your email address"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Your subject"
                  required
                  aria-label="Enter the subject of your message"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="mobile">Mobile number</label>
                <input
                  type="tel"
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Your mobile number"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                  aria-label="Enter your mobile number"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Your message</label>
                <textarea
                  id="message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message"
                  required
                  aria-label="Write your message"
                />
              </div>

              <div className={styles.formGroup}>
                <button
                  type="submit"
                  className={styles.submitBtn}
                  aria-label="Send message"
                >
                  Send Message
                </button>

                {formStatus && (
                  <div
                    className={
                      formStatus.type === "success"
                        ? styles.successMessage
                        : styles.errorMessage
                    }
                    role="status"
                    aria-live="polite"
                    aria-label={
                      formStatus.type === "success"
                        ? "Message sent successfully"
                        : "Message failed to send"
                    }
                  >
                    {formStatus.message}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Full width map at the bottom (max width 1400px) */}
        <div className={styles.mapOuter} aria-label="Map section">
          <div className={styles.mapInner} aria-label="Map container">
            <div className={styles.mapHeader} aria-label="Map header">
              <h3 className={styles.mapTitle} id="map-heading">
                Find us in Belper
              </h3>
              <a
                className={styles.mapLink}
                href="https://www.google.com/maps/search/?api=1&query=Goddess+Rising+Hair+Extensions+21+Market+Place+Belper+DE56+1FZ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Goddess Rising Hair Extensions in Google Maps"
              >
                Open in Google Maps
              </a>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.5641412601194!2d-1.4810967876726795!3d53.023644172081404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879f349f5b32d89%3A0xac5c373598dfeb8e!2sGoddess%20Rising%20Hair%20Extensions%20%7C%20Belper!5e1!3m2!1sen!2suk!4v1768659148368!5m2!1sen!2suk"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Google map showing the location of Goddess Rising Hair Extensions in Belper"
              title="Map showing Goddess Rising Hair Extensions location"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
