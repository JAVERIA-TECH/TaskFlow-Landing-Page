import React from 'react';

const Reviews = () => {
  return (
    <section className="reviews-section">
      <div className="container">
        <h2>What Our Users Say</h2>
        <div className="reviews-grid">
          <div className="review-item">
            <p>"TaskFlow has completely changed how I manage my work. Highly recommended!"</p>
            <h4>- Sarah J.</h4>
          </div>
          <div className="review-item">
            <p>"Simple, clean, and effective. The best task manager I've ever used."</p>
            <h4>- Alex P.</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;