import { CalendarCheck, MessageCircle, Rocket } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="section" id="features">
      <div className="container features-grid">
        <div className="features-visual">
          <div className="features-image">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop"
              alt="Team collaborating around a table"
              loading="lazy"
            />
          </div>
          <div className="experience-card">
            <strong>10+</strong>
            <span>Years of experience</span>
          </div>
          <div className="features-decoration" />
        </div>

        <div className="features-content">
          <span className="eyebrow">Why Choose Us</span>
          <h2>We help you build your dream business</h2>
          <p className="section-description">
            Our team combines creativity, technology and experience to provide
            solutions that help your business move forward.
          </p>

          <div className="feature-item">
            <span className="feature-icon"><CalendarCheck /></span>
            <div>
              <h3>1. Easy Booking</h3>
              <p>With lots of unique blocks, you can easily build a page without coding.</p>
            </div>
          </div>

          <div className="feature-item">
            <span className="feature-icon"><MessageCircle /></span>
            <div>
              <h3>2. Free Expert Opinion</h3>
              <p>With lots of unique blocks, you can easily build a page without coding.</p>
            </div>
          </div>

          <div className="feature-item">
            <span className="feature-icon"><Rocket /></span>
            <div>
              <h3>3. Get Your Results</h3>
              <p>With lots of unique blocks, you can easily build a page without coding.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
