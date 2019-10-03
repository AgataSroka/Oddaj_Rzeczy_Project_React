import React, {Component} from 'react';
import '../../../scss/LoginForm/StepOne.scss';
import '../../../scss/LoginForm/StepTwo.scss';
import StepThree from "./StepThree";


class StepFour extends Component{
    render(){
        return(
            <>
            <section className='important'>
                    <div className='important_text'>
                        <h2>Ważne!</h2>
                        <p> Podaj adres oraz termin odbioru rzeczy. </p>
                    </div>
                </section>
                <section className='StepTwo_main'>
                    <div className='StepTwo_photo'>
                        <div className='StepTwo_text'>
                            <h4> Krok 4/4 </h4>
                            <div className='options'>
                                <h2> Podaj adres oraz termin odbioru rzeczy przez kuriera </h2>
                            </div>
                            <div className='address_term' style={{display: 'flex', flexDirection: 'column'}}>
                                <div className='address'>
                                    <h2>Adres odbioru</h2>
                                    <label><input type='street'/>Ulica</label>
                                    <label> <input type='value'/>Miasto</label>
                                    <label><input type='value' />Kod pocztowy</label>
                                    <label><input type='phone' />Numer telefonu</label>
                                </div>
                                <div className='term'>
                                    <h2>Termin odbioru</h2>
                                    <label><input type='date'/>Data</label>
                                    <label> <input type='time'/>Godzina</label>
                                    <label><input type='textarea' />Uwagi dla klienta</label>
                                </div>
                            </div>
                            <div className='form_buttons'>
                                <button onClick={<StepThree/>}> Wstecz </button>
                                <button> Dalej</button>
                            </div>
                        </div>
                    </div>
                </section>
                </>
        )
    }
}
export default StepFour;