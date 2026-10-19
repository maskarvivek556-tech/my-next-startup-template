"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function NewsletterSection() {
  const [newsletterMessage, setNewsletterMessage] = useState("");

  function handleNewsletterSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const email = data.get("newsletterEmail");

    try {
      const saved = JSON.parse(
        localStorage.getItem("startupNewsletter") || "[]"
      );

      if (saved.includes(email)) {
        setNewsletterMessage("This email is already subscribed in this browser.");
        return;
      }

      saved.push(email);
      localStorage.setItem("startupNewsletter", JSON.stringify(saved));

      setNewsletterMessage("Thank you for subscribing!");
      form.reset();
    } catch {
      setNewsletterMessage("Unable to save your email in this browser.");
    }
  }

  return (
    <section className="newsletter-section">
      <div className="container newsletter-inner">
        <div>
          <span className="eyebrow eyebrow-light">Stay in the loop</span>
          <h2>Don&apos;t miss any updates!</h2>
          <p>Get the latest directly to your inbox.<br />Unsubscribe at any time.</p>
        </div>
        <div className="newsletter-form-wrap">
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <label className="sr-only" htmlFor="newsletterEmail">Your email</label>
            <input
              id="newsletterEmail"
              type="email"
              name="newsletterEmail"
              placeholder="Enter your email"
              required
            />
            <button className="btn btn-dark" type="submit">
              Subscribe <Send size={16} />
            </button>
          </form>
          <p className="form-feedback" aria-live="polite">{newsletterMessage}</p>
        </div>
      </div>
    </section>
  );
}
