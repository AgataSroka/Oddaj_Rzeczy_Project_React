import React, {Component} from 'react';
import '../../scss/App/App.scss';
import Home from "../Home/Home";
import {HashRouter, Switch, Route} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";
import LoginSuccess from "./LoginSuccess";


class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route exact path={'/logowanie'} component={Login}/>
                    <Route exact path={'/zalogowano'} component={LoginSuccess}/>
                    <Route exact path={'/rejestracja'} component={Register}/>
                    <Route exact path={'/wylogowano'} component={Logout}/>
                    <Route exact path={'/oddaj-rzeczy'} component={Logout}/>
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
