import React, { useState, useEffect } from "react";

const Map = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const mapOptions = {
      center: { lat: 20.5937, lng: 78.9629 },
      zoom: 5,
    };
    const newMap = new window.google.maps.Map(
      document.getElementById("map"),
      mapOptions
    );
    setMap(newMap);
  }, []);

  useEffect(() => {
    markers.forEach((marker) => {
      marker.setMap(null);
    });

    const locations = [
      { lat: 28.6448, lng: 77.2167, name: "Delhi", type: "hospital" },
      { lat: 19.076, lng: 72.8777, name: "Mumbai", type: "refugee center" },
      { lat: 12.9716, lng: 77.5946, name: "Bengaluru", type: "hospital" },
      { lat: 22.5726, lng: 88.3639, name: "Kolkata", type: "refugee center" },
      { lat: 13.0827, lng: 80.2707, name: "Chennai", type: "hospital" },
      { lat: 17.385, lng: 78.4867, name: "Hyderabad", type: "refugee center" },
      { lat: 26.9124, lng: 75.7873, name: "Jaipur", type: "hospital" },
      { lat: 18.5204, lng: 73.8567, name: "Pune", type: "refugee center" },
    ];

    const hospitalIcon = {
      url: "https://cdn-icons-png.flaticon.com/128/3448/3448513.png",
      scaledSize: new window.google.maps.Size(25, 25),
    };

    const refugeeCenterIcon = {
      url: "https://cdn-icons-png.flaticon.com/128/3261/3261578.png",
      scaledSize: new window.google.maps.Size(25, 25),
    };

    const newMarkers = locations.map((location) => {
      const marker = new window.google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: map,
        title: location.name,
        icon: location.type === "hospital" ? hospitalIcon : refugeeCenterIcon,
      });
      return marker;
    });

    setMarkers(newMarkers);
  }, [map]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: searchQuery }, (results, status) => {
      if (status === "OK") {
        map.setCenter(results[0].geometry.location);
        const marker = new window.google.maps.Marker({
          position: results[0].geometry.location,
          map: map,
        });
        setMarkers([...markers, marker]);
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  };

  return (
    <div className="">
        <div className="flex justify-center mb-3">
      <form onSubmit={handleSearchSubmit} className="">
        <input
          type="text"
          placeholder="Search location"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      </div>
      <div id="map" style={{ height: "500px", width: "100%" }}></div>
    </div>
  );
};

export default Map;
