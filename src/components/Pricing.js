import React from 'react';

const Pricing = ({ TaskApp }) => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <h2>Pricing</h2>
        <div className="pricing-grid">
          <div className="price-item">
            <h3>Free</h3>
            <p className="price">Free</p>
            {TaskApp ? <TaskApp /> : (
              <p>5 Tasks per month<br/>Basic features<br/>Community support</p>
            )}
            <button className="pricing-button">Sign Up</button>
          </div>
          <div className="price-item popular">
            <h3>Pro</h3>
            <p className="price">$9.99 / month</p>
            <ul>
              <li>Unlimited tasks</li>
              <li>Advanced features</li>
              <li>Email support</li>
            </ul>
            <button className="pricing-button">Get Pro</button>
          </div>
          <div className="price-item">
            <h3>Team</h3>
            <p className="price">$29.99 / month</p>
            <ul>
              <li>Unlimited tasks</li>
              <li>Collaboration tools</li>
              <li>Dedicated support</li>
            </ul>
            <button className="pricing-button">Get Team</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;