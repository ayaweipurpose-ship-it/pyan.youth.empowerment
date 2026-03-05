import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header>
      {/* ── NAVBAR ── */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <Link to="/" className="navbar__logo">
          <img src="/logo.png" alt="PYAN" className="navbar__logo-img" />
          <span className="navbar__logo-text">PYAN</span>
        </Link>

        <ul className="navbar__links">
          <li><Link to="/"         className="navbar__link">Home</Link></li>
          <li><Link to="/about"    className="navbar__link">About</Link></li>
          <li><Link to="/programs" className="navbar__link">Programs</Link></li>
          <li><a href="#contact"   className="navbar__link navbar__cta">Join Us</a></li>
        </ul>

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/"         onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about"    onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/programs" onClick={() => setMenuOpen(false)}>Programs</Link>
          <a href="#contact"   onClick={() => setMenuOpen(false)}>Join Us</a>
        </div>
      )}

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__content">
          <span className="hero__badge">Youth-Led · Impact-Driven · Community-Based</span>

          <h1 className="hero__title">
            Empowering Youth<br />
            for <span>Sustainable</span><br />
            Prosperity
          </h1>

          <p className="hero__sub">
            Prosperity Youth Ambassadors Network mobilizes young people to lead,
            innovate, and drive meaningful change across their communities.
          </p>

          <div className="hero__actions">
            <Link to="/about" className="btn btn-primary">Discover PYAN</Link>
            <a href="#contact" className="btn btn-outline">Get Involved</a>
          </div>

          <div className="hero__stats">
            <div>
              <span className="hero__stat-num">500+</span>
              <span className="hero__stat-label">Youth Reached</span>
            </div>
            <div>
              <span className="hero__stat-num">5+</span>
              <span className="hero__stat-label">Community Projects</span>
            </div>
            <div>
              <span className="hero__stat-num">3</span>
              <span className="hero__stat-label">Core Programs</span>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
