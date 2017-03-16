var axios = require('axios');

var apiKey = 'ddb766cb0a3b8c07ba6795df30f2a15c';

var param = "&type=accurate&APPID=" + apiKey;

function getWeatherOfDay(city, state) {
    return axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + ',' + state + param);
}

var openWeatherHelper = {
    getWeatherOfDay: function(city, state) {
        return getWeatherOfDay(city, state).then(function(weatherInfo) {
            return weatherInfo.data;
        })
    }
}

module.exports = openWeatherHelper;