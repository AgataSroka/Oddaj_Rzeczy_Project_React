import React, {Component} from 'react';
import '../../scss/Register/Register.scss';
import RegisterFirebase from './Firebase/RegisterFirebase/RegisterFirebase';
import { FirebaseContext } from './Firebase/RegisterFirebase/Firebase';

const emailReg = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;

class Register extends Component {
   render() {
       return(
           <FirebaseContext.Consumer>
               {firebase => <RegisterFirebase firebase={firebase} />}
           </FirebaseContext.Consumer>
       )
   }
}

export default Register;