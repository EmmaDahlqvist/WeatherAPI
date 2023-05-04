import "./App.js";

function TemperatureDisplay({ temp }) {
  return (
    <div className="temperature">
      <h2>{temp.temp}</h2>
      <h2 id="celsius">&#8451;</h2> 
      <h2 id="farenheit">&#8457;</h2>
    </div>
  );
}

export default TemperatureDisplay;
