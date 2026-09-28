import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2025 TaskFlow. All rights reserved.</p>
        <div className="contact-info">
          <a href="mailto:javeria.bscet21@student.iiu.edu.pk">
            <span role="img" aria-label="email">✉️</span> javeria.bscet21@student.iiu.edu.pk
          </a>
          <a href="tel:+923094748345">
            <span role="img" aria-label="phone">📞</span> +92 3094748345
          </a>
          <a href="https://www.linkedin.com/in/javeria-fatima-456ab3264" target="_blank" rel="noopener noreferrer">
            <span role="img" aria-label="linkedin">🔗</span> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;