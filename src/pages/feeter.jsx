// Footer.jsx
import React from 'react';
import '../CSS/feeter.css';
import Logo from '../images/Logo.png'   
const Feeter = () => {
  const navLinks = [
    {
      label: 'HOME',
      href: '/',
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 19V14h5v5h4v-8.5l-7-5.25L5 10.5V19z" />
          <path d="M3 11.5L12 5l9 6.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      label: 'BOOK NOW',
      href: '/book',
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
      ),
    },
    {
      label: 'FAQS',
      href: '/faqs',
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
        </svg>
      ),
    },
    {
      label: 'DISCOUNTS',
      href: '/discounts',
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.86 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
        </svg>
      ),
    },
    {
      label: 'CONTACT US',
      href: '/contact',
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
        </svg>
      ),
    },
    {
      label: 'FIND MY SHUTTLE',
      href: '/shuttle',
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z" />
        </svg>
      ),
    },
  ];

  const hours = [
    { day: 'Sunday', time: '7:00 AM - 2:00 PM' },
    { day: 'Monday', time: '7:00 AM - 2:00 PM' },
    { day: 'Tuesday', time: 'Closed' },
    { day: 'Wednesday', time: 'Closed' },
    { day: 'Thursday', time: '7:00 AM - 2:00 PM' },
    { day: 'Friday', time: '7:00 AM - 2:00 PM' },
    { day: 'Saturday', time: '7:00 AM - 2:00 PM' },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__brand">
          <img src={Logo} alt="Park N Cruise Logo" />
          <p className="footer__brand-text">
            Welcome to Park N Cruise, the best solution for off-site port
            canaveral cruise parking facilities. Save nearly 50% compared to
            on-site port parking options! We offer great rates, convenient
            parking, free shuttles, and 5-star customer service with every
            booking!
          </p>
        </div>

        <div className="footer__nav">
          <h3 className="footer__col-title">Discover</h3>
          <hr className="footer__divider" />
          <nav aria-label="Footer navigation">
            <ul className="footer__nav-list">
              {navLinks.map((link) => (
                <li key={link.label} className="footer__nav-item">
                  <a href={link.href}>
                    <span className="footer__nav-icon">{link.icon}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer__hours">
          <h3 className="footer__col-title">Our Hours</h3>
          <hr className="footer__divider" />
          <ul className="footer__hours-list" aria-label="Business hours">
            {hours.map(({ day, time }) => (
              <li key={day} className="footer__hours-item">
                {day}: {time}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__contact">
          <h3 className="footer__col-title">Contact Us</h3>
          <hr className="footer__divider" />
          <ul className="footer__contact-list" aria-label="Contact information">
            <li className="footer__contact-item">
              <span className="footer__contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.18 21 3 13.82 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                </svg>
              </span>
              <a href="tel:8667068999">(866) 706-8999</a>
            </li>
            <li className="footer__contact-item">
              <span className="footer__contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </span>
              <a href="mailto:parkncruise@gmail.com">parkncruise@gmail.com</a>
            </li>
            <li className="footer__contact-item">
              <span className="footer__contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                </svg>
              </span>
              <address style={{ fontStyle: 'normal' }}>
                1700 Sea Ray Dr,<br />Merritt Island, FL 32952
              </address>
            </li>
          </ul>

          <div className="footer__social" aria-label="Social media links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Google+"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__bottom-text">
          © {new Date().getFullYear()} Park N Cruise. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Feeter;