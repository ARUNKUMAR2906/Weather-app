// import React from 'react'

import axios from "axios";
import { useState } from "react";
import Icon from "./icon";
import "./weather.css";

const Weather = () => {
  const [city, setcity] = useState("");
  const handlecity = (e) => {
    setcity(e.target.value);
  };
  const [weather, setweather] = useState("");
  const [temp, settemp] = useState("");
  const [desc, setdesc] = useState("");
  const getweather = () => {
    const weatherdata = axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5e36e07d8239cb7547d00f75ce7618d8`
    );
    weatherdata.then((report) => {
      console.log(report.data);
      setweather(report.data.weather[0].main);
      settemp(Math.floor(report.data.main.temp-273.15));
      setdesc(report.data.weather[0].description);
      setcity('');
    });
    
  };
  return (
    <div className="bg-black w-full flex items-center justify-center h-[100vh] p-5 weather">
      <div className="p-16 md:p-9 bg-[#BCD7F4] rounded-md">
        <div className="">
        <h1 className="text-2xl font-semibold font-mono border-b-2 border-transparent hover:border-b-2 hover:border-black">Weather Report</h1>
        {/* <p className="font-medium">I can give you a weather report about your city</p> */}
        <div className="flex items-center justify-center flex-col sm:flex-row gap-2 mt-3">
          <input
            className="rounded  focus:outline-none p-1"
            type="text"
            value={city}
            onChange={handlecity}
          ></input>
          <button
            className="bg-black text-white py-1 px-3
           rounded"
            onClick={getweather}
          >
            Get
          </button>
        </div>
        <Icon weather={weather} />
        <div className="flex flex-col md:flex-row items-center justify-around md:gap-2">
          <h2 className="text-xl font-semibold">{temp?<>{temp}&deg;C</>:null}</h2>
          <h2 className="text-xl font-semibold">{weather?<>|   {weather}   |</>:null}</h2>
          <h2 className="text-xl font-semibold">{desc}</h2>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
