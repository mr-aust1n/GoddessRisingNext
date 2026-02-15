import Link from "next/link";
import Image from "next/image";
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

        {/* No client component, links are in server HTML */}
        <details className={styles.navWrapper}>
          <summary
            className={styles.hamburger}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </summary>

          <nav className={styles.nav} aria-label="Main Menu">
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.linkStyle}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
