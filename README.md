<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AI Dental Appointment System</title>
    <style>
        /* ===== RESET & BASE ===== */
        *,
        *::before,
        *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary: #0ea5e9;
            --primary-dark: #0284c7;
            --secondary: #1e293b;
            --accent: #38bdf8;
            --bg-light: #f8fafc;
            --text-dark: #0f172a;
            --text-light: #64748b;
            --white: #ffffff;
            --shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
            --shadow-hover: 0 20px 60px rgba(0, 0, 0, 0.12);
            --radius: 16px;
            --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
            background: var(--bg-light);
            color: var(--text-dark);
            line-height: 1.6;
            overflow-x: hidden;
        }

        a {
            text-decoration: none;
            color: inherit;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
        }

        /* ===== HEADER ===== */
        .header {
            background: var(--white);
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.06);
            position: sticky;
            top: 0;
            z-index: 100;
            backdrop-filter: blur(10px);
            background: rgba(255, 255, 255, 0.9);
        }

        .header .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 16px;
            padding-bottom: 16px;
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 1.5rem;
            font-weight: 800;
            color: var(--primary);
        }

        .logo-icon {
            width: 40px;
            height: 40px;
            background: var(--primary);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.3rem;
        }

        .nav {
            display: flex;
            gap: 32px;
            align-items: center;
        }

        .nav a {
            font-weight: 500;
            color: var(--text-light);
            transition: var(--transition);
            position: relative;
        }

        .nav a::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--primary);
            transition: var(--transition);
        }

        .nav a:hover {
            color: var(--primary);
        }

        .nav a:hover::after {
            width: 100%;
        }

        .btn-nav {
            background: var(--primary);
            color: white !important;
            padding: 10px 24px;
            border-radius: 50px;
            font-weight: 600;
            transition: var(--transition);
        }

        .btn-nav:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(14, 165, 233, 0.35);
        }

        .btn-nav::after {
            display: none !important;
        }

        /* ===== HERO ===== */
        .hero {
            padding: 80px 0 60px;
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -20%;
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(14, 165, 233, 0.08), transparent 70%);
            border-radius: 50%;
            pointer-events: none;
        }

        .hero .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
            position: relative;
            z-index: 1;
        }

        .hero-content h1 {
            font-size: 3.2rem;
            font-weight: 800;
            line-height: 1.15;
            margin-bottom: 20px;
        }

        .hero-content h1 span {
            color: var(--primary);
            position: relative;
        }

        .hero-content h1 span::after {
            content: '';
            position: absolute;
            bottom: 4px;
            left: 0;
            width: 100%;
            height: 8px;
            background: rgba(14, 165, 233, 0.2);
            border-radius: 4px;
            z-index: -1;
        }

        .hero-content p {
            font-size: 1.2rem;
            color: var(--text-light);
            max-width: 480px;
            margin-bottom: 32px;
        }

        .hero-buttons {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
        }

        .btn-primary {
            background: var(--primary);
            color: white;
            padding: 14px 36px;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1rem;
            border: none;
            cursor: pointer;
            transition: var(--transition);
            display: inline-block;
        }

        .btn-primary:hover {
            background: var(--primary-dark);
            transform: translateY(-3px);
            box-shadow: 0 12px 35px rgba(14, 165, 233, 0.4);
        }

        .btn-secondary {
            background: var(--white);
            color: var(--text-dark);
            padding: 14px 36px;
            border-radius: 50px;
            font-weight: 600;
            border: 2px solid #e2e8f0;
            transition: var(--transition);
            display: inline-block;
        }

        .btn-secondary:hover {
            border-color: var(--primary);
            color: var(--primary);
            transform: translateY(-3px);
            box-shadow: 0 12px 35px rgba(0, 0, 0, 0.06);
        }

        .hero-image {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .hero-image img {
            width: 100%;
            max-width: 520px;
            border-radius: var(--radius);
            box-shadow: var(--shadow);
            transition: var(--transition);
            object-fit: cover;
        }

        .hero-image img:hover {
            transform: scale(1.02);
            box-shadow: var(--shadow-hover);
        }

        /* ===== STATS ===== */
        .stats {
            padding: 40px 0 60px;
            background: var(--white);
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 32px;
            text-align: center;
        }

        .stat-item h3 {
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--primary);
        }

        .stat-item p {
            color: var(--text-light);
            font-weight: 500;
        }

        /* ===== FEATURES ===== */
        .features {
            padding: 80px 0;
        }

        .section-title {
            text-align: center;
            font-size: 2.4rem;
            font-weight: 800;
            margin-bottom: 12px;
        }

        .section-subtitle {
            text-align: center;
            color: var(--text-light);
            font-size: 1.1rem;
            max-width: 600px;
            margin: 0 auto 48px;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
        }

        .feature-card {
            background: var(--white);
            padding: 36px 28px;
            border-radius: var(--radius);
            box-shadow: var(--shadow);
            transition: var(--transition);
            text-align: center;
            border: 1px solid rgba(0, 0, 0, 0.04);
        }

        .feature-card:hover {
            transform: translateY(-8px);
            box-shadow: var(--shadow-hover);
        }

        .feature-icon {
            width: 64px;
            height: 64px;
            background: rgba(14, 165, 233, 0.1);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            margin: 0 auto 20px;
        }

        .feature-card h3 {
            font-size: 1.2rem;
            margin-bottom: 8px;
        }

        .feature-card p {
            color: var(--text-light);
            font-size: 0.95rem;
        }

        /* ===== BOOKING FORM ===== */
        .booking-section {
            padding: 80px 0;
            background: var(--white);
        }

        .booking-wrapper {
            max-width: 700px;
            margin: 0 auto;
            background: var(--bg-light);
            padding: 48px;
            border-radius: var(--radius);
            box-shadow: var(--shadow);
        }

        .booking-wrapper h2 {
            text-align: center;
            margin-bottom: 8px;
        }

        .booking-wrapper .section-subtitle {
            margin-bottom: 32px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            font-weight: 600;
            margin-bottom: 6px;
            font-size: 0.95rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 12px 16px;
            border: 2px solid #e2e8f0;
            border-radius: 10px;
            font-size: 1rem;
            transition: var(--transition);
            background: var(--white);
            font-family: inherit;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.1);
        }

        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        .btn-submit {
            width: 100%;
            padding: 16px;
            background: var(--primary);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition);
            margin-top: 8px;
        }

        .btn-submit:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 8px 30px rgba(14, 165, 233, 0.35);
        }

        /* ===== WORKFLOW ===== */
        .workflow-section {
            padding: 80px 0;
            background: var(--bg-light);
        }

        .workflow-steps {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 16px;
            flex-wrap: wrap;
            max-width: 900px;
            margin: 0 auto;
        }

        .workflow-step {
            text-align: center;
            flex: 1;
            min-width: 100px;
        }

        .workflow-step .step-num {
            width: 48px;
            height: 48px;
            background: var(--primary);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 1.1rem;
            margin: 0 auto 12px;
        }

        .workflow-step p {
            font-weight: 500;
            font-size: 0.9rem;
        }

        .workflow-arrow {
            font-size: 1.5rem;
            color: var(--primary);
            font-weight: 300;
        }

        /* ===== FOOTER ===== */
        .footer {
            background: var(--secondary);
            color: #94a3b8;
            padding: 48px 0 24px;
        }

        .footer .container {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            gap: 40px;
        }

        .footer-brand h3 {
            color: white;
            font-size: 1.3rem;
            margin-bottom: 8px;
        }

        .footer-brand p {
            font-size: 0.95rem;
            max-width: 300px;
        }

        .footer-col h4 {
            color: white;
            margin-bottom: 12px;
        }

        .footer-col a {
            display: block;
            margin-bottom: 8px;
            transition: var(--transition);
        }

        .footer-col a:hover {
            color: white;
        }

        .footer-bottom {
            grid-column: 1 / -1;
            border-top: 1px solid #334155;
            padding-top: 24px;
            text-align: center;
            font-size: 0.9rem;
        }

        .footer-bottom .highlight {
            color: var(--primary);
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 992px) {
            .hero .container {
                grid-template-columns: 1fr;
                text-align: center;
            }

            .hero-content p {
                margin: 0 auto 32px;
            }

            .hero-buttons {
                justify-content: center;
            }

            .hero-image img {
                max-width: 400px;
            }

            .features-grid {
                grid-template-columns: 1fr 1fr;
            }

            .footer .container {
                grid-template-columns: 1fr 1fr;
            }
        }

        @media (max-width: 768px) {
            .nav {
                display: none;
            }

            .hero-content h1 {
                font-size: 2.2rem;
            }

            .stats-grid {
                grid-template-columns: 1fr 1fr;
            }

            .features-grid {
                grid-template-columns: 1fr;
            }

            .form-row {
                grid-template-columns: 1fr;
            }

            .booking-wrapper {
                padding: 24px;
            }

            .workflow-steps {
                flex-direction: column;
            }

            .workflow-arrow {
                transform: rotate(90deg);
            }

            .footer .container {
                grid-template-columns: 1fr;
                text-align: center;
            }

            .footer-brand p {
                margin: 0 auto;
            }
        }

        @media (max-width: 480px) {
            .hero-content h1 {
                font-size: 1.8rem;
            }

            .stats-grid {
                grid-template-columns: 1fr;
            }

            .btn-primary,
            .btn-secondary {
                width: 100%;
                text-align: center;
            }

            .hero-buttons {
                flex-direction: column;
            }
        }

        /* ===== MOBILE MENU ===== */
        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            font-size: 1.8rem;
            cursor: pointer;
            color: var(--text-dark);
        }

        @media (max-width: 768px) {
            .mobile-menu-btn {
                display: block;
            }
        }

        /* ===== ALERT ===== */
        .alert {
            padding: 16px 20px;
            border-radius: 10px;
            margin-bottom: 20px;
            display: none;
        }

        .alert-success {
            background: #dcfce7;
            color: #166534;
            border: 1px solid #86efac;
            display: block;
        }

        .alert-error {
            background: #fee2e2;
            color: #991b1b;
            border: 1px solid #fca5a5;
            display: block;
        }
    </style>
