import React, {Component} from 'react';
import '../../scss/Navigation/Navigation.scss';
import {NavLink} from "react-router-dom";
import '../../scss/settings/_colors.scss';
import {Link, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll'


class LoginNavigation extends Component {
    render() {
        const selectedStyleLogin = {
            border: '1px solid #FAD648',

        };
        const styleLogin = {
            color: '#3C3C3C',
            border: '1px solid #3C3C3C',
            padding: '5px 15px 5px 15px',
            textDecoration: 'none',
            fontWeight: 'bolder',
            fontSize: '14px'
        };
        const styleLoginRegister = {
            color: '#3C3C3C',
            textDecoration: 'none',
            padding: '5px',
            fontWeight: 'bolder',
            fontSize: '14px'
        };
        const styleMenuStart = {

            padding: '5px 15px 5px 15px',
            textDecoration: 'none',
            color: '#3C3C3C',
            fontWeight: 'bolder',
            fontSize: '14px'
        };
        const styleMenu = {

            textDecoration: 'none',
            fontWeight: 'bolder',
            fontSize: '14px',
            color: '#3C3C3C'
        };


        return (
            <nav>
                <ul className="login">
                    <li style={styleLoginRegister}> Cześć {sessionStorage.getItem("email")}! </li>
                    <li><NavLink style={styleLogin} activestyle={selectedStyleLogin} exact
                                 to={"/oddaj-rzeczy"}> Oddaj rzeczy </NavLink></li>
                    <li><NavLink style={styleLoginRegister}  exact to={"/wylogowano"}>Wyloguj</NavLink></li>
                </ul>
                <ul className="menu">
                    <li><NavLink style={styleMenuStart}  exact
                                 to={"/"}>Start</NavLink></li>
                    <li><Link style={styleMenu}  to='SimpleSteps' spy={true}
                              smooth={true} duration={500}>O co chodzi?</Link></li>
                    <li><Link style={styleMenu}  to="AboutUs" spy={true} smooth={true}
                              duration={500}>O nas</Link></li>
                    <li><Link style={styleMenu}  to="WhoWeHelp" spy={true} smooth={true}
                              duration={500}>Fundacja i organizacje</Link></li>
                    <li><Link style={styleMenu}  to="Contact" spy={true} smooth={true}
                              duration={500}>Kontakt</Link></li>
                </ul>
            </nav>
        )

    }
}

export default LoginNavigation;