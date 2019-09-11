import React, {Component} from 'react';
import '../../scss/App/App.scss';
import Home from "../Home/Home";
import {HashRouter, Switch, Route} from "react-router-dom";
import Navigation from "../Navigation/Navigation";


class App extends Component{
    render() {
        return (
            <HashRouter>
                <Navigation/>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route exact path={'/logowanie'}/>
                    <Route exact path={'/rejestracja'}/>
                </Switch>
            </HashRouter>
        );
    }
}
export default App;
