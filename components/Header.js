import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import HeaderClient from "./HeaderClient";

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

        {/* Client logic (hamburger + active state) */}
        <HeaderClient navItems={navItems} />
      </div>
    </header>
  );
}
