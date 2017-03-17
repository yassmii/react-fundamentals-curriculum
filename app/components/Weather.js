var React = require('react');

var Weather = function(props) {
    var weatherInfo = props.weatherInfo;
    if (props.isLoading) {
        return (<div>Loading</div>);
    }

    var weatherStyle = 'wi wi-owm-'+ weatherInfo.weather[0].id;
    console.log(weatherStyle);
    return (<div>
            <i className={weatherStyle}></i>
            <h1>{weatherInfo.name}</h1>            
        </div>
    )
}

module.exports = Weather;