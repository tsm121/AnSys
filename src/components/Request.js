import React, { Component } from 'react';
import RequestSelector from "./RequestSelector";

class Request extends Component {
    render() {
        return (
            <div className='home'>
                <h1>About</h1>
                <p> Feel free to browse around and learn more about me.</p>

                <RequestSelector/>
            </div>
        );
    }
}

export default Request;
