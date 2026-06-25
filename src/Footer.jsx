import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Ligne 1 : 4 colonnes */}
        <div className="footer-grid">
          {/* Colonne 1 - Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">🦷</span>
              <span className="logo-text">DentalCare</span>
            </div>
            <p className="brand-description">
              Modern dental care powered by AI.<br />
              Your smile deserves the best — we make getting there effortless.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link">📱</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📷</a>
              <a href="#" className="social-link">💼</a>
            </div>
          </div>

          {/* Colonne 2 - Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Meet the Dentists</a></li>
              <li><a href="#">About DentalCare</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

          {/* Colonne 3 - Contact Us */}
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <ul>
              <li>📍 123 Dental Ave, Health District</li>
              <li>New York, NY 10001</li>
              <li>📞 +1 (800) 555-DENTAL</li>
              <li>✉️ hello@dentalcare.com</li>
            </ul>
          </div>

          {/* Colonne 4 - Opening Hours */}
          <div className="footer-hours">
            <h4>Opening Hours</h4>
            <ul>
              <li>
                <span className="day">Monday – Friday</span>
                <span className="time">8:00 AM – 7:00 PM</span>
              </li>
              <li>
                <span className="day">Saturday</span>
                <span className="time">9:00 AM – 5:00 PM</span>
              </li>
              <li>
                <span className="day">Sunday</span>
                <span className="time">Emergency Only</span>
              </li>
            </ul>
            <div className="hours-status">
              <span className="status-dot">●</span>
              <span className="status-text">We're Open Now</span>
              <span className="status-close">Closes at 7:00 PM today</span>
            </div>
          </div>
        </div>

        {/* Ligne 2 - Bottom bar */}
        <div className="footer-bottom">
          <p>© 2026 DentalCare. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;