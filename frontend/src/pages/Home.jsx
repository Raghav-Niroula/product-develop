import { Link } from "react-router-dom";

const features = [
  {
    number: "01",
    title: "Recorded Classes",
    description:
      "Access published class recordings and revisit lessons at your convenience.",
  },
  {
    number: "02",
    title: "Learn at Your Pace",
    description:
      "Review lessons whenever you need to reinforce what you have learned.",
  },
  {
    number: "03",
    title: "A Learning Community",
    description:
      "Discover more about SkillNep and the learning opportunities we offer.",
  },
];

const styles = `
@import url("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700&family=Figtree:wght@400;500;600&display=swap");

.home-page {
  --c-ink: #14213d;
  --c-ink-soft: #55607a;
  --c-ink-deep: #223760;
  --c-accent: #c8102e;
  --c-accent-dark: #a50d25;
  --c-accent-light: #ff4d67;
  --c-wash: #f3f5fa;
  --c-line: #dfe4ee;

  font-family: "Figtree", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  color: var(--c-ink);
  background: var(--c-wash);
}

.home-page *,
.home-page *::before,
.home-page *::after {
  box-sizing: border-box;
}

.home-page .container {
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 clamp(16px, 4vw, 32px);
}

/* ---------- Buttons ---------- */
.home-page .button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 48px;
  padding: 0 24px;
  border: 1px solid transparent;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}

.home-page .button-large {
  min-height: 54px;
  padding: 0 28px;
}

.home-page .button-primary {
  background: var(--c-accent);
  color: #fff;
}

.home-page .button-primary:hover {
  background: var(--c-accent-dark);
}

.home-page .button-outline {
  border-color: rgba(255, 255, 255, 0.35);
  color: #fff;
}

.home-page .button-outline:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.6);
}

.home-page .button-light {
  background: #fff;
  color: var(--c-ink);
}

.home-page .button-light:hover {
  background: var(--c-wash);
}

.home-page .button:focus-visible,
.home-page .text-link:focus-visible {
  outline: 2px solid var(--c-accent-light);
  outline-offset: 3px;
}

/* ---------- Hero ---------- */
.home-page .hero-section {
  position: relative;
  overflow: hidden;
  background: var(--c-ink);
  color: #fff;
  padding: clamp(40px, 8vw, 84px) 0 clamp(100px, 16vw, 180px);
}

/* decoration one = distant ridge, decoration two = near ridge that melts into the page */
.home-page .hero-decoration {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.home-page .hero-decoration-one {
  height: clamp(80px, 13vw, 150px);
  background: var(--c-ink-deep);
  clip-path: polygon(
    0 100%, 0 50%, 7% 26%, 16% 46%, 29% 8%, 41% 42%, 53% 20%,
    66% 50%, 78% 12%, 90% 40%, 100% 24%, 100% 100%
  );
}

.home-page .hero-decoration-two {
  height: clamp(38px, 7vw, 80px);
  background: var(--c-wash);
  clip-path: polygon(
    0 100%, 0 60%, 13% 26%, 25% 54%, 38% 16%, 51% 58%, 64% 32%,
    76% 60%, 89% 20%, 100% 50%, 100% 100%
  );
}

.home-page .hero-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: clamp(36px, 6vw, 64px);
}

.home-page .eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px 6px 12px;
  margin-bottom: 22px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.9);
}

.home-page .status-dot {
  flex-shrink: 0;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--c-accent);
}

.home-page .eyebrow .status-dot {
  background: var(--c-accent-light);
}

.home-page .hero-title {
  margin: 0 0 20px;
  font-family: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
  font-size: clamp(2.4rem, 7.2vw, 4.4rem);
  font-weight: 700;
  line-height: 1.03;
  letter-spacing: -0.035em;
}

.home-page .hero-highlight {
  text-decoration: underline;
  text-decoration-color: var(--c-accent-light);
  text-decoration-thickness: 0.07em;
  text-underline-offset: 0.12em;
}

.home-page .hero-description {
  margin: 0 0 30px;
  max-width: 50ch;
  font-size: clamp(1rem, 2.2vw, 1.15rem);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.78);
}

.home-page .hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.home-page .hero-note {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 28px;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.75);
}

.home-page .hero-note-icon {
  display: grid;
  place-items: center;
  width: 22px;
  height: 22px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 50%;
  font-size: 0.7rem;
  color: #fff;
}

/* ---------- Hero visual ---------- */
.home-page .hero-visual {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 420px;
  padding: 58px 0;
}

.home-page .visual-orbit {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.home-page .orbit-one {
  width: 430px;
  height: 430px;
}

.home-page .orbit-two {
  width: 580px;
  height: 580px;
  border-color: rgba(255, 255, 255, 0.07);
}

.home-page .learning-card {
  position: relative;
  z-index: 1;
  width: min(100%, 340px);
  padding: 22px;
  background: #fff;
  color: var(--c-ink);
  border-radius: 20px;
  box-shadow: 0 34px 60px -24px rgba(0, 0, 0, 0.55);
}

.home-page .learning-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.home-page .learning-logo {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 10px 10px 10px 3px;
  background: var(--c-ink);
  color: #fff;
  font-family: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
}

.home-page .live-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.07em;
  color: var(--c-ink-soft);
}

.home-page .book-illustration {
  position: relative;
  height: 132px;
  margin: 22px 0;
}

.home-page .book-page {
  position: absolute;
  top: 0;
  bottom: 0;
  border-radius: 12px;
}

.home-page .book-page-back {
  left: 4%;
  right: 4%;
  background: var(--c-ink-deep);
  transform: rotate(-4deg);
}

.home-page .book-page-front {
  left: 8%;
  right: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 0 18px;
  background: #fff;
  border: 1px solid var(--c-line);
  transform: rotate(1.5deg);
}

.home-page .book-line {
  display: block;
  width: 78%;
  height: 8px;
  border-radius: 4px;
  background: #e3e8f2;
}

.home-page .book-line-long {
  width: 100%;
}

.home-page .book-line-short {
  width: 48%;
}

.home-page .book-check {
  position: absolute;
  right: 12px;
  bottom: 10px;
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--c-accent);
  color: #fff;
  font-size: 0.85rem;
  font-weight: 700;
}

.home-page .card-kicker {
  display: block;
  margin-bottom: 6px;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--c-accent);
}

.home-page .learning-card-copy h3 {
  margin: 0 0 4px;
  font-family: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
  font-size: 1.45rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--c-ink);
}

.home-page .learning-card-copy p {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--c-ink-soft);
}

.home-page .learning-progress {
  height: 6px;
  margin-top: 18px;
  overflow: hidden;
  border-radius: 3px;
  background: var(--c-line);
}

.home-page .learning-progress span {
  display: block;
  width: 62%;
  height: 100%;
  border-radius: 3px;
  background: var(--c-accent);
  transform-origin: left;
  animation: hm-fill 0.9s 0.3s ease-out both;
}

@keyframes hm-fill {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

.home-page .floating-note {
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px 10px 10px;
  background: #fff;
  color: var(--c-ink);
  border-radius: 12px;
  box-shadow: 0 16px 30px -14px rgba(0, 0, 0, 0.5);
}

.home-page .floating-note strong {
  display: block;
  font-size: 0.9rem;
  line-height: 1.2;
}

.home-page .floating-note small {
  display: block;
  font-size: 0.76rem;
  color: var(--c-ink-soft);
}

.home-page .floating-note-top {
  top: 4px;
  right: 0;
}

.home-page .floating-note-bottom {
  bottom: 4px;
  left: 0;
}

.home-page .floating-icon {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #ffe9ec;
  color: var(--c-accent);
  font-size: 0.85rem;
}

.home-page .floating-icon-blue {
  background: #e6ebf6;
  color: var(--c-ink);
  font-size: 0.7rem;
}

/* ---------- Features ---------- */
.home-page .section-padding {
  padding: clamp(40px, 7vw, 80px) 0 clamp(56px, 9vw, 104px);
}

.home-page .section-heading {
  max-width: 620px;
  margin-bottom: clamp(28px, 5vw, 52px);
}

.home-page .section-kicker {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--c-accent);
}

.home-page .section-kicker::before {
  content: "";
  width: 20px;
  height: 2px;
  background: currentColor;
}

.home-page .section-heading h2 {
  margin: 0 0 12px;
  font-family: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
  font-size: clamp(1.9rem, 4.8vw, 2.9rem);
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: var(--c-ink);
}

.home-page .section-heading p {
  margin: 0;
  max-width: 50ch;
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--c-ink-soft);
}

.home-page .feature-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.home-page .feature-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: clamp(22px, 3.5vw, 32px);
  background: #fff;
  border: 1px solid var(--c-line);
  border-radius: 16px;
  transition: border-color 0.2s ease;
}

.home-page .feature-card:hover {
  border-color: var(--c-ink);
}

.home-page .feature-number {
  margin-bottom: 18px;
  font-family: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
  font-size: 2.6rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.04em;
  color: #cfd6e4;
}

.home-page .feature-card h3 {
  margin: 0 0 8px;
  font-family: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: var(--c-ink);
}

.home-page .feature-card p {
  margin: 0 0 20px;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--c-ink-soft);
}

.home-page .text-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 44px;
  margin-top: auto;
  font-weight: 600;
  color: var(--c-accent);
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 5px;
  transition: text-decoration-thickness 0.15s ease;
}

.home-page .text-link:hover {
  text-decoration-thickness: 3px;
}

.home-page .features-section .text-link:focus-visible {
  outline-color: var(--c-accent);
  border-radius: 6px;
}

/* ---------- Call to action ---------- */
.home-page .cta-section {
  background: var(--c-ink);
  color: #fff;
  padding: clamp(48px, 8vw, 88px) 0;
}

.home-page .cta-inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
}

.home-page .cta-kicker {
  color: #ff8a9b;
}

.home-page .cta-section h2 {
  margin: 0 0 10px;
  font-family: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
  font-size: clamp(1.8rem, 4.4vw, 2.7rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.03em;
}

.home-page .cta-section p {
  margin: 0;
  max-width: 44ch;
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.76);
}

/* ---------- Small phones ---------- */
@media (max-width: 480px) {
  .home-page .hero-actions .button {
    flex: 1 1 100%;
  }

  .home-page .cta-inner .button {
    width: 100%;
  }
}

/* ---------- Tablet ---------- */
@media (min-width: 640px) {
  .home-page .feature-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .home-page .feature-card:last-child {
    grid-column: 1 / -1;
  }
}

@media (min-width: 768px) {
  .home-page .cta-inner {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
  }
}

/* ---------- Desktop ---------- */
@media (min-width: 960px) {
  .home-page .hero-grid {
    grid-template-columns: 1.1fr 0.9fr;
  }

  .home-page .hero-visual {
    min-height: 500px;
  }

  .home-page .floating-note-top {
    top: 8%;
    right: -6px;
  }

  .home-page .floating-note-bottom {
    bottom: 10%;
    left: -10px;
  }

  .home-page .feature-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .home-page .feature-card:last-child {
    grid-column: auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  .home-page *,
  .home-page *::before,
  .home-page *::after {
    animation: none !important;
    transition: none !important;
  }
}
`;

