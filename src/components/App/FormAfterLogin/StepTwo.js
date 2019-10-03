import React, {Component} from 'react';
import '../../../scss/LoginForm/StepOne.scss';
import '../../../scss/LoginForm/StepTwo.scss';

class StepTwo extends Component {
    render() {
        return (
            <>
                <section className='important'>
                    <div className='important_text'>
                        <h2>Ważne!</h2>
                        <p> Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować
                            rzeczy znajdziesz TUTAJ.</p>
                    </div>
                </section>
                <section className='StepTwo_main'>
                    <div className='StepTwo_photo'>
                        <div className='StepTwo_text'>
                            <h4> Krok 2/4 </h4>
                            <h2> Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy: </h2>
                            <div className='options'>
                                <p> Liczba 60l worków: </p>
                                <div>
                                    <select className='select_option'>
                                        <option className='select' value=''>- wybierz -</option>
                                        <option className='select'>1</option>
                                        <option className='select'>2</option>
                                        <option className='select'>3</option>
                                        <option className='select'>4</option>
                                        <option className='select'>5</option>
                                    </select>
                                </div>
                            </div>
                            <div className='form_buttons'>
                                <button> Wstecz</button>
                                <button> Dalej</button>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default StepTwo;