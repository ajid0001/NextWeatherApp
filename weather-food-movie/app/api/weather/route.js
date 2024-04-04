import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request) {
  //   const { location } = req.query;
  const location = params.get("location");
  const params = new URL(request.url).searchParams;
  const apiKey = "e5b4d90bd664d96dda5a81cb0097cafe";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  console.log("params", params);
  console.log("location", location);

  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await response.json();
  return NextResponse.json(data);
  // console.log("data", data);
}
