import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="eyebrow">
            <span className="eyebrow-line" />
            STARTUP TEMPLATE BY AYRO UI
          </span>

          <h1>
            We are making world a
            <span> Better place for you.</span>
          </h1>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard
            dummy text ever since.
          </p>

          <div className="hero-actions">
            <a href="#services" className="btn btn-primary">
              DISCOVER MORE <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-image-wrap">
            <img src="/startup-hero.jpg" alt="Startup team working together" />
          </div>
        </div>
      </div>
    </section>
  );
}
