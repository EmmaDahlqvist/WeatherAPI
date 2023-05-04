import React, { useState, useEffect } from "react";
import TemperatureDisplay from "./TemperatureDisplay";
import LocationDisplay from "./LocationDisplay";
import WeatherDisplay from "./WeatherDisplay";
import LocationSet from "./LocationSet";
import ChangeUnits from "./ChangeUnits";
import "./App.css";

function App() {
  //API Urls
  const [weatherDataAPI, setNewWeatherDataAPI] = useState(
    "https://api.openweathermap.org/data/2.5/weather?lat=57.424254&lon=12.42187&appid=950447352805e69f64cfaee15f180f30&units=metric"
  );
  const [locationAPI, setNewLocationAPI] = useState(
    "http://api.openweathermap.org/geo/1.0/direct?q=Gothenburg&limit=5&appid=950447352805e69f64cfaee15f180f30&units=metric"
  );
  
  //Värden
  const [temp, setTemp] = useState([]);
  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState([]);
  const [icon, setIcon] = useState(["04d"]);
  const [unit, setUnit] = useState("metric");

  //Lyssnar efter en uppdaterad location -> city
  useEffect(() => {
    fetchLocationData();
  }, [locationAPI]);

  //Lyssnar efter väderdata efter uppdaterade lon och lat
  useEffect(() => {
    fetchWeatherData();
  }, [weatherDataAPI]);

  async function fetchLocationData() {
    const response = await fetch(locationAPI);
    const data = await response.json();
    setLocation(data[0]);

    //Byt väderdatan
    var lon = data[0].lon;
    var lat = data[0].lat;
    let newCoordinatesLink =
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
      lat +
      "&lon=" +
      lon +
      "&appid=950447352805e69f64cfaee15f180f30&units=" + unit;
    setNewWeatherDataAPI(newCoordinatesLink);
  }

  async function fetchWeatherData() {
    const response = await fetch(weatherDataAPI);
    const data = await response.json();

    setTemp(data.main);
    setWeather(data.weather[0]);
    setIcon(data.weather[0].icon);
  }

  return (
    <div className="App">
      <LocationDisplay location={location} />
      <TemperatureDisplay temp={temp} />
      <WeatherDisplay weather={weather} icon={icon} />
      <LocationSet setNewLocationAPI={setNewLocationAPI} location={location} />
      <ChangeUnits
        weatherDataAPI={weatherDataAPI}
        setNewWeatherDataAPI={setNewWeatherDataAPI}
        temp={temp}
        setUnit={setUnit}
      />
    </div>
  );
}

export default App;
