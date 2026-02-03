'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { href: '/about', label: 'About' },
    { href: '/consultation', label: 'Consultations' },
    { href: '/mesh-integration', label: 'Mesh Integration' },
    { href: '/hair-extensions', label: 'Hair Extensions' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className={styles.headerArea} aria-label="Site Navigation">
      <div className={styles.headerInner}>
        <Link href="/" className={styles.logo} aria-label="Go to home">
          <Image
            src="/assets/images/goddess-hair-extensions-logo.webp"
            alt="Goddess Rising - Hair Extensions and Hair Solutions, Belper"
            width={224}
            height={50}
            priority
          />
        </Link>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          className={`${styles.nav} ${menuOpen ? styles.show : ''}`}
          aria-label="Main Menu"
        >
          <ul>
            {navItems.map((item) => {
              const isHome = item.href === '/';
              const isActive = pathname === item.href;

              if (isHome && isActive) {
                return (
                  <li key={item.href}>
                    <span
                      className={`${styles.linkStyle} ${styles.active}`}
                      aria-current="page"
                    >
                      {item.label}
                    </span>
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${styles.linkStyle} ${
                      isActive ? styles.active : ''
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
