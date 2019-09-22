import React, {Component} from 'react';
import '../../../scss/ThreeColumns/ThreeColumns.scss'

class ThreeColumns extends Component {
    render() {
        return (
            <>
                <div className='three_columns'>
                    <div className='column'>
                        <h1>10</h1>
                        <h3>oddanych worków</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed varius mollis elit, in tempus est hendrerit ac.
                        </p>
                    </div>
                    <div className='column'>
                        <h1>5</h1>
                        <h3>wspartych organizacji</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed varius mollis elit, in tempus est hendrerit ac.
                        </p>
                    </div>
                    <div className='column'>
                        <h1>7</h1>
                        <h3>zorganizowanych zbiórek</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed varius mollis elit, in tempus est hendrerit ac.
                        </p>
                    </div>
                </div>
            </>
        )

    }
}

export default ThreeColumns