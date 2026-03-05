// Standalone Programs page — no CSS import needed

const styles = {
  hero: {
    background: "linear-gradient(160deg, #0f5220, #1a7a2e)",
    color: "white",
    padding: "140px 5vw 80px",
  },
  heroH1:    { fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, marginBottom: "12px" },
  heroP:     { color: "rgba(255,255,255,0.75)", maxWidth: "560px" },
  container: { width: "90%", maxWidth: "1100px", margin: "0 auto" },
  body:      { padding: "80px 0", fontFamily: "'Segoe UI', Arial, sans-serif" },
  section:   { marginBottom: "60px" },
  h2:        { fontSize: "1.4rem", fontWeight: 700, color: "#0f5220", marginBottom: "12px" },
  divider:   { width: "60px", height: "4px", background: "#1a7a2e", borderRadius: "4px", marginBottom: "16px" },
  subText:   { color: "#6b7280", marginBottom: "32px", lineHeight: 1.7 },

  // Program cards
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
  },
  card: {
    background: "white",
    border: "1px solid #e5e7eb",
    borderRadius: "10px",
    padding: "32px 28px",
    transition: "box-shadow 0.2s",
  },
  icon:     { fontSize: "2.2rem", marginBottom: "16px" },
  cardH3:   { fontSize: "1.1rem", fontWeight: 700, color: "#0f5220", marginBottom: "10px" },
  cardP:    { color: "#6b7280", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "16px" },
  cardUl:   { paddingLeft: "1.1rem", listStyle: "disc", display: "flex", flexDirection: "column", gap: "6px" },
  cardLi:   { color: "#374151", fontSize: "0.9rem", lineHeight: 1.6 },

  // CTA band
  cta: {
    background: "#0f5220",
    color: "white",
    borderRadius: "12px",
    padding: "48px 36px",
    textAlign: "center",
  },
  ctaH2:  { color: "white", fontSize: "1.6rem", fontWeight: 800, marginBottom: "12px" },
  ctaP:   { color: "rgba(255,255,255,0.75)", marginBottom: "28px", maxWidth: "520px", margin: "0 auto 28px" },
  ctaBtn: {
    display: "inline-block",
    background: "#c9a227",
    color: "white",
    padding: "12px 32px",
    borderRadius: "6px",
    fontWeight: 700,
    fontSize: "0.95rem",
    textDecoration: "none",
  },
};

const programs = [
  {
    icon: "📚",
    title: "Empowerment & Education",
    desc: "Building the skills, knowledge, and confidence young people need to lead effectively in their communities.",
    items: ["Leadership academies", "Mentorship & coaching", "Skills acquisition workshops", "Personal development", "Capacity-building seminars"],
  },
  {
    icon: "💡",
    title: "Enterprise & Innovation",
    desc: "Equipping young entrepreneurs and innovators with the tools to build sustainable livelihoods.",
    items: ["Entrepreneurship bootcamps", "Startup mentorship & advisory", "Innovation challenges & pitches", "Financial literacy programs", "Support for youth-led enterprises"],
  },
  {
    icon: "🤝",
    title: "Engagement & Advocacy",
    desc: "Mobilizing youth voices in community development, social awareness, and neighbourhood impact.",
    items: ["Community outreach drives", "Youth-led social campaigns", "Community awareness forums", "Volunteer mobilization", "Neighbourhood impact programs"],
  },
];

export default function Programs() {
  return (
    <>
      {/* Hero */}
      <div style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.heroH1}>Our Programs</h1>
          <p style={styles.heroP}>Built around the 3Es framework — Empowerment, Enterprise, and Engagement.</p>
        </div>
      </div>

      {/* Body */}
      <div style={styles.body}>
        <div style={styles.container}>

          {/* Overview */}
          <div style={styles.section}>
            <h2 style={styles.h2}>The 3Es Framework</h2>
            <div style={styles.divider} />
            <p style={styles.subText}>
              PYAN implements short-term and long-term programs across three core pillars. Each program
              is designed to deliver measurable impact for young people and their communities.
            </p>

            <div style={styles.grid}>
              {programs.map((p) => (
                <div style={styles.card} key={p.title}>
                  <div style={styles.icon}>{p.icon}</div>
                  <h3 style={styles.cardH3}>{p.title}</h3>
                  <p style={styles.cardP}>{p.desc}</p>
                  <ul style={styles.cardUl}>
                    {p.items.map((item) => (
                      <li style={styles.cardLi} key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={styles.cta}>
            <h2 style={styles.ctaH2}>Get Involved</h2>
            <p style={styles.ctaP}>
              Whether you want to volunteer, partner, or participate — there's a place for you in PYAN.
            </p>
            <a href="#contact" style={styles.ctaBtn}>Contact Us</a>
          </div>

        </div>
      </div>
    </>
  );
}
