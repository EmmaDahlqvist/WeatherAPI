import "./App.js"

function ChangeUnits({ weatherDataAPI, setNewWeatherDataAPI, setUnit}) {
    
    function changeUnit(value) {
      var oldLink = weatherDataAPI.slice();
      var splitLink = oldLink.split("units=");
      var newLink = splitLink[0] + "units=" + value; //uppdaterad URL
  
      //Fixa HTML för enheten (C/F)
      if (value === "imperial") {
        document.getElementById("farenheit").style.display = "block";
        document.getElementById("celsius").style.display = "none";
      } else if (value === "metric") {
        document.getElementById("farenheit").style.display = "none";
        document.getElementById("celsius").style.display = "block";
      }
  
      //uppdatera
      setUnit(value);
      setNewWeatherDataAPI(newLink);
    }
  
    return (
      <div className="unitSystem">
        <div className="systemMetric">
          <label htmlFor="metric">Metric System</label>
          <input
            id="metric"
            type="radio"
            value="metric"
            name="unit"
            onClick={() => changeUnit("metric")}
            defaultChecked
          ></input>
        </div>
        <div className="systemImperial">
          <label htmlFor="imperial">Imperial System</label>
          <input
            type="radio"
            value="imperial"
            name="unit"
            onClick={() => changeUnit("imperial")}
          ></input>
        </div>
      </div>
    );
  }

  export default ChangeUnits