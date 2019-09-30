import React, {Component} from 'react';
import '../../../scss/LoginForm/HeaderGiveThingBack.scss';
import decoration from '../../../assets/assets/Decoration.svg';
import LoginNavigation from "../../Navigation/LoginNavigation";

class HeaderGiveThingsBack extends Component {
    render() {
        return (
            <>

                <div className='main_form'>
                    <div className='photo_form'></div>
                    <div className='main_text_form'>
                        <LoginNavigation/>
                        <div className='main_box_form'>
                            <h2 style={{lineHeight: '10px'}}> Oddaj rzeczy, których już nie chcesz </h2>
                              <h2 style={{textTransform: 'uppercase'}}>  potrzebującym </h2>
                            <img src={decoration} style={{width: '180px'}}/>
                            <h3> Wystarczą 4 proste kroki </h3>
                            <div className='main_box_form_square'>
                                <div className='square'>
                                    <div className='inside'>
                                    <h4>1</h4>
                                    <p> Wybierz rzeczy </p>
                                    </div>
                                </div>
                                <div className='square'>
                                    <div className='inside'>
                                    <h4>2</h4>
                                    <p> Spakuj je w worki </p>
                                    </div>
                                </div>
                                <div className='square'>
                                    <div className='inside'>
                                    <h4>3</h4>
                                    <p> Wybierz fundację </p>
                                    </div>
                                </div>
                                <div className='square'>
                                    <div className='inside'>
                                    <h4>4</h4>
                                    <p> Zamów kuriera </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default HeaderGiveThingsBack