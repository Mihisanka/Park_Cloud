/*import React from 'react';
import './AboutPage.css'; // Import the CSS file for styling

function AboutPage() {
  return (
    <section className="about-page">
      <div className="about-content">
        <div className="about-image">
          <img src="bga.jpg" alt="About" />
        </div>
        <div className="about-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          <p>
            Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
            sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue
            semper porta.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;*/


import React from 'react';
import './AboutPage.css'; // Import the CSS file for styling

function AboutPage() {
  return (
    <div className="about-section">
      <div className="about-heading">
        <h1>About Us Page</h1>
      </div>
      <div className='about-c'>
        <div className="about-box">
          <div className="about-image">
            <img
              src="Park_Cloud/about.png" // Replace with the path to your image
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
        <div className="about-txt">
          <p>Some text about who we are and what we do.</p>

          <p>"Welcome to Park Cloud Car Park, your trusted destination for hassle-free parking solutions.
            Our mission is to make parking effortless and stress-free for you. With a wide network of 
            secure and conveniently located parking facilities, we ensure that finding a parking spot 
            is never a challenge. Whether you're heading to work, exploring the city, or embarking on
            a journey, count on us for your parking needs. Say goodbye to parking woes and experience 
            the convenience of Park Cloud Car Park today."</p>
        </div>
      </div>
      <h2 className="team-heading">Our Team</h2>
      <div className="row">
        {/* Add team member components here */}
      </div>
    </div>
  );
}

export default AboutPage;
