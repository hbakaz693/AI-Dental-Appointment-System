import './Dentists.css';

function Dentists() {
  const dentists = [
    {
      name: "Dr. Sarah Mitchell",
      specialty: "Orthodontist",
      experience: "12 Years Experience",
      rating: "4.9",
      reviews: "312",
      avatar: "👩‍⚕️"
    },
    {
      name: "Dr. James Roberts",
      specialty: "Cosmetic Dentist",
      experience: "9 Years Experience",
      rating: "4.8",
      reviews: "274",
      avatar: "👨‍⚕️"
    },
    {
      name: "Dr. Emily Chen",
      specialty: "Oral Surgeon",
      experience: "14 Years Experience",
      rating: "5.0",
      reviews: "418",
      avatar: "👩‍⚕️"
    }
  ];

  return (
    <section className="dentists-section">
      <div className="container">
        {/* En-tête */}
        <div className="dentists-header">
          <span className="dentists-badge">Our Dentists</span>
          <h2>Meet Our Expert Team</h2>
          <p className="dentists-subtitle">
            Board-certified specialists committed to your long-term oral health
            and the perfect smile.
          </p>
        </div>

        {/* Grille des dentistes */}
        <div className="dentists-grid">
          {dentists.map((dentist, index) => (
            <div key={index} className="dentist-card">
              {/* Avatar */}
              <div className="dentist-avatar">
                {dentist.avatar}
              </div>
              
              {/* Infos */}
              <h3>{dentist.name}</h3>
              <p className="dentist-specialty">{dentist.specialty}</p>
              
              {/* Expérience */}
              <div className="dentist-experience">
                <span>📞 {dentist.experience}</span>
              </div>

              {/* Note et avis */}
              <div className="dentist-rating">
                <span className="rating-stars">⭐ {dentist.rating}</span>
                <span className="rating-reviews">({dentist.reviews}+ reviews)</span>
              </div>

              {/* Bouton */}
              <button className="dentist-book-btn">
                📞 Book with {dentist.name.split(' ').pop()}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Dentists;