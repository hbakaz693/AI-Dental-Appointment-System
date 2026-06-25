import './Services.css';

function Services() {
  const services = [
    {
      icon: "🦷",
      title: "Teeth Cleaning",
      description: "Professional removal of plaque and tartar for a cleaner, healthier smile that lasts."
    },
    {
      icon: "🔬",
      title: "Dental Checkup",
      description: "Comprehensive exams with digital X-rays to detect issues before they become problems."
    },
    {
      icon: "✨",
      title: "Teeth Whitening",
      description: "Professional-grade whitening treatments for a noticeably brighter smile in one visit."
    },
    {
      icon: "🦴",
      title: "Orthodontics",
      description: "Clear aligners and modern braces to straighten teeth and perfect your bite."
    },
    {
      icon: "🦷",
      title: "Dental Implants",
      description: "Permanent tooth replacements that look, feel, and function like your natural teeth."
    },
    {
      icon: "🚑",
      title: "Emergency Dental",
      description: "Same-day care for urgent dental pain, trauma, or infections — we're here when it counts."
    }
  ];

  return (
    <section className="services-section">
      <div className="container">
        {/* En-tête */}
        <div className="services-header">
          <span className="services-badge">Our Services</span>
          <h2>Comprehensive Dental Care</h2>
          <p className="services-subtitle">
            From routine check-ups to advanced implants — everything your smile needs, under one roof.
          </p>
        </div>

        {/* Grille des services */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#" className="service-link">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;