var React = require('react');
var SearchContainer = require ('../containers/SearchContainer');
require('../main.css');

function Home() {
    return (
    <div className="home">
    <svg width="200" height="200" viewBox="0 0 200 200">
    <defs>
        <mask id="mask" x="0" y="0" width="120" height="120">
        <circle cx="100" cy="50" r="50" fill="#fff"/>
        <path id="path1" d="m -15 0 a 15.267858,12.428572 0 1 1 30.53572,0 15.267858,12.428572 0 1 1 -30.53572,0 z" />
        <circle cx="100" cy="50" r="16">
        <animateMotion 
            begin="0s" 
            dur="3s" 
            repeatCount="indefinite">
            <mpath xlinkHref="#path1" />
        </animateMotion>                    
        </circle>
        </mask>
    </defs>
    <circle cx="100" cy="50" r="30" mask="url(#mask)" fillOpacity="1"/>
    </svg>
        <SearchContainer />
    </div>);
};

module.exports = Home;