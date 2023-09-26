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
      
      <p>Some text about who we are and what we do.</p>
      <p>Resize the browser window to see that this page is responsive by the way.</p>

      <h2 className="team-heading">Our Team</h2>
      <div className="row">
        {/* Add team member components here */}
      </div>
    </div>
  );
}

export default AboutPage;
