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
        <div className="service-box">
          <h3>Service 1</h3>
          <p>Description of Service 1 goes here.</p>
        </div>
        <div className="service-box">
          <h3>Service 2</h3>
          <p>Description of Service 2 goes here.</p>
        </div>
        <div className="service-box">
          <h3>Service 3</h3>
          <p>Description of Service 3 goes here.</p>
        </div>
       
        </div>
    </section>
  );
}

export default ServicesSection;
