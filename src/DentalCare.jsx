import { useState, useEffect } from "react";
import doctorImage from "./assets/image.png";
import BookingForm from "./BookingForm"; // 👈 Import du formulaire

const NAV_LINKS = ["Home", "Services", "Dentists", "About", "Contact"];
const TIMES = ["9:30 AM", "10:00 AM", "11:30 AM", "2:00 PM"];

export default function DentalCare() {
  const [scrolled, setScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", minHeight: "100vh", background: "#f0f4f8" }}>

      {/* ── STICKY HEADER ── */}
      <header style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        height: 68,
        background: scrolled ? "rgba(255,255,255,0.95)" : "#fff",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.08)" : "0 1px 0 #e5e9ef",
        transition: "box-shadow 0.3s, background 0.3s",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: "linear-gradient(135deg,#3b82f6,#06b6d4)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontSize: 18 }}>🦷</span>
          </div>
          <span style={{ fontWeight: 700, fontSize: 17, color: "#0f172a" }}>DentalCare</span>
        </div>

        {/* Nav links */}
        <nav style={{ display: "flex", gap: 36 }}>
          {NAV_LINKS.map(link => (
            <a key={link} href="#" style={{
              textDecoration: "none",
              fontSize: 15,
              color: link === "Home" ? "#1e40af" : "#374151",
              fontWeight: link === "Home" ? 600 : 400,
              transition: "color 0.2s",
            }}
              onMouseOver={e => e.target.style.color = "#1e40af"}
              onMouseOut={e => e.target.style.color = link === "Home" ? "#1e40af" : "#374151"}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA - Book Now */}
        <button 
          onClick={openBooking}  // 👈 Ouvre le formulaire
          style={{
            background: "linear-gradient(135deg,#2563eb,#3b82f6)",
            color: "#fff",
            border: "none",
            borderRadius: 24,
            padding: "10px 22px",
            fontWeight: 600,
            fontSize: 15,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
            boxShadow: "0 4px 14px rgba(37,99,235,0.35)",
            transition: "transform 0.15s",
          }}
          onMouseOver={e => e.currentTarget.style.transform = "scale(1.04)"}
          onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
        >
          📅 Book Now
        </button>
      </header>

      {/* ── HERO ── */}
      <section style={{
        paddingTop: 68,
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        gap: 0,
        background: "#f8fafc",
        overflow: "hidden",
      }}>
        {/* Left */}
        <div style={{ padding: "60px 40px 60px 72px" }}>
          <h1 style={{ fontSize: 54, fontWeight: 800, lineHeight: 1.1, color: "#0f172a", margin: "0 0 20px" }}>
            Book Your Dental{" "}
            <span style={{ color: "#2563eb" }}>Appointment</span>{" "}
            in Minutes
          </h1>
          <p style={{ fontSize: 17, color: "#64748b", lineHeight: 1.7, maxWidth: 480, margin: "0 0 36px" }}>
            Skip the hold music. Our AI assistant finds the perfect slot
            with your preferred dentist — available 24/7, confirmed instantly.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 56 }}>
            <button 
              onClick={openBooking}  // 👈 Ouvre le formulaire
              style={{
                background: "linear-gradient(135deg,#1d4ed8,#3b82f6)",
                color: "#fff", border: "none", borderRadius: 32,
                padding: "14px 28px", fontWeight: 700, fontSize: 16, cursor: "pointer",
                display: "flex", alignItems: "center", gap: 10,
                boxShadow: "0 8px 24px rgba(29,78,216,0.35)",
                transition: "transform 0.15s",
              }}
              onMouseOver={e => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              📅 Book an Appointment
            </button>
            <button style={{
              background: "#fff", color: "#374151", border: "1.5px solid #d1d5db",
              borderRadius: 32, padding: "14px 28px", fontWeight: 600,
              fontSize: 16, cursor: "pointer",
              transition: "border-color 0.2s",
            }}
              onMouseOver={e => e.currentTarget.style.borderColor = "#2563eb"}
              onMouseOut={e => e.currentTarget.style.borderColor = "#d1d5db"}
            >
              Contact Us →
            </button>
          </div>

          {/* Stats avec avis */}
          <div style={{ display: "flex", gap: 0 }}>
            {[
              { val: "10K+", label: "Happy Patients" },
              { val: "4.9 ★", label: "Average Rating", sub: "1,200+ reviews" },
              { val: "15+", label: "Expert Dentists" },
            ].map((s, i) => (
              <div key={s.label} style={{
                paddingRight: i < 2 ? 36 : 0,
                borderRight: i < 2 ? "1.5px solid #e2e8f0" : "none",
                marginRight: i < 2 ? 36 : 0,
              }}>
                <div style={{ fontSize: 26, fontWeight: 800, color: "#0f172a" }}>{s.val}</div>
                <div style={{ fontSize: 13, color: "#94a3b8", marginTop: 2 }}>{s.label}</div>
                {s.sub && <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 1 }}>{s.sub}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div style={{ position: "relative", height: "100%", minHeight: 560 }}>
          {/* Image */}
          <img 
            src={doctorImage}
            alt="Dental doctor with patient"
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "75%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "80px 0 0 80px",
            }}
          />

          {/* Overlay */}
          <div style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "100%",
            background: "linear-gradient(160deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)",
            borderRadius: "0 0 0 80px",
          }} />

          {/* Appointment card */}
          <div style={{
            position: "absolute", top: "50%", left: 48,
            transform: "translateY(-50%)",
            background: "#fff", borderRadius: 20,
            boxShadow: "0 12px 48px rgba(0,0,0,0.12)",
            padding: "24px 28px", width: 260, zIndex: 10,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16, color: "#2563eb", fontWeight: 600, fontSize: 14 }}>
              📅 Schedule Appointment
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{
                width: 40, height: 40, borderRadius: "50%",
                background: "linear-gradient(135deg,#dbeafe,#bfdbfe)",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18,
              }}>👨‍⚕️</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#0f172a" }}>Dr. Mitchell</div>
                <div style={{ fontSize: 12, color: "#94a3b8" }}>Orthodontist · June 28</div>
              </div>
            </div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", letterSpacing: 1, marginBottom: 10 }}>
              AVAILABLE TIMES
            </div>
            {TIMES.map(t => (
              <div key={t} style={{
                display: "block", width: "100%", padding: "10px",
                marginBottom: 8, borderRadius: 10, border: "none", cursor: "default",
                background: t === "10:00 AM" ? "linear-gradient(135deg,#1d4ed8,#3b82f6)" : "transparent",
                color: t === "10:00 AM" ? "#fff" : "#374151",
                fontWeight: t === "10:00 AM" ? 700 : 500,
                fontSize: 14,
              }}>
                {t}
              </div>
            ))}
            <div style={{
              display: "block", width: "100%", padding: "12px",
              background: "linear-gradient(135deg,#1d4ed8,#2563eb)",
              color: "#fff", border: "none", borderRadius: 12,
              fontWeight: 700, fontSize: 14, cursor: "default", marginTop: 4,
              textAlign: "center",
              boxShadow: "0 4px 14px rgba(29,78,216,0.3)",
            }}>
              Confirm Booking →
            </div>
          </div>

          {/* Confirmed badge */}
          <div style={{
            position: "absolute", bottom: 80, right: 60,
            background: "#fff", borderRadius: 16,
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            padding: "14px 20px", display: "flex", alignItems: "center", gap: 12,
            zIndex: 10,
          }}>
            <span style={{ fontSize: 24 }}>✅</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14, color: "#0f172a" }}>Appointment Confirmed!</div>
              <div style={{ fontSize: 12, color: "#94a3b8" }}>Tomorrow · 10:00 AM</div>
            </div>
          </div>
        </div>
      </section>

      {/* 👇 FORMULAIRE DE RESERVATION - Placé ici (en dehors de la section hero) */}
      <BookingForm isOpen={isBookingOpen} onClose={closeBooking} />

    </div>
  );
}