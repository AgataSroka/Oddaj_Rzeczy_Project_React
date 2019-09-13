import React, {Component} from "react";
import decoration from "../../../assets/assets/Decoration.svg";
import '../../../scss/Home/WhoWeHelp/WhoWeHelp.scss'

class WhoWeHelp extends Component{
    render(){
        return(
            <div className='who_we_help' name="WhoWeHelp">
                <div className='main_help'>
                    <h3>Komu pomagamy?</h3>
                    <img src={decoration} style={{width: '200px'}}/>
                    <div className='buttons'>
                        <button>Fundacjom</button>
                        <button>Organizacjom pozarządowym</button>
                        <button>Lokalnym zbiórkom</button>
                    </div>
                    <div className='help_background'>
                    <span className="help_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim bibendum tempus.
                        Donec bibendum sagittis finibus.
                        Vestibulum luctus, sapien et mattis dictum, massa ligula laoreet sapien, a viverra.
                    </span>
                    </div>
                </div>
                <div></div>
            </div>
        )
    }
}
export default WhoWeHelp