import React, {Component} from 'react';
import decoration from "../../assets/assets/Decoration.svg";
import Navigation from "../Navigation/Navigation";
import '../../scss/Login/Login.scss';

class Login extends Component{
    render(){
        return(
            <>

               <section className='login_main'>
                   <Navigation/>
                   <div className='login_container'>
                <h2> Zaloguj się </h2>
                <img src={decoration} style={{width: '180px'}}/>
                <div className='login_inputs'>
                    <div className='one_input' >
                    <label>Email</label>
                    <input/>
                    </div>
                    <div className='one_input'>
                    <label>Hasło</label>
                    <input/>
                    </div>
                </div>
                       <div className='login_buttons'>
                   <input type='submit' value='Załóż konto'/>
                   <input type='submit' value='Zaloguj'/>
                       </div>
                   </div>
               </section>
            </>
        )
    }
}
export default Login