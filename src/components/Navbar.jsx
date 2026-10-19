"use client";

import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { navItems } from "./startupData";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a className="brand" href="#home" aria-label="Startup home">
          <span className="brand-icon"><Sparkles size={23} /></span>
          <span>Startup<span className="brand-dot">.</span></span>
        </a>
        
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <button className="btn btn-primary nav-cta" type="button">
          Get In Touch
        </button>
      </div>
    </header>
  );
}
