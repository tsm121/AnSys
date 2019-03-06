import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import Request from "./components/Request";


class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/request' component={Request}></Route>
            </Switch>
        );
    }
}

export default Router;
