'use client';
import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: 26.8740,
  lng: 81.0209,
};

const MapComponent = () => {
  const [locationName, setLocationName] = useState("Fetching location...");
  const [loading, setLoading] = useState(true);

  const fetchLocationName = () => {
    if (window.google && window.google.maps) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ location: defaultCenter }, (results, status) => {
        if (status === "OK" && results[0]) {
          setLocationName(results[0].formatted_address);
        } else {
          setLocationName("Location not found");
        }
        setLoading(false);
      });
    }
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      onLoad={fetchLocationName} // Load hone ke baad location fetch karega
    >
      <GoogleMap mapContainerStyle={containerStyle} center={defaultCenter} zoom={10}>
        <Marker
          position={defaultCenter}
          title={locationName}
          label={{
            text: loading ? "Loading..." : locationName,
            fontSize: "12px",
            fontWeight: "bold",
            color: "black",
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
