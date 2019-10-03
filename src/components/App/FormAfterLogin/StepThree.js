import React, {Component} from 'react';
import '../../../scss/LoginForm/StepOne.scss';
import '../../../scss/LoginForm/StepTwo.scss';
import StepTwo from "./StepTwo";
import StepFour from "./StepFour";

class StepThree extends Component{
    constructor() {
        super();
        this.state = {render: ''}
    }
    handleClick(button){
        this.setState({render:button});
    }
    _renderButton() {
        switch(this.state.render){
            case 'stepTwo': return <StepTwo/>;
            case 'stepFour': return <StepFour/>
        }
    }
    render(){
        return(
            <>
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
                                <input type="checkbox" name="s-size" id="small" className='checkbox_select'/>
                                <input type="checkbox" name="s-size" id="medium" className='checkbox_select'/>
                                <input type="checkbox" name="s-size" id="large" className='checkbox_select'/>
                                <input type="checkbox" name="s-size" id="x-large" className='checkbox_select'/>
                                <input type="checkbox" name="s-size" id="xx-large" className='checkbox_select' />

                                <label htmlFor="small" className='label_step3'>dzieciom</label>
                                <label htmlFor="medium" className='label_step3'>samotnym matkom</label>
                                <label htmlFor="large" className='label_step3'>bezdomnym</label>
                                <label htmlFor="x-large" className='label_step3' >niepełnosprawnym</label>
                                <label htmlFor="xx-large" className='label_step3' >osobom starszym</label>
                            </div>
                            <div style={{display: 'block', marginTop: '30px'}}>
                                <label>Wpisz nazwę konkretnej organizacji (opcjonalnie)</label><br/>
                                <input type='text' style={{width: '350px'}}/>
                            </div>
                            <div className='form_buttons'>
                                <button onClick={this.handleClick.bind(this, 'stepTwo')}> Wstecz </button>
                                <button onClick={this.handleClick.bind(this, 'stepFour')}> Dalej</button>
                                {this._renderButton()}
                            </div>
                        </div>
                    </div>
                </section>
                </>
        )
    }
}
export default StepThree;