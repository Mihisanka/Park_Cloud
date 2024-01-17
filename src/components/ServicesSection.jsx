// ServicesSection.js
import React from 'react';
import './styles/ServicesSection.css';

function ServicesSection() {
  return (
    <section className="services-section">
       <div className="services-heading">
       <h1>Service</h1>
      </div>
      <div className="service-row">
        <div className="info-card">
              <h3 className="info-card__title">
                Convenience and Accessibility
              </h3>
              <img
                //src="../assets/traverse-assets/benefits1.svg"
                //alt=""
                //className="info-card__icon"
              />
              <p className="info-card__description">
                Allows virtual exploration of diverse physical locations, providing accessibility 
                without time or location constraints.
              </p>
            </div>

            <div className="info-card">
              <h3 className="info-card__title">
                Convenience and Accessibility
              </h3>
              <img
                //src="../assets/traverse-assets/benefits1.svg"
                //alt=""
                //className="info-card__icon"
              />
              <p className="info-card__description">
                Allows virtual exploration of diverse physical locations, providing accessibility 
                without time or location constraints.
              </p>
            </div>

            <div className="info-card">
              <h3 className="info-card__title">
                Convenience and Accessibility
              </h3>
              <img
                //src="../assets/traverse-assets/benefits1.svg"
                //alt=""
                //className="info-card__icon"
              />
              <p className="info-card__description">
                Allows virtual exploration of diverse physical locations, providing accessibility 
                without time or location constraints.
              </p>
            </div>
       
       
        </div>
    </section>
  );
}

export default ServicesSection;
