var React = require('react');
var SearchContainer = require ('../containers/SearchContainer');
require('../main.css');

function Home() {
    return (
    <div className="home">
        <SearchContainer />
    </div>);
};

module.exports = Home;