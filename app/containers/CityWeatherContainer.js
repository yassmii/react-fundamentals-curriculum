var React = require('react');
var Weather = require('../components/Weather');
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
            this.setState({
                city: query.city,
                state: query.state,
                weatherOfDay: cityWeatherInfo.weather,
                forecast: cityWeatherInfo.forecast,
                isLoading: false
            });
        //console.log(this.state.weatherOfDay);                

        }.bind(this));


    },

    render: function() {
        return (
            <div className="main-container">            
                <div className="col-sm-6 col-md-offset-3 search-home">
                        <Weather isLoading={this.state.isLoading}
                        weatherInfo={this.state.weatherOfDay} />
                </div>
            </div>);
    }
});

module.exports = CityWeatherContainer;