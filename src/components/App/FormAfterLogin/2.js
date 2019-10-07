import React, {Component} from 'react';
import '../../../scss/LoginForm/StepTwo.scss'

class StepTwo2 extends Component {
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
                {/*<section className='StepTwo_main'>*/}
                {/*    <div className='StepTwo_photo'>*/}
                {/*    <div className='StepTwo_text'>*/}
                {/*        <h4> Krok 2/4 </h4>*/}
                {/*        <h2> Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy: </h2>*/}
                {/*        <div className='options'>*/}
                {/*            <p> Liczba 60l worków: </p>*/}
                {/*                <div>*/}
                {/*                <select className='select_option'>*/}
                {/*                    <option className='select' value='' >- wybierz -</option>*/}
                {/*                    <option className='select'>1</option>*/}
                {/*                    <option className='select'>2</option>*/}
                {/*                    <option className='select'>3</option>*/}
                {/*                    <option className='select'>4</option>*/}
                {/*                    <option className='select'>5</option>*/}
                {/*                </select>*/}
                {/*                </div>*/}
                {/*        </div>*/}
                {/*        <div className='form_buttons'>*/}
                {/*         <button> Wstecz </button>*/}
                {/*         <button> Dalej</button>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
                {/*<section className='StepTwo_main'>*/}
                {/*    <div className='StepTwo_photo'>*/}
                {/*        <div className='StepTwo_text'>*/}
                {/*            <h4> Krok 3/4 </h4>*/}
                {/*            <div className='options_step3'>*/}
                {/*                            <h2> Lokalizacja: </h2>*/}
                {/*                                <div className='select_box_step3'>*/}
                {/*                                <select className='select_option'>*/}
                {/*                                    <option className='select'>- wybierz -</option>*/}
                {/*                                    <option className='select'>Poznań</option>*/}
                {/*                                    <option className='select'>Warszawa</option>*/}
                {/*                                    <option className='select'>Kraków</option>*/}
                {/*                                    <option className='select'>Wrocław</option>*/}
                {/*                                    <option className='select'>Katowice</option>*/}
                {/*                                </select>*/}
                {/*                                </div>*/}
                {/*                        </div>*/}

                {/*            <div className='select_checkbox_step3'>*/}
                {/*                <h2>Komu chcesz pomóc?</h2>*/}
                {/*                <input type="checkbox" name="s-size" id="small" className='checkbox_select'/>*/}
                {/*                <input type="checkbox" name="s-size" id="medium" className='checkbox_select'/>*/}
                {/*                <input type="checkbox" name="s-size" id="large" className='checkbox_select'/>*/}
                {/*                <input type="checkbox" name="s-size" id="x-large" className='checkbox_select'/>*/}
                {/*                <input type="checkbox" name="s-size" id="xx-large" className='checkbox_select' />*/}

                {/*                <label htmlFor="small" className='label_step3'>dzieciom</label>*/}
                {/*                <label htmlFor="medium" className='label_step3'>samotnym matkom</label>*/}
                {/*                <label htmlFor="large" className='label_step3'>bezdomnym</label>*/}
                {/*                <label htmlFor="x-large" className='label_step3' >niepełnosprawnym</label>*/}
                {/*                <label htmlFor="xx-large" className='label_step3' >osobom starszym</label>*/}
                {/*            </div>*/}
                {/*            <div style={{display: 'block', marginTop: '30px'}}>*/}
                {/*            <label>Wpisz nazwę konkretnej organizacji (opcjonalnie)</label><br/>*/}
                {/*                <input type='text' style={{width: '350px'}}/>*/}
                {/*            </div>*/}
                {/*            <div className='form_buttons'>*/}
                {/*                <button> Wstecz </button>*/}
                {/*                <button> Dalej</button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
                {/*<section className='StepTwo_main'>*/}
                {/*    <div className='StepTwo_photo'>*/}
                {/*        <div className='StepTwo_text'>*/}
                {/*            <h4> Krok 4/4 </h4>*/}
                {/*            <div className='options'>*/}
                {/*                <h2> Podaj adres oraz termin odbioru rzeczy przez kuriera </h2>*/}
                {/*            </div>*/}
                {/*            <div className='address_term' style={{display: 'flex', flexDirection: 'column'}}>*/}
                {/*            <div className='address'>*/}
                {/*                <h2>Adres odbioru</h2>*/}
                {/*                <label><input type='street'/>Ulica</label>*/}
                {/*                <label> <input type='value'/>Miasto</label>*/}
                {/*                <label><input type='value' />Kod pocztowy</label>*/}
                {/*                <label><input type='phone' />Numer telefonu</label>*/}
                {/*            </div>*/}
                {/*            <div className='term'>*/}
                {/*                <h2>Termin odbioru</h2>*/}
                {/*                <label><input type='date'/>Data</label>*/}
                {/*                <label> <input type='time'/>Godzina</label>*/}
                {/*                <label><input type='textarea' />Uwagi dla klienta</label>*/}
                {/*            </div>*/}
                {/*            </div>*/}
                {/*            <div className='form_buttons'>*/}
                {/*                <button> Wstecz </button>*/}
                {/*                <button> Dalej</button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
            </>
        )
    }
}

export default StepTwo2