import React, {Component} from 'react';
import '../../../scss/Home/Contact/Contact.scss'
import decoration from "../../../assets/assets/Decoration.svg";
import Footer from "../Footer/Footer";


const emailReg = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;
const nameReg = /^[a-zA-Z]{2,}$/;

class Contact extends Component{
    state={
        name: '',
        email: '',
        message: '',
        errorName: false,
        errorEmail: false,
        errorMessage: false,
        sendForm: false
    };
    handleNameChange = e => {
        this.setState({name: e.target.value});
    };
    handleEmailChange = e => {
        this.setState({email: e.target.value});
    };
    handleMessageChange = e => {
        this.setState({message: e.target.value});
    };
    handleSubmit = e =>{

        this.setState({errorName: false});
        this.setState({errorEmail:false});
        this.setState({errorMessage: false});
        this.setState({sendForm: false});

        const name = this.state.name;
        const email = this.state.email;
        const message = this.state.message;
        const url =  `https://fer-api.coderslab.pl/v1/portfolio/contact`;
        e.preventDefault();

        fetch(url,{
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: this.state.name, email: this.state.email, message:this.state.message})
        })
        .then(function (value) {
            console.log(value)
        })
            .catch(function (error) {
                console.log(error)
            });

        if(nameReg.test(name) && emailReg.test(email) && message.length >= 120) {
            this.setState({sendForm: true})
        } else {
            if(!nameReg.test(name)){
                this.setState({errorName: true})
            }
            if(!emailReg.test(email)){
                this.setState({errorEmail: true})
            }if(message.length < 120){
                this.setState({errorMessage: true})
            }
        }
    };

    render(){

        return(

            <div className='contact' name="Contact">
              <div className='main_contact'>
                  <h2 style={{paddingTop: '180px'}}>Skontaktuj się z nami</h2>
                  <img src={decoration} style={{width: '180px'}}/>
                  <br/>
                  {this.state.sendForm && <span className='form_success'> Wiadomość została wysłana!<br/> Wkrótce się skontaktujemy. </span>}
                  <form onSubmit={this.handleSubmit}>
                      <div className='form_flex'>
                          <div style={{display: 'block'}}>
                          <label>Wpisz swoje imię</label> <br/>
                           <input type='text' placeholder='Krzysztof' onChange={this.handleNameChange}/>
                              {this.state.errorName && <span className='form_valid'> Podane imię jest nieprawidłowe </span>}
                          </div>
                          <div style={{display: 'block'}}>
                          <label>Wpisz swój e-mail</label> <br/>
                           <input type='email' placeholder='abc@xyz.pl' onChange={this.handleEmailChange}/>
                              {this.state.errorEmail && <span className='form_valid'> Podany email jest nieprawidłowy </span>}
                          </div>
                      </div>
                         <label style={{marginRight: '240px'}}>Wpisz swoją wiadomość</label> <br/>
                         <textarea onChange={this.handleMessageChange} cols='50' rows='4' placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur."
                        />
                      {this.state.errorMessage && <span className='form_valid'> Wiadomość musi mieć conajmniej 120 znaków! </span>}
                      <input className='button' type='submit' value='Wyślij'/>
                  </form>
              </div>
                <Footer/>
            </div>
        )
    }
}
export default Contact

