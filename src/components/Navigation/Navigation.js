import React, {Component} from 'react';
import '../../scss/Navigation/Navigation.scss';
import {NavLink} from "react-router-dom";
import '../../scss/settings/_colors.scss';


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
            <nav className='container'>
                <ul className="login">
                    <li><NavLink style={styleLogin} activeStyle={selectedStyleLogin} exact to={"/logowanie"}>Zaloguj</NavLink></li>
                    <li><NavLink style={styleLogin} activeStyle={selectedStyleLogin} exact to={"/rejestracja"}>Załóż konto</NavLink></li>
                </ul>
                <ul className="menu">
                    <li><NavLink style={styleMenu} activeStyle={selectedStyleMenu} exact to={"/Start"}>Start</NavLink></li>
                    <li><NavLink style={styleMenu} activeStyle={selectedStyleMenu} to={"/O_co_chodzi"}>O co chodzi?</NavLink></li>
                    <li><NavLink style={styleMenu} activeStyle={selectedStyleMenu} to={"/O_nas"}>O Nas</NavLink></li>
                    <li><NavLink style={styleMenu} activeStyle={selectedStyleMenu}  to={"/Fundacja_i_organizacje"}>Fundacja i organizacje</NavLink></li>
                    <li><NavLink style={styleMenu} activeStyle={selectedStyleMenu}  to={"/Kontakt"}>Kontakt</NavLink></li>
                </ul>
            </nav>
        )

    }
}
export default Navigation;