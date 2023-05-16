import "./App.js";

//kolla så korrekt stad är angiven
async function tryFetchLocation(url) {
  const response = await fetch(url);
  const data = await response.json();
  if (data[0]?.name !== undefined) {
    //Det är en korrekt stad med namn
    return true;
  } else {
    return false;
  }
}

function LocationSet({ setNewLocationAPI, location }) {
  async function handleChange() {
    let city = document.getElementById("cityInput").value;
    let newLocationLink =
      "http://api.openweathermap.org/geo/1.0/direct?q=" +
      city +
      "&limit=5&appid=950447352805e69f64cfaee15f180f30&units=metric";

    var locationExists = await tryFetchLocation(newLocationLink);

    if (locationExists === true) {
      if (location) {
        setNewLocationAPI(newLocationLink);
        document.getElementById("error").innerHTML = "";
      }
    } else {
      document.getElementById("error").innerHTML = "Unkown city";
    }
  }

  return (
    <div className="input_container">
      <input id="cityInput" type="text" placeholder="City"></input>
      <button className="changeBtn" onClick={handleChange}>
        Change
      </button>
      <p id="error"></p>
    </div>
  );
}

export default LocationSet;
