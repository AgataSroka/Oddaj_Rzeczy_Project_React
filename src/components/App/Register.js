import React, {Component} from 'react';
import '../../scss/Register/Register.scss';
import RegisterFirebase from './Firebase/RegisterFirebase/RegisterFirebase';
import { FirebaseContext } from './Firebase/RegisterFirebase/Firebase_register';


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