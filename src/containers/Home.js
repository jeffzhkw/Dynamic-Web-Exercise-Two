import React from "react";
import { useMemo } from "react";
import WeatherCard from "../components/WeatherCard";

const API_KEY = `410074a26eb06d9d9eb48926b1b49e80`;

function Home() {
  const {
    cloudiness,
    currentTemp,
    highTemp,
    humidity,
    lowTemp,
    weatherType,
    windSpeed,
  } = useMemo(() => {
    return {
      cloudiness: 100,
      currentTemp: "76",
      highTemp: `80`,
      humidity: 100,
      lowTemp: `80`,
      weatherType: "Cloudy",
      windSpeed: `10mph`,
    };
  }, []);

  /*console.log(weatherType)*/

  return (
    <section className="App">
      <WeatherCard
        cloudiness={cloudiness}
        currentTemp={currentTemp}
        highTemp={highTemp}
        humidity={humidity}
        lowTemp={lowTemp}
        weatherType={weatherType}
        windSpeed={windSpeed}
      />
    </section>
  );
}

export default Home;
