import React from "react";
import "../CSS/Hero.css";

function Hero() {
  return (
    <section className="info-section">
      <div className="info-container">

        <h1 className="info-heading">
          Park N Cruise:{" "}
          <span className="info-heading-blue">Port Canaveral</span>{" "}
          Cruise Parking Lot
        </h1>

        <h2 className="info-subheading">
          Save BIG compared to parking at the cruise terminal!
        </h2>

        <p className="info-body">
          Parking at the on-site cruise terminals is expensive, and traffic in
          Port Canaveral can be confusing for many first-time guests, not to
          mention how the traffic is on cruise departure days. The best way to
          save money, skip the lines, and get to YOUR cruise ship quickly is by
          choosing to park with Park N Cruise! We serve many different cruise
          lines that are home-ported out of Port Canaveral, including Celebrity
          Cruises, Princess Cruise Line, Norwegian Cruise Line, Royal Caribbean
          International, MSC Cruise Line, and more, ensuring a hassle-free
          start to your vacation.
        </p>

      </div>
    </section>
  );
}

export default Hero;