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

        this.setState({errorEmail: false, errorPassword: false, sendForm: false });


        const {email, password} = this.state;


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
            .doSignInWithEmailAndPassword(this.state.email, this.state.password)
            .then(authUser => {
                console.log(authUser);
                sessionStorage.setItem("email",`${this.state.email}`);
                this.setState({email: '', password: ''});
                this.props.history.push("/");

            })
            .catch(error => {
                console.error(error.code);
                this.setState({error});

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
                                    <input onChange={this.handleEmailChange}/>
                                    {this.state.errorEmail &&
                                    <span className='form_valid'> Podany email jest nieprawidłowy! </span>}
                                </div>
                                <div className='one_input'>
                                    <label>Hasło</label>
                                    <input onChange={this.handlePasswordChange} type='password' autoComplete='on'/>
                                    {this.state.errorPassword &&
                                    <span className='form_valid'> Podane hasło jest za krótkie! </span>}
                                </div>
                            </div>
                            <div className='login_buttons'>
                                <button className='input input_border' type='submit'><NavLink exact to={"/rejestracja"}>Załóż konto</NavLink></button>
                                <button className='input input_border' type='submit'><NavLink exact to={"/zalogowano"}>Zaloguj</NavLink></button>
                            </div>
                        </form>
                    </div>
                </section>
            </>
        )
    }
};

export default LoginFirebase;