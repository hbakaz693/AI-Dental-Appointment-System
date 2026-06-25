const STEPS = [
  {
    number: "1",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
    title: "Choose a Service",
    description: "Browse our full range of dental treatments and select what you need.",
  },
  {
    number: "2",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="3"/>
        <line x1="3" y1="9" x2="21" y2="9"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="7" y1="13" x2="9" y2="13"/>
        <line x1="7" y1="17" x2="9" y2="17"/>
        <line x1="12" y1="13" x2="14" y2="13"/>
        <line x1="12" y1="17" x2="14" y2="17"/>
      </svg>
    ),
    title: "Pick Date & Time",
    description: "Our AI shows live availability for your preferred dentist in real time.",
  },
  {
    number: "3",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    title: "Confirm Booking",
    description: "Review your appointment details and confirm with a single tap.",
  },
  {
    number: "4",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2"/>
        <polyline points="2 9 12 15 22 9"/>
      </svg>
    ),
    title: "Get Confirmation",
    description: "Instant email and SMS with your appointment summary and reminders.",
  },
];

export default function HowItWorks() {
  return (
    <section style={{
      padding: "80px 0 100px",
      background: "#f0f4f8",
      fontFamily: "'Inter', sans-serif",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
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
            letterSpacing: 0.2,
          }}>
            How It Works
          </span>
          <h2 style={{
            fontSize: 44,
            fontWeight: 800,
            color: "#0f172a",
            margin: "0 0 16px",
            letterSpacing: -0.5,
          }}>
            Book in 4 Simple Steps
          </h2>
          <p style={{
            fontSize: 17,
            color: "#64748b",
            maxWidth: 520,
            margin: "0 auto",
            lineHeight: 1.7,
          }}>
            From first click to confirmed appointment — the whole thing takes under two minutes.
          </p>
        </div>

        {/* Steps row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 0,
          alignItems: "start",
          position: "relative",
        }}>
          {STEPS.map((step, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>

              {/* Icon card + number badge + connector line */}
              <div style={{ position: "relative", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 28 }}>

                {/* Connector line (right half) — drawn before the card so it sits behind */}
                {i < STEPS.length - 1 && (
                  <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "calc(50% + 44px)",
                    right: 0,
                    height: 2,
                    background: "linear-gradient(90deg,#93c5fd,#bfdbfe)",
                    transform: "translateY(-50%)",
                    zIndex: 0,
                  }} />
                )}
                {/* Connector line (left half) */}
                {i > 0 && (
                  <div style={{
                    position: "absolute",
                    top: "50%",
                    right: "calc(50% + 44px)",
                    left: 0,
                    height: 2,
                    background: "linear-gradient(90deg,#bfdbfe,#93c5fd)",
                    transform: "translateY(-50%)",
                    zIndex: 0,
                  }} />
                )}

                {/* Icon card */}
                <div style={{
                  width: 84,
                  height: 84,
                  background: "#fff",
                  borderRadius: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                  position: "relative",
                  zIndex: 1,
                  flexShrink: 0,
                }}>
                  {step.icon}

                  {/* Number badge */}
                  <div style={{
                    position: "absolute",
                    top: -10,
                    right: -10,
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg,#1d4ed8,#3b82f6)",
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 800,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 10px rgba(29,78,216,0.4)",
                    zIndex: 2,
                  }}>
                    {step.number}
                  </div>
                </div>
              </div>

              {/* Text */}
              <h3 style={{
                fontSize: 16,
                fontWeight: 700,
                color: "#0f172a",
                margin: "0 0 10px",
                textAlign: "center",
              }}>
                {step.title}
              </h3>
              <p style={{
                fontSize: 13.5,
                color: "#64748b",
                lineHeight: 1.65,
                textAlign: "center",
                margin: 0,
                maxWidth: 200,
              }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
