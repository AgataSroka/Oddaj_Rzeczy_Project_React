import React, {Component} from "react";
import decoration from "../../../assets/assets/Decoration.svg";
import '../../../scss/Home/WhoWeHelp/WhoWeHelp.scss'

const spanFoundation =  <span className="help_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim bibendum tempus.
                        Donec bibendum sagittis finibus.
                        Vestibulum luctus, sapien et mattis dictum, massa ligula laoreet sapien, a viverra.
                    </span>;
const spanOrganization =  <span className="help_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum ultrices dictum.
                       Quisque posuere eros vel justo malesuada molestie. Vivamus cursus dui libero,
                        at sodales mi consequat at.
                    </span>;
const spanLocal =  <span className="help_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis cursus justo, sed feugiat risus.
                        Phasellus rhoncus mauris nec ex elementum, nec varius urna fermentum.
                        Phasellus euismod, ipsum.
                    </span>;

class WhoWeHelp extends Component{
    state={
        border_1:'border',
        border_2: 'none',
        border_3: 'none',
        foundation: true,
        organization: false,
        local: false
    };
    handleClickFoundation=()=> {
    this.setState({border_1:'border', border_2: 'none', border_3: 'none',foundation: true, organization: false, local: false})
};
    handleClickOrganization=()=> {
        this.setState({border_1:'none', border_2:'border', border_3:'none', foundation: false, organization: true, local: false})
    };
    handleClickLocal=()=> {
        this.setState({border_1: 'none', border_2: 'none', border_3:'border', foundation: false, organization: false, local: true})
    };

    render(){

        return(
            <div className='who_we_help' name="WhoWeHelp">
                <div className='main_help'>
                    <h2>Komu pomagamy?</h2>
                    <img src={decoration} style={{width: '180px'}}/>
                    <div className='buttons'>
                        <button className={this.state.border_1} onClick={this.handleClickFoundation}>Fundacjom</button>
                        <button className={this.state.border_2} onClick={this.handleClickOrganization}>Organizacjom pozarządowym</button>
                        <button className={this.state.border_3} onClick={this.handleClickLocal} >Lokalnym zbiórkom</button>
                    </div>
                    <div className='help_background'>
                        {this.state.foundation && spanFoundation}
                        {this.state.organization && spanOrganization}
                        {this.state.local && spanLocal}
                    </div>
                </div>
                <div className='main_section'>
                    <div className='flex'>
                        <div>
                            <h3>Fundacja "Dbam o zdrowie"</h3>
                            <p> Cel i misja: pomoc osobom znajdującym się w trudnej sytuacji życiowej. </p>
                        </div>
                        <div className='right_section'>
                            <p style={{marginLeft: '160px'}} >ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                        </div>
                    </div>
                    <hr/>
                    <div className='flex'>
                        <div>
                            <h3>Fundacja "Dla dzieci"</h3>
                            <p> Cel i misja: Pomoc dzieciom z ubogich rodzin. </p>
                        </div>
                        <div className='right_section'>
                            <p  style={{marginLeft: '500px'}}>ubrania, meble, zabawki</p>
                        </div>
                    </div>
                    <hr/>
                    <div className='flex'>
                        <div>
                            <h3>Fundacja "Bez domu"</h3>
                            <p> Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania. </p>
                        </div>
                        <div className='right_section'>
                            <p style={{marginLeft: '300px'}}>ubrania, jedzenie, ciepłe koce</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default WhoWeHelp