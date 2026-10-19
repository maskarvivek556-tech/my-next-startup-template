import { Globe, Send, Sparkles, Users } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="brand footer-brand" href="#home">
          <span className="brand-icon"><Sparkles size={23} /></span>
          <span>Startup<span className="brand-dot">.</span></span>
        </a>

        <p className="footer-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been.
        </p>

        <h3>Follow Us On</h3>
        <div className="footer-socials">
          <a href="https://facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><Users /></a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter"><Send /></a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Sparkles /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Globe /></a>
        </div>

        <div className="footer-bottom">
          <p>Copyright © 2024 Ayro UI. All Rights Reserved</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
