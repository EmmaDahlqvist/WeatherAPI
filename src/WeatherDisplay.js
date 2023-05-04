import "./App.js";

function WeatherDisplay({ weather, icon }) {
  let iconId = icon;
  var weatherIcon = "https://openweathermap.org/img/w/" + iconId + ".png";

  return (
    <div>
      <h2>{weather.main}</h2>
      <img id="weatherIcon" src={weatherIcon}></img>
    </div>
  );
}

export default WeatherDisplay;
