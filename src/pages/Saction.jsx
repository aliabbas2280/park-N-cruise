import React from "react";
import "../CSS/Saction.css";


import bus from "../images/bus.webp"; 

const Saction = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
   
        <div className="hero-left">
          <h1 className="hero-heading">
            Set Sail with the Best{" "}
            <span className="hero-heading--blue">Port Canaveral</span>{" "}
            Cruise Parking Lot
          </h1>

          <p className="hero-description">
            Welcome to Park N Cruise, your premier choice for stress-free and
            affordable port canaveral parking! Located just a few minutes away
            from the bustling port canaveral, our convenient location ensures a
            seamless start to your cruise vacation. Say goodbye to confusing,
            expensive on-site port canaveral parking and say hello to simplicity
            and savings. Our paved, secure parking lot is designed to handle
            multiple different cruise lines and hundreds of vehicles between
            them, and our friendly staff are always ready to assist you.
          </p>

          <p className="hero-highlight">
            Whether you're embarking on a Royal Caribbean Cruise Line adventure
            or a Celebrity Cruise vacation, we make your trip enjoyable and
            relaxing.
          </p>

          <div className="hero-buttons">
            <button className="btn btn--orange">Book Parking Now</button>
            <button className="btn btn--blue">Want To Save More</button>
          </div>
        </div>

  
        <div className="hero-right">
          <div className="hero-image-wrapper">
            <img
              src={bus}
              alt="Port Canaveral with shuttle bus"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Saction;