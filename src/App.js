import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Navigation from "./components/Navigation";
import Router from "./Router";

import { Row, Col } from 'antd';


class App extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Navigation/>
                    </Col>
                    <Col style={{padding:"2em"}}>
                        <Router/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
