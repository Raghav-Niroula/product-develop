import { useEffect, useState } from "react";
import api from "../Api/axios";

const styles = `
@import url("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700&family=Figtree:wght@400;500;600&display=swap");

.cls-page,
.cls-modal {
  --c-ink: #14213d;
  --c-ink-soft: #55607a;
  --c-ink-deep: #223760;
  --c-accent: #c8102e;
  --c-wash: #f3f5fa;
  --c-line: #dfe4ee;

  font-family: "Figtree", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
}

.cls-page *,
.cls-page *::before,
.cls-page *::after,
.cls-modal *,
.cls-modal *::before,
.cls-modal *::after {
  box-sizing: border-box;
}

.cls-page {
  min-height: 100vh;
  background: var(--c-wash);
  color: var(--c-ink);
}

.cls-container {
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 clamp(16px, 4vw, 32px);
}

/* ---------- Hero ---------- */
.cls-hero {
  position: relative;
  overflow: hidden;
  background: var(--c-ink);
  color: #fff;
  padding: clamp(40px, 8vw, 76px) 0 clamp(78px, 12vw, 128px);
}

.cls-hero::before,
.cls-hero::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.cls-hero::before {
  height: clamp(64px, 11vw, 116px);
  background: var(--c-ink-deep);
  clip-path: polygon(
    0 100%, 0 52%, 8% 28%, 18% 50%, 31% 10%, 43% 44%, 55% 24%,
    67% 52%, 79% 14%, 90% 42%, 100% 26%, 100% 100%
  );
}

.cls-hero::after {
  height: clamp(32px, 6vw, 64px);
  background: var(--c-wash);
  clip-path: polygon(
    0 100%, 0 60%, 13% 26%, 25% 54%, 38% 16%, 51% 58%, 64% 32%,
    76% 60%, 89% 20%, 100% 50%, 100% 100%
  );
}

.cls-hero-inner {
  position: relative;
  z-index: 1;
}

.cls-title {
  margin: 0 0 12px;
  font-family: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
  font-size: clamp(2.1rem, 6vw, 3.4rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.03em;
}

.cls-sub {
  margin: 0;
  max-width: 46ch;
  font-size: clamp(1rem, 2.2vw, 1.12rem);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.78);
}

/* ---------- Content ---------- */
.cls-content {
  padding: clamp(8px, 2vw, 16px) 0 clamp(56px, 9vw, 104px);
}

.cls-controls {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: clamp(24px, 4vw, 40px);
}

.cls-input,
.cls-select {
  width: 100%;
  min-height: 52px;
  padding: 0 18px;
  border: 1px solid var(--c-line);
  border-radius: 12px;
  background: #fff;
  color: var(--c-ink);
  font: inherit;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.cls-input::placeholder {
  color: #8a94ab;
}

.cls-input:focus,
.cls-select:focus {
  border-color: var(--c-ink);
  box-shadow: 0 0 0 3px rgba(20, 33, 61, 0.12);
}

.cls-select {
  appearance: none;
  -webkit-appearance: none;
  padding-right: 44px;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%2314213d' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
}

/* ---------- States ---------- */
.cls-state {
  max-width: 520px;
  margin: 0 auto;
  padding: 28px 20px;
  text-align: center;
  font-size: 1.02rem;
  color: var(--c-ink-soft);
  background: #fff;
  border: 1px dashed var(--c-line);
  border-radius: 14px;
}

.cls-state-error {
  color: #9b0d24;
  background: #fff4f5;
  border: 1px solid #f3c4cb;
}

/* ---------- Grid + cards ---------- */
.cls-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.cls-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #fff;
  border: 1px solid var(--c-line);
  border-radius: 16px;
  transition: border-color 0.2s ease;
}

.cls-card:hover {
  border-color: var(--c-ink);
}

.cls-thumb {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background-color: var(--c-ink);
  background-size: cover;
  background-position: center;
}

/* fallback artwork when a class has no thumbnail */
.cls-thumb-empty {
  background-image: linear-gradient(160deg, var(--c-ink) 0%, var(--c-ink-deep) 100%);
}

.cls-thumb-empty::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 55%;
  background: rgba(255, 255, 255, 0.09);
  clip-path: polygon(
    0 100%, 0 62%, 12% 34%, 24% 58%, 38% 14%, 52% 56%, 66% 30%,
    80% 60%, 92% 24%, 100% 48%, 100% 100%
  );
}

.cls-tag {
  position: absolute;
  left: 14px;
  bottom: 14px;
  z-index: 1;
  max-width: calc(100% - 28px);
  padding: 6px 12px;
  border-radius: 8px;
  background: #fff;
  color: var(--c-ink);
  font-size: 0.82rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cls-play {
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 60px;
  height: 60px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: #fff;
  color: var(--c-accent);
  font-size: 1.3rem;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.28);
  transition: transform 0.18s ease;
}

.cls-play span {
  margin-left: 3px;
  line-height: 1;
}

.cls-play:hover {
  transform: scale(1.08);
}

.cls-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: clamp(20px, 3vw, 26px);
}

.cls-date {
  margin: 0 0 10px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--c-ink-soft);
  font-variant-numeric: tabular-nums;
}

.cls-date:empty {
  display: none;
}

.cls-card-title {
  margin: 0 0 10px;
  font-family: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
  font-size: 1.35rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.015em;
  color: var(--c-ink);
}

.cls-desc {
  margin: 0 0 22px;
  font-size: 0.98rem;
  line-height: 1.6;
  color: var(--c-ink-soft);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.cls-watch {
  margin-top: auto;
  width: 100%;
  min-height: 48px;
  padding: 0 20px;
  border: 0;
  border-radius: 12px;
  background: var(--c-ink);
  color: #fff;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.cls-watch:hover {
  background: var(--c-accent);
}

/* ---------- Focus ---------- */
.cls-play:focus-visible,
.cls-watch:focus-visible,
.cls-close:focus-visible {
  outline: 2px solid var(--c-accent);
  outline-offset: 3px;
}

/* ---------- Video modal ---------- */
.cls-modal {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(10px, 3vw, 28px);
  background: rgba(10, 17, 33, 0.82);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  animation: cls-fade 0.2s ease;
}

.cls-dialog {
  width: 100%;
  max-width: 920px;
  max-height: 100%;
  overflow: hidden;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
  animation: cls-rise 0.22s ease;
}

.cls-dialog-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 12px 12px 20px;
  border-bottom: 1px solid var(--c-line);
}

.cls-dialog-title {
  margin: 0;
  font-family: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
  font-size: clamp(1rem, 2.6vw, 1.2rem);
  font-weight: 600;
  color: var(--c-ink);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cls-close {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 1px solid var(--c-line);
  border-radius: 12px;
  background: #fff;
  color: var(--c-ink);
  font-size: 1.6rem;
  line-height: 1;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.cls-close:hover {
  background: var(--c-wash);
}

.cls-frame {
  aspect-ratio: 16 / 9;
  background: #000;
}

.cls-frame iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}

@keyframes cls-fade {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes cls-rise {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ---------- Tablet ---------- */
@media (min-width: 640px) {
  .cls-controls {
    flex-direction: row;
  }

  .cls-select {
    width: 220px;
    flex-shrink: 0;
  }

  .cls-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

/* ---------- Desktop ---------- */
@media (min-width: 1024px) {
  .cls-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }
}

/* ---------- Phones in landscape: keep the dialog on screen ---------- */
@media (max-height: 480px) {
  .cls-dialog {
    max-width: 640px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cls-page *,
  .cls-modal,
  .cls-modal * {
    animation: none !important;
    transition: none !important;
  }
}
`;

