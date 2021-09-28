import React from "react";

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
    <section>
      <p>
        weatherType: <strong>{weatherType}</strong>
      </p>
    </section>
  );
}

export default WeatherCard;
