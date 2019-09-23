import React, {Component} from 'react';
import decoration from "../../../../assets/assets/Decoration.svg";
import Navigation from "../../../Navigation/Navigation";
import {NavLink} from "react-router-dom";

const emailReg = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;

class LoginFirebase extends Component {
    state = {
        email: '',
       password: '',
        errorEmail: false,
        errorPassword: false,
        sendForm: false
    };
    handleEmailChange = e => {
        this.setState({email: e.target.value});
    };
    handlePasswordChange = e => {
        this.setState({password: e.target.value});
    };
    handleSubmit = e => {

        this.setState({errorEmail: false});
        this.setState({errorPassword: false});
        this.setState({sendForm: false});

        const email = this.state.email;
        const password = this.state.password;
        e.preventDefault();

        if (emailReg.test(email) && password.length >= 6) {
            this.setState({sendForm: true})
        } else {
            if (!emailReg.test(email)) {
                this.setState({errorEmail: true})
            }
            if (password.length < 6) {
                this.setState({errorPassword: true})
            }
        }
        this.props.firebase
            .doCreateUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(authUser => {
                this.setState({email:'', password:''});
                console.log('gicik')
            })
            .catch(error => {
                this.setState({ error });
                console.log(error)
            });
    };

    render() {
        return (
            <>

                <section className='login_main'>
                    <Navigation/>
                    <div className='login_container'>
                        <form onSubmit={this.handleSubmit}>
                            <h2> Zaloguj się </h2>
                            <img src={decoration} style={{width: '180px'}}/>
                            <div className='login_inputs'>
                                <div className='one_input'>
                                    <label>Email</label>
                                    <input onChange={this.handleEmailChange} type='password'/>
                                    {this.state.errorEmail &&
                                    <span className='form_valid'> Podany email jest nieprawidłowy! </span>}
                                </div>
                                <div className='one_input'>
                                    <label>Hasło</label>
                                    <input onChange={this.handlePasswordChange} type='password'/>
                                    {this.state.errorPassword &&
                                    <span className='form_valid'> Podane hasło jest za krótkie! </span>}
                                </div>
                            </div>
                            <div className='login_buttons'>
                                <button className='input input_border' type='submit'><NavLink exact to={"/rejestracja"}>Załóż konto</NavLink></button>
                                <button className='input input_border' type='submit'><NavLink exact to={"/logowanie"}>Zaloguj</NavLink></button>
                            </div>
                        </form>
                    </div>
                </section>
            </>
        )
    }
};

export default LoginFirebase;