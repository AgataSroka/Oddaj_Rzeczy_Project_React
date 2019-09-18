import React, {Component} from 'react';
import '../../../scss/Home/Local/Local.scss';

class Local extends Component{

    render(){
        return(
        <div className='main_section'>
            <div className='flex'>
                <div>
                    <h3>Fundacja "Dbam o zdrowie"</h3>
                    <p style={{fontStyle: 'italic'}}> Cel i misja: pomoc osobom znajdującym się w trudnej sytuacji życiowej. </p>
                </div>
                <div className='right_section'>
                    <p style={{marginLeft: '160px'}} >ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                </div>
            </div>
            <hr/>
            <div className='flex'>
                <div>
                    <h3>Fundacja "Dla dzieci"</h3>
                    <p style={{fontStyle: 'italic'}}> Cel i misja: Pomoc dzieciom z ubogich rodzin. </p>
                </div>
                <div className='right_section'>
                    <p  style={{marginLeft: '500px'}}>ubrania, meble, zabawki</p>
                </div>
            </div>
            <hr/>
            <div className='flex'>
                <div>
                    <h3>Fundacja "Bez domu"</h3>
                    <p style={{fontStyle: 'italic'}} > Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania. </p>
                </div>
                <div className='right_section'>
                    <p style={{marginLeft: '300px'}}>ubrania, jedzenie, ciepłe koce</p>
                </div>
            </div>
        </div>
        )

    }
}
export default Local