import React, { useState, useEffect } from "react";

const Map = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState(null);
  const [directions, setDirections] = useState(null);
  const [origin, setOrigin] = useState("");
const [destination, setDestination] = useState("");
const [travelMode, setTravelMode] = useState("DRIVING");


  useEffect(() => {
    const mapOptions = {
      center: { lat: 28.6448, lng: 77.2167 },
      zoom: 12,
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

    const hospitalIcon = {
      url: "https://cdn-icons-png.flaticon.com/128/3448/3448513.png",
      scaledSize: new window.google.maps.Size(30, 30),
    };

    const refugeeCenterIcon = {
      url: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Google-location-icon-color_icons_green_home.png",
      scaledSize: new window.google.maps.Size(25, 40),
    };

    const medicalIcon = {
      url: "https://bop.idaho.gov/wp-content/uploads/2019/06/003-location.svg",
      scaledSize: new window.google.maps.Size(35, 45),
    };

    const locations = [
      { lat: 28.6448, lng: 77.2167, name: "Delhi", type: "hospital" },
      { lat: 19.076, lng: 72.8777, name: "Mumbai", type: "refugee center" },
      { lat: 12.9716, lng: 77.5946, name: "Bengaluru", type: "hospital" },
      { lat: 22.5726, lng: 88.3639, name: "Kolkata", type: "refugee center" },
      { lat: 13.0827, lng: 80.2707, name: "Chennai", type: "hospital" },
      { lat: 17.385, lng: 78.4867, name: "Hyderabad", type: "refugee center" },
      { lat: 26.9124, lng: 75.7873, name: "Jaipur", type: "hospital" },
      { lat: 18.5204, lng: 73.8567, name: "Pune", type: "refugee center" },
      {
        lat: 28.6328,
        lng: 77.2204,
        name: "Sir Ganga Ram Hospital",
        type: "hospital",
      },
      {
        lat: 28.5861,
        lng: 77.1719,
        name: "BLK Super Specialty Hospital",
        type: "hospital",
      },
      {
        lat: 28.6262,
        lng: 77.2873,
        name: "Vardhman Mahavir Medical College and Safdarjung Hospital",
        type: "hospital",
      },
      {
        lat: 28.6619,
        lng: 77.228,
        name: "Moolchand Hospital",
        type: "hospital",
      },
      {
        lat: 28.5697,
        lng: 77.1867,
        name: "Holy Family Hospital",
        type: "hospital",
      },
      {
        lat: 28.6364,
        lng: 77.2928,
        name: "Deen Dayal Upadhyay Hospital",
        type: "hospital",
      },
      {
        lat: 28.6169,
        lng: 77.2083,
        name: "Ram Manohar Lohia Hospital",
        type: "hospital",
      },
      {
        lat: 28.6218,
        lng: 77.1548,
        name: "Max Smart Super Specialty Hospital, Saket",
        type: "hospital",
      },
      {
        lat: 28.5717,
        lng: 77.2321,
        name: "Dharamshila Narayana Superspeciality Hospital",
        type: "hospital",
      },
      { lat: 28.6453, lng: 77.2048, name: "AIIMS", type: "hospital" },
      {
        lat: 28.6685,
        lng: 77.2311,
        name: "Max Super Specialty Hospital, Saket",
        type: "hospital",
      },
      {
        lat: 28.5533,
        lng: 77.1928,
        name: "Fortis Escorts Heart Institute, Okhla",
        type: "hospital",
      },
      {
        lat: 28.5362,
        lng: 77.21,
        name: "Indraprastha Apollo Hospitals, Sarita Vihar",
        type: "hospital",
      },
      {
        lat: 19.076,
        lng: 72.8777,
        name: "Kokilaben Dhirubhai Ambani Hospital, Mumbai",
        type: "hospital",
      },
      {
        lat: 18.9389,
        lng: 72.8353,
        name: "Breach Candy Hospital, Mumbai",
        type: "hospital",
      },
      {
        lat: 19.026,
        lng: 72.8518,
        name: "Hiranandani Hospital, Mumbai",
        type: "hospital",
      },
      {
        lat: 19.0512,
        lng: 73.0708,
        name: "Fortis Hospital, Mulund, Mumbai",
        type: "hospital",
      },
      {
        lat: 18.5597,
        lng: 73.7914,
        name: "Ruby Hall Clinic, Pune",
        type: "hospital",
      },
      {
        lat: 18.5015,
        lng: 73.8633,
        name: "Sahyadri Hospitals, Pune",
        type: "hospital",
      },
      {
        lat: 20.0025,
        lng: 73.7869,
        name: "Fortis Hospital, Vashi, Navi Mumbai",
        type: "hospital",
      },
      {
        lat: 19.8683,
        lng: 75.3121,
        name: "Jehangir Hospital, Pune",
        type: "hospital",
      },
      {
        lat: 16.7082,
        lng: 74.2433,
        name: "Sangli Emergency Hospital, Sangli",
        type: "hospital",
      },
      {
        lat: 19.0362,
        lng: 72.9119,
        name: "Lilavati Hospital, Mumbai",
        type: "hospital",
      },
      {
        lat: 19.0882,
        lng: 72.8262,
        name: "SevenHills Hospital, Mumbai",
        type: "hospital",
      },
      {
        lat: 19.1425,
        lng: 72.834,
        name: "Global Hospital, Mumbai",
        type: "hospital",
      },
      {
        lat: 19.0692,
        lng: 72.8494,
        name: "Nanavati Hospital, Mumbai",
        type: "hospital",
      },
      {
        lat: 19.2123,
        lng: 72.8479,
        name: "Hiranandani Fortis Hospital, Vashi, Navi Mumbai",
        type: "hospital",
      },
      {
        lat: 19.1172,
        lng: 72.8625,
        name: "Holy Family Hospital, Mumbai",
        type: "hospital",
      },
      {
        lat: 19.0266,
        lng: 72.8974,
        name: "KEM Hospital, Mumbai",
        type: "hospital",
      },
      {
        lat: 19.1234,
        lng: 72.9006,
        name: "Sion Hospital, Mumbai",
        type: "hospital",
      },
      {
        lat: 19.0164,
        lng: 73.0232,
        name: "Suyash Hospital, Thane",
        type: "hospital",
      },
      {
        lat: 19.227,
        lng: 72.9889,
        name: "Terna Speciality Hospital and Research Centre, Nerul, Navi Mumbai",
        type: "hospital",
      },
      {
        lat: 19.0758,
        lng: 73.0037,
        name: "Fortis Hospital, Mulund, Mumbai",
        type: "refugee center",
      },
      {
        lat: 19.0859,
        lng: 73.0029,
        name: "Bethany Hospital, Thane",
        type: "refugee center",
      },
      {
        lat: 19.0863,
        lng: 73.0083,
        name: "Hiranandani Hospital, Thane",
        type: "refugee center",
      },
      {
        lat: 19.1897,
        lng: 73.0099,
        name: "MGM Hospital, Panvel",
        type: "refugee center",
      },
      {
        lat: 19.1867,
        lng: 73.0017,
        name: "Shreeyash refugee center, Panvel",
        type: "refugee center",
      },
      {
        lat: 18.9302,
        lng: 72.8235,
        name: "Bhatia refugee center, Mumbai",
        type: "refugee center",
      },
      {
        lat: 18.9672,
        lng: 72.8232,
        name: "Jaslok refugee center, Mumbai",
        type: "refugee center",
      },
      {
        lat: 18.975,
        lng: 72.8174,
        name: "Saifee refugee center, Mumbai",
        type: "refugee center",
      },
      {
        lat: 18.9449,
        lng: 72.8312,
        name: "Wockhardt refugee center, Mumbai",
        type: "refugee center",
      },
      {
        lat: 18.9407,
        lng: 72.8287,
        name: "Sir H. N. Reliance Foundation refugee center and Research Centre, Mumbai",
        type: "refugee center",
      },
      {
        lat: 28.6129,
        lng: 77.2295,
        name: "India Gate",
        type: "medical",
      },
      {
        lat: 28.5535,
        lng: 77.2588,
        name: "Qutub Minar",
        type: "medical",
      },
      {
        lat: 28.5686,
        lng: 77.1878,
        name: "Akshardham Temple",
        type: "medical",
      },
      {
        lat: 28.5355,
        lng: 77.391,
        name: "Adventurous Island",
        type: "medical",
      },
      {
        lat: 28.5445,
        lng: 77.2066,
        name: "Humayun's Tomb",
        type: "medical",
      },
      {
        lat: 28.6146,
        lng: 77.1996,
        name: "Red Fort",
        type: "medical",
      },
      {
        lat: 28.5214,
        lng: 77.2056,
        name: "Jama Masjid",
        type: "medical",
      },
      {
        lat: 28.5854,
        lng: 77.0786,
        name: "Worlds of Wonder",
        type: "medical",
      },
      {
        lat: 28.5802,
        lng: 77.2345,
        name: "Connaught Place",
        type: "medical",
      },
      {
        lat: 28.5228,
        lng: 77.1686,
        name: "Lotus Temple",
        type: "temple",
      },
    
      {
        lat: 28.7041,
        lng: 77.1025,
        name: "Delhi Gate",
        type: "medical",
      },
      {
        lat: 28.6129,
        lng: 77.2295,
        name: "Qutub Minar",
        type: "medical",
      },
      {
        lat: 28.6358,
        lng: 77.2244,
        name: "Lotus Temple",
        type: "medical",
      },
      {
        lat: 28.6835,
        lng: 77.1631,
        name: "Akshardham Temple",
        type: "medical",
      },
      { lat: 28.6579, lng: 77.1528, name: "India Gate", type: "monument" },
      {
        lat: 28.5454,
        lng: 77.191,
        name: "Tughlaqabad Fort",
        type: "medical",
      },
      {
        lat: 28.6507,
        lng: 77.2317,
        name: "Humayun's Tomb",
        type: "medical",
      },
      {
        lat: 28.6339,
        lng: 77.2183,
        name: "Iskcon Temple",
        type: "medical",
      },
      {
        lat: 28.6356,
        lng: 77.2106,
        name: "Jama Masjid",
        type: "medical",
      },
      {
        lat: 28.6892,
        lng: 77.2124,
        name: "Raj Ghat",
        type: "medical",
      },
      {
        lat: 28.6296,
        lng: 77.2097,
        name: "Refugee Center 1, Delhi",
        type: "refugee center",
      },
      {
        lat: 28.6297,
        lng: 77.2028,
        name: "Refugee Center 2, Delhi",
        type: "refugee center",
      },
      {
        lat: 28.6398,
        lng: 77.2132,
        name: "Refugee Center 3, Delhi",
        type: "refugee center",
      },
      {
        lat: 28.6384,
        lng: 77.1996,
        name: "Refugee Center 4, Delhi",
        type: "refugee center",
      },
      {
        lat: 28.6465,
        lng: 77.2155,
        name: "Refugee Center 5, Delhi",
        type: "refugee center",
      },
      {
        lat: 28.6483,
        lng: 77.2059,
        name: "Refugee Center 6, Delhi",
        type: "refugee center",
      },
      {
        lat: 28.6589,
        lng: 77.2221,
        name: "Refugee Center 7, Delhi",
        type: "refugee center",
      },
      {
        lat: 28.6582,
        lng: 77.2113,
        name: "Refugee Center 8, Delhi",
        type: "refugee center",
      },
      {
        lat: 28.6693,
        lng: 77.2264,
        name: "Refugee Center 9, Delhi",
        type: "refugee center",
      },
      {
        lat: 28.6697,
        lng: 77.2156,
        name: "Refugee Center 10, Delhi",
        type: "refugee center",
      },
      {
        lat: 28.6802,
        lng: 77.2315,
        name: "Refugee Center 11, Delhi",
        type: "refugee center",
      },
      {
        lat: 28.6801,
        lng: 77.2206,
        name: "Refugee Center 12, Delhi",
        type: "refugee center",
      },
      {
        lat: 28.6905,
        lng: 77.2373,
        name: "Refugee Center 13, Delhi",
        type: "refugee center",
      },
      {
        lat: 28.6895,
        lng: 77.2274,
        name: "Refugee Center 14, Delhi",
        type: "refugee center",
      },
      {
        lat: 28.7012,
        lng: 77.2433,
        name: "Refugee Center 15, Delhi",
        type: "refugee center",
      },
      {
        lat: 28.7014,
        lng: 77.2324,
        name: "Refugee Center 16, Delhi",
        type: "refugee center",
      },
      {
        lat: 28.7106,
        lng: 77.2483,
        name: "Refugee Center 17, Delhi",
        type: "refugee center",
      },
      {
        lat: 28.6972,
        lng: 77.2829,
        name: "MediPlus Pharmacy",
        type: "medical",
      },
      {
        lat: 28.6921,
        lng: 77.2787,
        name: "Apollo Pharmacy",
        type: "medical",
      },
      {
        lat: 28.6998,
        lng: 77.2895,
        name: "MediLife Pharmacy",
        type: "medical",
      },
      {
        lat: 28.6889,
        lng: 77.2901,
        name: "Medicare Pharmacy",
        type: "medical",
      },
      {
        lat: 28.6874,
        lng: 77.2862,
        name: "MediLink Pharmacy",
        type: "medical",
      },
      {
        lat: 28.6959,
        lng: 77.2824,
        name: "MediMall Pharmacy",
        type: "medical",
      },
      {
        lat: 28.7047,
        lng: 77.2773,
        name: "MediWell Pharmacy",
        type: "medical",
      },
      {
        lat: 28.7026,
        lng: 77.2822,
        name: "MediCure Pharmacy",
        type: "medical",
      },
      {
        lat: 28.6948,
        lng: 77.2697,
        name: "MediChest Pharmacy",
        type: "medical",
      },
      {
        lat: 28.7003,
        lng: 77.2695,
        name: "MediHealth Pharmacy",
        type: "medical ",
      },
      {
        lat: 28.6288,
        lng: 77.2166,
        name: "City Hospital",
        type: "hospital",
      },
      {
        lat: 28.6545,
        lng: 77.2312,
        name: "National Hospital",
        type: "hospital",
      },
      {
        lat: 28.6361,
        lng: 77.2215,
        name: "Max Hospital",
        type: "hospital",
      },
      {
        lat: 28.6102,
        lng: 77.2211,
        name: "Apollo Hospital",
        type: "hospital",
      },
      {
        lat: 28.6449,
        lng: 77.2267,
        name: "Fortis Hospital",
        type: "hospital",
      },
      {
        lat: 28.6316,
        lng: 77.2164,
        name: "AIIMS Hospital",
        type: "hospital",
      },
      {
        lat: 28.6394,
        lng: 77.209,
        name: "Ganga Ram Hospital",
        type: "hospital",
      },
      {
        lat: 28.6619,
        lng: 77.2927,
        name: "Batra Hospital",
        type: "hospital",
      },
      {
        lat: 28.6693,
        lng: 77.2176,
        name: "Moolchand Hospital",
        type: "hospital",
      },
      {
        lat: 28.6477,
        lng: 77.235,
        name: "Cygnus Orthocare Hospital",
        type: "hospital",
      },
      {
        lat: 28.6652,
        lng: 77.2209,
        name: "Safdarjung Hospital",
        type: "hospital",
      },
      {
        lat: 28.6272,
        lng: 77.2133,
        name: "Sitaram Bhartia Hospital",
        type: "hospital",
      },
      {
        lat: 28.6825,
        lng: 77.2247,
        name: "Pushpawati Singhania Hospital",
        type: "hospital",
      },
      {
        lat: 28.6345,
        lng: 77.2345,
        name: "Primus Hospital",
        type: "hospital",
      },
      {
        lat: 28.6591,
        lng: 77.2188,
        name: "Rajiv Gandhi Super Speciality Hospital",
        type: "hospital",
      },
      {
        lat: 28.6411,
        lng: 77.1145,
        name: "Columbia Asia Hospital",
        type: "hospital",
      },
      {
        lat: 28.6245,
        lng: 77.2201,
        name: "Holy Family Hospital",
        type: "hospital",
      },
      {
        lat: 28.6807,
        lng: 77.2425,
        name: "Jeewan Mala Hospital",
        type: "hospital",
      },
      {
        lat: 28.6873,
        lng: 77.1208,
        name: "Dharamshila Narayana Superspeciality Hospital",
        type: "hospital",
      },
      {
        lat: 28.6633,
        lng: 77.2193,
        name: "Army Hospital Research and Referral",
        type: "hospital",
      },
    ];
    const newMarkers = locations.map((location) => {
      const marker = new window.google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: map,
        title: location.name,
        icon:
          location.type === "hospital"
            ? hospitalIcon
            : location.type === "medical"
            ? medicalIcon
            : refugeeCenterIcon,
      });
      return marker;
    });

    setMarkers(newMarkers);
  }, [map]);

  useEffect(() => {
    if (!directions) {
      return;
    }

    const directionsRenderer = new window.google.maps.DirectionsRenderer({
      map: map,
      directions: directions,
    });

    return () => {
      directionsRenderer.setMap(null);
    };
  }, [directions, map]);

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

  const handleDirectionsSubmit = (event) => {
    event.preventDefault();
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: markers[0].getPosition(),
        destination: markers[markers.length - 1].getPosition(),
        travelMode: "DRIVING",
      },
      (result, status) => {
        if (status === "OK") {
          setDirections(result);
        } else {
          alert("Directions request failed due to " + status);
        }
      }
    );
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
          <button type="submit" className=" bg-blue-500 p-2 rounded-xl hover:bg-blue-600 text-white">Search</button>
        </form>
      </div>
      <div id="map" style={{ height: "500px", width: "100%" }}></div>
      <div className="flex justify-center mb-3">
  <form onSubmit={handleDirectionsSubmit} className="">
    <input
      type="text"
      placeholder="Origin"
      value={origin}
      onChange={(event) => setOrigin(event.target.value)}
    />
    <input
      type="text"
      placeholder="Destination"
      value={destination}
      onChange={(event) => setDestination(event.target.value)}

    />
    <select
      value={travelMode}
      onChange={(event) => setTravelMode(event.target.value)}
    >
      <option value="DRIVING">Driving</option>
      <option value="WALKING">Walking</option>
      <option value="BICYCLING">Bicycling</option>
      <option value="TRANSIT">Transit</option>
    </select>
    <button type="submit" className=" bg-blue-500 p-2 rounded-xl hover:bg-blue-600 text-white">Get Directions</button>
  </form>
</div>
    </div>
  );
};

export default Map;
