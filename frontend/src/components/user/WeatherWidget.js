import React, { useEffect, useState } from "react";

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherData = async () => {
    const res = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=26.8467&lon=80.9462&appid=0ceed5dde14f90394e94171fd6991fec"
    );
    const data = await res.json();
    console.log(data);
    setWeatherData(data);
    // setLoading(false);
  };

  const kelvinToCelcius = (kelvin) => {
    return Math.round(kelvin - 273.15);
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  const getCloudImage = (value) => {
    if (value > 0 && value <= 20) {
      return "https://openweathermap.org/img/w/02d.png";
    } else if (value > 20 && value <= 40) {
      return "https://openweathermap.org/img/w/03d.png";
    } else if (value > 40 && value <= 60) {
      return "https://openweathermap.org/img/w/04d.png";
    } else if (value > 60 && value <= 80) {
      return "https://openweathermap.org/img/w/04d.png";
    } else if (value > 80 && value <= 100) {
      return "https://openweathermap.org/img/w/04d.png";
    }
  };

  return (
    <div>
      {weatherData && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Weather</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Current Weather in {weatherData.name}
            </h6>
            <p className="card-text">
              Temperature: {kelvinToCelcius(weatherData.main.temp)}°C
            </p>
            <p className="card-text">
              Feels like: {kelvinToCelcius(weatherData.main.feels_like)}°C
            </p>
            <p className="card-text">Humidity: {weatherData.main.humidity}%</p>
            <p className="card-text">Wind speed: {weatherData.wind.speed}m/s</p>
            <p className="card-text">Wind direction: {weatherData.wind.deg}°</p>
            <img src={getCloudImage(weatherData.clouds.all)} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;
