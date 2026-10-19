"use client";

import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import { testimonials } from "./startupData";

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[activeTestimonial];

  return (
    <section className="section section-light" id="testimonials">
      <div className="container testimonial-container">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
          description="Our clients are at the heart of everything we do. Here is what they say about working with us."
        />

        <div className="testimonial-card">
          <div className="testimonial-brand">
            <img
              src="https://demo.ayroui.com/templates/startup-template/assets/images/testimonial/brand3.svg"
              alt="Client brand"
            />
          </div>

          <div className="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
          <blockquote>“{testimonial.quote}”</blockquote>

          <div className="testimonial-person">
            <img src={testimonial.image} alt={testimonial.name} />
            <div>
              <h3>{testimonial.name}</h3>
              <p>{testimonial.role}</p>
            </div>
          </div>

          <div className="testimonial-dots" aria-label="Choose testimonial">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                className={activeTestimonial === index ? "active" : ""}
                onClick={() => setActiveTestimonial(index)}
                aria-label={`Show testimonial ${index + 1}`}
                aria-pressed={activeTestimonial === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
