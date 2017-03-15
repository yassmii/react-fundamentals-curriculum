var React = require('react');
var Search = require('../components/Search');

var SearchContainer = React.createClass({
    render: function() {
        return (
            <div className="main-container">
                <div className="col-sm-6 col-md-offset-3 search-home">
                <Search style="col-sm-6 col-md-offset-3" inputStyle=""/>
                </div>

            </div>
            )
    }
})

module.exports = SearchContainer;