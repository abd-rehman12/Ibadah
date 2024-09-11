import React, { useEffect, useState } from "react";

function LatLong({ updateLocFromChild }) {
  const [position, setPosition] = useState({ lat: null, long: null });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition({
            lat: position.coords.latitude,
            long: position.coords.longitude,
          });
          
          
        },
        (err) => {
          console.error("Geolocation error:", err.message);
        }
      );
    } else {
      console.log("Geolocation is not available in your browser");
    }
  }, []);

  useEffect(() => {
    if (position.lat !== null && position.long !== null) {
      console.log("Position updated:", position);
      if (typeof updateLocFromChild === 'function') {
        updateLocFromChild(position.lat, position.long);
      } else {
        console.error("updateLocFromChild is not a function");
      }
    }
  }, [position, updateLocFromChild]);

  return null; 
}

export default LatLong;
