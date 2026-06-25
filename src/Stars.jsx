const REVIEWS = [
  {
    stars: 5,
    text: "Booking was so easy — literally 2 minutes from search to confirmed appointment. Dr. Mitchell was incredibly gentle and thorough. My smile has never looked better!",
    name: "Jennifer Adams",
    role: "Marketing Manager",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    stars: 5,
    text: "As someone with serious dental anxiety, I was blown away by how calm the clinic felt. The AI booking system is next-level — it suggested the perfect slot automatically.",
    name: "Michael Torres",
    role: "Software Engineer",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    stars: 5,
    text: "Got my veneers done here and couldn't be happier. Professional team, modern tech, and the pricing was completely transparent. I'll never go anywhere else.",
    name: "Lisa Park",
    role: "Graphic Designer",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

function Stars({ count }) {
  return (
    <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="#f59e0b">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  );
}

export default function PatientReviews() {
  return (
    <section style={{
      padding: "80px 0 100px",
      background: "#f0f4f8",
      fontFamily: "'Inter', sans-serif",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span style={{
            display: "inline-block",
            background: "#fff",
            color: "#2563eb",
            fontSize: 13,
            fontWeight: 600,
            padding: "6px 20px",
            borderRadius: 50,
            border: "1px solid #bfdbfe",
            marginBottom: 20,
          }}>
            Patient Reviews
          </span>
          <h2 style={{
            fontSize: 44,
            fontWeight: 800,
            color: "#0f172a",
            margin: "0 0 16px",
            letterSpacing: -0.5,
          }}>
            What Our Patients Say
          </h2>
          <p style={{
            fontSize: 17,
            color: "#64748b",
            maxWidth: 480,
            margin: "0 auto",
            lineHeight: 1.7,
          }}>
            Real stories from real people who chose DentalCare for their smile journey.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 28,
        }}>
          {REVIEWS.map((r, i) => (
            <div key={i} style={{
              background: "#fff",
              borderRadius: 20,
              padding: "32px 28px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              border: "1px solid #e8edf3",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 24,
            }}>
              <div>
                <Stars count={r.stars} />
                <p style={{
                  fontSize: 15,
                  color: "#334155",
                  lineHeight: 1.75,
                  margin: 0,
                }}>
                  "{r.text}"
                </p>
              </div>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <img
                  src={r.avatar}
                  alt={r.name}
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "#0f172a" }}>{r.name}</div>
                  <div style={{ fontSize: 13, color: "#94a3b8", marginTop: 2 }}>{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
