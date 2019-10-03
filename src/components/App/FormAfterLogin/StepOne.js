import React, {Component} from 'react';
import '../../../scss/LoginForm/StepOne.scss';
import '../../../scss/LoginForm/StepTwo.scss';
import StepTwo from "./2";

class StepOne extends Component {
    render() {
        return (
            <>
                <section className='important'>
                    <div className='important_text'>
                        <h2>Ważne!</h2>
                        <p> Uzupełnij szcegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu nalepiej je
                            przekazać. </p>
                    </div>
                </section>
                <section className='StepTwo_main'>
                    <div className='StepTwo_photo'>
                        <div className='StepTwo_text'>
                            <h4> Krok 1/4 </h4>
                            <h2> Zaznacz co chcesz oddać: </h2>
                            <div className='options'>
                                <div className='choose_option'>
                                    <label><input type='checkbox'/>ubrania, które nadają się do ponownego użycia</label><br/>
                                    <label> <input type='checkbox'/>ubrania do wyrzucenia</label><br/>
                                    <label><input type='checkbox'/>zabawki</label><br/>
                                    <label><input type='checkbox'/>książki</label><br/>
                                    <label><input type='checkbox'/>inne</label>
                                </div>
                            </div>
                            <div className='form_buttons'>
                                <button onClick={<StepTwo/>}> Dalej</button>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default StepOne;