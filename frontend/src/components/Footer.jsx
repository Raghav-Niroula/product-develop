import { Link } from "react-router-dom";

const styles = `
.site-footer {
  --f-bg: #0f1b33;
  --f-text: #e8ecf5;
  --f-muted: #a3aec7;
  --f-accent: #f2a93b;
  --f-accent-ink: #1a1203;
  --f-line: rgba(255, 255, 255, 0.12);
  position: relative;
  margin-top: 4rem;
  background: var(--f-bg);
  color: var(--f-text);
  line-height: 1.6;
}
.site-footer::before {
  content: "";
  position: absolute;
  inset: 0 0 auto 0;
  height: 4px;
  background: var(--f-accent);
}
.site-footer .footer-container {
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  padding: clamp(2.5rem, 6vw, 4.5rem) clamp(1rem, 4vw, 2rem) 1.5rem;
  box-sizing: border-box;
}
.site-footer .footer-main {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1.2fr;
  gap: clamp(2rem, 5vw, 4rem);
}
.site-footer .footer-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--f-text);
  text-decoration: none;
  font-weight: 700;
  font-size: 1.5rem;
}
.site-footer .footer-logo .brand-icon {
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.65rem;
  background: var(--f-accent);
  color: var(--f-accent-ink);
  font-weight: 800;
}
.site-footer .footer-logo .brand-accent { color: var(--f-accent); }
.site-footer .footer-brand p {
  max-width: 34ch;
  margin: 1rem 0 1.5rem;
  color: var(--f-muted);
}
.site-footer .footer-cta {
  display: inline-block;
  padding: 0.7rem 1.25rem;
  border-radius: 999px;
  background: var(--f-accent);
  color: var(--f-accent-ink);
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.site-footer .footer-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(242, 169, 59, 0.35);
}
.site-footer h3 {
  margin: 0 0 1rem;
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--f-text);
}
.site-footer .footer-links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.6rem;
}
.site-footer .footer-links a,
.site-footer .footer-email {
  color: var(--f-muted);
  text-decoration: none;
  background-image: linear-gradient(var(--f-accent), var(--f-accent));
  background-repeat: no-repeat;
  background-position: 0 100%;
  background-size: 0 2px;
  padding-bottom: 2px;
  transition: color 0.2s ease, background-size 0.25s ease;
}
.site-footer .footer-links a:hover,
.site-footer .footer-email:hover {
  color: var(--f-text);
  background-size: 100% 2px;
}
.site-footer .footer-contact p { margin: 0 0 1rem; color: var(--f-muted); }
.site-footer .footer-email {
  display: inline-block;
  color: var(--f-accent);
  font-weight: 600;
  overflow-wrap: anywhere;
}
.site-footer .footer-bottom {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem 1.5rem;
  margin-top: clamp(2rem, 5vw, 3.5rem);
  padding-top: 1.25rem;
  border-top: 1px solid var(--f-line);
  color: var(--f-muted);
  font-size: 0.9rem;
}
.site-footer .footer-bottom p { margin: 0; }
.site-footer .footer-tagline { color: var(--f-text); font-weight: 600; }
.site-footer a:focus-visible {
  outline: 2px solid var(--f-accent);
  outline-offset: 4px;
  border-radius: 4px;
}

/* Tablet */
@media (max-width: 900px) {
  .site-footer .footer-main { grid-template-columns: 1fr 1fr; }
  .site-footer .footer-brand { grid-column: 1 / -1; }
  .site-footer .footer-brand p { max-width: 52ch; }
}

/* Mobile */
@media (max-width: 560px) {
  .site-footer .footer-main { grid-template-columns: 1fr; gap: 2rem; }
  .site-footer .footer-cta { width: 100%; text-align: center; box-sizing: border-box; }
  .site-footer .footer-bottom { flex-direction: column; align-items: flex-start; }
}

@media (prefers-reduced-motion: reduce) {
  .site-footer .footer-cta,
  .site-footer .footer-links a,
  .site-footer .footer-email { transition: none; }
  .site-footer .footer-cta:hover { transform: none; }
}
`;

export default function Footer() {
  return (
    <footer className="site-footer">
      <style>{styles}</style>

      <div className="container footer-container">
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <Link to="/" className="brand footer-logo" aria-label="SkillNep home">
              <span className="brand-icon">S</span>
              <span>
                Skill<span className="brand-accent">Nep</span>
              </span>
            </Link>

            <p>
              Learn anytime, anywhere. Access recorded classes and continue your
              learning journey with SkillNep.
            </p>

            <Link to="/classes" className="footer-cta">
              Browse classes
            </Link>
          </div>

          {/* Quick Links */}
          <nav className="footer-links" aria-label="Footer">
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/classes">Recorded Classes</Link>
            <Link to="/about">About Us</Link>
          </nav>

          {/* Contact Section */}
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Have questions or need assistance?</p>
            <a href="mailto:info@skillnep.com" className="footer-email">
              info@skillnep.com
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} SkillNep. All rights reserved.</p>
          <p className="footer-tagline">Learn. Grow. Succeed.</p>
        </div>
      </div>
    </footer>
  );
}
