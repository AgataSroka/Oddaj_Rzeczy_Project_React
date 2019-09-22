import React, {Component} from 'react';
import facebook from "../../../assets/assets/Facebook.svg";
import instagram from "../../../assets/assets/Instagram.svg";
import '../../../scss/Home/Footer/Footer.scss'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className='footer_main'>
                    <p>Copyright by Coders Lab</p>
                    <div className='icons'>
                        <img src={facebook} style={{width: '20px'}}/>
                        <img src={instagram} style={{width: '20px', paddingLeft: '15px'}}/>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer