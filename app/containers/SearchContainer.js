var React = require('react');
var Search = require('../components/Search');
var openWeatherHelper = require('../utils/openWeatherHelper');

var SearchContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        return {
            city: '',
            state: ''
        }
    },

    handleUpdateUser: function(e) {
        this.setState ({
            city: e.target.value.split(',')[0],
            state: e.target.value.split(',')[1]
        })
    },
    handleSubmitUser: function(e) {
        e.preventDefault();
        var city = this.state.city;
        var state = this.state.state;
        this.context.router.push({
            pathname:'/weazoru',
            query: {
                city: city,
                state: state
            }
        })
    },
    render: function() {
        return (
            <div className="main-container">
                <div className="col-sm-6 col-md-offset-3 search-home">
                    <h1> Weazoru Search Channel </h1>
                    <Search style="col-sm-6 col-md-offset-3"
                    onUpdateUser={this.handleUpdateUser}
                    onSubmitUser={this.handleSubmitUser}/>
                </div>

            </div>
            )
    }
})

module.exports = SearchContainer;