const styles = `
@import url("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700&family=Figtree:wght@400;500;600&display=swap");

.contact-page {
  --c-ink: #14213d;
  --c-ink-soft: #55607a;
  --c-ink-deep: #223760;
  --c-accent: #c8102e;
  --c-wash: #f3f5fa;
  --c-line: #dfe4ee;

  font-family: "Figtree", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  color: var(--c-ink);
  background: var(--c-wash);
}

.contact-page *,
.contact-page *::before,
.contact-page *::after {
  box-sizing: border-box;
}

.contact-page .container {
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 clamp(16px, 4vw, 32px);
}

/* ---------- Hero ---------- */
.contact-page .page-hero {
  position: relative;
  overflow: hidden;
  background: var(--c-ink);
  color: #fff;
  padding: clamp(48px, 9vw, 96px) 0 clamp(88px, 14vw, 150px);
}

/* two ridge lines: a distant one and a near one that melts into the page */
.contact-page .page-hero::before,
.contact-page .page-hero::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.contact-page .page-hero::before {
  height: clamp(70px, 12vw, 130px);
  background: var(--c-ink-deep);
  clip-path: polygon(
    0 100%, 0 55%, 9% 30%, 17% 48%, 30% 8%, 41% 42%, 53% 22%,
    66% 50%, 77% 16%, 89% 44%, 100% 28%, 100% 100%
  );
}

.contact-page .page-hero::after {
  height: clamp(36px, 7vw, 76px);
  background: var(--c-wash);
  clip-path: polygon(
    0 100%, 0 62%, 14% 28%, 24% 52%, 37% 18%, 50% 58%, 63% 34%,
    75% 60%, 88% 22%, 100% 50%, 100% 100%
  );
}

.contact-page .page-hero-content {
  position: relative;
  z-index: 1;
}

.contact-page .section-kicker {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px 6px 12px;
  margin-bottom: 20px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.9);
}

.contact-page .section-kicker::before {
  content: "";
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #ff4d67;
}

.contact-page .page-hero h1 {
  margin: 0 0 16px;
  max-width: 16ch;
  font-family: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
  font-size: clamp(2.2rem, 6.5vw, 3.8rem);
  font-weight: 700;
  line-height: 1.04;
  letter-spacing: -0.03em;
}

.contact-page .page-hero p {
  margin: 0;
  max-width: 50ch;
  font-size: clamp(1rem, 2.2vw, 1.12rem);
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.78);
}

/* ---------- Cards ---------- */
.contact-page .section-padding {
  padding: clamp(8px, 2vw, 16px) 0 clamp(56px, 9vw, 104px);
}

.contact-page .feature-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.contact-page .feature-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: clamp(22px, 3.5vw, 32px);
  background: #fff;
  border: 1px solid var(--c-line);
  border-radius: 16px;
  transition: border-color 0.2s ease;
}

.contact-page .feature-card:hover {
  border-color: var(--c-ink);
}

.contact-page .feature-number {
  margin-bottom: 18px;
  font-family: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
  font-size: 2.6rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.04em;
  color: #cfd6e4;
}

.contact-page .feature-card h3 {
  margin: 0 0 6px;
  font-family: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: var(--c-ink);
}

.contact-page .feature-card p {
  margin: 0 0 22px;
  font-size: 1.02rem;
  line-height: 1.55;
  color: var(--c-ink-soft);
  font-variant-numeric: tabular-nums;
}

.contact-page .feature-card a {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  margin-top: auto;
  font-weight: 600;
  color: var(--c-accent);
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 5px;
  transition: text-decoration-thickness 0.15s ease;
}

.contact-page .feature-card a:hover {
  text-decoration-thickness: 3px;
}

.contact-page .feature-card a:focus-visible {
  outline: 2px solid var(--c-accent);
  outline-offset: 3px;
  border-radius: 6px;
}

/* the coach card is a different kind of action (profile, not a phone call) */
.contact-page .feature-card:last-child {
  background: var(--c-ink);
  border-color: var(--c-ink);
}

.contact-page .feature-card:last-child .feature-number {
  color: rgba(255, 255, 255, 0.22);
}

.contact-page .feature-card:last-child h3 {
  color: #fff;
}

.contact-page .feature-card:last-child p {
  color: rgba(255, 255, 255, 0.75);
}

.contact-page .feature-card:last-child a {
  color: #fff;
  text-decoration-color: #ff4d67;
}

.contact-page .feature-card:last-child a:focus-visible {
  outline-color: #fff;
}

/* ---------- Tablet ---------- */
@media (min-width: 640px) {
  .contact-page .feature-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .contact-page .feature-card:last-child {
    grid-column: 1 / -1;
  }
}

/* ---------- Desktop ---------- */
@media (min-width: 960px) {
  .contact-page .feature-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .contact-page .feature-card:last-child {
    grid-column: auto;
  }
}

/* ---------- Small phones ---------- */
@media (max-width: 380px) {
  .contact-page .feature-number {
    font-size: 2.2rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .contact-page *,
  .contact-page *::before,
  .contact-page *::after {
    transition: none !important;
  }
}
`;

export default function About() {
  return (
    <main className="contact-page">
      <style>{styles}</style>

      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="section-kicker">GET IN TOUCH</span>
          <h1>Contact Our Team</h1>
          <p>
            Have questions about our institute or courses?
            Contact the concerned authorities or connect with our coach.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="feature-grid">
            <article className="feature-card">
              <span className="feature-number">01</span>
              <h3>Contact Authority 1</h3>
              <p>+977 9812345678</p>
              <a href="tel:+9779812345678">Call Now →</a>
            </article>

            <article className="feature-card">
              <span className="feature-number">02</span>
              <h3>Contact Authority 2</h3>
              <p>+977 9801234567</p>
              <a href="tel:+9779801234567">Call Now →</a>
            </article>

            <article className="feature-card">
              <span className="feature-number">03</span>
              <h3>Meet Our Coach</h3>
              <p>Visit our coach's LinkedIn profile.</p>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit LinkedIn →
              </a>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
