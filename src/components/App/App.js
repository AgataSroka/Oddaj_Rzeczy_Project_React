import React, {Component} from 'react';
import '../../scss/App/App.scss';
import Home from "../Home/Home";
import {HashRouter, Switch, Route} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";
import LoginSuccess from "./LoginSuccess";
import GiveThingsBack from "./GiveThingsBack";
import AboutUs from "../Home/AboutUs/AboutUs";
import SimpleSteps from "../Home/SimpleSteps/SimpleSteps";
import WhoWeHelp from "../Home/WhoWeHelp/WhoWeHelp";
import Contact from "../Home/Contact/Contact";


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
                    <Route exact path={'/oddaj-rzeczy'} component={GiveThingsBack}/>
                    <Route exact path={'/O_co_chodzi'} component={SimpleSteps}/>
                    <Route exact path={'/O_nas'} component={AboutUs}/>
                    <Route exact path={'/Fundacje_i_organizacje'} component={WhoWeHelp}/>
                    <Route exact path={'/Kontakt'} component={Contact}/>
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
