import React from 'react';
import './ContactUsSection.css';

function contacUsSection () {
  return (
    <section className="contact-us-section">
          <h1>Contact Us</h1>
    <div className="contact-section">

          <div className='contact-c'>
          
                <div className="contact-box">
                <div className="about-image">
              <img
                src="/about.jpg" // Replace with the path to your image
                
                style={{
                  maxWidth: '100%', // Ensure the image fits the width of the box
                  maxHeight: '100%', // Ensure the image fits the height of the box
                  display: 'block', // Remove any potential extra spacing
                  margin: '0 auto', // Center the image horizontally
                }}
              />
              </div>
                  {/* <h3>Service 4</h3>
                  <p>Description of Service 4 goes here.</p> */}
                </div>
                
          </div>
                <div className="contact-txt">
              <p>Some text about who we are and what we do.</p>

              <p>"Welcome to Park Cloud Car Park, your trusted destination for hassle-free parking solutions.
                Our mission is to make parking effortless and stress-free for you. With a wide network of 
                secure and conveniently located parking facilities, we ensure that finding a parking spot 
                is never a challenge. Whether you're heading to work, exploring the city, or embarking on
                a journey, count on us for your parking needs. Say goodbye to parking woes and experience 
                the convenience of Park Cloud Car Park today."</p>
                </div>
                </div>
    </section>
    
  );
}

export default contacUsSection;