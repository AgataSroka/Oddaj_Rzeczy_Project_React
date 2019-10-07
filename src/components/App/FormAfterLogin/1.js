import React, {Component} from 'react';
import '../../../scss/LoginForm/Steps_One.scss'

class StepOne extends Component {
    render() {
        return (
            <>
                <section className='important'>
                    <div className='important_text'>
                        <h2>Ważne!</h2>
                        <p> Uzupełnij szcegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu nalepiej je przekazać. </p>
                    </div>
                </section>
                {/*<section className='important'>*/}
                {/*    <div className='important_text'>*/}
                {/*        <h2>Ważne!</h2>*/}
                {/*        <p> Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować*/}
                {/*            rzeczy znajdziesz TUTAJ.</p>*/}
                {/*    </div>*/}
                {/*</section>*/}
                {/*<section className='important'>*/}
                {/*    <div className='important_text'>*/}
                {/*        <h2>Ważne!</h2>*/}
                {/*        <p> Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce.*/}
                {/*            Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*</section>*/}
                {/*<section className='important'>*/}
                {/*    <div className='important_text'>*/}
                {/*        <h2>Ważne!</h2>*/}
                {/*        <p> Podaj adres oraz termin odbioru rzeczy. </p>*/}
                {/*    </div>*/}
                {/*</section>*/}
            </>
        )
    }
}

export default StepOne