import React, {Component} from 'react';
import Header from "./Header/Header";
import '../../scss/Home/Home.scss';
import ThreeColumns from'./ThreeColumns/ThreeColumns';
import WhoWeHelp from './WhoWeHelp/WhoWeHelp';
import AboutUs from './AboutUs/AboutUs';
import SimpleSteps from './SimpleSteps/SimpleSteps';
import Contact from "./Contact/Contact";



class Home extends Component{
render(){
    return(
        <>
            <Header/>
            <ThreeColumns/>
            <SimpleSteps/>
            <AboutUs/>
            <WhoWeHelp/>
            <Contact/>
        </>
    )
}
}
export default Home

