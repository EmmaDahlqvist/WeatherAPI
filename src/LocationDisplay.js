import "./App.js";

function LocationDisplay({ location }) {
  return (
    <div>
      <h1>
        {location.name} {location.country}
      </h1>
    </div>
  );
}

export default LocationDisplay;
