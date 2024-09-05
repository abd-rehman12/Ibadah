import React, { useEffect, useState } from "react";
import TopNav from "../view/topNav";

function LatLong() {
  const [position, setPosition] = useState({ lat: null, long: null });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
       (position) => {
            console.log("Lat position object: ", position.coords.latitude); // Log the full position object for debugging
            console.log("Long position object: ", position.coords.longitude); // Log the full position object for debugging

            setPosition({
            lat: position.coords.latitude ,
            long: position.coords.longitude,
          });
          console.log("LAAAT",position.lat,"Loong", position.long);
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
    if (position.lat && position.long) {
      console.log("Updated Lat:", position.lat, "Updated Long:", position.long);
    }
  }, [position]);
  return (
    <>
      <div>
        {position.lat && position.lat ? (
        
          <TopNav lat={position.lat} long={position.long} />
        ) : (
          <p> loading ...</p>
        )}
      </div>
    </>
  );
}

export default LatLong;
