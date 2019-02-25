import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Hjem from "./components/Hjem";
import Anmodning from "./components/Anmodning";


class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Hjem}></Route>
                <Route exact path='/about' component={Anmodning}></Route>
            </Switch>
        );
    }
}

export default Router;
