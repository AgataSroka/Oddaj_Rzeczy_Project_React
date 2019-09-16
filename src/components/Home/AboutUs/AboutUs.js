import React,{Component} from 'react';
import '../../../scss/Home/AboutUs/AboutUs.scss'
import decoration from "../../../assets/assets/Decoration.svg";
import signature from '../../../assets/assets/Signature.svg';

class AboutUs extends Component{
    render(){
        return (
            <div className='about_us' name="AboutUs">
                <div className='about_text'>
                    <div className='text_2'>
                    <h2>O nas</h2>
                    <img src={decoration} style={{width: '180px'}}/>
                    <p> Nori grape silver beet broccoli kombu beet greans fava bean potato quandong celery .
                        Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                    </p>
                        <img src={signature} style={{width: '150px', paddingLeft: '300px'}}/>
                    </div>
                </div>
                <div className='about_photo'></div>
            </div>
        )
    }
}
export default AboutUs