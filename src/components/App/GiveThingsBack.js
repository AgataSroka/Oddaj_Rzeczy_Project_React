import React, {Component} from 'react';
import HeaderGiveThingsBack from "./FormAfterLogin/HeaderGiveThingsBack";
import StepOne from "./FormAfterLogin/StepOne";
import StepTwo from "./FormAfterLogin/StepTwo";

class GiveThingsBack extends Component{
    render() {
        return (
            <>
          <HeaderGiveThingsBack/>
          <StepOne/>
          <StepTwo/>
          </>
        );
    }
}
export default GiveThingsBack