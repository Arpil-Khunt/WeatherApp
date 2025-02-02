import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
  let [info, setInfo] = useState({});
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Weather App By Arpil Khunt!</h3>
      <SearchBox setInfo={setInfo} />
      <InfoBox info={info} />
    </div>
  );
}
