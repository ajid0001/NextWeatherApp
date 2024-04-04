export default function weather({ weatherData }) {
  return (
    <div>
      {weatherData ? (
        <div>
          <h1>Weather in {weatherData.name}</h1>
          <h2>{weatherData.weather[0].description}</h2>
          <h3>{weatherData.main.temp}°C</h3>
        </div>
      ) : (
        <h1>Weather data not found</h1>
      )}
    </div>
  );
}
