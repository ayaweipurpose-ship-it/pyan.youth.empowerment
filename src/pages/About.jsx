// No CSS import needed — all styles are inline

const styles = {
  hero: {
    background: "linear-gradient(160deg, #0f5220, #1a7a2e)",
    color: "white",
    padding: "140px 5vw 80px",
  },
  heroH1: { fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, marginBottom: "12px" },
  heroP:  { color: "rgba(255,255,255,0.75)", maxWidth: "560px" },
  container: { width: "90%", maxWidth: "1100px", margin: "0 auto" },
  body:    { padding: "80px 0", fontFamily: "'Segoe UI', Arial, sans-serif" },
  section: { marginBottom: "60px" },
  h2:      { fontSize: "1.4rem", fontWeight: 700, color: "#0f5220", marginBottom: "12px" },
  divider: { width: "60px", height: "4px", background: "#1a7a2e", borderRadius: "4px", marginBottom: "16px" },
  text:    { color: "#374151", lineHeight: 1.7 },
  vmGrid:  { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" },
  focusGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", marginTop: "20px" },
  focusCard: { background: "#f0fdf4", borderRadius: "10px", padding: "24px", borderTop: "3px solid #1a7a2e" },
  focusH3:   { fontSize: "1rem", fontWeight: 700, color: "#0f5220", marginBottom: "12px" },
  focusUl:   { paddingLeft: "1.2rem", listStyle: "disc", display: "flex", flexDirection: "column", gap: "6px" },
  focusLi:   { color: "#374151", lineHeight: 1.6, fontSize: "0.92rem" },
  plainUl:   { paddingLeft: "1.2rem", listStyle: "disc", display: "flex", flexDirection: "column", gap: "6px" },
  plainLi:   { color: "#374151", lineHeight: 1.7 },
  valuesGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px", marginTop: "20px" },
  valueCard:  { background: "white", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "20px", textAlign: "center" },
  valueName:  { display: "block", color: "#0f5220", fontSize: "1rem", fontWeight: 700, marginBottom: "6px" },
  valueDesc:  { color: "#6b7280", fontSize: "0.88rem" },
  contactBox: { background: "#0f5220", color: "white", borderRadius: "12px", padding: "36px" },
  contactH2:  { color: "white", marginBottom: "20px", fontSize: "1.4rem", fontWeight: 700 },
  contactGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" },
  contactLabel: { display: "block", color: "#c9a227", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px", fontWeight: 700 },
  contactValue: { color: "rgba(255,255,255,0.85)", fontSize: "0.95rem" },
};

const focusAreas = [
  {
    title: "Empowerment & Education",
    items: ["Leadership development", "Mentorship & coaching", "Skills acquisition workshops", "Personal development", "Capacity-building seminars"],
  },
  {
    title: "Enterprise & Innovation",
    items: ["Entrepreneurship training", "Youth startup mentorship", "Innovation challenges & pitches", "Financial literacy programs", "Support for youth enterprises"],
  },
  {
    title: "Engagement & Advocacy",
    items: ["Community development", "Youth-led outreach programs", "Community awareness forums", "Social campaigns", "Volunteer mobilization"],
  },
];

const values = [
  { name: "Leadership", desc: "We lead by example." },
  { name: "Integrity",  desc: "Transparency and accountability." },
  { name: "Innovation", desc: "Creativity and forward thinking." },
  { name: "Inclusion",  desc: "Equal opportunity and diversity." },
  { name: "Impact",     desc: "Success measured by real change." },
];

const contacts = [
  { label: "Email",     value: "pyanofficial01@gmail.com" },
  { label: "Phone",     value: "08112551832" },
  { label: "Address",   value: "No4 Vision Drive, School Road, Yenagoa, Bayelsa State, Nigeria" },
  { label: "Instagram", value: "@pyna_official" },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <div style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.heroH1}>Prosperity Youth Ambassadors Network</h1>
          <p style={styles.heroP}>Community-Based Organisation — Yenagoa, Bayelsa State, Nigeria</p>
        </div>
      </div>

      {/* Body */}
      <div style={styles.body}>
        <div style={styles.container}>

          {/* About */}
          <div style={styles.section}>
            <h2 style={styles.h2}>About Us</h2>
            <div style={styles.divider} />
            <p style={styles.text}>
              PYAN is a youth-led, impact-driven community-based organisation committed to
              mobilizing and empowering young people to lead, innovate, and drive sustainable
              prosperity within their communities. We believe young people are not just the
              leaders of tomorrow — but the change-makers of today.
            </p>
          </div>

          {/* Vision & Mission */}
          <div style={styles.section}>
            <div style={styles.vmGrid}>
              <div style={styles.focusCard}>
                <h3 style={styles.focusH3}>Our Vision</h3>
                <p style={styles.text}>To mobilize a bold generation of youths empowered to lead, innovate, and drive prosperity in their communities.</p>
              </div>
              <div style={styles.focusCard}>
                <h3 style={styles.focusH3}>Our Mission</h3>
                <p style={styles.text}>To equip young people with skills, platforms, and opportunities to take action, create impact, and secure their future.</p>
              </div>
            </div>
          </div>

          {/* Core Focus */}
          <div style={styles.section}>
            <h2 style={styles.h2}>Core Focus — The 3Es</h2>
            <div style={styles.divider} />
            <div style={styles.focusGrid}>
              {focusAreas.map((area) => (
                <div style={styles.focusCard} key={area.title}>
                  <h3 style={styles.focusH3}>{area.title}</h3>
                  <ul style={styles.focusUl}>
                    {area.items.map((item) => <li style={styles.focusLi} key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div style={styles.section}>
            <h2 style={styles.h2}>Core Values</h2>
            <div style={styles.divider} />
            <div style={styles.valuesGrid}>
              {values.map((v) => (
                <div style={styles.valueCard} key={v.name}>
                  <strong style={styles.valueName}>{v.name}</strong>
                  <span style={styles.valueDesc}>{v.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Objectives */}
          <div style={styles.section}>
            <h2 style={styles.h2}>Organizational Objectives</h2>
            <div style={styles.divider} />
            <ul style={styles.plainUl}>
              <li style={styles.plainLi}>Build confident and competent youth leaders</li>
              <li style={styles.plainLi}>Promote entrepreneurship and self-reliance</li>
              <li style={styles.plainLi}>Foster innovation for sustainable development</li>
              <li style={styles.plainLi}>Encourage youth participation in community development</li>
              <li style={styles.plainLi}>Create networks that connect youths to opportunities</li>
            </ul>
          </div>

          {/* Target Beneficiaries */}
          <div style={styles.section}>
            <h2 style={styles.h2}>Target Beneficiaries</h2>
            <div style={styles.divider} />
            <ul style={styles.plainUl}>
              <li style={styles.plainLi}>Students in secondary and tertiary institutions</li>
              <li style={styles.plainLi}>Young entrepreneurs and innovators</li>
              <li style={styles.plainLi}>Emerging community leaders</li>
              <li style={styles.plainLi}>Unemployed and underemployed youths</li>
              <li style={styles.plainLi}>Youth-led organizations and associations</li>
            </ul>
          </div>

          {/* Governance */}
          <div style={styles.section}>
            <h2 style={styles.h2}>Governance Structure</h2>
            <div style={styles.divider} />
            <ul style={styles.plainUl}>
              <li style={styles.plainLi}>Board of Trustees</li>
              <li style={styles.plainLi}>Executive Leadership Team</li>
              <li style={styles.plainLi}>Program Coordinators</li>
              <li style={styles.plainLi}>Youth Ambassadors</li>
              <li style={styles.plainLi}>Volunteers and Community Representatives</li>
            </ul>
          </div>

          {/* Contact */}
          <div style={styles.contactBox}>
            <h2 style={styles.contactH2}>Contact Information</h2>
            <div style={styles.contactGrid}>
              {contacts.map((c) => (
                <div key={c.label}>
                  <strong style={styles.contactLabel}>{c.label}</strong>
                  <span style={styles.contactValue}>{c.value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
