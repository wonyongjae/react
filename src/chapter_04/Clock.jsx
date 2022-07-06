import React from "react";

function Clock(props){
    return (
        <div>
            <h1>hi, react!</h1>
            <h2>current time is {new Date().toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock;