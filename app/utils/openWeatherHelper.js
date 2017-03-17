var axios = require('axios');

var apiKey = 'ddb766cb0a3b8c07ba6795df30f2a15c';

var param = "&type=accurate&APPID=" + apiKey ;

function getWeatherOfDay(city, state) {
    return axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + ',' + state + param);
}

function getWeatherOfWeek(city, state) {
    return axios.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + ',' + state + param + "&cnt=5");
}

var openWeatherHelper = {
    getCityWeather: function(city, state) {
        return axios.all([getWeatherOfDay(city, state), getWeatherOfWeek(city, state)])
        .then(axios.spread(function(weather, forecast) {
            return {
                weather: weather.data,
                forecast: forecast.data
            }
        }));
    }
}

module.exports = openWeatherHelper;