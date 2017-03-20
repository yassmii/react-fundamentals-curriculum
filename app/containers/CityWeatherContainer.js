var React = require('react');
var Weather = require('../components/Weather');
var Forecast = require('../components/Forecast');
var openWeatherHelper = require('../utils/openWeatherHelper');

var CityWeatherContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        return {
            city: '',
            state: '',
            weatherOfDay: '',
            forecast: '',
            isLoading: true
            
        }
    },
    componentDidMount: function() {
        var query = this.props.location.query;
        openWeatherHelper.getCityWeather([query.city, query.state])
        .then(function(cityWeatherInfo){
            cityWeatherInfo.forecast.list.splice(0,1);
            this.setState({
                city: query.city,
                state: query.state,
                weatherOfDay: cityWeatherInfo.weather,
                forecast: cityWeatherInfo.forecast,
                isLoading: false
            });
        }.bind(this));


    },

    render: function() {
        return (
            <div className="main-container">            
                <div className="col-md-6 col-md-offset-4 weather-container">
                        <Weather 
                        isLoading={this.state.isLoading}
                        city={this.state.city}
                        state={this.state.state}
                        weatherInfo={this.state.weatherOfDay}
                        />
                </div>
                <div className="col-md-9 col-md-offset-2 forecast-container">
                    <h2>Forecast</h2>
                    <Forecast
                    isLoading={this.state.isLoading}
                    forecast={this.state.forecast}/>
                </div>
            </div>);
    }
});

module.exports = CityWeatherContainer;