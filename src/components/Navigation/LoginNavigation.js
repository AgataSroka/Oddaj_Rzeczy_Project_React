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
                    <li><NavLink style={styleMenu} exact to={'/O_co_chodzi'} >O co chodzi?</NavLink></li>
                    <li><NavLink style={styleMenu} exact to={"/O_nas"} >O nas</NavLink></li>
                    <li><NavLink style={styleMenu} exact to={"/Fundacje_i_organizacje"} >Fundacja i organizacje</NavLink></li>
                    <li><NavLink style={styleMenu} exact to="/Kontakt" >Kontakt</NavLink></li>
                </ul>
            </nav>
        )

    }
}

export default LoginNavigation;