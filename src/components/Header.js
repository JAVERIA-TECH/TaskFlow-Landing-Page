import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>TaskFlow</h1>
        <p>A simple tool to help you organize your tasks and stay productive.</p>
        <a href="#pricing" className="main-button">Get Started</a>
      </div>
    </header>
  );
};

export default Header;