// PlaceDetails.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './PlaceDetails.css';

const PlaceDetails = () => {
  const location = useLocation();
  const placeData = location.state; // This holds the data passed from the search bar

  if (!placeData) {
    return <div>No data available</div>; // Fallback if no place data is passed
  }

  return (
    <div className="place-details-container">
      {/* Place Name */}
      <h1 className="place-name">{placeData.PLACE}</h1>

      {/* Image and Details Side by Side */}
      <div className="details-layout">
        {/* Image */}
        {placeData.IMAGE && (
          <div className="place-image-container">
            <img 
              src={placeData.IMAGE} 
              alt={placeData.PLACE} 
              className="place-image" 
              onError={() => console.log("Image failed to load:", placeData.IMAGE)} // Logs if image fails to load
            />
          </div>
        )}

        {/* Place Details */}
        <div className="place-details">
          <p><strong>Destination:</strong> {placeData.DESTINATION}</p>
          <p><strong>Distance:</strong> {placeData.DISTANCE}</p>
          <p><strong>Location:</strong> {placeData.LOCATION}</p>
          <p><strong>Description:</strong> {placeData.DESCRIPTION}</p>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;
