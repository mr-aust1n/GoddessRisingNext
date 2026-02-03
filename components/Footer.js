'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

function useIsDesktop(breakpoint = 768) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${breakpoint}px)`);
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [breakpoint]);

  return isDesktop;
}

export default function Footer() {
  const year = new Date().getFullYear();
  const isDesktop = useIsDesktop(768);

  return (
    <footer className={styles.mainFooter} aria-label="Site Footer">
      {!isDesktop ? (
        <div className={styles.footerGridMobile} aria-label="Footer">
          <div className={styles.footerHeader}>
            <Image
              src="/assets/images/goddess-hair-extensions-logo.webp"
              alt="Goddess Rising Hair Extensions logo"
              className={styles.footerLogo}
              width={260}
              height={58}
            />
          </div>

          <nav className={styles.footerMenu} aria-label="More Info">
            <h2 className={styles.sectionHeading}>More Info</h2>
            <ul className={styles.linkList}>
              <li>
                <Link href="/mesh-integration" className={styles.footerLink}>
                  Mesh System
                </Link>
              </li>
              <li>
                <Link href="/hair-extensions" className={styles.footerLink}>
                  Hair Extensions
                </Link>
              </li>
              <li>
                <Link href="/consultation" className={styles.footerLink}>
                  Consultation
                </Link>
              </li>
              <li>
                <Link href="/faq" className={styles.footerLink}>
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>

          <nav className={styles.footerContent} aria-label="Contact">
            <h2 className={styles.sectionHeading}>Contact</h2>
            <ul className={styles.linkList}>
              <li>
                <Link href="/contact" className={styles.footerLink}>
                  Contact
                </Link>
              </li>
              <li>
                <a href="tel:+447356077270" className={styles.footerLink}>
                  Call Us
                </a>
              </li>
              <li>
                <a
                  href="mailto:sal@goddessrisinghair.co.uk"
                  className={styles.footerLink}
                >
                  Email Us
                </a>
              </li>
            </ul>
          </nav>

          <div className={styles.footerBottom}>
            <h2 className={styles.sectionHeading}>Address</h2>
            <a
              href="https://www.google.com/maps/search/?api=1&query=21+Market+Place+Belper+DE56+1FZ"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.address}
            >
              21 Market Place, Belper
              <br />
              DE56 1FZ
            </a>

            <p className={styles.copyText} aria-label="Social links">
              <a
                href="https://www.tiktok.com/@goddess_rising_hair"
                target="_blank"
                rel="noreferrer"
              >
                TIKTOK
              </a>{' '}
              <a
                href="https://www.instagram.com/goddess_rising_hair/"
                target="_blank"
                rel="noreferrer"
              >
                INSTAGRAM
              </a>{' '}
              <a
                href="https://www.facebook.com/GoddessRisingHair"
                target="_blank"
                rel="noreferrer"
              >
                FACEBOOK
              </a>
            </p>

            <p className={styles.copyText}>
              Website by{' '}
              <a
                href="https://www.mraustin.co.uk"
                target="_blank"
                rel="noreferrer"
              >
                Mr Austin®
              </a>{' '}
              &copy; {year}
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className={styles.topSection} aria-label="Footer">
            <div className={styles.leftColumn}>
              <Image
                src="/assets/images/goddess-hair-logo.webp"
                alt="Goddess Rising Hair Extensions logo"
                className={styles.footerLogo}
                width={260}
                height={58}
              />
            </div>

            <nav className={styles.middleColumn} aria-label="More Info">
              <h2 className={styles.sectionHeading}>More Info</h2>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/mesh-integration" className={styles.footerLink}>
                    Mesh System
                  </Link>
                </li>
                <li>
                  <Link href="/hair-extensions" className={styles.footerLink}>
                    Hair Extensions
                  </Link>
                </li>
                <li>
                  <Link href="/consultation" className={styles.footerLink}>
                    Consultation
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className={styles.footerLink}>
                    FAQ
                  </Link>
                </li>
              </ul>
            </nav>

            <div className={styles.rightColumn}>
              <nav aria-label="Contact">
                <h2 className={styles.sectionHeading}>Contact</h2>
                <ul className={styles.linkList}>
                  <li>
                    <Link href="/contact" className={styles.footerLink}>
                      Contact
                    </Link>
                  </li>
                  <li>
                    <a href="tel:+447356077270" className={styles.footerLink}>
                      Call Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:sal@goddessrisinghair.co.uk"
                      className={styles.footerLink}
                    >
                      Email Us
                    </a>
                  </li>
                </ul>
              </nav>

              <h2 className={styles.sectionHeading}>Address</h2>
              <a
                href="https://www.google.com/maps/search/?api=1&query=21+Market+Place+Belper+DE56+1FZ"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.address}
              >
                21 Market Place, Belper
                <br />
                DE56 1FZ
              </a>
            </div>
          </div>

          <div className={styles.desktopCopyright}>
            <p className={styles.copyText} aria-label="Social links">
              <a
                href="https://www.tiktok.com/@goddess_rising_hair"
                target="_blank"
                rel="noreferrer"
              >
                TIKTOK
              </a>{' '}
              |{' '}
              <a
                href="https://www.instagram.com/goddess_rising_hair/"
                target="_blank"
                rel="noreferrer"
              >
                INSTAGRAM
              </a>{' '}
              |{' '}
              <a
                href="https://www.facebook.com/GoddessRisingHair"
                target="_blank"
                rel="noreferrer"
              >
                FACEBOOK
              </a>
            </p>

            <p className={styles.copyText}>
              Website by{' '}
              <a
                href="https://www.mraustin.co.uk"
                target="_blank"
                rel="noreferrer"
              >
                Mr Austin®
              </a>{' '}
              &copy; {year}
            </p>
          </div>
        </>
      )}
    </footer>
  );
}
