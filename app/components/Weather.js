var React = require('react');

var Weather = function(props) {
    var weatherInfo = props.weatherInfo;
    if (props.isLoading) {
        return (<div>Loading</div>);
    }

    var weatherStyle = 'wi wi-owm-'+ weatherInfo.weather[0].id;
    var date = new Date(weatherInfo.dt * 1000).toDateString();
    return (<div className="weather">
            <i className={weatherStyle}></i>
            <p>{date}</p>
            <p>{props.city}, {props.state}</p>
            <p>{weatherInfo.description}</p>
            <p>min temp: {weatherInfo.main.temp_min}</p>
            <p>max temp: {weatherInfo.main.temp_max}</p>
            <p>humidity: {weatherInfo.main.humidity}</p>            
        </div>
    )
}

module.exports = Weather;