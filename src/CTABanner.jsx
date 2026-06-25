export default function CTABanner() {
  return (
    <section style={{
      padding: "40px 32px",
      background: "#f0f4f8",
      fontFamily: "'Inter', sans-serif",
      paddingBottom: "60px",
    }}>
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 40%, #06b6d4 100%)",
        borderRadius: 24,
        padding: "64px 48px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>

        {/* Decorative blurred circles */}
        <div style={{
          position: "absolute", top: -40, left: -40,
          width: 220, height: 220, borderRadius: "50%",
          background: "rgba(255,255,255,0.08)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -60, left: 60,
          width: 260, height: 260, borderRadius: "50%",
          background: "rgba(255,255,255,0.07)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: 20, right: -30,
          width: 180, height: 180, borderRadius: "50%",
          background: "rgba(255,255,255,0.06)",
          pointerEvents: "none",
        }} />

        {/* Badge */}
        <span style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "rgba(255,255,255,0.15)",
          color: "#fff",
          fontSize: 13,
          fontWeight: 600,
          padding: "8px 20px",
          borderRadius: 50,
          border: "1px solid rgba(255,255,255,0.25)",
          marginBottom: 28,
          backdropFilter: "blur(6px)",
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
          </svg>
          Start Your Journey to a Perfect Smile
        </span>

        {/* Heading */}
        <h2 style={{
          fontSize: 46,
          fontWeight: 800,
          color: "#fff",
          margin: "0 0 20px",
          letterSpacing: -0.5,
          lineHeight: 1.15,
          position: "relative",
          zIndex: 1,
        }}>
          Schedule Your Dental Visit Today
        </h2>

        {/* Subtitle */}
        <p style={{
          fontSize: 17,
          color: "rgba(255,255,255,0.85)",
          maxWidth: 540,
          margin: "0 auto 40px",
          lineHeight: 1.7,
          position: "relative",
          zIndex: 1,
        }}>
          Join 10,000+ happy patients who trust DentalCare. Book your appointment in minutes — no phone calls, no waiting.
        </p>

        {/* Buttons */}
        <div style={{
          display: "flex",
          gap: 20,
          justifyContent: "center",
          flexWrap: "wrap",
          position: "relative",
          zIndex: 1,
        }}>
          {/* Primary button */}
          <button style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "#fff",
            color: "#2563eb",
            border: "none",
            borderRadius: 14,
            padding: "16px 32px",
            fontSize: 16,
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
            transition: "transform 0.15s, box-shadow 0.15s",
          }}
            onMouseOver={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.18)"; }}
            onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.12)"; }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="3"/>
              <line x1="3" y1="9" x2="21" y2="9"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
            </svg>
            Book an Appointment
          </button>

          {/* Secondary button */}
          <button style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(255,255,255,0.12)",
            color: "#fff",
            border: "1.5px solid rgba(255,255,255,0.4)",
            borderRadius: 14,
            padding: "16px 32px",
            fontSize: 16,
            fontWeight: 700,
            cursor: "pointer",
            backdropFilter: "blur(6px)",
            transition: "background 0.2s",
          }}
            onMouseOver={e => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
            onMouseOut={e => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.07 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
            </svg>
            Call Us: (800) 555-DENTAL
          </button>
        </div>
      </div>
    </section>
  );
}
