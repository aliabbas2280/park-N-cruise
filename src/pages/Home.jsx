import React, { useState } from "react";
import "../CSS/Home.css";
import Logo from "../images/Logo.png"
function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <a href="/" className="navbar-logo">
          <div className="logo-placeholder">
    
            <div className="logo-icon">
             <img src={Logo} alt="Park N Cruise Logo" />
            </div>
          </div>
        </a>

        <button 
          className={`navbar-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li className="book-now">
            <a href="#book" onClick={() => setMenuOpen(false)}>
              BOOK NOW <span className="checkmark">✔</span>
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>ABOUT US</a>
          </li>
          <li>
            <a href="#faqs" onClick={() => setMenuOpen(false)}>FAQS</a>
          </li>
          <li>
            <a href="#discounts" onClick={() => setMenuOpen(false)}>DISCOUNTS</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT US</a>
          </li>
          <li className="find-shuttle">
            <a href="#shuttle" onClick={() => setMenuOpen(false)}><span className="shuttle-icon">🚌</span>FIND MY SHUTTLE</a>
          </li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-bg" />

    
        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="hero-title-book">BOOK YOUR</div>
          <div className="hero-title-port">PORT CANAVERAL</div>
          <div className="hero-title-cruise">CRUISE PARKING</div>

          <div className="hero-price">
            $13.95 <span className="per-day">/DAY</span>
          </div>

          <div className="hero-reservation">WITH ADVANCED RESERVATION</div>
          <div className="hero-same-day">$16.95 / Day for Same-Day Parking</div>

          <a href="#book" className="hero-btn">
            BOOK YOUR SPOT NOW! <span className="arrow">&#8250;</span>
          </a>
        </div>

      </section>
    </div>
  );
}

export default Home;