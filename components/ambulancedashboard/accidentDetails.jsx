import React from "react";
import { doc, updateDoc } from "firebase/firestore";
import { app, database } from "../../config/firebase";



export default function AccidentsDetails({ tittle, loc, time, status,id }) {
  //     const ACCESS_TOKEN = 'pk.eyJ1IjoiYWxhcGFub3NraSIsImEiOiJjbGVxMjhjbmowaTZpNDVvNWQ4NTBsc2JtIn0.LFIPoIEmYQJv5bfRPueMQQ';
  // const geocoder = new MapboxGeocoder({
  //     accessToken: ACCESS_TOKEN
  // });

  // // Reverse geocode a set of coordinates
  // geocoder.reverseGeocode({
  //     query: [-122.42, 37.78]
  // }).then(function(result) {
  //     // Extract the location information from the response
  //     const location = result.features[0].place_name;
  //     console.log(location);
  //     // Output: 1550 Bryant St, San Francisco, California 94103, United States
  // });




// Set the "capital" field of the city 'DC'
const handleClick = async () => {

    console.log("function start")
 
    // Get a reference to the "DC" document in the "cities" collection
    // const washingtonRef = doc(database, "fire", id);

    // Set the "capital" field of the "DC" document to true
    // await updateDoc(washingtonRef, {
    //   status: "DONE"
    // });

    // updateDoc(washingtonRef, {
    //     status: "DONE"
    //   });
  
    window.location.reload(false);

  }



  return (
    <button className="w-full mb-2  ">
      <div className="flex flex-col  w-full h-full gap-4 border-2 border-white px-2">
        <div className=" rounded-lg  m-0 p-0">
          <div className=" bg-[#fff0] hover:bg-[#fff1] h-full flex w-full  border-grey-500 mt-2  mr-2 items-center  justify-around py-1 border-grey-500">
            <div className="flex flex-col px-2 ml-2 items-stretch  w-full ">
              <div className="flex   text-white py-1 ">
                <h3 className="font-sans  bg-red-900 text-xs font-normal tracking-wide ">
                  {status ? status : "NEW"}
                </h3>
              </div>
              <h2 className="font-sans text-left text-white  font-bold tracking-wide  pb-1 ">
                {tittle ? tittle : "Accident"}
              </h2>
            </div>

            <div className="flex items-center justify-center  w-full ">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1"
              >
                <path
                  d="M12 21C10.22 21 8.47991 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89472 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17294C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36628 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C21 14.387 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.387 21 12 21ZM12 4.5C10.5166 4.5 9.0666 4.93987 7.83323 5.76398C6.59986 6.58809 5.63856 7.75943 5.07091 9.12988C4.50325 10.5003 4.35473 12.0083 4.64411 13.4632C4.9335 14.918 5.64781 16.2544 6.6967 17.3033C7.7456 18.3522 9.08197 19.0665 10.5368 19.3559C11.9917 19.6453 13.4997 19.4968 14.8701 18.9291C16.2406 18.3614 17.4119 17.4001 18.236 16.1668C19.0601 14.9334 19.5 13.4834 19.5 12C19.5 10.0109 18.7098 8.10323 17.3033 6.6967C15.8968 5.29018 13.9891 4.5 12 4.5Z"
                  fill="#808080"
                />
                <path
                  d="M15 12.75H12C11.8019 12.7474 11.6126 12.6676 11.4725 12.5275C11.3324 12.3874 11.2526 12.1981 11.25 12V7C11.25 6.80109 11.329 6.61032 11.4697 6.46967C11.6103 6.32902 11.8011 6.25 12 6.25C12.1989 6.25 12.3897 6.32902 12.5303 6.46967C12.671 6.61032 12.75 6.80109 12.75 7V11.25H15C15.1989 11.25 15.3897 11.329 15.5303 11.4697C15.671 11.6103 15.75 11.8011 15.75 12C15.75 12.1989 15.671 12.3897 15.5303 12.5303C15.3897 12.671 15.1989 12.75 15 12.75Z"
                  fill="#808080"
                />
              </svg>

              <h2 className="font-sans  font-semibold tracking-wide text-white ml-1">
                {time?.substr(11, 8)}
              </h2>
            </div>

            <div className="flex  mx-3 ">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1"
              >
                <path
                  d="M5 12V3L20 10L5 17V21"
                  stroke="#808080"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="flex-col items-center justify-between">
                <h3 className="font-sans text-xs font-semibold tracking-wide text-white  text-start ml-1">
                  Location
                </h3>

                <h2 className="font-sans  font-light  text-xs tracking-wide text-white ml-1">
                  {loc ? loc : "Unavailable"}
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full h-full  ">
          <button onClick={handleClick} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-500 to-rose-500 group-hover:from-red-500 group-hover:to-rose-500 hover:text-white dark:text-white">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Attend{" "}
            </span>
          </button>

         
        </div>
      </div>
    </button>
  );
}
