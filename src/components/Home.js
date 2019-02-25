import React, { Component } from 'react';
import Button from 'antd/lib/button';


class Home extends Component {
    render() {
        return (
            <div className='home'>
                <h1>Home</h1>
                <p> Feel free to browse around and learn more about me.</p>
                <Button type="primary">Button</Button>
            </div>
        );
    }
}

export default Home;
