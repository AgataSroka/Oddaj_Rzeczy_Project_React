import React, {Component} from 'react';
import '../../scss/Navigation/Navigation.scss';
import {NavLink} from "react-router-dom";
import '../../scss/settings/_colors.scss';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class Navigation extends Component{
    render(){
        const selectedStyleLogin= {
            border: '1px solid #FAD648',

        };
        const styleLogin ={
            color:'#3C3C3C',
        };
        const styleMenu={
            border:'1px solid #3C3C3C',
        };
        const selectedStyleMenu={
              color: '#3C3C3C',
        };

        return(
            <nav>
                <ul className="login">
                    <li><NavLink style={styleLogin} activeStyle={selectedStyleLogin} exact to={"/logowanie"}>Zaloguj</NavLink></li>
                    <li><NavLink style={styleLogin} activeStyle={selectedStyleLogin} exact to={"/rejestracja"}>Załóż konto</NavLink></li>
                </ul>
                <ul className="menu">
                    <li><NavLink style={styleMenu} activeStyle={selectedStyleMenu} exact to={"/Start"}>Start</NavLink></li>
                    <li><Link style={styleMenu} activeStyle={selectedStyleMenu} to='SimpleSteps' spy={true} smooth={true} duration={500}>O co chodzi?</Link></li>
                    <li><Link style={styleMenu} activeStyle={selectedStyleMenu} to="AboutUs" spy={true} smooth={true} duration={500}>O Nas</Link></li>
                    <li><Link style={styleMenu} activeStyle={selectedStyleMenu}  to="WhoWeHelp" spy={true} smooth={true} duration={500}>Fundacja i organizacje</Link></li>
                    <li><Link style={styleMenu} activeStyle={selectedStyleMenu}  to="Contact" spy={true} smooth={true} duration={500}>Kontakt</Link></li>
                </ul>
            </nav>
        )

    }
}
export default Navigation;