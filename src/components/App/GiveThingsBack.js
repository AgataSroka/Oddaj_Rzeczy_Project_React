import React, {Component} from 'react';
import HeaderGiveThingsBack from '../App/FormAfterLogin/HeaderGiveThingsBack';
import StepOne from '../App/FormAfterLogin/StepOne';
import StepTwo from '../App/FormAfterLogin/StepTwo';


class GiveThingsBack extends Component{
    render() {
        return (
            <>
          <HeaderGiveThingsBack/>
          <StepOne/>
          </>
        );
    }
}
export default GiveThingsBack