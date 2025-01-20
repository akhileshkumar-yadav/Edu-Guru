'use client'
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Map container style
const containerStyle = {
  width: "100%",
  height: "400px",
};

// Default coordinates (example: India Gate, Delhi)
const defaultCenter = {
//   lat: 28.6139, // Latitude
//   lng: 77.209,  // Longitude
//   lat: 19.076, lng: 72.8777
    lat: 26.8740,
    lng: 81.0209,
};
const locations = [
    { lat: 28.6139, lng: 77.209 }, // Delhi
    { lat: 19.076, lng: 72.8777 }, // Mumbai
  ];

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultCenter}
        zoom={10}
      >
        {/* Example: Marker */}
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
