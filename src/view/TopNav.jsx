import { useEffect, useState } from "react";

function TopNav({ lat, long }) {
  const [sun, setSun] = useState({ rise: null, dawn: null });
  useEffect(() => {
    const fetchData = async () => {
      if (lat && long) {
        const res = await fetch(
          `https://api.sunrisesunset.io/json?lat=${lat}&lng=${long}`
        );
        const data = await res.json();

        console.log("dddddddddddddd",data.results.sunrise, data.results.sunset);
        setSun({
          rise: data.results.sunrise || "no data",
          dawn: data.results.sunset || "no data",
        });
      }
    };
    fetchData();

  }, [lat, long]);
  console.log('ssssssssssss',sun.rise)

  return (
    <>
      <div className="flex  flex-wrap">
        <div className="flex p-4  w-7/12 flex-wrap justify-between">
          <div className="flex ml-8">
            <div className="flex m-4  ">
              <i
                className="far fa-sun fa-lg text-yellow mt-3 mx-2 "
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

            <div className="flex m-4 ">
              <i
                className="fas fa-moon fa-lg text-yellow mt-3 mx-2 "
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
          <div className=" flex  flex-wrap justify-between p-4 ">
            <div>
              <i
                className="fab fa-twitter-square px-4 fa-lg text-white  "
                aria-hidden="true"
              ></i>
            </div>
            <div className="border-l-2">
              <i
                className="fab fa-facebook-square px-4 fa-lg text-white  "
                aria-hidden="true"
              ></i>
            </div>
            <div className="border-l-2 ">
              <i
                className="fab fa-linkedin text-white fa-lg px-4  "
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </div>
        <div className="flex p-4  w-4/12 flex-wrap m-5 justify-end mr-topNavSpacing ">
          <i
            className="fas fa-map-marker text-yellow  mt-3 mx-2  fa-lg"
            aria-hidden="true"
          ></i>
          <h4 className="text-white">New Street Town 2445x United State</h4>
        </div>
      </div>
    </>
  );
}

export default TopNav;
