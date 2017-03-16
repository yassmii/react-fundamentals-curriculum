var React = require('react')

function Search(props) {
    return (
        <form onSubmit={props.onSubmitUser}>
        <div className={props.style}>
            <input type="text" 
            onChange={props.onUpdateUser} 
            placeholder="Enter a city and a state"/>
            <button type="submit" className="btn btn-success">
                <i className="glyphicon glyphicon-search"></i> Search
                </button>
        </div>
        </form>
    )
}

module.exports = Search;