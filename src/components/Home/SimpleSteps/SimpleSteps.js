import React, {Component} from 'react';
import decoration from "../../../assets/assets/Decoration.svg";
import icon_1 from "../../../assets/assets/Icon-1.svg";
import icon_2 from "../../../assets/assets/Icon-2.svg";
import icon_3 from "../../../assets/assets/Icon-3.svg";
import icon_4 from "../../../assets/assets/Icon-4.svg";
import '../../../scss/Home/SimpleSteps/SimpleSteps.scss';

class SimpleSteps extends Component{
    render(){
        return(
            <div className='simple_steps_1 background' name="SimpleSteps">
                <div className='main_text'>
                <h1>Wystarczą 4 proste kroki</h1>
                <img src={decoration} style={{width: '200px'}}/>
                </div>
                <div className='background'>
                    <div className='simple_steps_2'>
                    <div className='one_step'>
                        <img src={icon_1} style={{width: '50px'}}/>
                        <h3>wybierz rzeczy</h3>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className='one_step'>
                        <img src={icon_2} style={{width: '50px'}}/>
                        <h3>Spakuj je</h3>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>
                    <div className='one_step'>
                        <img src={icon_3} style={{width: '50px'}}/>
                        <h3>zdecyduj komu chcesz pomóc</h3>
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div className='one_step'>
                        <img src={icon_4} style={{width: '50px'}}/>
                        <h3>Zamów kuriera</h3>
                        <p>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                    </div>

                    </div>
                <button>oddaj rzeczy</button>
                </div>
        )
    }
}
export default SimpleSteps