import React from "react";
import "../App.css";
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
      <p className="weatherType">
        weatherType: <strong>{weatherType}</strong>
      </p>
      <div className="tempDetails">
        <h1>
          lowTemp: <strong>{((lowTemp * 9) / 5 - 459.67).toFixed(2)}</strong>
        </h1>
        <h2>
          currentTemp:
          <strong>{((currentTemp * 9) / 5 - 459.67).toFixed(2)}</strong>
        </h2>
        <h1>
          highTemp: <strong>{((highTemp * 9) / 5 - 459.67).toFixed(2)}</strong>
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
