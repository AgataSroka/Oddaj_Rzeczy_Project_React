import React, {Component} from 'react';
import decoration from "../../assets/assets/Decoration.svg";
import Navigation from "../Navigation/Navigation";
import '../../scss/Rejestr/Rejestr.scss';

class Rejestr extends Component{
    render(){
        return(
            <>

                <section className='rejestr_main'>
                    <Navigation/>
                    <div className='rejestr_container'>
                        <h2> Załóż konto </h2>
                        <img src={decoration} style={{width: '180px'}}/>
                        <div className='rejestr_inputs'>
                            <div className='one_input_rejestr' >
                                <label>Email</label>
                                <input/>
                            </div>
                            <div className='one_input_rejestr'>
                                <label>Hasło</label>
                                <input/>
                            </div>
                            <div className='one_input_rejestr'>
                                <label>Powtórz hasło</label>
                                <input/>
                            </div>
                        </div>
                        <div className='login_buttons_rejestr'>
                            <input type='submit' value='Załóż konto'/>
                            <input type='submit' value='Zaloguj'/>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
export default Rejestr