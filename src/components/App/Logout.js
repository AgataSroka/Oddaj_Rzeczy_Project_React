import React, {Component} from 'react';
import decoration from "../../assets/assets/Decoration.svg";
import Navigation from "../Navigation/Navigation";
import "../../scss/Logout/Logout.scss";


class Logout extends Component{
    render(){
        return(
            <>

                <section className='logout_main'>
                    <Navigation/>
                    <div className='logout_container'>
                        <h2> Wylogowanie nastąpiło <br/> pomyślnie! </h2>
                        <img src={decoration} style={{width: '180px'}}/>
                        <br/>
                        <input type='submit' value='Strona główna'/>
                    </div>
                </section>
            </>
        )
    }
}
export default Logout