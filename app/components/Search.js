var React = require('react')

function Search(props) {
    return (
        <div className={props.style}>
            <input type="text" className={props.inputStyle} placeholder="Enter a city and a state"/>
            <button type="submit" className="btn btn-block btn-success">
                <i className="glyphicon glyphicon-search"></i> Search
                </button>
        </div>
    )
}

module.exports = Search;