'use client';
import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Map container style
const containerStyle = {
  width: "100%",
  height: "400px",
};

// Default coordinates (for example, Lucknow University)
const defaultCenter = {
  lat: 26.8740,
  lng: 81.0209,
};

const MapComponent = () => {
  const [locationName, setLocationName] = useState(""); // State for location name
  const [loading, setLoading] = useState(true); // State to show loading

  // Fetch location name using Geocoding API
  useEffect(() => {
    if (typeof window !== "undefined" && window.google) {
      const geocoder = new window.google.maps.Geocoder();
      const { lat, lng } = defaultCenter;

      // Call Geocoding API to get address from lat and lng
      geocoder.geocode({ location: { lat, lng } }, (results, status) => {
        if (status === "OK" && results[0]) {
          setLocationName(results[0].formatted_address); // Set the location name
          setLoading(false); // Stop loading after response
        } else {
          setLocationName("Location not found");
          setLoading(false); // Stop loading even if no result
        }
      });
    }
  }, []);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultCenter}
        zoom={10}
      >
        {/* Marker on the default center with location name as label */}
        <Marker
          position={defaultCenter}
          title={locationName || "Loading..."} // Show loading text until location is fetched
          label={{
            text: loading ? "Loading..." : locationName, // Show loading until data fetched
            fontSize: "16px",
            fontWeight: "bold",
            color: "black",
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
