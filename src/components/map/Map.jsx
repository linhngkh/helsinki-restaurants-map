import React, { useState, useMemo } from "react";
import MapBox, {
  Marker,
  Popup,
  NavigationControl,
  GeolocateControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import MapboxWorker from "mapbox-gl/dist/mapbox-gl-csp-worker";
// import Worker from "worker-loader!./Worker.js";
// mapboxgl.workerClass = MapboxWorker;

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

  const markers = useMemo(
    () =>
      sortingList.map((place, id) => (
        <Marker
          key={id}
          latitude={place.location[1]}
          longitude={place.location[0]}
          onClick={(e) => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setSelectedPlace(place);
          }}
        >
          <img
            src="/dinner.png"
            alt="restaurant"
            style={{ width: "40px", height: "40px" }}
          />
        </Marker>
      )),
    []
  );

  return (
    <div
      style={{
        width: "100%",
        height: 400,
        marginTop: "100px",
      }}
      id="map"
    >
      <MapBox
        initialViewState={initialViewState}
        mapboxAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {/* markers */}
        {markers}
        {/* popup */}
        {selectedPlace && (
          <Popup
            latitude={selectedPlace.location[1]}
            longitude={selectedPlace.location[0]}
            onClose={() => {
              setSelectedPlace(null);
            }}
          >
            <div>{selectedPlace.name}</div>
            <img width="100%" alt="" src={selectedPlace.image} />
          </Popup>
        )}
        <NavigationControl position="bottom-right" />
        <GeolocateControl />
      </MapBox>
    </div>
  );
};

export default Map;
