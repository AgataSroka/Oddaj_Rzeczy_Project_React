import React, {Component} from 'react';
import decoration from "../../assets/assets/Decoration.svg";
import Navigation from "../Navigation/Navigation";
import '../../scss/Register/Register.scss';

const emailReg = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;

class Register extends Component {
    state = {
        email: '',
        password: '',
        password2: '',
        errorEmail: false,
        errorPassword: false,
        errorPassword2: false,
        sendForm: false
    };
    handleEmailChange = e => {
        this.setState({email: e.target.value});
    };
    handlePasswordChange = e => {
        this.setState({password: e.target.value});
    };
    handlePassword2Change = e => {
        this.setState({password2: e.target.value});
    };
    handleSubmit = e => {

        this.setState({errorEmail: false});
        this.setState({errorPassword: false});
        this.setState({errorPassword2: false});
        this.setState({sendForm: false});

        const email = this.state.email;
        const password = this.state.password;
        const password2 = this.state.password2;
        e.preventDefault();

        if (emailReg.test(email) && password.length >= 6 && password2 === password) {
            this.setState({sendForm: true})
        } else {
            if (!emailReg.test(email)) {
                this.setState({errorEmail: true})
            }
            if (password.length < 6) {
                this.setState({errorPassword: true})
            }
            if (password2 !== password) {
                this.setState({errorPassword2: true})
            }
        }
    };

    render() {
        return (
            <>

                <section className='register_main'>
                    <Navigation/>

                    <form className='register_container' onSubmit={this.handleSubmit}>
                        <div>
                            <h2> Załóż konto </h2>
                            <img src={decoration} style={{width: '180px'}}/>
                            <div className='register_inputs'>
                                <div className='one_input_register'>
                                    <label>Email</label>
                                    <input onChange={this.handleEmailChange}/>
                                    {this.state.errorEmail &&
                                    <span className='form_valid'> Podany email jest nieprawidłowy! </span>}
                                </div>
                                <div className='one_input_register'>
                                    <label>Hasło</label>
                                    <input onChange={this.handlePasswordChange}/>
                                    {this.state.errorPassword &&
                                    <span className='form_valid'> Podane hasło jest za krótkie! </span>}
                                </div>
                                <div className='one_input_register'>
                                    <label style={{marginLeft: '25px'}}>Powtórz hasło</label>
                                    <input onChange={this.handlePassword2Change}/>
                                    {this.state.errorPassword2 &&
                                    <span className='form_valid'> Musi być takie jak hasło! </span>}
                                </div>
                            </div>
                            <div className='register_buttons'>
                                <input className='input_border' type='submit' value='Załóż konto'/>
                                <input className='input_border' type='submit' value='Zaloguj'/>
                            </div>
                        </div>
                    </form>
                </section>
            </>
        )
    }
}

export default Register