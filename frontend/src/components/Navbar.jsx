import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  `nav-link ${isActive ? "nav-link-active" : ""}`;

const styles = `
@import url("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700&family=Figtree:wght@500;600&display=swap");

.site-header {
  --nav-ink: #14213d;
  --nav-ink-soft: #55607a;
  --nav-accent: #c8102e;
  --nav-surface: #ffffff;
  --nav-wash: #f3f5fa;
  --nav-line: #e1e5ee;
  --nav-height: 68px;

  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.88);
  -webkit-backdrop-filter: saturate(180%) blur(12px);
  backdrop-filter: saturate(180%) blur(12px);
  border-bottom: 1px solid var(--nav-line);
  font-family: "Figtree", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
}

.site-header *,
.site-header *::before,
.site-header *::after {
  box-sizing: border-box;
}

.site-header .navbar {
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 clamp(16px, 4vw, 32px);
  min-height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

/* Brand */
.site-header .brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--nav-ink);
  font-family: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
  font-weight: 700;
  font-size: 1.35rem;
  letter-spacing: -0.02em;
  line-height: 1;
}

.site-header .brand-icon {
  position: relative;
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 10px 10px 10px 3px;
  background: var(--nav-ink);
  color: #fff;
  font-size: 1.1rem;
  font-weight: 700;
}

.site-header .brand-icon::after {
  content: "";
  position: absolute;
  top: -3px;
  right: -3px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--nav-accent);
  border: 2px solid #fff;
}

.site-header .brand-accent {
  color: var(--nav-accent);
}

/* Mobile toggle */
.site-header .mobile-menu-button {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 1px solid var(--nav-line);
  border-radius: 12px;
  background: var(--nav-surface);
  color: var(--nav-ink);
  font-size: 1.25rem;
  line-height: 1;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.site-header .mobile-menu-button:hover {
  background: var(--nav-wash);
}

.site-header .mobile-menu-button[aria-expanded="true"] {
  background: var(--nav-ink);
  border-color: var(--nav-ink);
  color: #fff;
}

/* Menu: mobile dropdown panel */
.site-header .nav-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 8px clamp(16px, 4vw, 32px) 20px;
  background: var(--nav-surface);
  border-bottom: 1px solid var(--nav-line);
  box-shadow: 0 18px 30px -18px rgba(20, 33, 61, 0.35);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translateY(-6px);
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0s linear 0.2s;
}

.site-header .nav-menu.nav-menu-open {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateY(0);
  transition-delay: 0s;
}

.site-header .nav-link {
  position: relative;
  display: block;
  padding: 14px 4px 14px 16px;
  color: var(--nav-ink-soft);
  font-weight: 600;
  font-size: 1.02rem;
  text-decoration: none;
  border-bottom: 1px solid var(--nav-line);
  transition: color 0.2s ease;
}

.site-header .nav-link:last-child {
  border-bottom: 0;
}

.site-header .nav-link::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 3px;
  height: 0;
  border-radius: 2px;
  background: var(--nav-accent);
  transform: translateY(-50%);
  transition: height 0.2s ease;
}

.site-header .nav-link:hover,
.site-header .nav-link-active {
  color: var(--nav-ink);
}

.site-header .nav-link-active::before {
  height: 55%;
}

/* Focus */
.site-header .brand:focus-visible,
.site-header .nav-link:focus-visible,
.site-header .mobile-menu-button:focus-visible {
  outline: 2px solid var(--nav-accent);
  outline-offset: 3px;
  border-radius: 8px;
}

/* Desktop */
@media (min-width: 768px) {
  .site-header .mobile-menu-button {
    display: none;
  }

  .site-header .nav-menu {
    position: static;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    padding: 0;
    background: transparent;
    border: 0;
    box-shadow: none;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: none;
    transition: none;
  }

  .site-header .nav-link {
    padding: 8px 14px;
    border-bottom: 0;
    border-radius: 8px;
    font-size: 0.97rem;
  }

  .site-header .nav-link:hover {
    background: var(--nav-wash);
  }

  .site-header .nav-link::before {
    left: 14px;
    right: 14px;
    top: auto;
    bottom: 2px;
    width: auto;
    height: 2px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.25s ease;
  }

  .site-header .nav-link-active::before {
    height: 2px;
    transform: scaleX(1);
  }
}

/* Small phones */
@media (max-width: 380px) {
  .site-header .brand {
    font-size: 1.2rem;
  }

  .site-header .brand-icon {
    width: 32px;
    height: 32px;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .site-header *,
  .site-header *::before,
  .site-header *::after {
    transition: none !important;
  }
}
`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <style>{styles}</style>

      <nav className="navbar container">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-icon">S</span>
          <span>
            Skill<span className="brand-accent">Nep</span>
          </span>
        </Link>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div
          className={`nav-menu ${menuOpen ? "nav-menu-open" : ""}`}
        >
          <NavLink
            to="/"
            end
            className={navLinkClass}
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/classes"
            className={navLinkClass}
            onClick={closeMenu}
          >
            Recorded Classes
          </NavLink>

          <NavLink
            to="/about"
            className={navLinkClass}
            onClick={closeMenu}
          >
            About Us
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
