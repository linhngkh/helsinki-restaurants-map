import React, { useState, useEffect } from "react";
import MapBox, {
  Marker,
  Popup,
  NavigationControl,
  GeolocateControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useGlobalContext } from "../../context/SortingContext";

const TOKEN = process.env.REACT_APP_TOKEN;
const Map = () => {
  const { sortingList } = useGlobalContext();
  // set up map
  const initialViewState = {
    longitude: 24.94184732393478,
    latitude: 60.16993168083865,
    zoom: 13,
  };
  // set pop up state
  const [selectedPlace, setSelectedPlace] = useState(null);

  // escape key event
  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedPlace(null);
      }
    };
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: 400,
      }}
    >
      <MapBox
        initialViewState={initialViewState}
        mapboxAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v9"
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
                src="/dinner.png"
                alt="restaurant"
                style={{ width: "40px", height: "40px" }}
              />
            </button>
          </Marker>
        ))}
        {selectedPlace ? (
          <Popup
            latitude={selectedPlace.location[1]}
            longitude={selectedPlace.location[0]}
            onClose={() => {
              setSelectedPlace(null);
            }}
          >
            <div>
              <p>{selectedPlace.name}</p>
            </div>
          </Popup>
        ) : null}
        <NavigationControl position="bottom-right" />
        <GeolocateControl />
      </MapBox>
    </div>
  );
};

export default Map;