export default function Home() {
  return (
    <main className="home-page">
      <style>{styles}</style>

      <section className="hero-section">
        <div className="hero-decoration hero-decoration-one" />
        <div className="hero-decoration hero-decoration-two" />

        <div className="container hero-grid">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="status-dot" />
              WELCOME TO SKILLNEP
            </div>

            <h1 className="hero-title">
              Your journey to
              <br />
              <span className="hero-highlight">greater knowledge</span>
              <br />
              starts here.
            </h1>

            <p className="hero-description">
              Learn, grow, and move forward with SkillNep. Explore our
              institute, discover learning resources, and revisit your
              recorded classes whenever you need them.
            </p>

            <div className="hero-actions">
              <Link to="/classes" className="button button-primary button-large">
                Explore Classes <span aria-hidden="true">→</span>
              </Link>

              <Link to="/about" className="button button-outline button-large">
                Discover SkillNep
              </Link>
            </div>

            <div className="hero-note">
              <span className="hero-note-icon">✓</span>
              <span>Learning resources in one place</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />

            <div className="learning-card">
              <div className="learning-card-top">
                <div className="learning-logo">S</div>
                <span className="live-label">
                  <span className="status-dot" />
                  YOUR LEARNING SPACE
                </span>
              </div>

              <div className="book-illustration">
                <div className="book-page book-page-back" />
                <div className="book-page book-page-front">
                  <span className="book-line book-line-long" />
                  <span className="book-line" />
                  <span className="book-line book-line-short" />
                  <div className="book-check">✓</div>
                </div>
              </div>

              <div className="learning-card-copy">
                <span className="card-kicker">KEEP MOVING FORWARD</span>
                <h3>Every lesson counts.</h3>
                <p>Build knowledge, one class at a time.</p>
              </div>

              <div className="learning-progress">
                <span />
              </div>
            </div>

            <div className="floating-note floating-note-top">
              <span className="floating-icon">✦</span>
              <div>
                <strong>Keep learning</strong>
                <small>One step at a time</small>
              </div>
            </div>

            <div className="floating-note floating-note-bottom">
              <span className="floating-icon floating-icon-blue">▶</span>
              <div>
                <strong>Recorded lessons</strong>
                <small>Revisit your classes</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section section-padding">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">THE SKILLNEP EXPERIENCE</span>
            <h2>A better way to continue learning.</h2>
            <p>
              Find your learning resources and stay connected with your
              educational journey.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.number}>
                <span className="feature-number">{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <Link to="/classes" className="text-link">
                  Explore <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <span className="section-kicker cta-kicker">READY TO GET STARTED?</span>
            <h2>Your next lesson is waiting.</h2>
            <p>Explore the recorded classes available on SkillNep.</p>
          </div>

          <Link to="/classes" className="button button-light button-large">
            View Classes <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
