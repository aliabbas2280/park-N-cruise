import { useState } from "react";
import "../CSS/Cruise.css";
import cruise from "../images/cruise.webp";
const faqs = [
  {
    id: 1,
    question: "How Far is Park N Cruise from the Port Canaveral Cruise Terminals?",
    answer:
      "Park N Cruise is conveniently located just minutes from the Port Canaveral Cruise Terminals. Our facility is approximately 1–2 miles from the cruise terminals, making it one of the closest off-site parking options available. We provide complimentary shuttle service to and from the port.",
  },
  {
    id: 2,
    question: "Are There Any Discounts?",
    answer:
      "Yes! We offer a variety of discounts including military discounts, AAA member discounts, and online booking discounts. Book in advance through our website to save on your parking reservation. Ask about our seasonal promotions and multi-day parking specials.",
  },
  {
    id: 3,
    question: "What are the Hours of Operation?",
    answer:
      "Park N Cruise is open 24 hours a day, 7 days a week, 365 days a year. Our staff is always available to assist you, and our shuttles run continuously to ensure you never miss your cruise departure.",
  },
  {
    id: 4,
    question: "What if a Cruise Ship is Delayed?",
    answer:
      "If your cruise ship is delayed, don't worry! Your vehicle will remain safely parked at our facility at no extra charge for the delay period. Simply contact us so we can update your reservation and ensure your shuttle pickup is scheduled for the correct time.",
  },
  {
    id: 5,
    question: "Do You Offer Free Parking if You are a Florida Disabled Veteran?",
    answer:
      "We honor and appreciate our veterans. Florida disabled veterans may be eligible for special parking rates or complimentary parking. Please contact our office directly with your documentation so we can verify eligibility and provide you with the appropriate benefit.",
  },
  {
    id: 6,
    question: "Do you offer shuttles to or from Orlando Airport?",
    answer:
      "Currently, our shuttle service operates between our parking facility and the Port Canaveral Cruise Terminals only. We do not offer direct shuttle service to or from Orlando International Airport. However, we can recommend local transportation options that may suit your needs.",
  },
];

export default function Cruise() {
  const [openId, setOpenId] = useState(3);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-heading">
          Have a <span className="faq-heading-highlight">Question</span>? Check Out Our FAQs!
        </h2>

        <div className="faq-content">
          <div className="faq-image-wrapper">
            <img
              src={cruise}
              alt="Port Canaveral aerial view"
              className="faq-image"
            />
          </div>

          {/* Right Accordion */}
          <div className="faq-accordion">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className={`faq-item ${openId === faq.id ? "faq-item--active" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={openId === faq.id}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-arrow">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`faq-arrow-icon ${openId === faq.id ? "faq-arrow-icon--open" : ""}`}
                    >
                      <path
                        d="M5 2L10 7L5 12"
                        stroke="white"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className={`faq-answer-wrapper ${openId === faq.id ? "faq-answer-wrapper--open" : ""}`}
                >
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}