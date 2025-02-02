import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
// import "dotenv/config";

export default function SearchBox({ setInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let API_URL1 = import.meta.env.VITE_API_URL_1;
  let API_KEY = import.meta.env.VITE_API_KEY;
  let API_URL2 = import.meta.env.VITE_API_URL_2;

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL1}?q=${city}&appid=${API_KEY}`);
      let jsonResponse = await response.json();
      let { lat, lon } = jsonResponse[0];

      let weather = await fetch(
        `${API_URL2}lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      let info = await weather.json();

      let result = {
        city: city,
        feelsLike: info.main.feels_like,
        humidity: info.main.humidity,
        temp: info.main.temp,
        tempMin: info.main.temp_min,
        tempMax: info.main.temp_max,
        weather: info.weather[0].description,
      };
      setError(false);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setCity("");

      let info = await getWeatherInfo();
      setInfo(info);
    } catch (err) {
      setError(true);
      setInfo({});
    }
  };

  return (
    <div className="searchBox">
      <h4>Search for the weather</h4>
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="city name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <br />
        <br />
        <Button variant="outlined" type="submit">
          Search
        </Button>
      </form>
      {error ? (
        <p style={{ color: "red" }}>No such place found!</p>
      ) : (
        <h5>Weather Info</h5>
      )}
    </div>
  );
}
