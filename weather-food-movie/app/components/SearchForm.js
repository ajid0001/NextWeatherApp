"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Weather() {
  const [location, setLocation] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("testtttt", e);
    router.push(`/${location}`);
    // onSubmit(location);
  };
  // console.log(location);

  return (
    <form onSubmit={handleSubmit}>
      <label>Weather</label>
      <input
        type="text"
        placeholder="Enter city name"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit">Get Weather</button>
    </form>
  );
}
