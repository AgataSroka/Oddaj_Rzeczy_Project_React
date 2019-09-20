import React, {Component} from 'react';
import '../../scss/App/App.scss';
import Home from "../Home/Home";
import {HashRouter, Switch, Route} from "react-router-dom";
import Login from "./Login";
import Rejestr from "./Register";
import Logout from "./Logout"


class App extends Component{
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route exact path={'/logowanie'} component={Login}/>
                    <Route exact path={'/rejestracja'} component={Rejestr}/>
                    <Route exact path={'/wylogowano'} component={Logout}/>
                </Switch>
            </HashRouter>
        );
    }
}
export default App;
