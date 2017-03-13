var React = require('react');
var Search = require('../components/Search');

var SearchContainer = React.createClass({
    render: function() {
        return (
            <div className="main-container">
                <Search style="col-sm-6 col-md-offset-2"/>
            </div>
            )
    }
})

module.exports = SearchContainer;