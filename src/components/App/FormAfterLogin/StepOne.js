import React, {Component} from 'react';
import '../../../scss/LoginForm/StepOne.scss';
import '../../../scss/LoginForm/StepTwo.scss';


class StepOne extends Component {
    state = {
        valueOfInput: null,
        stepOne: true,
        stepTwo: false,
        stepThree: false,
        stepFour: false,
        counter: 1

    };
    handleOnClick = e => {
        this.setState({valueOfInput: e.target.value});
    };
    // handleButtonPrev = () =>{
    //     this.setState()
    // }
    handleButtonNext = () =>{
        this.setState({stepTwo: true});
        console.log('stepTwo');
        this.setState({counter: this.setState.counter+1 });

    };

    render() {
        let valueOfInput = this.state.valueOfInput;
        console.log(valueOfInput);
        let counter = this.state.counter;
        let stepOne = <>
            <section className='important'>
                <div className='important_text'>
                    <h2>Ważne!</h2>
                    <p> Uzupełnij szcegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu nalepiej
                        je
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
                                <label><input type='checkbox' onClick={this.handleOnClick}/>ubrania, które nadają się do ponownego
                                    użycia</label><br/>
                                <label> <input type='checkbox' onClick={this.handleOnClick}/>ubrania do
                                    wyrzucenia</label><br/>
                                <label><input type='checkbox' onClick={this.handleOnClick}/>zabawki</label><br/>
                                <label><input type='checkbox' onClick={this.handleOnClick} />książki</label><br/>
                                <label><input type='checkbox' onClick={this.handleOnClick} />inne</label>
                            </div>
                        </div>
                        <div className='form_buttons'>
                            <button onClick={this.handleButtonNext}> Dalej</button>
                        </div>
                    </div>
                </div>
            </section>
        </>;
        let stepTwo = <>
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
        </>;
        let stepThree = <>
            <section className='important'>
                <div className='important_text'>
                    <h2>Ważne!</h2>
                    <p> Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce.
                        Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.
                    </p>
                </div>
            </section>
            <section className='StepTwo_main'>
                <div className='StepTwo_photo'>
                    <div className='StepTwo_text'>
                        <h4> Krok 3/4 </h4>
                        <div className='options_step3'>
                            <h2> Lokalizacja: </h2>
                            <div className='select_box_step3'>
                                <select className='select_option'>
                                    <option className='select'>- wybierz -</option>
                                    <option className='select'>Poznań</option>
                                    <option className='select'>Warszawa</option>
                                    <option className='select'>Kraków</option>
                                    <option className='select'>Wrocław</option>
                                    <option className='select'>Katowice</option>
                                </select>
                            </div>
                        </div>

                        <div className='select_checkbox_step3'>
                            <h2>Komu chcesz pomóc?</h2>
                            <input type="checkbox" name="1" id="small" className='checkbox_select'/>
                            <input type="checkbox" name="s-size" id="medium" className='checkbox_select'/>
                            <input type="checkbox" name="s-size" id="large" className='checkbox_select'/>
                            <input type="checkbox" name="s-size" id="x-large" className='checkbox_select'/>
                            <input type="checkbox" name="s-size" id="xx-large" className='checkbox_select'/>

                            <label htmlFor="small" className='label_step3'>dzieciom</label>
                            <label htmlFor="medium" className='label_step3'>samotnym matkom</label>
                            <label htmlFor="large" className='label_step3'>bezdomnym</label>
                            <label htmlFor="x-large" className='label_step3'>niepełnosprawnym</label>
                            <label htmlFor="xx-large" className='label_step3'>osobom starszym</label>
                        </div>
                        <div style={{display: 'block', marginTop: '30px'}}>
                            <label>Wpisz nazwę konkretnej organizacji (opcjonalnie)</label><br/>
                            <input type='text' style={{width: '350px'}}/>
                        </div>
                        <div className='form_buttons'>
                            <button> Wstecz</button>
                            <button> Dalej</button>
                        </div>
                    </div>
                </div>
            </section>
        </>;
        let stepFour = <>
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
                                <label><input type='value'/>Kod pocztowy</label>
                                <label><input type='phone'/>Numer telefonu</label>
                            </div>
                            <div className='term'>
                                <h2>Termin odbioru</h2>
                                <label><input type='date'/>Data</label>
                                <label> <input type='time'/>Godzina</label>
                                <label><input type='textarea'/>Uwagi dla klienta</label>
                            </div>
                        </div>
                        <div className='form_buttons'>
                            <button> Wstecz</button>
                            <button> Dalej</button>
                        </div>
                    </div>
                </div>
            </section>
        </>;

        return stepOne
        if (counter === 2 && valueOfInput !== null) {
            return stepTwo
        } else if (counter === 3 && valueOfInput !== null) {
            return stepThree
        } else if (counter === 4 && valueOfInput !== null) {
            return stepFour
        } else {
            return stepOne
        }

    }

}

export default StepOne;