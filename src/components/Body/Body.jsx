import React from "react";
import "./Body.css";

const programs = [
  {
    icon: "📚",
    title: "Empowerment & Education",
    desc: "Leadership academies, mentorship programs, skills workshops, and personal development to build confident, capable young people.",
  },
  {
    icon: "💡",
    title: "Enterprise & Innovation",
    desc: "Entrepreneurship training, startup mentorship, innovation challenges, and financial literacy for self-reliant youth.",
  },
  {
    icon: "🤝",
    title: "Engagement & Advocacy",
    desc: "Community outreach, awareness forums, volunteer mobilization, and social campaigns that drive real neighbourhood impact.",
  },
];

const contacts = [
  { label: "Email",     value: "pyanofficial01@gmail.com" },
  { label: "Phone",     value: "08112551832" },
  { label: "Address",   value: "No4 Vision Drive, School Road, Yenagoa, Bayelsa State" },
  { label: "Instagram", value: "@pyna_official" },
];

export default function Body() {
  return (
    <main>

      {/* ── MISSION / VISION ── */}
      <section className="section">
        <div className="container">
          <div className="divider" />
          <h2 className="section-title">Who We Are</h2>
          <p className="section-sub">
            PYAN is a youth-led community-based organisation committed to mobilizing young people to lead,
            innovate, and drive sustainable prosperity in their communities.
          </p>

          <div className="mv-grid">
            <div className="mv-card">
              <h3>Our Vision</h3>
              <p>
                To mobilize a bold generation of youths empowered to lead,
                innovate, and drive prosperity in their communities.
              </p>
            </div>
            <div className="mv-card">
              <h3>Our Mission</h3>
              <p>
                To equip young people with skills, platforms, and opportunities
                to take action, create impact, and secure their future.
              </p>
            </div>
            <div className="mv-card">
              <h3>Our Belief</h3>
              <p>
                Young people are not just the leaders of tomorrow —
                they are the change-makers of today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="section bg-light">
        <div className="container">
          <div className="divider" />
          <h2 className="section-title">Our Programs</h2>
          <p className="section-sub">
            Built around the 3Es framework — Empowerment, Enterprise, and Engagement.
          </p>

          <div className="programs-grid">
            {programs.map((p) => (
              <div className="prog-card" key={p.title}>
                <div className="prog-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="divider" style={{ margin: "0 auto 16px" }} />
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-sub">
            Ready to partner, volunteer, or join the movement? We'd love to hear from you.
          </p>

          <div className="contact-grid">
            {contacts.map((c) => (
              <div className="contact-item" key={c.label}>
                <strong>{c.label}</strong>
                <span>{c.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
