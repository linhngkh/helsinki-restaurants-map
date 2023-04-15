import React, { useState, useRef } from "react";
import MapBox, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useGlobalContext } from "../../context/SortingContext";

const TOKEN = process.env.REACT_APP_TOKEN;
const Map = () => {
  const { sortingList } = useGlobalContext();
  // set up map
  const [viewport, setViewport] = useState({
    longitude: 24.941325187683105,
    latitude: 60.169938852212965,
    zoom: 16,
    transitionDuration: "200",
  });
  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <div style={{ width: "100%", height: 400 }}>
      <MapBox
        {...viewport}
        maxZoom={20}
        mapboxAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onViewportChange={(newViewport) => setViewport(newViewport)}
      >
        {/* markers */}
        {sortingList.map((place, id) => (
          <Marker
            key={id}
            latitude={place.location[1]}
            longitude={place.location[0]}
          >
            <button
              style={{ cursor: "pointer", background: "none", border: "none" }}
              onClick={(e) => {
                e.preventDefault();
                setSelectedPlace(place);
              }}
            >
              <img
                src="/marker-flags-svgrepo-com.svg"
                alt="restaurant"
                style={{ width: "20px", height: "20px" }}
              />
            </button>
          </Marker>
        ))}
        {/* (selectedPlace ? (
        <Popup
          latitude={selectedPlace.location[1]}
          longitude={selectedPlace.location[0]}
        >
          <div>restaurant</div>
        </Popup>{" "}
        ): null) */}
      </MapBox>
    </div>
  );
};

export default Map;
