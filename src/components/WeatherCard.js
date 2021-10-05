import React from "react";
import "../App.css";
import WeatherImage from "./WeatherImage";

function WeatherCard({
  cloudiness,
  currentTemp,
  highTemp,
  humidity,
  lowTemp,
  weatherType,
  windSpeed,
}) {
  return (
    <section className="cardWrapper">
      <div className="weatherImageWrapper">
        <WeatherImage weatherType={weatherType} />
      </div>

      <p className="weatherType">
        <strong>{weatherType}</strong>
      </p>
      <div className="tempDetails">
        <h1>
          Low: <strong>{Math.round((lowTemp * 9) / 5 - 459.67)}</strong>
        </h1>
        <h2>
          Current:
          <strong>{Math.round((currentTemp * 9) / 5 - 459.67)}</strong>
        </h2>
        <h1>
          High: <strong>{Math.round((highTemp * 9) / 5 - 459.67)}</strong>
        </h1>
      </div>

      <p>
        cloudiness: <strong>{cloudiness}</strong>
      </p>
      <p>
        humidity: <strong>{humidity}</strong>
      </p>
      <p>
        windSpeed: <strong>{windSpeed}</strong>
      </p>
    </section>
  );
}

export default WeatherCard;
