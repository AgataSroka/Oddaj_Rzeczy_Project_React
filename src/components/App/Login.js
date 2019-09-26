import React, {Component} from 'react';
import '../../scss/Login/Login.scss';
import LoginFirebase from './Firebase/LoginFirebase/LoginFirebase';
import {FirebaseContext} from './Firebase/RegisterFirebase/Firebase_register';


class Login extends Component {
    render() {
        return (
            <FirebaseContext.Consumer>
                {firebase => <LoginFirebase firebase={firebase}/>}
            </FirebaseContext.Consumer>
        )
    }
};

export default Login;