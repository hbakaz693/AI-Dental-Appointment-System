
<h2>1. Project Overview</h2>

<p>
  <strong>AI Dental Appointment System</strong> is a modern web application that allows patients
  to book dental appointments online through a simple and responsive React interface.
</p>

<p>
  The project uses <strong>n8n automation</strong> to receive appointment data, format the date and time,
  create events in <strong>Google Calendar</strong>, store booking details in
  <strong>Google Sheets</strong>, and send automatic confirmation emails using <strong>Gmail</strong>.
</p>

<hr />

<h2>2. Features</h2>

<ul>
  <li>Modern dental clinic landing page</li>
  <li>Multi-step appointment booking form</li>
  <li>n8n Webhook integration</li>
  <li>Automatic date and time formatting</li>
  <li>Google Calendar appointment creation</li>
  <li>Google Sheets booking storage</li>
  <li>Automatic Gmail confirmation email</li>
  <li>Responsive and clean user interface</li>
</ul>

<hr />

<h2>3. System Architecture</h2>

<pre>
React Booking Form
        ↓
n8n Webhook
        ↓
Date & Time Formatter
        ↓
Google Calendar
        ↓
Google Sheets
        ↓
Gmail Confirmation
</pre>

<hr />

<h2>4. Workflow: React → n8n</h2>

<ol>
  <li>The user fills out the appointment booking form.</li>
  <li>React sends the form data to an n8n Webhook using a POST request.</li>
  <li>n8n receives the patient information and appointment details.</li>
  <li>The Date & Time node formats the selected date and time.</li>
  <li>Google Calendar creates a new appointment event.</li>
  <li>Google Sheets stores the booking details in a spreadsheet.</li>
  <li>Gmail sends an automatic confirmation email to the patient.</li>
</ol>


<h2>5. Technologies Used</h2>

<p align="center">
  <img src="https://skillicons.dev/icons?i=react,vite,javascript,css,github" />
</p>

<table>
<tr>
<td align="center">
<img src="https://skillicons.dev/icons?i=react" width="60"/><br>
React
</td>

<td align="center">
<img src="https://vitejs.dev/logo.svg" width="60"/><br>
Vite
</td>

<td align="center">
<img src="https://www.vectorlogo.zone/logos/google/google-icon.svg" width="60"/><br>
Google Calendar
</td>

<td align="center">
<img src="https://www.vectorlogo.zone/logos/google_sheets/google_sheets-icon.svg" width="60"/><br>
Google Sheets
</td>

<td align="center">
<img src="https://www.vectorlogo.zone/logos/gmail/gmail-icon.svg" width="60"/><br>
Gmail
</td>

<td align="center">
<img src="./ScreenShot/n8n.png" width="60"/><br>
n8n
</td>
</tr>
</table>



---

<h2>6. Project Structure</h2>

<img src="./ScreenShot/8.png" width="100%"/>

