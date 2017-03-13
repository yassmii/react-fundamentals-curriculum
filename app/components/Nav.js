var React = require('react');
var Search = require('./Search');

var Nav = React.createClass({
    render: function() {
        return (<div className="main">
            <div className="nav-tab">
                <div className="navbar-header">
                    <span className="navbar-brand">Weazoru</span>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <Search style="navbar-right" />
                </div>
            </div>
            {this.props.children}
        </div>)
        
    }
})

module.exports = Nav;