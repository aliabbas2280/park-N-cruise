import React from "react";
import "../CSS/Third.css";
import { FaShip, FaDollarSign, FaBus } from "react-icons/fa";

const features = [
  {
    id: 1,
    iconColor: "orange",
    icon: <FaShip />,
    title: "CLOSE & SECURE",
    body: "Park N Cruise is your trusted cruise parking solution for a hassle-free vacation! Our spacious port canaveral parking lot offers secure parking and complimentary shuttles, and we’re just a 2 minute ride from your cruise terminal. You can leave your vacation worrying behind, knowing your car is secured with 24/7 video surveillance, 8-foot-tall security fence with locking gates, and stadium lighting at our 5-star rated port canaveral parking facility. ",
    btnLabel: "park Closer!",
  },
  {
    id: 2,
    iconColor: "lightblue",
    icon: <FaDollarSign />,
    title: "GREAT RATES",
    body: "Our afOur affordable cruise parking rates (and discounts!) bring incredible savings and benefits — avoid expensive on-site port canaveral parking fees and save time! When you park on-site at the terminal, you are waiting in traffic in one of the busiest cruise ports in the world. When you park with Park N Cruise, however, you have a totally stress-free experience. Additionally, our secure parking facilities provide peace of mind while you’re away, and our shuttle service ensures you arrive at your cruise ship on time.",
    btnLabel: "Pay Less!",
  },
  {
    id: 3,
    iconColor: "darkblue",
    icon: <FaBus />,
    title: "FREE SHUTTLES",
    body: "Enjoy a quick and easy journey from our parking lot to your Port Canaveral cruise terminal and back with our convenient free shuttle service. Our complimentary, air-conditioned shuttle busses are the perfect way to skip the traffic congestion at the parking garages, and get dropped off right at the terminal. Our shuttles depart every 60 minutes, ensuring all our guests arrive to their terminals well before “anchors up”, meaning your port canaveral parking experience won’t interfere with getting to your ship on-time!",
    btnLabel: "Relax More!",
  },
];

function Third() {
  return (
    <section className="features-section">
      <div className="features-header">
        <h2 className="features-heading">
          Port Canaveral Parking,{" "}
          <span className="features-heading-blue">Done Right.</span>
        </h2>
      </div>

      <div className="features-cards">
        {features.map((f) => (
          <div className="features-card" key={f.id}>
            <div className="card-inner">
              <div className={`card-icon-wrap card-icon-wrap--${f.iconColor}`}>
                <span className={`card-icon card-icon--${f.iconColor}`}>
                  {f.icon}
                </span>
              </div>


              <h3 className="card-title">{f.title}</h3>

              <p className="card-body">{f.body}</p>

              <a href="#book" className={`card-btn card-btn--${f.iconColor}`}>
                {f.btnLabel}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Third;