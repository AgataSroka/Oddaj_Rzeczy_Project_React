import React, {Component} from 'react';
import HeaderGiveThingsBack from '../App/FormAfterLogin/HeaderGiveThingsBack';
import Steps from './FormAfterLogin/Steps';
import Contact from "../Home/Contact/Contact";



class GiveThingsBack extends Component{
    render() {
        return (
            <>
          <HeaderGiveThingsBack/>
          <Steps/>
          <Contact/>
          </>
        );
    }
}
export default GiveThingsBack