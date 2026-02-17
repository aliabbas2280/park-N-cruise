import React from "react";
import "../CSS/Second.css";
import image1 from "../images/cruise.webp";
import image2 from "../images/fun.webp";

export default function CruiseParkingSection() {
  return (
    <section className="cruise-section">
   
      <div className="images-container">
        <img
          src={image1}
          alt="Cruise ship deck with life ring"
          className="img-left"
        />
        <img
          src={image2}
          alt="Tropical destination sign post"
          className="img-right"
        />
      </div>

      <div className="content">
        <h2>Want to Save Even More on Your Cruise Parking?</h2>

        <p>
          Now that we've covered parking options at Park N Cruise, let's talk
          about how you can maximize your savings even further. Be sure to take
          advantage of our discount programs and other seasonal special offers!
          Plus, if you're an active or veteran US military member, secure parking
          is even more accessible with our generous veteran discount, showing our
          appreciation for your service.
        </p>

        <p>
          <strong>
            Our commitment to providing excellent service ensures that your
            experience with us is both convenient and stress-free.
          </strong>
        </p>

        <a href="#" className="btn-reserve">
          Reserve Your Spot
        </a>
      </div>
    </section>
  );
}