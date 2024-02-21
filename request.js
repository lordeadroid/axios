const axios = require("axios");

const getTodayWeather = () => {
  const url = "https://api.weather.gov/gridpoints/OKX/60,60/forecast";

  return new Promise(async (res, rej) => {
    const response = await axios(url);
    if (response) {
      return res(response);
    }

    return rej("Not Reachable");
  });
};

getTodayWeather().then(({ data }) => {
  console.log(data.properties.periods[0].shortForecast);
});