</head>
<body>

    <!-- ===== HEADER ===== -->
    <header class="header">
        <div class="container">
            <div class="logo">
                <div class="logo-icon">🦷</div>
                <span>AI Dental</span>
            </div>
            <nav class="nav">
                <a href="#home">Accueil</a>
                <a href="#features">Services</a>
                <a href="#booking">Rendez-vous</a>
                <a href="#workflow">Comment ça marche</a>
                <a href="#booking" class="btn-nav">📅 Réserver</a>
            </nav>
            <button class="mobile-menu-btn" aria-label="Menu">☰</button>
        </div>
    </header>

    <!-- ===== HERO ===== -->
    <section class="hero" id="home">
        <div class="container">
            <div class="hero-content">
                <h1>Votre sourire <span>n'attend plus</span></h1>
                <p>
                    Prenez rendez-vous en ligne en quelques clics. Notre système
                    intelligent gère tout automatiquement.
                </p>
                <div class="hero-buttons">
                    <a href="#booking" class="btn-primary">📅 Prendre rendez-vous</a>
                    <a href="#workflow" class="btn-secondary">🔍 En savoir plus</a>
                </div>
            </div>
            <div class="hero-image">
                <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop&crop=center"
                alt="Cabinet dentaire moderne"
                />
            </div>
        </div>
    </section>

    <!-- ===== STATS ===== -->
    <section class="stats">
        <div class="container">
            <div class="stats-grid">
                <div class="stat-item">
                    <h3>1500+</h3>
                    <p>Patients satisfaits</p>
                </div>
                <div class="stat-item">
                    <h3>98%</h3>
                    <p>Taux de satisfaction</p>
                </div>
                <div class="stat-item">
                    <h3>24/7</h3>
                    <p>Réservation en ligne</p>
                </div>
                <div class="stat-item">
                    <h3>⚡</h3>
                    <p>Confirmation instantanée</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ===== FEATURES ===== -->
    <section class="features" id="features">
        <div class="container">
            <h2 class="section-title">Des services <span style="color:var(--primary)">intelligents</span></h2>
            <p class="section-subtitle">
                Notre système automatisé gère chaque étape de votre réservation.
            </p>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">📋</div>
                    <h3>Formulaire simple</h3>
                    <p>Remplissez vos informations en quelques étapes rapides et intuitives.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📅</div>
                    <h3>Google Calendar</h3>
                    <p>Votre rendez-vous est automatiquement ajouté à votre agenda.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📊</div>
                    <h3>Google Sheets</h3>
                    <p>Toutes vos données sont stockées en sécurité dans un tableau.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📧</div>
                    <h3>Confirmation Gmail</h3>
                    <p>Recevez un email de confirmation instantané après réservation.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🤖</div>
                    <h3>Automatisation n8n</h3>
                    <p>Un workflow intelligent relie tous vos outils sans effort.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📱</div>
                    <h3>Responsive</h3>
                    <p>Réservez depuis n'importe quel appareil, où que vous soyez.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ===== BOOKING FORM ===== -->
    <section class="booking-section" id="booking">
        <div class="container">
            <div class="booking-wrapper">
                <h2 class="section-title">📅 Réserver un <span style="color:var(--primary)">rendez-vous</span></h2>
                <p class="section-subtitle">
                    Remplissez le formulaire ci-dessous et recevez une confirmation immédiate.
                </p>

                <div id="alert" class="alert"></div>

                <form id="bookingForm">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="fullName">Nom complet *</label>
                            <input type="text" id="fullName" placeholder="Jean Dupont" required />
                        </div>
                        <div class="form-group">
                            <label for="email">Email *</label>
                            <input type="email" id="email" placeholder="jean@email.com" required />
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="phone">Téléphone *</label>
                        <input type="tel" id="phone" placeholder="06 12 34 56 78" required />
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="date">Date *</label>
                            <input type="date" id="date" required />
                        </div>
                        <div class="form-group">
                            <label for="time">Heure *</label>
                            <input type="time" id="time" required />
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="service">Service *</label>
                        <select id="service" required>
                            <option value="">Choisissez un service</option>
                            <option value="Consultation">Consultation générale</option>
                            <option value="Détartrage">Détartrage</option>
                            <option value="Blanchiment">Blanchiment</option>
                            <option value="Implant">Implant dentaire</option>
                            <option value="Orthodontie">Orthodontie</option>
                            <option value="Urgence">Urgence dentaire</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="notes">Notes (optionnel)</label>
                        <textarea id="notes" rows="3" placeholder="Informations complémentaires..."></textarea>
                    </div>

                    <button type="submit" class="btn-submit">✅ Confirmer le rendez-vous</button>
                </form>
            </div>
        </div>
    </section>

    <!-- ===== WORKFLOW ===== -->
    <section class="workflow-section" id="workflow">
        <div class="container">
            <h2 class="section-title">⚡ Comment ça <span style="color:var(--primary)">fonctionne</span></h2>
            <p class="section-subtitle">
                Un processus entièrement automatisé de bout en bout.
            </p>
            <div class="workflow-steps">
                <div class="workflow-step">
                    <div class="step-num">1</div>
                    <p>Formulaire React</p>
                </div>
                <span class="workflow-arrow">→</span>
                <div class="workflow-step">
                    <div class="step-num">2</div>
                    <p>Webhook n8n</p>
                </div>
                <span class="workflow-arrow">→</span>
                <div class="workflow-step">
                    <div class="step-num">3</div>
                    <p>Formatage Date/Heure</p>
                </div>
                <span class="workflow-arrow">→</span>
                <div class="workflow-step">
                    <div class="step-num">4</div>
                    <p>Google Calendar</p>
                </div>
                <span class="workflow-arrow">→</span>
                <div class="workflow-step">
                    <div class="step-num">5</div>
                    <p>Google Sheets</p>
                </div>
                <span class="workflow-arrow">→</span>
                <div class="workflow-step">
                    <div class="step-num">6</div>
                    <p>Gmail Confirmation</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ===== FOOTER ===== -->
    <footer class="footer">
        <div class="container">
            <div class="footer-brand">
                <h3>🦷 AI Dental</h3>
                <p>
                    Système intelligent de prise de rendez-vous dentaire.
                    Automatisation complète avec n8n, Google Calendar, Sheets et Gmail.
                </p>
            </div>
            <div class="footer-col">
                <h4>Liens</h4>
                <a href="#home">Accueil</a>
                <a href="#features">Services</a>
                <a href="#booking">Rendez-vous</a>
                <a href="#workflow">Comment ça marche</a>
            </div>
            <div class="footer-col">
                <h4>Contact</h4>
                <a href="mailto:hbakaz693@gmail.com">hbakaz693@gmail.com</a>
                <a href="#">+212 6 50 00 00 00</a>
                <a href="https://github.com/hbakaz693">GitHub</a>
            </div>
            <div class="footer-col">
                <h4>Légal</h4>
                <a href="#">Confidentialité</a>
                <a href="#">CGU</a>
                <a href="#">Mentions légales</a>
            </div>
            <div class="footer-bottom">
                &copy; 2026 <span class="highlight">hbakaz693</span>. Tous droits réservés.
                — Code protégé. <span class="highlight">Clonage interdit sans autorisation.</span>
            </div>
        </div>
    </footer>

    <!-- ===== JAVASCRIPT ===== -->
    <script>
        // ============================================
        // GESTION DU FORMULAIRE
        // ============================================
        const form = document.getElementById('bookingForm');
        const alertDiv = document.getElementById('alert');

        // === Afficher une alerte ===
        function showAlert(message, type = 'success') {
            alertDiv.textContent = message;
            alertDiv.className = 'alert alert-' + type;
            alertDiv.style.display = 'block';

            setTimeout(() => {
                alertDiv.style.display = 'none';
            }, 6000);
        }

        // === Vérifier si la date est valide (pas dans le passé) ===
        function isValidDate(dateStr) {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const selected = new Date(dateStr + 'T00:00:00');
            return selected >= today;
        }

        // === Soumission du formulaire ===
        form.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Récupération des champs
            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const service = document.getElementById('service').value;
            const notes = document.getElementById('notes').value.trim();

            // === Validation ===
            if (!fullName || !email || !phone || !date || !time || !service) {
                showAlert('⚠️ Veuillez remplir tous les champs obligatoires.', 'error');
                return;
            }

            // Validation email simple
            if (!email.includes('@') || !email.includes('.')) {
                showAlert('⚠️ Veuillez entrer une adresse email valide.', 'error');
                return;
            }

            // Validation téléphone (au moins 10 chiffres)
            const phoneDigits = phone.replace(/\D/g, '');
            if (phoneDigits.length < 10) {
                showAlert('⚠️ Veuillez entrer un numéro de téléphone valide (10 chiffres).', 'error');
                return;
            }

            // Validation date
            if (!isValidDate(date)) {
                showAlert('⚠️ La date sélectionnée est déjà passée. Choisissez une date future.', 'error');
                return;
            }

            // === Construction des données ===
            const bookingData = {
                fullName,
                email,
                phone,
                date,
                time,
                service,
                notes: notes || 'Aucune note',
                submittedAt: new Date().toISOString()
            };

            console.log('📤 Envoi des données :', bookingData);

            // === URL du Webhook (à modifier avec votre propre URL) ===
            const webhookUrl = import.meta?.env?.VITE_N8N_WEBHOOK ||
                'https://your-n8n-webhook-url.com/webhook';

            try {
                // Simuler l'envoi en cas d'absence de webhook réel
                // Dans la vraie version, décommentez le fetch ci-dessous
                // et commentez la simulation.

                /*
                const response = await fetch(webhookUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(bookingData),
                });

                if (!response.ok) {
                    throw new Error(`Erreur HTTP ${response.status}`);
                }

                const result = await response.json();
                console.log('✅ Réponse n8n :', result);
                */

                // === SIMULATION (à supprimer en production) ===
                console.log('🔁 Simulation d\'envoi vers n8n...');
                await new Promise(resolve => setTimeout(resolve, 1200));

                // === SUCCÈS ===
                showAlert(
                    '✅ Rendez-vous confirmé ! Un email de confirmation a été envoyé à ' + email,
                    'success'
                );

                // Réinitialiser le formulaire
                form.reset();

            } catch (error) {
                console.error('❌ Erreur :', error);
                showAlert(
                    '❌ Une erreur est survenue. Veuillez réessayer ou contacter le support.',
                    'error'
                );
            }
        });

        // ============================================
        // DATE MINIMUM (aujourd'hui)
        // ============================================
        const dateInput = document.getElementById('date');
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);

        // ============================================
        // MOBILE MENU TOGGLE
        // ============================================
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const nav = document.querySelector('.nav');

        menuBtn.addEventListener('click', function() {
            if (nav.style.display === 'flex') {
                nav.style.display = 'none';
                menuBtn.textContent = '☰';
            } else {
                nav.style.display = 'flex';
                nav.style.flexDirection = 'column';
                nav.style.position = 'absolute';
                nav.style.top = '72px';
                nav.style.left = '0';
                nav.style.right = '0';
                nav.style.background = 'white';
                nav.style.padding = '24px';
                nav.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                nav.style.gap = '16px';
                menuBtn.textContent = '✕';
            }
        });

        // Réinitialiser le menu sur resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                nav.style.display = 'flex';
                nav.style.flexDirection = 'row';
                nav.style.position = 'static';
                nav.style.background = 'transparent';
                nav.style.padding = '0';
                nav.style.boxShadow = 'none';
                nav.style.gap = '32px';
                menuBtn.textContent = '☰';
            } else {
                nav.style.display = 'none';
                menuBtn.textContent = '☰';
            }
        });

        // ============================================
        // SCROLL ANIMATION (simple)
        // ============================================
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        console.log('🦷 AI Dental System chargé avec succès !');
        console.log('📌 N\'oubliez pas de configurer votre webhook n8n.');
        console.log('📧 Contact : hbakaz693@gmail.com');
    </script>

</body>
</html>
