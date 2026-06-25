import './WhyDentalCare.css';

function WhyDentalCare() {
  const features = [
    {
      icon: "👨‍⚕️",
      title: "Experienced Dentists",
      description: "Over 15 years of combined expertise across every dental specialty."
    },
    {
      icon: "🤖",
      title: "AI Appointment Booking",
      description: "Smart scheduling finds your perfect slot in seconds — no hold music."
    },
    {
      icon: "🔬",
      title: "Modern Equipment",
      description: "3D imaging, laser dentistry, and the latest clinical technology."
    },
    {
      icon: "🚑",
      title: "Emergency Support",
      description: "24/7 emergency dental care when you need it most, including weekends."
    },
    {
      icon: "🏛️",
      title: "Comfortable Clinic",
      description: "A calm, spa-like environment designed to ease even the worst anxiety."
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      description: "Transparent costs and flexible payment plans that work for every budget."
    }
  ];

  return (
    <section className="why-section">
      <div className="container">
        {/* En-tête */}
        <div className="why-header">
          <span className="why-badge">Why DentalCare</span>
          <h2 className='h2'>The Smart Choice for Your Oral Health</h2>
          <p className="why-subtitle">
            We blend decades of clinical excellence with the latest technology to deliver care that feels as good as it performs.
          </p>
          <button className="why-cta">
            Book Your Visit Today →
          </button>
        </div>

        {/* Grille des fonctionnalités */}
        <div className="why-grid">
          {features.map((feature, index) => (
            <div key={index} className="why-card">
              <div className="why-card-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyDentalCare;