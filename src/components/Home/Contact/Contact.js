import React, {Component} from 'react';
import '../../../scss/Home/Contact/Contact.scss'
import decoration from "../../../assets/assets/Decoration.svg";
import facebook from "../../../assets/assets/Facebook.svg";
import instagram from "../../../assets/assets/Instagram.svg";

class Contact extends Component{
    render(){
        return(

            <div className='contact' name="Contact">
              <div className='main_contact'>
                  <h2>Skontaktuj się z nami</h2>
                  <img src={decoration} style={{width: '180px'}}/>
                  <form>
                      <div className='form_flex'>
                          <div style={{display: 'block'}}>
                          <label>Wpisz swoje imię</label> <br/>
                           <input type='text' placeholder='Krzysztof'/>
                          </div>
                          <div style={{display: 'block'}}>
                          <label>Wpisz swój e-mail</label> <br/>
                           <input type='text' placeholder='abc@xyz.pl'/>
                          </div>
                      </div>
                         <label style={{marginRight: '240px'}}>Wpisz swoją wiadomość</label> <br/>
                         <textarea cols='50' rows='4' placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur."
                                                />
                  </form>
                  <button>Wyślij</button>
              </div>
                <footer>
                    <p>Copyright by Coders Lab</p>
                    <div className='icons'>
                        <img src={facebook} style={{width: '20px'}}/>
                        <img src={instagram} style={{width: '20px'}}/>
                    </div>
                </footer>
            </div>
        )
    }
}
export default Contact