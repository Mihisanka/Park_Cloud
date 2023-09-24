import React, { useState } from 'react';
import './BookingPage.css'; // Import the CSS file for styling


import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet C


function BookingPage() {
  // Define state for form inputs
  const [location, setLocation] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');

  // Handle form submission
  const handleBookNow = () => {
    // Implement booking logic here (e.g., send a request to a server)
    alert('Booking completed!'); // Replace with actual booking logic

    // Clear form fields after booking
    setLocation('');
    setVehicleNumber('');
    setDateTime('');
    setSelectedSlot('');
  };

  return (
    <div className="booking-page">
      
      <div className="map-container">
  <MapContainer
    center={[6.9271, 79.8612]} // Colombo city coordinates
    zoom={13} // Adjust the zoom level as needed
    style={{ width: '100%', height: '400px' }} // Set the map container size
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    {/* You can add more markers or layers to the map here */}
  </MapContainer>
</div>

      <h1>Book Parking</h1>
      <form className="booking-form">
        <div className="form-group">
          <label>Location:</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Select Location</option>
            <option value="A">Location A</option>
            <option value="B">Location B</option>
            <option value="C">Location C</option>
          </select>
        </div>
        <div className="form-group">
          <label>Vehicle Number:</label>
          <input
            type="text"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Date and Time:</label>
          <input
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Parking Slot:</label>
          <select
            value={selectedSlot}
            onChange={(e) => setSelectedSlot(e.target.value)}
          >
            <option value="">Select Slot</option>
            {/* Populate slot options dynamically based on location */}
            {location &&
              ['A', 'B', 'C'].includes(location) &&
              Array.from({ length: 5 }).map((_, index) => (
                <option key={index} value={`${location}-${index + 1}`}>
                  {`${location}-${index + 1}`}
                </option>
              ))}
          </select>
        </div>
        <button type="button" onClick={handleBookNow}>
          Book Now
        </button>
      </form>
    </div>
  );
}

export default BookingPage;
