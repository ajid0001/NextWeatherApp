"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Weather from "../components/Weather";

export default function Locations(props) {
  const keyword = decodeURIComponent(props.params.location);
  const [weather, setWeather] = useState(null);
  console.log("props", props);

  async function getWeather(keyword) {
    try {
      const response = await fetch(`/api/weather?location=${keyword}`);
      const weatherResp = await response.json();
      console.log("weatherResp", weatherResp);
      setWeather(weatherResp);
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
    //   console.log("Weather", weather);
  }
  useEffect(() => {
    getWeather(keyword);
    console.log("Weather", weather);
  }, [keyword]);

  return <Weather weatherData={weather} />;
}
