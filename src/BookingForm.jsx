import { useState } from 'react';
import './BookingForm.css';

function BookingForm({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    dentist: '',
    date: '',
    time: '',
    fullName: '',
    email: '',
    phone: '',
    notes: ''
  });

  const services = ['Teeth Cleaning', 'Dental Checkup', 'Teeth Whitening', 'Orthodontics', 'Dental Implants', 'Emergency Dental'];
  const dentists = ['Dr. Sarah Mitchell', 'Dr. James Roberts', 'Dr. Emily Chen'];
  const times = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e) => {

     e.preventDefault();

  try {
    const response = await fetch("https://hicham-2002.app.n8n.cloud/webhook-test/book-appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if(response.ok){
         alert('Appointment confirmed! ✅');
    onClose();
    setStep(1);
    setFormData({
      service: '',
      dentist: '',
      date: '',
      time: '',
      fullName: '',
      email: '',
      phone: '',
      notes: ''
    });

    }

    else{
        alert("Error while booking.")
    }
}
catch(error){
    console.error(error);
    alert("Unable to connect to the server.");
}
  };

  return (
    <div className="booking-overlay" onClick={onClose}>
      <div className="booking-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="booking-header">
          <div className="booking-brand">
            <span className="brand-icon">🦷</span>
            <span className="brand-name">BrightSmile</span>
          </div>
          <button className="booking-close" onClick={onClose}>✕</button>
        </div>

        {/* Progress bar */}
        <div className="booking-progress">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${(step / 3) * 100}%` }}></div>
          </div>
          <div className="progress-steps">
            <span className={`step-label ${step >= 1 ? 'active' : ''}`}>Your Info</span>
            <span className={`step-label ${step >= 2 ? 'active' : ''}`}>Schedule</span>
            <span className={`step-label ${step >= 3 ? 'active' : ''}`}>Confirm</span>
          </div>
          <div className="step-counter">Step {step} of 3</div>
        </div>

        {/* Content */}
        <div className="booking-content">
          <h2 className="booking-title">Book Your Dental Appointment</h2>
          <p className="booking-subtitle">
            Schedule your visit in less than a minute. Select your preferred
            dentist, service, date, and time.
          </p>

          {/* Étape 1 - Your Info */}
          {step === 1 && (
            <div className="form-step">
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 000-0000"
                  required
                />
              </div>
              <div className="form-group">
                <label>Additional Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Any special requests or concerns..."
                  rows="3"
                />
              </div>
            </div>
          )}

          {/* Étape 2 - Schedule */}
          {step === 2 && (
            <div className="form-step">
              <div className="form-group">
                <label>Select Service *</label>
                <select name="service" value={formData.service} onChange={handleChange} required>
                  <option value="">Choose a service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Select Dentist *</label>
                <select name="dentist" value={formData.dentist} onChange={handleChange} required>
                  <option value="">Choose a dentist</option>
                  {dentists.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Time *</label>
                  <select name="time" value={formData.time} onChange={handleChange} required>
                    <option value="">Select time</option>
                    {times.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Étape 3 - Confirm */}
          {step === 3 && (
            <div className="form-step confirm-step">
              <div className="confirm-card">
                <div className="confirm-icon">✅</div>
                <h3>Review Your Appointment</h3>
                <div className="confirm-details">
                  <div className="confirm-row">
                    <span className="confirm-label">Service</span>
                    <span className="confirm-value">{formData.service || 'Not selected'}</span>
                  </div>
                  <div className="confirm-row">
                    <span className="confirm-label">Dentist</span>
                    <span className="confirm-value">{formData.dentist || 'Not selected'}</span>
                  </div>
                  <div className="confirm-row">
                    <span className="confirm-label">Date & Time</span>
                    <span className="confirm-value">{formData.date || 'Not selected'} at {formData.time || 'Not selected'}</span>
                  </div>
                  <div className="confirm-row">
                    <span className="confirm-label">Patient</span>
                    <span className="confirm-value">{formData.fullName || 'Not provided'}</span>
                  </div>
                  <div className="confirm-row">
                    <span className="confirm-label">Contact</span>
                    <span className="confirm-value">{formData.email || 'Not provided'} | {formData.phone || 'Not provided'}</span>
                  </div>
                </div>
                <div className="confirm-actions">
                  <button className="btn-back" onClick={prevStep}>Back</button>
                  <button className="btn-confirm-final" onClick={handleSubmit}>
                    ✅ Confirm Appointment
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer buttons */}
        <div className="booking-footer">
          <button className="btn-prev" onClick={prevStep} disabled={step === 1}>
            Back
          </button>
          <button
            className="btn-next"
            onClick={step === 3 ? handleSubmit : nextStep}
          >
            {step === 3 ? 'Submit' : 'Next →'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;