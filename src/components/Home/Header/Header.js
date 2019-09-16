import React, {Component} from 'react';
import '../../../scss/Home/Header/Header.scss';
import decoration from '../../../assets/assets/Decoration.svg';
import {NavLink} from "react-router-dom";
import Navigation from "../../Navigation/Navigation";

class Header extends Component{
    render(){
        const style_button= {
            border: '1px solid #FAD648',
        };
        return(
            <>

                <div className='main'>
                    <div className='photo'></div>
                    <div className='main_text'>
                        <Navigation/>
                        <div className='main_box'>
                            <h2> Zacznij pomagać! <br/>
                               Oddaj niechciane rzeczy w zaufane ręce
                            </h2>
                              <img src={decoration} style={{width: '180px'}}/>
                           <div className='main_button'>
                             <button><NavLink  activeStyle={style_button} to={'/logowanie'}>oddaj <br/> rzeczy</NavLink></button>
                             <button><NavLink  activeStyle={style_button} to={'/logowanie'}>zorganizuj zbiórkę</NavLink></button>
                           </div>
                        </div>
                   </div>
               </div>
            </>
        )
    }
}

export default Header