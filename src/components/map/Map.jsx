import React, { useState, useRef, useCallback } from "react";
import MapBox from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const TOKEN = process.env.REACT_APP_TOKEN;
const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: -122.4,
  });
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );
  return (
    <div style={{ width: "100%", height: 400 }}>
      <MapBox
        {...viewport}
        mapboxAccessToken={TOKEN}
        initialViewState={{
          zoom: 14,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      ></MapBox>
    </div>
  );
};

export default Map;
