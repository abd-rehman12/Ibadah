import React, { useEffect, useState } from "react";
import LatLong from "../components/LatLong";

function TopNav() {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [sun, setSun] = useState({ rise: null, dawn: null });
  const [address, setAddress] = useState("");

  // Function to update parent's state
  const updateLocFromChild = (lati, longi) => {
    setLat(lati);
    setLong(longi);
    console.log(`Updated in parent: Lat: ${lati}, Long: ${longi}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (lat && long) {
        try {
          let res = await fetch(
            `https://api.sunrisesunset.io/json?lat=${lat}&lng=${long}`
          );
          let data = await res.json();

          console.log(
            "Sunrise and Sunset data:",
            data.results.sunrise,
            data.results.sunset
          );

          setSun({
            rise: data.results.sunrise || "No data",
            dawn: data.results.sunset || "No data",
          });

          res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}`
          );
          data = await res.json();
          console.log("address", data.display_name);
         

          setAddress(
              data.address.road +
                "," +
                data.address.neighbourhood +
                "," +
                data.address.district +
                "," +
                data.address.country
          );
        } catch (err) {
          console.error("Error fetching sunrise/sunset data:", err);
        }
      }
    };
    fetchData();
  }, [lat, long]);

  return (
    <>
      <LatLong updateLocFromChild={updateLocFromChild} />
      <div className="flex  justify-evenly items-center ">
        <div className="flex  w-7/12  justify-evenly  min-[320px]:max-sm:w-100%, text-lg, p-0">
          <div className="flex items-center   min-[320px]:max-sm:ml-0">
            <div className="flex m-4  min-[320px]:max-sm:m-0">
              <i
                className="far fa-sun fa-lg  text-yellow mt-3 mx-2 min-[320px]:max-sm:mt-0,mx-0"
                aria-hidden="true"
              ></i>

              <h4 className="text-white">
                Sunrise At:{" "}
                <span className="font-bold">
                  {sun.rise ? (
                    sun.rise
                  ) : (
                    <span className="font-bold"> ... </span>
                  )}
                </span>
              </h4>
            </div>

            <div className="flex m-4 min-[320px]:max-sm:m-0">
              <i
                className="fas fa-moon fa-lg text-yellow mt-3 mx-2"
                aria-hidden="true"
              ></i>

              <h4 className="text-white">
                Sunset At:{" "}
                <span className="font-bold">
                  {sun.dawn ? (
                    sun.dawn
                  ) : (
                    <span className="font-bold"> ... </span>
                  )}
                </span>
              </h4>
            </div>
          </div>
          <div className="flex md:flex-wrap justify-between  items-center  min-[320px]:max-sm:hidden ">
            <div>
              <i
                className="fab fa-facebook-square px-4 fa-lg text-white"
                aria-hidden="true"
              ></i>
            </div>
            <div className="border-l-2">
              <i
                className="fab fa-twitter-square px-4 fa-lg text-white"
                aria-hidden="true"
              ></i>
            </div>
            <div className="border-l-2">
              <i
                className="fab fa-linkedin text-white fa-lg px-4"
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </div>
        {/* marker */}
        <div className="flex w-4/12   justify-start mr-topNavSpacing min-[320px]:max-sm:p-0">
          <i
            className="fas fa-map-marker  text-yellow mt-3 mx-2 fa-lg"
            aria-hidden="true"
          ></i>
          <h4 className="text-white">
            {" "}
            {address ? address : <span className="font-bold"> ... </span>}
          </h4>
        </div>
      </div>
    </>
  );
}

export default TopNav;
