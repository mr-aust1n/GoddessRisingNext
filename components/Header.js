"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/consultation", label: "Consultations" },
  { href: "/mesh-integration", label: "Mesh Integration" },
  { href: "/hair-extensions", label: "Hair Extensions" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.headerArea} aria-label="Site Navigation">
      <div className={styles.headerInner}>
        <Link
          href="/"
          className={styles.logo}
          aria-label="Go to home"
          onClick={closeMenu}
        >
          <Image
            src="/assets/images/goddess-hair-extensions-logo.webp"
            alt="Goddess Rising - Hair Extensions and Hair Solutions, Belper"
            width={224}
            height={50}
            priority
          />
        </Link>

        <button
          type="button"
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="site-main-menu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>

        <nav
          id="site-main-menu"
          className={`${styles.nav} ${menuOpen ? styles.show : ""}`}
          aria-label="Main Menu"
        >
          <ul>
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${styles.linkStyle} ${isActive ? styles.active : ""}`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={closeMenu}
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
