import React, {Component} from 'react';
import decoration from "../../assets/assets/Decoration.svg";
import Navigation from "../Navigation/Navigation";
import "../../scss/Logout/Logout.scss";
import {NavLink} from "react-router-dom";


class Logout extends Component {
    render() {
        return (
            <>

                <section className='logout_main'>
                    <Navigation/>
                    <div className='logout_container'>
                        <h2> Wylogowanie nastąpiło <br/> pomyślnie! </h2>
                        <img src={decoration} style={{width: '180px'}}/>
                        <br/>
                        <button type='submit'><NavLink exact to={"/"}>Start</NavLink></button>
                    </div>
                </section>
            </>
        )
    }
}

export default Logout