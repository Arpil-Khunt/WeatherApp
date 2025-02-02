import "./InfoBox.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
export default function InfoBox({ info }) {
  let HOT_URL =
    "https://media.istockphoto.com/id/1011128754/photo/thermometer-in-the-sky-the-heat.webp?a=1&b=1&s=612x612&w=0&k=20&c=01rRH11Bv4MNv8uQYjj1kQT5wVBDah2qvJ5jUCM8UOI=";
  let COLD_URL =
    "https://plus.unsplash.com/premium_photo-1670493556860-13e006e6faa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ludGVyfGVufDB8fDB8fHww";
  let RAIN_URL =
    "https://images.unsplash.com/photo-1610901342861-e472a8c248b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhaW4lMjBjaXR5fGVufDB8fDB8fHww";
  return (
    <div className="InfoBox">
      {info && (
        <>
          {/* <h4>Weather Info</h4> */}
          {/* <p>{JSON.stringify(info)}</p> */}
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={
                info.humidity > 80
                  ? RAIN_URL
                  : info.temp < 15
                  ? COLD_URL
                  : HOT_URL
              }
              title="green iguana"
            />
            <CardContent>
              {info.city && (
                <>
                  <Typography gutterBottom variant="h5" component="div">
                    {info.city}{" "}
                    {info.humidity > 80 ? (
                      <ThunderstormIcon />
                    ) : info.temp > 15 ? (
                      <WbSunnyIcon />
                    ) : (
                      <AcUnitIcon />
                    )}
                  </Typography>
                </>
              )}

              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                component={"span"}
              >
                {info.temp && <p>Temperature = {info.temp}&deg;C</p>}
                {info.humidity && <p>Humidity = {info.humidity}</p>}
                {info.tempMin && <p>TempMin = {info.tempMin}&deg;C</p>}
                {info.tempMax && <p>TempMax = {info.tempMax}&deg;C</p>}
                {info.weather && info.feelsLike && (
                  <p>
                    The weather can be described as <b>{info.weather}</b> and
                    feelsLike&nbsp;
                    <b>{info.feelsLike}&deg;C</b>
                  </p>
                )}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </>
      )}
    </div>
  );
}
