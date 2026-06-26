<!-- 
  ============================================================
  README.md - AI Dental Appointment System
  Version: 1.0.0
  Auteur: hbakaz693
  Licence: Propriétaire - Tous droits réservés
  ============================================================
-->

<h1 align="center">
  🦷 AI Dental Appointment System
</h1>

<p align="center">
  <strong>Un système intelligent de prise de rendez-vous dentaire</strong><br>
  React · n8n · Google Calendar · Google Sheets · Gmail
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/n8n-0A6CFF?style=for-the-badge&logo=n8n&logoColor=white" />
  <img src="https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white" />
  <img src="https://img.shields.io/badge/Google%20Sheets-34A853?style=for-the-badge&logo=googlesheets&logoColor=white" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/STATUS-En%20D%C3%A9veloppement-yellow?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Licence-Propri%C3%A9taire-red?style=for-the-badge" />
</p>

<hr>

<h2>📋 Table des matières</h2>

<details>
  <summary><b>📌 Cliquer pour afficher</b></summary>

1. [Aperçu du projet](#aperçu-du-projet)
2. [Fonctionnalités](#fonctionnalités)
3. [Architecture système](#architecture-système)
4. [Flux de travail](#flux-de-travail)
5. [Technologies utilisées](#technologies-utilisées)
6. [Captures d'écran](#captures-décran)
7. [Démo vidéo](#démo-vidéo)
8. [Workflow n8n](#workflow-n8n)
9. [Installation](#installation)
10. [Variables d'environnement](#variables-denvironnement)
11. [Structure du projet](#structure-du-projet)
12. [API et endpoints](#api-et-endpoints)
13. [Sécurité](#sécurité)
14. [Contribuer](#contribuer)
15. [Licence](#licence)
16. [Contact](#contact)

</details>

<hr>

<h2 id="aperçu-du-projet">🔍 Aperçu du projet</h2>

<p>
  <strong>AI Dental Appointment System</strong> est une application web moderne qui permet aux patients
  de prendre des rendez-vous dentaires en ligne via une interface React simple et responsive.
</p>

<p>
  Le projet utilise l'automatisation <strong>n8n</strong> pour recevoir les données de rendez-vous,
  formater la date et l'heure, créer des événements dans <strong>Google Calendar</strong>,
  stocker les détails dans <strong>Google Sheets</strong>, et envoyer des emails de confirmation
  automatiques via <strong>Gmail</strong>.
</p>

<h3>🎯 Objectifs</h3>

<ul>
  <li>✅ Simplifier la prise de rendez-vous pour les patients</li>
  <li>✅ Automatiser entièrement le processus de réservation</li>
  <li>✅ Centraliser les données dans Google Sheets</li>
  <li>✅ Envoyer des confirmations instantanées par email</li>
  <li>✅ Offrir une expérience utilisateur fluide et moderne</li>
</ul>

<hr>

<h2 id="fonctionnalités">✨ Fonctionnalités</h2>

<table>
  <tr>
    <td align="center">🖥️</td>
    <td><strong>Landing page moderne</strong> - Design professionnel pour le cabinet dentaire</td>
  </tr>
  <tr>
    <td align="center">📋</td>
    <td><strong>Formulaire multi-étapes</strong> - Réservation en quelques clics</td>
  </tr>
  <tr>
    <td align="center">🔌</td>
    <td><strong>Intégration n8n</strong> - Webhook pour l'automatisation</td>
  </tr>
  <tr>
    <td align="center">⏰</td>
    <td><strong>Formatage automatique</strong> - Date et heure optimisées</td>
  </tr>
  <tr>
    <td align="center">📅</td>
    <td><strong>Google Calendar</strong> - Création automatique des événements</td>
  </tr>
  <tr>
    <td align="center">📊</td>
    <td><strong>Google Sheets</strong> - Stockage sécurisé des réservations</td>
  </tr>
  <tr>
    <td align="center">📧</td>
    <td><strong>Gmail</strong> - Envoi automatique des confirmations</td>
  </tr>
  <tr>
    <td align="center">📱</td>
    <td><strong>Responsive</strong> - Compatible tous les appareils</td>
  </tr>
  <tr>
    <td align="center">🔒</td>
    <td><strong>Sécurisé</strong> - Protection des données patients</td>
  </tr>
</table>

<hr>

<h2 id="architecture-système">🏗️ Architecture système</h2>

<div align="center">
  <pre>
┌─────────────────────────────────────────────────────────────┐
│                      React Application                      │
│                   (Interface Utilisateur)                   │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                      n8n Webhook                           │
│                   (Réception des données)                   │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                  Date & Time Formatter                      │
│              (Formatage automatique)                        │
└─────────────────────────┬───────────────────────────────────┘
                          │
          ┌───────────────┼───────────────┐
          ▼               ▼               ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ Google Calendar │ │  Google Sheets  │ │     Gmail       │
│   Événements    │ │    Données      │ │   Emails        │
└─────────────────┘ └─────────────────┘ └─────────────────┘
  </pre>
</div>

<hr>

<h2 id="flux-de-travail">🔄 Flux de travail</h2>

<ol>
  <li><strong>👤 Patient</strong> - Remplit le formulaire de réservation</li>
  <li><strong>⚛️ React</strong> - Envoie les données au webhook n8n</li>
  <li><strong>🔌 n8n</strong> - Reçoit et traite les données</li>
  <li><strong>⏰ Formatage</strong> - Formate la date et l'heure</li>
  <li><strong>📅 Google Calendar</strong> - Crée l'événement</li>
  <li><strong>📊 Google Sheets</strong> - Stocke les informations</li>
  <li><strong>📧 Gmail</strong> - Envoie l'email de confirmation</li>
</ol>

<hr>

<h2 id="technologies-utilisées">💻 Technologies utilisées</h2>

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="https://skillicons.dev/icons?i=react" width="60" /><br>
        <strong>React</strong>
      </td>
      <td align="center">
        <img src="https://vitejs.dev/logo.svg" width="60" /><br>
        <strong>Vite</strong>
      </td>
      <td align="center">
        <img src="https://skillicons.dev/icons?i=javascript" width="60" /><br>
        <strong>JavaScript</strong>
      </td>
      <td align="center">
        <img src="https://skillicons.dev/icons?i=css" width="60" /><br>
        <strong>CSS3</strong>
      </td>
      <td align="center">
        <img src="https://skillicons.dev/icons?i=github" width="60" /><br>
        <strong>GitHub</strong>
      </td>
    </tr>
    <tr>
      <td align="center">
        <img src="https://www.vectorlogo.zone/logos/google/google-icon.svg" width="60" /><br>
        <strong>Google Calendar</strong>
      </td>
      <td align="center">
        <img src="https://www.vectorlogo.zone/logos/google_sheets/google_sheets-icon.svg" width="60" /><br>
        <strong>Google Sheets</strong>
      </td>
      <td align="center">
        <img src="https://www.vectorlogo.zone/logos/gmail/gmail-icon.svg" width="60" /><br>
        <strong>Gmail</strong>
      </td>
      <td align="center">
        <img src="./ScreenShot/n8n.png" width="60" /><br>
        <strong>n8n</strong>
      </td>
      <td align="center">
        <img src="https://skillicons.dev/icons?i=git" width="60" /><br>
        <strong>Git</strong>
      </td>
    </tr>
  </table>
</div>

<hr>

<h2 id="captures-décran">📸 Captures d'écran</h2>

<h3>🏠 Page d'accueil</h3>
<p align="center">
  <img src="./ScreenShot/Capture d’écran 2026-06-25 215639.png" width="900" alt="Page d'accueil" />
</p>

<h3>📅 Formulaire de réservation</h3>
<p align="center">
  <img src="./ScreenShot/2.png" width="900" alt="Formulaire de réservation" />
</p>

<h3>📆 Intégration Google Calendar</h3>
<p align="center">
  <img src="./ScreenShot/4.png" width="900" alt="Google Calendar" />
</p>

<h3>📊 Stockage Google Sheets</h3>
<p align="center">
  <img src="./ScreenShot/5.png" width="900" alt="Google Sheets" />
</p>

<h3>📧 Email de confirmation</h3>
<p align="center">
  <img src="./ScreenShot/7.png" width="900" alt="Email de confirmation" />
</p>

<hr>

<h2 id="démo-vidéo">🎥 Démo vidéo</h2>

<p align="center">
  <a href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID">
    <img src="./ScreenShot/thumbnail.png" width="800" alt="Démo vidéo" />
  </a>
  <br>
  <em>▶️ Cliquez sur l'image pour voir la démonstration complète</em>
</p>

<hr>

<h2 id="workflow-n8n">⚙️ Workflow n8n</h2>

<p align="center">
  <img src="./ScreenShot/3.png" width="1000" alt="Workflow n8n" />
</p>

<h3>Étapes du workflow</h3>

<table>
  <tr>
    <th>Étape</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1. Webhook</td>
    <td>Réception des données du formulaire React</td>
  </tr>
  <tr>
    <td>2. Date & Time</td>
    <td>Formatage automatique de la date et de l'heure</td>
  </tr>
  <tr>
    <td>3. Google Calendar</td>
    <td>Création de l'événement dans le calendrier</td>
  </tr>
  <tr>
    <td>4. Google Sheets</td>
    <td>Enregistrement des données patient</td>
  </tr>
  <tr>
    <td>5. Gmail</td>
    <td>Envoi de l'email de confirmation</td>
  </tr>
</table>

<hr>

<h2 id="installation">🚀 Installation</h2>

<h3>Prérequis</h3>

<ul>
  <li>Node.js (version 16 ou supérieure)</li>
  <li>npm ou yarn</li>
  <li>Compte Google (Calendar, Sheets, Gmail)</li>
  <li>n8n installé (local ou cloud)</li>
</ul>

<h3>Étapes d'installation</h3>

<pre><code># 1. Cloner le dépôt
git clone https://github.com/hbakaz693/AI-Dental-Appointment-System.git

# 2. Accéder au dossier
cd AI-Dental-Appointment-System

# 3. Installer les dépendances
npm install

# 4. Configurer les variables d'environnement
# Créer un fichier .env à la racine

# 5. Démarrer le serveur de développement
npm run dev
</code></pre>

<p>Ouvrez votre navigateur à : <a href="http://localhost:5173">http://localhost:5173</a></p>

<hr>

<h2 id="variables-denvironnement">🔐 Variables d'environnement</h2>

<p>Créez un fichier <code>.env</code> à la racine du projet :</p>

<pre><code># n8n Webhook URL
VITE_N8N_WEBHOOK=https://your-n8n-webhook-url.com/webhook

# Optionnel - Autres configurations
VITE_APP_NAME=AI Dental
VITE_APP_VERSION=1.0.0
</code></pre>

<blockquote>
  <p>⚠️ <strong>Important :</strong> Ne commitez jamais le fichier <code>.env</code> ou vos clés API sur GitHub.</p>
</blockquote>

<hr>

<h2 id="structure-du-projet">📁 Structure du projet</h2>

<pre>
AI-Dental-Appointment-System/
├── 📂 public/
│   └── 📂 ScreenShot/          # Captures d'écran
├── 📂 src/
│   ├── 📂 components/
│   │   ├── 📄 Hero.jsx
│   │   ├── 📄 Features.jsx
│   │   ├── 📄 BookingForm.jsx
│   │   ├── 📄 Workflow.jsx
│   │   └── 📄 Footer.jsx
│   ├── 📂 styles/
│   │   └── 📄 App.css
│   ├── 📂 utils/
│   │   └── 📄 webhook.js
│   ├── 📄 App.jsx
│   └── 📄 main.jsx
├── 📄 .env                    # Variables d'environnement
├── 📄 .gitignore
├── 📄 index.html
├── 📄 package.json
├── 📄 README.md
├── 📄 vite.config.js
└── 📄 LICENSE
</pre>

<hr>

<h2 id="api-et-endpoints">🌐 API et endpoints</h2>

<h3>Webhook n8n</h3>

<table>
  <tr>
    <th>Endpoint</th>
    <th>Méthode</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>/webhook</code></td>
    <td>POST</td>
    <td>Réception des données de réservation</td>
  </tr>
</table>

<h3>Format des données</h3>

<pre><code>{
  "fullName": "Jean Dupont",
  "email": "jean@email.com",
  "phone": "0612345678",
  "date": "2026-07-01",
  "time": "14:30",
  "service": "Consultation",
  "notes": "Première visite",
  "submittedAt": "2026-06-26T10:30:00Z"
}
</code></pre>

<hr>

<h2 id="sécurité">🛡️ Sécurité</h2>

<ul>
  <li>✅ <strong>Validation des données</strong> - Tous les champs sont validés côté client</li>
  <li>✅ <strong>Protection CSRF</strong> - Utilisation de tokens pour les requêtes</li>
  <li>✅ <strong>HTTPS</strong> - Toutes les communications sont chiffrées</li>
  <li>✅ <strong>Variables d'environnement</strong> - Clés API protégées</li>
  <li>✅ <strong>GDPR compliant</strong> - Protection des données personnelles</li>
  <li>✅ <strong>Rate Limiting</strong> - Limitation des requêtes</li>
</ul>

<hr>

<h2 id="contribuer">🤝 Contribuer</h2>

<p>
  Ce projet est <strong>propriétaire</strong> et n'est pas ouvert aux contributions externes.
  Cependant, vous pouvez :
</p>

<ul>
  <li>⭐ <strong>Star</strong> le dépôt pour montrer votre intérêt</li>
  <li>🔔 <strong>Watch</strong> pour suivre les mises à jour</li>
  <li>📧 <strong>Contacter</strong> l'auteur pour des demandes spécifiques</li>
</ul>

<h3>Pour les demandes de collaboration</h3>

<p>
  Si vous souhaitez utiliser ce projet ou contribuer, veuillez contacter l'auteur
  via les coordonnées dans la section <a href="#contact">Contact</a>.
</p>

<hr>

<h2 id="licence">📜 Licence</h2>

<div align="center">
  <h3>🛡️ Propriétaire - Tous droits réservés</h3>
</div>

<p>
  <strong>Copyright © 2026 hbakaz693. Tous droits réservés.</strong>
</p>

<p>
  Ce projet et son code source sont <strong>propriétaires et confidentiels</strong>.
</p>

<h3>❌ Vous n'êtes PAS autorisé à :</h3>

<ul>
  <li>❌ Cloner, forker, ou copier ce dépôt sans permission explicite</li>
  <li>❌ Utiliser, modifier, ou distribuer tout ou partie du code</li>
  <li>❌ Utiliser ce projet à des fins commerciales ou personnelles</li>
  <li>❌ Créer des œuvres dérivées basées sur ce projet</li>
  <li>❌ Partager, publier, ou redistribuer ce code sous quelque forme que ce soit</li>
</ul>

<h3>✅ Vous êtes autorisé à :</h3>

<ul>
  <li>✅ Visualiser le dépôt public à des fins de démonstration uniquement</li>
  <li>✅ Apprendre de l'architecture et de la documentation</li>
  <li>✅ Contacter l'auteur pour des demandes de licence</li>
</ul>

<h3>📝 Comment obtenir une permission</h3>

<p>
  Si vous souhaitez utiliser, cloner, ou modifier ce projet, vous <strong>DEVEZ</strong>
  contacter l'auteur pour obtenir une permission explicite. Toute utilisation non
  autorisée est strictement interdite et peut entraîner des poursuites judiciaires.
</p>

<hr>

<h2 id="contact">📞 Contact</h2>

<div align="center">
  <table>
    <tr>
      <td align="center">
        <strong>👤 Auteur</strong><br>
        hbakaz693
      </td>
      <td align="center">
        <strong>📧 Email</strong><br>
        <a href="mailto:hbakaz693@gmail.com">hbakaz693@gmail.com</a>
      </td>
      <td align="center">
        <strong>🔗 GitHub</strong><br>
        <a href="https://github.com/hbakaz693">github.com/hbakaz693</a>
      </td>
    </tr>
    <tr>
      <td align="center">
        <strong>💼 LinkedIn</strong><br>
        <a href="https://www.linkedin.com/in/hicham-bakaz-155652396/">linkedin.com/in/hbakaz693</a>
      </td>
      <td align="center">
        <strong>📱 WhatsApp</strong><br>
        +212 6 59 97 10 16
      </td>
    </tr>
  </table>
</div>

<hr>

<h3>📌 Pour toute question</h3>

<p>
  N'hésitez pas à me contacter pour :
</p>

<ul>
  <li>✅ <strong>Accès au code source complet</strong></li>
  <li>✅ <strong>Personnalisation du projet</strong></li>
  <li>✅ <strong>Déploiement et hébergement</strong></li>
  <li>✅ <strong>Intégration avec vos systèmes</strong></li>
  <li>✅ <strong>Maintenance et support</strong></li>
</ul>

<hr>

<div align="center">
  <h3>🚀 Prêt à révolutionner votre cabinet dentaire ?</h3>
  <p>
    <a href="mailto:hbakaz693@gmail.com">
      <img src="https://img.shields.io/badge/Contactez_moi-📧-EA4335?style=for-the-badge" />
    </a>
    <a href="https://github.com/hbakaz693">
      <img src="https://img.shields.io/badge/Voir_sur_GitHub-181717?style=for-the-badge&logo=github" />
    </a>
  </p>
</div>

<hr>

<div align="center">
  <p>
    <strong>© 2026 hbakaz693. Tous droits réservés.</strong><br>
    <em>Code protégé - Clonage interdit sans autorisation</em>
  </p>
  <p>
    <img src="https://img.shields.io/badge/Made_with_❤️_by-hbakaz693-blue?style=flat-square" />
  </p>
</div>

<!-- ============================================================
     FIN DU README
     ============================================================ -->
