"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function ContactSection() {
  const [contactMessage, setContactMessage] = useState("");

  function handleContactSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const contact = {
      id: Date.now(),
      name: data.get("name"),
      subject: data.get("subject"),
      email: data.get("email"),
      phone: data.get("phone"),
      message: data.get("message"),
      createdAt: new Date().toISOString(),
    };

    try {
      const saved = JSON.parse(
        localStorage.getItem("startupContacts") || "[]"
      );

      saved.push(contact);
      localStorage.setItem("startupContacts", JSON.stringify(saved));

      setContactMessage("Thank you! Your message has been saved in this browser.");
      form.reset();
    } catch {
      setContactMessage("Unable to save data in this browser. Please check browser storage settings.");
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHeading
          eyebrow="Contact Us"
          title="Need Any Help?"
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
          descriptionClassName="section-description-large"
        />

        <div className="contact-grid">
          <div className="contact-form-card">
            <h3>Send us a message</h3>
            <p>We would love to hear from you. Fill in the form below.</p>

            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="contactName">Full Name</label>
                  <input id="contactName" name="name" placeholder="Your full name" required />
                </div>
                <div className="form-field">
                  <label htmlFor="contactEmail">Email Address</label>
                  <input id="contactEmail" name="email" type="email" placeholder="Your email" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="contactSubject">Subject</label>
                  <input id="contactSubject" name="subject" placeholder="Message subject" required />
                </div>
                <div className="form-field">
                  <label htmlFor="contactPhone">Phone Number</label>
                  <input id="contactPhone" name="phone" type="tel" placeholder="Your phone number" />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="contactMessage">Message</label>
                <textarea id="contactMessage" name="message" rows="5" placeholder="Write your message..." required />
              </div>

              <button className="btn btn-primary submit-btn" type="submit">
                Send Message <ArrowRight size={18} />
              </button>
              <p className="form-feedback" aria-live="polite">{contactMessage}</p>
            </form>
          </div>

          <div className="contact-details">
            <div className="contact-detail">
              <span className="contact-icon"><MapPin /></span>
              <div>
                <h3>Location</h3>
                <p>76/A, Green valle, California<br />United States</p>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-icon"><Phone /></span>
              <div>
                <h3>Call Us</h3>
                <p>+1 756 445 5658<br />+1 125 458 5555</p>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-icon"><Mail /></span>
              <div>
                <h3>Mail Us</h3>
                <p>support@yourmail.com<br />contact@yourmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
