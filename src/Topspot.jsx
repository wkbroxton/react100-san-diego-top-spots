import React from 'react';

export default props => (
    <div className="spots well">
        <a href={`https://maps.google.com/?q=${props.location[0]},${props.location[1]}`}  
        // onClick={Hello}
        >
            <h4>{props.name}</h4>
            <p>{props.description}</p>
        </a>
    </div>
);
{/* <Link to={{ pathname: "https://maps.google.com/?q={this.props.location[0]},{this.props.location[1]" }} target="_blank" > */}
    {/* </Link> */}

    const Hello = () => {
        alert("Hello")
    }