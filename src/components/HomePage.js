import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file for styling


function HomePage() {
  return (
    <div className="homepage">
      <div className="home-heading">
        <h4>Pacrk Cloud</h4>
      </div>

      <div className="home-sub-heading">
      <p style={{color: "white"}}><b>"A place to share your ideas"</b></p>
      </div>

        <Link to="/booking">
          <button className="book-button">Book Now</button>
        </Link>
      </div>
  );
}

export default HomePage;

/*import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file for styling
import TeamSection from './TeamSection'; // Import the TeamSection component

function HomePage() {
  return (
    <div className="homepage">
      <div className="home-heading">
        <h1>Park Cloud</h1>
      </div>
      <Link to="/location-search">
        <button className="book-button">Book Now</button>
      </Link>
      
      {/* Include the TeamSection component here }
      <TeamSection />
    </div>
  );
}

export default HomePage;*/

