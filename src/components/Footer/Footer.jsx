import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        {/* Brand */}
        <div>
          <div className="footer__brand-logo">
            <img src="/logo.png" alt="PYAN" />
            <span>PYAN</span>
          </div>
          <p className="footer__tagline">
            Prosperity Youth Ambassadors Network — empowering the next
            generation of leaders, innovators, and change-makers.
          </p>
        </div>

        {/* Quick links */}
        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/about">Programs</Link>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="mailto:pyanofficial01@gmail.com">
                pyanofficial01@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:08112551832">08112551832</a>
            </li>
            <li>
              <a href="#">@pyna_official</a>
            </li>
            <li>
              <span>Yenagoa, Bayelsa State, Nigeria</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <span>
          © {new Date().getFullYear()} Prosperity Youth Ambassadors Network. All
          rights reserved.
        </span>
        <span>Yenagoa, Bayelsa State, Nigeria</span>
      </div>
    </footer>
  );
}
