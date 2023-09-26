import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Use Switch to ensure only one route is matched
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import BookingPage from './components/BookingPage';
import LocationPage from './components/LocationSearchPage'; // Rename LocationSearchPage to LocationPage
import LoginPage from './components/LoginPage';
import ServicesSection from './components/ServicesSection';
import ContactUsSection from './components/ContactUsSection';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/booking" exact component={BookingPage} />
          <Route path="/location-search" component={LocationPage} /> {/* Update the route */}
          <Route path="/login" component={LoginPage} />
          <Route path="/services-section" component={ServicesSection} />
          <Route path="/contact-us-section" component={ContactUsSection} />
        </Switch>
      </div>    
    </Router>
    
  );
}

export default App;
