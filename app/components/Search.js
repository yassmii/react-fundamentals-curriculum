var React = require('react')

function Search(props) {
    return (
        <div>
            <input type="text" placeholder="Enter a city and a state"/>
            <button type="submit" className="btn btn-block btn-success">
                Search
                </button>
        </div>
    )
}

module.exports = Search;