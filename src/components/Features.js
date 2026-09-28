import React from 'react';

const Features = () => {
  return (
    <section className="features-section">
      <div className="container">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">✨</div>
            <h3>Easy to Use</h3>
            <p>Our intuitive interface makes organizing tasks a breeze for everyone.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🗓️</div>
            <h3>Stay Organized</h3>
            <p>Keep track of all your tasks in one place and never miss a deadline.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔔</div>
            <h3>Get Notified</h3>
            <p>Receive timely reminders and notifications for your upcoming tasks.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;