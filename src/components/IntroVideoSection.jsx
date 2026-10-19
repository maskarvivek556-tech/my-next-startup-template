"use client";

import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";

export default function IntroVideoSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    if (!videoOpen) return;

    function closeOnEscape(event) {
      if (event.key === "Escape") setVideoOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [videoOpen]);

  return (
    <>
      <section className="video-section section">
        <div className="video-bg-shape" />
        <div className="container video-container">
          <span className="eyebrow eyebrow-light">Create your own experience</span>
          <h2>Watch Our Intro Video</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form.
          </p>
          <button
            type="button"
            className="play-button"
            onClick={() => setVideoOpen(true)}
            aria-label="Play introduction video"
          >
            <Play size={27} fill="currentColor" />
          </button>
          <span className="video-caption">Watch our story · 2 min</span>
        </div>
      </section>

      {videoOpen && (
        <div
          className="video-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Startup introduction video"
          onClick={() => setVideoOpen(false)}
        >
          <button
            className="video-close"
            type="button"
            onClick={() => setVideoOpen(false)}
            aria-label="Close video"
          >
            <X />
          </button>
          <div className="video-frame" onClick={(event) => event.stopPropagation()}>
            <iframe
              src="https://www.youtube-nocookie.com/embed/ysz5S6PUM-U?autoplay=1"
              title="Startup introduction video"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
