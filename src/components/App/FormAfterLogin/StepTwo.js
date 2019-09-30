import React, {Component} from 'react';
import '../../../scss/LoginForm/StepTwo.scss'

class StepTwo extends Component {
    render() {
        return (
            <>
                <section className='StepTwo_main'>
                    <div className='StepTwo_photo'>
                        <div className='StepTwo_text'>
                            <h4> Krok 1/4 </h4>
                            <h2> Zaznacz co chcesz oddać: </h2>
                            <div className='options'>
                                <div className='choose_option'>
                                    <label><input type='checkbox'/>ubrania, które nadają się do ponownego użycia</label><br/>
                                    <label> <input type='checkbox'/>ubrania do wyrzucenia</label><br/>
                                    <label><input type='checkbox' />zabawki</label><br/>
                                    <label><input type='checkbox' />książki</label><br/>
                                    <label><input type='checkbox'/>inne</label>
                                </div>
                            </div>
                            <div className='form_buttons'>
                                <button> Dalej</button>
                            </div>
                        </div>
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
                                    <option className='select' value='' disabled hidden>- wybierz -</option>
                                    <option className='select'>1</option>
                                    <option className='select'>2</option>
                                    <option className='select'>3</option>
                                    <option className='select'>4</option>
                                    <option className='select'>5</option>
                                </select>
                                </div>
                        </div>
                        <div className='form_buttons'>
                         <button> Wstecz </button>
                         <button> Dalej</button>
                        </div>
                    </div>
                    </div>
                </section>
                <section className='StepTwo_main'>
                    <div className='StepTwo_photo'>
                        <div className='StepTwo_text'>
                            <h4> Krok 3/4 </h4>
                            <div className='options'>
                                            <h2> Lokalizacja: </h2>
                                                <div>
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
                            <div>
                                <h2>Komu chcesz pomóc?</h2>
                                <label><input type='checkbox'/>dzieciom</label>
                                <label> <input type='checkbox'/>samotnym matkom</label>
                                <label><input type='checkbox' />bezdomnym</label>
                                <label><input type='checkbox' />niepełnosprawnym</label>
                                <label><input type='checkbox'/>osobom starszym</label>
                            </div>
                            <label><input type='text'/>Wpisz nazwę konkretnej organizacji (opcjonalnie)</label>
                            <div className='form_buttons'>
                                <button> Wstecz </button>
                                <button> Dalej</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='StepTwo_main'>
                    <div className='StepTwo_photo'>
                        <div className='StepTwo_text'>
                            <h4> Krok 4/4 </h4>
                            <div className='options'>
                                <h2> Podaj adres oraz termin odbioru rzeczy przez kuriera </h2>
                            </div>
                            <div>
                                <h2>Adres odbioru</h2>
                                <label><input type='street'/>Ulica</label>
                                <label> <input type='value'/>Miasto</label>
                                <label><input type='value' />Kod pocztowy</label>
                                <label><input type='phone' />Numer telefonu</label>
                            </div>
                            <div>
                                <h2>Termin odbioru</h2>
                                <label><input type='date'/>Data</label>
                                <label> <input type='time'/>Godzina</label>
                                <label><input type='textarea' />Uwagi dla klienta</label>
                            </div>
                            <div className='form_buttons'>
                                <button> Wstecz </button>
                                <button> Dalej</button>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default StepTwo