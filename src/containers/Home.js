import { React, useState, useEffect } from "react";
import { useMemo } from "react";
import { useLocation } from "react-router";
import WeatherCard from "../components/WeatherCard";
import axios from "axios";

const API_KEY = `410074a26eb06d9d9eb48926b1b49e80`;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  // URL Search Params
  //google.com/?horse=true&dog=false
  //localhost:3000/?city=paris

  const [city, setCity] = useState();
  const [weatherData, setWeatherData] = useState();
  let query = useQuery();

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  useEffect(() => {
    const cityValue = query.get("city"); //query.get(*from browser address*)
    if (cityValue) {
      setCity(cityValue);
    } else {
      setCity(`Paris`); //Default City on first landing
    }
  }, [query]);

  useEffect(() => {
    //Get Weather Data from Weather API
    if (city) {
      axios
        .get(URL) //send HTTP GET, have a promise of response
        .then((response) => {
          //Successful request
          //console.log(response); //see the structure of object
          setWeatherData(response.data);
        })
        .catch((error) => {
          //unsuccessful request
          console.warn(error);
        });
    }
  }, [URL, city]);

  const {
    cloudiness,
    currentTemp,
    highTemp,
    humidity,
    lowTemp,
    weatherType,
    windSpeed,
  } = useMemo(() => {
    if (!weatherData) return {};

    return {
      cloudiness: weatherData.clouds.all,
      currentTemp: weatherData.main.temp,
      highTemp: weatherData.main.temp_max,
      humidity: weatherData.main.humidity,
      lowTemp: weatherData.main.temp_min,
      weatherType: weatherData.weather[0].main,
      windSpeed: weatherData.wind.speed,
    };
  }, [weatherData]);

  /*console.log(weatherType)*/

  return (
    <section className="App">
      <header>
        {/* What are all the tags that I can find? nav, main, section..... */}
        <div className="cityList">
          <h1>
            <a href="/?city=Paris">Paris</a>
          </h1>
          <h1>
            <a href="/?city=Tokyo">Tokyo</a>
          </h1>
          <h1>
            <a href="/?city=Shanghai">Shanghai</a>
          </h1>
          <h1>
            <a href="/?city=New%20York%20City">New York City</a>
          </h1>
        </div>
      </header>
      {console.log(city)}
      <main className="mainWrapper">
        <h1>{city}</h1>
        {/* sending only the data we need to send */}
        <WeatherCard
          cloudiness={cloudiness}
          currentTemp={currentTemp}
          highTemp={highTemp}
          humidity={humidity}
          lowTemp={lowTemp}
          weatherType={weatherType}
          windSpeed={windSpeed}
        />
      </main>
    </section>
  );
}

export default Home;