export default function Classes() {
  const [classes, setClasses] = useState([]);
  const [search, setSearch] = useState("");
  const [subject, setSubject] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await api.get("/videos");
        setClasses(response.data);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            "Unable to load classes. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  const subjects = [
    "All",
    ...new Set(classes.map((item) => item.subject).filter(Boolean)),
  ];

  const filteredClasses = classes.filter((item) => {
    const searchTerm = search.toLowerCase();

    const matchesSearch =
      item.title?.toLowerCase().includes(searchTerm) ||
      item.subject?.toLowerCase().includes(searchTerm);

    const matchesSubject = subject === "All" || item.subject === subject;

    return matchesSearch && matchesSubject;
  });

  const getEmbedUrl = (url) => {
    if (!url) return "";

    try {
      const parsedUrl = new URL(url);

      if (parsedUrl.hostname.includes("youtu.be")) {
        const videoId = parsedUrl.pathname.slice(1);
        return `https://www.youtube.com/embed/${videoId}`;
      }

      if (
        parsedUrl.hostname.includes("youtube.com") ||
        parsedUrl.hostname.includes("youtube-nocookie.com")
      ) {
        if (parsedUrl.pathname === "/watch") {
          const videoId = parsedUrl.searchParams.get("v");
          return videoId
            ? `https://www.youtube.com/embed/${videoId}`
            : url;
        }

        if (parsedUrl.pathname.startsWith("/shorts/")) {
          const videoId = parsedUrl.pathname.split("/")[2];
          return `https://www.youtube.com/embed/${videoId}`;
        }
      }

      return url;
    } catch {
      return url;
    }
  };

  return (
    <>
      <style>{styles}</style>

      <section className="cls-page">
        <div className="cls-hero">
          <div className="cls-container cls-hero-inner">
            <h1 className="cls-title">Explore Classes</h1>
            <p className="cls-sub">Learn new skills with our video lessons.</p>
          </div>
        </div>

        <div className="cls-content">
          <div className="cls-container">
            <div className="cls-controls">
              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search classes..."
                aria-label="Search classes"
                className="cls-input"
              />

              <select
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                aria-label="Filter by subject"
                className="cls-select"
              >
                {subjects.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {loading && <p className="cls-state">Loading classes...</p>}

            {error && <p className="cls-state cls-state-error">{error}</p>}

            {!loading && !error && filteredClasses.length === 0 && (
              <p className="cls-state">No classes found.</p>
            )}

            {!loading && !error && filteredClasses.length > 0 && (
              <div className="cls-grid">
                {filteredClasses.map((item) => (
                  <article key={item._id} className="cls-card">
                    <div
                      className={`cls-thumb ${
                        item.thumbnailUrl ? "" : "cls-thumb-empty"
                      }`}
                      style={
                        item.thumbnailUrl
                          ? {
                              backgroundImage: `url("${item.thumbnailUrl}")`,
                            }
                          : undefined
                      }
                    >
                      <span className="cls-tag">{item.subject}</span>

                      <button
                        onClick={() => setSelectedVideo(item)}
                        aria-label={`Play ${item.title}`}
                        className="cls-play"
                      >
                        <span>▶</span>
                      </button>
                    </div>

                    <div className="cls-body">
                      <p className="cls-date">
                        {item.createdAt
                          ? new Date(item.createdAt).toLocaleDateString()
                          : ""}
                      </p>

                      <h2 className="cls-card-title">{item.title}</h2>

                      <p className="cls-desc">{item.description}</p>

                      <button
                        onClick={() => setSelectedVideo(item)}
                        className="cls-watch"
                      >
                        Watch Class ↗
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {selectedVideo && (
        <div className="cls-modal" onClick={() => setSelectedVideo(null)}>
          <div
            className="cls-dialog"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="cls-dialog-head">
              <h2 className="cls-dialog-title">{selectedVideo.title}</h2>

              <button
                onClick={() => setSelectedVideo(null)}
                className="cls-close"
                aria-label="Close video"
              >
                ×
              </button>
            </div>

            <div className="cls-frame">
              <iframe
                src={getEmbedUrl(selectedVideo.videoUrl)}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
