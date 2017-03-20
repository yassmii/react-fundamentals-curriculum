var React = require('react');


var Forecast = function(props) {
    console.log(props.forecast);
    if (props.isLoading) {
        return (<div>Loading</div>);
    }
    return (<ul className="forecast">
        {props.forecast.list.map(function(day){
            var date = new Date(day.dt * 1000).toDateString();
            return (
                <li key={day.dt.toString()}>
                    <i className={'wi wi-owm-'+ day.weather[0].id}></i>
                    <p>{date}</p>
                </li>);
        })}
    </ul>)
}

module.exports = Forecast;