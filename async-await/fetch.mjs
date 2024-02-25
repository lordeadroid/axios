const getWeatherData = () => {
  const url = "https://api.weather.gov/gridpoints/OKX/60,60/forecast";
  return fetch(url);
};
